iddata = new URLSearchParams(window.location.search)
id = iddata.get('id')
let datatitle= []
url=`https://dummyjson.com/products/${id}`  // url with product id 

main=document.querySelector("main")

 let  h1= document.createElement("h1")
    let image=document.createElement("img")
    image.classList.add("pimg")
    let outer = document.createElement("div")
    let desctn = document.createElement("h4")
    let price = document.createElement("h3")
    // let addcart = document.createElement("button")
    let info = document.createElement("div")
    info.classList.add("info")
    let  discountpercentage= document.createElement("h2")
    let  stock= document.createElement("h2")
    let  rating= document.createElement("h2")
    let imgdiv= document.createElement("div")
    let h2= document.querySelector(".otherimg")
    h2.innerText="OTHER IMAGES"
 
    imgdiv.classList.add("imgdiv")
 let category = document.createElement("h3")
        outer.classList.add("outerdiv")
        let detail = document.querySelector(".detail")
       


fetch(url) // promise
    .then((res)=>{
         return res.json()

    })
    .then((el)=>{
  
        category.innerText=`category: ${el.category}`
        category.style.color="crimson"
        image.src=el.thumbnail
        h1.innerText=el.title
        desctn.innerText= el.description
        price.innerText= "$" + el.price
        price.style.color="blue"
        // addcart.innerText="add to cart "
        discountpercentage.innerText=`discount : ${el.discountPercentage}`
        discountpercentage.style.color="gold"
        rating.innerText= `rating :${el.rating}`
        rating.style.color="brown"
        stock.innerText=`stock: ${el.stock}`
        stock.style.color="red"
       
         main.append(outer,detail)
         info.append(discountpercentage, rating , stock)
        
 el.images.map((oimg)=>{
        let otherimg = document.createElement("img")
           let aimg= document.createElement("a")
            otherimg.src= oimg
            aimg.href=oimg
        aimg.append(otherimg)
        imgdiv.append(aimg)
        
        })
         outer.append(image)
         detail.append(h1,category,desctn,price,info,h2,imgdiv)
         


        
    }
)


// other products suggestion 


url="https://dummyjson.com/products?limit=0"
fetch(url)
.then((res)=>{
    return res.json()
}).then((data)=>{
 dataset=[...data.products]
 otherp = document.querySelector(".otherp")

datatitle= data.products.map((d)=>{return d.title
 })
// console.log(datatitle)

 
 dataset.map((el)=>{
    let  h1= document.createElement("h1")
    let img=document.createElement("img")
    img.classList.add("opimg")
    let outerp = document.createElement("a")
    outerp.href= `projectAPI2.html?id=${el.id} `;
    let desctn = document.createElement("h4")
    let price = document.createElement("h3")
    let addcart = document.createElement("button")
    addcart.style.marginBottom="10px"
    addcart.style.backgroundColor="black"
    addcart.style.color="white"

    

    let category = document.createElement("h3")
        outerp.classList.add("outerdivp")
        category.innerText=`category: ${el.category}`
        category.style.color="crimson"
        img.src=el.thumbnail
        h1.innerText=el.title
        desctn.innerText= el.description
        price.innerText= "$" + el.price
        price.style.color="blue"
        addcart.innerText="add to cart "
         otherp.append(outerp)
         outerp.append(img,h1,category,desctn,price,addcart)

         
        
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







