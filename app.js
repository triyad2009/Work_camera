const TOTAL=210;
const DIMS=["Goals","Career","Finance","Education","Discipline","Leadership","Creativity","Risk Tolerance","Relationships","Well-being","Time Capacity","Growth"];
const cats=[
["Goals & Dreams","Goals",["meaningful outcome","ambition that keeps returning","thing you would build if you could learn","future result that matters privately","regret you want to avoid","five-year destination","kind of progress that excites you","change that would make life intentional","dream needing protected time","your definition of success","change that unlocks other goals","goal needing a deadline","trade-off you accept for a major goal","pursuit if resources were abundant"]],
["Values & Priorities","Growth",["value for hard decisions","thing success must not sacrifice","priority needing more attention","principle you want to operate by","achievement that feels satisfying","what you want remembered for","trade-off acceptable for progress","what makes a decision feel right","what makes life rich without flash","neglected priority","boundary that protects values","responsibility before ambition","your meaning of enough","belief worth revisiting"]],
["Personality & Mindset","Growth",["response to uncertainty","reaction when plans fail","environment for your best thinking","comfort with changing your mind","source of momentum","response to criticism","preference for structure or freedom","approach to unfamiliar people","source of confidence","focus drain","important-decision style","recovery after setbacks","response to boring necessary work","mindset to strengthen"]],
["Strengths & Weaknesses","Creativity",["ability others rely on","problem you solve naturally","area where you perform well","weakness slowing you down","skill that feels easy","feedback you hear repeatedly","place needing systems not motivation","underused strength","challenge revealing your best ability","task you avoid despite capability","ability you want to master","place needing support","habit that amplifies strengths","limitation to design around"]],
["Education & Knowledge","Education",["thing you want to understand deeply","subject that could change opportunities","preferred learning method","useful credential or proof","knowledge gap costing time","subject you would study without exams","weekly learning capacity","learning project worth finishing","place a mentor helps","technical skill to build","communication skill to improve","how you verify learning","learning that is distraction","way to make learning practical"]],
["Career & Work","Career",["work worth becoming excellent at","career direction fitting lifestyle","what matters in your next role","amount of autonomy you need","team environment you thrive in","professional problem to own","specialize or combine disciplines","reason to change careers","proof of ability to build","professional relationship that could open a door","work to stop doing","importance of remote flexibility","sustainable career definition","ideal workweek"]],
["Finance & Security","Finance",["financial outcome that matters","importance of income stability","financial skill to improve","expense needing attention","meaning of financial freedom","comfort with calculated risk","preferred way to increase income","importance of an emergency buffer","financial goal with deadline","purchase or investment needing thought","one income or several","time available to earn more","financial habit that compounds","healthy relationship with money"]],
["Skills & Capability","Growth",["skill creating biggest opportunity","skill to practice daily","capability making you independent","area needing deliberate practice","skill that could become a service","thing you want to build","tool to master","communication ability multiplying impact","skill becoming valuable in your field","skill making you harder to replace","how you measure skill progress","who should give feedback","skill you can demonstrate publicly","next skill milestone"]],
["Time & Habits","Time Capacity",["where usable time goes","habit with most leverage","thing stealing attention","time of best focus","uninterrupted work you can protect","routine simplifying life","morning action","weekly action","commitment needing a time boundary","recovery after overload","thing to automate or delegate","habit with highest downside","how you plan priorities","sustainable day"]],
["Relationships & Social Life","Relationships",["relationship needing intentional time","people who help you grow","conflict-resolution style","social environment where you belong","relationship boundary that helps","importance of community","person to reconnect with","collaboration that energizes","how you show appreciation","support you need","habit improving trust","solitude you need","network you want","community contribution"]],
["Family & Responsibilities","Relationships",["family responsibility shaping plans","how ambition fits family","support you want to provide","responsibility needing a system","family goal that matters","boundary you need","what makes family stable","weekly family time","decision needing family input","support you should ask for","independence vs responsibility","tradition worth preserving","future responsibility to prepare for","meaning of dependable"]],
["Lifestyle & Environment","Well-being",["place where you feel alive","lifestyle choice affecting happiness","importance of location flexibility","ideal ordinary day","environment hurting productivity","level of simplicity you want","importance of travel","home that supports goals","lifestyle expense worth it","amount of novelty you need","weekend feeling","convenience freeing time","pace of life","first lifestyle change"]],
["Well-being & Energy","Well-being",["thing improving energy","routine needing protection","sign of overextension","way you reset","importance of consistent sleep","movement you enjoy","downtime that restores","stressor needing a boundary","how you want energy to feel","environment supporting calm focus","habit that makes you feel better","thing to reduce for capacity","balance of ambition and recovery","sustainable pace"]],
["Entrepreneurship & Projects","Risk Tolerance",["thing you would build","problem that could become a product","amount of uncertainty you tolerate","launch fast or perfect","test before investing","audience you understand","advantage you already have","thing to validate in 30 days","comfort with selling","project deserving an experiment","solo or team preference","reason to continue a project","response to failed idea","next build milestone"]],
["Motivation & Discipline","Discipline",["what makes you start","what keeps you going after novelty","commitment deserving consistency","accountability method","thing breaking momentum","reward for progress","deadline that works","distraction needing a hard rule","low-motivation-day strategy","promise to yourself","system making action easier","where consistency beats intensity","evidence of progress","what makes the next 30 days count"]]
];
const opts=[
["Make a bold move now","High action","action"],
["Build a reliable foundation first","Stability","stability"],
["Run a small experiment","Learning","experiment"],
["Get expert or peer input","Collaboration","social"],
["Protect balance and capacity","Sustainability","wellbeing"],
["Keep options open and gather evidence","Flexibility","exploration"]
];
function buildQuestions(){
 let out=[],id=1;
 const qFrames={
 "Goals & Dreams":"How important is {topic} to you right now?",
 "Values & Priorities":"When it comes to {topic}, which approach feels most right to you?",
 "Personality & Mindset":"When you face {topic}, what do you usually do?",
 "Strengths & Weaknesses":"When dealing with {topic}, which description fits you best?",
 "Education & Knowledge":"For {topic}, how would you like to learn or improve?",
 "Career & Work":"For {topic}, which work approach fits you best?",
 "Finance & Security":"For {topic}, which financial approach feels most realistic?",
 "Skills & Capability":"For {topic}, which way of improving suits you best?",
 "Time & Habits":"For {topic}, which approach would work best for you?",
 "Relationships & Social Life":"When it comes to {topic}, which approach feels most like you?",
 "Family & Responsibilities":"For {topic}, which approach would help you most?",
 "Lifestyle & Environment":"For {topic}, which choice would make your daily life better?",
 "Well-being & Energy":"For {topic}, which approach would help you most?",
 "Entrepreneurship & Projects":"For {topic}, which way would you prefer to move forward?",
 "Motivation & Discipline":"For {topic}, which approach would help you stay consistent?"
 };
 const answerFrames=[
 ["Start working on {topic} now","Make a clear plan for {topic} first","Try a small version of {topic}","Ask an experienced person about {topic}","Protect enough time and energy for {topic}","Learn more before deciding about {topic}"]
 ];
 for(const [cat,dim,topics] of cats){
   topics.forEach(topic=>{
     const frame=qFrames[cat]||"How do you feel about {topic}?";
     const texts=answerFrames[0]; const bnTexts=["এখনই কাজ শুরু করব","আগে পরিষ্কার পরিকল্পনা করব","ছোটভাবে পরীক্ষা করে দেখব","অভিজ্ঞ কারও পরামর্শ নেব","সময় ও সক্ষমতার সঙ্গে মিলিয়ে করব","সিদ্ধান্তের আগে আরও তথ্য নেব"];
     out.push({
       id:id++,category:cat,dimension:dim,topic,
       text:frame.replace("{topic}",topic),
       options:texts.map((t,i)=>({id:String(i),text:t.replace("{topic}",topic),textBN:bnTexts[i],hint:["Take action","Make it practical","Learn by doing","Get another perspective","Protect balance","Gather evidence"][i],value:i,tags:[dim,cat]})).concat([
         {id:"other",text:"Other — explain it in your own words",hint:"Your own answer",value:0,other:true,tags:["Custom"]}
       ])
     });
   });
 }
 return out;
}
const questions=buildQuestions();
const DIMS_BN={"Goals":"লক্ষ্য","Career":"ক্যারিয়ার","Finance":"অর্থ","Education":"শিক্ষা","Discipline":"শৃঙ্খলা","Leadership":"নেতৃত্ব","Creativity":"সৃজনশীলতা","Risk Tolerance":"ঝুঁকি গ্রহণ","Relationships":"সম্পর্ক","Well-being":"সুস্থতা","Time Capacity":"সময় সক্ষমতা","Growth":"উন্নতি"};
const CAT_BN={"Goals & Dreams":"লক্ষ্য ও স্বপ্ন","Values & Priorities":"মূল্যবোধ ও অগ্রাধিকার","Personality & Mindset":"ব্যক্তিত্ব ও মানসিকতা","Strengths & Weaknesses":"শক্তি ও দুর্বলতা","Education & Knowledge":"শিক্ষা ও জ্ঞান","Career & Work":"ক্যারিয়ার ও কাজ","Finance & Security":"অর্থ ও নিরাপত্তা","Skills & Capability":"দক্ষতা ও সক্ষমতা","Time & Habits":"সময় ও অভ্যাস","Relationships & Social Life":"সম্পর্ক ও সামাজিক জীবন","Family & Responsibilities":"পরিবার ও দায়িত্ব","Lifestyle & Environment":"জীবনযাপন ও পরিবেশ","Well-being & Energy":"সুস্থতা ও শক্তি","Entrepreneurship & Projects":"উদ্যোক্তা ও প্রকল্প","Motivation & Discipline":"প্রেরণা ও শৃঙ্খলা"};
const UI={
 en:{meta:"Choose the answer that best matches you.",other:"Other — explain in your own words",placeholder:"Your answer…",back:"← Back",next:"Continue →",build:"Build my blueprint →",saved:"Saved",ready:"Ready"},
 bn:{meta:"আপনার সঙ্গে সবচেয়ে বেশি মেলে এমন উত্তরটি বেছে নিন।",other:"অন্যান্য — নিজের ভাষায় লিখুন",placeholder:"আপনার উত্তর…",back:"← পেছনে",next:"চালিয়ে যান →",build:"আমার ব্লুপ্রিন্ট তৈরি করুন →",saved:"সংরক্ষিত",ready:"প্রস্তুত"}
};
let lang=localStorage.getItem("lifeos-lang")||"bn";
let state={index:0,answers:{},started:false};
const $=id=>document.getElementById(id);
const screens={intro:$("intro"),assessment:$("assessment"),results:$("results")};

function save(){
 localStorage.setItem("lifeos-v2",JSON.stringify(state));
 if($("saveStatus")){ $("saveStatus").textContent=UI[lang].saved; setTimeout(()=>{if($("saveStatus"))$("saveStatus").textContent=UI[lang].ready},800); }
}
function load(){
 try{
  const raw=localStorage.getItem("lifeos-v2");
  if(!raw)return;
  const saved=JSON.parse(raw);
  if(saved&&saved.answers){
   state={index:Math.max(0,Math.min(Number(saved.index)||0,TOTAL-1)),answers:saved.answers,started:!!saved.started};
   $("resumeBtn").classList.remove("hidden");
  }
 }catch(e){localStorage.removeItem("lifeos-v2");}
}
function show(name){
 Object.values(screens).forEach(el=>el&&el.classList.remove("active"));
 if(screens[name])screens[name].classList.add("active");
 window.scrollTo({top:0,behavior:"smooth"});
}
function render(){
 const q=questions[state.index];
 if(!q)return;
 const a=state.answers[q.id]||{};
 const u=UI[lang];
 $("categoryLabel").textContent=(lang==="bn"?(CAT_BN[q.category]||q.category):q.category).toUpperCase();
 $("questionTitle").textContent=lang==="bn"?"আপনার "+q.topic+" নিয়ে কোনটি আপনার সঙ্গে সবচেয়ে বেশি মেলে?":q.text;
 $("currentNo").textContent=String(state.index+1);
 $("progressBar").style.width=((state.index+1)/TOTAL*100)+"%";
 $("questionMeta").textContent=u.meta;
 $("otherLabel").textContent=u.other;
 $("otherInput").placeholder=u.placeholder;
 $("otherInput").value=a.other||"";
 $("options").innerHTML=q.options.map(o=>{
   const selected=a.option===o.id;
   const label=lang==="bn"?(o.other?u.other:o.textBN):o.text;
   const hint=lang==="bn"?(o.other?"নিজের উত্তর":"একটি সম্ভাব্য পদ্ধতি"):o.hint;
   return '<button type="button" class="option '+(selected?"selected":"")+'" data-id="'+o.id+'"><span class="dot">✓</span><span><b>'+label+'</b><small>'+hint+'</small></span></button>';
 }).join("");
 document.querySelectorAll("#options .option").forEach(btn=>btn.addEventListener("click",()=>choose(btn.dataset.id)));
 $("otherWrap").classList.toggle("hidden",a.option!=="other");
 $("nextBtn").disabled=!a.option;
 $("nextBtn").textContent=state.index===TOTAL-1?u.build:u.next;
 $("backBtn").textContent=u.back;
 $("bnBtn").classList.toggle("active",lang==="bn");
 $("enBtn").classList.toggle("active",lang==="en");
}
function choose(id){
 const q=questions[state.index];
 state.answers[q.id]={option:id,other:id==="other"?$("otherInput").value:""};
 render();save();
 if(id==="other")$("otherInput").focus();
}
function next(){
 const q=questions[state.index];
 if(!state.answers[q.id]?.option)return;
 if(state.index<TOTAL-1){state.index++;render();save();}
 else{results();show("results");}
}
function score(){
 const sums=Object.fromEntries(DIMS.map(d=>[d,0]));
 const counts=Object.fromEntries(DIMS.map(d=>[d,0]));
 Object.entries(state.answers).forEach(([id,a])=>{
   const q=questions.find(x=>x.id===Number(id));
   const o=q&&q.options.find(x=>x.id===a.option);
   if(q&&o&&!o.other){sums[q.dimension]+=5-o.value;counts[q.dimension]+=5;}
 });
 return Object.fromEntries(DIMS.map(d=>[d,counts[d]?Math.round(sums[d]/counts[d]*100):0]));
}
function results(){
 const sc=score();
 const hi=[...Object.entries(sc)].sort((a,b)=>b[1]-a[1]).slice(0,4);
 const lo=[...Object.entries(sc)].sort((a,b)=>a[1]-b[1]).slice(0,4);
 $("resultSummary").textContent=lang==="bn"?"আপনার ফলাফল আপনার উত্তরগুলোর pattern দেখায়; এগুলো diagnosis বা ভবিষ্যদ্বাণী নয়।":"Your results summarize answer patterns; they are not diagnoses or predictions.";
 $("profileGrid").innerHTML=DIMS.map(d=>'<div class="profile-card"><div class="label">'+(lang==="bn"?(DIMS_BN[d]||d):d).toUpperCase()+'</div><div class="score">'+sc[d]+'</div><div class="meter"><span style="width:'+sc[d]+'%"></span></div></div>').join("");
 $("drivers").innerHTML="<ul>"+hi.map(x=>"<li><b>"+(lang==="bn"?(DIMS_BN[x[0]]||x[0]):x[0])+"</b> — "+x[1]+"/100</li>").join("")+"</ul>";
 $("bottlenecks").innerHTML="<ul>"+lo.map(x=>"<li><b>"+(lang==="bn"?(DIMS_BN[x[0]]||x[0]):x[0])+"</b> — "+x[1]+"/100</li>").join("")+"</ul>";
 $("roadmap").innerHTML=lang==="bn"?"<ul><li>একটি প্রধান ৯০ দিনের লক্ষ্য ঠিক করুন।</li><li>একটি measurable ৩০ দিনের milestone ঠিক করুন।</li><li>প্রতি সপ্তাহে ৩–৫টি focus block রাখুন।</li><li>প্রতি সপ্তাহে ফলাফল, বাধা ও পরবর্তী পদক্ষেপ review করুন।</li></ul>":"<ul><li>Choose one primary 90-day outcome.</li><li>Set one measurable 30-day milestone.</li><li>Protect 3–5 recurring focus blocks every week.</li><li>Review weekly: evidence, obstacle, next action.</li></ul>";
 $("promptOutput").value=makePrompt(sc,hi,lo);
 $("resultsEyebrow").textContent=lang==="bn"?"আপনার জীবন-ব্লুপ্রিন্ট":"YOUR LIFE BLUEPRINT";
 $("resultsTitle").textContent=lang==="bn"?"আপনার জীবনের আরও পরিষ্কার মানচিত্র":"A clearer map of what matters.";
 $("driversLabel").textContent=lang==="bn"?"প্রধান চালিকা শক্তি":"PRIMARY DRIVERS";
 $("bottlenecksLabel").textContent=lang==="bn"?"যেখানে system দরকার":"PRACTICAL BOTTLENECKS";
 $("roadmapLabel").textContent=lang==="bn"?"পরবর্তী ৯০ দিন":"NEXT 90 DAYS";
 $("promptTitle").textContent=lang==="bn"?"আপনার blueprint যেকোনো AI-তে ব্যবহার করুন":"Take your blueprint to any AI.";
 $("copyBtn").textContent=lang==="bn"?"Prompt কপি করুন":"Copy prompt";
 $("downloadBtn").textContent=lang==="bn"?".txt ডাউনলোড":"Download .txt";
 $("retakeBtn").textContent=lang==="bn"?"আবার assessment দিন":"Retake assessment";
}
function makePrompt(sc,hi,lo){
 let p=lang==="bn"?"আপনি আমার Life Strategy AI। আমার সিদ্ধান্ত আমার; আপনি নিরপেক্ষভাবে তথ্য, trade-off এবং বাস্তব পরিকল্পনা দিন।\n\nLIFEOS PROFILE\n":"You are my Life Strategy AI. My decisions are mine; give me neutral information, trade-offs and practical plans.\n\nLIFEOS PROFILE\n";
 DIMS.forEach(d=>p+="- "+(lang==="bn"?(DIMS_BN[d]||d):d)+": "+sc[d]+"/100\n");
 p+="\n"+(lang==="bn"?"প্রধান signal:\n":"STRONGEST SIGNALS\n");
 hi.forEach(x=>p+="- "+(lang==="bn"?(DIMS_BN[x[0]]||x[0]):x[0])+": "+x[1]+"/100\n");
 p+="\n"+(lang==="bn"?"যেসব জায়গায় system দরকার হতে পারে:\n":"AREAS THAT MAY NEED SYSTEMS\n");
 lo.forEach(x=>p+="- "+(lang==="bn"?(DIMS_BN[x[0]]||x[0]):x[0])+": "+x[1]+"/100\n");
 p+="\n"+(lang==="bn"?"৫ বছর → ১ বছর → ৯০ দিন → ৩০ দিন → ৭ দিনের পরিকল্পনা তৈরি করুন। প্রতিটি লক্ষ্যতে outcome, metric, deadline, first action, recurring action, obstacle ও fallback দিন।":"Build a 5-year → 1-year → 90-day → 30-day → 7-day plan. For each goal include outcome, metric, deadline, first action, recurring action, obstacle and fallback.");
 return p;
}
function setLanguage(nextLang){
 lang=nextLang;
 localStorage.setItem("lifeos-lang",lang);
 render();
 if(screens.results.classList.contains("active"))results();
}
function resetAll(){
 if(!confirm(lang==="bn"?"সব saved progress মুছে ফেলবেন?":"Reset all saved progress?"))return;
 localStorage.removeItem("lifeos-v2");
 localStorage.removeItem("lifeos-v1");
 state={index:0,answers:{},started:false};
 $("resumeBtn").classList.add("hidden");
 show("intro");
}
function downloadPrompt(){
 const blob=new Blob([$("promptOutput").value],{type:"text/plain;charset=utf-8"});
 const url=URL.createObjectURL(blob);
 const a=document.createElement("a");a.href=url;a.download="lifeos-master-prompt.txt";document.body.appendChild(a);a.click();a.remove();
 setTimeout(()=>URL.revokeObjectURL(url),1000);
}
async function copyPrompt(){
 try{await navigator.clipboard.writeText($("promptOutput").value);}
 catch(e){$("promptOutput").select();document.execCommand("copy");}
 $("copyBtn").textContent=lang==="bn"?"কপি হয়েছে ✓":"Copied ✓";
 setTimeout(()=>{$("copyBtn").textContent=lang==="bn"?"Prompt কপি করুন":"Copy prompt";},1200);
}
function init(){
 $("startBtn").addEventListener("click",()=>{state={index:0,answers:{},started:true};save();show("assessment");render();});
 $("resumeBtn").addEventListener("click",()=>{show("assessment");render();});
 $("resetBtn").addEventListener("click",resetAll);
 $("backBtn").addEventListener("click",()=>{if(state.index>0){state.index--;render();save();}});
 $("nextBtn").addEventListener("click",next);
 $("otherInput").addEventListener("input",()=>{const q=questions[state.index];if(state.answers[q.id]){state.answers[q.id].other=$("otherInput").value;save();}});
 $("retakeBtn").addEventListener("click",()=>{state={index:0,answers:{},started:true};save();show("assessment");render();});
 $("copyBtn").addEventListener("click",copyPrompt);
 $("downloadBtn").addEventListener("click",downloadPrompt);
 $("chatgptBtn").addEventListener("click",()=>window.open("https://chatgpt.com/","_blank"));
 $("claudeBtn").addEventListener("click",()=>window.open("https://claude.ai/","_blank"));
 $("geminiBtn").addEventListener("click",()=>window.open("https://gemini.google.com/","_blank"));
 $("bnBtn").addEventListener("click",()=>setLanguage("bn"));
 $("enBtn").addEventListener("click",()=>setLanguage("en"));
 load();
 render();
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
