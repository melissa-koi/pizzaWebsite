
let checked = $("button#submit").click(function(event){
    event.preventDefault();
    if(document.querySelectorAll("input[type=radio]:checked,input[type=checkbox]")) {
        console.log(products[0])
    }
});

let carts = document.querySelectorAll(".cartRef")
for(let i=0; i<carts.length; i++) {
    carts[i].addEventListener('click', () => {
        console.log(products[i])
    })
}

let products = [
    {
        name:'All Meats',
        tag:'All Meats',
        price:15,
        inCart:0
    },
    {
        name:'Hawaiian',
        tag:'Hawaiian',
        price:17,
        inCart:0
    },
    {
        name:'Margherita',
        tag:'Margherita',
        price:16,
        inCart:0
    },
    {
        name:'Pepperoni',
        tag:'Pepperoni',
        price:15,
        inCart:0
    },
    {
        name:'3 Cheeses',
        tag:'3 Cheeses',
        price:12,
        inCart:0
    },
    {
        name:'Mexicana',
        tag:'Mexicana',
        price:14,
        inCart:0
    },
    {
        name:'Vegetarian',
        tag:'Vegetarian',
        price:12,
        inCart:0
    }
]

function cartNumbers() {
     let productNumbers = localStorage.getItem('cartNumbers');
     productNumbers = parseInt(productNumbers);

     if(productNumbers) {
         localStorage.setItem('cartNumbers',productNumbers+1)
         document.querySelector('.cart span').textContent=productNumbers+1
     }else{
        localStorage.setItem('cartNumbers',1)
        document.querySelector('#navBar span').textContent=1
    }
}

     