document.addEventListener("DOMContentLoaded", function() {
    const statusInput = document.getElementById("statusInput");
    const statusList = document.getElementById("statusList");

    // Массив с названиями изображений
    const imageNames = [
        "PROIDENO.png", 
        "DROP.png",
        "REROL.png",
       
        // Добавьте больше названий изображений по необходимости
    ];

    // Путь к папке с изображениями
    const imagePath = "img/";

    // Функция для отображения списка изображений
    function showImageList() {
        statusList.innerHTML = ""; // Очищаем текущий список
        imageNames.forEach(name => {
            const img = document.createElement("img");
            img.src = imagePath + name;
            img.alt = name;

            // Добавляем обработчик ошибок
            img.onerror = function() {
                console.error("Не удалось загрузить изображение: " + img.src);
            };

            img.addEventListener("click", function() {
                statusInput.value = name;
                statusList.style.display = "none";
            });
            statusList.appendChild(img);
        });
        statusList.style.display = "flex"; // Устанавливаем flex display при показе
    }

    // Обработчик для показа списка изображений при фокусировке на инпуте
    statusInput.addEventListener("focus", showImageList);

    // Обработчик для скрытия списка изображений при клике вне инпута и списка
    document.addEventListener("click", function(event) {
        if (!statusInput.contains(event.target) && !statusList.contains(event.target)) {
            statusList.style.display = "none";
        }
    });
});

