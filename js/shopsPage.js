let navbar = document.querySelector('.navbar');
let state = document.querySelector('.content-wrapper');
let footer = document.querySelector('.footer');
let navbarTabLinks = document.querySelectorAll('.navbar-tab-link');
let mobileNavBarTabLinks = document.querySelectorAll('.mobile-navbar-tab-link');

let title = document.getElementById('title');
let themeColor = document.getElementById('themeColor');

export function shopsPage() {
    clearInterval(interval);
    localStorage.setItem('currentPage', 'shops');

    title.innerText = 'CheapDrugs | Shops';
    themeColor.content = '#FF1F5A';
    footer.style.display = 'block';
    navbar.style.position = 'fixed';

    navbarTabLinks.forEach(item => { item.classList.remove('underline'); });
    navbarTabLinks.forEach(item => { item.classList.remove('sub-header-font-color'); });

    navbarTabLinks[1].classList.add('underline');
    navbarTabLinks[1].classList.add('sub-header-font-color');

    mobileNavBarTabLinks.forEach(item => { item.classList.remove('underline') });
    mobileNavBarTabLinks[1].classList.add('underline');

    navbar.classList.add('navbar-shadow');
    state.innerHTML = `
            <div class="center-vertical">
                <div class="shops-container">
                    <h1 class="header-font header-font-color m-font-size">Shops</h1>
                    <!-- mobile expand accordion -->
                    <div class="category">
                        <div onclick="categoryAccordion();"
                            class="mobile-category-accordion">
                            <div class="dropdown-wrapper">
                                <p class="action-call-font s-font-size
                                    paragraph-font-color">Filter</p>
                            </div>
                        </div>
                        <div class="category-list">
                            <!-- category -->
                            <div class="dropdown-wrapper">
                                <select class="dropdown s-font-size">
                                    <option>
                                        <p class="action-call-font
                                            sub-header-font-color s-font-size">party
                                        </p>
                                    </option>
                                    <option>
                                        <p class="action-call-font
                                            sub-header-font-color s-font-size">personal
                                        </p>
                                    </option>
                                    <option>
                                        <p class="action-call-font
                                            sub-header-font-color s-font-size">cuisine-uses
                                        </p>
                                    </option>
                                    <option>
                                        <p class="action-call-font
                                            sub-header-font-color s-font-size">medicine
                                        </p>
                                    </option>
                                </select>
                            </div>
                            <!-- sort by -->
                            <div class="dropdown-wrapper">
                                <select class="dropdown s-font-size">
                                    <option>
                                        <p href="#" class="action-call-font
                                            sub-header-font-color s-font-size">Sort
                                            by:
                                        </p>
                                    </option>
                                    <option>
                                        <p class="action-call-font
                                            sub-header-font-color s-font-size">Rating
                                        </p>
                                    </option>
                                    <option>
                                        <p class="action-call-font
                                            sub-header-font-color s-font-size">Price
                                            low to high
                                        </p>
                                    </option>
                                    <option>
                                        <p class="action-call-font
                                            sub-header-font-color s-font-size">Price
                                            high to low
                                        </p>
                                    </option>
                                </select>
                            </div>
                            <!-- type -->
                            <div class="dropdown-wrapper">
                                <select class="dropdown s-font-size">
                                    <option>
                                        <p href="#" class="action-call-font
                                            sub-header-font-color s-font-size">Type:
                                        </p>
                                    </option>
                                    <option>
                                        <p class="action-call-font
                                            sub-header-font-color s-font-size">Powder
                                        </p>
                                    </option>
                                    <option>
                                        <p class="action-call-font
                                            sub-header-font-color s-font-size">Needle
                                        </p>
                                    </option>
                                    <option>
                                        <p class="action-call-font
                                            sub-header-font-color s-font-size">Pill
                                        </p>
                                    </option>
                                </select>
                            </div>
                            <!-- price -->
                            <div class="dropdown-wrapper">
                                <select class="dropdown s-font-size">
                                    <option>
                                        <p href="#" class="action-call-font
                                            sub-header-font-color s-font-size">Price
                                            Range:
                                        </p>
                                    </option>
                                    <option>
                                        <p class="action-call-font
                                            sub-header-font-color s-font-size">$10
                                            to $200
                                        </p>
                                    </option>
                                    <option>
                                        <p class="action-call-font
                                            sub-header-font-color s-font-size">$200
                                            to $300
                                        </p>
                                    </option>
                                    <option>
                                        <p class="action-call-font
                                            sub-header-font-color s-font-size">$300
                                            and above
                                        </p>
                                    </option>
                                </select>
                            </div>
                            <!-- filter button -->
                            <button class="medium-button
                                tertiary-color">FILTER</but>
                        </div>
                    </div>
                    <script>
                        let isExpand = true;
                        let categoryList = document.querySelector('.category-list');
                        let categoryListDropdowns = document.querySelectorAll('.category-list > *');
                        let height;
                        function categoryAccordion(){
                            if(isExpand){

                                // show div
                                categoryList.style.display = 'flex';
                                categoryList.style.height = 'auto';
                                height = categoryList.offsetHeight;
                                categoryList.style.height = '0px';
                                //show item
                                setTimeout(() => {
                                    categoryList.style.opacity = '1';
                                    categoryList.style.height = height + 'px';
                                }, 25);
                                setTimeout(()=>{
                                    categoryListDropdowns.forEach(dropdown => {
                                        dropdown.style.opacity = '1';
                                    })
                                },100)


                            }else{

                                // remove item
                                categoryList.style.opacity = '0';
                                categoryListDropdowns.forEach(dropdown => {
                                    dropdown.style.opacity = '0';
                                })
                                setTimeout(() => {
                                    categoryList.style.height = '0px';
                                }, 100);
                                // remove div
                                setTimeout(()=>{
                                    categoryList.style.display = 'none';
                                },300);
                            }

                            
                            isExpand = !isExpand;
                        }
                    </script>
                    <!-- end of filter -->
                    <!-- Content -->
                    <div class="items-container">
                        <div class="expand-item">
                            <div class="expand-item-header">
                                <h1 class="sub-header-font m-font-size">ecstasy</h1>
                                <img src="assets/stock1.jpg" alt="stock1"
                                    class="expand-item-image">
                            </div>
                            <div class="expand-item-description">
                                <p class="paragraph-font xs-font-size">Lorem
                                    ipsum dolor sit amet, consectetur adipiscing
                                    elit. <span class="hide-on-mobile">Nam
                                        molestie sit amet turpis sit amet
                                        iaculis. Quisque
                                        ante
                                        orci, imperdiet non ornare at, suscipit
                                        sed
                                        quam. Orci varius natoque penatibus et
                                        magnis dis parturient montes,
                                        nascetur ridiculus mus. Praesent mollis</span><a
                                        href="#" class="show-on-mobile
                                        tertiary-color action-call-font">read
                                        more</a></p>
                                <hr>
                                <div class="social-media-group">
                                    <img src="assets/fb.png" alt="facebook"
                                        class="social-icon">
                                    <img src="assets/ig.png" alt="instagram"
                                        class="social-icon">
                                    <img src="assets/twitter.png" alt="twitter"
                                        class="social-icon">
                                </div>
                                <div class="expand-item-description-buttons">
                                    <button class="medium-button">view</button>
                                    <button class="medium-button
                                        secondary-highlight-button">+cart
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div></div>
                        <div class="collapsedItemsDiv">
                            <div class="collapsedItems">
                                <div class="collapsed-item-card">
                                    <h1 class="sub-header-font s-font-size">ecstasy</h1>
                                    <img src="assets/stock2.jpg" alt="stock2"
                                        class="collapsed-item-card-image">
                                    <p class="paragraph-font xs-font-size">RM
                                        1.00</p>
                                </div>
                                <div class="collapsed-item-card">
                                    <h1 class="sub-header-font s-font-size">ecstasy</h1>
                                    <img src="assets/stock2.jpg" alt="stock2"
                                        class="collapsed-item-card-image">
                                    <p class="paragraph-font xs-font-size">RM
                                        1.00</p>
                                </div>
                                <div class="collapsed-item-card">
                                    <h1 class="sub-header-font s-font-size">ecstasy</h1>
                                    <img src="assets/stock2.jpg" alt="stock2"
                                        class="collapsed-item-card-image">
                                    <p class="paragraph-font xs-font-size">RM
                                        1.00</p>
                                </div>
                                <div class="collapsed-item-card">
                                    <h1 class="sub-header-font s-font-size">ecstasy</h1>
                                    <img src="assets/stock2.jpg" alt="stock2"
                                        class="collapsed-item-card-image">
                                    <p class="paragraph-font xs-font-size">RM
                                        1.00</p>
                                </div>
                                <div class="collapsed-item-card">
                                    <h1 class="sub-header-font s-font-size">ecstasy</h1>
                                    <img src="assets/stock2.jpg" alt="stock2"
                                        class="collapsed-item-card-image">
                                    <p class="paragraph-font xs-font-size">RM
                                        1.00</p>
                                </div>
                            </div>
                            <div class="showmore">
                                <div class="showmore-button">
                                    <p class="action-call-font
                                        s-font-size paragraph-font-color">show
                                        more</p>
                                    <img src="util/arrow.svg" alt="arrow">
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end of content -->
                </div>
            </div>

    `;

    navbar.style.display = "flex";
    navbar.style.position = 'fixed';

    document.querySelector('.navbar-padding').style.minHeight = navbar.offsetHeight + 'px';
}
