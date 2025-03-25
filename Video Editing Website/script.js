const sliderTabs = document.querySelectorAll(".slider-tab");
const sliderIndicator = document.querySelector(".slider-indicator");

const updateIndicator = (tab, index) =>{
    sliderIndicator.style.transform = `translateX(${tab.offsetLeft - 700}px)`;
  sliderIndicator.style.width = `${tab.getBoundingClientRect().width}px`;
};

const swiper = new Swiper('.slider-container', {
    effect: "coverflow",
    speed: 1000,
    autoplay: {delay: 10000},
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





document.addEventListener("scroll", function () {
    let section1Height = window.innerHeight; // 100vh height
    let scrollPosition = window.scrollY; // Current scroll position
    let section2 = document.querySelector(".section2");

    if (scrollPosition >= section1Height) {
        section2.classList.add("animate");
    }
});

function copyPhoneNumber() {
    const phoneNumber = document.getElementById('phone-number').innerText;
    const tempInput = document.createElement('input');
    
    document.body.appendChild(tempInput);
    tempInput.value = phoneNumber;
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    
    // Show confirmation
    const copyBtn = document.querySelector('.copy-btn');
    copyBtn.innerHTML = 'Copied!';
    copyBtn.style.background = '#0F9D58';
    
    // Reset after 2 seconds
    setTimeout(() => {
        copyBtn.innerHTML = 'Copy';
        copyBtn.style.background = '#4285F4';
    }, 2000);
}
