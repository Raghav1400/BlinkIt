import { controls } from "../../utils/constant.js";
export var createHeaderControl=function(spec){
    var {modal,view} =spec;
    this.modal=modal;
    this.view=view;
    
}

createHeaderControl.prototype.init=function(){
    var second_header_content=this.modal.getSecondHeaderContent();
    this.view.renderSecondHeader(second_header_content);
    this.view.addSecondHeaderEvent(this);
}

createHeaderControl.prototype.second_header_filter=function(category){
    controls.mController.category_filter(category);
}

createHeaderControl.prototype.addCart=function(id){
    var updatedCart=this.modal.updateCartData(id);
    this.view.renderAddCartButtonInfo(updatedCart);
}

