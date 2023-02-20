import { controls } from "../controller.js";
export var header_control=function(spec){
    var {modal,view} =spec;
    this.modal=modal;
    this.view=view;
    
}

header_control.prototype.init=function(){
    var second_header_content=this.modal.get_second_header_content();
    this.view.render(second_header_content);
    this.view.second_header_event(this);
}

header_control.prototype.second_header_filter=function(category){
    controls.mController.category_filter(category);
}

header_control.prototype.addCart=function(id){
    var updatedCart=this.modal.updateCart(id);
    this.view.renderAddCart(updatedCart);
};