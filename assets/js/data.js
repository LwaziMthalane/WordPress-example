/* G-YEZA SITE DATA. Edit content here: services, pricing, team, brands, quotes.
   Every page reads from this file, so one change updates the whole site. */
window.GY={
  site:{
    phone:'+27 31 001 0984',email:'info@g-yeza.co.za',hours:'Mon–Fri 08:00–16:30',
    store:'https://store.g-yeza.co.za/',
    logo:'https://www.g-yeza.co.za/wp-content/uploads/2023/11/logo.svg',
    formAction:'' /* e.g. 'https://formspree.io/f/xxxx'. Leave empty until you have the real endpoint. */
  },
  /* PHOTOS: swap any URL for your own file, e.g. 'img/team.jpg' */
  img:{
    support:GY_BASE+'img/photo-1.jpeg',
    work:GY_BASE+'img/photo-2.jpeg'
  },
  groups:['Digital','Infrastructure & support','Connectivity & more'],
  /* g = index into groups. 3D nodes on the home hero use the first 6 services. */
  services:[
    {id:'web',g:0,t:'Website development',s:'Websites, hosting and domains',d:'Mobile-friendly, high-speed websites with hosting and domain registration, built by an experienced team.',package:'web'},
    {id:'care',g:0,t:'Care plans',s:'Hosting, backups and updates',d:'Software updates, antivirus, backups and monitoring, with support that keeps you updated on performance.',package:'care'},
    {id:'m365',g:0,t:'Microsoft 365',s:'Setup, migration and admin',d:'Setup, domain configuration, email migration and ongoing administration.',package:'m365'},
    {id:'servers',g:1,t:'Server & network support',s:'Set up, manage and monitor',d:'We set up, manage and monitor your core infrastructure so your business keeps running.',package:'it'},
    {id:'support',g:1,t:'IT support & help desk',s:'Phone, remote and on-site',d:'Skilled technicians assist by phone, remote access or on-site visits.',package:'it'},
    {id:'security',g:1,t:'Cybersecurity',s:'Health checks and managed security',d:'Health checks, vulnerability scans and managed endpoint protection.',package:'sec'},
    {id:'consulting',g:1,t:'IT consultation',s:'Upgrades that lift performance',d:'Consulting and upgrades that improve your company\'s performance.',package:'it'},
    {id:'isp',g:2,t:'Internet & fibre',s:'Fibre, LTE, ADSL and data SIMs',d:'Fibre, LTE, data-only SIM or ADSL. Great value deals for business or home.',href:'https://store.g-yeza.co.za/shop'},
    {id:'voice',g:2,t:'Voice services',s:'PBX and VoIP at flat rates',d:'PBX to VoIP phones with uncapped calls at low flat monthly rates.'},
    {id:'cctv',g:2,t:'CCTV & access control',s:'Protect your home or business',d:'Pricing depends on site size, cameras and system, so we quote per site.',href:'/contact/?plan=CCTV'},
    {id:'ewaste',g:2,t:'E-waste recycling',s:'Collection and recycling reports',d:'Free assessment and collection for up to 50 items, with asset listing and a recycling report.',href:'https://store.g-yeza.co.za/e-waste/'}
  ],
  pricing:{
    web:{label:'Websites',plans:[
      ['Starter','R1,499','Once-off · 3–5 business days',['Up to 5 pages','Mobile responsive','Contact form & WhatsApp','Basic SEO & Google Maps','1 month free hosting']],
      ['Business','R6,499','Once-off · 7–10 business days',['Up to 10 pages','Custom design & blog','SEO optimisation','Social media & analytics','1 month free hosting']],
      ['Professional','R14,999','Once-off · 10–15 business days',['Up to 20 pages','Advanced SEO, blog & news','Booking system & CRM','Analytics dashboard','1 month free hosting']],
      ['E-Commerce Starter','R14,999','Once-off · 5–7 business days',['Up to 50 products','Payment gateway','Cart & checkout']],
      ['E-Commerce Business','R24,999','Once-off · 7–10 business days',['Up to 300 products','Inventory & customer accounts','PayFast / Peach Payments']],
      ['E-Commerce Enterprise','From R39,999','20–25 business days',['Unlimited products','API, CRM & ERP integrations','Custom development']]]},
    care:{label:'Care plans',plans:[
      ['Basic Care','R499/month','',['Hosting & SSL','Monthly backups','Security monitoring','1 change request']],
      ['Business Care','R999/month','',['Managed hosting & SSL','Weekly backups','Malware monitoring','Up to 3 updates']],
      ['Premium Care','R1,999/month','',['Priority support','Unlimited updates','Content uploads','Security audits']]]},
    it:{label:'IT support',plans:[
      ['Essential','R550/month','Up to 5 users',['Remote support & help desk','Antivirus monitoring','Software updates']],
      ['Professional','R850/month','Up to 5 users',['Everything in Essential','Microsoft 365 administration','Backup monitoring','Quarterly on-site visit']],
      ['Managed IT','R1,250/month','Up to 5 users',['Fully managed IT environment','Cybersecurity monitoring','Endpoint management','Monthly reports']]]},
    m365:{label:'Microsoft 365',plans:[
      ['Setup & migration','From R250','Once-off',['User setup','Domain configuration','Email migration']],
      ['Administration','R250/month','Per tenant',['User management','Password resets','License management']]]},
    sec:{label:'Security',plans:[
      ['Health check','R4,999','Once-off',['Security assessment','Vulnerability scan','Risk report']],
      ['Managed security','From R1,500/month','',['Endpoint protection','Threat monitoring','Security reporting']]]}
  },
  /* TEAM: leave photo '' for an initials placeholder */
  team:[
    {name:'John Doe 1',role:'Placeholding Manager',photo:GY_BASE+'img/Placeholder1.png'},
    {name:'John Doe 2',role:'Placeholding Intern',photo:GY_BASE+'iimg/Placeholder1.png'},
    {name:'John Doe 3',role:'Placeholding PR',photo:GY_BASE+'img/Placeholder1.png'}
  ],
  brands:[
    {name:'HP',logo:'https://cdn.simpleicons.org/hp'},
    {name:'Dell',logo:'https://cdn.simpleicons.org/dell'}
  ],
  quotes:[
    {t:'Reliable friendly service. You\'ve saved my computer a couple of times.',n:'Tanya Botha'},
    {t:'Excellent customer service and extremely supportive. Great products and services.',n:'Jacqueline Sokhulu'},
    {t:'Within 2 hours we had our critical system up and by close of business all computers were repaired.',n:'Kim Naidoo'}
  ],
  offices:[
    {n:'Durban',a:'Suite 201b Doone House<br>379 Anton Lembede Street<br>Durban, 4001'},
    {n:'Pretoria',a:'Block G Unit 33/3, Waterford Court<br>234 Glover Avenue, Die Hoewes<br>Centurion, 0157'}
  ],
  /* NAV: add a page by adding a line here (mega:true shows the services menu) */
  nav:[
    {l:'Home',h:'/',k:'home'},
    {l:'Services',h:'/services/',k:'services',mega:true},
    {l:'About us',h:'/about/',k:'about',drop:[['Who we are','/about/'],['Our team','/about/#team'],['Our brands','/about/#brands']]},
    {l:'Careers',h:'/careers/',k:'careers'},
    {l:'Contact',h:'/contact/',k:'contact'}
  ]
};
