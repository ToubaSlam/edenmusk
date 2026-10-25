// Keep one garden scene aligned behind the header and each route's introduction.
export function initializeGardenHeader(){
 const backdrop=document.querySelector('.garden-masthead');
 if(!backdrop)return;
 let frame=0;
 const update=()=>{
  frame=0;
  const intro=document.querySelector('#main>.home-intro,#main>.page-top,#main>.page-title,#main>.eden-story-intro,#main>.breadcrumbs');
  const end=intro||document.querySelector('.launch-strip');
  if(end){const height=Math.ceil(end.getBoundingClientRect().bottom+window.scrollY);backdrop.style.height=`${height}px`;}
  document.body.classList.toggle('header-pinned',window.scrollY>20);
 };
 const schedule=()=>{if(!frame)frame=requestAnimationFrame(update)};
 new ResizeObserver(schedule).observe(document.querySelector('.site-header'));
 new ResizeObserver(schedule).observe(document.querySelector('#main'));
 new MutationObserver(schedule).observe(document.querySelector('#main'),{childList:true});
 window.addEventListener('resize',schedule,{passive:true});
 window.addEventListener('scroll',schedule,{passive:true});
 document.fonts.ready.then(schedule);
 update();
}
