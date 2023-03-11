// 20. In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of your shopping cart if it has not been already added
//     - remove 'Honey'
//     - modify Tea to 'Green Tea'
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']


console.log('Shopping Cart');
console.log(shoppingCart);

shoppingCart.unshift('Meat');
console.log('After Adding meat at the beginning of theshopping cart')
console.log(shoppingCart);

if (!shoppingCart.includes('Sugar')){
    shoppingCart.push('Sugar');
    console.log('After adding Sugar at the end');
    console.log(shoppingCart);
}



const indexOfHoney = shoppingCart.indexOf('Honey');
shoppingCart.splice(indexOfHoney,1);
console.log('Removing Honey');
console.log(shoppingCart)

const indexOfTea = shoppingCart.indexOf('Tea');
shoppingCart[indexOfTea] = "Green Tea";
console.log('Changing Tea to Green Tea')
console.log(shoppingCart)