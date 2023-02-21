import {second_header_content,section_bottom_content,cart} from '../../../data/content.js'

export var createHeaderModal=function (){
    this.second_header_content=second_header_content;
}

createHeaderModal.prototype.getSecondHeaderContent=function(){
    return second_header_content;
}

createHeaderModal.prototype.updateCartData=function(id){
    var updateCart;
    section_bottom_content.forEach(function(element){
        if(element.id===Number(id)){
            cart[id]=element;
            updateCart= cart;
        }
    })
    return updateCart;   
}