export var header_control=function(spec){
    var {modal,view} =spec;
    this.modal=modal;
    this.view=view;
}

header_control.prototype.init=function(){
    var second_header_content=this.modal.get_second_header_content();
    this.view.render(second_header_content);
}