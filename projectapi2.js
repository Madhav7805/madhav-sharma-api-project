iddata = new URLSearchParams(window.location.search)
id = iddata.get('id')
console.log(id)
url=`https://dummyjson.com/products/${id}`
let datatitle= []
main=document.querySelector("main")
fetch(url)
.then((res)=>{
    return res.json()
}).then((el)=>{
    


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

    // addcart.style.backgroundColor="black"
    // addcart.style.color="white"
    

    let category = document.createElement("h3")
        outer.classList.add("outerdiv")
        category.innerText=`category: ${el.category}`
        category.style.color="crimson"
        image.src=el.thumbnail
        h1.innerText=el.title
        desctn.innerText= el.description
        price.innerText= "$" + el.price
        price.style.color="blue"
        // addcart.innerText="add to cart "
        discountpercentage.innerText=`discount : ${el.discountPercentage}`
        rating.innerText= `rating :${el.rating}`
        stock.innerText=`stock: ${el.stock}`
       
         main.append(outer)
         info.append(discountpercentage, rating , stock)
        
 el.images.map((oimg)=>{
        let otherimg = document.createElement("img")
           let aimg= document.createElement("a")
            otherimg.src= oimg
            aimg.href=oimg
        aimg.append(otherimg)
        imgdiv.append(aimg)
        
        })
         outer.append(image,h1,category,desctn,price,info,h2,imgdiv)
         


        
    }
)







