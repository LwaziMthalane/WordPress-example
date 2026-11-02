/* EDIT HERE: application deadline (South Africa time) and contact email */
var DEADLINE=new Date('2026-06-20T16:30:00+02:00'),HR='hr@g-yeza.co.za';
document.querySelectorAll('[data-role]').forEach(function(a){
  a.href='mailto:'+HR+'?subject='+encodeURIComponent('WIL Application — '+a.dataset.role+' — [Your Full Name]');
});
if(new Date()>DEADLINE){document.getElementById('closed').classList.add('on');document.getElementById('deadline').textContent='Applications closed on 20/06/26 at 16:30.'}
