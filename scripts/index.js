import {main_section_control} from './main_section/control.js'
import {main_section_view} from './main_section/view.js'
import {main_section_modal} from './main_section/modal.js'

import {header_control} from './header/control.js'
import {header_view} from './header/view.js'
import {header_modal} from './header/modal.js'

window.addEventListener("DOMContentLoaded",function(){
    var [mModal,mController,mView]= init(main_section_modal,main_section_control,main_section_view);
    var [hModal,hController,hView]= init(header_modal,header_control,header_view);

    function init(Model,Controller,View) {
        const modal = new Model();
        const view = new View();
        const controller = new Controller({
          modal,
          view,
        });
        return [modal,controller,view ];
    }
    mController.init();
    hController.init();
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

