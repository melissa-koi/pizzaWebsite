
let checked = $("button#submit").click(function(event){
    event.preventDefault();
    if(document.querySelectorAll("input[type=radio]:checked,input[type=checkbox]")) {
        cartNumbers()
    }
});

let carts = document.querySelectorAll(".cartRef")
for(let i=0; i<carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers()
    })
}
 function cartNumbers() {
     let productNumbers = localStorage.getItem('cartNumbers');
     console.log(productNumbers)
     localStorage.setItem('cartNumbers',1)
 }