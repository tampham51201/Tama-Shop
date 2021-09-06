// product
const pageProducts = [{
        id: 1,
        name: "Nước Tăng Lực Redbull",
        img: "./assets/img/6-lon-nuoc-tang-luc-redbull-250ml.jpg",
        priceOld: "45.000",
        priceCurrent: "40.000",
        quantitySold: "10000",
        brand: "Redbull",
        origin: "Thái Lan",
        favourite: "Bán Chạy",
        saleoffPercent: "10",
    },
    {
        id: 2,
        name: "6 Nước Coca Cola màu Đen ",
        img: "./assets/img/6-lon-nuoc-ngot-coca-cola-light-330ml.jpg",
        priceOld: "50.000",
        priceCurrent: "45.000",
        quantitySold: "2223",
        brand: "Coca",
        origin: "Tama",
        favourite: "Yêu Thích",
        saleoffPercent: "15",
    },
    {
        id: 3,
        name: "Nước Tăng Lực Sting espres",
        img: "./assets/img/6-chai-nuoc-tang-luc-sting-espresso-ca-phe-330ml-201905101318111479.jfif",
        priceOld: "233.000",
        priceCurrent: "123.000",
        quantitySold: "5600",
        brand: "Sting",
        origin: "HIHI",
        favourite: "Yêu Thích",
        saleoffPercent: "50",
    },
    {
        id: 4,
        name: "6 Lon Bia Tiger Uống Không Say",
        img: "./assets/img/6-lon-bia-tiger-330ml-202103162330599969.jpg",
        priceOld: "100.000",
        priceCurrent: "80.000",
        quantitySold: "1400",
        brand: "No Brand",
        origin: "TAMA",
        favourite: "Yêu Thích",
        saleoffPercent: "20",
    },
    {
        id: 5,
        name: "6 Lon 7 UP Vị Chanh Chua Lè",
        img: "./assets/img/6-lon-nuoc-ngot-7-up-vi-chanh-330ml-202107191615500908.jpg",
        priceOld: "45.000",
        priceCurrent: "39.000",
        quantitySold: "1232",
        brand: "No Brand",
        origin: "Tama",
        favourite: "Yêu Thích",
        saleoffPercent: "30",
    },
    {
        id: 6,
        name: "6 Lon Sting Dâu Thơm Ngon",
        img: "./assets/img/6-lon-nuoc-tang-luc-sting-huong-dau-320ml-202107142011353387.jpg",
        priceOld: "45.000",
        priceCurrent: "5.000",
        quantitySold: "9034",
        brand: "No brand",
        origin: "TAMA",
        favourite: "Bán Chạy",
        saleoffPercent: "10",
    },
    {
        id: 7,
        name: "Bia Heineken Siêu Bổ Dương",
        img: "./assets/img/74d598c047f9d7acc0af81f7e7534f36.png",
        priceOld: "411.000",
        priceCurrent: "223.000",
        quantitySold: "5400",
        brand: "No Brand",
        origin: "TAMA",
        favourite: "Yêu Thích",
        saleoffPercent: "60",
    },
    {
        id: 8,
        name: "Sửa Nuti Food",
        img: "./assets/img/8935049007302.jpg",
        priceOld: "311.000",
        priceCurrent: "300.000",
        quantitySold: "5200",
        brand: "No Brand",
        origin: "TAMA",
        favourite: "Yêu Thích",
        saleoffPercent: "5",
    },
    {
        id: 9,
        name: "6 Lon 7 UP Vị Chanh Chua Lè",
        img: "./assets/img/6-lon-nuoc-ngot-7-up-vi-chanh-330ml-202107191615500908.jpg",
        priceOld: "45.000",
        priceCurrent: "1.000",
        quantitySold: "1232",
        brand: "No Brand",
        origin: "Tama",
        favourite: "Yêu Thích",
        saleoffPercent: "30",
    },
    {
        id: 10,
        name: "6 Lon Sting Dâu Thơm Ngon",
        img: "./assets/img/6-lon-nuoc-tang-luc-sting-huong-dau-320ml-202107142011353387.jpg",
        priceOld: "45.000",
        priceCurrent: "3.000",
        quantitySold: "9034",
        brand: "No brand",
        origin: "TAMA",
        favourite: "Bán Chạy",
        saleoffPercent: "10",
    },
];


function RenderPageProducs() {
    const rowElement = document.querySelector(".home-product .row");
    const htmls = pageProducts.map((Product, index) => {
        return ` 
     <div class="col l-2-4 m-4 c-6">
        <a class="home-product-item" href="">
      
 <div class="home-product-item__img" style="background-image: url(${Product.img});"></div>
        <h4 class="home-product-item__name">${Product.name}</h4>
        <div class="home-product-item__price">
             <span class="home-product-item__price-old">${Product.priceOld}đ</span>
              </span>
             <span class="home-product-item__price-current">${Product.priceCurrent}đ</span>
              </span>
        </div>
         <div class="home-product-item__action">
            <span class="home-product-item__like home-product-item__like--liked">
                <i class="home-product-item__like-icon-fill fas fa-heart"></i>
                 <i class="home-product-item__like-icon-empty far fa-heart"></i>
         </span>
         <div class="home-product-item__rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                 <i class="fas fa-star"></i>
                 </div>
                <div class="home-product-item__quantity-sold">
                  Đã Bán
                   <span class="home-product-item__quantity-sold-quantity">
                   ${Product.quantitySold}
                </span>                                                                
                    </div>
                    </div>
                                        <div class="home-product-item__origin">
                                            <span class="home-product-item__brand">${Product.brand}</span>
                                            <span class="home-product-item__origin-title">${Product.origin}</span>
                                        </div>
                                        <div class="home-product-item__favourite">
                                            <i class="home-product-item__favourite-icon fas fa-check"></i>
                                        <span>${Product.favourite}</span>
                                        </div>
                                    
                                        <div class="home-product-item__sale-off">
                                            <span class="home-product-item__sale-off-percent">${Product.saleoffPercent}%</span>
                                            <span class="home-product-item__sale-off-label">GIẢM</span>
                                        </div>
                                    </a>
                            </div> 
                        `;
    });
    rowElement.innerHTML = htmls.join(" ");

}

function RenderPageProductsDefault() {
    //sort product common - btn primary default common
    pageProducts.sort(function(a, b) {
        return b.quantitySold - a.quantitySold;
    })
    RenderPageProducs();
}
RenderPageProductsDefault()

//sort product

function RenderSortProducts() {

    let priceLtoH = document.querySelector('.home-filter__select__item:first-child')
    let priceHtoL = document.querySelector('.home-filter__select__item:last-child')
    let btnSort = document.querySelectorAll('.home-filter__btn')
    let btnCm = btnSort[0]; //get element button common

    let btnHot = btnSort[1]; //get element button Hot
    let btnNew = btnSort[2]; //get element button new
    let btnprice = document.querySelector('.home-filter__select-btn')
        //change color element price high to low and low to high
    function changeColor(active, inactive) {
        active.style.background = '#ffff'
        inactive.style.background = '#eeeeee'
    }
    // remove class button primary
    function removebtnPrimary() {
        document.querySelector('.home-filter .btn--primary ').classList.remove("btn--primary");
    }
    //sort low to high
    priceLtoH.onclick = function() {
            pageProducts.sort(function(a, b) {
                return a.priceCurrent - b.priceCurrent;
            })

            changeColor(priceHtoL, priceLtoH)
            removebtnPrimary();
            btnprice.classList.add("btn--primary");
            RenderPageProducs();
        }
        //sort high to low
    priceHtoL.onclick = () => {

        pageProducts.sort(function(a, b) {
            return b.priceCurrent - a.priceCurrent;
        })
        removebtnPrimary();
        btnprice.classList.add("btn--primary");
        changeColor(priceLtoH, priceHtoL)
        RenderPageProducs();
    }

    // sort product common(phổ biến)
    btnCm.onclick = () => {
            pageProducts.sort(function(a, b) {
                return b.saleoffPercent - a.saleoffPercent;
            })
            removebtnPrimary()
            btnCm.classList.add("btn--primary");

            RenderPageProducs()
        }
        // sort product hot(bán chạy)
    btnHot.onclick = () => {

        pageProducts.sort(function(a, b) {
            return b.quantitySold - a.quantitySold;
        })
        removebtnPrimary()
        btnHot.classList.add("btn--primary");
        RenderPageProducs()
            // sort product new(mới nhất)
    }
    btnNew.onclick = () => {
        pageProducts.sort(function(a, b) {
            return b.id - a.id;
        })
        removebtnPrimary()
        btnNew.classList.add("btn--primary");
        RenderPageProducs()
    }

}
RenderSortProducts();



//catorgary
const Categorys = [{
        id: 1,
        name: 'Sản Phẩm'

    },
    {
        id: 2,
        name: 'Gái Xinh'

    },
    {
        id: 3,
        name: 'Gái Đẹp'

    },
    {
        id: 4,
        name: 'Nước có ga'

    },

    {
        id: 5,
        name: 'Nguyên liệu nấu ăn'

    },
    {
        id: 6,
        name: 'Sắt Đẹp'

    },
    {
        id: 7,
        name: 'Sức Khỏe'

    },
    {
        id: 8,
        name: 'Ngũ Cốc'

    }
]

function RenderCategorys() {
    const categoryEle = document.querySelector('.category-list')
    const htmlsCate = Categorys.map((category, index) => {
        if (index == 0)
            return `<li class="category-item category-item--active">
            <a href="#" class="category-item__link">${category.name}</a>
            </li>`;
        else
            return `<li class="category-item">
            <a href="#" class="category-item__link">${category.name}</a>
            </li>`;


    });

    categoryEle.innerHTML = htmlsCate.join(" ");
}
RenderCategorys()

function handleCategory() {

    const categoryItems = document.querySelectorAll('.category-item')
    categoryItems.forEach((categoryItem, index) => {
        categoryItem.onclick = () => {
            const categoryActive = document.querySelector('.category-item--active')
            categoryActive.classList.remove('category-item--active')
            categoryItem.classList.add('category-item--active')
        }


    });

}
handleCategory()