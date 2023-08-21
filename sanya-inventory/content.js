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
    saveNumberMironToLocalStorage('gameSanyaValue', newGameSanyaValue);

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