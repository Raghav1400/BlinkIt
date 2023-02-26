export var createSubcategory= function(info){
    var element= document.createElement("div");
    element.setAttribute("category",info.category);
    element.setAttribute("subcategory",info.subcategory);
    var child= `
        <div class="aside-img">
            <img src=${info.img_src} alt=${info.img_alt}>
        </div>
        <div class="aside-content">
            ${info.subcategory}
        </div>
    `;
    element.innerHTML=child;
    return element;

} 
  
export var createCard = function(info){
    var element= document.createElement("div");
    var child=`
        <div class="discount-button">
            ${info.discount}
        </div>
        <div class="section-bottom-item-img">
            <img src=${info.img_src} alt=${info.img_alt}>
        </div>
        <div class="section-bottom-item-source-time">
            ${info.source_time}
        </div>
        <div class="section-bottom-item-name">
            ${info.name}
        </div>
        <div class="section-bottom-item-weight">
            ${info.weight}
        </div>
        <div class="section-bottom-item-price-add" id=${info.id}>
            <div class="price" price="15">
                <div class="new-price">
                    ${info.newPrice}
                </div>
                <div class="old-price">
                    ${info.oldPrice}
                </div>
            </div>
            <button style="display: ${setDisplay(info,"add")};">
                ADD
            </button>
            <button class="cart-button" style="display: ${setDisplay(info,"cart")};">
                <div class="minus">
                    -
                </div>
                <div class="quantity">
                    ${info.count}
                </div>
                <div class="plus">
                    +
                </div>
            </button>
        </div>
    `;
    element.setAttribute("category",info.category);
    element.setAttribute("subcategory",info.subcategory);
    element.className="section-bottom-item";
    element.innerHTML=child;
    return element;
}

function setDisplay(info,element){
    if(element=="cart" && info.count>=1){
        return "flex";
    }
    else if(element=="cart" && info.count==0){
        return "none";
    }
    else if(element=="add" && info.count>=1){
        return "none";
    }
    else{
        return "";
    }
}

export function filter(arr,val,key){
    var filterData=arr.filter(function(element){
        return element[key]===val;
    })
    return filterData;
}
