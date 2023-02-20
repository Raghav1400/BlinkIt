import {main_section_control} from './main_section/control.js'
import {main_section_view} from './main_section/view.js'
import {main_section_modal} from './main_section/modal.js'

import {header_control} from './header/control.js'
import {header_view} from './header/view.js'
import {header_modal} from './header/modal.js'

import { controls } from './controller.js'

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
    controls.mController=mController;
    controls.hController=hController;
});



