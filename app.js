const menuData={
  spit:[
    {name:"Farmstyle",price:"R200 pp",desc:"450g lamb with baby potatoes, coleslaw, curry pasta salad and garlic bread."},
    {name:"Plaaskos",price:"R220 pp",desc:"450g lamb with creamed spinach & feta, curry pasta salad, green salad and garlic bread."},
    {name:"Die Windpomp",price:"R215 pp",desc:"200g leg of lamb, 150g beef rump, BBQ chicken, potato bake and green salad."},
    {name:"Farmstyle Sunday",price:"R235 pp",desc:"360g lamb, BBQ chicken, potato bake, butternut, creamed spinach & feta and green salad. Malva pudding with custard or ice cream."},
    {name:"Karoo Braai & Slaai",price:"R200 pp",desc:"200g lamb chops, 100g boerewors, BBQ chicken, curry pasta salad and garlic bread."},
    {name:"Groot Karoo",price:"R240 pp",desc:"Bread table, grated cheddar, tuna mayo spread and jam. 360g lamb, BBQ chicken, curry pasta salad, green salad and garlic bread. Malva pudding with custard or ice cream."},
    {name:"Karoo VIP",price:"R250 pp",desc:"Executive bread table, salty biscuits, assorted soft cheeses, tuna mayo spread, butter and jam. 360g lamb, BBQ chicken, potato bake, curry pasta salad and green salad. Malva pudding with custard or ice cream."}
  ],
  wedding:[
    {name:"Akkerdam Plaas Menu",price:"R220 pp",desc:"Beef rump, homestyle chicken pie, rice with lamb and green bean stew, served with green salad."},
    {name:"Calvinia Vleisfees",price:"R240 pp",desc:"Legs of lamb, beef rump, chicken fillet with creamed spinach & feta, potato bake, roasted vegetables and green salad."},
    {name:"Hantamberg & Roggeveld",price:"R240 pp",desc:"Spit-roasted beef rump, BBQ chicken, rice and gravy, roasted garlic potatoes and sweet butternut."},
    {name:"Tant Sannie se Grand Troue",price:"R269 pp",desc:"Starter and main course selection with lamb, BBQ chicken, sides and dessert choice."}
  ],
  special:[
    {name:"Sizzling Summer Special",price:"R235 pp",desc:"Three-course menu. Starter: dinner rolls, green pepper quiche, butter, tuna mayo, cheddar and jam. Main: lamb spit braai, BBQ chicken, curry pasta salad, green salad and garlic bread. Dessert: malva pudding with custard or ice cream. Please confirm current availability."}
  ]
};
const list=document.getElementById('menu-list');
const select=document.getElementById('menu-choice');
function renderMenu(key){
  list.innerHTML=menuData[key].map(item=>`<article class="menu-card"><small>${key==='special'?'SEASONAL SPECIAL':key==='wedding'?'WEDDING MENU':'KAROO SPIT BRAAI MENU'}</small><h3>${item.name}</h3><div class="price">${item.price}</div><p>${item.desc}</p><button type="button" data-menu-choice="${item.name}">ASK ABOUT THIS MENU ↗</button></article>`).join('');
  list.querySelectorAll('[data-menu-choice]').forEach(button=>button.addEventListener('click',()=>{const choice=button.dataset.menuChoice;if(![...select.options].some(option=>option.value===choice)){const option=document.createElement('option');option.value=choice;option.textContent=choice;select.add(option);}select.value=choice;document.getElementById('contact').scrollIntoView({behavior:'smooth'});}));
}
document.querySelectorAll('.tab').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('.tab').forEach(tab=>{tab.classList.remove('active');tab.setAttribute('aria-selected','false');});
  button.classList.add('active');button.setAttribute('aria-selected','true');renderMenu(button.dataset.menu);
}));
renderMenu('spit');
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('quote-form').addEventListener('submit',event=>{
  event.preventDefault();const form=new FormData(event.currentTarget);
  const message=[
    'Karoo Spit Braai - catering enquiry','',`Name: ${form.get('name')}`,`Phone: ${form.get('phone')}`,`Email: ${form.get('email')||'Not supplied'}`,`Event date: ${form.get('date')||'Not specified'}`,`Guests: ${form.get('guests')||'Not specified'}`,`Location: ${form.get('location')||'Not specified'}`,`Event: ${form.get('event')||'Not specified'}`,`Menu: ${form.get('menu')||'Not sure yet'}`,`Details: ${form.get('message')||'None'}`
  ].join('\n');
  document.getElementById('form-status').textContent='WhatsApp will open with your enquiry. Review it there and press Send.';
  window.open(`https://wa.me/27746411518?text=${encodeURIComponent(message)}`,'_blank','noopener');
});
let installPrompt=null;const installButton=document.getElementById('install-app');
window.addEventListener('beforeinstallprompt',event=>{event.preventDefault();installPrompt=event;installButton.hidden=false;});
installButton.addEventListener('click',async()=>{if(!installPrompt)return;installPrompt.prompt();await installPrompt.userChoice;installPrompt=null;installButton.hidden=true;});
window.addEventListener('appinstalled',()=>{installButton.hidden=true;document.getElementById('form-status').textContent='Karoo Spit Braai is installed.';});
if('serviceWorker' in navigator&&location.protocol.startsWith('http')){
  window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js',{scope:'./'}).catch(error=>console.error('App offline support could not start:',error)));
}
