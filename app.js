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
let lang=localStorage.getItem("lifeos-lang")||"bn";
const BN_CAT={"Goals & Dreams":"লক্ষ্য ও স্বপ্ন","Values & Priorities":"মূল্যবোধ ও অগ্রাধিকার","Personality & Mindset":"ব্যক্তিত্ব ও মানসিকতা","Strengths & Weaknesses":"শক্তি ও দুর্বলতা","Education & Knowledge":"শিক্ষা ও জ্ঞান","Career & Work":"ক্যারিয়ার ও কাজ","Finance & Security":"অর্থ ও নিরাপত্তা","Skills & Capability":"দক্ষতা ও সক্ষমতা","Time & Habits":"সময় ও অভ্যাস","Relationships & Social Life":"সম্পর্ক ও সামাজিক জীবন","Family & Responsibilities":"পরিবার ও দায়িত্ব","Lifestyle & Environment":"জীবনযাপন ও পরিবেশ","Well-being & Energy":"সুস্থতা ও শক্তি","Entrepreneurship & Projects":"উদ্যোক্তা ও প্রকল্প","Motivation & Discipline":"প্রেরণা ও শৃঙ্খলা"};
const UI={en:{meta:"Choose the answer that best matches you.",other:"Other — explain it in your own words",placeholder:"Your answer…",back:"← Back",next:"Continue →",build:"Build my blueprint →"},bn:{meta:"আপনার সঙ্গে সবচেয়ে বেশি মেলে এমন উত্তরটি বেছে নিন।",other:"অন্যান্য — নিজের ভাষায় লিখুন",placeholder:"আপনার উত্তর…",back:"← পেছনে",next:"চালিয়ে যান →",build:"আমার ব্লুপ্রিন্ট তৈরি করুন →"}};
let state={index:0,answers:{},started:false};
const $=id=>document.getElementById(id);
const screens={intro:$("intro"),assessment:$("assessment"),results:$("results")};
function save(){localStorage.setItem("lifeos-v1",JSON.stringify(state));$("saveStatus").textContent="Saved";setTimeout(()=>$("saveStatus").textContent="Ready",900)}
function load(){try{const s=JSON.parse(localStorage.getItem("lifeos-v1"));if(s&&s.answers){state=s;$("resumeBtn").classList.remove("hidden")}}catch(e){}}
function show(k){Object.values(screens).forEach(x=>x.classList.remove("active"));screens[k].classList.add("active");scrollTo({top:0,behavior:"smooth"})}
function render(){const q=questions[state.index],a=state.answers[q.id]||{},u=UI[lang];$("categoryLabel").textContent=(lang==="bn"?(BN_CAT[q.category]||q.category):q.category).toUpperCase();$("questionTitle").textContent=lang==="bn"?"এই বিষয়টি নিয়ে আপনার জন্য কোনটি সবচেয়ে গুরুত্বপূর্ণ? "+q.topic+"?":q.text;$("currentNo").textContent=state.index+1;$("progressBar").style.width=((state.index+1)/TOTAL*100)+"%";$("questionMeta").textContent=u.meta;$("options").innerHTML=q.options.map(o=>'<button class="option '+(a.option===o.id?"selected":"")+'" data-id="'+o.id+'"><span class="dot">✓</span><span><b>'+ (lang==="bn"?(o.other?u.other:o.textBN):o.text) +'</b><small>'+ (lang==="bn"?(o.other?"নিজের উত্তর":"একটি সম্ভাব্য পথ"):o.hint) +'</small></span></button>').join("");$("otherWrap").classList.toggle("hidden",a.option!=="other");$("otherInput").value=a.other||"";$("otherInput").placeholder=u.placeholder;$("nextBtn").disabled=!a.option;$("nextBtn").textContent=state.index===TOTAL-1?u.build:u.next;document.querySelectorAll(".option").forEach(b=>b.onclick=()=>choose(b.dataset.id));$("backBtn").textContent=u.back;$("otherLabel").textContent=u.other};
$("bnBtn").onclick=()=>{lang="bn";localStorage.setItem("lifeos-lang","bn");render();};
$("enBtn").onclick=()=>{lang="en";localStorage.setItem("lifeos-lang","en");render();};
function applyLangButtons(){$("bnBtn").classList.toggle("active",lang==="bn");$("enBtn").classList.toggle("active",lang==="en");}
applyLangButtons();
