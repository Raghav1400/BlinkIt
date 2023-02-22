
import { createCard,createSubcategory } from "./main.helper.js";
export var createMainSectionView=function (){
}

createMainSectionView.prototype.renderData= function(content,mainController,headController){
    var {subcategories,cards} =content;
    if(subcategories.length!=0){
        document.getElementsByTagName("aside")[0].innerHTML="";
    }
    document.getElementById("section-bottom").innerHTML="";
    
    for(let i=0;i<subcategories.length;i++){
        var item = createSubcategory(subcategories[i]);
        this.addSubcategoryEvent(item,mainController);
        document.getElementsByTagName("aside")[0].appendChild(item);
    }
    for(let i=0;i<cards.length;i++){
        var newItem= createCard(cards[i]);
        this.addAddButtonEvent(newItem,mainController,headController);
        this.addPlusMinusEvent(newItem,mainController,headController);
        document.getElementById("section-bottom").appendChild(newItem);
    };
}

createMainSectionView.prototype.addSubcategoryEvent= function(item,control){
    item.addEventListener("click",function(event){
        if(item.contains(event.target)){
            var subcategoryName=item.getAttribute("subcategory");
            control.renderSubcategoryFilter(subcategoryName);
        }
    });
}

createMainSectionView.prototype.addAddButtonEvent= function(item,mcontrol,hcontrol){
    var add_button_container=item.getElementsByClassName("section-bottom-item-price-add")[0];
    add_button_container.getElementsByTagName("button")[0].addEventListener("click",function(event){
        this.style.display="none";
        add_button_container.getElementsByClassName("cart-button")[0].style.display="flex";
        add_button_container.getElementsByClassName("cart-button")[0].getElementsByClassName("quantity")[0].innerText=1;
        mcontrol.setQuantity(add_button_container.id,1);
        hcontrol.addCart(add_button_container.id);
    });
}

createMainSectionView.prototype.addPlusMinusEvent=function(item,mainController,headController){
    var container=item.getElementsByClassName("section-bottom-item-price-add")[0];
    var cart_button=item.getElementsByClassName("cart-button")[0];
    cart_button.getElementsByClassName("minus")[0].addEventListener("click",function(event){
        var quantity=cart_button.getElementsByClassName("quantity")[0].innerText;
        quantity=Number(quantity)-1;
        if(quantity===0){
            item.getElementsByTagName("button")[0].removeAttribute("style");
            item.getElementsByClassName("cart-button")[0].style.display="none";
        }
        cart_button.getElementsByClassName("quantity")[0].innerText=quantity;
        mainController.setQuantity(container.id,quantity);
        headController.addCart(container.id);
    });
    cart_button.getElementsByClassName("plus")[0].addEventListener("click",function(event){
        var quantity=cart_button.getElementsByClassName("quantity")[0].innerText;
        quantity=1+Number(quantity);
        cart_button.getElementsByClassName("quantity")[0].innerText=quantity;
        mainController.setQuantity(container.id,quantity);
        headController.addCart(container.id);
    }); 
}
