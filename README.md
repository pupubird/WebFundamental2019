![logo](https://github.com/pupubird/WebFundamental2019/blob/master/assets/logo.png)

Website: [Cheapdrugs](http://webfundlanding.com.s3-website-ap-southeast-1.amazonaws.com/)

UI Component: [UI](https://webfund.netlify.com/)

## Table of Contents

- [Introduction](#introduction)
  - [What our website is about](#what-our-website-is-about)
  - [The rationale behind it](#the-rationale-behind-it)
  - [The requirements of the website](#the-requirements-of-the-website)
- [Storyboard](#storyboard)
  - [The development of this layout](#the-development-of-this-layout)
  - [Explain the layout and its justification](#wxplain-the-layout-and-its-justification)
  - [Determine the color scheme and justify how and why it was chosen](#determine-the-color-scheme-and-justify-how-and-why-it-was-chosen)
- [Workplan](#workplan)
  - [Navigation Bar](#navigation-bar)
  - [Footer](#footer)
  - [Landing Page](#landing-page)
  - [Shops Page](#shops-page)
  - [Cart Page](#cart-page)
  - [About Page](#about-page)
  - [Login / Signup Modal](#login-Signup-Modal)
  - [Item Description Modal](#item-description-modal)
- [Implementation and results](#implementation-and-results)
  - [Pre-work](#pre-work)
  - [Font](#font)
  - [Button](#button)
  - [Navbar](#navbar)
  - [Home Page](#home-page)
  - [Shops Page](#shops-page)
  - [Cart Page](#cart-page)
  - [About Page](#about-page)
  - [Modals](#modals)
- [References](#references)
- [Appendix](#appendix)

## Web Fundamentals Assignment Report

|Name | ID|
|------|------|
|Ding Nick Hong | 18039503|
|Chai Chang Cheng | 18026856|
|Keanu Tan Soon Jie | 18020552 |
|Kwan Hao Feng | 19086420 |
|Lim Xuan Lih | 18043877 |

## Introduction

### What our website is about

 - Cheapdrugs.uy[1] is a website which is used to provide
educational information regarding commonly used
recreational drugs and offers a platform for the distribution as
well as the sale of said drugs to the general public. This
website is designed in a way such that the commerce of these
substances is highly accessible to the public. Any individual
above the legal age of consent is able to use this website, and
freely purchase goods from the site.

### The rationale behind it

 - In present time, many countries globally are slowly
integrating the recreational usage of chemical substances into
society in order to improve the quality-of-life of individuals,
and this can affect them across several factors: stress levels,
overall happiness, etc. One event that showcases this change
is the usage of cannabis being legalized in countries such as
the United States, Canada, and several other countries in
Europe. This development will quickly affect Malaysia as
well as numerous other countries in Asia, as widespread use
of said substance is becoming more common. Therefore, this
necessitates preliminary knowledge regarding drugs and
other chemical substances amongst the general public to
exist, as doing so will minimize legal and health risks among
individuals. As such, cheapdrugs.uy offers a solution in the
form of an education platform, and doubles as an access point
for individuals to use recreational drugs, allowing users to
purchase various drugs.

### The requirements of the website

  - This website aims to create a purchasing platform for
users to acquire recreational drugs. As such, the general
requirements of said website includes a home / landing page
to capture the user’s attention, an “About” page to provide
information regarding the origins of the site, a shopping
interface to be browsed by users, a membership system which
allows user accounts to be created and accessed, a cart page
to track selected items to be purchased by the user, and an
interface which allows users to add said items to be paid for
at checkout.

## Storyboard

### The development of this layout

  - Many of the pages within the website follow a
    consistent layout, and as a result, typically do not
    have multiple iterations; they are of only one final
    design. One crucial element to this design is the
    early creation of the item cards for the website,
    shown in [A1]. [Card-design]
  - The shop page is an exception, requiring multiple
          drafts in early stages of development. Shown below
          is [A2], the first draft of the website layout [Shop-
          1], adding a header which contains the title of the
          website in addition to three buttons: About, Shop,
          and Contact. At this point, the logo is created.
  - Next, in [A3], the header is updated to fit the screen
          accordingly, and non-functional login / sign-up
          buttons are created at the top-right. A notice board
          is added under the header, similar to the structure of
          a blog site. This board is used to display sales and
          notices for users of the website. In the example
          shown, it is used to display discounts on new items,
          and inform users of an upcoming sale. Another
          section is added, known as the “What’s Hot?”
          section. This displays items which are currently
          being bought frequently by the majority of users.
          [Shop-2]
  - In the third iteration of the shop page [A4] [Shop-3],
          the notice board as well as the “What’s Hot?”
          section are scrapped to make way for shop items to
          be displayed. However, filtering features are added
          to allow users to better refine their search results by
          occasion, type of uses, etc., allowing the users to
          find more appropriate results satisfying their current
          needs. A small change is made within the page’s
          layout at the end, with the first item in the list
          automatically displaying their respective
          description, shown below in [A5] [Shop-final]
  - For the rest of the elements within the website, they
          have a single design and were not drafted prior to
          site creation, as they shared similar layouts.
          Excluding the Shop page, there are three other
          pages: Home, Cart, and About, with three modal
          windows: the log-in window, the sign-up window,
          and the item description screen, which allow for
          dynamic representation of elements and buttons
          within the page, improving the overall user
          experience. They are shown below [A6], [A7], [A8],
          [A9], [A10], [A11]. [Home-final] [Cart-final]
          [About-final] [Modal-login-final] [Modal-signup-
          final] [Modal-item-desc-final]

### Explain the layout and its justification

  - The layout of cheapdrugs.uy prioritizes simplicity
    and minimalism in design, creating a simple layout
    with minimal page elements to make the page as
    user-friendly as possible. In doing so, specific
    details about products or services offered are not
    shown on the site at first glance, and the user is
    required to navigate further to acquire said
    information. This is to prevent the overflow of
    visual information to the user and to avoid
    confusion. For example, details regarding new or
widely-selling drugs are intentionally excluded, and
kept separate from the landing page, as this
information is unnecessary to users navigating the
site for the first time.

  - In the layout shown in Diagram 7, items are separated
    from their respective information, preventing clutter 
    in presentation.
    Other elements are kept separate from the product
    image, to avoid unnecessary interactions by the user.
    The remaining elements (Purchase button,
    Navigation elements) are used to complete the user
    interaction, allowing individuals to select and add
    specific products and items to their shopping carts.
  - Based on the home page shown, a single image
    followed by a description is displayed in Fullscreen,
    in order to capture the user’s attention when first
    accessing the site, ranking it first in the hierarchy of
    views. In addition to this, a button leading to the
    shop page is placed under the product description,
    with a high contrast in color to encourage user
    interaction, ranked second. This is followed lastly
    by the product logo, which is displayed in a larger
    size compared to that of other pages, and this is to
    improve overall brand awareness. [home-final.png]
  - Next, on the shop page, the first item showed in the
    product list has an expanded card, and is likely to be
    first in the hierarchy, most likely to be seen by the
    user. Next, buttons on each product listing are
    colored brightly to encourage users to click, and this
    occurs frequently throughout the page. Lastly, after
    viewing the first item, the user’s attention is drawn
    to other items in the listing.
  - Furthermore, moving to the cart page, unlike the
    previous pages which utilize layouts to arrange
    content, this page uses a table instead to organize its
    data such as product prices, quantities and total price
    points in an orderly manner. This also makes a clear
    distinction between each product, allowing users to
    clearly identify each product separately. A checkout
    button is located at the bottom of the page, often
    viewed last to increase customer browsing time, and
    therefore encouraging them to purchase more
    products.
  - Moreover, the about page utilizes an inverted tree
    layout, which causes users to shift their focus from
    broad areas to narrow spaces as they read from the
    top of the page to the bottom. This layout is easier
    to be read by users, and the length of the elements
    are limited at 80% of the viewport’s width, to avoid
    overwhelming the user with information. Headers
    are also slightly enlarged to help differentiate
    between different sections of the page. Lastly, forms
    are limited at 50% of the viewport’s length, which
    makes it easier to locate as it is highly contrasting in
    terms of color and will likely be seen by the user as
    they scroll through the page.
  - Meanwhile, most of the modal windows share the
    same layout and contain fields to be filled and
    submitted by users to a web server as data to be
    stored. Said design is minimal in nature to prevent
    confusion and to make the submission of data as
    straightforward as possible. Submit buttons are

  - added to complete the interaction. These buttons
have a bright color in comparison to other elements,
encouraging user interaction. As for the product
description window, it is an exception since it acts
as a viewport for respective text and images
regarding a specific product to be displayed to the
user.

  - Lastly, on the topic of fonts, a large and inconsistent
    font is used in the text of all buttons and text
    throughout the site, represented in all the pages and
    modal windows. This is to enhance readability and
    visual aesthetic. Compared to serif fonts such as
    Times New Roman and Garamond, this font is
    attractive to the eyes and easily read by users.
    Combined with a simple color scheme, this creates
    an attractive user interface which is easy to navigate
    through.

### Determine the color scheme and justify how and why it was chosen

  - [Assets-design] Based on the initial designs to be
    used in the creation of the website in [C1], the color
    schemes used include the combination of basic
    colors to create a simple and stimulating user
    interface which is able to attract the user’s attention
    to the screen. This is highlighted in the usage of
    simple RGB and primary colors that are generally
    contrasting: red, blue, and yellow. This helps create
    an appealing design to users, while not visually
    polluting the screen with unnecessary colors.
  - Despite this, many colors are often repeated in order
    to create a sense of familiarity and ease when
    navigating through the website. This is an overall
    simple design, and is used in all pages, sharing the
    same color scheme and fonts within the site.
    Additionally, when compared to the utilization of
    colder and darker colors in page elements, brighter
    colors are more likely to be identified and read by
    the user, enhancing the overall readability of the site,
    as it correctly redirects the user’s attention to
    appropriate locations when needed (Submit button,
    Checkout button, etc.). As the usage of said color
    scheme creates a simple yet effective interface for
    users, this falls in line with CheapDrugs.uy’s vision:
    to create an accessible point for individuals to
    acquire recreational drugs.

## Workplan

For our website, we have determined some of the essential
tasks that needs to be done separately for each team member
to finish our website. The task lists are the following:

### Navigation Bar

 - This is a centralized navigation bar that is used
    consistently throughout the other pages.
It has our company logo, anchors to other pages,
    and a login/signup option for users.
A mobile version of navigation bar has to be done in
    this part to fit in smaller screens.
This navigation bar will be placed on top of each
    webpage.

### Footer

 - This is a centralized footer that is used consistently
    throughout the other pages.
It has four sub-headers: Explore, Office, Connect,
    and Contact that each contains unique anchors that
    navigates the user to different pages or
    functionalities, i.e. under the “Connect” section, it
    contains dummy links to our website’s social media.

### Landing Page

 - As any other landing page does, ours serves as a
    home page for our website. After some
    considerations, we’ve decided to make our landing
    page simple yet informative, that is, by making a
    full-screen carousel that promotes our product
    through a scrolling motion.

### Shops Page

 - This is a page where our website sells our products.
    It has dummy filtration labels that serves as a
    demonstration of how our website would work in a
    real scenario.
Else than that, it also contains the necessary
    information for the products we sell i.e. the cost,
    promotions, descriptions, and so on.
This page is responsive to smaller screens as well.
These products in the shops page can be clicked to
    reveal an Item Description Modal, the details of it
    will be explained in another sub-header.

### Cart Page

 - This page contains the selected items from the users
    in a card.
Users can view the total price of the current cart, add
    or reduce the amount of each selected product, and
    check out when they’ve finished shopping.
This page is responsive to smaller screens as well.

### About Page

-  This page contains the information regarding to our
    company, our team, and a contact us section where
    users can send us a message with their name, email
    filled in. This page is filled with text, interactive
    images, and a form.

### Login / Signup Modal

 - This is a pop-up Modal where users are prompted
    with a card while the sides are shaded with a grey
    background.
This Modal is interchangeable between a login to a
    signup modal and vice versa by clicking on an
    anchor located at the bottom of the modal.
The Signup Modal contains input fields for email,
    password, and repeat password with a Sign-Up
    button and a Cancel button.
The Login Modal contains input fields for email,
    password, a checkbox for “remember me”, and a
    Log-In button.
The user can exit the Modals easily by clicking
    anywhere outside of the Modals.

### Item Description Modal

 - This is a Modal that contains the information of the
    products we sell.
It is inclusive of the name, motto, price, reviews,
    description and an image attached to it.
This Modal also has an “add-to-cart” button as well
    as a dummy “prev” and “next” button for users to
    navigate around the other products.

##plementation and results

### Pre-work

 - For faster development, we had created a CSS
    framework with all the pre-styled classes that are
    expected to be reuse in all of the pages, such that
    developers do not have to re-declare all the CSS
    properties to keep the principle of DRY (Don’t
    Repeat Yourself).
 - Also, to achieve a single source of truth (Single
    control unit), we implemented CSS variables in the
    CSS framework, such action will allow the
    framework to have more scalability and
    maintainability since its variable-based instead of
    hardcoding.

### Font

 - In this website, we use imported font from
    https://fonts.google.com/ as the fonts selected for
    this website are not native font (built-in font in
    browser), hence we will need to import it from
    Google Fonts in our CSS file in a format as shown
    in source code [A].

 - In our website, we use “Luckiest Guy” as our header
font, “Love Ya Like A Sister” for sub header font,
“Teko” for action calling font (used in any
actionable items like button and links), “Arial” for
paragraph font.

 - All of the fonts mentioned above will be added into
    the CSS framework with class name of header-font,
    sub-header-font and paragraph-font.

### Button

 - In this website, there are three type of buttons:
    highlight button, secondary highlight button and
    normal button

 - Pre-styled buttons will be named respective class
    name of: highlight-button, secondary-highlight-
    button. If the developer demands a larger size of
    button, the developer can add a class name of “large-
    button” to the button tag. There are other sizes
    available such as medium and small button.
 - All buttons are styled with curved border, this can
    be implemented by using border-radius CSS
    property, the border radius in all of our buttons are
    set as 15px.
 - All buttons are default with our action call font
    (“Teko”), if there is a need to change the font family,
    simply add a class name that is pre-defined (e.g.
    “header-font”, “sub-header-font”) to the button tag.
 - Highlight button: this button is styled with our
    secondary color as background by using
    background-color CSS property, action call font
    (“Teko”) as the font for button by declaring font-
    family of the button and lastly a drop shadow effect,
    which can be implemented by using box-shadow
    CSS property as well.
 - Secondary highlight button: this button is styled
    with lighten tertiary color as background using
    background-color CSS property and darken tertiary
    color as font color by using color CSS property.
 - Normal button: this button uses light grey
    (#F8F8F8) and dark grey (#848484) as font color,
    this can be implemented by using background-color
    and color CSS properties.

### Navbar

 - Inside our navbar it contains 2 div for desktop
    design: one is for logo and navigation tab on the left,
    and another one is for login/ signup button on the
    right.
 - Figure [D1][Nav-bar] shows an illustration for the
    navbar, the whole navbar will be styled with a flex
    box property, so that we can justify the content with
    property of space-around, to make it such that logo
    and navigation tab (wrapped in a div) will be on the
    left, login/ signup button will be on the right
 - For our website navbar we have 2 different type for
    navbar with different property: one with a position
    of fixed and one with a position of absolute.
 - The navbar with a property of position fixed with
    have a drop shadow effect under the navbar, to
    achieve this, we styled the navbar with a box-
    shadow property
 - The “LOGIN/SIGNUP” button on the right are
    styled using our custom CSS framework with the
    class names of “medium-button” for the size and
    default styling for button, and “primary-color” for
    the font color in the button.
 - Lastly, the navbar is styled with 100vw units.
 - From the figure [D2] [Mobile-nav], in order for us
    to achieve a responsive website, we implemented a
    different design for mobile phone user. We had
    added a media query such that when the screen
    width of the user is less or equal than 700px, the
    navigation tab will set to display: none, and the
    mobile navigation button’s (Designed as three

 - horizontal lines stacked together) display will be set
to block.

 - When the user taps the navigation button
    (three blue lines on the right of the navbar),
    a side navbar will be prompted up
    This side navbar is actually styled with
    position fixed, and default right CSS
    property is set to -50vw (so that the side
    navbar is hiding outside of the viewport),
    in desktop size, it will set the display to
    none.
 - When the user clicks the mobile navigation
    button, it will call a JavaScript function to
    do a DOM manipulation, in order to have a
    clearer explanation, an illustration is shown
    in [D3] [Mobile-nav-2]
 - When the JavaScript function is called, it
    will first select the side navbar by using
    querySelector(<side navbar class name>),
    which will select the side navbar by using
    the class name that’s assigned to it, it then
    simply call the attribute as
    sideNavbar.style.right and assigned a
    string value “0vw” to it.
 - There will be an event listener assigned to
    window object as well, listening to the
    click event of the window. If the side
    navbar is expanded, and if the user tap
    outside of the side navbar, the
    collapseSideNav function will be called if
    the event object’s class name does not
    consist of the side navbar’s class name.
 - As a result, the side navbar will move out
    of the viewport (right: -50vw) and back to
    status quo.

### Home Page

- Layout

  - For the layout of the home page, on the top
    there is a pre-made navbar (mentioned in
    4.), and there is a content-wrapper div tag
    after the navbar to act as a wrapper of
    everything after the navbar. There is no any
    additional CSS layout styling in this page.
- Carousel

  - In the home page, there is a carousel (auto
    horizontally scroll feature) implemented.
  - This carousel has a width of 100vw (full
    viewport width).
  - All the carousel items are wrapped in the
    carousel wrapper, the carousel wrapper is
    an ul tag, and the carousel items are li tags.
  - The carousel wrapper has an overflow-x
    with hidden CSS property, such that it can
    only be scrolled by JavaScript, no user
    interaction is required. Additional layout
    styling is required to modify the list from

  - vertically arrange to horizontally by using
display: flex CSS property.

  - In JavaScript, there is a setInterval function
    which is a native window function that will
    keep calling the callback function passed
    into the setInterval function with the
    specified timing, in this home page, our
    interval timing is 3500 milliseconds as this
    is the optimal reading speed for user to read
    all the text on the carousel item.
  - When the callback function is called by the
    setInterval function, it will select the next
    index of the carousel (next to the current
    viewing carousel item). The index can be
    found by using querySelectorAll function,
    which will return a list of the search result.
    The callback function will increase the
    current index counter, and call the next
    item with a native window function
    scrollIntoView. This function will
    automatically scroll the carousel wrapper
    scroll left value to the item selected into
    viewport.
  - When the index counter reached the end of
    the carousel list items, it will restart to 0
    and call the first item’s scollIntoView
    function, which then return to the status
    quo.
  - As a result, user is able to experience an
    carousel animation which does not
    required user interaction.

### Shops Page

- Layout

  - There is a navbar with position fixed, such
    that when user scroll the navbar will be
    stick on the top.
  - The figure [F1] [Shops-layout] will show
    an illustration of the container (red and
    black boxed). In the content wrapper (the
    div tag comes after the navbar, to wrap all
    the content of the page) there is a shops
    container, which is set to 80vw for negative
    space, and 100% height (excluded footer),
    default CSS layout property is sufficient
    enough for the inner layout for the shops
    container.
  - For the header, it is added with a class
    name of header-font (A pre-made class
    based CSS).
  - For the filter tab, it is an ul tag with li tags
    and styled using display: flex to achieve
    horizontal arrangement for ul tag.
  - For the shops items, they are wrapped by a
    container (black box), with a layout of grid
    (CSS layout property), the reason for using
    grid is that all the shop items can be insert
    based on grid (3x3) and it will be used for
    mobile version (2x2) too.
  - For the shops’ items, there are 2 different
    style of item, one with image, price tag,

  - description and social media share button,
another has only image and price tag.

  - For expanded shops item (with
    description), it is styled using flex, and
    justify content to center. The box shadow
    of this item is using a class called “card” to
    apply box shadow and border radius to the
    border. The buttons group are wrapped by
    a div tag for in lining together and stay
    horizontally together.
  - For collapsed shops item (without
    description), it is only styled by a class
    name of “card” for box shadow and border
    radius.
  - Both of them are added with tags to tell
    user this item status (new/ discount), it is
    styled with position absolute, and using
    transform, translateX and translateY
    properties to adjust the tag to go outside of
    the shops item. The shops item’s (parent
    element for the tag) position is also set to
    relative, in order for the tag to use translate
    and transform CSS properties.
- Show more button
  - We use generator method for pagination,
when the user click the show more button,
it is going to call a JavaScript function:
showmore, this function will use
querySelector function to search for the
collapsed item div tag, and using attribute
innerHTML to append the new card
fetched from database to the div tag.

### Cart Page

- Layout

  - It is a table with item image, price, quantity
    and total as row.
  - The table has a margin of auto, to get the
    computed margin for the table to be center
    of the page
  - The border radius and box shadow are
    styled using the class name “card” that is
    pre-made in the custom CSS framework for
    styling border radius and box shadow
  - Each column of the table is assigned with a
    width of 25% of the table, by using width
    CSS property
  - In the checkout description (after the
    table), it is assigned with flex layout, and
    flex-end in the justify-content, for aligning
    it to the end of the div tag, as a result, all
    the elements in the checkout description
    are aligned to the end.

### About Page

- Layout

  - It is a large container that consists of 3
    sections: About Us, Team, and Contact Us
    form.
  - The texts, images and forms are styled
    either with our prefixed center-horizontal
    class, or with a 15% padding to both left
    and right to centralize the contents to be
easier to read and establish the hierarchy.

  - The Team section images are intentionally
    styled with padding to make it seem like it
    is popping out from the box. When you
    hover over it, the image changes to another
    image with larger percentage of width to
    increase the interactivity with the users.
  - Else than that, the Team section is assigned
    with a prefixed m-center-vertical CSS class
    that only allow a one-by-one top-down
    alignment in mobile view, this way we
    wouldn’t have to shrink or fit all the images
    in smaller sizes when it’s in mobile view.

### Modals

- Layout

  - All of the modals in our website shares the
    basic CSS properties.
  - The Modals is applied with a full-screen
    grey background to act as a shade to cover
    all the contents displayed on the back and
    thus creating a focus on the Modal.
  - The inner layout of the Modal form
    consists of a header, sub-header, input
    fields, buttons, and anchors.
  - All of the input fields and buttons have a
    width of 100% to fill up the horizontal
    spaces in the form.
  - The form is fully functional with php that
    registers or authenticates our user login
    upon form submission.

### References

[1] “CheapDrugs.uy”,http://webfundlanding.com.s3-website-ap-
southeast-1.amazonaws.com/
[2] “ _Common Types of Drugs & Why They’re Abused_ ,” Aug. 15, 2018.
Accesed on: Nov. 17, 2 019. [Online]. Available:
https://www.therecoveryvillage.com/drug-addiction/types-of-
drugs/#gref
