const openGameBtn = document.querySelector('.game__button');


const popup = document.querySelector(".popup");
const popupCloseBtn = document.querySelector(".popup__close");
const popupSaveBtn = document.querySelector(".popup__save-btn");
const gameTextAlan = document.querySelector('.game__text');
const popupGame = document.querySelector('.popup_type_game');
const popupTextGame = document.querySelector('.popup__input_type_game');
const formElement = document.querySelector(".popup__container");
const formSave = document.querySelector(".popup__form");

const openPointsBtn = document.querySelector('.points__button');
const pointsTextAlan = document.querySelector('.points__text');
const popupPoints = document.querySelector('.popup_type_points');
const popupTextPoints = document.querySelector('.popup__input_type_points');
const formPointsSave = document.querySelector(".popup__form_type_points");






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

function gameAlanEdit () {
    popupTextGame.value = gameTextAlan.textContent;
}

function pointsAlanEdit () {
    popupTextPoints.value = pointsTextAlan.textContent;
}


function closePopupByClick(evt) {
    const isOverlay = evt.target.classList.contains("popup");
    const isCloseBtn = evt.target.classList.contains("popup__close");
    if (isOverlay || isCloseBtn) {
        closePopup(popupGame);
        closePopup(popupPoints);
    }
}

function handlePointsAlanFormSubmit(evt) {
    evt.preventDefault();
    const newPointsAlanValue = popupTextPoints.value;
    pointsTextAlan.textContent = newPointsAlanValue;
    closePopup(popupPoints);
    evt.target.reset(evt);
    saveNumberKukaToLocalStorage('pointsAlanValue', newPointsAlanValue);
}


function handleGameAlanFormSubmit(evt) {
    evt.preventDefault();
    const newGameAlanValue = popupTextGame.value;
    gameTextAlan.textContent = newGameAlanValue;
    closePopup(popupGame);
    evt.target.reset(evt);
    saveNumberKukaToLocalStorage('gameAlanValue', newGameAlanValue);

}


function saveNumberKukaToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

function loadNumberFromAlanLocalStorage(key) {
    return localStorage.getItem(key);
}


document.addEventListener('DOMContentLoaded', () => {
    const savedPointsAlanValue = loadNumberFromAlanLocalStorage('pointsAlanValue');
    if (savedPointsAlanValue !== null) {
        pointsTextAlan.textContent = savedPointsAlanValue;
    }

    const savedGameAlanValue = loadNumberFromAlanLocalStorage('gameAlanValue');
    if (savedGameAlanValue !== null) {
        gameTextAlan.textContent = savedGameAlanValue;
    }
});


openPointsBtn.addEventListener("click", pointsAlanEdit);
popupPoints.addEventListener("click", closePopupByClick);
openPointsBtn.addEventListener("click", () => openPopup(popupPoints));
popupCloseBtn.addEventListener("click", () => closePopup(popupPoints));
formPointsSave.addEventListener("submit", handlePointsAlanFormSubmit);

openGameBtn.addEventListener("click", gameAlanEdit);
popupGame.addEventListener("click", closePopupByClick);
formElement.addEventListener("submit", handleGameAlanFormSubmit);
formSave.addEventListener("click", closePopupByClick);
openGameBtn.addEventListener("click", () => openPopup(popupGame));
popupCloseBtn.addEventListener("click", () => closePopup(popupGame));