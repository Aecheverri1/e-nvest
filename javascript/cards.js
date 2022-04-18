let index = 1;
showSlides(index);

function plusSlides(n) {
    showSlides(index = index + n)
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("card-item")

    if(n > slides.length) {
        index = 1;
    }
    if(n < 1) {
        index = slides.length;
    }
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[index-1].style.display = "block";
}