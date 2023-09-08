const openGameBtn = document.querySelector('.game__button');
const popup = document.querySelector(".popup");
const popupCloseBtn = document.querySelector(".popup__close");
const popupSaveBtn = document.querySelector(".popup__save-btn");
const gameText = document.querySelector('.game__text');
const popupGame = document.querySelector('.popup_type_game');
const popupTextGame = document.querySelector('.popup__input_type_game');
const formElement = document.querySelector(".popup__container");
const formSave = document.querySelector(".popup__form");
const openPointsBtn = document.querySelector('.points__button');
const pointsText = document.querySelector('.points__text');
const popupPoints = document.querySelector('.popup_type_points');
const popupTextPoints = document.querySelector('.popup__input_type_points');
const formPointsSave = document.querySelector(".popup__form_type_points");
// для таблицы
const openAddListMax =  document.querySelector('.add-max');
const popupAddDay =  document.querySelector('.popup__input_type_day');
const popupAddPlay =  document.querySelector('.popup__input_type_play');
const popupAddLink =  document.querySelector('.popup__link');
const popupImgLink =  document.querySelector('.popup__link_img');
const popupAddComm =  document.querySelector('.popup__input_type_comm');
const formElementAdd = document.querySelector(".popup__container_type_stats");
const formSaveAdd = document.querySelector(".popup__form_type_stats");
const deleteAddBtn = document.querySelector(".list-max__check-deletebtn");
const popupAddList =  document.querySelector('.popup_type_stats');
const popupCloseBtnAdd = document.querySelector(".popup__close_type_stats");
const popupSaveBtnAdd = document.querySelector(".popup__save-btn");
const listTemplateMax = document.getElementById("list-max-template");
const listContainerMax = document.querySelector(".list-max");

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

function gameEdit () {
    popupTextGame.value = gameText.textContent;
}

function pointsEdit () {
    popupTextPoints.value = pointsText.textContent;
}

function closePopupByClick(evt) {
    const isOverlay = evt.target.classList.contains("popup");
    const isCloseBtn = evt.target.classList.contains("popup__close");
    if (isOverlay || isCloseBtn) {
        closePopup(popupGame);
        closePopup(popupPoints);
    }
}

function handlePointsFormSubmit(evt) {
    evt.preventDefault();
    const newPointsValue = popupTextPoints.value;
    pointsText.textContent = newPointsValue;
    closePopup(popupPoints);
    evt.target.reset(evt);
    saveNumberToLocalStorage('pointsValue', newPointsValue);
}

function handleGameFormSubmit(evt) {
    evt.preventDefault();
    const newGameValue = popupTextGame.value;
    gameText.textContent = newGameValue;
    closePopup(popupGame);
    evt.target.reset(evt);
    saveNumberToLocalStorage('gameValue', newGameValue);
}

function saveNumberToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

function loadNumberFromLocalStorage(key) {
    return localStorage.getItem(key);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedPointsValue = loadNumberFromLocalStorage('pointsValue');
    if (savedPointsValue !== null) {
        pointsText.textContent = savedPointsValue;
    }
    const savedGameValue = loadNumberFromLocalStorage('gameValue');
    if (savedGameValue !== null) {
        gameText.textContent = savedGameValue;
    }
});

//list
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

const handleAddMaxFormSubmit = (event) => {
    event.preventDefault();
    const name = popupAddDay.value;
    const link = popupAddLink.value;
    const title = popupAddPlay.value;
    const img = popupImgLink.value;
    const comment = popupAddComm.value;
    const infoMaxList = {
        name,
        link,
        title,
        img,
        comment
    };
    savedMaxLists.push(infoMaxList); // Добавляем новый список в массив
    saveListsToLocalMaxStorage(savedMaxLists); 
    renderAddMaxElement(createListMaxElement(infoMaxList));
    closePopup(popupAddList);
    event.target.reset(event);
};

function loadListsFromLocalMaxStorage() {
    const storedMaxLists = localStorage.getItem('maxLists');
    return storedMaxLists ? JSON.parse(storedMaxLists) : [];
}

let savedMaxLists = loadListsFromLocalMaxStorage();

function saveListsToLocalMaxStorage(lists) {
    localStorage.setItem('maxLists', JSON.stringify(lists));
}

// massiv
const createListMaxElement = (listMaxData) => {
    const listElementMax = listTemplateMax.content.querySelector(".list-max__check").cloneNode(true);
    const listNameMax = listElementMax.querySelector(".number__subtitle_max");
    const listLinkMax = listElementMax.querySelector(".mission__icon_max");
    const listTitleMax = listElementMax.querySelector(".game-text__icon_max");
    const listImgMax = listElementMax.querySelector(".status__text_max");
    const listCommMax = listElementMax.querySelector(".comment__text_max");
    const listDeleteBtnMax = listElementMax.querySelector(".list-max__check-deletebtn");
    listNameMax.textContent = listMaxData.name;
    listLinkMax.src = listMaxData.link;
    listLinkMax.alt = listMaxData.name;
    listTitleMax.textContent = listMaxData.title;
    listImgMax.src = listMaxData.img;
    listImgMax.alt = listMaxData.name;
    listCommMax.textContent = listMaxData.comment;

    const handleMaxDelete = () => {
        listElementMax.remove();
        const index = savedMaxLists.findIndex((list) => list.name === listMaxData.name);
        if (index !== -1) {
            savedMaxLists.splice(index, 1); // Удаляем список из массива savedLists
            saveListsToLocalMaxStorage(savedMaxLists); // Обновляем данные в локальном хранилище
        }
    };

    listDeleteBtnMax.addEventListener("click", handleMaxDelete);

    return listElementMax;
};

const renderAddMaxElement = (listElementMax) => {
    listContainerMax.append(listElementMax);
};

document.addEventListener('DOMContentLoaded', () => {
    savedMaxLists.forEach((list) => {
        const element = createListMaxElement(list);
        renderAddMaxElement(element);
    });
});

openPointsBtn.addEventListener("click", pointsEdit);
popupPoints.addEventListener("click", closePopupByClick);
openPointsBtn.addEventListener("click", () => openPopup(popupPoints));
popupCloseBtn.addEventListener("click", () => closePopup(popupPoints));
formPointsSave.addEventListener("submit", handlePointsFormSubmit);

openGameBtn.addEventListener("click", gameEdit);
popupGame.addEventListener("click", closePopupByClick);
formElement.addEventListener("submit", handleGameFormSubmit);
formSave.addEventListener("click", closePopupByClick);
openGameBtn.addEventListener("click", () => openPopup(popupGame));
popupCloseBtn.addEventListener("click", () => closePopup(popupGame));

openAddListMax.addEventListener("click", () => openPopup(popupAddList));
popupCloseBtnAdd.addEventListener("click", () => closePopup(popupAddList));
popupAddList.addEventListener("click", closePopupAddByClick);
formElementAdd.addEventListener("submit", handleAddMaxFormSubmit); 
formSaveAdd.addEventListener("click", closePopupAddByClick);
















































/*




*/