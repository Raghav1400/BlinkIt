import categories from '../../../data/categories.json' assert { type: 'json' };
import cardItems from '../../../data/cards.json' assert { type: 'json' };


export var createHeaderModal=function (){
    this.cart={};
}

createHeaderModal.prototype.getCategories=function(){
    return categories;
}

createHeaderModal.prototype.updateCartData=function(id){
    cardItems.forEach((element)=>{
        if(element.id===Number(id)){
            this.cart[id]=element;
        }
    })
    return this.cart;   
}