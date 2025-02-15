const openGameBobBtn = document.querySelector('.game__button-bob');

const popup = document.querySelector(".popup");

const popupCloseBtn = document.querySelector(".popup__close");

const popupSaveBtn = document.querySelector(".popup__save-btn");

const gameTextBob = document.querySelector('.game__bob');

const popupGame = document.querySelector('.popup_type_game');

const popupTextGame = document.querySelector('.popup__input_type_game');
const formElement = document.querySelector(".popup__container");
const formSave = document.querySelector(".popup__form");

const openPointsBobBtn = document.querySelector('.points__button-bob');
const pointsTextBob = document.querySelector('.points__bob');

const popupPoints = document.querySelector('.popup_type_points');
const popupTextPoints = document.querySelector('.popup__input_type_points');
const formPointsSave = document.querySelector(".popup__form_type_points");



// Попап для таблицы
const openAddList =  document.querySelector('.add-text');
const popupAddDay =  document.querySelector('.popup__input_type_day');
const popupAddPlay =  document.querySelector('.popup__input_type_play');
const popupAddLink =  document.querySelector('.popup__link');
const popupImgLink =  document.querySelector('.popup__link_img');

const popupAddComm =  document.querySelector('.popup__input_type_comm');
const formElementAdd = document.querySelector(".popup__container_type_stats");
const formSaveAdd = document.querySelector(".popup__form_type_stats");
const deleteAddBtn = document.querySelector(".list__check-deletebtn");


const popupAddList =  document.querySelector('.popup_type_stats');
const popupCloseBtnAdd = document.querySelector(".popup__close_type_stats");

const popupSaveBtnAdd = document.querySelector(".popup__save-btn");
const listTemplate = document.getElementById("list-template");
const listContainer = document.querySelector(".list");







function openPopup(popup) {
    popup.classList.add('popup_opened')
}

function closePopup(popup) {
    popup.classList.remove('popup_opened')
}



const popupAdd  = () => {
    openPopup(popupAddList)
    
}

const popupAddClose  = () => {
    closePopup(popupAddList)
    
}

function closePopupAddByClick(evt) {
    const isOverlay = evt.target.classList.contains("popup_type_stats");
    const isCloseBtn = evt.target.classList.contains("popup__close");
    if (isOverlay || isCloseBtn) {
        closePopup(popupAddList);
}
}

const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const id = popupAddList.dataset.editingId || Date.now(); // Если редактируем, используем старый id
    const name = popupAddDay.value;
    const link = popupAddLink.value;
    const title = popupAddPlay.value;
    const img = popupImgLink.value;
    const comment = popupAddComm.value;
    




    const infoList = { id, name, link, title, img, comment };

    // Находим элемент по ID
    const existingIndex = savedLists.findIndex((list) => list.id == id);

    if (existingIndex !== -1) {
        savedLists[existingIndex] = infoList; // Обновляем
    } else {
        savedLists.push(infoList); // Добавляем
    }

    saveListsToLocalStorage(savedLists);
  // 🔥 Перерисовка списка после редактирования
  listContainer.innerHTML = ""; // Очищаем контейнер перед рендерингом
  savedLists.forEach((list) => {
      const element = createListElement(list);
      renderAddElement(element);
  });

  closePopup(popupAddList);
  event.target.reset();
    delete popupAddList.dataset.editingId; // Удаляем ID после редактирования

};








function loadListsFromLocalStorage() {
    const storedLists = localStorage.getItem('lists');
    return storedLists ? JSON.parse(storedLists) : [];
}

const savedLists = loadListsFromLocalStorage();

function saveListsToLocalStorage(lists) {
    localStorage.setItem('lists', JSON.stringify(lists));
}





const popupGameOpen = () => {
    openPopup(popupGame)
    openPopup(popupPoints)
}

const popupGameClose = () => {
    closePopup(popupGame);
    closePopup(popupPoints);
}

function gameBobEdit () {
    popupTextGame.value = gameTextBob.textContent;
}

function pointsBobEdit () {
    popupTextPoints.value = pointsTextBob.textContent;
}


function closePopupByClick(evt) {
    const isOverlay = evt.target.classList.contains("popup");
    const isCloseBtn = evt.target.classList.contains("popup__close");
    if (isOverlay || isCloseBtn) {
        closePopup(popupGame);
        closePopup(popupPoints);
    }
}

function handlePointsBobFormSubmit(evt) {
    evt.preventDefault();
    const newPointsBobValue = popupTextPoints.value;
    pointsTextBob.textContent = newPointsBobValue;
    closePopup(popupPoints);
    evt.target.reset(evt);
    saveNumberToLocalStorage('pointsBobValue', newPointsBobValue);
}


function handleBobGameFormSubmit(evt) {
    evt.preventDefault();
    const newGameBobValue = popupTextGame.value;
    gameTextBob.textContent = newGameBobValue;
    closePopup(popupGame);
    evt.target.reset(evt);
    saveNumberToLocalStorage('gameBobValue', newGameBobValue);

}


function saveNumberToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

function loadNumberFromLocalStorage(key) {
    return localStorage.getItem(key);
}





const infoList = [
 
    

];

const createListElement = (listData) => {
    const listElement = listTemplate.content.querySelector(".list__check").cloneNode(true);
    const listName = listElement.querySelector(".number__subtitle");
    const listLink = listElement.querySelector(".mission__icon");
    const listTitle = listElement.querySelector(".game-text__icon");
    const listImg = listElement.querySelector(".status__text");
    const listComm = listElement.querySelector(".comment__text");
    const listDeleteBtn = listElement.querySelector(".list__check-deletebtn");
    const listEditBtn = listElement.querySelector(".list__check-editbtn"); // Кнопка редактирования

    listName.textContent = listData.name;
    listLink.src = listData.link;
    listLink.alt = listData.name;
    listTitle.textContent = listData.title;
    listImg.src = listData.img;
    listImg.alt = listData.name;
    listComm.textContent = listData.comment;
    

    

    const handleDelete = () => {
        listElement.remove();
        const index = savedLists.findIndex((list) => list.name === listData.name);
        if (index !== -1) {
            savedLists.splice(index, 1); // Удаляем список из массива savedLists
            saveListsToLocalStorage(savedLists); // Обновляем данные в локальном хранилище
        }
    };

    const handleEdit = () => {

        popupAddList.dataset.editingId = listData.id; // Запоминаем ID

        // Заполняем попап данными текущего элемента
        popupAddDay.value = listData.name;
        popupAddLink.value = listData.link;
        popupAddPlay.value = listData.title;
        popupImgLink.value = listData.img;
        popupAddComm.value = listData.comment;

        // Открываем попап
        openPopup(popupAddList);

        // Обработчик для сохранения изменений
        const handleSaveEdit = (event) => {
            event.preventDefault();

            // Обновляем данные элемента
            listData.name = popupAddDay.value;
            listData.link = popupAddLink.value;
            listData.title = popupAddPlay.value;
            listData.img = popupImgLink.value;
            listData.comment = popupAddComm.value;

            // Обновляем отображение элемента
            listName.textContent = listData.name;
            listLink.src = listData.link;
            listTitle.textContent = listData.title;
            listImg.src = listData.img;
            listComm.textContent = listData.comment;

            // Сохраняем изменения в локальном хранилище
            saveListsToLocalStorage(savedLists);

            // Закрываем попап
            closePopup(popupAddList);

            // Удаляем обработчик, чтобы он не накладывался при повторном редактировании
            formSaveAdd.removeEventListener("submit", handleSaveEdit);
        };

        formSaveAdd.addEventListener("submit", handleSaveEdit);
    };

    listDeleteBtn.addEventListener("click", handleDelete);
    listEditBtn.addEventListener("click", handleEdit); // Добавляем обработчик для кнопки редактирования

    return listElement;
};











const renderAddElement = (listElement) => {
    listContainer.append(listElement);
};

infoList.forEach((list) => {
    const element = createListElement(list);
    renderAddElement(element);
});




document.addEventListener('DOMContentLoaded', () => {
    const savedPointsBobValue = loadNumberFromLocalStorage('pointsBobValue');
    if (savedPointsBobValue !== null) {
        pointsTextBob.textContent = savedPointsBobValue;
    }

    const savedGameBobValue = loadNumberFromLocalStorage('gameBobValue');
    if (savedGameBobValue !== null) {
        gameTextBob.textContent = savedGameBobValue;
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const savedLists = loadListsFromLocalStorage(); // Загружаем списки из локального хранилища
    savedLists.forEach((list) => {
        const element = createListElement(list);
        renderAddElement(element);
    });
});


openPointsBobBtn.addEventListener("click", pointsBobEdit);
popupPoints.addEventListener("click", closePopupByClick);
openPointsBobBtn.addEventListener("click", () => openPopup(popupPoints));
popupCloseBtn.addEventListener("click", () => closePopup(popupPoints));
formPointsSave.addEventListener("submit", handlePointsBobFormSubmit);

openGameBobBtn.addEventListener("click", gameBobEdit);
popupGame.addEventListener("click", closePopupByClick);
formElement.addEventListener("submit", handleBobGameFormSubmit);
formSave.addEventListener("click", closePopupByClick);
openGameBobBtn.addEventListener("click", () => openPopup(popupGame));
popupCloseBtn.addEventListener("click", () => closePopup(popupGame));


openAddList.addEventListener("click", () => openPopup(popupAddList));
popupCloseBtnAdd.addEventListener("click", () => closePopup(popupAddList));
popupAddList.addEventListener("click", closePopupAddByClick);
formElementAdd.addEventListener("submit", handleAddFormSubmit); 
formSaveAdd.addEventListener("click", closePopupAddByClick); 