const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

const copy = {
  ru: [
    ['.nav a:nth-child(1)','обо мне'],['.nav a:nth-child(2)','проекты'],['.nav a:nth-child(3)','контакты'],['.mini-btn','поздороваться <span>↗</span>'],
    ['.hero>.eyebrow','творческий ум · цифровая душа'],['.hero-bottom p','создаю яркие впечатления<br>из простых идей'],['.scroll-link span','листай дальше'],['.pill-one','мечтай масштабно'],['.pill-two','будь любопытным ✦'],
    ['#about .section-label','01 · обо мне'],['#about h2','не просто имя,<br><em>а настроение</em>'],['.about-copy p:first-child','keshamajestic — это пространство, где смелые идеи становятся живыми и заметными'],['.about-copy .muted','мне нравится соединять мягкость, характер и немного волшебства, чтобы создавать то, что хочется запомнить'],
    ['.value-card:nth-child(1) h3','чувствовать'],['.value-card:nth-child(1) p','сначала чувствую идею, потом даю ей форму'],['.value-card:nth-child(2) h3','создавать'],['.value-card:nth-child(2) p','экспериментирую, смешиваю и создаю новое'],['.value-card:nth-child(3) h3','вдохновлять'],['.value-card:nth-child(3) p','делюсь энергией, которая двигает вперед'],
    ['#projects .section-label','02 · избранное'],['.projects-head h2','создано с<br><em>хорошей энергией</em>'],['.projects-head p','небольшая коллекция мыслей,<br>образов и экспериментов'],
    ['.project:nth-child(1) .project-name','нежная вселенная'],['.project:nth-child(1) .project-tag','визуальная история'],['.project:nth-child(2) .project-name','лимонное настроение'],['.project:nth-child(2) .project-tag','творческая концепция'],['.project:nth-child(3) .project-name','голубые мечты'],['.project:nth-child(3) .project-tag','цифровой мир'],
    ['#contact .eyebrow','есть идея?'],['#contact h2','давай создадим<br><em>что-то великолепное</em>'],['.contact-btn span','написать мне'],['footer p:last-child','создано с хорошей энергией']
  ],
  en: [
    ['.nav a:nth-child(1)','about'],['.nav a:nth-child(2)','projects'],['.nav a:nth-child(3)','contacts'],['.mini-btn','say hello <span>↗</span>'],
    ['.hero>.eyebrow','creative mind · digital soul'],['.hero-bottom p','creating bright impressions<br>from simple ideas'],['.scroll-link span','scroll to explore'],['.pill-one','dream big'],['.pill-two','stay curious ✦'],
    ['#about .section-label','01 · about me'],['#about h2','not just a name,<br><em>but a state of mind</em>'],['.about-copy p:first-child','keshamajestic is a space where bold ideas become vivid and visible'],['.about-copy .muted','I love blending softness, character and a little bit of magic to create things worth remembering'],
    ['.value-card:nth-child(1) h3','feel'],['.value-card:nth-child(1) p','first I feel the idea, then I give it form'],['.value-card:nth-child(2) h3','create'],['.value-card:nth-child(2) p','I experiment, mix things up and make something new'],['.value-card:nth-child(3) h3','inspire'],['.value-card:nth-child(3) p','I share the kind of energy that moves us forward'],
    ['#projects .section-label','02 · selected work'],['.projects-head h2','made with<br><em>good energy</em>'],['.projects-head p','a small collection of thoughts,<br>visuals and experiments'],
    ['.project:nth-child(1) .project-name','soft universe'],['.project:nth-child(1) .project-tag','visual story'],['.project:nth-child(2) .project-name','lemon mood'],['.project:nth-child(2) .project-tag','creative concept'],['.project:nth-child(3) .project-name','blue dreams'],['.project:nth-child(3) .project-tag','digital world'],
    ['#contact .eyebrow','have an idea?'],['#contact h2',"let's make<br><em>something majestic</em>"],['.contact-btn span','write to me'],['footer p:last-child','made with good energy']
  ]
};

const programmerCopy = {
  ru: [
    ['.hero>.eyebrow','// frontend-разработчик · creative coder'],
    ['.hero-bottom p','Создаю быстрые сайты,<br>интерфейсы и анимации'],
    ['.pill-one','Пишу чистый код'],['.pill-two','Запускаю быстро ✦'],
    ['#about h2','Не просто сайт,<br><em>а рабочий код</em>'],
    ['.about-copy p:first-child','Keshamajestic — frontend-разработчик, который превращает идеи в быстрые и живые интерфейсы'],
    ['.about-copy .muted','Создаю адаптивные сайты, пишу чистый JavaScript и добавляю анимации, которые помогают интерфейсу, а не мешают ему'],
    ['.value-card:nth-child(1) h3','Проектировать'],['.value-card:nth-child(1) p','Продумываю структуру, логику и адаптивное поведение'],
    ['.value-card:nth-child(2) h3','Разрабатывать'],['.value-card:nth-child(2) p','Собираю интерфейс на HTML, CSS и чистом JavaScript'],
    ['.value-card:nth-child(3) h3','Оптимизировать'],['.value-card:nth-child(3) p','Ускоряю загрузку, проверяю адаптивность и детали'],
    ['.directions-head p','Интерактивные вкладки показывают основные направления моей разработки'],
    ['.projects-head h2','Создано кодом и<br><em>хорошей энергией</em>'],
    ['.projects-head p','Подборка интерфейсов,<br>анимаций и экспериментов'],
    ['.project:nth-child(1) .project-name','Анимированный лендинг'],
    ['.project:nth-child(1) .project-tag','HTML · CSS · JavaScript'],
    ['.project:nth-child(2) .project-name','Интерактивный интерфейс'],
    ['.project:nth-child(2) .project-tag','UI · Motion · Responsive'],
    ['.project:nth-child(3) .project-name','Цифровой эксперимент'],
    ['.project:nth-child(3) .project-tag','Canvas · Animation · Web'],
    ['#process h2','Как рождается<br><em>проект</em>'],
    ['.process-step:nth-child(1) h3','Разобрать задачу'],['.process-step:nth-child(1) p','Фиксирую цель, структуру и необходимую функциональность'],
    ['.process-step:nth-child(2) h3','Написать код'],['.process-step:nth-child(2) p','Собираю адаптивный интерфейс и добавляю живую анимацию'],
    ['.process-step:nth-child(3) h3','Запустить проект'],['.process-step:nth-child(3) p','Проверяю результат, оптимизирую и готовлю сайт к публикации'],
    ['#faq h2','Частые<br><em>вопросы</em>'],
    ['.faq details:nth-child(1) summary','Кто такой Keshamajestic'],['.faq details:nth-child(1) p','Frontend-разработчик, который соединяет чистый код, выразительный дизайн и анимацию'],
    ['.faq details:nth-child(2) summary','Что я разрабатываю'],['.faq details:nth-child(2) p','Лендинги, портфолио, интерактивные интерфейсы и адаптивные сайты'],
    ['.faq details:nth-child(3) summary','Какой стек использую'],['.faq details:nth-child(3) p','HTML, CSS, JavaScript, анимации, адаптивная верстка и современные веб-инструменты']
  ],
  en: [
    ['.hero>.eyebrow','// frontend developer · creative coder'],
    ['.hero-bottom p','I build fast websites,<br>interfaces and animations'],
    ['.pill-one','Clean code'],['.pill-two','Ship fast ✦'],
    ['#about h2','Not just a website,<br><em>but working code</em>'],
    ['.about-copy p:first-child','Keshamajestic is a frontend developer turning ideas into fast and lively interfaces'],
    ['.about-copy .muted','I build responsive websites, write clean JavaScript and add animation that supports the interface'],
    ['.value-card:nth-child(1) h3','Design'],['.value-card:nth-child(1) p','I plan the structure, logic and responsive behavior'],
    ['.value-card:nth-child(2) h3','Develop'],['.value-card:nth-child(2) p','I build interfaces with HTML, CSS and clean JavaScript'],
    ['.value-card:nth-child(3) h3','Optimize'],['.value-card:nth-child(3) p','I improve loading speed, responsiveness and details'],
    ['.directions-head p','Interactive tabs show the main directions of my development work'],
    ['.projects-head h2','Built with code and<br><em>good energy</em>'],
    ['.projects-head p','A selection of interfaces,<br>animations and experiments'],
    ['.project:nth-child(1) .project-name','Animated landing page'],['.project:nth-child(1) .project-tag','HTML · CSS · JavaScript'],
    ['.project:nth-child(2) .project-name','Interactive interface'],['.project:nth-child(2) .project-tag','UI · Motion · Responsive'],
    ['.project:nth-child(3) .project-name','Digital experiment'],['.project:nth-child(3) .project-tag','Canvas · Animation · Web'],
    ['#process h2','How a<br><em>project is built</em>'],
    ['.process-step:nth-child(1) h3','Analyze the task'],['.process-step:nth-child(1) p','I define the goal, structure and required functionality'],
    ['.process-step:nth-child(2) h3','Write the code'],['.process-step:nth-child(2) p','I build a responsive interface and add fluid animation'],
    ['.process-step:nth-child(3) h3','Launch the project'],['.process-step:nth-child(3) p','I test, optimize and prepare the website for publishing'],
    ['#faq h2','Frequently asked<br><em>questions</em>'],
    ['.faq details:nth-child(1) summary','Who is Keshamajestic'],['.faq details:nth-child(1) p','A frontend developer combining clean code, expressive design and animation'],
    ['.faq details:nth-child(2) summary','What do I build'],['.faq details:nth-child(2) p','Landing pages, portfolios, interactive interfaces and responsive websites'],
    ['.faq details:nth-child(3) summary','What stack do I use'],['.faq details:nth-child(3) p','HTML, CSS, JavaScript, animation, responsive layout and modern web tools']
  ]
};

function normalizeSentenceCase() {
  document.querySelectorAll('p,h1,h2,h3,a,button,summary,.section-label,.floating-pill').forEach(el => {
    if (el.closest('.logo')) return;
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) walker.currentNode.nodeValue = walker.currentNode.nodeValue.replace(/(^\s*|[.!?]\s+)([a-zа-яё])/giu, (_, lead, letter) => lead + letter.toUpperCase());
  });
}

function setLanguage(lang) {
  const selected = copy[lang] ? lang : 'ru';
  copy[selected].forEach(([selector, value]) => { const el = document.querySelector(selector); if (el) el.innerHTML = value; });
  document.documentElement.lang = selected;
  document.title = 'https://keshamajestic';
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === selected));
  document.querySelector('.lang-switch').setAttribute('aria-label', selected === 'ru' ? 'Выбор языка' : 'Language selection');
  document.querySelectorAll(`[data-${selected}]`).forEach(el => { el.innerHTML = el.dataset[selected]; });
  document.querySelectorAll('[data-placeholder-ru]').forEach(el => { el.placeholder = el.dataset[`placeholder${selected === 'ru' ? 'Ru' : 'En'}`]; });
  const languageChatInput=document.getElementById('chatInput'); if(languageChatInput)languageChatInput.value='';
  programmerCopy[selected].forEach(([selector,value]) => { const el=document.querySelector(selector); if(el) el.innerHTML=value; });
  const footerCredit = document.querySelector('footer p:last-child');
  if (footerCredit) footerCredit.textContent = 'Create By Keshamajestic';
  document.querySelectorAll('.logo').forEach(logo => { logo.innerHTML = '<span>k</span>esha'; });
  normalizeSentenceCase();
  localStorage.setItem('kesha-language', selected);
}

document.querySelectorAll('.lang-btn').forEach(btn => btn.addEventListener('click', () => setLanguage(btn.dataset.lang)));
setLanguage(localStorage.getItem('kesha-language') || 'ru');

const moodContent = {
  dream:{ru:['01 / 04','Живой frontend','Семантичная верстка, понятная структура и аккуратный интерфейс'],en:['01 / 04','Living frontend','Semantic markup, clear structure and a polished interface']},
  play:{ru:['02 / 04','Чистый JavaScript','Интерактивная логика без лишних зависимостей и тяжелых библиотек'],en:['02 / 04','Clean JavaScript','Interactive logic without unnecessary dependencies or heavy libraries']},
  magic:{ru:['03 / 04','Web-анимация','Плавное движение, реакции на курсор и эффекты при прокрутке'],en:['03 / 04','Web animation','Fluid motion, cursor reactions and scroll-based effects']},
  motion:{ru:['04 / 04','Адаптивный интерфейс','Сайт корректно выглядит и работает на любом размере экрана'],en:['04 / 04','Responsive interface','The website looks and works correctly at every screen size']}
};
document.querySelectorAll('.mood-tab').forEach(tab => tab.addEventListener('click', () => {
  document.querySelectorAll('.mood-tab').forEach(item => { item.classList.toggle('active',item===tab); item.setAttribute('aria-selected',item===tab); });
  const stage=document.querySelector('.mood-stage'), lang=document.documentElement.lang, values=moodContent[tab.dataset.mood][lang];
  stage.dataset.active=tab.dataset.mood; stage.querySelector('.mood-index').textContent=values[0]; stage.querySelector('h3').textContent=values[1]; stage.querySelector('p').textContent=values[2]; normalizeSentenceCase();
}));

const starCursor=document.querySelector('.cursor-glow');
document.querySelectorAll('a,button,summary,.project,.value-card').forEach(el=>{
  el.addEventListener('mouseenter',()=>starCursor.classList.add('hovering'));
  el.addEventListener('mouseleave',()=>starCursor.classList.remove('hovering'));
});

const chatForm=document.getElementById('chatForm');
const chatInput=document.getElementById('chatInput');
const chatMessages=document.getElementById('chatMessages');
const typingIndicator=document.getElementById('typingIndicator');
const chatPraise=document.getElementById('chatPraise');
chatInput.addEventListener('input',()=>{
  const isRu=document.documentElement.lang==='ru', target=isRu?chatInput.dataset.targetRu:chatInput.dataset.targetEn;
  const correct=chatInput.value===target;
  chatPraise.textContent=isRu?'Молодец':'Well done'; chatPraise.classList.toggle('show',correct);
});
function addChatMessage(text,type){
  const message=document.createElement('div'); message.className=`message ${type}`;
  const content=document.createElement('span'); content.textContent=text;
  const time=document.createElement('time'); time.textContent=new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'});
  message.append(content,time); chatMessages.append(message); chatMessages.scrollTop=chatMessages.scrollHeight;
}
chatForm.addEventListener('submit',event=>{
  event.preventDefault(); const isRu=document.documentElement.lang==='ru'; if(!chatInput.value)return;
  addChatMessage(isRu?'Сделай круто':'Make it cool','outgoing'); chatInput.disabled=true; chatPraise.classList.remove('show'); typingIndicator.classList.add('show');
  setTimeout(()=>{ typingIndicator.classList.remove('show'); addChatMessage(isRu?'Будет сделано 👌':'Will be done 👌','incoming'); chatInput.disabled=false; chatInput.value=''; chatInput.focus(); },900);
});

const pianoKeys=[...document.querySelectorAll('.piano-key')];
const piano=document.querySelector('.piano');
let audioContext;
function playPianoKey(key){
  if(!audioContext)audioContext=new (window.AudioContext||window.webkitAudioContext)();
  const now=audioContext.currentTime, frequency=Number(key.dataset.frequency);
  const master=audioContext.createGain(), filter=audioContext.createBiquadFilter();
  filter.type='lowpass'; filter.frequency.setValueAtTime(4200,now); filter.frequency.exponentialRampToValueAtTime(1100,now+1.7); filter.Q.value=.7;
  master.gain.setValueAtTime(.0001,now); master.gain.exponentialRampToValueAtTime(.38,now+.012); master.gain.exponentialRampToValueAtTime(.16,now+.18); master.gain.exponentialRampToValueAtTime(.0001,now+1.85);
  filter.connect(master); master.connect(audioContext.destination);
  [[1,'triangle',.68],[2,'sine',.2],[3,'sine',.1],[4,'sine',.035]].forEach(([ratio,type,level],index)=>{
    const oscillator=audioContext.createOscillator(), voice=audioContext.createGain();
    oscillator.type=type; oscillator.frequency.setValueAtTime(frequency*ratio,now); oscillator.detune.value=index===0?-2:index;
    voice.gain.setValueAtTime(level,now); voice.gain.exponentialRampToValueAtTime(.0001,now+(index===0?1.8:.75));
    oscillator.connect(voice); voice.connect(filter); oscillator.start(now); oscillator.stop(now+1.9);
  });
  const noiseLength=Math.floor(audioContext.sampleRate*.035), noiseBuffer=audioContext.createBuffer(1,noiseLength,audioContext.sampleRate), noiseData=noiseBuffer.getChannelData(0);
  for(let i=0;i<noiseLength;i++)noiseData[i]=(Math.random()*2-1)*(1-i/noiseLength);
  const noise=audioContext.createBufferSource(), noiseGain=audioContext.createGain(); noise.buffer=noiseBuffer; noiseGain.gain.value=.035; noise.connect(noiseGain); noiseGain.connect(filter); noise.start(now);
  key.classList.add('active'); clearTimeout(key.releaseTimer); key.releaseTimer=setTimeout(()=>key.classList.remove('active'),180);
}
pianoKeys.forEach(key=>key.addEventListener('pointerdown',()=>playPianoKey(key)));
let pianoVisible=false;
const pianoObserver=new IntersectionObserver(entries=>{pianoVisible=entries[0].isIntersecting;piano.classList.toggle('keyboard-ready',pianoVisible);},{threshold:.25});
pianoObserver.observe(piano);
addEventListener('keydown',event=>{
  if(event.target===chatInput||event.repeat||!pianoVisible)return;
  const key=pianoKeys.find(item=>item.dataset.key===event.key.toLowerCase()); if(key){event.preventDefault();playPianoKey(key);}
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = `${Math.min(i % 4, 3) * 70}ms`;
  observer.observe(el);
});

document.getElementById('year').textContent = new Date().getFullYear();

if (!reduced && matchMedia('(pointer:fine)').matches) {
  const glow = document.querySelector('.cursor-glow');
  let mouseX = innerWidth / 2, mouseY = innerHeight / 2, glowX = mouseX, glowY = mouseY;
  addEventListener('mousemove', (e) => { mouseX = e.clientX; mouseY = e.clientY; });
  function follow() {
    glowX += (mouseX - glowX) * .34; glowY += (mouseY - glowY) * .34;
    glow.style.left = `${glowX}px`; glow.style.top = `${glowY}px`;
    requestAnimationFrame(follow);
  }
  follow();

  document.querySelectorAll('.magnetic').forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      el.style.transform = `translate(${(e.clientX-r.left-r.width/2)*.18}px, ${(e.clientY-r.top-r.height/2)*.18}px)`;
    });
    el.addEventListener('mouseleave', () => el.style.transform = '');
  });

  document.querySelectorAll('.tilt-card').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX-r.left)/r.width-.5, y = (e.clientY-r.top)/r.height-.5;
      card.style.transform = `perspective(800px) rotateX(${-y*7}deg) rotateY(${x*7}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => card.style.transform = '');
  });

  addEventListener('scroll', () => {
    document.querySelectorAll('[data-speed]').forEach((el) => {
      el.style.transform = `translateY(${scrollY * Number(el.dataset.speed) * .15}px)`;
    });
  }, { passive:true });
}
