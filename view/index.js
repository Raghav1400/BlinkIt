import {second_header_content, aside_content, section_bottom_content} from '../modals/index.js'

var Second_header_item = function(name){
    var element= document.createElement("div");
    element.innerText=name;
    return element;
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

    element.append(discount_button,img_container,source_time,name,weight,price_add_section);
    price_add_section.append(price,add);
    price.append(newPrice,oldPrice);
    // element.appendChild(img_container);
    img_container.appendChild(img);
    // element.appendChild(source_time);
    // element.appendChild(name);
    console.log(element);
    return element;
}

for(let i=0;i<second_header_content.length;i++){
    var item = Second_header_item(second_header_content[i]);
    document.getElementById("second-header").appendChild(item);
}

for(let i=0;i<aside_content.length;i++){
    var item = Main_aside_item(aside_content[i]);
    document.getElementsByTagName("aside")[0].appendChild(item);
}


section_bottom_content.forEach(function(itemInfo){
    var newItem= Main_section_bottom_item(itemInfo);
    console.log(newItem);
    document.getElementById("section-bottom").appendChild(newItem);
});