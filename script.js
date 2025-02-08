document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name && email && message) {
            formMessage.textContent = "Спасибо! Ваше сообщение отправлено.";
            formMessage.style.color = "green";
            form.reset();
        } else {
            formMessage.textContent = "Заполните все поля.";
            formMessage.style.color = "red";
        }
    });
});

// Функция инициализации карты
ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [59.5630, 30.1245], // Координаты Гатчины
        zoom: 15
    });

    var myPlacemark = new ymaps.Placemark([59.5630, 30.1245], {
        hintContent: "Наш офис",
        balloonContent: "Мы находимся здесь!"
    });

    myMap.geoObjects.add(myPlacemark);
}
