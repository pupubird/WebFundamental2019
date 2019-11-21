<?php include('register.php'); ?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta id="themeColor" name="theme-color" content="#1E2A78">
        <title id="title">CheapDrugs | Home</title>
        <link rel="stylesheet" href="WebFundamental2019/css/indexPage.css">
        <link rel="stylesheet" href="WebFundamental2019/util/UIComponent.css">
        <link rel="stylesheet" href="WebFundamental2019/css/aboutPage.css">
        <link rel="shortcut icon" href="WebFundamental2019/assets/favicon.ico" type="image/x-icon">
        <link rel="stylesheet" href="WebFundamental2019/css/navbar.css">
        <link rel="stylesheet" href="WebFundamental2019/css/modal.css">
        <link rel="stylesheet" href="WebFundamental2019/css/footer.css">
    </head>
    <body onload="loadStateJs();">
        <nav class="navbar">
            <div class="navbar-left">
                <a href="#" onclick="homePage();">
                    <img class="logo" src="WebFundamental2019/assets/logo.png" alt="logo">
                </a>
                <ul class="navbar-tab">
                    <li><a href="#" onclick="homePage();"
                            class="action-call-font
                            sub-header-font-color
                            s-font-size underline navbar-tab-link">home</a></li>
                    <li><a href="#" onclick="shopsPage();"
                            class="action-call-font
                            paragraph-font-color
                            s-font-size navbar-tab-link">shops</a></li>
                    <li><a href="#" onclick="cartPage();"
                            class="action-call-font
                            paragraph-font-color
                            s-font-size navbar-tab-link">cart</a></li>
                    <li><a href="#" onclick="aboutPage();"
                            class="action-call-font
                            paragraph-font-color
                            s-font-size navbar-tab-link">about</a></li>
                </ul>
            </div>
            <div class="center-horizontal">
                <div class="navbar-right">
                    <a href="#" onclick="document.getElementById('id01').style.display='block'"
                        class="medium-button
                        primary-color action-call-font">LOGIN/SIGNUP</a>
                </div>
                <div id="id01" class="modal center-vertical">
                    <span onclick="closeModal1()" class="close" title="Close Modal">&times;</span>
                    <form class="modal-content" method="post" action="index.php">
                      <div class="container">
                        <p class="header-font m-font-size">Sign Up</p>
                        <p class="sub-header-font xs-font-size">Please fill in this form to create an account.</p>
                        <?php include('error.php');?>
                        <hr>
                        <label class="sub-header-font s-font-size" for="email"><b>Email</b></label>
                        <input type="text" placeholder="Enter Email" name="email" required>
                  
                        <label class="sub-header-font s-font-size" for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required>
                  
                        <label class="sub-header-font s-font-size" for="psw-repeat"><b>Repeat Password</b></label>
                        <input type="password" placeholder="Repeat Password" name="psw-repeat" required>
                        
                        <p class="sub-header-font xs-font-size">By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>
                  
                        <div class="clearfix">
                          <button type="button" onclick="closeModal1()" class="cancelbtn">Cancel</button>
                          <button type="submit" class="signupbtn" name="signup">Sign Up</button>
                        </div>
                        <a onclick="logIn()" class="loginbtn paragraph-font center-horizontal">Already have an account?</a>
                    </div>
                    </form>
                  </div>
                  <div id="id02" class="modal">
                    <span onclick="" class="close" title="Close Modal">&times;</span>
                    <form class="modal-content" method="post" action="index.php">
                      <div class="container">
                        <p class="header-font m-font-size">Log In</p>
                        <?php include('error.php');?>
                        <hr>
                        <label class="sub-header-font s-font-size" for="email"><b>Email</b></label>
                        <input type="text" placeholder="Enter Email" name="email" required>
                  
                        <label class="sub-header-font s-font-size" for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required>
                  
                        <label class="sub-header-font xs-font-size">
                          <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me
                        </label>
                  
                        <div class="clearfix">
                          <button type="submit" name="login">Log In</button>
                        </div>
                        <a onclick="SignUp()" class="loginbtn paragraph-font center-horizontal">Don't have an account? Register now.</a>
                    </div>
                    </form>
                  </div>
                  <script>
                    // Get the modal
                    var modal1 = document.getElementById('id01');
                    var modal2 = document.getElementById('id02');
                    
                    // When the user clicks anywhere outside of the modal, close it
                    window.onclick = function(event) {
                      if (event.target == modal1) {
                        closeModal1();
                      }
                      if (event.target == modal2) {
                        closeModal2();
                      }
                    }

                    function closeModal1() {
                        document.getElementById('id01').style.display='none';
                    }

                    function closeModal2() {
                        document.getElementById('id02').style.display='none';
                    }

                    function logIn() {
                        document.getElementById('id02').style.display='block';
                        document.getElementById('id01').style.display='none';
                    }

                    function SignUp() {
                        document.getElementById('id01').style.display='block';
                        document.getElementById('id02').style.display='none';
                    }

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
            <a href="#" onclick="homePage();" class="primary-color
                underline mobile-navbar-tab-link">home</a>
            <a href="#" onclick="shopsPage();" class="primary-color
                mobile-navbar-tab-link">shops</a>
            <a href="#" onclick="cartPage();" class="primary-color
                mobile-navbar-tab-link">cart</a>
            <a href="#" onclick="aboutPage();" class="primary-color
                mobile-navbar-tab-link">about</a>
        </div>

        <div class="content-wrapper">
            <div class="carousel">
                <div class="full-screen center-horizontal m-center-vertical
                    stock-card carousel-item">
                    <img src="WebFundamental2019/assets/stock1.jpg" alt="stock1"
                        class="stock-image">
                    <div class="stock-card-description">
                        <p class="m-font-size sub-header-font-color
                            sub-header-font">Your
                            party
                            choice.</p>
                        <p class="xs-font-size paragraph-font-color
                            paragraph-font">Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit.
                            Etiam
                            id
                            blandit lorem, non lobortis elit.</p>
                        <button class="medium-button highlight-button">Check out
                            now</button>
                    </div>
                </div>
                <div class="full-screen center-horizontal m-center-vertical
                    stock-card carousel-item">
                    <img src="WebFundamental2019/assets/stock2.jpg" alt="stock2"
                        class="stock-image">
                    <div class="stock-card-description">
                        <p class="m-font-size sub-header-font-color
                            sub-header-font">Your
                            personal
                            choice.</p>
                        <p class="xs-font-size paragraph-font-color
                            paragraph-font">Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit.
                            Etiam
                            id
                            blandit lorem, non lobortis elit.</p>
                        <button class="medium-button highlight-button">Check out
                            now</button>
                    </div>
                </div>
                <div class="full-screen center-horizontal m-center-vertical
                    stock-card carousel-item">
                    <img src="WebFundamental2019/assets/stock3.jpg" alt="stock3"
                        class="stock-image">
                    <div class="stock-card-description">
                        <p class="m-font-size sub-header-font-color
                            sub-header-font">Your
                            healthcare
                            choice.</p>
                        <p class="xs-font-size paragraph-font-color
                            paragraph-font">Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit.
                            Etiam
                            id
                            blandit lorem, non lobortis elit.</p>
                        <button class="medium-button highlight-button">Check out
                            now</button>
                    </div>
                </div>
            </div>
        </div>
        <script src="WebFundamental2019/util/carousel.js"></script>
        <script>
            // javascript for carousel
            carousel = new Carousel({
                carousel: '.carousel',
                carouselItem: '.carousel-item',
                defaultItemHeight: '100vh',
                defaultItemWidth: '85vw',
                scrollingResizeTransition: false,
                mobileViewSize: 500
            });
            let interval = setInterval(() => {
                carousel.show(1);
            }, 3000);
            // load other pages after the landing page is loaded, to decrease the load time of the other pages to nearly instant.
            function loadStateJs() {
                stateScript = document.createElement('script');
                stateScript.type = 'text/javascript';
                stateScript.async = true;
                stateScript.src = 'WebFundamental2019/state.js';
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
        </script>
    </body>
    <footer class="center-horizontal m-center-vertical">
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
</html>