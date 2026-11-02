/* hero chapters: switch scene by scroll progress */
(function(){
  var cine=document.querySelector('.cine'),ch=[].slice.call(document.querySelectorAll('.chap')),dots=[].slice.call(document.querySelectorAll('.dots i')),cue=document.querySelector('.cue'),cur=-1;
  function upd(){
    var q=cine.getBoundingClientRect(),p=Math.max(0,Math.min(.999,-q.top/(q.height-innerHeight))),i=Math.floor(p*ch.length);
    if(i!==cur){cur=i;ch.forEach(function(c,k){c.classList.toggle('on',k===i)});dots.forEach(function(d,k){d.classList.toggle('on',k===i)})}
    cue.style.opacity=p>.05?0:1;
  }
  addEventListener('scroll',upd,{passive:true});upd();
})();
