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
*defaultItemHeight: the default height of non-expanding item
*defaultItemWidth: the default width of non-expanding item
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
    defaultItemHeight: '300px',
    defaultItemWidth: '300px',
    targetItemHeight: '400px',
    targetItemWidth: '300px',
    scrollingResizeTransition: true,
    mobileViewSize: 500
});
show = carousel.show;

*/


const Carousel = function ({
    carousel: carousel,
    carouselItem: carouselItem,
    defaultItemHeight: defaultItemHeight,
    defaultItemWidth: defaultItemWidth,
    targetItemHeight: targetItemHeight,
    targetItemWidth: targetItemWidth,
    scrollingResizeTransition: scrollingResizeTransition,
    mobileViewSize: mobileViewSize
}) {
    mobileViewSize = typeof mobileViewSize === "undefined" ? 500 : mobileViewSize;
    this.isMobile = screen.width <= mobileViewSize;

    this.carousel = document.querySelector(carousel);
    this.carouselItems = document.querySelectorAll(carouselItem);
    this.otherItemHeight = defaultItemHeight;
    this.otherItemWidth = defaultItemWidth;

    this.targetItemHeight = typeof targetItemHeight !== "undefined" ? targetItemHeight : this.otherItemHeight;
    this.targetItemWidth = typeof targetItemWidth !== "undefined" ? targetItemWidth : this.otherItemWidth;
    this.scrollingResizeTransition = typeof scrollingResizeTransition !== "undefined" ? scrollingResizeTransition : false;


    this.index = 0;

    this.updateItemStyle = () => {
        if (!this.isMobile) {
            if (this.scrollingResizeTransition) {
                this.carouselItems.forEach(item => {
                    item.style.height = this.otherItemHeight;
                    item.style.width = this.otherItemWidth;
                })
                this.carouselItems[this.index].style.height = this.targetItemHeight;
                this.carouselItems[this.index].style.width = this.targetItemWidth;
            } else {
                this.carouselItems.forEach(item => {
                    item.style.height = this.targetItemHeight;
                    item.style.width = this.targetItemWidth;
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

    this.show = (increase) => {
        this.index = this.index + increase;

        // on most right and click right
        if (this.index == this.carouselItems.length && increase == 1) {

            // back to most left
            this.index = 0;

            // on most left and click left
        } else if (this.index < 0 && increase == -1) {

            // back to most right
            this.index = this.carouselItems.length - 1;
        }
        // clicked right, left
        try {
            if (increase != 0) {
                this.carouselItems[this.index].scrollIntoView({ block: 'center', inline: 'center' });
            }
        } catch (ex) {
            if (increase != 0) {
                this.carouselItems[this.index].scrollIntoView();
            }
        }
        this.updateItemStyle();
    }
    this.show(0);
}