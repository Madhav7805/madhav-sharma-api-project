let cartlist = JSON.parse(localStorage.getItem("cart"))||[]
console.log(cartlist)
let main = document.querySelector("main")
 cartlist.map((el,index)=>{
           
            let  h1= document.createElement("h1")
                 h1.innerText=el.title
            let img=document.createElement("img")
                img.src=el.thumbnail
            let outer = document.createElement("div")
                outer.classList.add("outerdiv")
                // outer.href= `projectAPI2.html?id=${el.id} `;
            let desctn = document.createElement("h4")
                desctn.innerText= el.description
                desctn.innerText= el.description
            let price = document.createElement("h3")
                price.innerText= "$" + el.price
                price.style.color="blue"
                 let category = document.createElement("h3")
                category.innerText=`category: ${el.category}`
                category.style.color="crimson"
            let remove = document.createElement("button")
                remove.innerText="remove"
            
            remove.addEventListener("click",()=>{
                        cartlist.splice(index,1)
                        localStorage.setItem("cart", JSON.stringify(cartlist))
                        location.reload()
            })
            outer.append(img,h1,category,desctn,price,remove)
            main.append(outer)
 })

 