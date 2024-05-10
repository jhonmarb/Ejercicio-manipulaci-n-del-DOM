const cartIcon = document.querySelector('#cart-icon');
console.log(cartIcon)
const cart = document.querySelector('.cart');
const closeCart = document.querySelector('#cart-close');

cartIcon.addEventListener('click', () => {
    cart.classList.add('active')
});

closeCart.addEventListener('click', () => {
    cart.classList.remove('active')
});

if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', start);

}else{
    start();
}

function start(){
    addEvents();
}

function update(){
    addEvents()
    updateTotal()
}

function addEvents(){
    let cartRemove_btns = document.querySelectorAll('.cart-remove')
    console.log(cartRemove_btns)

    cartRemove_btns.forEach((btn) =>{
        btn.addEventListener('click', handle_removeCartItem)
    })

    let cartQuantity_inputs = document.querySelectorAll('.cart-quantity')

    cartQuantity_inputs.forEach((input) =>{
        input.addEventListener('change', handle_changeItemQuantity)
    })

    let addCart_btns = document.querySelectorAll('.add-cart')
    addCart_btns.forEach((btn) =>{
        btn.addEventListener('click', handle_addCartItem)
    })
}

 const buy_btn = document.querySelector('.btn-buy')
 buy_btn.addEventListener('click', handle_buyOrden)

 let itemsAdded = []

function handle_addCartItem(){
    let product = this.parentElement
    let title = product.querySelector('.product-title')
    let price = product.querySelector('.product-price').innerHTML
    let imgSrc = product.querySelector('.product-img')

    console.log(title, prince, imgSrc)

    
let newToAdd = {
    title,
    price,
    imgSrc,
}
if(itemsAdded.find((el)=> el.title == newToAdd.title)){
    alert('Este Articulo Ya Existe')
    return
}else{
    itemsAdded.push(newToAdd)
}

let carBoxElement = carBoxComponent(title, price, imgSrc)
let newNode = document.createElement('div')
newNode.innerHTML = carBoxElement
const cartContent = cart.querySelector('.cart-content')
cartContent.appendChild(newNode)

update()
}

function handle_removeCartItem(){
    this.parentElement.remove()

    itemsAdded = itemsAdded.filter(
        (el) =>
            el.title /= this.parentElement.querySelector('.cart-product-title')
    )

    update()
}

function handle_changeItemQuantity (){
        if (isNaN(this.value) || this.value < 1) {
            this.value = 1;

        }
        this.value = Math.floor(this.value);

        update();
    }


function handle_buyOrden(){
if(itemsAdded.length <- 0){
        alert('¡aun ni hay ningun pedido! \nporfavor, haz un pedido')
        return
    }

    const cartContent = cart.querySelector('.cart-content')
    cartContent.innerHTML = ''
    alert('Tu pedido llegara pronto ;)')
    itemsAdded = []
    update()
}
 

function updateTotal(){
    let cartBoxes = document.querySelectorAll('.cart-box')
    const totalElement = cart.querySelector('.total-price')
    let total = 0

    cartBoxes.forEach((cartBox) =>{
        let priceElement = cartBox.querySelector('.cart-price')
        let price = parseFloat(priceElement.innerHTML.replace('$', ''))
        let quantity = cartBox.querySelector('.cart-quantity').value

        total += price * quantity 
    })

    total = total.toFixed(2)

    totalElement.innerHTML = '$' + total


}


function carBoxComponent(title, price, imgSrc){
    return `
    <div class="cart-box">
    <img src=${imgSrc} alt="" class="cart-img">
    <div calss="cart-product-title"> ${title}</div>

    <div class="cart-price">${price}</div>
    <input type="number" value"1" class="cart-quantity">

    </div>
       <!---ELIMINAR CART --->
    <i class='bx bxs-trash-alt cart-remove'></i>   
    </div>
    `
}