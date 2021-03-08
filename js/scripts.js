
let checked = $("button#submit").click(function(event){
    event.preventDefault();
    if(document.querySelectorAll("input[type=radio]:checked")) {
        console.log("added to cart")
    }
});

let carts = document.querySelectorAll(".cartRef")


for(let i=0; i<carts.length; i++) {
    carts[i].addEventListener('click', () => {
        console.log("added to cart")
    })
}
 function cartNUmbers() {
     let productNumbers = localStorage.getItem('cartNumbers')
     localStorage.setItem('cartNumbers',1)
 }