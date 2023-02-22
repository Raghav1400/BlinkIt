import { controls } from "../../utils/constant.js";

export var createMainControl = function(spec){
    var {modal,view} =spec;
    this.modal=modal;
    this.view=view;
}

createMainControl.prototype.init=function(){
    var subcategories=this.modal.getSubcategory();
    var cards=this.modal.getAllCards();
    this.view.renderData({subcategories,cards},this,controls.hController);
    this.view.addPlusMinusEvent(this,controls.hController);

}

createMainControl.prototype.renderSubcategoryFilter=function(subcategory){
    var cards=this.modal.getCardsBySubcategory(subcategory);
    var subcategories=[];
    this.view.renderData({subcategories,cards},this,controls.hController);
    this.view.addPlusMinusEvent(this,controls.hController);
}

createMainControl.prototype.renderCategoryFilter=function(category){
    var content=this.modal.getSubcategoryAndCardsByCategory(category);
    var subcategories =content.subcategories;
    var cards=content.cards;
    this.view.renderData({subcategories,cards},this,controls.hController);
    this.view.addPlusMinusEvent(this,controls.hController);
}

createMainControl.prototype.setQuantity=function(itemId,quantity){
    this.modal.setQuantity(itemId,quantity);
}