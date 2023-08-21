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