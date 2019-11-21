<?php include('register.php'); ?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta id="themeColor" name="theme-color" content="#1E2A78">
        <title id="title">CheapDrugs | Home</title>
        <link rel="stylesheet" href="css/indexPage.css">
        <link rel="stylesheet" href="util/UIComponent.css">
        <link rel="stylesheet" href="css/aboutPage.css">
        <link rel="shortcut icon" href="assets/favicon.ico" type="image/x-icon">
        <link rel="stylesheet" href="css/navbar.css">
        <link rel="stylesheet" href="css/footer.css">
        <link rel="stylesheet" href="css/modal.css">
        <link rel="stylesheet" href="css/shops.css">
        <!-- critical loading material, to prevent unstyled loading circle due to fetch from network, use embbed styling method -->
        <style>
            .loading {
                display: block;
                width: 80px;
                height: 80px;
                position: fixed;
                top: calc(50vh - 40px);
                left: calc(50vw - 40px);
                border-radius: 50%;
                border: 6px solid;
                border-color: rgb(218, 184, 36) #1E2A78 #FF1F5A transparent;
                animation: loadingSpin 8s linear infinite;
            }
            @keyframes loadingSpin {
                0% {
                    transform: rotate(0deg);
                }
                100% {
                    transform: rotate(360deg);
                }
            }

        </style>
    </head>
    <body onload="loadStateJs();">
        <div class="navbar-padding"></div>
        <nav class="navbar">
            <div class="navbar-left">
                <a onclick="loadHomePage();">
                    <img class="logo" src="assets/logo.png" alt="logo">
                </a>
                <ul class="navbar-tab">
                    <li><a onclick="loadHomePage();"
                            class="action-call-font
                            paragraph-font-color
                            s-font-size underline navbar-tab-link">home</a></li>
                    <li><a onclick="loadShopsPage();"
                            class="action-call-font
                            paragraph-font-color
                            s-font-size navbar-tab-link">shops</a></li>
                    <li><a onclick="loadCartPage();"
                            class="action-call-font
                            paragraph-font-color
                            s-font-size navbar-tab-link">cart</a></li>
                    <li><a onclick="loadAboutPage();"
                            class="action-call-font
                            paragraph-font-color
                            s-font-size navbar-tab-link">about</a></li>
                </ul>
            </div>
            <div class="center-horizontal">
                <div class="navbar-right">
                    <a href="#"
                        onclick="showLoginSignup();"
                        class="medium-button
                        primary-color action-call-font navbar-tab-link">LOGIN/SIGNUP</a>
                </div>
                <div id="signup" class="modal center-vertical">
                    <span onclick="closeModal1()" class="close" title="Close
                        Modal">&times;</span>
                    <form class="modal-content" action="signup.php">
                        <div class="container">
                            <p class="header-font m-font-size">Sign Up</p>
                            <p class="sub-header-font xs-font-size">Please fill
                                in this form to create an account.</p>
                            <hr>
                            <label class="sub-header-font s-font-size"
                                for="email"><b>Email</b></label>
                            <input type="text" placeholder="Enter Email"
                                name="email" required>

                            <label class="sub-header-font s-font-size"
                                for="psw"><b>Password</b></label>
                            <input type="password" placeholder="Enter Password"
                                name="psw" required>

                            <label class="sub-header-font s-font-size"
                                for="psw-repeat"><b>Repeat Password</b></label>
                            <input type="password" placeholder="Repeat Password"
                                name="psw-repeat" required>

                            <p class="sub-header-font xs-font-size">By creating
                                an account you agree to our <a href="#"
                                    style="color:dodgerblue">Terms & Privacy</a>.</p>
                            <div class="clearfix">
                                <button type="submit" class="signupbtn
                                    medium-button highlight-button">Sign Up</button>
                                <button type="button" onclick="closeModal1()"
                                    class="cancelbtn medium-button">Cancel</button>
                            </div>
                            <a onclick="logIn()" class="loginbtn paragraph-font
                                center-horizontal">Already have an account?</a>
                        </div>
                    </form>
                </div>
                <div id="login" class="modal">
                    <span class="close" title="Close Modal"
                        onclick="closeModal2()">&times;</span>
                    <form class="modal-content"  action="login.php">
                        <div class="container">
                            <p class="header-font m-font-size">Log In</p>
                            <hr>
                            <label class="sub-header-font s-font-size"
                                for="email"><b>Email</b></label>
                            <input type="text" placeholder="Enter Email"
                                name="email" required>

                            <label class="sub-header-font s-font-size"
                                for="psw"><b>Password</b></label>
                            <input type="password" placeholder="Enter Password"
                                name="psw" required>

                            <label class="sub-header-font xs-font-size">
                                <input type="checkbox" checked="checked"
                                    name="remember" style="margin-bottom:15px">
                                Remember me
                            </label>

                            <div class="clearfix">
                                <button class="medium-button signupbtn
                                    highlight-button" type="submit">Log In</button>
                            </div>
                            <a onclick="SignUp()" class="loginbtn paragraph-font
                                center-horizontal">Don't have an account?
                                Register now.</a>
                        </div>
                    </form>
                </div>
                <div id="ItemDesc" class="modal center-vertical">
                    <span onclick="closeItemModal()" class="close" title="Close
                        Modal">&times;</span>
                    <form class="modal-content" action="#">
                        <div class="container">
                            <p class="header-font m-font-size item-header">ecstasy</p>
                            <p class="sub-header-font s-font-size
                                item-subheader">Sensation of Paradise</p>
                            <p class="sub-header-font s-font-size item-price">RM1.00
                                ***** <small>11 reviews</small></p>
                            <div class="center-horizontal m-center-vertical">
                                <img src="assets/stock1.jpg" alt="stock1"
                                    class="item-image">
                                <p class="paragraph-font xs-font-size
                                    item-desc">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                    Mauris sollicitudin est quis urna lacinia
                                    sodales.
                                    Curabitur et tempus nulla. Fusce rhoncus at
                                    eros id vehicula.
                                    Vivamus eu quam ac metus posuere tempor.
                                    Nullam vel metus eget arcu mollis fringilla.
                                    Ut luctus efficitur sem id dignissim.
                                    Sed id metus aliquam mi imperdiet
                                    scelerisque.
                                    Nulla eleifend tellus sed nunc suscipit
                                    cursus.
                                </p>
                                <button class="medium-button
                                    secondary-highlight-button item-button">+cart</button>
                            </div>
                            <div class="prev-next-button center-horizontal">
                                <button class="small-button button-left">Prev</button>
                                <button class="small-button button-right">Next</button>
                            </div>
                        </div>
                    </form>
                </div>
                <script>
                    // for login sign up model------------------
                    function showLoginSignup(){
                        document.getElementById('signup').style.display = 'block';
                        setTimeout(()=>{
                            document.querySelectorAll('.modal-content').forEach(item => item.style.opacity = '1');
                        },50);
                    }
                    // Get the modal
                    var modal1 = document.getElementById('signup');
                    var modal2 = document.getElementById('login');
                    
                    // When the user clicks anywhere outside of the modal, close it
                    window.onclick = function(event) {
                        
                      let itemModal = document.getElementById('ItemDesc');
                      if (event.target == modal1) {
                        document.querySelectorAll('.modal-content').forEach(item => item.style.opacity = '0');
                        setTimeout(() => {
                              closeModal1();
                        }, 150);
                      }
                      if (event.target == modal2) {
                            document.querySelectorAll('.modal-content').forEach(item => item.style.opacity = '0');
                        setTimeout(() => {
                            closeModal2();
                        }, 150);
                      }
                      if (event.target == itemModal) {
                            document.querySelectorAll('.modal-content').forEach(item => item.style.opacity = '0');
                            setTimeout(() => {
                                closeModal();
                        }, 150);
                      }
                    }

                    function closeModal1() {
                        document.getElementById('signup').style.display='none';
                    }

                    function closeModal2() {
                        document.getElementById('login').style.display='none';
                    }

                    function logIn() {
                        document.getElementById('login').style.display='block';
                        document.getElementById('signup').style.display='none';
                    }

                    function SignUp() {
                        document.getElementById('signup').style.display='block';
                        document.getElementById('login').style.display='none';
                    }
                    // end login sign up model------------------
                    </script>
                <div class="ham-burger" onclick="expandSideNav();">
                    <div class="ham-burger-line"></div>
                    <div class="ham-burger-line"></div>
                    <div class="ham-burger-line"></div>
                </div>
            </div>
        </nav>
        <!-- side nav for mobile view -->
        <div class="mobile-side-nav center-vertical m-font-size
            action-call-font">
            <a href="#" class="tertiary-color">&#10007;</a>
            <a href="#" onclick="loadHomePage();" class="primary-color
                underline mobile-navbar-tab-link">home</a>
            <a href="#" onclick="loadShopsPage();" class="primary-color
                mobile-navbar-tab-link">shops</a>
            <a href="#" onclick="loadCartPage();" class="primary-color
                mobile-navbar-tab-link">cart</a>
            <a href="#" onclick="loadAboutPage();" class="primary-color
                mobile-navbar-tab-link">about</a>
        </div>
        <div class="loading" id="loadingDiv"></div>
        <div class="content-wrapper"></div>
        <footer class="center-horizontal footer">
            <div class="container center-horizontal">
                <div class="item-list center-horizontal">
                    <ul class="list-unstyled">
                        <p class="sub-header-font s-font-size">Explore</p>
                        <li class="paragraph-font xs-font-size"><a>Home</a></li>
                        <li class="paragraph-font xs-font-size"><a>Shops</a></li>
                        <li class="paragraph-font xs-font-size"><a>Cart</a></li>
                        <li class="paragraph-font xs-font-size"><a>About</a></li>
                    </ul>
                </div>
                <div class="item-list center-horizontal">
                    <ul class="list-unstyled">
                        <p class="sub-header-font s-font-size">Office</p>
                        <li class="paragraph-font xs-font-size"><a>Sitemap</a></li>
                        <li class="paragraph-font xs-font-size"><a>Location</a></li>
                    </ul>
                </div>
                <div class="item-list center-horizontal">
                    <ul class="list-unstyled">
                        <p class="sub-header-font s-font-size">Connect</p>
                        <li class="paragraph-font xs-font-size"><a>Facebook</a></li>
                        <li class="paragraph-font xs-font-size"><a>Instagram</a></li>
                        <li class="paragraph-font xs-font-size"><a>Twitter</a></li>
                        <li class="paragraph-font xs-font-size"><a>LinkedIn</a></li>
                    </ul>
                </div>
                <div class="item-list center-horizontal">
                    <ul class="list-unstyled">
                        <p class="sub-header-font s-font-size">Contact</p>
                        <li class="paragraph-font xs-font-size"><a>+60 013833</a></li>
                        <li class="paragraph-font xs-font-size"><a>+60 18039503</a></li>
                    </ul>
                </div>
            </div>
        </footer>
        <script src="util/carousel.js"></script>
        <script>

            let interval = 0;
            // load other pages after the landing page is loaded, to decrease the load time of the other pages to nearly instant.
            let loadHomePage = Function;
            let loadShopsPage = Function;
            let loadCartPage = Function;
            let loadAboutPage = Function;
            let loadLoginSignupPage = Function;

            function loadStateJs() {
                stateScript = document.createElement('script');
                stateScript.type = 'text/javascript';
                stateScript.async = true;
                stateScript.type = 'module';
                stateScript.src = 'state.js';
                document.body.appendChild(stateScript);               
            }

            // javascript for mobile side nav
            let mobileSideNav = document.querySelector('.mobile-side-nav');
            document.body.addEventListener('click', (e) => {
                if (!e.target.className.includes('mobile-side-nav')
                    && !e.target.className.includes('ham-burger')) {
                    collapseSideNav();
                }
            })
            function expandSideNav() {
                mobileSideNav.style.right = '0px';
                mobileSideNav.style.boxShadow = '0px 0px 100px rgba(0, 0, 0, 0.25)';
            }
            function collapseSideNav() {
                mobileSideNav.style.right = '-50vw';
                mobileSideNav.style.boxShadow = 'none';
            }

            function showItemDesc(){
                document.getElementById('ItemDesc').style.display = 'block';
                setTimeout(()=>{
                    document.querySelectorAll('.modal-content').forEach(item => item.style.opacity = '1');
                },50);
            }
            // Get the modal
            var itemModal = document.getElementById('ItemDesc');
            
            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
            if (event.target == itemModal) {
                document.querySelectorAll('.modal-content').forEach(item => item.style.opacity = '0');
                setTimeout(() => {
                    closeItemModal();
                }, 150);
            }
            }

            function closeItemModal() {
                document.getElementById('ItemDesc').style.display='none';
            }

        </script>
    </body>
</html>