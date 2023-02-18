
export var main_section_control = function(spec){
    var {modal,view} =spec;
    this.modal=modal;
    this.view=view;
    this.view.addToCartEvent();
}

main_section_control.prototype.init=function(){
    var aside_content=this.modal.get_aside_content();
    var section_bottom_content=this.modal.get_section_bottom_content();
    this.view.render({aside_content,section_bottom_content});
}