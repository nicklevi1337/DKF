const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup__close");
const openBob = document.querySelector(".element__button-bob");
const openAlan = document.querySelector(".element__button-alan");
const openMiron = document.querySelector(".element__button-miron");
const openMusheg = document.querySelector(".element__button-musheg");
const openMax = document.querySelector(".element__button-max");
const openKuka = document.querySelector(".element__button-kuka");
const openSanya = document.querySelector(".element__button-sanya");

const popupBob = document.querySelector(".popup_type_bob");
const popupMax = document.querySelector(".popup_type_max");
const popupMusheg = document.querySelector(".popup_type_musheg");
const popupMiron = document.querySelector(".popup_type_miron");
const popupSanya = document.querySelector(".popup_type_sanya");
const popupKuka = document.querySelector(".popup_type_kuka");
const popupAlan = document.querySelector(".popup_type_alan");

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

const popupThemeOpen = () => {
  openPopup(popupBob);
  openPopup(popupMax);
  openPopup(popupMusheg);
  openPopup(popupMiron);
  openPopup(popupSanya);
  openPopup(popupKuka);
  openPopup(popupAlan);
};

const popupThemeClose = () => {
  closePopup(popupBob);
  closePopup(popupMax);
  closePopup(popupMusheg);
  closePopup(popupMiron);
  closePopup(popupSanya);
  closePopup(popupKuka);
  closePopup(popupAlan);
};

function closePopupByClick(evt) {
  const isOverlay = evt.target.classList.contains("popup");
  const isCloseBtn = evt.target.classList.contains("popup__close");
  if (isOverlay || isCloseBtn) {
    closePopup(popupBob);
    closePopup(popupMax);
    closePopup(popupMusheg);
    closePopup(popupMiron);
    closePopup(popupSanya);
    closePopup(popupKuka);
    closePopup(popupAlan);
  }
}

popupBob.addEventListener("click", closePopupByClick);
openBob.addEventListener("click", () => openPopup(popupBob));
popupClose.addEventListener("click", () => closePopup(popupBob));

popupMax.addEventListener("click", closePopupByClick);
openMax.addEventListener("click", () => openPopup(popupMax));
popupClose.addEventListener("click", () => closePopup(popupMax));

popupMusheg.addEventListener("click", closePopupByClick);
openMusheg.addEventListener("click", () => openPopup(popupMusheg));
popupClose.addEventListener("click", () => closePopup(popupMusheg));

popupMiron.addEventListener("click", closePopupByClick);
openMiron.addEventListener("click", () => openPopup(popupMiron));
popupClose.addEventListener("click", () => closePopup(popupMiron));

popupSanya.addEventListener("click", closePopupByClick);
openSanya.addEventListener("click", () => openPopup(popupSanya));
popupClose.addEventListener("click", () => closePopup(popupSanya));

popupKuka.addEventListener("click", closePopupByClick);
openKuka.addEventListener("click", () => openPopup(popupKuka));
popupClose.addEventListener("click", () => closePopup(popupKuka));

popupAlan.addEventListener("click", closePopupByClick);
openAlan.addEventListener("click", () => openPopup(popupAlan));
popupClose.addEventListener("click", () => closePopup(popupAlan));
