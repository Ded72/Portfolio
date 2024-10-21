let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("slides");
    const dots = document.getElementsByClassName("dot");
    
    // Скрываем все слайды
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    

    // Скрываем все точки
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Показываем текущий слайд
    slides[slideIndex - 1].style.display = "block";  
    dots[slideIndex - 1].className += " active";

    // Устанавливаем таймер для автоматического переключения слайдов
    setTimeout(showSlides, 10000); // Переключение через 3 секунды
}

function plusSlides(n) {
    showSlidesManually(slideIndex += n);
}

function currentSlide(n) {
    showSlidesManually(slideIndex = n);
}

function showSlidesManually(n) {
    const slides = document.getElementsByClassName("slides");
    const dots = document.getElementsByClassName("dot");
    
    // Если индекс превышает количество слайдов, возвращаем к первому
    if (n > slides.length) {slideIndex = 1}    
    // Если индекс меньше 1, устанавливаем на последний слайд
    if (n < 1) {slideIndex = slides.length}
    
    // Скрываем все слайды
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    // Деактивируем все точки
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Показываем текущий слайд и активируем соответствующую точку
    slides[slideIndex - 1].style.display = "block";  
    dots[slideIndex - 1].className += " active";
}