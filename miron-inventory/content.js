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