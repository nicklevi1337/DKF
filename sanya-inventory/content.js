const openGameBtn = document.querySelector('.game__button');


const popup = document.querySelector(".popup");
const popupCloseBtn = document.querySelector(".popup__close");
const popupSaveBtn = document.querySelector(".popup__save-btn");
const gameTextSanya = document.querySelector('.game__text');
const popupGame = document.querySelector('.popup_type_game');
const popupTextGame = document.querySelector('.popup__input_type_game');
const formElement = document.querySelector(".popup__container");
const formSave = document.querySelector(".popup__form");

const openPointsBtn = document.querySelector('.points__button');
const pointsTextSanya = document.querySelector('.points__text');
const popupPoints = document.querySelector('.popup_type_points');
const popupTextPoints = document.querySelector('.popup__input_type_points');
const formPointsSave = document.querySelector(".popup__form_type_points");

// для таблицы
const openAddListSan =  document.querySelector('.add-san');
const popupAddDay =  document.querySelector('.popup__input_type_day');
const popupAddPlay =  document.querySelector('.popup__input_type_play');
const popupAddLink =  document.querySelector('.popup__link');
const popupImgLink =  document.querySelector('.popup__link_img');
const popupAddComm =  document.querySelector('.popup__input_type_comm');
const formElementAdd = document.querySelector(".popup__container_type_stats");
const formSaveAdd = document.querySelector(".popup__form_type_stats");
const deleteAddBtn = document.querySelector(".list-san__check-deletebtn");
const popupAddList =  document.querySelector('.popup_type_stats');
const popupCloseBtnAdd = document.querySelector(".popup__close_type_stats");
const popupSaveBtnAdd = document.querySelector(".popup__save-btn");
const listTemplateSan = document.getElementById("list-san-template");
const listContainerSan = document.querySelector(".list-san");





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

function gameSanyaEdit () {
    popupTextGame.value = gameTextSanya.textContent;
}

function pointsSanyaEdit () {
    popupTextPoints.value = pointsTextSanya.textContent;
}


function closePopupByClick(evt) {
    const isOverlay = evt.target.classList.contains("popup");
    const isCloseBtn = evt.target.classList.contains("popup__close");
    if (isOverlay || isCloseBtn) {
        closePopup(popupGame);
        closePopup(popupPoints);
    }
}

function handlePointsSanyaFormSubmit(evt) {
    evt.preventDefault();
    const newPointsSanyaValue = popupTextPoints.value;
    pointsTextSanya.textContent = newPointsSanyaValue;
    closePopup(popupPoints);
    evt.target.reset(evt);
    saveNumberSanyaToLocalStorage('pointsSanyaValue', newPointsSanyaValue);
}


function handleGameSanyaFormSubmit(evt) {
    evt.preventDefault();
    const newGameSanyaValue = popupTextGame.value;
    gameTextSanya.textContent = newGameSanyaValue;
    closePopup(popupGame);
    evt.target.reset(evt);
    saveNumberSanyaToLocalStorage('gameSanyaValue', newGameSanyaValue);

}


function saveNumberSanyaToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

function loadNumberFromSanyaLocalStorage(key) {
    return localStorage.getItem(key);
}


document.addEventListener('DOMContentLoaded', () => {
    const savedPointsSanyaValue = loadNumberFromSanyaLocalStorage('pointsSanyaValue');
    if (savedPointsSanyaValue !== null) {
        pointsTextSanya.textContent = savedPointsSanyaValue;
    }

    const savedGameSanyaValue = loadNumberFromSanyaLocalStorage('gameSanyaValue');
    if (savedGameSanyaValue !== null) {
        gameTextSanya.textContent = savedGameSanyaValue;
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

const handleAddSanFormSubmit = (event) => {
    event.preventDefault();
    const name = popupAddDay.value;
    const link = popupAddLink.value;
    const title = popupAddPlay.value;
    const img = popupImgLink.value;
    const comment = popupAddComm.value;

    const infoSanList = {
        name,
        link,
        title,
        img,
        comment
    };
    savedSanLists.push(infoSanList); // Добавляем новый список в массив
    saveListsToLocalSanStorage(savedSanLists); 
    renderAddSanElement(createListSanElement(infoSanList));
    closePopup(popupAddList);
    event.target.reset(event);
};

function loadListsFromLocalSanStorage() {
    const storedSanLists = localStorage.getItem('sanLists');
    return storedSanLists ? JSON.parse(storedSanLists) : [];
}

let savedSanLists = loadListsFromLocalSanStorage();

function saveListsToLocalSanStorage(lists) {
    localStorage.setItem('sanLists', JSON.stringify(lists));
}

// massiv
const createListSanElement = (listSanData) => {
    const listElementSan = listTemplateSan.content.querySelector(".list-san__check").cloneNode(true);
    const listNameSan = listElementSan.querySelector(".number__subtitle_san");
    const listLinkSan = listElementSan.querySelector(".mission__icon_san");
    const listTitleSan = listElementSan.querySelector(".game-text__icon_san");
    const listImgSan = listElementSan.querySelector(".status__text_san");
    const listCommSan = listElementSan.querySelector(".comment__text_san");
    const listDeleteBtnSan = listElementSan.querySelector(".list-san__check-deletebtn");

    listNameSan.textContent = listSanData.name;
    listLinkSan.src = listSanData.link;
    listLinkSan.alt = listSanData.name;
    listTitleSan.textContent = listSanData.title;
    listImgSan.src = listSanData.img;
    listImgSan.alt = listSanData.name;
    listCommSan.textContent = listSanData.comment;

    const handleSanDelete = () => {
        listElementSan.remove();
        const index = savedSanLists.findIndex((list) => list.name === listSanData.name);
        if (index !== -1) {
            savedSanLists.splice(index, 1); // Удаляем список из массива savedLists
            saveListsToLocalSanStorage(savedSanLists); // Обновляем данные в локальном хранилище
        }
    };

    listDeleteBtnSan.addEventListener("click", handleSanDelete);

    return listElementSan;
};

const renderAddSanElement = (listElementSan) => {
    listContainerSan.append(listElementSan);
};

document.addEventListener('DOMContentLoaded', () => {
    savedSanLists.forEach((list) => {
        const element = createListSanElement(list);
        renderAddSanElement(element);
    });
});






openPointsBtn.addEventListener("click", pointsSanyaEdit);
popupPoints.addEventListener("click", closePopupByClick);
openPointsBtn.addEventListener("click", () => openPopup(popupPoints));
popupCloseBtn.addEventListener("click", () => closePopup(popupPoints));
formPointsSave.addEventListener("submit", handlePointsSanyaFormSubmit);

openGameBtn.addEventListener("click", gameSanyaEdit);
popupGame.addEventListener("click", closePopupByClick);
formElement.addEventListener("submit", handleGameSanyaFormSubmit);
formSave.addEventListener("click", closePopupByClick);
openGameBtn.addEventListener("click", () => openPopup(popupGame));
popupCloseBtn.addEventListener("click", () => closePopup(popupGame));

openAddListSan.addEventListener("click", () => openPopup(popupAddList));
popupCloseBtnAdd.addEventListener("click", () => closePopup(popupAddList));
popupAddList.addEventListener("click", closePopupAddByClick);
formElementAdd.addEventListener("submit", handleAddSanFormSubmit); 
formSaveAdd.addEventListener("click", closePopupAddByClick);
