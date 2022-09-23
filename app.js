let bread = ['white', 'wheat', 'rye', 'ciabatta', 'sourdough', 'flatbread', 'pita', 'naan']
let protein = ['ham', 'bologne', 'turkey', 'salami', 'prosciotto', 'capicola', 'chicken', 'brisket', 'beef']
let sauce = ['mustard', 'mayonnaise', 'olive oil', 'ketchup', 'honey mustard', 'barbecue', 'chipotle aioli', 'ranch']
let toppings = ['tomato', 'lettuce', 'olives', 'onions', 'bell peppers', 'jalapenos', 'pickles', 'horse radish', 'coleslaw']
let cheese = ['american', 'cheddar', 'feta', 'colby jack', 'habanero', 'mozzarella', 'asiago', 'gorgonzola', 'provolone', 'monterey jack', 'swiss']

let sandwichContainer = document.getElementById("sandwich")

function resetDOM(){
    sandwichContainer.innerHTML = '';
    const divIDs = ['bread','sauce','topping','cheese','protein']
    for(i = 0; i < divIDs.length; i++){
        let divAdd = document.createElement('div')
        divAdd.id = divIDs[i]
        sandwichContainer.appendChild(divAdd)
    }
}

function getFormElements(){
    let formElements = document.forms["qtyForm"].getElementsByTagName("input");
    let sauceQty = formElements[0].value
    let toppingQty = formElements[1].value
    let proteinQty = formElements[2].value
    let cheeseQty = formElements[3].value
    return [sauceQty, toppingQty, proteinQty, cheeseQty]
}

function randIngredients(){
    let ingredients = []
    for (i=0; i < 4; i++){
        let randInt = Math.floor(Math.random()*5)
        ingredients[i] = randInt
    }
    return ingredients
}

function randBread(){
    let indexNum = Math.floor(Math.random()*(bread.length - 1))
    let breadText = document.getElementById("bread")
    let breadAdd = document.createElement('div')
    breadText.innerHTML = bread[indexNum]
    breadAdd.innerHTML = bread[indexNum]
    breadAdd.className = 'bread'
    sandwichContainer.appendChild(breadAdd)
}

function randProtein(proteinQty){
    let proteinText = document.getElementById("protein")
    if (proteinQty >= 1){
        let indexNum = Math.floor(Math.random()*(protein.length - 1))
        proteinText.innerHTML = protein[indexNum]
    }
    if (proteinQty >= 2){
        for(i = 2; i <= proteinQty; i++){
            indexNum = Math.floor(Math.random()*(protein.length - 1))
            let proteinAdd = document.createElement('div')
            proteinAdd.innerHTML = protein[indexNum]
            proteinAdd.className ='protein'
            sandwichContainer.insertBefore(proteinAdd, proteinText)
        }
    }
    
}

function randCheese(cheeseQty){
    let cheeseText = document.getElementById("cheese")
    if (cheeseQty >= 1){
        let indexNum = Math.floor(Math.random()*(cheese.length - 1))
        cheeseText.innerHTML = cheese[indexNum]
    }
    if (cheeseQty >= 2){
        for(i = 2; i <= cheeseQty; i++){
            indexNum = Math.floor(Math.random()*(cheese.length - 1))
            let cheeseAdd = document.createElement('div')
            cheeseAdd.innerHTML = protein[indexNum]
            cheeseAdd.className ='cheese'
            sandwichContainer.insertBefore(cheeseAdd, cheeseText)
        }
    }
}

function randSauce(sauceQty){
    let sauceText = document.getElementById("sauce")
    if (sauceQty >= 1){
        let indexNum = Math.floor(Math.random()*(sauce.length - 1))
        tempSauce = sauce[indexNum]
        newSauce = sauce.filter(item => item !== tempSauce)
        sauceText.innerHTML = sauce[indexNum]
    }
    if (sauceQty >= 2);{
        for(i = 2; i <= sauceQty; i++){
            indexNum = Math.floor(Math.random()*(newSauce.length - 1))
            let sauceAdd = document.createElement('div')
            sauceAdd.innerHTML = newSauce[indexNum]
            sauceAdd.className = 'sauce'
            sandwichContainer.insertBefore(sauceAdd, sauceText)
            tempSauce = sauce[indexNum]
            newSauce = sauce.filter(item => item !== tempSauce)
        }
    }
}

function randToppings(toppingQty){
    let toppingsText = document.getElementById("topping")
    if (toppingQty >= 1){
        let indexNum = Math.floor(Math.random()*(toppings.length - 1))
        toppingsText.innerHTML = toppings[indexNum]
    }
    if (toppingQty >= 2){
        for(i = 2; i <= toppingQty; i++){
            indexNum = Math.floor(Math.random()*(toppings.length - 1))
            let toppingsAdd = document.createElement('div')
            toppingsAdd.innerHTML = toppings[indexNum]
            toppingsAdd.className ='topping'
            sandwichContainer.insertBefore(toppingsAdd, toppingsText)
        }
    }
}

function generate(){
    if (document.querySelector('.bread') !== null){
        resetDOM()
    }
    [sauceQty, toppingQty, proteinQty, cheeseQty] = getFormElements()
    randBread()
    randProtein(proteinQty)
    randCheese(cheeseQty)
    randSauce(sauceQty)
    randToppings(toppingQty)
}

function randGenerate(){
    if (document.querySelector('.bread') !== null){
        resetDOM()
    }
    [sauceQty, toppingQty, proteinQty, cheeseQty] = randIngredients()
    randBread()
    randProtein(proteinQty)
    randCheese(cheeseQty)
    randSauce(sauceQty)
    randToppings(toppingQty)
}

//add images for each element
//add button to randomize --DONE
//add save to favorites function
//add choosing amount of protein, cheese, sauce, etc. --DONE
//add seasoning
//add rating system of sandwiches
//add input of ingredients