let lastKnownScrollPosition = 0;
let ticking = false;

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

gsap.to(".space_one", {
    scrollTrigger: ".top_section", // start the animation when ".box" enters the viewport (once)
    y: -50,
    start: "90% bottom",
    duration: 5
});