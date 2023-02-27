import {createMainControl} from './components/main/main.controller.js'
import {createMainSectionView} from './components/main/main.view.js'
import {createMainSectionModal} from './components/main/main.modal.js'

import {createHeaderControl} from './components/header/header.controller.js'
import {createHeaderView} from './components/header/header.view.js'
import {createHeaderModal} from './components/header/header.modal.js'

import {init ,controls} from './helper.js'

window.addEventListener("DOMContentLoaded",function(){
    controls.mainController= init(createMainSectionModal,createMainControl,createMainSectionView);
    controls.headController= init(createHeaderModal,createHeaderControl,createHeaderView);

    controls.mainController.init();
    controls.headController.init();
    
});



