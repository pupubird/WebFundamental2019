/*
* = optional

template for the html
=>
<ul> = carousel container
<li> = carousel list / item
*<div> = the actual content

instanciate a new Carousel class with the parameter
=>
carousel: the container of the whole list
carouselItem: the item inside the container, it can be li or li div etc
*targetItemHeight: the height when the item is expanding, default set to default height
*targetItemWidth: the width when the item is expanding, default set to default width
*scollingResizeTransition*: boolean, when true:item is expandable, false:all default
*mobileViewSize: default set to 500

carousel.show() should be attached to the button,
right: show(1)
left: show(-1)

-----sample configuration-----
let carousel = new Carousel({
    carousel: 'ul',
    carouselItem: 'ul li .card',
    targetItemHeight: '50vh',
    targetItemWidth: '30vw',
    scrollingResizeTransition: true,
    mobileViewSize: 500
});
show = carousel.show;

*/


const Carousel = function ({
    carousel: carousel,
    carouselItem: carouselItem,
    targetItemHeight: targetItemHeight,
    targetItemWidth: targetItemWidth,
    scrollingResizeTransition: scrollingResizeTransition,
    mobileViewSize: mobileViewSize
}) {
    mobileViewSize = typeof mobileViewSize === "undefined" ? 500 : mobileViewSize;
    this.isMobile = screen.width <= mobileViewSize;

    this.carousel = document.querySelector(carousel);
    this.carouselItems = document.querySelectorAll(carouselItem);

    this.otherItemHeight = this.carouselItems[0].offsetHeight + "px";
    this.otherItemWidth = this.carouselItems[0].offsetWidth + "px";

    this.targetItemHeight = typeof targetItemHeight !== "undefined" ? targetItemHeight : this.otherItemHeight;
    this.targetItemWidth = typeof targetItemWidth !== "undefined" ? targetItemWidth : this.otherItemWidth;
    this.scrollingResizeTransition = typeof scrollingResizeTransition !== "undefined" ? scrollingResizeTransition : false;

    this.index = 0;

    this.updateItemStyle = (scrollOn) => {
        if (!this.isMobile) {
            if (this.scrollingResizeTransition) {
                // reset every item size
                this.carouselItems.forEach(item => {
                    item.style.height = this.otherItemHeight;
                    item.style.width = this.otherItemWidth;
                })
                let currentScrollIndex = Math.round(this.carousel.scrollLeft / this.carouselItems[0].offsetWidth);
                switch (scrollOn) {
                    // set the target item size
                    case "scroll":
                        if (this.index != currentScrollIndex) {
                            this.carouselItems[this.index].style.height = this.targetItemHeight;
                            this.carouselItems[this.index].style.width = this.targetItemWidth;
                        } else {
                            this.carouselItems[currentScrollIndex].style.height = this.targetItemHeight;
                            this.carouselItems[currentScrollIndex].style.width = this.targetItemWidth;
                        }
                        break;
                    case "click":
                        this.carouselItems[this.index].style.height = this.targetItemHeight;
                        this.carouselItems[this.index].style.width = this.targetItemWidth;
                        break;
                }
            } else {
                // if not rezise, set to default
                this.carouselItems.forEach(item => {
                    item.style.height = this.otherItemHeight;
                    item.style.width = this.otherItemWidth;
                })
            }
        } else {
            // if its in mobile view, no animation should be shown
            this.carouselItems.forEach(item => {
                item.style.height = this.otherItemHeight;
                item.style.width = this.otherItemWidth;
            })
        }

    }

    this.carousel.addEventListener("scroll", () => {
        this.updateItemStyle("scroll");
    });

    this.show = (increase) => {
        let width = this.carouselItems[0].offsetWidth;
        this.index = this.index + increase;

        // on most right and click right
        if (this.index == this.carouselItems.length && increase == 1) {

            // back to most left
            this.index = 0;
            this.carousel.scrollTo(-this.carousel.scrollLeft, 0);

            // on most left and click left
        } else if (this.index < 0 && increase == -1) {

            // back to most right
            this.index = this.carouselItems.length - 1;
            this.carousel.scrollBy(width * this.carouselItems.length, 0);

        } else {
            // clicked right, left
            try {
                this.carouselItems[this.index].scrollIntoView({ block: 'center', inline: 'center' });
            } catch (ex) {
                this.carouselItems[this.index].scrollIntoView();
            }
        }

        this.updateItemStyle("click");
    }
    this.show(0);
}