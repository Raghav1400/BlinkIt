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

main_section_modal.prototype.get_section_bottom_content_byCategory=function(category){
    var filter_aside_content=[];
    var filter_section_bottom_content=[];

    section_bottom_content.forEach(function(element){
        if(element.category === category){
            filter_section_bottom_content.push(element);
        }
    });

    aside_content.forEach(function(element){
        if(element.category === category){
            filter_aside_content.push(element);
        }
    });

    return [filter_aside_content,filter_section_bottom_content];
}

main_section_modal.prototype.setQuantity=function(id,quantity){
    section_bottom_content.forEach(function(element){
        if(element.id==id){
            element.count = Number(quantity);
            return;
        }
    });
}