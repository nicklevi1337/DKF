const openGameBtn = document.querySelector('.game__button');


const popup = document.querySelector(".popup");
const popupCloseBtn = document.querySelector(".popup__close");
const popupSaveBtn = document.querySelector(".popup__save-btn");
const gameTextKuka = document.querySelector('.game__text');
const popupGame = document.querySelector('.popup_type_game');
const popupTextGame = document.querySelector('.popup__input_type_game');
const formElement = document.querySelector(".popup__container");
const formSave = document.querySelector(".popup__form");

const openPointsBtn = document.querySelector('.points__button');
const pointsTextKuka = document.querySelector('.points__text');
const popupPoints = document.querySelector('.popup_type_points');
const popupTextPoints = document.querySelector('.popup__input_type_points');
const formPointsSave = document.querySelector(".popup__form_type_points");

// для таблицы
const openAddListKuk =  document.querySelector('.add-kuk');
const popupAddDay =  document.querySelector('.popup__input_type_day');
const popupAddPlay =  document.querySelector('.popup__input_type_play');
const popupAddLink =  document.querySelector('.popup__link');
const popupImgLink =  document.querySelector('.popup__link_img');
const popupAddComm =  document.querySelector('.popup__input_type_comm');
const formElementAdd = document.querySelector(".popup__container_type_stats");
const formSaveAdd = document.querySelector(".popup__form_type_stats");
const deleteAddBtn = document.querySelector(".list-kuk__check-deletebtn");
const popupAddList =  document.querySelector('.popup_type_stats');
const popupCloseBtnAdd = document.querySelector(".popup__close_type_stats");
const popupSaveBtnAdd = document.querySelector(".popup__save-btn");
const listTemplateKuk = document.getElementById("list-kuk-template");
const listContainerKuk = document.querySelector(".list-kuk");





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

function gameKukaEdit () {
    popupTextGame.value = gameTextKuka.textContent;
}

function pointsKukaEdit () {
    popupTextPoints.value = pointsTextKuka.textContent;
}


function closePopupByClick(evt) {
    const isOverlay = evt.target.classList.contains("popup");
    const isCloseBtn = evt.target.classList.contains("popup__close");
    if (isOverlay || isCloseBtn) {
        closePopup(popupGame);
        closePopup(popupPoints);
    }
}

function handlePointsKukaFormSubmit(evt) {
    evt.preventDefault();
    const newPointsKukaValue = popupTextPoints.value;
    pointsTextKuka.textContent = newPointsKukaValue;
    closePopup(popupPoints);
    evt.target.reset(evt);
    saveNumberKukaToLocalStorage('pointsKukaValue', newPointsKukaValue);
}


function handleGameKukaFormSubmit(evt) {
    evt.preventDefault();
    const newGameKukaValue = popupTextGame.value;
    gameTextKuka.textContent = newGameKukaValue;
    closePopup(popupGame);
    evt.target.reset(evt);
    saveNumberKukaToLocalStorage('gameKukaValue', newGameKukaValue);

}


function saveNumberKukaToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

function loadNumberFromKukaLocalStorage(key) {
    return localStorage.getItem(key);
}


document.addEventListener('DOMContentLoaded', () => {
    const savedPointsKukaValue = loadNumberFromKukaLocalStorage('pointsKukaValue');
    if (savedPointsKukaValue !== null) {
        pointsTextKuka.textContent = savedPointsKukaValue;
    }

    const savedGameKukaValue = loadNumberFromKukaLocalStorage('gameKukaValue');
    if (savedGameKukaValue !== null) {
        gameTextKuka.textContent = savedGameKukaValue;
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



const handleAddKukFormSubmit = (event) => {
    event.preventDefault();
    const name = popupAddDay.value;
    const link = popupAddLink.value;
    const title = popupAddPlay.value;
    const img = popupImgLink.value;
    const comment = popupAddComm.value;
    const infoKukList = {
        name,
        link,
        title,
        img,
        comment
    };
    savedKukLists.push(infoKukList); // Добавляем новый список в массив
    saveListsToLocalKukStorage(savedKukLists); 
    renderAddKukElement(createListKukElement(infoKukList));
    closePopup(popupAddList);
    event.target.reset(event);
};

function loadListsFromLocalKukStorage() {
    const storedKukLists = localStorage.getItem('kukLists');
    return storedKukLists ? JSON.parse(storedKukLists) : [];
}

let savedKukLists = loadListsFromLocalKukStorage();

function saveListsToLocalKukStorage(lists) {
    localStorage.setItem('kukLists', JSON.stringify(lists));


}

// massiv
const createListKukElement = (listKukData) => {
    const listElementKuk = listTemplateKuk.content.querySelector(".list-kuk__check").cloneNode(true);
    const listNameKuk = listElementKuk.querySelector(".number__subtitle_kuk");
    const listLinkKuk = listElementKuk.querySelector(".mission__icon_kuk");
    const listTitleKuk = listElementKuk.querySelector(".game-text__icon_kuk");
    const listImgKuk = listElementKuk.querySelector(".status__text_kuk");
    const listCommKuk = listElementKuk.querySelector(".comment__text_kuk");
    const listDeleteBtnKuk = listElementKuk.querySelector(".list-kuk__check-deletebtn");


    listNameKuk.textContent = listKukData.name;
    listLinkKuk.src = listKukData.link;
    listLinkKuk.alt = listKukData.name;
    listTitleKuk.textContent = listKukData.title;
    listImgKuk.src = listKukData.img;
    listImgKuk.alt = listKukData.name;
    listCommKuk.textContent = listKukData.comment;

    const handleKukDelete = () => {
        listElementKuk.remove();
        const index = savedKukLists.findIndex((list) => list.name === listKukData.name);
        if (index !== -1) {
            savedKukLists.splice(index, 1); // Удаляем список из массива savedLists
            saveListsToLocalKukStorage(savedKukLists); // Обновляем данные в локальном хранилище
        }
    };

    listDeleteBtnKuk.addEventListener("click", handleKukDelete);

    return listElementKuk;
};

const renderAddKukElement = (listElementKuk) => {
    listContainerKuk.append(listElementKuk);
};

document.addEventListener('DOMContentLoaded', () => {
    savedKukLists.forEach((list) => {
        const element = createListKukElement(list);
        renderAddKukElement(element);
    });
});




openPointsBtn.addEventListener("click", pointsKukaEdit);
popupPoints.addEventListener("click", closePopupByClick);
openPointsBtn.addEventListener("click", () => openPopup(popupPoints));
popupCloseBtn.addEventListener("click", () => closePopup(popupPoints));
formPointsSave.addEventListener("submit", handlePointsKukaFormSubmit);

openGameBtn.addEventListener("click", gameKukaEdit);
popupGame.addEventListener("click", closePopupByClick);
formElement.addEventListener("submit", handleGameKukaFormSubmit);
formSave.addEventListener("click", closePopupByClick);
openGameBtn.addEventListener("click", () => openPopup(popupGame));
popupCloseBtn.addEventListener("click", () => closePopup(popupGame));


openAddListKuk.addEventListener("click", () => openPopup(popupAddList));
popupCloseBtnAdd.addEventListener("click", () => closePopup(popupAddList));
popupAddList.addEventListener("click", closePopupAddByClick);
formElementAdd.addEventListener("submit", handleAddKukFormSubmit); 
formSaveAdd.addEventListener("click", closePopupAddByClick);


