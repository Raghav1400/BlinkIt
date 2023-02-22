
import { createCard,createSubcategory } from "../../utils/helper.js";
export var createMainSectionView=function (){

}

createMainSectionView.prototype.renderData= function(content,mcontrol,hcontrol){
    var {subcategories,cards} =content;
    if(subcategories.length!=0){
        document.getElementsByTagName("aside")[0].innerHTML="";
    }
    document.getElementById("section-bottom").innerHTML="";
    
    for(let i=0;i<subcategories.length;i++){
        var item = createSubcategory(subcategories[i]);
        this.addSubcategoryEvent(item,mcontrol);
        document.getElementsByTagName("aside")[0].appendChild(item);
    }
    for(let i=0;i<cards.length;i++){
        var newItem= createCard(cards[i]);
        this.addAddButtonEvent(newItem,mcontrol,hcontrol)
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

createMainSectionView.prototype.addPlusMinusEvent=function(control,hcontrol){
    var add_button_containers=document.getElementsByClassName("section-bottom-item-price-add");
    var add_button_containers_array = Array.from(add_button_containers);
    add_button_containers_array.forEach(function(container){
        var cart_button=container.getElementsByClassName("cart-button")[0];
        cart_button.getElementsByClassName("minus")[0].addEventListener("click",function(event){
            var quantity=cart_button.getElementsByClassName("quantity")[0].innerText;
            quantity=Number(quantity)-1;
            if(quantity===0){
                container.getElementsByTagName("button")[0].removeAttribute("style");
                container.getElementsByClassName("cart-button")[0].style.display="none";
            }
            cart_button.getElementsByClassName("quantity")[0].innerText=quantity;
            control.setQuantity(container.id,quantity);
            hcontrol.addCart(container.id);
        });
        cart_button.getElementsByClassName("plus")[0].addEventListener("click",function(event){
            var quantity=cart_button.getElementsByClassName("quantity")[0].innerText;
            quantity=1+Number(quantity);
            cart_button.getElementsByClassName("quantity")[0].innerText=quantity;
            control.setQuantity(container.id,quantity);
            hcontrol.addCart(container.id);
        });
    })
        
}









