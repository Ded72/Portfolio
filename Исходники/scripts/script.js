let slideIndex = 0; // Индекс текущего слайда
let slideInterval; // Переменная для хранения ID интервала
const descriptions = [
    "Принял участие в очной международной олимпиаде по информатике OIOIUS-2024",
    "Во время практики в университете я тестировал безопасность беспроводных сетей\n"+
    "используя Kali Linux и встроенные инструменты, такие как Aircrack-ng и Wireshark.\n"+
    "Я изучил различные методы атаки и защиты, что позволило мне лучше понять уязвимости\n"+
    "и способы их устранения.",
    "Я проходил практику в компании Сибур, где работал с мощным математическим\n"+
    "инструментом Aspen для анализа и прогнозирования данных. В процессе работы я углубился\n"+
    "в изучение метода главных компонент, который позволяет уменьшить размерность данных,\n"+
    "сохраняя их значимые характеристики. Я также подготовил презентацию по этому методу\n"+
    "и представил её перед всем отделом, что позволило мне поделиться своими знаниями и\n"+
    "получить ценные отзывы от коллег."
];

// Функция для показа текущего слайда
function showSlides(n) {
    const slides = document.getElementsByClassName("slides");
    const description = document.getElementById("description");
    const button = document.getElementById("toggleDescription");

    // Убедитесь, что индекс находится в пределах
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }

    // Скрыть все слайды
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Показать текущий слайд
    slides[slideIndex].style.display = "block";
    
    // Обновление описания для текущего слайда
    description.innerHTML = `<p><strong></strong> ${descriptions[slideIndex]}</p>`;
    
    // Скрыть описание по умолчанию
    description.classList.remove("show");
    description.style.visibility = "hidden";

    // Сбросить текст кнопки
    button.textContent = "Показать описание";
}

// Функция для переключения слайдов
function plusSlides(n) {
    clearInterval(slideInterval); // Остановить автоматическую смену слайдов
    slideIndex += n;
    showSlides(slideIndex);
}

// Функция для автоматической смены слайдов
function startSlideShow() {
    slideInterval = setInterval(function() {
        slideIndex++;
        showSlides(slideIndex);
    }, 10000); // Каждые 10 секунд
}

// Функция для переключения описания
function toggleDescription() {
    const description = document.getElementById("description");
    const button = document.getElementById("toggleDescription");

    // Проверяем текущее состояние отображения
    if (description.classList.contains("show"))
    {
        description.classList.remove("show"); // Убираем класс, чтобы скрыть
        button.textContent = "Показать описание"; // Изменяем текст кнопки

        // Устанавливаем задержку перед скрытием, чтобы анимация завершилась
        setTimeout(function() {
            description.style.visibility = "hidden"; // Скрываем элемент после анимации
        }, 300); // Задержка должна совпадать с длительностью перехода

        slideInterval = setInterval(function() {
            slideIndex++;
            showSlides(slideIndex);
        }, 10000);

    }
     else {
        clearInterval(slideInterval); // Остановить автоматическую смену слайдов
        description.style.visibility = "visible"; // Делаем элемент видимым
        description.classList.add("show"); // Добавляем класс, чтобы показать
        button.textContent = "Скрыть описание"; // Изменяем текст кнопки
    }
}

// Инициализируем слайд-шоу
showSlides(slideIndex); // Показать первый слайд
startSlideShow(); // Запуск автоматической смены слайдов
