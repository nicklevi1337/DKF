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



