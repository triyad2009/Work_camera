const express=require("express");
const http=require("http");
const WebSocket=require("ws");
const crypto=require("crypto");
const path=require("path");
const app=express();
const server=http.createServer(app);
const wss=new WebSocket.Server({server});
const rooms=new Map();
app.use(express.json());
app.use(express.static(path.join(__dirname,"..","web")));
app.get("/health",(req,res)=>res.json({ok:true,service:"Work Camera"}));
app.post("/api/invite",(req,res)=>{const id=crypto.randomBytes(6).toString("base64url");rooms.set(id,{owner:null,member:null});res.json({room:id});});
app.get("/join/:room",(req,res)=>res.sendFile(path.join(__dirname,"..","web","member.html")));
app.get("/view/:room",(req,res)=>res.sendFile(path.join(__dirname,"..","web","owner.html")));
function send(ws,msg){if(ws&&ws.readyState===WebSocket.OPEN)ws.send(JSON.stringify(msg));}
wss.on("connection",ws=>{ws.on("message",(raw,isBinary)=>{if(isBinary){const r=ws.room;if(r?.usbViewer&&r.usbViewer.readyState===WebSocket.OPEN)r.usbViewer.send(raw);return;}let m;try{m=JSON.parse(raw)}catch{return;}if(m.type==="usb"){
const room=rooms.get("usb-local")||{owner:null,member:null};rooms.set("usb-local",room);
if(m.role==="phone"){room.member=ws;ws.room=room;send(ws,{type:"usb-ready",ok:true});if(room.owner)send(room.owner,{type:"usb-phone-ready"});}
if(m.role==="pc"){room.owner=ws;room.usbViewer=ws;ws.room=room;send(ws,{type:"usb-ready",ok:true});if(room.member)send(room.member,{type:"usb-pc-ready"});}
if(m.role==="meta"&&room.usbViewer)send(room.usbViewer,m);return;}
const room=rooms.get(m.room);if(!room)return;if(m.role==="owner")room.owner=ws;if(m.role==="member")room.member=ws;ws.room=room;send(ws,{type:"role",role:m.role});if(room.owner&&room.member){send(room.owner,{type:"peer-ready"});send(room.member,{type:"peer-ready"});}if(m.to){const target=m.to==="owner"?room.owner:room.member;send(target,m);}});ws.on("close",()=>{const r=ws.room;if(!r)return;if(r.owner===ws)r.owner=null;if(r.member===ws)r.member=null;if(r.usbViewer===ws)r.usbViewer=null;});});
server.listen(Number(process.env.PORT||4872),"0.0.0.0",()=>console.log("Work Camera server: http://localhost:"+Number(process.env.PORT||4872)));
