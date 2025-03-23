const sliderTabs = document.querySelectorAll(".slider-tab");
const sliderIndicator = document.querySelector(".slider-indicator");

const updateIndicator = (tab, index) =>{
    sliderIndicator.style.transform = `translateX(${tab.offsetLeft - 703}px)`;
  sliderIndicator.style.width = `${tab.getBoundingClientRect().width}px`;
};

const swiper = new Swiper('.slider-container', {
    effect: "coverflow",
    speed: 1000,
    //autoplay: {delay: 400}
    on: {
        slideChange: () => {
            const currentTabIndex = [...sliderTabs].indexOf(sliderTabs[swiper.activeIndex])
            updateIndicator(sliderTabs[swiper.activeIndex], currentTabIndex);
        }
    }
});

sliderTabs.forEach((sliderTabs, index) => {
    sliderTabs.addEventListener("click", () => {
        swiper.slideTo(index);
        updateIndicator(sliderTabs, index);
    });
});

updateIndicator(sliderTabs[0], 0);
window.addEventListener("resize", () => updateIndicator(sliderTabs[swiper.activeIndex], 0));


window.addEventListener("scroll", function () {
    let section1 = document.querySelector(".slider-wrapper"); // Change selector if needed
    let scrollPosition = window.scrollY;
    let fadeStart = 50; // Adjust: Scroll position where fading starts
    let fadeEnd = 400;  // Adjust: Scroll position where opacity reaches 0

    let opacity = 1 - (scrollPosition - fadeStart) / (fadeEnd - fadeStart);
    opacity = Math.max(opacity, 0); // Ensure opacity never goes below 0

    section1.style.opacity = opacity;
});
window.addEventListener("scroll", function () {
    let sectionText = document.querySelector(".slider-pagination"); // "Section I & II" text
    let sectionBorder = document.querySelector(".section-border"); // The border div
    let section2 = document.querySelector("#section2"); // Section 2
    let scrollPosition = window.scrollY;
    
    // Fade Out Section I & II + Border
    let fadeOutStart = 50;  
    let fadeOutEnd = 400;   
    let opacityOut = 1 - (scrollPosition - fadeOutStart) / (fadeOutEnd - fadeOutStart);
    opacityOut = Math.max(opacityOut, 0);

    sectionText.style.opacity = opacityOut;
    sectionBorder.style.opacity = opacityOut;

    // Fade In Section 2
    let fadeInStart = 300;  
    let fadeInEnd = 700;    
    let opacityIn = (scrollPosition - fadeInStart) / (fadeInEnd - fadeInStart);
    opacityIn = Math.min(Math.max(opacityIn, 0), 1);

    section2.style.opacity = opacityIn;

    // Fade Out Section 2 (Later in Scroll)
    let fadeOutStart2 = 1200;  
    let fadeOutEnd2 = 1600;    
    let opacityOut2 = 1 - (scrollPosition - fadeOutStart2) / (fadeOutEnd2 - fadeOutStart2);
    opacityOut2 = Math.max(opacityOut2, 0);

    section2.style.opacity = Math.min(opacityIn, opacityOut2);
});



