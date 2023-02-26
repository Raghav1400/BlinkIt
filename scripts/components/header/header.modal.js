import categories from '../../../data/categories.json' assert { type: 'json' };
import cardItems from '../../../data/cards.json' assert { type: 'json' };
import cart from '../../../data/cart.json' assert { type: 'json' };


export var createHeaderModal=function (){
    this.cart={};
}

createHeaderModal.prototype.getCategories=function(){
    return categories;
}

createHeaderModal.prototype.updateCartData=function(id){
    cardItems.forEach(function(element){
        if(element.id===Number(id)){
            cart[id]=element;
        }
    })
    return cart;   
}