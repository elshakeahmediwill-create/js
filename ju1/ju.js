// التعامل مع Tabs
let tabs = document.querySelectorAll(".recipe-tabs .nav-link");
let boxes = document.querySelectorAll(".tab-pane");

tabs.forEach(tab => {
  tab.addEventListener("click", function() {
    // شيل active من كل الأزرار والمحتوى
    tabs.forEach(t => t.classList.remove("active"));
    boxes.forEach(b => b.classList.remove("active"));

    // فعل الزر والمحتوى المناسب
    tab.classList.add("active");
    let target = tab.dataset.tab; // اسم المحتوى
    document.getElementById(target).classList.add("active");
  });
});
let row1 = document.getElementById("row1");
let ingredients = document.getElementById("ingredients");
let instructions = document.getElementById("instructions");
let nutrition = document.getElementById("nutrition");
let tips = document.getElementById("tips");
let clfa = document.getElementById("clfa")


let items = ingredients.querySelectorAll(".ingredients-list");

clfa.addEventListener("click", function(){
   items.forEach(el => el.style.display = "none");
     let randomIndex = Math.floor(Math.random() * items.length);
  let randomItem = items[randomIndex];
   randomItem.style.display = "block";
})
let item = row1.querySelectorAll(".image-section");

clfa.addEventListener("click", function(){
   item.forEach(el => el.style.display = "none");
     let randomIndex = Math.floor(Math.random() * item.length);
  let randomItem = item[randomIndex];
   randomItem.style.display = "block";
})
let ite = instructions.querySelectorAll(".namber");

clfa.addEventListener("click", function(){
   ite.forEach(el => el.style.display = "none");
     let randomIndex = Math.floor(Math.random() * ite.length);
  let randomItem = ite[randomIndex];
   randomItem.style.display = "block";
})
let it = nutrition.querySelectorAll(".rc");

clfa.addEventListener("click", function(){
   it.forEach(el => el.style.display = "none");
     let randomIndex = Math.floor(Math.random() * it.length);
  let randomItem = it[randomIndex];
   randomItem.style.display = "block";
})
let i = tips.querySelectorAll(".ti");

clfa.addEventListener("click", function(){
   i.forEach(el => el.style.display = "none");
     let randomIndex = Math.floor(Math.random() * i.length);
  let randomItem = i[randomIndex];
   randomItem.style.display = "block";
})
items.forEach((el, index) => { if(index !== 0) el.style.display = "none"; });
item.forEach((el, index) => { if(index !== 0) el.style.display = "none"; });
ite.forEach((el, index) => { if(index !== 0) el.style.display = "none"; });
it.forEach((el, index) => { if(index !==0) el.style.display = "none"; });
i.forEach((el, index) => { if(index !== 0) el.style.display = "none"; });

