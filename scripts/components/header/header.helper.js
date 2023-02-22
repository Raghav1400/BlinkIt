export var createCategory= function(name){
    var element= document.createElement("div");
    element.innerText=name;
    element.setAttribute("category",name);
    return element;
  } 
  
export var createCartItemDetailContainer =function(items,price){
    var cartContainer=document.createElement("div");
    var itemCount=document.createElement("div");
    var itemPrice=document.createElement("div");
    cartContainer.append(itemCount,itemPrice);
    cartContainer.setAttribute("id","cart-info");
    itemCount.innerText=items+ " Items";
    itemPrice.innerText="₹"+price;
    return cartContainer;
}

export var createCartButton=function(){
    var button=document.createElement("div");
    button.innerText="My Cart";
    button.setAttribute("id","header-cart-button");
    return button;
}
  
  