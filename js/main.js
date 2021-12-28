const laps = {
    dell:[
        {
            url:'hp-01.jpg',
            brand:'dell',
            model:"Latitude E5530",
            screenSize:'15.6 inch',
            cpu:"intel Core i3 i3-3210M",
            ram:"4GB RAM",
            storge:"500GB",
            priceEGy:2400,
            new:false,
            keyboard:"English",
            tuchScreen:false,
            operatingSystem:'windows 10'
        },
        {
            url:'dell-02.jpg',
            brand:'dell',
            model:"Latitude E7270",
            screenSize:'12.5 inch',
            cpu:"intel Core i7 i7-6600U",
            ram:"4GB RAM",
            storge:"128GB",
            priceEGy:4800,
            new:false,
            keyboard:"English",
            tuchScreen:true,
            operatingSystem:'windows 10'
        },
        {
            url:'dell-03.jpg',
            brand:'dell',
            model:"Dell inspiron 15-3593",
            screenSize:'15.6 inch',
            cpu:"intel Core i3 i3-1005G1",
            ram:"8GB RAM",
            storge:"1TB",
            priceEGy:7250,
            new:true,
            keyboard:"English",
            tuchScreen:false,
            operatingSystem:'windows 10'
        },
        {
            url:'dell-04.jpg',
            brand:'dell',
            model:"Dell G5 5500",
            screenSize:'15.6 inch',
            cpu:"intel Core i5 i5-10300H",
            ram:"8GB RAM",
            storge:"256GB",
            priceEGy:15500,
            new:true,
            keyboard:"English",
            tuchScreen:false,
            operatingSystem:'windows 10'
        },
        {
            url:'dell-05.jpg',
            brand:'dell',
            model:"Latitude E5540",
            screenSize:'15.6 inch',
            cpu:"Intel Core i3 i3-4310U 1.6GHz up to 2.6GHz",
            ram:"4GB RAM",
            storge:"500GB",
            priceEGy:4000,
            new:false,
            keyboard:"English",
            tuchScreen:false,
            operatingSystem:'windows 10'
        }
    ],
    hp : [
        {
            url:'hp-01.jpg',
            brand:'hp',
            model:"640G1",
            screenSize:'14 inch',
            cpu:"Intel Core i5 i5-4310U",
            ram:"4GB RAM",
            storge:"500GB",
            priceEGy:3900,
            new:false,
            keyboard:"English",
            tuchScreen:false,
            operatingSystem:'windows 10'
        },
        {
            url:'hp-02.jpg',
            brand:'hp',
            model:"16-A0025NR",
            screenSize:'14 inch',
            cpu:"Intel Core i5 i5-10300H",
            ram:"12GB RAM",
            storge:"256GB",
            priceEGy:13500,
            new:false,
            keyboard:"English",
            tuchScreen:false,
            operatingSystem:'windows 10'
        },
        {
            url:'hp-03.jpg',
            brand:'hp',
            model:"16-A0025NR",
            screenSize:'14 inch',
            cpu:"Intel Core i3 i3-1005G1",
            ram:"12GB RAM",
            storge:"88GB",
            priceEGy:9000,
            new:true,
            keyboard:"English",
            tuchScreen:false,
            operatingSystem:'windows 10'
        },
        {
            url:'hp-04.jpg',
            brand:'hp',
            model:"Probook 450 G7",
            screenSize:'14 inch',
            cpu:"Intel Core i7 i7-10510U",
            ram:"8GB RAM",
            storge:"1TB",
            priceEGy:16800,
            new:true,
            keyboard:"English",
            tuchScreen:false,
            operatingSystem:'windows 10'
        },
        {
            url:'hp-05.jpg',
            brand:'hp',
            model:"EliteBook 840G3",
            screenSize:'14 inch',
            cpu:"IIntel Core i5 i5-6200U",
            ram:"4GB RAM",
            storge:"500GB",
            priceEGy:5150,
            new:false,
            keyboard:"English",
            tuchScreen:false,
            operatingSystem:'windows 10'
        }
    ]
}
// console.log(typeof(laps));
// create class for item one product
let product = {
    url:'hp-05.jpg',
    brand:'hp',
    model:"EliteBook 840G3",
    screenSize:'14 inch',
    cpu:"Intel Core i5 i5-6200U",
    ram:"4GB RAM",
    storge:"500GB",
    priceEGy:5150,
    newed:false,
    keyboard:"English",
    tuchScreen:false,
    operatingSystem:'windows 10'
};

// this is container  are contain all product
const items= document.querySelector(".products .items .row")


//create Element stamp
function itemProduct(product) {
    
   let item = document.createElement("div")
   item.setAttribute("class" , 'item col-lg-3 col-md-4 col-sm-6 col-xs-12 ');
   items.appendChild(item);

   let spanPrice = document.createElement("span");
   spanPrice.setAttribute("class","price"); 
   spanPrice.textContent =  `${product.priceEGy} EGY`;
   item.appendChild(spanPrice);
   let card = document.createElement("div");
   card.setAttribute("class", "card");
   item.appendChild(card);

   let addImg = document.createElement("img");
   addImg.setAttribute('src',`images/laps/${product.url}`);
   addImg.setAttribute("class", "card-img m-auto");
   addImg.setAttribute("alt", product.brand);
   card.appendChild(addImg);

   let cardBody = document.createElement('div');
   cardBody.setAttribute("class", "card-body");
   card.appendChild(cardBody);

   let cardTitle = document.createElement("h5");
   cardTitle.setAttribute("class","card-title"),
   cardTitle.textContent = `${product.brand} ${product.model}`;
   cardBody.appendChild(cardTitle);

   let pText = document.createElement("p");
   pText.setAttribute("class", "card-text");
   pText.textContent = `${product.screenSize} ${product.ram} ${product.storge} ${product.cpu} ${product.operatingSystem} keyboard language ${product.keyboard}`;
   cardBody.appendChild(pText);

   let aAddToCart = document.createElement("a");
   aAddToCart.setAttribute("href","#");
   aAddToCart.setAttribute("class", "btn btn-me");
   aAddToCart.textContent = "Add To Cart";
   cardBody.appendChild(aAddToCart);

   let details = document.createElement("a");
   details.setAttribute("href","#");
   details.setAttribute("class", "btn btn-me ml-2");
   details.textContent = "Details";
   cardBody.appendChild(details);

   
}



// itemProduct( product);
function shawAllProduct() {
    removeAllProduct();
    for(let i = 0; i < laps.hp.length; i++){
        itemProduct(laps.hp[i]);
    }
    for(let i = 0; i < laps.dell.length; i++){
        itemProduct(laps.dell[i]);
    }
}
shawAllProduct();

function removeAllProduct() {
    
    const arrItems = Array.from(items.children);
    for (let i = 0; i < arrItems.length; i++){
        arrItems[i].remove();
    }
    // items.children.remove();
}
// removeAllProduct();

function showHpProducts() {
    removeAllProduct();
    for(let i = 0; i < laps.hp.length; i++){
        itemProduct(laps.hp[i]);
    }
}
// showHpProducts();
function showDellProducts() {
    removeAllProduct();
    for(let i = 0; i < laps.dell.length; i++){
        itemProduct(laps.dell[i]);
    }
}

function showNewProduct() {
    removeAllProduct();
    for(let i = 0; i < laps.hp.length; i++){
        if (laps.hp[i].new === true){
            itemProduct(laps.hp[i]);
        }
    }
    for(let i = 0; i < laps.dell.length; i++){
        if (laps.dell[i].new === true){
            itemProduct(laps.dell[i]);
        }
        
    }
}
function showUsedProduct() {
    removeAllProduct();
    for(let i = 0; i < laps.hp.length; i++){
        if (laps.hp[i].new === false){
            itemProduct(laps.hp[i]);
        }
    }
    for(let i = 0; i < laps.dell.length; i++){
        if (laps.dell[i].new === false){
            itemProduct(laps.dell[i]);
        }
        
    }
}

function removeAllActiveClassForBtns(btns){
    for(let i = 0 ; i < btns.length; i++){
        btns[i].classList.remove('active');
    }
}

const ourProductsBtn = Array.from( document.querySelector(".buttons").children);

for (let i = 0; i < ourProductsBtn.length; i++){
    
    ourProductsBtn[i].addEventListener("click", (event) =>{
        removeAllActiveClassForBtns(ourProductsBtn);
        event.target.classList.add("active");
        let clicked = event.target.getAttribute("data-select");
        switch(clicked){
            case "dell" :
                showDellProducts();
                break;
            case "hp":
                showHpProducts();
                break;
            case "all":
                shawAllProduct();
                break;
            case "new":
                showNewProduct();
                break;
            case "used":
                showUsedProduct();
                break;
        }
        
    })
}


console.log(ourProductsBtn);




/*
        show and hide log in section by add and remove class d-flex;
 */

const logIn = document.querySelector(".log-in");
const btnLogin = document.querySelector('btn-login');
const getout = document.querySelector(".getout");

function showAndhide(e){ 
    logIn.classList.toggle("d-flex");
}
getout.addEventListener("click", () => {
    logIn.classList.remove("d-flex");
})





                