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