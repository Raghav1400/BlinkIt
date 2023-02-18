import {aside_content, section_bottom_content} from '../../data/content.js'


export var main_section_modal=function (){
    this.aside_content=aside_content;
    this.section_bottom_content=section_bottom_content;
}

main_section_modal.prototype.get_aside_content=function(){
    return aside_content;
}

main_section_modal.prototype.get_section_bottom_content=function(){
    return section_bottom_content;
}

main_section_modal.prototype.get_section_bottom_content_bySubCategory=function(subcategory){
    var filterData=[];
    section_bottom_content.forEach(function(element){
        if(element.subcategory === subcategory){
            filterData.push(element);
        }
    });
    return filterData;
}