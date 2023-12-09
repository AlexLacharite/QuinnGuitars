let slideshow1Index = 0;
let slideshow2Index = 0;

document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') {
        plusSlides(-1, 'slideshow1');
        plusSlides(-1, 'slideshow2');
    } else if (event.key === 'ArrowRight') {
        plusSlides(1, 'slideshow1');
        plusSlides(1, 'slideshow2');
    }
});

function plusSlides(n, slideshowId) {
    if (slideshowId === 'slideshow1') {
        showSlides(slideshow1Index += n, 'slideshow1');
        updateSecondSlideshow(slideshow1Index);
    } else if (slideshowId === 'slideshow2') {
        showSlides(slideshow2Index += n, 'slideshow2');
    }
}

function showSlides(slideshowIndex, slideshowId) {
    const slides = document.querySelectorAll(`#${slideshowId} .slide`);

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    if (slideshowIndex < 1) {
        slideshowIndex = slides.length;
    } else if (slideshowIndex > slides.length) {
        slideshowIndex = 1;
    }

    slides[slideshowIndex - 1].style.display = 'block';

    if (slideshowId === 'slideshow1') {
        slideshow1Index = slideshowIndex;
    } else if (slideshowId === 'slideshow2') {
        slideshow2Index = slideshowIndex;
    }
}

function updateSecondSlideshow(selectedIndex) {
    // Clear the current slides in the second slideshow
    const secondSlides = document.querySelectorAll('#slideshow2 .slide');
    for (let i = 0; i < secondSlides.length; i++) {
        secondSlides[i].style.display = 'none';
    }

    // Dynamically load different sets of images for the second slideshow based on the selected index
    let setPath;
    switch (selectedIndex) {
        case 1:
            setPath = '/Quinn Guitars Models/OCD/';
            break;
        case 2:
            setPath = 'set2/';
            break;
        case 3:
            setPath = 'set3/';
            break;
        // Add more cases as needed

        default:
            setPath = 'set1/';
    }

    // Load images for the second slideshow
    const secondSlideshow = document.getElementById('slideshow2');
    for (let i = 1; i <= 3; i++) {
        const slide = document.createElement('div');
        slide.className = 'slide fade';
        const img = document.createElement('img');
        img.src = `${setPath}image${String.fromCharCode(65 + i)}.jpg`;
        img.alt = `Slide ${String.fromCharCode(65 + i)}`;
        slide.appendChild(img);
        secondSlideshow.appendChild(slide);
    }

    // Reset the index and show the first slide in the second slideshow
    slideshow2Index = 0;
    plusSlides(1, 'slideshow2');
}

// Start both diaporamas
showSlides(slideshow1Index, 'slideshow1');
showSlides(slideshow2Index, 'slideshow2');
