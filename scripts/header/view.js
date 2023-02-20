export var header_view=function (){

}

var Second_header_item = function(name){
    var element= document.createElement("div");
    element.innerText=name;
    element.setAttribute("category",name);
    return element;
 } 

 header_view.prototype.render = function(data){
    for(let i=0;i<data.length;i++){
        var item = Second_header_item(data[i]);
        document.getElementById("second-header").appendChild(item);
    }
 }

 header_view.prototype.second_header_event=function(control){
    var category=document.getElementById("second-header").children;
    for(let i=0;i<category.length;i++){
        category[i].addEventListener("click",function(event){
            var categoryName=category[i].getAttribute("category");
            control.second_header_filter(categoryName);
        })
    }
 }

 var cartItemDetail =function(items,price){
    var cartContainer=document.createElement("div");
    var itemCount=document.createElement("div");
    var itemPrice=document.createElement("div");
    cartContainer.append(itemCount,itemPrice);
    cartContainer.setAttribute("id","cart-info");
    itemCount.innerText=items+ " Items";
    itemPrice.innerText="₹"+price;
    return cartContainer;
 }

 var createCartButton=function(){
    var button=document.createElement("div");
    button.innerText="My Cart";
    button.setAttribute("id","header-cart-button");
    return button;
 }

 header_view.prototype.renderAddCart=function(cart){
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
    
    
    var cartInfo=cartItemDetail(items,price);
    if(items!=0){
        document.getElementById("header-mycart").append(cartInfo);
    }
    else{
        var cartButton = createCartButton();
        document.getElementById("header-mycart").append(cartButton);
    }

 }