const openGameBtn = document.querySelector('.game__button');


const popup = document.querySelector(".popup");
const popupCloseBtn = document.querySelector(".popup__close");
const popupSaveBtn = document.querySelector(".popup__save-btn");
const gameTextMiron = document.querySelector('.game__text');
const popupGame = document.querySelector('.popup_type_game');
const popupTextGame = document.querySelector('.popup__input_type_game');
const formElement = document.querySelector(".popup__container");
const formSave = document.querySelector(".popup__form");

const openPointsBtn = document.querySelector('.points__button');
const pointsTextMiron = document.querySelector('.points__text');
const popupPoints = document.querySelector('.popup_type_points');
const popupTextPoints = document.querySelector('.popup__input_type_points');
const formPointsSave = document.querySelector(".popup__form_type_points");

// для таблицы
const openAddListMir =  document.querySelector('.add-mir');
const popupAddDay =  document.querySelector('.popup__input_type_day');
const popupAddPlay =  document.querySelector('.popup__input_type_play');
const popupAddLink =  document.querySelector('.popup__link');
const popupImgLink =  document.querySelector('.popup__link_img');
const popupAddComm =  document.querySelector('.popup__input_type_comm');
const formElementAdd = document.querySelector(".popup__container_type_stats");
const formSaveAdd = document.querySelector(".popup__form_type_stats");
const deleteAddBtn = document.querySelector(".list-mir__check-deletebtn");
const popupAddList =  document.querySelector('.popup_type_stats');
const popupCloseBtnAdd = document.querySelector(".popup__close_type_stats");
const popupSaveBtnAdd = document.querySelector(".popup__save-btn");
const listTemplateMir = document.getElementById("list-mir-template");
const listContainerMir = document.querySelector(".list-mir");






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

function gameMironEdit () {
    popupTextGame.value = gameTextMiron.textContent;
}

function pointsMironEdit () {
    popupTextPoints.value = pointsTextMiron.textContent;
}


function closePopupByClick(evt) {
    const isOverlay = evt.target.classList.contains("popup");
    const isCloseBtn = evt.target.classList.contains("popup__close");
    if (isOverlay || isCloseBtn) {
        closePopup(popupGame);
        closePopup(popupPoints);
    }
}

function handlePointsMironFormSubmit(evt) {
    evt.preventDefault();
    const newPointsMironValue = popupTextPoints.value;
    pointsTextMiron.textContent = newPointsMironValue;
    closePopup(popupPoints);
    evt.target.reset(evt);
    saveNumberMironToLocalStorage('pointsMironValue', newPointsMironValue);
}


function handleGameMironFormSubmit(evt) {
    evt.preventDefault();
    const newGameMironValue = popupTextGame.value;
    gameTextMiron.textContent = newGameMironValue;
    closePopup(popupGame);
    evt.target.reset(evt);
    saveNumberMironToLocalStorage('gameMironValue', newGameMironValue);

}


function saveNumberMironToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

function loadNumberFromMironLocalStorage(key) {
    return localStorage.getItem(key);
}


document.addEventListener('DOMContentLoaded', () => {
    const savedPointsMironValue = loadNumberFromMironLocalStorage('pointsMironValue');
    if (savedPointsMironValue !== null) {
        pointsTextMiron.textContent = savedPointsMironValue;
    }

    const savedGameMironValue = loadNumberFromMironLocalStorage('gameMironValue');
    if (savedGameMironValue !== null) {
        gameTextMiron.textContent = savedGameMironValue;
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

const handleAddMirFormSubmit = (event) => {
    event.preventDefault();
    const name = popupAddDay.value;
    const link = popupAddLink.value;
    const title = popupAddPlay.value;
    const img = popupImgLink.value;
    const comment = popupAddComm.value;

    const infoMirList = {
        name,
        link,
        title,
        img,
        comment
    };
    savedMirLists.push(infoMirList); // Добавляем новый список в массив
    saveListsToLocalMirStorage(savedMirLists); 
    renderAddMirElement(createListMirElement(infoMirList));
    closePopup(popupAddList);
    event.target.reset(event);
};

function loadListsFromLocalMirStorage() {
    const storedMirLists = localStorage.getItem('mirLists');
    return storedMirLists ? JSON.parse(storedMirLists) : [];
}

let savedMirLists = loadListsFromLocalMirStorage();

function saveListsToLocalMirStorage(lists) {
    localStorage.setItem('mirLists', JSON.stringify(lists));
}

// massiv
const createListMirElement = (listMirData) => {
    const listElementMir = listTemplateMir.content.querySelector(".list-mir__check").cloneNode(true);
    const listNameMir = listElementMir.querySelector(".number__subtitle_mir");
    const listLinkMir = listElementMir.querySelector(".mission__icon_mir");
    const listTitleMir = listElementMir.querySelector(".game-text__icon_mir");
    const listImgMir = listElementMir.querySelector(".status__text_mir");
    const listCommMir = listElementMir.querySelector(".comment__text_mir");
    const listDeleteBtnMir = listElementMir.querySelector(".list-mir__check-deletebtn");

    listNameMir.textContent = listMirData.name;
    listLinkMir.src = listMirData.link;
    listLinkMir.alt = listMirData.name;
    listTitleMir.textContent = listMirData.title;
    listImgMir.src = listMirData.img;
    listImgMir.alt = listMirData.name;
    listCommMir.textContent = listMirData.comment;

    const handleMirDelete = () => {
        listElementMir.remove();
        const index = savedMirLists.findIndex((list) => list.name === listMirData.name);
        if (index !== -1) {
            savedMirLists.splice(index, 1); // Удаляем список из массива savedLists
            saveListsToLocalMirStorage(savedMirLists); // Обновляем данные в локальном хранилище
        }
    };

    listDeleteBtnMir.addEventListener("click", handleMirDelete);

    return listElementMir;
};

const renderAddMirElement = (listElementMir) => {
    listContainerMir.append(listElementMir);
};

document.addEventListener('DOMContentLoaded', () => {
    savedMirLists.forEach((list) => {
        const element = createListMirElement(list);
        renderAddMirElement(element);
    });
});







openPointsBtn.addEventListener("click", pointsMironEdit);
popupPoints.addEventListener("click", closePopupByClick);
openPointsBtn.addEventListener("click", () => openPopup(popupPoints));
popupCloseBtn.addEventListener("click", () => closePopup(popupPoints));
formPointsSave.addEventListener("submit", handlePointsMironFormSubmit);

openGameBtn.addEventListener("click", gameMironEdit);
popupGame.addEventListener("click", closePopupByClick);
formElement.addEventListener("submit", handleGameMironFormSubmit);
formSave.addEventListener("click", closePopupByClick);
openGameBtn.addEventListener("click", () => openPopup(popupGame));
popupCloseBtn.addEventListener("click", () => closePopup(popupGame));

openAddListMir.addEventListener("click", () => openPopup(popupAddList));
popupCloseBtnAdd.addEventListener("click", () => closePopup(popupAddList));
popupAddList.addEventListener("click", closePopupAddByClick);
formElementAdd.addEventListener("submit", handleAddMirFormSubmit); 
formSaveAdd.addEventListener("click", closePopupAddByClick);
