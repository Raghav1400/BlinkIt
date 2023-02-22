import { createCategory, createCartItemDetailContainer, createCartButton } from "../../utils/helper.js";

export var createHeaderView=function (){

}

createHeaderView.prototype.renderCategory = function(data){
    for(let i=0;i<data.length;i++){
        var item = createCategory(data[i]);
        document.getElementById("second-header").appendChild(item);
    }
}

createHeaderView.prototype.addCategoryEvent=function(control){
    var category=document.getElementById("second-header").children;
    for(let i=0;i<category.length;i++){
        category[i].addEventListener("click",function(event){
            var categoryName=category[i].getAttribute("category");
            control.callCategoryFilter(categoryName);
        })
    }
}

createHeaderView.prototype.renderAddCartButtonInfo=function(cart){
    let price=0;
    let items =0;
    
    for(var obj in cart){
        items +=cart[obj].count;
        price +=Number(cart[obj].newPrice)*Number(cart[obj].count);
    };
    if(document.getElementById("header-cart-button")){
        document.getElementById("header-cart-button").remove();
    }
    
    if(document.getElementById("cart-info")){
        document.getElementById("cart-info").remove();
    }
    
    
    var cartInfo=createCartItemDetailContainer(items,price);
    if(items!=0){
        document.getElementById("header-mycart").append(cartInfo);
    }
    else{
        var cartButton = createCartButton();
        document.getElementById("header-mycart").append(cartButton);
    }

}