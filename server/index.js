const express=require("express");
const http=require("http");
const WebSocket=require("ws");
const crypto=require("crypto");
const path=require("path");
const app=express(),server=http.createServer(app),wss=new WebSocket.Server({server}),rooms=new Map();
const usbCode=String(Math.floor(100000+Math.random()*900000));
app.use(express.json());
app.use(express.static(path.join(__dirname,"..","web"),{etag:false,setHeaders:(res)=>res.setHeader("Cache-Control","no-store, no-cache, must-revalidate, proxy-revalidate")}));
app.get("/health",(req,res)=>res.json({ok:true,service:"Work Camera"}));
app.get("/api/usb-code",(req,res)=>res.json({code:usbCode}));
app.get("/usb.html",(req,res)=>{res.setHeader("Cache-Control","no-store, no-cache, must-revalidate, proxy-revalidate");res.setHeader("Pragma","no-cache");res.sendFile(path.join(__dirname,"..","web","phone-player.html"));});
app.post("/api/invite",(req,res)=>{const id=crypto.randomBytes(6).toString("base64url");rooms.set(id,{owner:null,member:null});res.json({room:id})});
app.get("/join/:room",(req,res)=>res.sendFile(path.join(__dirname,"..","web","member.html")));
app.get("/view/:room",(req,res)=>res.sendFile(path.join(__dirname,"..","web","owner.html")));
function send(ws,msg){if(ws&&ws.readyState===WebSocket.OPEN)ws.send(JSON.stringify(msg))}
function usbRoom(){let r=rooms.get("usb-local");if(!r){r={phone:null,usbViewer:null,phoneLive:false};rooms.set("usb-local",r)}return r}
function validVideoUrl(v){try{const u=new URL(String(v));return u.protocol==="http:"||u.protocol==="https:"}catch{return false}}
wss.on("connection",ws=>{ws.on("message",(raw,isBinary)=>{if(isBinary){const r=ws.room;if(ws.usbRole==="phone"&&r?.usbViewer?.readyState===WebSocket.OPEN){r.phoneLive=true;r.usbViewer.send(raw)}return}let m;try{m=JSON.parse(raw)}catch{return}
if(m.type==="usb"){const r=usbRoom();
if(m.role==="phone"){ws.usbRole="phone";r.phone=ws;ws.room=r;send(ws,{type:"usb-code",code:usbCode});if(r.usbViewer)send(ws,{type:"usb-ready"});return}
if(m.role==="pc"){if(String(m.code)!==usbCode){send(ws,{type:"usb-error",message:"Invalid code"});return}r.usbViewer=ws;ws.usbRole="pc";ws.room=r;r.phoneLive=false;send(ws,{type:"usb-ready"});if(r.phone)send(r.phone,{type:"usb-ready"});return}
if(m.role==="video"){if(ws.usbRole!=="pc"||String(m.code)!==usbCode){send(ws,{type:"usb-error",message:"PC is not paired"});return}if(!validVideoUrl(m.url)){send(ws,{type:"usb-error",message:"Enter a valid http/https video URL"});return}if(!r.phone){send(ws,{type:"usb-error",message:"Phone is not connected"});return}send(r.phone,{type:"video",url:String(m.url)});send(ws,{type:"video-sent",url:String(m.url)});return}
if(m.role==="meta"){if(ws.usbRole==="phone"&&r.usbViewer)send(r.usbViewer,m);return}
if(m.role==="stop"){r.phoneLive=false;if(r.usbViewer)send(r.usbViewer,{type:"usb-stop"});return}return}
const r=rooms.get(m.room);if(!r)return;if(m.role==="owner")r.owner=ws;if(m.role==="member")r.member=ws;ws.room=r;send(ws,{type:"role",role:m.role});if(r.owner&&r.member){send(r.owner,{type:"peer-ready"});send(r.member,{type:"peer-ready"})}if(m.to)send(m.to==="owner"?r.owner:r.member,m)});
ws.on("close",()=>{const r=ws.room;if(!r)return;if(r.owner===ws)r.owner=null;if(r.member===ws)r.member=null;if(r.phone===ws){r.phone=null;r.phoneLive=false;if(r.usbViewer)send(r.usbViewer,{type:"usb-stop"})}if(r.usbViewer===ws)r.usbViewer=null})});
server.listen(Number(process.env.PORT||4872),"0.0.0.0",()=>console.log("Work Camera server: http://localhost:"+Number(process.env.PORT||4872)));