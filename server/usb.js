const {spawn}=require("child_process");
const http=require("http");
const path=require("path");
const PORT=Number(process.env.PORT||4872);
function wait(){return new Promise((resolve,reject)=>{const t=Date.now();const f=()=>{const r=http.get("http://127.0.0.1:"+PORT+"/health",x=>{if(x.statusCode===200)return resolve();x.resume();setTimeout(f,250)});r.on("error",()=>Date.now()-t>15000?reject(new Error("Server did not start.")):setTimeout(f,250))};f()})}
function adb(args){return new Promise(resolve=>{const p=spawn(process.platform==="win32"?"adb":"adb",args,{stdio:["ignore","pipe","pipe"]});let out="",err="";p.stdout.on("data",d=>out+=d);p.stderr.on("data",d=>err+=d);p.on("close",code=>resolve({ok:code===0,out:out.trim(),error:err.trim()}));p.on("error",e=>resolve({ok:false,error:e.message}))})}
async function openPhonePage(){
  const url="http://127.0.0.1:"+PORT+"/usb.html";
  const r=await adb(["shell","am","start","-a","android.intent.action.VIEW","-d",url]);
  return r;
}
(async()=>{
  const p=spawn(process.execPath,[path.join(__dirname,"index.js")],{stdio:"inherit"});
  try{
    await wait();
    const a=await adb(["reverse","tcp:"+PORT,"tcp:"+PORT]);
    console.log("\nWORK CAMERA USB\nPhone URL: "+("http://127.0.0.1:"+PORT+"/usb.html")+"\n");
    if(a.ok){
      console.log("ADB reverse: connected.");
      const opened=await openPhonePage();
      console.log(opened.ok?"Phone camera page: OPENED automatically.":"Phone auto-open failed: "+opened.error);
    }else{
      console.log("ADB reverse failed: "+a.error+"\nInstall Android platform-tools / ensure USB debugging is enabled.");
    }
    console.log("Camera permission remains visible and must be granted by the phone user.\n");
    process.on("SIGINT",()=>{p.kill();process.exit(0)});
  }catch(e){
    console.error(e.message);
    p.kill();
    process.exit(1)
  }
})()