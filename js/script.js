'use strict';

// Todos os dados são locais. O site não registra nomes, respostas ou informações pessoais.
const historyStops = [
  {era:'HÁ MUITO TEMPO...', short:'Origens no Japão', title:'Tudo começou no Japão!', description:'Você sabia que o jiu-jitsu tem raízes no Japão? Há muitos anos, diferentes escolas ensinavam técnicas que valorizavam equilíbrio, movimento e controle. Nem tudo depende de força!', reflection:'Será que a técnica pode ser tão importante quanto a força?', image:'history-japan.svg', imageAlt:'Ilustração de um portal japonês com um grande círculo vermelho'},
  {era:'1882', short:'Uma nova ideia', title:'Um professor cheio de ideias!', description:'Jigoro Kano adorava aprender sobre artes marciais. Em 1882, fundou o Kodokan, onde desenvolveu o judô. Ele acreditava que a prática física também podia contribuir para a educação.', reflection:'O que o esporte pode ensinar além de movimentos?', image:'history-kano.svg', imageAlt:'Ilustração de livro aberto para representar a escola fundada por Jigoro Kano'},
  {era:'1908–1914', short:'Viagem ao Brasil', title:'A arte marcial cruza o oceano!', description:'No início do século XX, já havia apresentações de jiu-jitsu no Brasil. Em 1914, chegou Mitsuyo Maeda, conhecido como Conde Koma, que ajudou a divulgar essas técnicas no país.', reflection:'Por que conhecer registros antigos muda a forma de contar uma história?', image:'history-journey.svg', imageAlt:'Ilustração de um navio viajando pelo oceano'},
  {era:'SÉCULO XX', short:'Nossa própria história', title:'O Brasil também entrou nessa história!', description:'Carlos e Hélio Gracie, Luiz França, Oswaldo Fadda e outros professores ajudaram a desenvolver e divulgar o jiu-jitsu brasileiro. Essa história foi construída por muitas pessoas!', reflection:'O que acontece quando conhecemos diferentes personagens de uma mesma história?', image:'history-brazil.svg', imageAlt:'Ilustração de dois quimonos representando diferentes tradições do jiu-jitsu brasileiro'},
  {era:'HOJE', short:'Vikings e você', title:'Essa história chegou até você!', description:'Hoje, o jiu-jitsu também está presente em projetos sociais, como o Vikings, no CEU Tremembé. Cada treino pode trazer novas descobertas, amizades e aprendizados.', reflection:'Qual foi a descoberta mais interessante que você já fez no tatame?', image:'history-today.svg', imageAlt:'Ilustração de duas pessoas com quimonos em uma atividade comunitária'}
];

const techniques = [
  {name:'Guarda fechada', category:'POSIÇÃO', subtitle:'Uma defesa cheia de estratégia!', hook:'Você sabia que estar por baixo nem sempre significa estar em desvantagem?', description:'Na guarda fechada, o praticante utiliza as pernas para controlar a distância e criar oportunidades de defesa e ataque. Ela mostra como o planejamento pode fazer a diferença.', reflection:'Por que é importante pensar antes de agir?', skill:'PLANEJAMENTO', image:'tech-guard.svg'},
  {name:'Controle lateral', category:'POSIÇÃO', subtitle:'O segredo está no equilíbrio!', hook:'Será que controlar uma posição depende apenas de força?', description:'No controle lateral, um praticante fica ao lado do outro e utiliza o posicionamento do corpo para manter o controle. Equilíbrio, técnica e atenção trabalham juntos.', reflection:'O equilíbrio pode ser mais importante que a força?', skill:'EQUILÍBRIO', image:'tech-side.svg'},
  {name:'Montada', category:'POSIÇÃO', subtitle:'Cada posição exige atenção!', hook:'Você já ouviu o professor falar em montada?', description:'A montada acontece quando um praticante está por cima do tronco do outro, em uma posição de controle. Chegar a uma posição é importante; mantê-la também exige estratégia.', reflection:'Por que não basta apenas conquistar uma posição?', skill:'CONCENTRAÇÃO', image:'tech-mount.svg'},
  {name:'Raspagem', category:'TÉCNICA', subtitle:'O jogo pode virar!', hook:'E se uma situação difícil pudesse mudar completamente?', description:'A raspagem é uma técnica utilizada a partir da guarda para inverter a posição e ficar por cima. Ela lembra que observar oportunidades pode transformar uma situação.', reflection:'Você já precisou mudar de estratégia durante um treino?', skill:'RESOLUÇÃO DE PROBLEMAS', image:'tech-sweep.svg'},
  {name:'Passagem de guarda', category:'TÉCNICA', subtitle:'Encontre um novo caminho!', hook:'Imagine que existe um obstáculo entre você e seu objetivo.', description:'Na passagem de guarda, o praticante procura superar a defesa feita com as pernas do adversário para alcançar uma posição de controle. Observação e boas decisões fazem diferença.', reflection:'O que você faz quando o primeiro plano não funciona?', skill:'TOMADA DE DECISÃO', image:'tech-pass.svg'}
];

const questions = [
  {topic:'HISTÓRIA DO JIU-JITSU', prompt:'Em 1882, Jigoro Kano criou o Kodokan. O que ele valorizava além dos movimentos?', choices:['Apenas vencer competições.','A educação e o desenvolvimento das pessoas.','Somente o uso da força.'], answer:1, feedback:'Jigoro Kano acreditava que as artes marciais também poderiam contribuir para a formação das pessoas.', hint:'Releia a segunda parada da história.'},
  {topic:'HISTÓRIA DO JIU-JITSU', prompt:'Quem ajudou a construir a história do jiu-jitsu brasileiro?', choices:['Diferentes professores e praticantes ao longo do tempo.','Apenas um único lutador.','Somente os atletas que competem atualmente.'], answer:0, feedback:'Os Gracie, Luiz França, Oswaldo Fadda e muitos outros fizeram parte dessa história.', hint:'Releia a parada sobre o jiu-jitsu no Brasil.'},
  {topic:'POSIÇÕES E TÉCNICAS', prompt:'Qual técnica permite inverter a situação a partir da guarda e conquistar a posição por cima?', choices:['Montada.','Guarda fechada.','Raspagem.'], answer:2, feedback:'A raspagem permite inverter a posição. Ela mostra como uma boa estratégia pode mudar o jogo.', hint:'Reveja a técnica chamada “O jogo pode virar!”.'},
  {topic:'CURIOSIDADES', prompt:'O que as cores das faixas ajudam a identificar no jiu-jitsu?', choices:['A altura dos alunos.','Etapas da graduação e da aprendizagem.','O número de competições vencidas.'], answer:1, feedback:'As faixas marcam etapas da graduação, e a aprendizagem acontece em cada treino.', hint:'Abra a curiosidade sobre as cores das faixas.'},
  {topic:'TRADIÇÕES E RESPEITO', prompt:'Por que manter o quimono limpo e bem cuidado é importante?', choices:['Apenas para ficar bonito em fotografias.','Porque isso faz ganhar faixa rapidamente.','Para cuidar da higiene e respeitar os colegas.'], answer:2, feedback:'Cuidar do uniforme é uma atitude de higiene e respeito com quem compartilha o tatame.', hint:'Releia a curiosidade sobre o quimono.'}
];

const $ = (selector) => document.querySelector(selector);
const make = (tag, className, text) => {const node=document.createElement(tag);if(className)node.className=className;if(text!==undefined)node.textContent=text;return node;};

// Navegação principal e acessibilidade
const menuToggle = $('#menu-toggle');
const mobileNav = $('#mobile-nav');
menuToggle.addEventListener('click',()=>{
  const opened = menuToggle.getAttribute('aria-expanded')==='true';
  menuToggle.setAttribute('aria-expanded', String(!opened));
  menuToggle.setAttribute('aria-label', opened?'Abrir menu':'Fechar menu');
  mobileNav.hidden=opened;
});
mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
  menuToggle.setAttribute('aria-expanded','false');menuToggle.setAttribute('aria-label','Abrir menu');mobileNav.hidden=true;
}));
const typeToggle=$('#type-toggle');
typeToggle.addEventListener('click',()=>{
  const large=document.body.classList.toggle('large-text');
  typeToggle.setAttribute('aria-pressed',String(large));
  typeToggle.setAttribute('aria-label',large?'Restaurar tamanho dos textos':'Aumentar tamanho dos textos');
});

// História — cinco etapas e uma navegação local
let historyIndex=0;
function renderHistory(){
  const stop=historyStops[historyIndex];
  $('#history-art').src=`assets/illustrations/${stop.image}`;
  $('#history-art').alt=stop.imageAlt;
  $('#history-date').textContent=stop.era;
  $('#history-progress-label').textContent=`PARADA ${String(historyIndex+1).padStart(2,'0')} DE 05`;
  $('#history-card-title').textContent=stop.title;
  $('#history-card-text').textContent=stop.description;
  $('#history-question').textContent=stop.reflection;
  $('#history-number').textContent=`${String(historyIndex+1).padStart(2,'0')} / 05`;
  $('#history-prev').disabled=historyIndex===0;
  $('#history-next').textContent=historyIndex===historyStops.length-1?'RECOMEÇAR ↺':'PRÓXIMA →';
  $('#journey-nav').querySelectorAll('button').forEach((button,i)=>{
    const active=i===historyIndex;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));
  });
}
const journeyNav=$('#journey-nav');
historyStops.forEach((stop,i)=>{
  const tab=make('button','journey-tab');tab.type='button';
  tab.append(make('span','tab-number',String(i+1).padStart(2,'0')));
  const content=make('span','tab-text');content.append(make('span','tab-title',stop.short),make('span','tab-era',stop.era));tab.append(content);
  tab.addEventListener('click',()=>{historyIndex=i;renderHistory();});journeyNav.append(tab);
});
$('#history-prev').addEventListener('click',()=>{if(historyIndex>0){historyIndex-=1;renderHistory();}});
$('#history-next').addEventListener('click',()=>{historyIndex=(historyIndex+1)%historyStops.length;renderHistory();});
renderHistory();

// Posições e técnicas — revelação progressiva, sem instruções de execução
let techniqueIndex=0;
const techTabs=$('#tech-tabs');
const techMobile=window.matchMedia('(max-width: 767px)');
const techIndicators=$('#tech-indicators');
techniques.forEach((tech,i)=>{
  const b=make('button','tech-tab');b.type='button';b.append(make('span','tech-tab-number',String(i+1).padStart(2,'0')),make('span','tech-tab-name',tech.name));
  b.setAttribute('aria-controls','tech-detail');
  b.addEventListener('click',()=>{techniqueIndex=i;renderTech();});techTabs.append(b);
  const indicator=make('button','tech-indicator',String(i+1));
  indicator.type='button';
  indicator.setAttribute('aria-label',`${i+1} de ${techniques.length}: ${tech.name}`);
  indicator.setAttribute('aria-controls','tech-tabs tech-detail');
  indicator.addEventListener('click',()=>{techniqueIndex=i;renderTech();});
  techIndicators.append(indicator);
});
function renderTech(){
  const t=techniques[techniqueIndex];
  $('#tech-image').src=`assets/illustrations/${t.image}`;
  $('#tech-image').alt=`Representação ilustrativa do conceito de ${t.name}, sem instruções de execução`;
  $('#tech-kind').textContent=`${t.category} · DESCOBERTA ${String(techniqueIndex+1).padStart(2,'0')}`;
  $('#tech-name').textContent=t.name.toUpperCase();$('#tech-subtitle').textContent=t.subtitle;
  $('#tech-hook').textContent=t.hook;$('#tech-description').textContent=t.description;
  $('#tech-reflection').textContent=t.reflection;$('#tech-skill').textContent=`HABILIDADE: ${t.skill}`;
  $('#tech-reveal-content').hidden=true;
  $('#tech-reveal').hidden=false;
  $('#tech-reveal').setAttribute('aria-expanded','false');
  techTabs.querySelectorAll('button').forEach((button,i)=>{const active=i===techniqueIndex;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));});
  techIndicators.querySelectorAll('button').forEach((button,i)=>button.setAttribute('aria-pressed',String(i===techniqueIndex)));
  $('#tech-position').textContent=`${techniqueIndex+1} / ${techniques.length}`;
}
function moveTech(direction){
  techniqueIndex=(techniqueIndex+direction+techniques.length)%techniques.length;
  renderTech();
}
$('#tech-prev').addEventListener('click',()=>moveTech(-1));
$('#tech-next').addEventListener('click',()=>moveTech(1));
// Um gesto horizontal troca a seleção; rolagem vertical e zoom continuam nativos.
[techTabs,$('#tech-detail')].forEach(surface=>{
  let start=null;
  surface.addEventListener('touchstart',event=>{
    start=techMobile.matches && event.touches.length===1
      ? {x:event.touches[0].clientX,y:event.touches[0].clientY} : null;
  },{passive:true});
  surface.addEventListener('touchend',event=>{
    if(!start)return;
    const origin=start;start=null;
    if(!techMobile.matches || event.touches.length || !event.changedTouches.length)return;
    const dx=event.changedTouches[0].clientX-origin.x;
    const dy=event.changedTouches[0].clientY-origin.y;
    if(Math.abs(dx)>=45 && Math.abs(dx)>Math.abs(dy)*1.5){
      event.preventDefault();
      moveTech(dx<0?1:-1);
    }
  },{passive:false});
  surface.addEventListener('touchcancel',()=>{start=null;},{passive:true});
  techMobile.addEventListener('change',()=>{start=null;});
});
$('#tech-reveal').addEventListener('click',()=>{
  $('#tech-reveal-content').hidden=false;
  $('#tech-reveal').hidden=true;
  $('#tech-reveal').setAttribute('aria-expanded','true');
});
renderTech();

// Quiz — as respostas vivem somente na memória da página
let quizIndex=0;
let score=0;
let answered=false;
function renderQuiz(){
  answered=false;
  const q=questions[quizIndex];
  $('#quiz-count').textContent=`${String(quizIndex+1).padStart(2,'0')} / ${String(questions.length).padStart(2,'0')}`;
  $('#quiz-progress-fill').style.width=`${quizIndex/questions.length*100}%`;
  $('#quiz-topic').textContent=q.topic;
  $('#quiz-question').textContent=q.prompt;
  $('#quiz-question-screen').hidden=false;$('#quiz-result').hidden=true;
  $('#quiz-feedback').hidden=true;$('#quiz-next').hidden=true;
  const options=$('#quiz-options');options.replaceChildren();
  q.choices.forEach((choice,i)=>{
    const b=make('button','quiz-option');b.type='button';
    b.append(make('span','option-label',String.fromCharCode(65+i)),make('span','',choice));
    b.addEventListener('click',()=>chooseAnswer(i));options.append(b);
  });
}
function chooseAnswer(choice){
  if(answered)return;
  answered=true;const q=questions[quizIndex];const correct=choice===q.answer;
  if(correct)score++;
  const buttons=[...$('#quiz-options').querySelectorAll('button')];
  buttons.forEach((button,i)=>{
    button.disabled=true;
    if(i===q.answer)button.classList.add('correct');
    else if(i===choice)button.classList.add('incorrect');
  });
  const feedback=$('#quiz-feedback');feedback.replaceChildren();
  feedback.append(make('strong','',correct?'✓ MUITO BEM! VOCÊ ACERTOU!':'✦ APRENDER TAMBÉM É DESCOBRIR!'));
  feedback.append(make('p','',q.feedback));
  if(!correct)feedback.append(make('small','',q.hint));
  feedback.hidden=false;
  $('#quiz-next').hidden=false;
  $('#quiz-next').innerHTML=quizIndex===questions.length-1?'VER MEU RESULTADO <span aria-hidden="true">→</span>':'PRÓXIMA PERGUNTA <span aria-hidden="true">→</span>';
  $('#quiz-progress-fill').style.width=`${(quizIndex+1)/questions.length*100}%`;
}
function showResult(){
  $('#quiz-question-screen').hidden=true;$('#quiz-result').hidden=false;
  $('#quiz-count').textContent='05 / 05';
  $('#quiz-score').textContent=`${score} de ${questions.length}`;
  $('#quiz-result-message').textContent=score===questions.length?'Você explorou muito bem a nossa história! Continue aprendendo e compartilhando conhecimento.':'Você chegou ao final da jornada! Que tal reler alguma descoberta e tentar outra vez?';
}
$('#quiz-next').addEventListener('click',()=>{
  if(quizIndex===questions.length-1){showResult();return;}
  quizIndex++;renderQuiz();
});
$('#quiz-reset').addEventListener('click',()=>{score=0;quizIndex=0;renderQuiz();});
renderQuiz();
