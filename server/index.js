const express=require("express");
const http=require("http");
const WebSocket=require("ws");
const crypto=require("crypto");
const path=require("path");
const app=express();
const server=http.createServer(app);
const wss=new WebSocket.Server({server});
const rooms=new Map();
const usbCode=String(Math.floor(100000+Math.random()*900000));
app.use(express.json());
app.use(express.static(path.join(__dirname,"..","web")));
app.get("/health",(req,res)=>res.json({ok:true,service:"Work Camera"}));
app.get("/api/usb-code",(req,res)=>res.json({code:usbCode}));
app.post("/api/invite",(req,res)=>{const id=crypto.randomBytes(6).toString("base64url");rooms.set(id,{owner:null,member:null});res.json({room:id});});
app.get("/join/:room",(req,res)=>res.sendFile(path.join(__dirname,"..","web","member.html")));
app.get("/view/:room",(req,res)=>res.sendFile(path.join(__dirname,"..","web","owner.html")));
function send(ws,msg){if(ws&&ws.readyState===WebSocket.OPEN)ws.send(JSON.stringify(msg));}
wss.on("connection",ws=>{ws.on("message",(raw,isBinary)=>{if(isBinary){const r=ws.room;if(r?.usbViewer&&r.usbViewer.readyState===WebSocket.OPEN)r.usbViewer.send(raw);return;}let m;try{m=JSON.parse(raw)}catch{return;}if(m.type==="usb"){
if(m.role==="phone"){ws.usbRole="phone";send(ws,{type:"usb-code",code:usbCode});return;}
if(m.role==="pc"){if(String(m.code)!==usbCode){send(ws,{type:"usb-error",message:"Invalid code"});return;}const room=rooms.get("usb-local")||{phone:null,usbViewer:null};rooms.set("usb-local",room);room.usbViewer=ws;ws.room=room;send(ws,{type:"usb-ready"});if(room.phone)send(room.phone,{type:"usb-ready"});return;}
if(m.role==="pair"){const room=rooms.get("usb-local")||{phone:null,usbViewer:null};rooms.set("usb-local",room);if(String(m.code)===usbCode&&ws.usbRole==="phone"){room.phone=ws;ws.room=room;if(room.usbViewer)send(ws,{type:"usb-ready"});}return;}
if(m.role==="meta"){const room=ws.room;if(room?.usbViewer)send(room.usbViewer,m);return;}return;}
const room=rooms.get(m.room);if(!room)return;if(m.role==="owner")room.owner=ws;if(m.role==="member")room.member=ws;ws.room=room;send(ws,{type:"role",role:m.role});if(room.owner&&room.member){send(room.owner,{type:"peer-ready"});send(room.member,{type:"peer-ready"});}if(m.to){const target=m.to==="owner"?room.owner:room.member;send(target,m);}});ws.on("close",()=>{const r=ws.room;if(!r)return;if(r.owner===ws)r.owner=null;if(r.member===ws)r.member=null;if(r.usbViewer===ws)r.usbViewer=null;});});
server.listen(Number(process.env.PORT||4872),"0.0.0.0",()=>console.log("Work Camera server: http://localhost:"+Number(process.env.PORT||4872)));
