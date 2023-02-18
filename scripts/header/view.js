export var header_view=function (){

}

var Second_header_item = function(name){
    var element= document.createElement("div");
    element.innerText=name;
    return element;
 } 

 header_view.prototype.render = function(data){
    for(let i=0;i<data.length;i++){
        var item = Second_header_item(data[i]);
        document.getElementById("second-header").appendChild(item);
    }
 }