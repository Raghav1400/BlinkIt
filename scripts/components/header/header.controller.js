import { controls } from "../../helper.js";
export var createHeaderControl=function(spec){
    var {modal,view} =spec;
    this.modal=modal;
    this.view=view;
}

createHeaderControl.prototype.init=function(){
    var categories=this.modal.getCategories();
    this.view.renderCategory(categories,this);
}

createHeaderControl.prototype.callCategoryFilter=function(category){
    controls.mainController.renderCategoryFilter(category);
}

createHeaderControl.prototype.addCart=function(id){
    var updatedCart=this.modal.updateCartData(id);
    this.view.renderAddCartButtonInfo(updatedCart);
}

