import { controls } from "../controller.js";

export var main_section_control = function(spec){
    var {modal,view} =spec;
    this.modal=modal;
    this.view=view;
}

main_section_control.prototype.init=function(){
    var aside_content=this.modal.get_aside_content();
    var section_bottom_content=this.modal.get_section_bottom_content();
    this.view.render({aside_content,section_bottom_content});
    this.view.subcategoryEvent(this);
    this.view.addButtonEvent(this);
    this.view.plusMinusEvent(this,controls.hController);

}

main_section_control.prototype.asideFilter=function(subcategory){
    var data=this.modal.get_section_bottom_content_bySubCategory(subcategory);
    this.view.renderCards(data);
    this.view.addButtonEvent(this);
    this.view.plusMinusEvent(this,controls.hController);
}

main_section_control.prototype.category_filter=function(category){
    var [asideData,mainData]=this.modal.get_section_bottom_content_byCategory(category);
    this.view.renderByCategory(asideData,mainData,this);
    this.view.subcategoryEvent(this);
    this.view.addButtonEvent(this);
    this.view.plusMinusEvent(this,controls.hController);
}