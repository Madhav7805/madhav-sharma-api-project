
let dataset= []
let datatitle=[]
 let searchp= document.querySelector(".suggest")
 let input = document.querySelector(".searchbox")
let main = document.querySelector("main")
url="https://dummyjson.com/products?limit=0"
fetch(url)
.then((res)=>{
    return res.json()
    })
    .then((data)=>{
         dataset=[...data.products]
        //  datatitle= dataset.map((d)=>{return d.title})
// console.log(datatitle)

         
        dataset.map((el)=>{
           
            let  h1= document.createElement("h1")
                 h1.innerText=el.title
            let img=document.createElement("img")
                img.src=el.thumbnail
            let outer = document.createElement("a")
                outer.classList.add("outerdiv")
                outer.href= `projectAPI2.html?id=${el.id} `;
            let desctn = document.createElement("h4")
                desctn.innerText= el.description
                desctn.innerText= el.description
            let price = document.createElement("h3")
                price.innerText= "$" + el.price
                price.style.color="blue"
            let addcart = document.createElement("button")
                addcart.style.backgroundColor="black"
                addcart.style.color="white"
                addcart.innerText="add to cart "

    

            let category = document.createElement("h3")
                category.innerText=`category: ${el.category}`
                category.style.color="crimson"

            outer.append(img,h1,category,desctn,price,addcart)
            main.append(outer)
            
       });

       input.addEventListener("input" , ()=>{
                searchp.innerHTML =""
                if (input.value===""){
                    searchp.innerText =""
                    return
                }
          
                let result= dataset.filter((product) => {
                return product.title.toLowerCase().includes(input.value.toLowerCase())
                });
                console.log(result)
                result.forEach(element => {
                    let p = document.createElement("a")
                    p.classList.add("suggestion")
                    p.innerText=element.title
                    p.href=`projectAPI2.html?id=${element.id}`
                searchp.append(p)
                });
            

           });
              
})




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

 