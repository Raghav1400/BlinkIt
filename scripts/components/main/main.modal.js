import {aside_content, section_bottom_content} from '../../../data/content.js'


export var createMainSectionModal=function (){
    
}

createMainSectionModal.prototype.getSubcategory=function(){
    return aside_content;
}

createMainSectionModal.prototype.getAllCards=function(){
    return section_bottom_content;
}

createMainSectionModal.prototype.getCardsBySubcategory=function(subcategory){
    var filterData=[];
    section_bottom_content.forEach(function(element){
        if(element.subcategory === subcategory){
            filterData.push(element);
        }
    });
    return filterData;
}

createMainSectionModal.prototype.getSubcategoryAndCardsByCategory=function(category){
    var subcategories=[];
    var cards=[];

    section_bottom_content.forEach(function(element){
        if(element.category === category){
            cards.push(element);
        }
    });

    aside_content.forEach(function(element){
        if(element.category === category){
            subcategories.push(element);
        }
    });

    return {subcategories,cards};
}

createMainSectionModal.prototype.setQuantity=function(id,quantity){
    section_bottom_content.forEach(function(element){
        if(element.id==id){
            element.count = Number(quantity);
            return;
        }
    });
}