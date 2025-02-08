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
function initMap() {
    const location = { lat: 59.5675, lng: 30.1289 }; // Координаты Гатчины
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: location,
    });
    new google.maps.Marker({
        position: location,
        map: map,
    });
}
