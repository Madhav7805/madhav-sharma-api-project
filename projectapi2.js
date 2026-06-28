let iddata = new URLSearchParams(window.location.search)
let id = iddata.get('id')
let datatitle=[]
let url=`https://dummyjson.com/products/${id}`  // url with product id 
let main=document.querySelector("main")
let  h1= document.createElement("h1")
     h1.style.fontFamily="Georgia"
let image=document.createElement("img")
    image.classList.add("pimg")
let outer = document.createElement("div")
    outer.classList.add("outerdiv")
let desctn = document.createElement("h4")
let price = document.createElement("h3")
let info = document.createElement("div")
    info.classList.add("info")
let discountpercentage= document.createElement("h1")
let stock= document.createElement("h2")
let rating= document.createElement("h2")
let imgdiv= document.createElement("div")
    imgdiv.classList.add("imgdiv")
let category = document.createElement("h3")
let detail = document.querySelector(".detail")
let pricediv = document.createElement("div")
    pricediv.style.display="flex"
    pricediv.style.gap="70px"
let searchp= document.querySelector(".suggest")
let input = document.querySelector(".searchbox")   
let addtocart= document.createElement("button")  
    addtocart.innerText="ADD TO CART"
    addtocart.classList.add("addtocart")
let cartdiv = document.createElement("div")
    cartdiv.classList.add("cartdiv")
    // cartdiv.append(addtocart)
let cartd = JSON.parse(localStorage.getItem("cart")) || []
let cartlist = document.querySelector(".cartlist")


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
        price.innerText= ` $${el.price} `
        price.style.fontSize="40px"
        price.style.width="100px"
        price.style.paddingTop="30px"
        price.style.color="blue"
        discountpercentage.innerText=`-${el.discountPercentage}%`
        discountpercentage.style.fontSize="50px"
        discountpercentage.style.marginTop="30px"
        discountpercentage.style.width="100px"
        discountpercentage.style.color="red"
        discountpercentage.style.fontFamily="sans-serif"
        let a=""
        for(i=1;i<=5;i++){
            if(i<=Math.round(el.rating)){
                a=a+"⭐"
            }    
        }
        rating.innerText= a
        stock.innerText=`stock: ${el.stock} peices only`
        stock.style.color="brown"
        stock.style.fontSize="20px"

        pricediv.append(discountpercentage,price)
         main.append(outer,detail)
         info.append( rating , stock)
         cartdiv.append(addtocart)
         
        
    el.images.map((oimg)=>{
        let otherimg = document.createElement("img")
        let aimg= document.createElement("a")
           aimg.style.border="2px solid black"
           aimg.style.boxShadow="2px 2px 3px black"
           aimg.style.margin="10px"
           

        otherimg.src= oimg
        aimg.href=oimg
        aimg.append(otherimg)
        imgdiv.append(aimg)
        
                })
         outer.append(image)
         detail.append(h1,category,desctn,pricediv,info,imgdiv,cartdiv)
         
    addtocart.addEventListener("click", ()=>{
        cartd.push(el)
        localStorage.setItem("cart",JSON.stringify(cartd))
    alert(`${el.title} is added to your cart `)
            console.log(cartd)
                          })
    cartlist.href=`cartlist.html`
        
    })


// other products suggestion 


url="https://dummyjson.com/products?limit=0"
fetch(url)
.then((res)=>{
    return res.json()
 })
.then((data)=>{
    dataset=[...data.products]
    otherp = document.querySelector(".otherp")

    dataset.map((el)=>{
    let h1= document.createElement("h1")
        h1.innerText=el.title

    let img=document.createElement("img")
        img.classList.add("opimg")
        img.src=el.thumbnail

    let outerp = document.createElement("a")
        outerp.href= `projectAPI2.html?id=${el.id} `
        outerp.classList.add("outerdivp")
        

    let desctn = document.createElement("h4")
        desctn.innerText= el.description

    let price = document.createElement("h3")
        price.innerText= "$" + el.price
        price.style.color="blue"

    let addcart = document.createElement("button")
        addcart.style.marginBottom="10px"
        addcart.style.backgroundColor="black"
        addcart.style.color="white"
        addcart.innerText="add to cart "

    let category = document.createElement("h3")
        category.innerText=`category: ${el.category}`
        category.style.color="crimson"
    otherp.append(outerp)
        outerp.append(img,h1,category,desctn,price,addcart)        
    });




})



// suggestion box .......

input.addEventListener("input" , ()=>{
    searchp.innerHTML =""
    if (input.value===""){
        searchp.innerText =""
        return
    }

    let result= dataset.filter((datap) => {
        return datap.title.toLowerCase().includes(input.value.toLowerCase())
    });
    result.forEach(element => {
        let p = document.createElement("a")
        p.classList.add("suggestion")
        p.innerText=element.title
        p.href=`projectAPI2.html?id=${element.id}`
        searchp.append(p)
    });



});


// addtocart






