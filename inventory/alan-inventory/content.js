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


// для таблицы
const openAddListAl =  document.querySelector('.add-al');
const popupAddDay =  document.querySelector('.popup__input_type_day');
const popupAddPlay =  document.querySelector('.popup__input_type_play');
const popupAddLink =  document.querySelector('.popup__link');
const popupImgLink =  document.querySelector('.popup__link_img');
const popupAddComm =  document.querySelector('.popup__input_type_comm');
const formElementAdd = document.querySelector(".popup__container_type_stats");
const formSaveAdd = document.querySelector(".popup__form_type_stats");
const deleteAddBtn = document.querySelector(".list-al__check-deletebtn");
const popupAddList =  document.querySelector('.popup_type_stats');
const popupCloseBtnAdd = document.querySelector(".popup__close_type_stats");
const popupSaveBtnAdd = document.querySelector(".popup__save-btn");
const listTemplateAl = document.getElementById("list-al-template");
const listContainerAl = document.querySelector(".list-al");





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

const handleAddAlFormSubmit = (event) => {
    event.preventDefault();
    const id = popupAddList.dataset.editingId || Date.now(); // Если редактируем, используем старый id
    const name = popupAddDay.value;
    const link = popupAddLink.value;
    const title = popupAddPlay.value;
    const img = popupImgLink.value;
    const comment = popupAddComm.value;

    const infoAlList = {
        id,
        name,
        link,
        title,
        img,
        comment
    };

  // Проверяем, редактируем ли мы существующий элемент
  const existingIndex = savedAlLists.findIndex((list) => list.id == id);

  if (existingIndex !== -1) {
      // Если элемент уже существует, обновляем его
      savedAlLists[existingIndex] = infoAlList;
  } else {
      // Если это новый элемент, добавляем его в массив
      savedAlLists.push(infoAlList);
  }

  saveListsToLocalAlStorage(savedAlLists);


  // 🔥 Перерисовка списка после редактирования
  listContainerAl.innerHTML = ""; // Очищаем контейнер перед рендерингом
  savedAlLists.forEach((list) => {
      const element = createListAlElement(list);
      renderAddAlElement(element);
  });

  closePopup(popupAddList);
  event.target.reset();
  delete popupAddList.dataset.editingId; // Удаляем ID после редактирования
};

function loadListsFromLocalAlStorage() {
    const storedAlLists = localStorage.getItem('alLists');
    return storedAlLists ? JSON.parse(storedAlLists) : [];
}

let savedAlLists = loadListsFromLocalAlStorage();

function saveListsToLocalAlStorage(lists) {
    localStorage.setItem('alLists', JSON.stringify(lists));
}

// massiv
const createListAlElement = (listAlData) => {
    const listElementAl = listTemplateAl.content.querySelector(".list-al__check").cloneNode(true);
    const listNameAl = listElementAl.querySelector(".number__subtitle_al");
    const listLinkAl = listElementAl.querySelector(".mission__icon_al");
    const listTitleAl = listElementAl.querySelector(".game-text__icon_al");
    const listImgAl = listElementAl.querySelector(".status__text_al");
    const listCommAl = listElementAl.querySelector(".comment__text_al");
    const listDeleteBtnAl = listElementAl.querySelector(".list-al__check-deletebtn");
    const listEditBtnAL = listElementAl.querySelector(".list-al__check-editbtn"); // Кнопка редактирования




    listNameAl.textContent = listAlData.name;
    listLinkAl.src = listAlData.link;
    listLinkAl.alt = listAlData.name;
    listTitleAl.textContent = listAlData.title;
    listImgAl.src = listAlData.img;
    listImgAl.alt = listAlData.name;
    listCommAl.textContent = listAlData.comment;

    const handleAlDelete = () => {
        listElementAl.remove();
        const index = savedAlLists.findIndex((list) => list.name === listAlData.name);
        if (index !== -1) {
            savedAlLists.splice(index, 1); // Удаляем список из массива savedLists
            saveListsToLocalAlStorage(savedAlLists); // Обновляем данные в локальном хранилище
        }
    };

    const handleEditAl = () => {
        popupAddList.dataset.editingId = listAlData.id; // Запоминаем ID
        // Заполняем попап данными текущего элемента
        popupAddDay.value = listAlData.name;
        popupAddLink.value = listAlData.link;
        popupAddPlay.value = listAlData.title;
        popupImgLink.value = listAlData.img;
        popupAddComm.value = listAlData.comment;

        // Открываем попап
        openPopup(popupAddList);

        // Обработчик для сохранения изменений
        const handleSaveEditAl = (event) => {
            event.preventDefault();

         

            // Обновляем данные элемента
            listAlData.name = popupAddDay.value;
            listAlData.link = popupAddLink.value;
            listAlData.title = popupAddPlay.value;
            listAlData.img = popupImgLink.value;
            listAlData.comment = popupAddComm.value;

            // Обновляем отображение элемента
            listNameAl.textContent = listAlData.name;
            listLinkAl.src = listAlData.link;
            listTitleAl.textContent = listAlData.title;
            listImgAl.src = listAlData.img;
            listCommAl.textContent = listAlData.comment;

            // Сохраняем изменения в локальном хранилище
            saveListsToLocalAlStorage(savedAlLists);

            // Закрываем попап
            closePopup(popupAddList);

            // Удаляем обработчик, чтобы он не накладывался при повторном редактировании
            formSaveAdd.removeEventListener("submit", handleSaveEditAl);
        };

        formSaveAdd.addEventListener("submit", handleSaveEditAl);
    };

    listDeleteBtnAl.addEventListener("click", handleAlDelete);
    listEditBtnAL.addEventListener("click", handleEditAl); // Добавляем обработчик для кнопки редактирования

    return listElementAl;
};

const renderAddAlElement = (listElementAl) => {
    listContainerAl.append(listElementAl);
};

document.addEventListener('DOMContentLoaded', () => {
    savedAlLists.forEach((list) => {
        const element = createListAlElement(list);
        renderAddAlElement(element);
    });
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

openAddListAl.addEventListener("click", () => openPopup(popupAddList));
popupCloseBtnAdd.addEventListener("click", () => closePopup(popupAddList));
popupAddList.addEventListener("click", closePopupAddByClick);
formElementAdd.addEventListener("submit", handleAddAlFormSubmit); 
formSaveAdd.addEventListener("click", closePopupAddByClick);
