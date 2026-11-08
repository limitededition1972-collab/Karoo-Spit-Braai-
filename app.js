const menus = {
  spit: [
    {tag:"CLASSIC FAVOURITE",name:"Farmstyle",price:"R200 pp",desc:"450g lamb served with baby potatoes, coleslaw, curry pasta salad and garlic bread."},
    {tag:"KAROO COMFORT",name:"Plaaskos",price:"R220 pp",desc:"450g lamb served with creamed spinach & feta, curry pasta salad, green salad and garlic bread."},
    {tag:"MIXED GRILL",name:"Die Windpomp",price:"R215 pp",desc:"200g leg of lamb, 150g beef rump, BBQ chicken piece, potato bake and green salad."},
    {tag:"SUNDAY FEAST",name:"Farmstyle Sunday",price:"R235 pp",desc:"360g lamb, BBQ chicken piece, potato bake, butternut, creamed spinach & feta, green salad. Malva pudding with custard or ice cream."},
    {tag:"BRAAI CLASSIC",name:"Karoo Braai & Slaai",price:"R200 pp",desc:"200g lamb chops, 100g boerewors, BBQ chicken piece, curry pasta salad and garlic bread."},
    {tag:"THREE-COURSE",name:"Groot Karoo",price:"R240 pp",desc:"Bread table, grated cheddar, tuna mayo spread and jam. 360g lamb, BBQ chicken, curry pasta salad, green salad and garlic bread. Malva pudding with custard or ice cream."},
    {tag:"PREMIUM FEAST",name:"Karoo VIP",price:"R250 pp",desc:"Executive bread table, salty biscuits, assorted soft cheeses, tuna mayo spread, butter and jam. 360g lamb, BBQ chicken, potato bake, curry pasta salad, green salad and garlic bread. Malva pudding with custard or ice cream."}
  ],
  wedding: [
    {tag:"WEDDING MENU",name:"Akkerdam Plaas Menu",price:"R220 pp",desc:"200g whole beef rump, thinly shaved, homestyle chicken pie, rice with lamb & green bean stew, served with a green salad."},
    {tag:"WEDDING MENU",name:"Calvinia Vleisfees",price:"R240 pp",desc:"200g legs of lamb, 150g whole beef rump, chicken fillet with creamed spinach & feta, potato bake and roasted veggies with green salad."},
    {tag:"WEDDING MENU",name:"Hantamberg & Roggeveld",price:"R240 pp",desc:"200g spit-roasted whole beef rump, BBQ chicken piece, rice & gravy, roasted garlic potatoes and sweet butternut."},
    {tag:"WEDDING MENU",name:"Tant Sannie se Grand Troue",price:"R269 pp",desc:"Starter: Weskus mussel pot with cocktail roll and butter OR executive bread table. Main: legs of lamb, BBQ chicken, rice and gravy, potato bake and green salad. Dessert: choose one from the dessert menu."}
  ],
  summer: [
    {tag:"SEASONAL SPECIAL · CONFIRM PRICE",name:"Sizzling Summer Special",price:"Quote on request",desc:"Starter: dinner rolls, green pepper quiche, butter, tuna mayo spread, grated cheddar and jam.\nMain: lamb spit braai, BBQ chicken piece, curry pasta salad, green salad and garlic bread.\nDessert: malva pudding with custard or ice cream."}
  ]
};
const menuContent=document.getElementById("menu-content");
function renderMenu(key){
  menuContent.innerHTML=menus[key].map(m=>`<article class="menu-card"><span class="tag">${m.tag}</span><h3>${m.name}</h3><div class="price">${m.price}</div><p>${m.desc}</p><a href="#contact" data-choice="${m.name}">ASK ABOUT THIS MENU →</a></article>`).join("");
  menuContent.querySelectorAll("[data-choice]").forEach(a=>a.addEventListener("click",()=>{document.querySelector('[name="menu"]').value=a.dataset.choice;}));
}
document.querySelectorAll(".tab").forEach(btn=>btn.addEventListener("click",()=>{
  document.querySelectorAll(".tab").forEach(b=>{b.classList.remove("active");b.setAttribute("aria-selected","false")});
  btn.classList.add("active");btn.setAttribute("aria-selected","true");renderMenu(btn.dataset.menu);
}));
renderMenu("spit");
document.getElementById("year").textContent=new Date().getFullYear();
document.getElementById("quote-form").addEventListener("submit",e=>{
  e.preventDefault();const f=new FormData(e.currentTarget);
  const lines=["Karoo Spit Braai – Catering enquiry","",`Name: ${f.get("name")}`,`Phone: ${f.get("phone")}`,`Email: ${f.get("email")||"Not supplied"}`,`Event date: ${f.get("date")||"Not specified"}`,`Guests: ${f.get("guests")||"Not specified"}`,`Location: ${f.get("location")||"Not specified"}`,`Event: ${f.get("event")||"Not specified"}`,`Menu: ${f.get("menu")||"Not specified"}`,`Details: ${f.get("message")||"None"}`];
  const msg=encodeURIComponent(lines.join("\n"));
  document.getElementById("form-status").textContent="Opening WhatsApp with your enquiry. Please review and press Send.";
  window.location.href=`https://wa.me/27746411518?text=${msg}`;
});
if("serviceWorker" in navigator){window.addEventListener("load",()=>navigator.serviceWorker.register("./service-worker.js").catch(()=>{}));}
