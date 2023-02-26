import cardItems from '../../../data/cards.json' assert { type: 'json' };
import subcategoriesItems from '../../../data/subcategories.json' assert { type: 'json' };
import {filter} from './main.helper.js'

export var createMainSectionModal=function (){

}

createMainSectionModal.prototype.getSubcategory=function(){
    return subcategoriesItems;
}

createMainSectionModal.prototype.getAllCards=function(){
    return cardItems;
}

createMainSectionModal.prototype.getCardsBySubcategory=function(subcategory){
    var res= filter(cardItems,subcategory,"subcategory");
    return res;
}

createMainSectionModal.prototype.getSubcategoryAndCardsByCategory=function(category){
    var subcategories=filter(subcategoriesItems,category,"category");
    var cards=filter(cardItems,category,"category");
    return {subcategories,cards};
}

createMainSectionModal.prototype.setQuantity=function(id,quantity){
    var res=cardItems.find((element)=>{return element.id==id;})
    res.count=Number(quantity);
}