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
     const texts=answerFrames[0];
     out.push({
       id:id++,category:cat,dimension:dim,topic,
       text:frame.replace("{topic}",topic),
       options:texts.map((t,i)=>({id:String(i),text:t.replace("{topic}",topic),hint:["Take action","Make it practical","Learn by doing","Get another perspective","Protect balance","Gather evidence"][i],value:i,tags:[dim,cat]})).concat([
         {id:"other",text:"Other — explain it in your own words",hint:"Your own answer",value:0,other:true,tags:["Custom"]}
       ])
     });
   });
 }
 return out;
}
const questions=buildQuestions();
let state={index:0,answers:{},started:false};
const $=id=>document.getElementById(id);
const screens={intro:$("intro"),assessment:$("assessment"),results:$("results")};
function save(){localStorage.setItem("lifeos-v1",JSON.stringify(state));$("saveStatus").textContent="Saved";setTimeout(()=>$("saveStatus").textContent="Ready",900)}
function load(){try{const s=JSON.parse(localStorage.getItem("lifeos-v1"));if(s&&s.answers){state=s;$("resumeBtn").classList.remove("hidden")}}catch(e){}}
function show(k){Object.values(screens).forEach(x=>x.classList.remove("active"));screens[k].classList.add("active");scrollTo({top:0,behavior:"smooth"})}
function render(){const q=questions[state.index],a=state.answers[q.id]||{};$("categoryLabel").textContent=q.category.toUpperCase();$("questionTitle").textContent=q.text;$("currentNo").textContent=state.index+1;$("progressBar").style.width=((state.index+1)/TOTAL*100)+"%";$("questionMeta").textContent="Choose the answer that best matches you. Each choice contributes to your multidimensional profile.";$("options").innerHTML=q.options.map(o=>'<button class="option '+(a.option===o.id?"selected":"")+'" data-id="'+o.id+'"><span class="dot">✓</span><span><b>'+o.text+'</b><small>'+o.hint+'</small></span></button>').join("");$("otherWrap").classList.toggle("hidden",a.option!=="other");$("otherInput").value=a.other||"";$("nextBtn").disabled=!a.option;$("nextBtn").textContent=state.index===TOTAL-1?"Build my blueprint →":"Continue →";document.querySelectorAll(".option").forEach(b=>b.onclick=()=>choose(b.dataset.id))}
function choose(id){const q=questions[state.index];state.answers[q.id]={option:id,other:id==="other"?$("otherInput").value:""};render();save()}
$("otherInput").oninput=()=>{const q=questions[state.index];if(state.answers[q.id]){state.answers[q.id].other=$("otherInput").value;save()}};
$("startBtn").onclick=()=>{state={index:0,answers:{},started:true};save();show("assessment");render()};
$("resumeBtn").onclick=()=>{show("assessment");render()};
$("resetBtn").onclick=()=>{if(confirm("Reset all saved LifeOS progress?")){localStorage.removeItem("lifeos-v1");state={index:0,answers:{},started:false};$("resumeBtn").classList.add("hidden");show("intro")}};
$("backBtn").onclick=()=>{if(state.index){state.index--;render();save()}};
$("nextBtn").onclick=()=>{if(!state.answers[questions[state.index].id]?.option)return;if(state.index<TOTAL-1){state.index++;render();save()}else{results();show("results")}};
$("retakeBtn").onclick=()=>{state={index:0,answers:{},started:true};save();show("assessment");render()};
function score(){const s=Object.fromEntries(DIMS.map(d=>[d,0])),c=Object.fromEntries(DIMS.map(d=>[d,0]));Object.entries(state.answers).forEach(([id,a])=>{const q=questions.find(x=>x.id==id),o=q&&q.options.find(x=>x.id===a.option);if(q&&o){s[q.dimension]+=10-o.value;c[q.dimension]+=10}});const n={};DIMS.forEach(d=>n[d]=Math.round(s[d]/Math.max(1,c[d])*100));return n}
function sorted(s,asc){return Object.entries(s).sort((a,b)=>asc?a[1]-b[1]:b[1]-a[1])}
function results(){const s=score(),hi=sorted(s,false).slice(0,4),lo=sorted(s,true).slice(0,4);$("resultSummary").textContent="Your scores summarize answer patterns; they are not diagnoses or predictions. Use them to ask better questions, choose priorities and design experiments."; $("profileGrid").innerHTML=DIMS.map(d=>'<div class="profile-card"><div class="label">'+d.toUpperCase()+'</div><div class="score">'+s[d]+'</div><div class="meter"><span style="width:'+s[d]+'%"></span></div></div>').join("");$("drivers").innerHTML="<ul>"+hi.map(x=>"<li><b>"+x[0]+"</b> — "+x[1]+"/100 signal.</li>").join("")+"</ul>";$("bottlenecks").innerHTML="<ul>"+lo.map(x=>"<li><b>"+x[0]+"</b> — create a small supporting system here.</li>").join("")+"</ul>";$("roadmap").innerHTML="<ul><li>Choose one primary 90-day outcome.</li><li>Set one measurable 30-day milestone.</li><li>Protect 3–5 recurring focus blocks every week.</li><li>Review weekly: evidence, obstacle, next action.</li></ul>";$("promptOutput").value=prompt(s,hi,lo)}
function prompt(s,hi,lo){let p="You are my Life Strategy AI. Help me make informed, practical decisions without predicting my future or making decisions for me.\n\n";p+="MY LIFEOS PROFILE\n";DIMS.forEach(d=>p+="- "+d+": "+s[d]+"/100\n");p+="\nSTRONGEST SIGNALS\n";hi.forEach(x=>p+="- "+x[0]+": "+x[1]+"/100\n");p+="\nAREAS THAT MAY NEED SYSTEMS\n";lo.forEach(x=>p+="- "+x[0]+": "+x[1]+"/100\n");p+="\nINSTRUCTIONS\n1. Summarize patterns without overclaiming.\n2. Identify 3–5 priorities consistent with my stated answers.\n3. Explain trade-offs and uncertainties.\n4. Build a 5-year direction, then a 1-year, 90-day, 30-day and weekly plan.\n5. For each goal give outcome, metric, deadline, first action, recurring action, obstacle and fallback.\n6. Separate must-do, should-do and nice-to-do.\n7. If answers conflict, point out the conflict and ask a focused question.\n8. Prefer small experiments before irreversible commitments.\n9. Do not claim any career, relationship, location or financial choice guarantees success or happiness.\n10. End with a 7-day action checklist.\n\nRAW ANSWERS\n";Object.entries(state.answers).forEach(([id,a])=>{const q=questions.find(x=>x.id==id),o=q&&q.options.find(x=>x.id===a.option);if(q)p+="Q"+id+": "+q.text+" | A: "+(o?o.text:"")+(a.other?" — "+a.other:"")+"\n"});return p}
$("copyBtn").onclick=async()=>{await navigator.clipboard.writeText($("promptOutput").value);$("copyBtn").textContent="Copied ✓";setTimeout(()=>$("copyBtn").textContent="Copy prompt",1500)};
$("downloadBtn").onclick=()=>{const b=new Blob([$("promptOutput").value],{type:"text/plain"}),a=document.createElement("a");a.href=URL.createObjectURL(b);a.download="lifeos-master-prompt.txt";a.click()};
$("chatgptBtn").onclick=()=>open("https://chatgpt.com/","_blank");$("claudeBtn").onclick=()=>open("https://claude.ai/","_blank");$("geminiBtn").onclick=()=>open("https://gemini.google.com/","_blank");load();