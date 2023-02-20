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

 header_view.prototype.renderAddCart=function(cart){
    //console.log(cart);
 }