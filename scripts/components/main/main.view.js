
export var createMainSectionView=function (){

}

var Main_aside_item = function(info){
    var element= document.createElement("div");
    var element_first_child=document.createElement("div");
    var element_second_child=document.createElement("div");
    var img_child=document.createElement("img");

    element.setAttribute("category",info.category);
    element.setAttribute("subcategory",info.subcategory);
    element_first_child.className="aside-img";
    element_second_child.className="aside-content";
    element_second_child.innerText= info.subcategory;
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

    element.setAttribute("category",info.category);
    element.setAttribute("subcategory",info.subcategory);
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
    price_add_section.setAttribute("id",info.id);
    price.className="price";
    price.setAttribute("price",info.newPrice);
    oldPrice.className="old-price";
    newPrice.className="new-price";
    oldPrice.innerText= "₹" + info.oldPrice;
    newPrice.innerText="₹" + info.newPrice;
    add.innerText="ADD";
    cart_button.className="cart-button";
    cart_button_minus.className="minus";
    cart_button_quantity.className="quantity";
    cart_button_plus.className="plus";
    cart_button_minus.innerText="-";
    cart_button_quantity.innerText=info.count;
    cart_button_plus.innerText="+";

    element.append(discount_button,img_container,source_time,name,weight,price_add_section);
    price_add_section.append(price,add);
    price.append(newPrice,oldPrice);
    img_container.appendChild(img);
    cart_button.append(cart_button_minus,cart_button_quantity,cart_button_plus);
    price_add_section.appendChild(cart_button);
    cart_button.style.display="none";

    if(info.count>=1){
        cart_button.style.display="flex";
        add.style.display="none";
    }

    return element;
}


createMainSectionView.prototype.render= function(content){
    var {aside_content,section_bottom_content} =content;
    for(let i=0;i<aside_content.length;i++){
        var item = Main_aside_item(aside_content[i]);
        document.getElementsByTagName("aside")[0].appendChild(item);
    }
    section_bottom_content.forEach(function(itemInfo){
        var newItem= Main_section_bottom_item(itemInfo);
        document.getElementById("section-bottom").appendChild(newItem);
    });
}

createMainSectionView.prototype.renderCards= function(spec){
    var section_bottom_content =spec;
    document.getElementById("section-bottom").innerHTML="";
    section_bottom_content.forEach(function(itemInfo){
        var newItem= Main_section_bottom_item(itemInfo);
        document.getElementById("section-bottom").appendChild(newItem);
    });
}

createMainSectionView.prototype.subcategoryEvent= function(control){
    var subcategory = document.getElementsByTagName("aside")[0].children;
    //console.log(this);
    for(let i=0;i<subcategory.length;i++){
        subcategory[i].addEventListener("click",function(event){
            if(subcategory[i].contains(event.target)){
                var subcategoryName=subcategory[i].getAttribute("subcategory");
                // subcategory[i].style.backgroundColor="green";
                control.asideFilter(subcategoryName);
                
            }
            
        });
    }
}

createMainSectionView.prototype.renderByCategory=function(aside_content,section_bottom_content,context){

    document.getElementById("section-bottom").innerHTML="";
    section_bottom_content.forEach(function(itemInfo){
        var newItem= Main_section_bottom_item(itemInfo);
        document.getElementById("section-bottom").appendChild(newItem);
    });

    //console.log(document.getElementsByName("aside"));
    document.getElementsByTagName("aside")[0].innerHTML="";
    for(let i=0;i<aside_content.length;i++){
        var item = Main_aside_item(aside_content[i]);
        document.getElementsByTagName("aside")[0].appendChild(item);
    }
}

createMainSectionView.prototype.addButtonEvent= function(control,hcontrol){
    var add_button_containers=document.getElementsByClassName("section-bottom-item-price-add");
    var add_button_containers_array = Array.from(add_button_containers);
    add_button_containers_array.forEach(function(container){
        container.getElementsByTagName("button")[0].addEventListener("click",function(event){
            this.style.display="none";
            container.getElementsByClassName("cart-button")[0].style.display="flex";
            container.getElementsByClassName("cart-button")[0].getElementsByClassName("quantity")[0].innerText=1;
            control.setQuantity(container.id,1);
            hcontrol.addCart(container.id);
        });
    });

}

createMainSectionView.prototype.plusMinusEvent=function(control,hcontrol){
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









