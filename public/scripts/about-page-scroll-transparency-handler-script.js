const pageHeaderBackgroundDiv = document.getElementById("page-header-background-div");
const pageHeader = document.getElementById("page-header");
const titleCard = document.getElementById("title-card");
window.addEventListener(
    'scroll',
    () => {
        // const scrollFraction = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
        const scrolledYOffset = window.scrollY;
        const titleCardHeight = titleCard.offsetHeight;

        // this is a linear equation that maps:
        //    scrolledOffset = titleCardHeight/2    --> titleOpacity = 1
        //    scrolledOffset = titleCardHeight-100  --> titleOpacity = 0
        const titleOpacity = (scrolledYOffset - titleCardHeight + 100) / (100 - titleCardHeight / 2);
        const normalizedTitleOpacity = Math.min(1, Math.max(0, titleOpacity));
        pageHeader.style.opacity = 1 - normalizedTitleOpacity;
        pageHeaderBackgroundDiv.style.opacity = (1 - normalizedTitleOpacity) / 2;
        titleCard.style.opacity = normalizedTitleOpacity;
    },
    false,
);