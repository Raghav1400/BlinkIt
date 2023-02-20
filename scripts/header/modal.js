import {second_header_content,section_bottom_content,cart} from '../../data/content.js'

export var header_modal=function (){
    this.second_header_content=second_header_content;
}

header_modal.prototype.get_second_header_content=function(){
    return second_header_content;
}

header_modal.prototype.updateCart=function(id){
    var updateCart;
    section_bottom_content.forEach(function(element){
        if(element.id===Number(id)){
            cart[id]=element;
            updateCart= cart;
        }
    })
    return updateCart;   
}