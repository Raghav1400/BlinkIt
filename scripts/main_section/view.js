
export var main_section_view=function (){

}

var Main_aside_item = function(info){
    var element= document.createElement("div");
    var element_first_child=document.createElement("div");
    var element_second_child=document.createElement("div");
    var img_child=document.createElement("img");

    element_first_child.className="aside-img";
    element_second_child.className="aside-content";
    element_second_child.innerText= info.decription;
    img_child.src= info.img_src;
    img_child.alt= info.img_alt;

    element.appendChild(element_first_child);
    element.appendChild(element_second_child);
    element_first_child.appendChild(img_child);
    
    return element;
} 

var Main_section_bottom_item = function(info){
    var element= document.createElement("div");
    var discount_button= document.createElement("div");
    var img_container= document.createElement("div");
    var img= document.createElement("img");
    var source_time= document.createElement("div");
    var name= document.createElement("div");
    var weight= document.createElement("div");
    var price_add_section= document.createElement("div");
    var price= document.createElement("div");
    var oldPrice= document.createElement("div");
    var newPrice= document.createElement("div");
    var add= document.createElement("button");
    var cart_button= document.createElement("button");
    var cart_button_minus= document.createElement("div");
    var cart_button_quantity= document.createElement("div");
    var cart_button_plus= document.createElement("div");

    element.className="section-bottom-item";
    discount_button.innerText=info.discount;
    discount_button.className="discount-button";
    img_container.className="section-bottom-item-img";
    img.src=info.img_src;
    img.alt=info.img_alt;
    source_time.className="section-bottom-item-source-time";
    source_time.innerText=info.source_time;
    name.className="section-bottom-item-name";
    name.innerText=info.name;
    weight.className="section-bottom-item-weight";
    weight.innerText=info.weight;
    price_add_section.className="section-bottom-item-price-add";
    price.className="price";
    oldPrice.className="old-price";
    newPrice.className="new-price";
    oldPrice.innerText=info.oldPrice;
    newPrice.innerText=info.newPrice;
    add.innerText="ADD";
    cart_button.className="cart-button";
    cart_button_minus.className="minus";
    cart_button_quantity.className="quantity";
    cart_button_plus.className="plus";
    cart_button_minus.innerText="-";
    cart_button_quantity.innerText="1";
    cart_button_plus.innerText="+";

    element.append(discount_button,img_container,source_time,name,weight,price_add_section);
    price_add_section.append(price,add);
    price.append(newPrice,oldPrice);
    img_container.appendChild(img);
    cart_button.append(cart_button_minus,cart_button_quantity,cart_button_plus);
    price_add_section.appendChild(cart_button);
    cart_button.style.display="none";

    return element;
}


main_section_view.prototype.render= function(spec){
    var {aside_content,section_bottom_content} =spec;
    for(let i=0;i<aside_content.length;i++){
        var item = Main_aside_item(aside_content[i]);
        document.getElementsByTagName("aside")[0].appendChild(item);
    }
    section_bottom_content.forEach(function(itemInfo){
        var newItem= Main_section_bottom_item(itemInfo);
        document.getElementById("section-bottom").appendChild(newItem);
    });
}


main_section_view.prototype.addToCartEvent= function(){
    
}









