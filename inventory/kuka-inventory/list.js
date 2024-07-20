document.addEventListener("DOMContentLoaded", function() {
    const iconInput = document.getElementById("iconInput");
    const imageList = document.getElementById("imageList");

    // Массив с названиями изображений
    const imageNames = [
        "АВ-1.png", 
        "АВ-2.png",
        "АВ-3.png",
        "АВ-b1.png",
        "АВ-b2.png",
        "АВ-b3.png",
        "ИХ-1.png",
        "ИХ-2.png",
        "ИХ-3.png",
        "ИХ-1b.png",
        "ИХ-2b.png",
        "ИХ-3b.png",
        "КК-1.png",
        "КК-2.png",
        "КК-3.png",
        "КК-1b.png",
        "KК-2b.png",
        "КК-3b.png",
        "ТК-1.png",
        "ТК-2.png",
        "ТК-3.png",
        "ТК-1b.png",
        "ТК-2b.png",
        "ТК-3b.png",
        "CC-1.png",
        "CC-2.png",
        "CC-3.png",
        "CC-1b.png",
        "CC-2B.png",
        "CC-3b.png",
        "MM-1.png",
        "MM-2.png",
        "MM-3.png",
        "MM-1b.png",
        "MM-2b.png",
        "MM-3b.png",
        "OM-1.png",
        "OM-2.png",
        "OM-3.png",
        "OM-1b.png",
        "OM-2b.png",
        "OM-3b.png",
        "TB-1.png",
        "TB-2.png",
        "TB-3.png",
        "TB-1b.png",
        "TB-2b.png",
        "TB-3b.png",
        "Todd.png",
        "President.png",
        "question-2.png",
        "Mad.png",
        "casino.png",
        "art.png",
        "amurant.png",
        "эко.png",
        "тюрьма.png",
        "скуфы.png",
        "мошнаторы.png",
        "донер.png",
        "гилтикус.png"
        // Добавьте больше названий изображений по необходимости
    ];

    // Путь к папке с изображениями
    const imagePath = "img/";

    // Функция для отображения списка изображений
    function showImageList() {
        imageList.innerHTML = ""; // Очищаем текущий список
        imageNames.forEach(name => {
            const img = document.createElement("img");
            img.src = imagePath + name;
            img.alt = name;

            // Добавляем обработчик ошибок
            img.onerror = function() {
                console.error("Не удалось загрузить изображение: " + img.src);
            };

            img.addEventListener("click", function() {
                iconInput.value = name;
                imageList.style.display = "none";
            });
            imageList.appendChild(img);
        });
        imageList.style.display = "flex"; // Устанавливаем flex display при показе
    }

    // Обработчик для показа списка изображений при фокусировке на инпуте
    iconInput.addEventListener("focus", showImageList);

    // Обработчик для скрытия списка изображений при клике вне инпута и списка
    document.addEventListener("click", function(event) {
        if (!iconInput.contains(event.target) && !imageList.contains(event.target)) {
            imageList.style.display = "none";
        }
    });
});





