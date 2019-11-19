function aboutPage() {
    clearInterval(interval);
    title.innerText = 'CheapDrugs | About';
    themeColor.content = '#1E2A78';
    navbarTabLinks.forEach(item => { item.classList.remove('underline'); });
    navbarTabLinks[3].classList.add('underline');

    mobileNavBarTabLinks.forEach(item => { item.classList.remove('underline') });
    mobileNavBarTabLinks[3].classList.add('underline');

    navbar.classList.add('navbar-shadow');
    state.innerHTML = `
    <div>
    <div class="center-horizontal about-layout">
        <div>
            <div class="center-horizontal">
                <img src="assets/aboutUsLogo.svg" alt="" class="about-logo">
            </div>
            <div class="center-horizontal about-header header-font m-font-size">
                - About Us -
            </div>
                <p class="center-horizontal about-paragraph sub-header-font s-font-size">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Aenean vitae malesuada quam. Nunc vitae ornare felis. 
                    Morbi eget enim ligula. Cras placerat felis velit, 
                    sit amet pretium ante imperdiet ut. 
                    Nullam cursus tempus tincidunt. 
                    In tristique venenatis urna sit amet placerat. 
                    Maecenas sollicitudin ultricies arcu id dignissim. 
                    Morbi eleifend sem volutpat nibh tempor posuere.

                    <br>
                    <br>

                    In tempus, dui malesuada faucibus dapibus, 
                    urna quam lobortis lorem, 
                    at ultricies purus felis mollis justo. 
                    Donec sed risus a felis aliquet posuere. 
                    Pellentesque ut imperdiet eros. 
                    Fusce tincidunt purus sollicitudin tempor euismod. 
                    Maecenas turpis enim, hendrerit elementum vulputate et, 
                    gravida rhoncus nulla. Nunc et erat bibendum, 
                    accumsan justo a, semper nibh. Donec felis leo, 
                    aliquet sit amet pulvinar in, molestie ac ante. 
                    Sed ut sodales purus, sit amet faucibus dui. 
                    Nullam nisi felis, laoreet vel feugiat ut, 
                    dictum et nisl. Aliquam fringilla pulvinar interdum. 
                    Fusce suscipit fringilla mi vel finibus. 
                    Cras sollicitudin tincidunt imperdiet. 
                    Nunc ex dolor, sodales in imperdiet sit amet, 
                    pellentesque non tortor. 
                    In hac habitasse platea dictumst.
                </p>
            <div class="center-horizontal team-header header-font m-font-size">
                - Meet The Team -
            </div>
                <div class="center-horizontal about-team sub-header-font xs-font-size m-center-vertical">
                    <a class="center-horizontal team-card">
                        <img src="assets/othello-angry.svg" alt="avatar" class="activate">
                        <img src="assets/othello.svg" alt="avatar" class="center-horizontal activator" style="height: inherit;">
                        <p class="about-profile">Ding Nick Hong<br>Developer</p>
                    </a>
                    <a class="center-horizontal team-card">
                        <img src="assets/othello-angry.svg" alt="avatar" class="activate">
                        <img src="assets/othello.svg" alt="avatar" class="center-horizontal activator" style="height: inherit;">
                        <p class="about-profile">Ding Nick Hong<br>Developer</p>
                    </a>
                    <a class="center-horizontal team-card">
                        <img src="assets/othello-angry.svg" alt="avatar" class="activate">
                        <img src="assets/othello.svg" alt="avatar" class="center-horizontal activator" style="height: inherit;">
                        <p class="about-profile">Ding Nick Hong<br>Developer</p>
                    </a>
                    <a class="center-horizontal team-card">
                        <img src="assets/othello-angry.svg" alt="avatar" class="activate">
                        <img src="assets/othello.svg" alt="avatar" class="center-horizontal activator" style="height: inherit;">
                        <p class="about-profile">Ding Nick Hong<br>Developer</p>
                    </a>
                    <a class="center-horizontal team-card">
                        <img src="assets/othello-angry.svg" alt="avatar" class="activate">
                        <img src="assets/othello.svg" alt="avatar" class="center-horizontal activator" style="height: inherit;">                            
                        <p class="about-profile">Ding Nick Hong<br>Developer</p>
                    </a>
                </div>
                <p class="center-horizontal team-paragraph sub-header-font s-font-size">
                    Here at cheapdrugs.uy we aim to deliver the best quality drugs to
                    our loyal customers throughout the globe.
                </p>
                <div class="center-horizontal team-header header-font m-font-size">
                    - Contact Us -
                </div>
                    <div class="center-horizontal form-message">
                        <form action="/" class="decor card">
                            <div class="form-inner center-horizontal">
                            <div class="paragraph-font contact-header s-font-size">Drop a message</div>
                              <input class="paragraph-font" type="text" placeholder="Username">
                              <input class="paragraph-font" type="email" placeholder="Email">
                              <textarea class="paragraph-font" placeholder="Message..." rows="5"></textarea>
                              <button type="submit" href="/">Submit</button>
                            </div>
                          </form>
                    </div>
                </div>
            </div>
        </div>
    `
}