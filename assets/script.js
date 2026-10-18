// Animaciones de entrada, navegación suave y efectos interactivos de 20 WEB.
document.querySelectorAll('.card').forEach((card,i)=>card.style.setProperty('--delay',((i%4)*70)+'ms'));
const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealTargets=document.querySelectorAll('.home-page .reveal, .home-page .project-card, .home-page .trust-strip > div, .home-page .about-panel');
if(!reduceMotion && 'IntersectionObserver' in window){
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}
 }),{threshold:.07,rootMargin:'0px 0px -25px 0px'});
 revealTargets.forEach((el,i)=>{el.classList.add('reveal');if(el.classList.contains('project-card'))el.style.setProperty('--delay',((i%4)*70)+'ms');observer.observe(el)});
}else{revealTargets.forEach(el=>el.classList.add('is-visible'))}
document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener('click',event=>{
 const id=link.getAttribute('href');if(id&&id.length>1){const target=document.querySelector(id);if(target){event.preventDefault();target.scrollIntoView({behavior:reduceMotion?'auto':'smooth',block:'start'})}}
}));
if(!reduceMotion && window.matchMedia('(pointer:fine)').matches){
 const glow=document.createElement('div');glow.className='cursor-glow';document.body.appendChild(glow);
 window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px';glow.style.opacity='1'},{passive:true});
 document.querySelectorAll('.project-card').forEach(card=>{
  card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect();const x=(e.clientX-r.left)/r.width;const y=(e.clientY-r.top)/r.height;card.style.setProperty('--mx',(x*100)+'%');card.style.setProperty('--my',(y*100)+'%');});
  card.addEventListener('pointerleave',()=>{card.style.removeProperty('--mx');card.style.removeProperty('--my')});
 });
}
