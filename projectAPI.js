
let dataset= []
let datatitle=[]

let main = document.querySelector("main")
url="https://dummyjson.com/products?limit=0"
fetch(url)
.then((res)=>{
    return res.json()
}).then((data)=>{
 dataset=[...data.products]

datatitle= data.products.map((d)=>{return d.title
 })
// console.log(datatitle)

 
 dataset.map((el)=>{
    let  h1= document.createElement("h1")
    let img=document.createElement("img")
    let outer = document.createElement("a")
    outer.href= `projectAPI2.html?id=${el.id} `;
    let desctn = document.createElement("h4")
    let price = document.createElement("h3")
    let addcart = document.createElement("button")
    addcart.style.backgroundColor="black"
    addcart.style.color="white"

    

    let category = document.createElement("h3")
        outer.classList.add("outerdiv")
        category.innerText=`category: ${el.category}`
        category.style.color="crimson"
        img.src=el.thumbnail
        h1.innerText=el.title
        desctn.innerText= el.description
        price.innerText= "$" + el.price
        price.style.color="blue"
        addcart.innerText="add to cart "
         main.append(outer)
         outer.append(img,h1,category,desctn,price,addcart)

         
        
    });


})

let p = document.createElement("p")
let searchp= document.querySelector(".suggest")
 let input = document.querySelector(".searchbox")
// console.log(input.value)
 
 input.addEventListener("input" , ()=>{
    searchp.innerHTML =""
     if (input.value===""){
        searchp.innerText =""
        return
     }
//     console.clear();
// console.log(input.value)
let result= datatitle.filter((title) => {
 return title.toLowerCase().includes(input.value.toLowerCase())
});
result.forEach(element => {
    let p = document.createElement("p")
    p.classList.add("suggestion")
    p.innerText=element
searchp.append(p)

 });



 }

 );
// input.addEventListener("input", () => {

//     searchp.innerHTML = "";   // Purani suggestions hata do

//     if (input.value === "") {
//         return;
//     }

//     let result = datatitle.filter((title) => {
//         return title.toLowerCase().includes(input.value.toLowerCase());
//     });

//     result.forEach((element) => {
//         let p = document.createElement("p");
//         p.innerText = element;
//         searchp.append(p);
//     });

// });

 