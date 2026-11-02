/* G-YEZA SITE BEHAVIOUR. Builds header/footer from data.js and renders data-driven sections.
   Add a new section by adding an element like <div data-services></div> to a page. */
(function(){
  var G=window.GY,S=G.site,page=document.body.dataset.page,$=function(s,r){return (r||document).querySelector(s)};
  var link=function(s){return s.href||(s.package?'/services/?package='+encodeURIComponent(s.package)+'#pricing':'/services/#'+s.id)};

  /* ---------- header ---------- */
  function header(){
    var nav=G.nav.map(function(n){
      var a=n.k===page?' act':'';
      if(n.mega){
        var cols=G.groups.map(function(g,gi){return '<div class="col"><h4>'+g+'</h4>'+G.services.filter(function(s){return s.g===gi}).map(function(s){return '<a href="'+link(s)+'"><strong>'+s.t+'</strong><span>'+s.s+'</span></a>'}).join('')+'</div>'}).join('');
        return '<li><button aria-expanded="false" class="'+a+'">'+n.l+'<i class="chev"></i></button><div class="panel"><div class="w mega">'+cols+'<div class="feat"><h4>Need a quote?</h4><p>Tell us what you need and we will recommend a package that fits your budget.</p><a href="/contact/">Talk to our team &rarr;</a></div></div></div></li>';
      }
      if(n.drop)return '<li class="hasd"><button aria-expanded="false" class="'+a+'">'+n.l+'<i class="chev"></i></button><div class="drop">'+n.drop.map(function(d){return '<a href="'+d[1]+'">'+d[0]+'</a>'}).join('')+'</div></li>';
      return '<li><a class="'+a.trim()+'" href="'+n.h+'">'+n.l+'</a></li>';
    }).join('');
    $('#site-header').innerHTML='<div class="hd"><div class="top"><div class="w"><span><a href="tel:'+S.phone.replace(/\s/g,'')+'">'+S.phone+'</a> &nbsp;|&nbsp; <a href="mailto:'+S.email+'">'+S.email+'</a></span><span class="hm">'+S.hours+' &nbsp;|&nbsp; Durban &amp; Pretoria</span></div></div><div class="bar"><div class="w"><a class="logo" href="/"><img src="'+S.logo+'" alt="G-Yeza Data Solutions"></a><button class="burger" aria-label="Open menu" aria-expanded="false"><i></i><i></i><i></i></button><div class="navw"><ul class="nav">'+nav+'</ul><div class="acts"><a class="btn st" href="'+S.store+'">Online store</a><a class="btn b3" href="/contact/">Start a project</a></div></div></div></div></div>';

    var hd=$('.hd'),items=[].slice.call(document.querySelectorAll('.nav>li')).filter(function(li){return $('button',li)});
    function close(x){items.forEach(function(li){if(li!==x){li.classList.remove('open');$('button',li).setAttribute('aria-expanded','false')}})}
    items.forEach(function(li){
      var b=$('button',li),t;
      b.addEventListener('click',function(){var o=!li.classList.contains('open');close(li);li.classList.toggle('open',o);b.setAttribute('aria-expanded',o)});
      if(matchMedia('(hover:hover) and (min-width:1021px)').matches){
        li.addEventListener('mouseenter',function(){clearTimeout(t);close(li);li.classList.add('open')});
        li.addEventListener('mouseleave',function(){t=setTimeout(function(){li.classList.remove('open')},160)});
      }
    });
    document.addEventListener('click',function(e){if(!hd.contains(e.target))close()});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'){close();hd.classList.remove('mo')}});
    var bg=$('.burger');bg.addEventListener('click',function(){bg.setAttribute('aria-expanded',hd.classList.toggle('mo'))});
    addEventListener('scroll',function(){hd.classList.toggle('sc',scrollY>10)},{passive:true});
  }

  /* ---------- footer ---------- */
  function footer(){
    $('#site-footer').innerHTML='<footer class="ft"><div class="w"><div class="ftg"><div><img src="'+S.logo+'" alt="G-Yeza"><p>Data solutions, IT support and connectivity, delivered at a price that fits your budget.</p></div><div><h4>Services</h4><ul>'+G.services.slice(0,6).map(function(s){return '<li><a href="'+link(s)+'">'+s.t+'</a></li>'}).join('')+'</ul></div><div><h4>Company</h4><ul><li><a href="/about/">About us</a></li><li><a href="/about/#team">Our team</a></li><li><a href="/careers/">Careers</a></li><li><a href="/contact/">Contact</a></li><li><a href="'+S.store+'">Online store</a></li></ul></div><div><h4>Get in touch</h4><ul><li><a href="tel:'+S.phone.replace(/\s/g,'')+'">'+S.phone+'</a></li><li><a href="mailto:'+S.email+'">'+S.email+'</a></li><li>'+S.hours+'</li></ul></div></div><div class="ftb">&copy; '+new Date().getFullYear()+' G-Yeza Data Solutions. All rights reserved.</div></div></footer>';
  }

  /* ---------- data-driven sections ---------- */
  function render(){
    var el;
    if(el=$('[data-services]')){var lim=+el.dataset.services||99;
      el.innerHTML=G.services.slice(0,lim).map(function(s,i){return '<a class="card rv" id="'+s.id+'" href="'+link(s)+'" style="--i:'+(i%3)+'"><div class="n">'+String(i+1).padStart(2,'0')+' / '+G.groups[s.g].toUpperCase()+'</div><h3>'+s.t+'</h3><p>'+s.d+'</p><span>'+(s.package?'View packages &rarr;':'Learn more &rarr;')+'</span></a>'}).join('')}
    if(el=$('[data-quotes]'))el.innerHTML=G.quotes.map(function(q,i){return '<div class="q rv" style="--i:'+i+'">&ldquo;'+q.t+'&rdquo;<b>'+q.n+'</b></div>'}).join('');
    if(el=$('[data-brands]'))el.innerHTML=G.brands.map(function(b,i){return '<div class="logo-i rv" style="--i:'+i+'">'+(b.logo?'<img src="'+b.logo+'" alt="'+b.name+'" loading="lazy">':'<span>'+b.name+'</span>')+'</div>'}).join('');
    if(el=$('[data-team]'))el.innerHTML=G.team.map(function(p,i){var ini=p.name.split(' ').map(function(w){return w[0]}).slice(0,2).join('').toUpperCase();return '<div class="person rv" style="--i:'+i+'"><div class="ph">'+(p.photo?'<img src="'+p.photo+'" alt="'+p.name+'" loading="lazy">':ini)+'</div><h3>'+p.name+'</h3><p>'+p.role+'</p></div>'}).join('');
    if(el=$('[data-offices]'))el.innerHTML=G.offices.map(function(o){return '<div class="office"><h3>'+o.n+'</h3><p>'+o.a+'</p></div>'}).join('');
    if(el=$('[data-img]'))document.querySelectorAll('[data-img]').forEach(function(e){e.src=G.img[e.dataset.img]});
    if(el=$('[data-pricing]')){
      var tabs=$('.tabs',el),plans=$('.plans',el);
      var show=function(k){[].forEach.call(tabs.children,function(b){b.setAttribute('aria-selected',b.dataset.k===k)});
        plans.innerHTML=G.pricing[k].plans.map(function(p){return '<div class="plan"><h3>'+p[0]+'</h3><div class="amt">'+p[1]+'</div><div class="note">'+p[2]+'</div><ul>'+p[3].map(function(f){return '<li>'+f+'</li>'}).join('')+'</ul><a class="btn b3" href="/contact/?plan='+encodeURIComponent(p[0])+'">Get this plan</a></div>'}).join('')};
      Object.keys(G.pricing).forEach(function(k){var b=document.createElement('button');b.type='button';b.dataset.k=k;b.textContent=G.pricing[k].label;b.onclick=function(){show(k)};tabs.appendChild(b)});
      var selected=new URLSearchParams(location.search).get('package');
      show(G.pricing[selected]?selected:Object.keys(G.pricing)[0]);
    }
  }

  /* ---------- reveal on scroll ---------- */
  function reveal(){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
    document.querySelectorAll('.rv').forEach(function(e){io.observe(e)});
  }

  /* ---------- contact form ---------- */
  function form(){
    var f=$('form[data-form]');if(!f)return;var msg=$('.msg',f);
    var plan=new URLSearchParams(location.search).get('plan');if(plan)f.message.value='I am interested in: '+plan;
    f.addEventListener('submit',function(e){
      e.preventDefault();if(f.website.value)return;
      if(!f.name.value.trim()||!/\S+@\S+\.\S+/.test(f.email.value)){msg.textContent='Please enter your name and a valid email address.';return}
      if(!S.formAction){msg.textContent='This form is not connected yet. Please email '+S.email+' or call '+S.phone+'.';return}
      msg.textContent='Sending...';
      fetch(S.formAction,{method:'POST',headers:{Accept:'application/json'},body:new FormData(f)})
        .then(function(r){if(!r.ok)throw 0;f.reset();msg.textContent='Thank you. We will be in touch soon.'})
        .catch(function(){msg.textContent='Something went wrong. Please email '+S.email+' instead.'});
    });
  }

  header();footer();render();reveal();form();
  document.dispatchEvent(new Event('gy-ready'));
})();
