const mynums = [1,2,3,4,5]

const total = mynums.reduce(function(accumtionr , currentvalue){
    console.log(`accumtionr: ${accumtionr} and currentvalue: ${currentvalue}`);
    
    return accumtionr + currentvalue
},0)

// console.log(total);

const myval = mynums.reduce( (accumtionr,currentvalue) => accumtionr+currentvalue,0)

const shoppingCart = [
    {
        itemname:'js course',
        price:2999
    },
    {
        itemname:'python',
        price:5999
    },
    {
        itemname:'mobile development',
        price:7999
    },
    {
        itemname:'Full stack web development',
        price:9999
    },

]

priceToPay = shoppingCart.reduce( (acc,item) =>acc + item.price,0)

console.log(priceToPay);

