


    const slideshowImages = document.querySelectorAll(".intro-slideshow img");

    const nextImageDelay = 5000;
    let currentImageCounter = 0; // setting a variable to keep track of the current image (slide)

    // slideshowImages[currentImageCounter].style.display = "block";
    slideshowImages[currentImageCounter].style.opacity = 1;

    setInterval(nextImage, nextImageDelay);

    function nextImage() {
    // slideshowImages[currentImageCounter].style.display = "none";
    slideshowImages[currentImageCounter].style.opacity = 0;

    currentImageCounter = (currentImageCounter+1) % slideshowImages.length;

    // slideshowImages[currentImageCounter].style.display = "block";
    slideshowImages[currentImageCounter].style.opacity = 1;
    }

{
const clicked = document.getElementById("contactform")
clicked.addEventListener("submit")
}


document.addEventListner('DOMContentLoaded',function() {
    let diplayButton = document.getElementById('displayButton');
    let view = document.getElementById('typeyourname');

    displayButton.addEventListner('click',function() {
        let input = prompt('please enter your name');
        view.innerHTML = input;
    });
});
