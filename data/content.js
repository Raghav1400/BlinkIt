var second_header_content =["Vegetable & Fruits","Dairy & Breakfast","Munchies","Cold Drinks & Juices","Instant & Frozen Food","Tea, Coffee & Health Drinks","Bakery & Biscuits"];

var aside_content=[
    {
        img_src:"./assects/fernando-andrade-nAOZCYcLND8-unsplash.jpg",
        img_alt:"Fruits",
        subcategory:"Fresh Fruits",
        category:"Vegetable & Fruits"
    },
    {
        img_src:"./assects/fernando-andrade-nAOZCYcLND8-unsplash.jpg",
        img_alt:"Vegetables",
        subcategory:"Fresh Vegetables",
        category:"Vegetable & Fruits"
    },
    {
        img_src:"./assects/fernando-andrade-nAOZCYcLND8-unsplash.jpg",
        img_alt:"Milk",
        subcategory:"Milk",
        category:"Dairy & Breakfast"
    },
    {
        img_src:"./assects/fernando-andrade-nAOZCYcLND8-unsplash.jpg",
        img_alt:"Juice",
        subcategory:"Apple Juice",
        category:"Cold Drinks & Juices",
    },
    {
        img_src:"./assects/fernando-andrade-nAOZCYcLND8-unsplash.jpg",
        img_alt:"Soda",
        subcategory:"Cold Drinks",
        category:"Cold Drinks & Juices",
    }
]

var section_bottom_content=[
   {    
        id:1,
        discount:"1% OFF",
        img_src:"./assects/391305a.webp",
        img_alt:"Potato Image",
        source_time:"Source at 5AM",
        name:"Fruit Basket",
        weight:"1Kg",
        newPrice:"15",
        oldPrice:"17" ,
        category:"Vegetable & Fruits",
        subcategory:"Fresh Fruits",
        count:0,
    },
    {   
        id:2,
        discount:"1% OFF",
        img_src:"./assects/391305a.webp",
        img_alt:"Potato Image",
        source_time:"Source at 5AM",
        name:"New Potato(Aloo)",
        weight:"1Kg",
        newPrice:"15",
        oldPrice:"17" ,
        category:"Vegetable & Fruits",
        subcategory:"Fresh Vegetables",
        count:0,
    },
    {   
        id:3,
        discount:"1% OFF",
        img_src:"./assects/391305a.webp",
        img_alt:"Potato Image",
        source_time:"Source at 5AM",
        name:"Pepsi",
        weight:"1Kg",
        newPrice:"15",
        oldPrice:"17" ,
        category:"Cold Drinks & Juices",
        subcategory:"Cold Drinks",
        count:0,
   }

]

var cart={
    price:0,
    items:0,
}

export {second_header_content, aside_content,section_bottom_content,cart};