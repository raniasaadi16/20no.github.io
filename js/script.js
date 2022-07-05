let navLinks = document.querySelectorAll(".scroll-link li a");
navLinks.forEach((link) => {
    link.addEventListener("click",(e) => {
        e.preventDefault();
        let targetId = link.getAttribute("data-link");
        window.scrollTo(0,
            document.getElementById(targetId).offsetTop - 100
        );
        document.querySelector('#navbarSupportedContent').classList.remove("show");

    })
})

//scroll to tutorial :
let tutorialLinks = document.querySelector("#tutorialLink");
let targetId = tutorialLinks.getAttribute("data-link");
let video = document.querySelector("#tutorial");

tutorialLinks.addEventListener("click",(e) => {
    e.preventDefault()
    window.scrollTo(0,
        document.getElementById('tutorial').getBoundingClientRect().y - 130
    );
    video.play();
})

// auto play videos
jQuery(document).ready(function(){ 

    var media = jQuery('video').not("[autoplay='autoplay']");
    var tolerancePixel = 40;

    function checkMedia(){
        var scrollTop = jQuery(window).scrollTop() + tolerancePixel;
        var scrollBottom = jQuery(window).scrollTop() + jQuery(window).height() - tolerancePixel;

        media.each(function(index, el) {
            var yTopMedia = jQuery(this).offset().top;
            var yBottomMedia = jQuery(this).height() + yTopMedia;

            if(scrollTop < yBottomMedia && scrollBottom > yTopMedia){ 
                jQuery(this).get(0).play();
            } else {
                jQuery(this).get(0).pause();
            }
        });
    }
    jQuery(document).on('scroll', checkMedia);
});
