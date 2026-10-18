// Microinteracciones y animaciones de entrada para la colección.
document.querySelectorAll('.card').forEach((card,i)=>{card.style.setProperty('--delay',(Math.min(i%4,3)*65)+'ms')});
const revealTargets=document.querySelectorAll('.home-page .reveal, .home-page .project-card, .home-page .trust-strip > div, .home-page .about-panel');
if('IntersectionObserver' in window){
 const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target)}
 }),{threshold:.08,rootMargin:'0px 0px -25px 0px'});
 revealTargets.forEach((el,i)=>{el.classList.add('reveal');if(el.classList.contains('project-card'))el.style.setProperty('--delay',((i%4)*65)+'ms');revealObserver.observe(el)});
}else{revealTargets.forEach(el=>el.classList.add('is-visible'))}
document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener('click',event=>{
 const id=link.getAttribute('href');
 if(id&&id.length>1){const target=document.querySelector(id);if(target){event.preventDefault();target.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'})}}
}));
