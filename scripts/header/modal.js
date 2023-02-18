import {second_header_content} from '../../data/content.js'

export var header_modal=function (){
    this.second_header_content=second_header_content;
}

header_modal.prototype.get_second_header_content=function(){
    return second_header_content;
}
