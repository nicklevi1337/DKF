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










