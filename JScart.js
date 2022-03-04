// Create a JS Cart

// Create a JavaScript Function that takes in an:
//     Action String - string representing what the user wants to do
//          i.e. "add_to_cart", "remove_from_cart", "remove_all_from_cart", "empty_cart"
//     Item JS Object [dictionary] 
//          (the contents of which are unimportant, other than they have an id key)
//     Cart Array which you should Default to an EMPTY ARRAY (because our cart starts empty)
// The function will use a switch statement 
// to preform a different action based on the Action String
// EACH ONE OF THESE ACTIONS SHOULD RETURN a fresh Cart array with the changes
// if the item is not in the cart then just return the cart unchanged.

let cart = []
let products = {
    smooth: "Peanut Butter",
    grape:"Jelly",
    white: "Bread",
    candy:"KitKat"
}

let actionSting

function shoppingCart(actionString, cart, ...products){
    switch (actionString) {
        case 'addToCart':
            newCart = [...cart, products]
            return newCart
        case 'removeFromCart':
            newCart = [...cart]
            toDelete = products
            myCart = newCart.filter(([...products]) => products !== toDelete)
        case 'removeAll':
            newCart = []
            for (x of cart){
                if (x != products){
                    newCart.push(x)
                }
            } return newCart
        case 'clearCart':
            emptyCart = []
            return emptyCart
    };
};
console.log("add 1 item to new cart object")
let myCart = shoppingCart('addToCart', cart, products.candy);
console.log(myCart);

console.log("add all items to new cart object")
myCart = shoppingCart('addToCart', cart, products.smooth, products.grape, products.white, products.candy);
console.log(myCart);

console.log("Delete a single item from new cart object")
let aCart = shoppingCart('removeFromCart', ...myCart, products.grape);
console.log(aCart);
console.log(myCart);

console.log("Remove all of the same item from a new cart object")
myCart = shoppingCart('addToCart', cart, products.smooth, products.smooth, products.grape, products.white, products.candy)
let bCart = shoppingCart('removeAll', ...myCart, products.smooth);
console.log(bCart);
console.log(myCart);

console.log("Remove all of a single item from a new cart object")
let cCart = shoppingCart('clearCart', myCart, products)
console.log(cCart);
console.log(myCart);

