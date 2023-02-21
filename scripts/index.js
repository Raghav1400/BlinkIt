import {createMainControl} from './components/main/main.controller.js'
import {createMainSectionView} from './components/main/main.view.js'
import {createMainSectionModal} from './components/main/main.modal.js'

import {createHeaderControl} from './components/header/header.controller.js'
import {createHeaderView} from './components/header/header.view.js'
import {createHeaderModal} from './components/header/header.modal.js'

import { controls } from './utils/constant.js'
import {init} from './utils/helper.js'

window.addEventListener("DOMContentLoaded",function(){
    controls.mController= init(createMainSectionModal,createMainControl,createMainSectionView);
    controls.hController= init(createHeaderModal,createHeaderControl,createHeaderView);

    controls.mController.init();
    controls.hController.init();
    
});



