const openGameMushegBtn = document.querySelector('.game__button');


const popup = document.querySelector(".popup");
const popupCloseBtn = document.querySelector(".popup__close");
const popupSaveBtn = document.querySelector(".popup__save-btn");
const gameTextMusheg = document.querySelector('.game__text');
const popupGame = document.querySelector('.popup_type_game');
const popupTextGame = document.querySelector('.popup__input_type_game');
const formElement = document.querySelector(".popup__container");
const formSave = document.querySelector(".popup__form");

const openPointsMushegBtn = document.querySelector('.points__button');
const pointsTextMusheg = document.querySelector('.points__text');
const popupPoints = document.querySelector('.popup_type_points');
const popupTextPoints = document.querySelector('.popup__input_type_points');
const formPointsSave = document.querySelector(".popup__form_type_points");

// для таблицы
const openAddListMus =  document.querySelector('.add-mus');
const popupAddDay =  document.querySelector('.popup__input_type_day');
const popupAddPlay =  document.querySelector('.popup__input_type_play');
const popupAddLink =  document.querySelector('.popup__link');
const popupImgLink =  document.querySelector('.popup__link_img');
const popupAddComm =  document.querySelector('.popup__input_type_comm');
const formElementAdd = document.querySelector(".popup__container_type_stats");
const formSaveAdd = document.querySelector(".popup__form_type_stats");
const deleteAddBtn = document.querySelector(".list-mus__check-deletebtn");
const popupAddList =  document.querySelector('.popup_type_stats');
const popupCloseBtnAdd = document.querySelector(".popup__close_type_stats");
const popupSaveBtnAdd = document.querySelector(".popup__save-btn");
const listTemplateMus = document.getElementById("list-mus-template");
const listContainerMus = document.querySelector(".list-mus");




function openPopup(popup) {
    popup.classList.add('popup_opened')
}

function closePopup(popup) {
    popup.classList.remove('popup_opened')
}


const popupGameOpen = () => {
    openPopup(popupGame)
    openPopup(popupPoints)
}

const popupGameClose = () => {
    closePopup(popupGame);
    closePopup(popupPoints);
}

function gameMushegEdit () {
    popupTextGame.value = gameTextMusheg.textContent;
}

function pointsMushegEdit () {
    popupTextPoints.value = pointsTextMusheg.textContent;
}


function closePopupByClick(evt) {
    const isOverlay = evt.target.classList.contains("popup");
    const isCloseBtn = evt.target.classList.contains("popup__close");
    if (isOverlay || isCloseBtn) {
        closePopup(popupGame);
        closePopup(popupPoints);
    }
}

function handlePointsMushegFormSubmit(evt) {
    evt.preventDefault();
    const newPointsMushegValue = popupTextPoints.value;
    pointsTextMusheg.textContent = newPointsMushegValue;
    closePopup(popupPoints);
    evt.target.reset(evt);
    saveNumberMushegToLocalStorage('pointsMushegValue', newPointsMushegValue);
}


function handleGameMushegFormSubmit(evt) {
    evt.preventDefault();
    const newGameMushegValue = popupTextGame.value;
    gameTextMusheg.textContent = newGameMushegValue;
    closePopup(popupGame);
    evt.target.reset(evt);
    saveNumberMushegToLocalStorage('gameMushegValue', newGameMushegValue);

}


function saveNumberMushegToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

function loadNumberFromMushegLocalStorage(key) {
    return localStorage.getItem(key);
}


document.addEventListener('DOMContentLoaded', () => {
    const savedPointsMushegValue = loadNumberFromMushegLocalStorage('pointsMushegValue');
    if (savedPointsMushegValue !== null) {
        pointsTextMusheg.textContent = savedPointsMushegValue;
    }

    const savedGameMushegValue = loadNumberFromMushegLocalStorage('gameMushegValue');
    if (savedGameMushegValue !== null) {
        gameTextMusheg.textContent = savedGameMushegValue;
    }
});



// list

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

const handleAddMusFormSubmit = (event) => {
    event.preventDefault();
    const name = popupAddDay.value;
    const link = popupAddLink.value;
    const title = popupAddPlay.value;
    const img = popupImgLink.value;
    const comment = popupAddComm.value;
    const infoMusList = {
        name,
        link,
        title,
        img,
        comment
    };
    // Проверяем, редактируем ли мы существующий элемент
    const existingIndex = savedMusLists.findIndex((list) => list.name === name);

    if (existingIndex !== -1) {
        // Если элемент уже существует, обновляем его
        savedMusLists[existingIndex] = infoMusList;
    } else {
        // Если это новый элемент, добавляем его в массив
        savedMusLists.push(infoMusList);
    }
  
    saveListsToLocalMusStorage(savedMusLists); // Сохраняем изменения в локальном хранилище
  
    // Если это новый элемент, добавляем его в DOM
    if (existingIndex === -1) {
        renderAddMusElement(createListMusElement(infoMusList));
    }
  
    closePopup(popupAddList);
    event.target.reset();
};







function loadListsFromLocalMusStorage() {
    const storedMusLists = localStorage.getItem('musLists');
    return storedMusLists ? JSON.parse(storedMusLists) : [];
}

let savedMusLists = loadListsFromLocalMusStorage();

function saveListsToLocalMusStorage(lists) {
    localStorage.setItem('musLists', JSON.stringify(lists));
}

// massiv
const createListMusElement = (listMusData) => {
    const listElementMus = listTemplateMus.content.querySelector(".list-mus__check").cloneNode(true);
    const listNameMus = listElementMus.querySelector(".number__subtitle_mus");
    const listLinkMus = listElementMus.querySelector(".mission__icon_mus");
    const listTitleMus= listElementMus.querySelector(".game-text__icon_mus");
    const listImgMus = listElementMus.querySelector(".status__text_mus");
    const listCommMus = listElementMus.querySelector(".comment__text_mus");
    const listDeleteBtnMus = listElementMus.querySelector(".list-mus__check-deletebtn");
    const listEditBtnMus = listElementMus.querySelector(".list-mus__check-editbtn"); // Кнопка редактирования

    listNameMus.textContent = listMusData.name;
    listLinkMus.src = listMusData.link;
    listLinkMus.alt = listMusData.name;
    listTitleMus.textContent = listMusData.title;
    listImgMus.src = listMusData.img;
    listImgMus.alt = listMusData.name;
    listCommMus.textContent = listMusData.comment;

    const handleMusDelete = () => {
        listElementMus.remove();
        const index = savedMusLists.findIndex((list) => list.name === listMusData.name);
        if (index !== -1) {
            savedMusLists.splice(index, 1); // Удаляем список из массива savedLists
            saveListsToLocalMusStorage(savedMusLists); // Обновляем данные в локальном хранилище
        }
    };

    const handleMusEdit = () => {
        // Заполняем попап данными текущего элемента
        popupAddDay.value = listMusData.name;
        popupAddLink.value = listMusData.link;
        popupAddPlay.value = listMusData.title;
        popupImgLink.value = listMusData.img;
        popupAddComm.value = listMusData.comment;

        // Открываем попап
        openPopup(popupAddList);

        // Обработчик для сохранения изменений
        const handleMusSaveEdit = (event) => {
            event.preventDefault();

            // Обновляем данные элемента
            listMusData.name = popupAddDay.value;
            listMusData.link = popupAddLink.value;
            listMusData.title = popupAddPlay.value;
            listMusData.img = popupImgLink.value;
            listMusData.comment = popupAddComm.value;

            // Обновляем отображение элемента
            listNameMus.textContent = listMusData.name;
            listLinkMus.src = listMusData.link;
            listTitleMus.textContent = listMusData.title;
            listImgMus.src = listMusData.img;
            listCommMus.textContent = listMusData.comment;

            // Сохраняем изменения в локальном хранилище
            saveListsToLocalStorage(savedLists);

            // Закрываем попап
            closePopup(popupAddList);

            // Удаляем обработчик, чтобы он не накладывался при повторном редактировании
            formSaveAdd.removeEventListener("submit", handleMusSaveEdit);
        };

        formSaveAdd.addEventListener("submit", handleMusSaveEdit);
    };

    listDeleteBtnMus.addEventListener("click", handleMusDelete);
    listEditBtnMus.addEventListener("click", handleMusEdit); // Добавляем обработчик для кнопки редактирования

    return listElementMus;
};








const renderAddMusElement = (listElementMus) => {
    listContainerMus.append(listElementMus);
};

document.addEventListener('DOMContentLoaded', () => {
    savedMusLists.forEach((list) => {
        const element = createListMusElement(list);
        renderAddMusElement(element);
    });
});










openPointsMushegBtn.addEventListener("click", pointsMushegEdit);
popupPoints.addEventListener("click", closePopupByClick);
openPointsMushegBtn.addEventListener("click", () => openPopup(popupPoints));
popupCloseBtn.addEventListener("click", () => closePopup(popupPoints));
formPointsSave.addEventListener("submit", handlePointsMushegFormSubmit);

openGameMushegBtn.addEventListener("click", gameMushegEdit);
popupGame.addEventListener("click", closePopupByClick);
formElement.addEventListener("submit", handleGameMushegFormSubmit);
formSave.addEventListener("click", closePopupByClick);
openGameMushegBtn.addEventListener("click", () => openPopup(popupGame));
popupCloseBtn.addEventListener("click", () => closePopup(popupGame));

openAddListMus.addEventListener("click", () => openPopup(popupAddList));
popupCloseBtnAdd.addEventListener("click", () => closePopup(popupAddList));
popupAddList.addEventListener("click", closePopupAddByClick);
formElementAdd.addEventListener("submit", handleAddMusFormSubmit); 
formSaveAdd.addEventListener("click", closePopupAddByClick);




