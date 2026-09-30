const LIFEOS_I18N = {
  en:{meta:"Choose the answer that best matches you. Each choice contributes to your multidimensional profile.",other:"Tell us in your own words",placeholder:"Your answer…",back:"← Back",continue:"Continue →",build:"Build my blueprint →",privacy:"Answers stay in this browser unless you connect a backend later. No account is required.",results:"YOUR LIFE BLUEPRINT",title:"A clearer map of what matters.",summary:"Your scores summarize answer patterns; they are not diagnoses or predictions. Use them to ask better questions, choose priorities and design experiments.",drivers:"PRIMARY DRIVERS",bottlenecks:"PRACTICAL BOTTLENECKS",roadmap:"NEXT 90 DAYS",promptTitle:"Take your blueprint to any AI.",copy:"Copy prompt",download:"Download .txt",retake:"Retake assessment"},
  bn:{meta:"আপনার সঙ্গে সবচেয়ে বেশি মেলে এমন উত্তরটি বেছে নিন। প্রতিটি উত্তর আপনার বহুমাত্রিক প্রোফাইলে প্রভাব ফেলবে।",other:"নিজের ভাষায় লিখুন",placeholder:"আপনার উত্তর…",back:"← পেছনে",continue:"চালিয়ে যান →",build:"আমার ব্লুপ্রিন্ট তৈরি করুন →",privacy:"আপনার উত্তর এই ব্রাউজারেই থাকে, যতক্ষণ না কোনো backend সংযুক্ত করছেন। কোনো account প্রয়োজন নেই।",results:"আপনার জীবন-ব্লুপ্রিন্ট",title:"যা গুরুত্বপূর্ণ তার আরও পরিষ্কার মানচিত্র।",summary:"আপনার স্কোরগুলো উত্তরগুলোর pattern দেখায়; এগুলো diagnosis বা ভবিষ্যদ্বাণী নয়।",drivers:"প্রধান চালিকা শক্তি",bottlenecks:"যেখানে system দরকার",roadmap:"পরবর্তী ৯০ দিন",promptTitle:"আপনার ব্লুপ্রিন্ট যেকোনো AI-তে ব্যবহার করুন।",copy:"Prompt কপি করুন",download:".txt ডাউনলোড",retake:"আবার assessment দিন"}
};
let lifeosLang=localStorage.getItem("lifeos-lang")||"en";
const CAT_BN={"Goals & Dreams":"লক্ষ্য ও স্বপ্ন","Values & Priorities":"মূল্যবোধ ও অগ্রাধিকার","Personality & Mindset":"ব্যক্তিত্ব ও মানসিকতা","Strengths & Weaknesses":"শক্তি ও দুর্বলতা","Education & Knowledge":"শিক্ষা ও জ্ঞান","Career & Work":"ক্যারিয়ার ও কাজ","Finance & Security":"অর্থ ও নিরাপত্তা","Skills & Capability":"দক্ষতা ও সক্ষমতা","Time & Habits":"সময় ও অভ্যাস","Relationships & Social Life":"সম্পর্ক ও সামাজিক জীবন","Family & Responsibilities":"পরিবার ও দায়িত্ব","Lifestyle & Environment":"জীবনযাপন ও পরিবেশ","Well-being & Energy":"সুস্থতা ও শক্তি","Entrepreneurship & Projects":"উদ্যোক্তা ও প্রকল্প","Motivation & Discipline":"প্রেরণা ও শৃঙ্খলা"};
const DIM_BN={"Goals":"লক্ষ্য","Career":"ক্যারিয়ার","Finance":"অর্থ","Education":"শিক্ষা","Discipline":"শৃঙ্খলা","Leadership":"নেতৃত্ব","Creativity":"সৃজনশীলতা","Risk Tolerance":"ঝুঁকি গ্রহণ","Relationships":"সম্পর্ক","Well-being":"সুস্থতা","Time Capacity":"সময় সক্ষমতা","Growth":"উন্নতি"};
const OPT_BN=["এখনই সাহসী পদক্ষেপ নিন","আগে নির্ভরযোগ্য ভিত্তি তৈরি করুন","ছোট একটি পরীক্ষা চালান","বিশেষজ্ঞ বা সহকর্মীর মতামত নিন","ভারসাম্য ও সক্ষমতা রক্ষা করুন","বিকল্প খোলা রাখুন ও প্রমাণ সংগ্রহ করুন"];
const HINT_BN=["উচ্চ পদক্ষেপ","স্থিতিশীলতা","শেখা","সহযোগিতা","টেকসইতা","নমনীয়তা"];
const WORD_BN={"meaningful":"অর্থপূর্ণ","outcome":"ফলাফল","ambition":"আকাঙ্ক্ষা","future":"ভবিষ্যৎ","result":"ফলাফল","regret":"আক্ষেপ","success":"সাফল্য","change":"পরিবর্তন","goal":"লক্ষ্য","goals":"লক্ষ্যগুলো","value":"মূল্যবোধ","priority":"অগ্রাধিকার","attention":"মনোযোগ","principle":"নীতি","decision":"সিদ্ধান্ত","uncertainty":"অনিশ্চয়তা","reaction":"প্রতিক্রিয়া","environment":"পরিবেশ","thinking":"চিন্তা","feedback":"মতামত","strength":"শক্তি","weakness":"দুর্বলতা","skill":"দক্ষতা","support":"সহায়তা","learning":"শেখা","knowledge":"জ্ঞান","career":"ক্যারিয়ার","work":"কাজ","income":"আয়","financial":"আর্থিক","money":"অর্থ","time":"সময়","habit":"অভ্যাস","relationship":"সম্পর্ক","family":"পরিবার","responsibility":"দায়িত্ব","lifestyle":"জীবনযাপন","energy":"শক্তি","project":"প্রকল্প","motivation":"প্রেরণা","discipline":"শৃঙ্খলা","risk":"ঝুঁকি","community":"কমিউনিটি","travel":"ভ্রমণ","sleep":"ঘুম","balance":"ভারসাম্য","weekly":"সাপ্তাহিক","daily":"দৈনিক","professional":"পেশাগত","technical":"প্রযুক্তিগত","communication":"যোগাযোগ","problem":"সমস্যা","ability":"সামর্থ্য","progress":"অগ্রগতি","deadline":"সময়সীমা","practice":"অনুশীলন","routine":"রুটিন","focus":"মনোযোগ"};
function bnTopic(s){return s.split(/(\s+|-)/).map(x=>WORD_BN[x.toLowerCase()]||x).join("");}
function applyLifeOSLanguage(){
 const t=LIFEOS_I18N[lifeosLang]; document.documentElement.lang=lifeosLang;
 $("resetBtn").textContent=lifeosLang==="bn"?"রিসেট":"Reset"; $("otherLabel").textContent=t.other; $("otherInput").placeholder=t.placeholder;
 $("backBtn").textContent=t.back; $("privacyNote").textContent=t.privacy; $("resultsEyebrow").textContent=t.results; $("resultsTitle").textContent=t.title;
 $("driversLabel").textContent=t.drivers; $("bottlenecksLabel").textContent=t.bottlenecks; $("roadmapLabel").textContent=t.roadmap; $("promptTitle").textContent=t.promptTitle;
 $("copyBtn").textContent=t.copy; $("downloadBtn").textContent=t.download; $("retakeBtn").textContent=t.retake;
 $("bnBtn").classList.toggle("active",lifeosLang==="bn"); $("enBtn").classList.toggle("active",lifeosLang==="en");
 window.renderLifeOSOriginal=window.renderLifeOSOriginal||window.render;
 window.render=function(){
   const q=questions[state.index], a=state.answers[q.id]||{};
   $("categoryLabel").textContent=(lifeosLang==="bn"?(CAT_BN[q.category]||q.category):q.category).toUpperCase();
   const topic=q.text.replace("How do you currently approach your ","").replace("?","");
   $("questionTitle").innerHTML=lifeosLang==="bn"?"আপনি বর্তমানে আপনার <em>"+bnTopic(topic)+"</em> কীভাবে পরিচালনা করেন?":q.text;
   $("currentNo").textContent=state.index+1; $("progressBar").style.width=((state.index+1)/TOTAL*100)+"%"; $("questionMeta").textContent=t.meta;
   $("options").innerHTML=q.options.map((o,i)=>'<button class="option '+(a.option===o.id?"selected":"")+'" data-id="'+o.id+'"><span class="dot">✓</span><span><b>'+(lifeosLang==="bn"?(o.other?"অন্যান্য — নিজের ভাষায় লিখুন":OPT_BN[i]):o.text)+'</b><small>'+(lifeosLang==="bn"?(o.other?"নিজস্ব উত্তর":HINT_BN[i]):o.hint)+'</small></span></button>').join("");
   $("otherWrap").classList.toggle("hidden",a.option!=="other"); $("otherInput").value=a.other||""; $("nextBtn").disabled=!a.option; $("nextBtn").textContent=state.index===TOTAL-1?t.build:t.continue;
   document.querySelectorAll(".option").forEach(b=>b.onclick=()=>choose(b.dataset.id));
 };
 window.resultsLifeOSOriginal=window.resultsLifeOSOriginal||window.results;
 window.results=function(){
   resultsLifeOSOriginal();
   $("resultSummary").textContent=t.summary;
   $("profileGrid").innerHTML=DIMS.map(d=>'<div class="profile-card"><div class="label">'+(lifeosLang==="bn"?(DIM_BN[d]||d):d).toUpperCase()+'</div><div class="score">'+score()[d]+'</div><div class="meter"><span style="width:'+score()[d]+'%"></span></div></div>').join("");
   $("drivers").innerHTML="<ul>"+sorted(score(),false).slice(0,4).map(x=>"<li><b>"+(lifeosLang==="bn"?(DIM_BN[x[0]]||x[0]):x[0])+"</b> — "+x[1]+"/100 "+(lifeosLang==="bn"?"signal.":"signal.")+"</li>").join("")+"</ul>";
   $("bottlenecks").innerHTML="<ul>"+sorted(score(),true).slice(0,4).map(x=>"<li><b>"+(lifeosLang==="bn"?(DIM_BN[x[0]]||x[0]):x[0])+"</b> — "+(lifeosLang==="bn"?"এখানে একটি ছোট supporting system তৈরি করুন।":"create a small supporting system here.")+"</li>").join("")+"</ul>";
   $("roadmap").innerHTML=lifeosLang==="bn"?"<ul><li>একটি প্রধান ৯০ দিনের ফলাফল বেছে নিন।</li><li>একটি পরিমাপযোগ্য ৩০ দিনের milestone ঠিক করুন।</li><li>প্রতি সপ্তাহে ৩–৫টি focus block সুরক্ষিত রাখুন।</li><li>সাপ্তাহিক review করুন: প্রমাণ, বাধা, পরবর্তী পদক্ষেপ।</li></ul>":"<ul><li>Choose one primary 90-day outcome.</li><li>Set one measurable 30-day milestone.</li><li>Protect 3–5 recurring focus blocks every week.</li><li>Review weekly: evidence, obstacle, next action.</li></ul>";
   promptOutput.value=lifeosLang==="bn"?"আমার LifeOS প্রোফাইলের ভিত্তিতে একজন নিরপেক্ষ Life Strategy AI হিসেবে কাজ করুন। আমার সিদ্ধান্ত আমার; আপনি শুধু তথ্য, trade-off, সম্ভাব্য পথ এবং বাস্তব পরিকল্পনা দিন।\n\nআমার স্কোর:\n"+DIMS.map(d=>(DIM_BN[d]||d)+": "+score()[d]+"/100").join("\n")+"\n\nআমার জন্য ৫ বছরের দিকনির্দেশনা, ১ বছরের লক্ষ্য, ৯০ দিনের roadmap, ৩০ দিনের milestone এবং আগামী ৭ দিনের action checklist তৈরি করুন। প্রতিটি লক্ষ্যকে metric, deadline, first action, recurring action, obstacle ও fallback সহ দিন। কোনো সিদ্ধান্ত নিশ্চিত সাফল্য বা সুখ দেবে বলে দাবি করবেন না।":"";
 };
 const oldCopy=$("copyBtn").onclick; $("copyBtn").onclick=async()=>{await navigator.clipboard.writeText($("promptOutput").value);$("copyBtn").textContent=t.copy;};
 render();
}
$("bnBtn").onclick=()=>{lifeosLang="bn";localStorage.setItem("lifeos-lang","bn");applyLifeOSLanguage();};
$("enBtn").onclick=()=>{lifeosLang="en";localStorage.setItem("lifeos-lang","en");applyLifeOSLanguage();};
