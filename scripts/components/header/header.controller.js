import { controls } from "../../utils/constant.js";
export var createHeaderControl=function(spec){
    var {modal,view} =spec;
    this.modal=modal;
    this.view=view;
    
}

createHeaderControl.prototype.init=function(){
    var second_header_content=this.modal.getSecondHeaderContent();
    this.view.renderCategory(second_header_content);
    this.view.addCategoryEvent(this);
}

createHeaderControl.prototype.callCategoryFilter=function(category){
    controls.mController.renderCategoryFilter(category);
}

createHeaderControl.prototype.addCart=function(id){
    var updatedCart=this.modal.updateCartData(id);
    this.view.renderAddCartButtonInfo(updatedCart);
}

