
const demoVocabulary = [
  {word:"aunque", meaning:"although / even though", topic:"Connectors", example:"Aunque llueve, vamos a salir."},
  {word:"alquilar", meaning:"to rent", topic:"Travel", example:"Vamos a alquilar un coche."},
  {word:"equipaje", meaning:"luggage", topic:"Travel", example:"Mi equipaje está en el hotel."},
  {word:"billete", meaning:"ticket", topic:"Travel", example:"Necesito un billete de ida y vuelta."},
  {word:"quedarse", meaning:"to stay", topic:"Travel", example:"Nos quedamos tres noches."},
  {word:"mudarse", meaning:"to move house", topic:"Home", example:"Se mudaron el mes pasado."},
  {word:"vecino", meaning:"neighbour", topic:"Home", example:"Mi vecino es muy amable."},
  {word:"arreglar", meaning:"to fix / arrange", topic:"Home", example:"Tengo que arreglar la puerta."},
  {word:"cita", meaning:"appointment", topic:"Daily life", example:"Tengo una cita con el médico."},
  {word:"entregar", meaning:"to hand in / deliver", topic:"Work", example:"Tengo que entregar el informe."},
  {word:"ahorrar", meaning:"to save money", topic:"Money", example:"Quiero ahorrar para viajar."},
  {word:"gastar", meaning:"to spend", topic:"Money", example:"No quiero gastar demasiado."},
  {word:"elegir", meaning:"to choose", topic:"Daily life", example:"Puedes elegir el menú."},
  {word:"recordar", meaning:"to remember", topic:"Daily life", example:"No recuerdo su apellido."},
  {word:"olvidar", meaning:"to forget", topic:"Daily life", example:"He olvidado las llaves."},
  {word:"mejorar", meaning:"to improve", topic:"Learning", example:"Quiero mejorar mi español."},
  {word:"practicar", meaning:"to practise", topic:"Learning", example:"Practico español cada día."},
  {word:"conseguir", meaning:"to get / achieve", topic:"Goals", example:"Quiero conseguir un nivel B1."},
  {word:"acostumbrarse", meaning:"to get used to", topic:"Daily life", example:"Me estoy acostumbrando al horario."},
  {word:"de repente", meaning:"suddenly", topic:"Storytelling", example:"De repente empezó a llover."},
  {word:"mientras", meaning:"while", topic:"Connectors", example:"Escucho música mientras trabajo."},
  {word:"por eso", meaning:"that's why", topic:"Connectors", example:"Estaba cansado, por eso me fui."},
  {word:"todavía", meaning:"still / yet", topic:"Time", example:"Todavía no he terminado."},
  {word:"ya", meaning:"already / now", topic:"Time", example:"Ya he comido."},
  {word:"antes", meaning:"before", topic:"Time", example:"Antes vivía en Sevilla."},
  {word:"después", meaning:"afterwards", topic:"Time", example:"Después fuimos a cenar."},
  {word:"saludable", meaning:"healthy", topic:"Health", example:"Intento comer de forma saludable."},
  {word:"descansar", meaning:"to rest", topic:"Health", example:"Necesitas descansar."},
  {word:"quejarse", meaning:"to complain", topic:"Communication", example:"El cliente se quejó del servicio."},
  {word:"parecer", meaning:"to seem", topic:"Opinions", example:"Me parece una buena idea."}
];

const lessons = [
  {
    title:"Talking about past experiences",
    level:"A2",
    duration:"18 min",
    focus:"Pretérito perfecto vs. indefinido",
    intro:"Learn to distinguish recent or life experiences from completed actions in a finished past period.",
    sections:[
      {h:"1. Pretérito perfecto", p:"Use it for experiences or actions connected to the present.", ex:"Este año he viajado a Madrid dos veces."},
      {h:"2. Pretérito indefinido", p:"Use it for completed actions in a finished past period.", ex:"El año pasado viajé a Madrid."},
      {h:"3. Time markers", p:"Common markers help signal the tense.", ex:"hoy / esta semana / este año → perfecto · ayer / en 2025 / el sábado pasado → indefinido"}
    ]
  },
  {
    title:"Travel and accommodation",
    level:"A2",
    duration:"16 min",
    focus:"Useful travel language",
    intro:"Handle common situations involving bookings, transport and accommodation.",
    sections:[
      {h:"1. Asking for information", p:"Use polite question structures.", ex:"¿Podría decirme a qué hora sale el tren?"},
      {h:"2. Accommodation", p:"Useful phrases for check-in and problems.", ex:"Tengo una reserva a nombre de García."},
      {h:"3. Transport", p:"Talk about tickets, platforms and delays.", ex:"¿En qué andén sale el tren a Valencia?"}
    ]
  }
];

const practiceQuestions = [
  {topic:"Past tense", q:"Ayer ___ al mercado con mi hermana.", options:["he ido","fui","iba","voy"], answer:1, explain:"Ayer refers to a finished past period, so 'fui' is appropriate."},
  {topic:"Travel", q:"Necesito comprar un ___ de tren.", options:["equipaje","vecino","billete","alquiler"], answer:2, explain:"'Billete' means ticket."},
  {topic:"Connectors", q:"Estaba lloviendo, ___ nos quedamos en casa.", options:["por eso","aunque","mientras","todavía"], answer:0, explain:"'Por eso' expresses a consequence: that's why."},
  {topic:"Past tense", q:"Este mes ___ mucho español.", options:["practiqué","he practicado","practicaba","practicaré"], answer:1, explain:"'Este mes' is usually connected to the present, so pretérito perfecto fits."},
  {topic:"Travel", q:"¿Dónde podemos ___ un coche?", options:["ahorrar","alquilar","recordar","entregar"], answer:1, explain:"'Alquilar' means to rent."},
  {topic:"Daily life", q:"Tengo una ___ con el dentista mañana.", options:["cita","mudanza","queja","billete"], answer:0, explain:"'Cita' is an appointment."},
  {topic:"Connectors", q:"___ estaba cocinando, escuchaba un pódcast.", options:["Aunque","Por eso","Mientras","Ya"], answer:2, explain:"'Mientras' means while."},
  {topic:"Vocabulary", q:"'Ahorrar' means…", options:["to spend","to save","to choose","to improve"], answer:1, explain:"'Ahorrar' means to save money."}
];

const listeningItems = [
  {
    title:"At the train station",
    text:"Buenos días. Quisiera un billete de ida y vuelta a Toledo para mañana por la mañana. ¿Hay algún tren antes de las nueve?",
    question:"What does the speaker want?",
    options:["A hotel room","A return train ticket","A taxi","A restaurant booking"],
    answer:1
  },
  {
    title:"Making plans",
    text:"Este fin de semana he quedado con unos amigos. Si hace buen tiempo, vamos a hacer una excursión y después cenaremos en el centro.",
    question:"What is the plan if the weather is good?",
    options:["Go shopping","Stay at home","Go on an excursion","Visit a museum"],
    answer:2
  }
];

const mockQuestions = [
  {q:"Choose the most natural response: ¿Has estado alguna vez en Barcelona?", options:["Sí, fui ayer.","Sí, he estado dos veces.","Sí, estaré.","Sí, estaba."], answer:1},
  {q:"Complete: Cuando era niño, ___ al fútbol todos los sábados.", options:["jugué","he jugado","jugaba","jugaré"], answer:2},
  {q:"Which word means 'luggage'?", options:["equipaje","billete","andén","cita"], answer:0},
  {q:"Complete: No fui a la fiesta ___ estaba enfermo.", options:["aunque","porque","mientras","todavía"], answer:1},
  {q:"Choose the correct phrase for a polite request.", options:["Dame una habitación.","Quiero habitación ahora.","¿Podría darme una habitación tranquila?","Habitación."], answer:2},
  {q:"Complete: Este año ___ tres libros en español.", options:["leí","he leído","leía","leeré"], answer:1},
  {q:"Which means 'I forgot the keys'?", options:["Ahorré las llaves.","Entregué las llaves.","Olvidé las llaves.","Elegí las llaves."], answer:2},
  {q:"Complete: ___ trabajaba, escuchaba la radio.", options:["Mientras","Por eso","Aunque que","Ya que no"], answer:0}
];

const achievements = [
  {icon:"🔥", title:"7-Day Streak", text:"Studied seven days in a row", unlocked:true},
  {icon:"◇", title:"Word Collector", text:"Reviewed 20+ vocabulary items", unlocked:true},
  {icon:"✓", title:"Accuracy Boost", text:"Scored 80%+ in practice", unlocked:true},
  {icon:"◖", title:"Good Listener", text:"Completed a listening set", unlocked:true},
  {icon:"★", title:"Mock Ready", text:"Complete the sample mock", unlocked:false},
  {icon:"↗", title:"Momentum", text:"Improve a weak area", unlocked:false}
];

const weakState = JSON.parse(localStorage.getItem("demoWeakState") || '{"Past tense":3,"Travel":2,"Connectors":1}');
let demoState = JSON.parse(localStorage.getItem("demoState") || '{"xp":1280,"attempted":34,"correct":28}');

function saveState(){
  localStorage.setItem("demoWeakState", JSON.stringify(weakState));
  localStorage.setItem("demoState", JSON.stringify(demoState));
}

const views = [...document.querySelectorAll(".view")];
const navItems = [...document.querySelectorAll(".nav-item")];

function showView(id){
  views.forEach(v=>v.classList.toggle("active", v.id===id));
  navItems.forEach(n=>n.classList.toggle("active", n.dataset.view===id));
  const active = navItems.find(n=>n.dataset.view===id);
  document.getElementById("pageTitle").textContent = active ? active.textContent.trim() : "Español A2";
  document.getElementById("sidebar").classList.remove("open");
  window.scrollTo({top:0,behavior:"smooth"});
  if(id==="weakspots") renderWeakSpots();
  if(id==="progress") renderProgress();
}
navItems.forEach(n=>n.addEventListener("click",()=>showView(n.dataset.view)));
document.querySelectorAll("[data-go]").forEach(b=>b.addEventListener("click",()=>showView(b.dataset.go)));
document.getElementById("menuBtn").addEventListener("click",()=>document.getElementById("sidebar").classList.toggle("open"));

function toast(msg){
  const el=document.getElementById("toast"); el.textContent=msg; el.classList.add("show");
  setTimeout(()=>el.classList.remove("show"),1700);
}

function renderLessons(){
  const grid=document.getElementById("lessonGrid");
  grid.innerHTML=lessons.map((l,i)=>`
    <article class="card lesson-card">
      <span class="eyebrow">SAMPLE LESSON ${i+1}</span>
      <h3>${l.title}</h3>
      <p>${l.intro}</p>
      <div class="lesson-meta"><span>${l.level}</span><span>${l.duration}</span><span>${l.focus}</span></div>
      <button class="btn btn-primary" data-lesson="${i}">Open lesson</button>
    </article>`).join("");
  grid.querySelectorAll("[data-lesson]").forEach(btn=>btn.onclick=()=>openLesson(+btn.dataset.lesson));
}
function openLesson(i){
  const l=lessons[i], reader=document.getElementById("lessonReader");
  reader.innerHTML=`<div class="card">
    <button class="btn btn-outline" id="closeLesson">← Back to lessons</button>
    <h3>${l.title}</h3><p class="muted">${l.intro}</p>
    <div class="lesson-content">${l.sections.map(s=>`<h4>${s.h}</h4><p>${s.p}</p><div class="example">${s.ex}</div>`).join("")}</div>
    <div class="feature-chips"><span>Sample lesson complete</span><span>+60 XP in full product</span></div>
  </div>`;
  document.getElementById("lessonGrid").classList.add("hidden"); reader.classList.remove("hidden");
  document.getElementById("closeLesson").onclick=()=>{reader.classList.add("hidden");document.getElementById("lessonGrid").classList.remove("hidden")};
}

function renderVocabulary(){
  const topics=["all",...new Set(demoVocabulary.map(v=>v.topic))];
  const select=document.getElementById("vocabTopic");
  select.innerHTML=topics.map(t=>`<option value="${t}">${t==="all"?"All topics":t}</option>`).join("");
  document.getElementById("vocabCount").textContent=demoVocabulary.length;
  function draw(){
    const q=document.getElementById("vocabSearch").value.toLowerCase();
    const topic=select.value;
    const rows=demoVocabulary.filter(v=>(topic==="all"||v.topic===topic) && `${v.word} ${v.meaning}`.toLowerCase().includes(q));
    document.getElementById("vocabTable").innerHTML=`
      <div class="vocab-row head"><span>Spanish</span><span>English</span><span>Topic</span><span>Example</span></div>
      ${rows.map(v=>`<div class="vocab-row"><strong>${v.word}</strong><span>${v.meaning}</span><span><span class="topic-chip">${v.topic}</span></span><span>${v.example}</span></div>`).join("")}`;
  }
  document.getElementById("vocabSearch").oninput=draw; select.onchange=draw; draw();
}

let flashIndex=0;
function renderFlashcard(){
  const v=demoVocabulary[flashIndex];
  document.getElementById("flashWord").textContent=v.word;
  document.getElementById("flashMeaning").textContent=v.meaning;
  document.getElementById("flashExample").textContent=v.example;
  document.getElementById("flashTopic").textContent=v.topic;
  document.getElementById("flashPosition").textContent=`${flashIndex+1} / ${demoVocabulary.length}`;
  document.getElementById("flashcard").classList.remove("flipped");
}
document.getElementById("flashcard").onclick=()=>document.getElementById("flashcard").classList.toggle("flipped");
document.getElementById("flashNext").onclick=()=>{flashIndex=(flashIndex+1)%demoVocabulary.length;renderFlashcard()};
document.getElementById("flashPrev").onclick=()=>{flashIndex=(flashIndex-1+demoVocabulary.length)%demoVocabulary.length;renderFlashcard()};

let pIndex=0,pScore=0,pAnswered=false;
function renderPractice(){
  const x=practiceQuestions[pIndex];
  document.getElementById("practiceProgress").textContent=`${pIndex+1} / ${practiceQuestions.length}`;
  document.getElementById("practiceTopicLabel").textContent=x.topic;
  document.getElementById("practiceScoreLabel").textContent=`${pScore} correct`;
  document.getElementById("practiceQuestion").textContent=x.q;
  document.getElementById("practiceOptions").innerHTML=x.options.map((o,i)=>`<button class="option" data-o="${i}">${o}</button>`).join("");
  document.getElementById("practiceFeedback").classList.add("hidden");
  document.getElementById("practiceNext").classList.add("hidden");
  pAnswered=false;
  document.querySelectorAll("#practiceOptions .option").forEach(b=>b.onclick=()=>answerPractice(+b.dataset.o));
}
function answerPractice(choice){
  if(pAnswered)return; pAnswered=true;
  const x=practiceQuestions[pIndex], buttons=[...document.querySelectorAll("#practiceOptions .option")];
  buttons.forEach((b,i)=>{if(i===x.answer)b.classList.add("correct");if(i===choice&&i!==x.answer)b.classList.add("wrong")});
  const ok=choice===x.answer;
  if(ok){pScore++;demoState.correct++;demoState.xp+=8}else{weakState[x.topic]=(weakState[x.topic]||0)+1}
  demoState.attempted++; saveState();
  const f=document.getElementById("practiceFeedback"); f.textContent=(ok?"Correct. ":"Review this one. ")+x.explain; f.classList.remove("hidden");
  document.getElementById("practiceScoreLabel").textContent=`${pScore} correct`;
  document.getElementById("practiceNext").classList.remove("hidden");
  updateDashboard();
}
document.getElementById("practiceNext").onclick=()=>{
  if(pIndex<practiceQuestions.length-1){pIndex++;renderPractice()}else{
    toast(`Practice complete: ${pScore}/${practiceQuestions.length}`);
    pIndex=0;pScore=0;renderPractice();renderWeakSpots();
  }
};

function renderListening(){
  document.getElementById("listeningGrid").innerHTML=listeningItems.map((x,i)=>`
    <article class="card listening-card">
      <span class="eyebrow">LISTENING SAMPLE ${i+1}</span><h3>${x.title}</h3>
      <button class="audio-btn" data-play="${i}">▶</button>
      <p><strong>${x.question}</strong></p>
      <div class="options">${x.options.map((o,j)=>`<button class="option" data-listen="${i}" data-choice="${j}">${o}</button>`).join("")}</div>
    </article>`).join("");
  document.querySelectorAll("[data-play]").forEach(b=>b.onclick=()=>playListening(+b.dataset.play));
  document.querySelectorAll("[data-listen]").forEach(b=>b.onclick=()=>checkListening(b,+b.dataset.listen,+b.dataset.choice));
}
function playListening(i){
  if(!("speechSynthesis" in window)){toast("Speech synthesis is not available in this browser.");return}
  speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(listeningItems[i].text);u.lang="es-ES";u.rate=.88;speechSynthesis.speak(u);
}
function checkListening(btn,i,choice){
  const wrap=btn.closest(".options"); [...wrap.children].forEach((b,j)=>{b.disabled=true;if(j===listeningItems[i].answer)b.classList.add("correct")});
  if(choice!==listeningItems[i].answer){btn.classList.add("wrong");weakState["Listening"]=(weakState["Listening"]||0)+1}else{demoState.xp+=10}
  demoState.attempted++; if(choice===listeningItems[i].answer)demoState.correct++;saveState();updateDashboard();
}

function renderWeakSpots(){
  const entries=Object.entries(weakState).sort((a,b)=>b[1]-a[1]).slice(0,6);
  document.getElementById("weakGrid").innerHTML=entries.map(([name,count])=>{
    const severity=Math.min(100,30+count*12);
    return `<div class="card weak-card"><span class="eyebrow">RECOMMENDED REVIEW</span><h3>${name}</h3><p class="muted">${count} recent difficulty signal${count===1?"":"s"} in the demo profile.</p><div class="meter"><span style="width:${severity}%"></span></div><button class="btn btn-outline" onclick="showView('practice')">Practise now</button></div>`
  }).join("");
}

let mockIdx=0,mockAnswers=[],mockRemaining=480,mockTimerHandle=null;
document.getElementById("startMock").onclick=startMock;
function startMock(){
  mockIdx=0;mockAnswers=[];mockRemaining=480;
  document.getElementById("mockStart").classList.add("hidden");
  document.getElementById("mockResult").classList.add("hidden");
  document.getElementById("mockShell").classList.remove("hidden");
  renderMock();
  clearInterval(mockTimerHandle); mockTimerHandle=setInterval(()=>{mockRemaining--;renderTimer();if(mockRemaining<=0)finishMock()},1000);
}
function renderTimer(){const m=String(Math.floor(mockRemaining/60)).padStart(2,"0"),s=String(mockRemaining%60).padStart(2,"0");document.getElementById("mockTimer").textContent=`${m}:${s}`}
function renderMock(){
  const x=mockQuestions[mockIdx];
  document.getElementById("mockProgress").textContent=`Question ${mockIdx+1} / ${mockQuestions.length}`;
  document.getElementById("mockQuestion").textContent=x.q;
  document.getElementById("mockOptions").innerHTML=x.options.map((o,i)=>`<label class="option"><input type="radio" name="mock" value="${i}"> ${o}</label>`).join("");
  document.getElementById("mockNext").textContent=mockIdx===mockQuestions.length-1?"Finish sample":"Next";
}
document.getElementById("mockNext").onclick=()=>{
  const chosen=document.querySelector('input[name="mock"]:checked');
  if(!chosen){toast("Choose an answer first.");return}
  mockAnswers[mockIdx]=+chosen.value;
  if(mockIdx<mockQuestions.length-1){mockIdx++;renderMock()}else finishMock();
};
function finishMock(){
  clearInterval(mockTimerHandle); mockTimerHandle=null;
  let score=0; mockQuestions.forEach((q,i)=>{if(mockAnswers[i]===q.answer)score++});
  const pct=Math.round(score/mockQuestions.length*100);
  demoState.attempted+=mockQuestions.length;demoState.correct+=score;demoState.xp+=score*12;saveState();updateDashboard();
  document.getElementById("mockShell").classList.add("hidden");
  const r=document.getElementById("mockResult");r.classList.remove("hidden");
  r.innerHTML=`<span class="eyebrow">SAMPLE RESULT</span><div class="result-score">${pct}%</div><h3>${score} / ${mockQuestions.length} correct</h3><p class="muted">This result demonstrates the reporting experience. The public demo contains only a short sample exam.</p><button class="btn btn-primary" id="restartMock">Try again</button>`;
  document.getElementById("restartMock").onclick=()=>{document.getElementById("mockResult").classList.add("hidden");document.getElementById("mockStart").classList.remove("hidden")};
}

function renderProgress(){
  const skills=[["Vocabulary",78],["Grammar",64],["Listening",71],["Reading",74],["Exam readiness",58]];
  document.getElementById("skillBars").innerHTML=skills.map(([s,p])=>`<div class="skill-row"><div class="label"><span>${s}</span><strong>${p}%</strong></div><div class="bar"><span style="width:${p}%"></span></div></div>`).join("");
  document.getElementById("attemptStat").textContent=demoState.attempted;
}

function renderAchievements(){
  document.getElementById("achievementGrid").innerHTML=achievements.map(a=>`<div class="card achievement ${a.unlocked?"":"locked"}"><div class="achievement-icon">${a.icon}</div><div><h3>${a.title}</h3><p>${a.text}</p></div></div>`).join("");
}
function renderTimetable(){
  const days=[
    ["Monday",[["Grammar","Past tense review"],["Vocabulary","10 travel words"]]],
    ["Tuesday",[["Listening","Conversation practice"],["Flashcards","Review due cards"]]],
    ["Wednesday",[["Lesson","Travel & accommodation"],["Practice","Mixed quiz"]]],
    ["Thursday",[["Weak spots","Targeted review"],["Listening","Short dialogue"]]],
    ["Friday",[["Mock exam","Sample simulation"],["Review","Mistake notebook"]]]
  ];
  document.getElementById("timetableGrid").innerHTML=days.map(([d,tasks])=>`<div class="card day-card"><span class="eyebrow">STUDY DAY</span><h3>${d}</h3>${tasks.map(([a,b])=>`<div class="day-task"><strong>${a}</strong><span>${b}</span></div>`).join("")}</div>`).join("");
}
function updateDashboard(){
  document.getElementById("xpStat").textContent=demoState.xp.toLocaleString();
  const acc=demoState.attempted?Math.round(demoState.correct/demoState.attempted*100):82;
  document.getElementById("accuracyStat").textContent=`${acc}%`;
  document.getElementById("weakStat").textContent=Object.values(weakState).filter(v=>v>=2).length;
}
renderLessons();renderVocabulary();renderFlashcard();renderPractice();renderListening();renderWeakSpots();renderProgress();renderAchievements();renderTimetable();updateDashboard();


// ---------- STUDY MATERIALS ----------
const studyGuides = {
  past:{
    title:"Past tenses — quick reference",
    intro:"Use time context to choose between perfecto, indefinido and imperfecto.",
    notes:[
      ["Pretérito perfecto","Connected to the present: Hoy he trabajado mucho."],
      ["Pretérito indefinido","Finished period: Ayer trabajé hasta tarde."],
      ["Pretérito imperfecto","Habits/background: Cuando era niño, jugaba fuera."],
      ["Useful markers","hoy, esta semana · ayer, el año pasado · antes, normalmente"]
    ]
  },
  pronouns:{
    title:"Object pronouns",
    intro:"Replace repeated nouns and make everyday Spanish sound more natural.",
    notes:[
      ["Direct object","lo, la, los, las · ¿Compras el libro? Sí, lo compro."],
      ["Indirect object","le, les · Le escribo un mensaje."],
      ["Before conjugated verb","Lo necesito. / Te llamo mañana."],
      ["With infinitive","Voy a comprarlo. / Lo voy a comprar."]
    ]
  },
  travel:{
    title:"Travel & services",
    intro:"A compact set of phrases for common A2 situations.",
    notes:[
      ["Transport","Quisiera un billete de ida y vuelta."],
      ["Hotel","Tengo una reserva a nombre de…"],
      ["Problem","La habitación no está limpia."],
      ["Information","¿Podría decirme dónde está la estación?"]
    ]
  },
  writing:{
    title:"A2 writing checklist",
    intro:"A simple structure for short notes, emails and messages.",
    notes:[
      ["1. Purpose","Say why you are writing in the first sentence."],
      ["2. Details","Cover every point in the prompt."],
      ["3. Connectors","Use porque, pero, también, después, por eso."],
      ["4. Check","Verb tense, gender/number, spelling, greeting and closing."]
    ]
  }
};

document.querySelectorAll("[data-study]").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const g=studyGuides[btn.dataset.study];
    const reader=document.getElementById("studyReader");
    reader.innerHTML=`<button class="btn btn-outline" id="closeStudy">← Back</button>
      <span class="eyebrow" style="display:block;margin-top:18px">SAMPLE REFERENCE</span>
      <h3>${g.title}</h3><p class="muted">${g.intro}</p>
      <div class="guide-grid">${g.notes.map(n=>`<div class="guide-note"><strong>${n[0]}</strong><p>${n[1]}</p></div>`).join("")}</div>`;
    reader.classList.remove("hidden");
    document.getElementById("closeStudy").onclick=()=>reader.classList.add("hidden");
    reader.scrollIntoView({behavior:"smooth",block:"start"});
  });
});

// ---------- CUSTOM VOCABULARY ----------
const customWords = JSON.parse(localStorage.getItem("demoCustomWords") || "[]");
function currentVocabulary(){ return [...demoVocabulary, ...customWords]; }

document.getElementById("addCustomWord").onclick=()=>document.getElementById("customWordModal").classList.remove("hidden");
document.getElementById("closeCustomWord").onclick=()=>document.getElementById("customWordModal").classList.add("hidden");
document.getElementById("customWordModal").addEventListener("click",e=>{
  if(e.target.id==="customWordModal")e.currentTarget.classList.add("hidden");
});
document.getElementById("saveCustomWord").onclick=()=>{
  const word=document.getElementById("customSpanish").value.trim();
  const meaning=document.getElementById("customEnglish").value.trim();
  const example=document.getElementById("customExample").value.trim();
  if(!word||!meaning){toast("Add both Spanish and English.");return}
  customWords.push({word,meaning,topic:"My words",example:example||"Personal vocabulary"});
  localStorage.setItem("demoCustomWords",JSON.stringify(customWords));
  document.getElementById("customSpanish").value="";
  document.getElementById("customEnglish").value="";
  document.getElementById("customExample").value="";
  document.getElementById("customWordModal").classList.add("hidden");
  renderVocabularyV2(); toast("Custom word added.");
};

function renderVocabularyV2(){
  const all=currentVocabulary();
  const topics=["all",...new Set(all.map(v=>v.topic))];
  const select=document.getElementById("vocabTopic");
  const previous=select.value || "all";
  select.innerHTML=topics.map(t=>`<option value="${t}">${t==="all"?"All topics":t}</option>`).join("");
  if(topics.includes(previous))select.value=previous;
  document.getElementById("vocabCount").textContent=all.length;
  const q=document.getElementById("vocabSearch").value.toLowerCase();
  const topic=select.value;
  const rows=all.filter(v=>(topic==="all"||v.topic===topic) && `${v.word} ${v.meaning}`.toLowerCase().includes(q));
  document.getElementById("vocabTable").innerHTML=`
    <div class="vocab-row head"><span>Spanish</span><span>English</span><span>Topic</span><span>Example</span></div>
    ${rows.map(v=>`<div class="vocab-row"><strong>${v.word}</strong><span>${v.meaning}</span><span><span class="topic-chip">${v.topic}</span></span><span>${v.example}</span></div>`).join("")}`;
}
document.getElementById("vocabSearch").addEventListener("input",renderVocabularyV2);
document.getElementById("vocabTopic").addEventListener("change",renderVocabularyV2);
renderVocabularyV2();

// ---------- SPEED ROUND ----------
let speedTime=30, speedPoints=0, speedHandle=null, speedCurrent=null;
function formatSpeedTime(n){return `00:${String(Math.max(0,n)).padStart(2,"0")}`}
function nextSpeedQuestion(){
  const all=demoVocabulary;
  speedCurrent=all[Math.floor(Math.random()*all.length)];
  const wrong=[...all].filter(v=>v.word!==speedCurrent.word).sort(()=>Math.random()-.5).slice(0,3).map(v=>v.meaning);
  const opts=[speedCurrent.meaning,...wrong].sort(()=>Math.random()-.5);
  document.getElementById("speedWord").textContent=speedCurrent.word;
  document.getElementById("speedOptions").innerHTML=opts.map(o=>`<button class="option speed-choice" data-meaning="${o.replace(/"/g,'&quot;')}">${o}</button>`).join("");
  document.querySelectorAll(".speed-choice").forEach(b=>b.onclick=()=>{
    if(b.dataset.meaning===speedCurrent.meaning){speedPoints++;demoState.xp+=3;b.classList.add("correct")}
    else{b.classList.add("wrong")}
    document.getElementById("speedScore").textContent=speedPoints;
    saveState();updateDashboard();
    setTimeout(nextSpeedQuestion,160);
  });
}
document.getElementById("startSpeed").onclick=()=>{
  speedTime=30;speedPoints=0;
  document.getElementById("speedIntro").classList.add("hidden");
  document.getElementById("speedResult").classList.add("hidden");
  document.getElementById("speedGame").classList.remove("hidden");
  document.getElementById("speedScore").textContent="0";
  document.getElementById("speedTimer").textContent=formatSpeedTime(speedTime);
  nextSpeedQuestion();
  clearInterval(speedHandle);
  speedHandle=setInterval(()=>{
    speedTime--;
    document.getElementById("speedTimer").textContent=formatSpeedTime(speedTime);
    if(speedTime<=0){
      clearInterval(speedHandle);
      document.getElementById("speedGame").classList.add("hidden");
      const r=document.getElementById("speedResult");
      r.classList.remove("hidden");
      r.innerHTML=`<span class="eyebrow">ROUND COMPLETE</span><div class="result-score">${speedPoints}</div>
        <h3>correct answers</h3><p class="muted">Fast retrieval helps turn recognition into usable vocabulary.</p>
        <button class="btn btn-primary" id="speedAgain">Go again</button>`;
      document.getElementById("speedAgain").onclick=()=>{
        r.classList.add("hidden");document.getElementById("speedIntro").classList.remove("hidden");
      };
    }
  },1000);
};
