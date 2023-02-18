import {main_section_control} from './main_section/control.js'
import {main_section_view} from './main_section/view.js'
import {main_section_modal} from './main_section/modal.js'

window.addEventListener("DOMContentLoaded",function(){
    var [modal,controller,view]= init(main_section_modal,main_section_control,main_section_view);


    function init(Model,Controller,View) {
        const modal = new Model();
        const view = new View();
        const controller = new Controller({
          modal,
          view,
        });
        return [modal,controller,view ];
    }
    controller.init();
});




// var add_button_containers=document.getElementsByClassName("section-bottom-item-price-add");
// var add_button_containers_array = Array.from(add_button_containers);
// add_button_containers_array.forEach(function(container){
//     container.getElementsByTagName("button")[0].addEventListener("click",function(){
//         this.style.display="none";
//         console.log(container.getElementsByClassName("cart-button"));
//         container.getElementsByClassName("cart-button")[0].style.display="flex";
//     });
// });


// var plusItem=Array.from(document.getElementsByClassName("plus"));

// plusItem.forEach(function(plusBtn){
//     console.log(plusBtn);
// });

// for(let i=0;i<second_header_content.length;i++){
//     var item = Second_header_item(second_header_content[i]);
//     document.getElementById("second-header").appendChild(item);
// }

// var Second_header_item = function(name){
//     var element= document.createElement("div");
//     element.innerText=name;
//     return element;
// } 