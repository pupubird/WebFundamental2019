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
                            <a class="medium-button
                                tertiary-color" onclick="filter();">FILTER</a>
                        </div>
                    </div>

                    <!-- end of filter -->
                    <!-- Content -->
                    <div class="items-container">
                        <div class="expand-item">
                            <div class="expand-item-header">
                                <h1 class="sub-header-font m-font-size">ecstasy</h1>
                                <img src="assets/stock5.jpg" alt="stock1"
                                    class="expand-item-image">
                                <div class="tag-group">
                                    <p class="tag-primary">new</p>
                                    <p class="tag-secondary">10% off</p>
                                </div>
                            </div>
                            <div class="expand-item-description">
                                <p class="paragraph-font xs-font-size">
                                3,4-methylenedioxy-methamphetamine (MDMA) is a synthetic 
                                    drug that alters mood and perception
                                <span class="hide-on-mobile">
                                        (awareness of surrounding objects and conditions). 
                                        It is chemically similar to both stimulants and hallucinogens, 
                                        producing feelings of increased energy, pleasure, emotional warmth, 
                                        and distorted sensory and time perception.</span><a
                                        href="#" class="show-on-mobile
                                        tertiary-color action-call-font">read
                                        more</a></p>
                                <hr>
                                <div class="social-media-group">
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <img src="assets/fb.png" alt="facebook"
                                        class="social-icon" >
                                    </a>
                                    
                                    <a href="https://www.instagram.com/" target="_blank">
                                        <img src="assets/ig.png" alt="instagram"
                                            class="social-icon">
                                    </a>
                                    <a href="https://twitter.com/" target="_blank">
                                        <img src="assets/twitter.png" alt="twitter"
                                            class="social-icon">
                                    </a>
                                </div>
                                <div class="expand-item-description-buttons">
                                    <button class="medium-button" onclick="modifyModal('ecstasy','assets/stock5.jpg');">view</button>
                                    <button class="medium-button
                                        secondary-highlight-button">+cart
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div></div>
                        <div class="collapsedItemsDiv">
                            <div class="collapsedItems">
                                <div class="collapsed-item-card"  onclick="modifyModal('oploid','assets/stock6.jpg');">
                                    <h1 class="sub-header-font s-font-size">oploid</h1>
                                    <img src="assets/stock6.jpg" alt="stock2"
                                        class="collapsed-item-card-image">
                                        
                                    <p class="paragraph-font xs-font-size">RM
                                        1.00</p>
                                    <div class="tag-group">
                                        <p class="tag-primary">new</p>
                                    </div>

                                </div>
                                <div class="collapsed-item-card"  onclick="modifyModal('cannabis','assets/stock4.jpg');">
                                    <h1 class="sub-header-font s-font-size">cannabis</h1>
                                    <img src="assets/stock4.jpg" alt="stock2"
                                        class="collapsed-item-card-image">
                                    <p class="paragraph-font xs-font-size">RM
                                        1.00</p>
                                    <div class="tag-group">
                                        <p class="tag-primary">new</p>
                                    </div>
                                </div>
                                <div class="collapsed-item-card"  onclick="modifyModal('speed','assets/stock7.jpg');">
                                    <h1 class="sub-header-font s-font-size">speed</h1>
                                    <img src="assets/stock7.jpg" alt="stock2"
                                        class="collapsed-item-card-image">
                                    <p class="paragraph-font xs-font-size">RM
                                        1.00</p>
                                    <div class="tag-group">
                                        <p class="tag-primary">new</p>
                                    </div>
                                </div>
                                <div class="collapsed-item-card" onclick="modifyModal('poppers','assets/stock8.jpg');">
                                    <h1 class="sub-header-font s-font-size">poppers</h1>
                                    <img src="assets/stock8.jpg" alt="stock2"
                                        class="collapsed-item-card-image">
                                    <p class="paragraph-font xs-font-size">RM
                                        1.00</p>
                                    <div class="tag-group">
                                        <p class="tag-secondary">20% off</p>
                                    </div>
                                </div>
                                <div class="collapsed-item-card" onclick="modifyModal('cocaine','assets/stock9.jpg');">
                                    <h1 class="sub-header-font s-font-size">cocaine</h1>
                                    <img src="assets/stock9.jpg" alt="stock2"
                                        class="collapsed-item-card-image">
                                    <p class="paragraph-font xs-font-size">RM
                                        1.00</p>
                                    <div class="tag-group">
                                        <p class="tag-secondary">10% off</p>
                                    </div>
                                </div>
                            </div>
                            <div class="showmore">
                                <div class="showmore-button" onclick="showmore();">
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

    if (!document.querySelector('.shopsScript')) {
        let shopsScript = document.createElement('script');
        shopsScript.type = 'text/javascript';
        shopsScript.src = 'util/shops.js';
        shopsScript.className = 'shopsScript';
        document.body.appendChild(shopsScript);
    }

    document.querySelector('.navbar-padding').style.minHeight = navbar.offsetHeight + 'px';
    setTimeout(() => {
        document.querySelector('.expand-item').style.maxHeight = document.querySelector('.expand-item').offsetHeight + 'px';
    }, 100);
}
