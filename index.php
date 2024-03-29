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
        <link rel="stylesheet" href="css/cart.css">
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
                        primary-color action-call-font navbar-tab-link"
                        id="loginSignupButton">LOGIN/SIGNUP</a>
                    <p class="action-call-font primary-color s-font-size"
                        id="usernamep">Welcome,
                        <span
                            id="username"></span>
                    </p>
                    <a class="medium-button xs-font-size" id="logout"
                        onclick="logout();">log
                        out</a>
                </div>
                <div id="signup" class="modal center-vertical">
                    <span onclick="closeModal1()" class="close" title="Close
                        Modal">&times;</span>
                    <form class="modal-content" action="#">
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
                    <span class="close" title="Close Modal">&times;</span>
                    <form class="modal-content" action="#">
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
                            <p class="sub-header-font s-font-size">RM1.00
                                ***** <small>11 reviews</small></p>
                            <p class="paragraph-font xs-font-size
                                item-desc">
                                3,4-methylenedioxy-methamphetamine (MDMA) is a
                                synthetic drug that alters mood
                                and perception (awareness of surrounding objects
                                and conditions).
                                It is chemically similar to both stimulants and
                                hallucinogens,
                                producing feelings of increased energy,
                                pleasure,
                                emotional warmth, and distorted sensory and time
                                perception.
                            </p>
                            <div class="prev-next-button center-vertical">
                                <img src="assets/stock1.jpg" alt="stock1"
                                    class="item-image">
                                <div class="center-horizontal">
                                    <a href="index.html" class="medium-button
                                        secondary-highlight-button item-button">+cart</a>
                                </div>
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
                                closeItemModal();
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
                    
                    function showItemDesc() {
                        document.getElementById('ItemDesc').style.display = 'block';
                        setTimeout(() => {
                            document.querySelectorAll('.modal-content').forEach(item => item.style.opacity = '1');
                        }, 50);
                    }


                    function closeItemModal() {
                        document.getElementById('ItemDesc').style.display = 'none';
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
                        <li class="paragraph-font xs-font-size"><a
                                onclick="loadHomePage();">Home</a></li>
                        <li class="paragraph-font xs-font-size"><a
                                onclick="loadShopsPage();">Shops</a></li>
                        <li class="paragraph-font xs-font-size"><a
                                onclick="loadCartPage();">Cart</a></li>
                        <li class="paragraph-font xs-font-size"><a
                                onclick="loadAboutPage();">About</a></li>
                    </ul>
                </div>
                <div class="item-list center-horizontal">
                    <ul class="list-unstyled">
                        <p class="sub-header-font s-font-size">Office</p>
                        <li class="paragraph-font xs-font-size"><a
                                href="https://www.google.com/maps/dir/3.0639772,101.604402/sunway+university/@3.0636121,101.6015617,16z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x31cc4c8f5912644b:0x77612fa0225cad69!2m2!1d101.6036003!2d3.0669114"
                                target="_blank" class="paragraph-font">Location</a></li>
                    </ul>
                </div>
                <div class="item-list center-horizontal">
                    <ul class="list-unstyled">
                        <p class="sub-header-font s-font-size">Connect</p>
                        <li><a class="paragraph-font xs-font-size"
                                target="_blank" href="https://www.facebook.com">Facebook</a></li>
                        <li><a class="paragraph-font xs-font-size"
                                target="_blank"
                                href="https://www.instagram.com">Instagram</a></li>
                        <li><a class="paragraph-font xs-font-size"
                                target="_blank" href="https://www.twitter.com">Twitter</a></li>
                        <li><a class="paragraph-font xs-font-size"
                                target="_blank" href="https://www.linkedin.com">LinkedIn</a></li>
                    </ul>
                </div>
                <div class="item-list center-horizontal">
                    <ul class="list-unstyled">
                        <p class="sub-header-font s-font-size">Contact</p>
                        <li class="paragraph-font xs-font-size">60013833</li>
                        <li class="paragraph-font xs-font-size">6018039503</li>
                    </ul>
                </div>
            </div>
            <div class="center-horizontal">
                <p class="paragraph-font-color sub-header-font xs-font-size">&copy;2019
                    CheapDrugs, last modified 20 Nov 2019</p>
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

            // javascript for login
            let url_string = window.location.href;
            let url = new URL(url_string);
            let email = url.searchParams.get("email");
            if(email){
                let username = email.split('@')[0];
                document.getElementById('usernamep').style.display = 'block';
                document.getElementById('logout').style.display = 'block';
                document.getElementById('username').textContent = username;
                document.getElementById('loginSignupButton').style.display = 'none';
            }else{
                document.getElementById('usernamep').style.display = 'none';
                document.getElementById('logout').style.display = 'none';
                document.getElementById('loginSignupButton').style.display = 'block';
            }

            function logout(){
                window.location.href = url.origin;
            }
            
        </script>
    </body>
</html>