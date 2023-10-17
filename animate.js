let lastKnownScrollPosition = 0;
let ticking = false;
var si = 700;
var tl = gsap.timeline({ repeat: -1, repeatDelay: 2, yoyo: true });

function doSomething(scrollPos) {
    // Do something with the scroll position
    // console.log(scrollPos, ticking, lastKnownScrollPosition)
}

document.addEventListener("scroll", (event) => {
    lastKnownScrollPosition = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(() => {
            doSomething(lastKnownScrollPosition);
            ticking = false;
        });

        ticking = true;
    }
    var img_unique = (document.querySelector('.space_one').getBoundingClientRect());
    console.log(img_unique.bottom + ' img')
    var window_size = window.screen.height
    console.log(window_size + ' window')
});
document.addEventListener('resize', () => {
    var size = window.screen.width;
    if (size > 900) {
        si = 400
        tl.restart();
    } else {
        si = 200
        tl.restart();
    }
})

tl.to(".space_one", {
    y: -si,
    duration: 5,
});