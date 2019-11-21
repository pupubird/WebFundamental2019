let navbar = document.querySelector('.navbar');
let footer = document.querySelector('.footer');
let state = document.querySelector('.content-wrapper');
let navbarTabLinks = document.querySelectorAll('.navbar-tab-link');
let mobileNavBarTabLinks = document.querySelectorAll('.mobile-navbar-tab-link');

let title = document.getElementById('title');
let themeColor = document.getElementById('themeColor');

export function aboutPage() {
    clearInterval(interval);
    localStorage.setItem('currentPage', 'about');

    navbar.style.position = 'absolute';

    title.innerText = 'CheapDrugs | About';
    themeColor.content = '#1E2A78';
    navbarTabLinks.forEach(item => { item.classList.remove('underline'); });
    navbarTabLinks.forEach(item => { item.classList.remove('sub-header-font-color'); });
    footer.style.display = 'block';

    navbarTabLinks[3].classList.add('underline');
    navbarTabLinks[3].classList.add('sub-header-font-color');

    mobileNavBarTabLinks.forEach(item => { item.classList.remove('underline') });
    mobileNavBarTabLinks[3].classList.add('underline');

    navbar.classList.remove('navbar-shadow');
    state.innerHTML = `
                    <div>
            <div class="center-horizontal about-layout">
                <div>
                    <div class="center-horizontal">
                        <img src="assets/aboutUsLogo.svg" alt=""
                            class="about-logo">
                    </div>
                    <div class="center-horizontal about-header header-font
                        m-font-size">
                        - About Us -
                    </div>
                    <p class="center-horizontal about-paragraph sub-header-font
                        xs-font-size">
                        CheapDrugs.uy is an e-commerce website that primarily sells drug to
                        customers throughout the world in a legal manner. Founded in the 1980's,
                        our mission hadn't changed ever since, this is to maintain the trust
                        between us and our beloved customers.

                        <br>
                        <br>

                        Else than that, we are always eager to raise awareness regarding to the
                        various drugs that exist in our society, so that people know the differences
                        between every drug as well as their uses, side-effects, pros and cons of
                        drugs. The drug can also serve as an antidepressant for a very short amount of time.
                        Stimulants often come in pill form but are also consumed via snorting or even as food and drink. 
                        For example, 
                        caffeine is found in many beverages, and cocaine is a powder that is snorted.
                        This way, we believe that drugs will one day be legalised in all countries
                        for people to use drug openly while thresholding the abuse for every person.
                    </p>
                    <div class="center-horizontal team-header header-font
                        m-font-size">
                        - Meet The Team -
                    </div>
                    <div class="center-horizontal about-team sub-header-font
                        xs-font-size m-center-vertical">
                        <a class="center-horizontal team-card">
                            <img src="assets/othello-angry.svg" alt="avatar"
                                class="activate">
                            <img src="assets/othello.svg" alt="avatar"
                                class="center-horizontal activator"
                                style="height: inherit;">
                            <p class="about-profile">Ding Nick Hong<br>Developer</p>
                        </a>
                        <a class="center-horizontal team-card">
                            <img src="assets/othello-angry.svg" alt="avatar"
                                class="activate">
                            <img src="assets/othello.svg" alt="avatar"
                                class="center-horizontal activator"
                                style="height: inherit;">
                            <p class="about-profile">Chai Chang Cheng<br>Developer</p>
                        </a>
                        <a class="center-horizontal team-card">
                            <img src="assets/othello-angry.svg" alt="avatar"
                                class="activate">
                            <img src="assets/othello.svg" alt="avatar"
                                class="center-horizontal activator"
                                style="height: inherit;">
                            <p class="about-profile">Lim Xuan Lih<br>Developer</p>
                        </a>
                        <a class="center-horizontal team-card">
                            <img src="assets/othello-angry.svg" alt="avatar"
                                class="activate">
                            <img src="assets/othello.svg" alt="avatar"
                                class="center-horizontal activator"
                                style="height: inherit;">
                            <p class="about-profile">Keanu Tan<br>Developer</p>
                        </a>
                        <a class="center-horizontal team-card">
                            <img src="assets/othello-angry.svg" alt="avatar"
                                class="activate">
                            <img src="assets/othello.svg" alt="avatar"
                                class="center-horizontal activator"
                                style="height: inherit;">
                            <p class="about-profile">Jaydon Tan<br>Developer</p>
                        </a>
                    </div>
                    <p class="center-horizontal team-paragraph sub-header-font
                        s-font-size">
                        Here at cheapdrugs.uy we aim to deliver the best quality
                        drugs to
                        our loyal customers throughout the globe.
                    </p>
                    <div class="center-horizontal team-header header-font
                        m-font-size">
                        - Contact Us -
                    </div>
                    <div class="center-horizontal form-message">
                        <form action="/" class="decor card">
                            <div class="form-inner center-horizontal">
                                <div class="sub-header-font contact-header
                                    s-font-size">Drop a message</div>
                                <input class="paragraph-font" type="text"
                                    placeholder="Username">
                                <input class="paragraph-font" type="email"
                                    placeholder="Email">
                                <textarea class="paragraph-font"
                                    placeholder="Message..." rows="5"></textarea>
                                <button type="submit" href="/" class="action-call-font s-font-size secondary-color">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    `;

    document.querySelector('.navbar').style.display = "flex";
    document.querySelector('.navbar-padding').style.minHeight = navbar.offsetHeight + 'px';

}