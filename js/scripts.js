
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

let carts = document.querySelectorAll(".cartRef")
for(let i=0; i<carts.length; i++) {
    carts[i].addEventListener('click', () => {
        result=products[i].name;
        result2=products[i].price;
        console.log(JSON.stringify(result))
        console.log(JSON.stringify(result2))
        $("div#log").append("<li> Custom " + result +" pizza @ $"+ result2 + "</li>")
        
        
    })
}

$("button#submit").click(function(event){
    event.preventDefault();
    
        var checkedSize=[]
        var checkedBase=[]
        var checkedSauce=[]
        var checkedTopping=[]
        optionsPrice=0;
        var totToppings = []
       
        if($('#Small').is(':checked')) {
            checkedSize="small"
            optionsPrice+=4
        } 
        if($('#Medium').is(':checked')) {
            checkedSize="medium"
            optionsPrice+=7
        } 
       if($('#Large').is(':checked')) {
            checkedSize="large"
            optionsPrice+=14
        } 
        if($('#Traditional').is(':checked')) {
            checkedBase="Traditional"
            optionsPrice+=1
        }
        if($("#ThinNCrispy").is(':checked')) {
            checkedBase="Thin 'N' Crispy"
            optionsPrice+=2
        } 
        if($('#StuffedCrust').is(':checked')) {
            checkedBase="Stuffed Crust"
            optionsPrice+=2
        } 
        if($('#GlutenFree').is(':checked')) {
            checkedBase="Gluten Free"
            optionsPrice+=1
        } 
        if($('#OriginalPan').is(':checked')) {
            checkedBase="Original Pan"
            optionsPrice+=1
        }
        if($('#TomatoSauce').is(':checked')) {
            checkedSauce="Tomato Sauce"
        } 
        if($('#BBQsauce').is(':checked')) {
            checkedSauce="BBQ sauce"
        } 
        if($('#Redsauce').is(':checked')) {
            checkedSauce="Red sauce"
        } 
        if($('#Removesauce').is(':checked')) {
            checkedSauce="Remove sauce"
        } 
        if($('#Anchovies').is(':checked')) {
            checkedTopping="Anchovies"
            totToppings.push(checkedTopping)
            optionsPrice+=4
        } 
        if($('#Pepperoni').is(':checked')) {
            checkedTopping="Pepperoni"
            totToppings.push(checkedTopping)
            optionsPrice+=4
        } 
        if($('#GrilledChicken').is(':checked')) {
            checkedTopping="Grilled Chicken"
            totToppings.push(checkedTopping)
            optionsPrice+=4
        } 
        if($('#ItalianSausage').is(':checked')) {
            checkedTopping="Italian Sausage"
            totToppings.push(checkedTopping)
            optionsPrice+=4
        } 
        if($('#Beef').is(':checked')) {
            checkedTopping="Beef"
            totToppings.push(checkedTopping)
            optionsPrice+=4
        } 
        if($('#Bacon').is(':checked')) {
            checkedTopping="Bacon"
            totToppings.push(checkedTopping)
            optionsPrice+=4
        } 
        if($('#Meatballs').is(':checked')) {
            checkedTopping="Meatballs"
            totToppings.push(checkedTopping)
            optionsPrice+=4
        } 
        if($('#BlueCheese').is(':checked')) {
            checkedTopping="Blue Cheese"
            totToppings.push(checkedTopping)
            optionsPrice+=3
        } 
        if($('#Cheddar').is(':checked')) {
            checkedTopping="Cheddar"
            totToppings.push(checkedTopping)
            optionsPrice+=3
        } 
        if($('#Feta').is(':checked')) {
            checkedTopping="Feta"
            totToppings.push(checkedTopping)
            optionsPrice+=3
        } 
        if($('#Mozzarella').is(':checked')) {
            checkedTopping="Mozzarella"
            totToppings.push(checkedTopping)
            optionsPrice+=3
        } 
        if($('#Parmesan').is(':checked')) {
            checkedTopping="Parmesan"
            totToppings.push(checkedTopping)
            optionsPrice+=3
        } 
        if($('#Basil').is(':checked')) {
            checkedTopping="Basil"
            totToppings.push(checkedTopping)
            optionsPrice+=2
        } 
        if($('#JalepenoPeppers').is(':checked')) {
            checkedTopping="Jalepeno Peppers"
            totToppings.push(checkedTopping)
            optionsPrice+=2
        } 
        if($('#Oregano').is(':checked')) {
            checkedTopping="Oregano"
            totToppings.push(checkedTopping)
            optionsPrice+=2
        } 
        if($('#RedOnion').is(':checked')) {
            checkedTopping="Red Onion"
            totToppings.push(checkedTopping)
            optionsPrice+=2
        } 
        if($('#Mushrooms').is(':checked')) {
            checkedTopping="Mushrooms"
            totToppings.push(checkedTopping)
            optionsPrice+=2
        } 
        if($('#DicedTomato').is(':checked')) {
            checkedTopping="Diced Tomato"
            totToppings.push(checkedTopping)
            optionsPrice+=2
        } 
        if($('#RedBellPepper').is(':checked')) {
            checkedTopping="Red Bell Pepper"
            totToppings.push(checkedTopping)
            optionsPrice+=2
        } 
        if($('#BalsamicGlaze').is(':checked')) {
            checkedTopping="Balsamic Glaze"
            totToppings.push(checkedTopping)
            optionsPrice+=5
        } 
        if($('#PermesanHerbShake').is(':checked')) {
            checkedTopping="Permesan-Herb Shake"
            totToppings.push(checkedTopping)
            optionsPrice+=5
        } 
        
        
        
        console.log(checkedSize)
        console.log(JSON.stringify(checkedSize))
        $("div#log").append("<li>" + 'Size: '+ checkedSize +  "</li>")
        console.log(checkedBase)
        console.log(JSON.stringify(checkedBase))
        $("div#log").append("<li>" + 'Base: '+ checkedBase +  "</li>")
        console.log(checkedSauce)
        console.log(JSON.stringify(checkedSauce))
        $("div#log").append("<li>" + 'Sauce: '+ checkedSauce +  "</li>")
        console.log(totToppings)
        console.log(JSON.stringify(totToppings))
        $("div#log").append("<li>" + 'Toppings: '+ totToppings +  "</li>")
        console.log(optionsPrice)
        console.log(JSON.stringify(optionsPrice))
        $("div#log").append("<li>" + '<Strong>Total price from options: $</Strong> ' + optionsPrice +  "</li>")
        (function (logger) {
            console.old = console.log;
            console.log = function () {
                var output = "", arg, i;
        
                for (i = 0; i < arguments.length; i++) {
                    arg = arguments[i];
                    output += "<span class=\"log-" + (typeof arg) + "\">";
        
                    if (
                        typeof arg === "object" &&
                        typeof JSON === "object" &&
                        typeof JSON.stringify === "function"
                    ) {
                        output += JSON.stringify(arg);   
                    } else {
                        output += arg;   
                    }
        
                    output += "</span>&nbsp;";
                }
        
                logger.innerHTML += output + "<br>";
                console.old.apply(undefined, arguments);
            };
        })(document.getElementById("logger"));
        
});

$("button#bt1").click(function(event){
    event.preventDefault;
    if(typeof optionsPrice === 'undefined'){
        totalPrice= result2
    }else if(typeof result2  === 'undefined'){
        totalPrice=optionsPrice
    }else{
        totalPrice=optionsPrice + result2
    }

    alert(`Your order amounts to  ${totalPrice} dollars.`)
})

$("button#bt2").click(function(event){
    event.preventDefault;
    deliveryCharge=10;
    if(typeof optionsPrice === 'undefined'){
        totalPrice= result2 + deliveryCharge 
    }else if(typeof result2  === 'undefined'){
        totalPrice=optionsPrice +deliveryCharge
    }else{
        totalPrice=optionsPrice + result2 +deliveryCharge+result2
    }
    
    var ans = prompt("Where do you want you order delivered?");
    alert(`The delivery charge is ${deliveryCharge}. Your grand total is ${totalPrice} dollars. Thank you for shopping with us, your items will be delivered to ${ans}`)
    
})