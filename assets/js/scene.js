/* Lightweight animated 3D wireframes for the site's decorative canvases. */
(function(){
  var canvases=document.querySelectorAll('canvas[data-scene]');
  var reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  var colors={line:'49,146,199',point:'226,226,243'};

  function rotate(p,t){
    var y=p[1]*Math.cos(t*.32)-p[2]*Math.sin(t*.32);
    var z=p[1]*Math.sin(t*.32)+p[2]*Math.cos(t*.32);
    var x=p[0]*Math.cos(t*.2)+z*Math.sin(t*.2);
    z=-p[0]*Math.sin(t*.2)+z*Math.cos(t*.2);
    return [x,y*Math.cos(t*.14)-z*Math.sin(t*.14),y*Math.sin(t*.14)+z*Math.cos(t*.14)];
  }

  function project(p,cx,cy,scale){
    var d=3.6/(3.6-p[2]);
    return {x:cx+p[0]*scale*d,y:cy+p[1]*scale*d,z:p[2],d:d};
  }

  function makePoints(type){
    var points=[];
    if(type==='hero'){
      var n=84,g=Math.PI*(3-Math.sqrt(5));
      for(var i=0;i<n;i++){
        var y=1-(i/(n-1))*2,r=Math.sqrt(1-y*y),a=g*i;
        points.push([Math.cos(a)*r, y, Math.sin(a)*r]);
      }
      return {points:points,limit:.49};
    }
    if(type==='oct'){
      return {points:[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],limit:1.5};
    }
    if(type==='ico'){
      var phi=(1+Math.sqrt(5))/2;
      points=[[-1,phi,0],[1,phi,0],[-1,-phi,0],[1,-phi,0],[0,-1,phi],[0,1,phi],[0,-1,-phi],[0,1,-phi],[phi,0,-1],[phi,0,1],[-phi,0,-1],[-phi,0,1]];
      return {points:points,limit:2.1};
    }
    var count=180;
    for(var j=0;j<count;j++){
      var a2=j/count*Math.PI*2,u=2*a2,v=3*a2;
      var rad=1.05+.32*Math.cos(v);
      points.push([rad*Math.cos(u),rad*Math.sin(u),.32*Math.sin(v)]);
    }
    return {points:points,limit:0};
  }

  function draw(canvas,time){
    var rect=canvas.getBoundingClientRect(),dpr=Math.min(devicePixelRatio||1,2);
    if(!rect.width||!rect.height)return;
    if(canvas.width!==Math.round(rect.width*dpr)||canvas.height!==Math.round(rect.height*dpr)){
      canvas.width=Math.round(rect.width*dpr);canvas.height=Math.round(rect.height*dpr);
    }
    var ctx=canvas.getContext('2d');
    if(!ctx)return;
    ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.clearRect(0,0,rect.width,rect.height);
    var type=canvas.dataset.scene,shape=makePoints(type),cx=rect.width*(type==='hero'?.72:.72),cy=rect.height*.52;
    var scale=Math.min(rect.width*.31,rect.height*.48),angle=time*.00035;
    if(type==='hero')scale=Math.min(rect.width*.34,rect.height*.43);
    if(type==='knot')scale*=.8;
    var projected=shape.points.map(function(p){return project(rotate(p,angle),cx,cy,scale)});
    ctx.lineWidth=1;
    ctx.shadowBlur=12;ctx.shadowColor='rgba('+colors.line+',.55)';

    if(shape.limit){
      for(var i=0;i<projected.length;i++){
        for(var j=i+1;j<projected.length;j++){
          var a=shape.points[i],b=shape.points[j],dx=a[0]-b[0],dy=a[1]-b[1],dz=a[2]-b[2];
          if(dx*dx+dy*dy+dz*dz>shape.limit*shape.limit)continue;
          var near=Math.max(.12,Math.min(1,(projected[i].z+projected[j].z+2.2)/4.4));
          ctx.strokeStyle='rgba('+colors.line+','+(.16+near*.48)+')';
          ctx.beginPath();ctx.moveTo(projected[i].x,projected[i].y);ctx.lineTo(projected[j].x,projected[j].y);ctx.stroke();
        }
      }
    }else{
      ctx.strokeStyle='rgba('+colors.line+',.64)';
      ctx.beginPath();
      projected.forEach(function(p,i){if(i===0)ctx.moveTo(p.x,p.y);else ctx.lineTo(p.x,p.y)});
      ctx.closePath();ctx.stroke();
      for(var ring=0;ring<4;ring++){
        ctx.globalAlpha=.2+ring*.06;ctx.beginPath();
        for(var k=0;k<projected.length;k+=6){
          var pt=projected[(k+ring*projected.length/4)%projected.length];
          if(k===0)ctx.moveTo(pt.x,pt.y);else ctx.lineTo(pt.x,pt.y);
        }
        ctx.closePath();ctx.stroke();
      }
      ctx.globalAlpha=1;
    }

    ctx.shadowBlur=8;ctx.shadowColor='rgba('+colors.point+',.75)';
    projected.forEach(function(p){
      var radius=(type==='hero'?1.1:1.7)*Math.max(.65,p.d);
      ctx.fillStyle='rgba('+colors.point+','+(.4+Math.min(.5,p.d*.25))+')';
      ctx.beginPath();ctx.arc(p.x,p.y,radius,0,Math.PI*2);ctx.fill();
    });
    ctx.shadowBlur=0;
    if(!reduced)requestAnimationFrame(draw.bind(null,canvas));
  }

  Array.prototype.forEach.call(canvases,function(canvas){
    draw(canvas,reduced?0:performance.now());
  });
})();
