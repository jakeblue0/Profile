function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

$('.box').on('click', function () {
    fullpage_api.moveSectionDown();
});

new fullpage('#fullPage', {
    autoScrolling: true,
    navigation: true,
    //anchors: ['profile', 'experience', 'technology', 'education', 'portfolio'],
    navigationTooltips: ['Profile', 'Experience', 'Technology', 'Education', 'Portfolio'],
    showActiveTooltip: true,
    scrollingSpeed: 1500,
    controlArrows: true,
    slidesNavigation: true,
    onLeave: function (origin, destination, direction) {
        if (!destination.isLast)
            $('.box').removeClass('hidden');
        else {
            $('.box').addClass('hidden');
        }

        $('.fp-section .fade>*').css('opacity', '0');
        setTimeout(function () {
            $('.fp-section.active .fade *').css('opacity', '1');
        }, 200);
    }
})