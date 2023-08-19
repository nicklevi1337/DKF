'use strict';

let cells = [];
const items = [
    {
        img: 'images/000.png',
        title: 'Пустая ячейка'
    },
    {
        img: 'images/051.png',
        title: 'Читерский кубик',
        count: 1,
    },
    {
        img: 'images/052.png',
        title: 'Кубик хуюбик',
        count: 1,

    },
    {
        img: 'images/053.png',
        title: 'Туалетка',
        count: 1,
    },
    {
        img: 'images/054.png',
        title: 'Очки EZ',
    },
    {
        img: 'images/055.png',
        title: 'Свиток рерола',
        count: 1,
    },
    {
        img: 'images/056.png',
        title: 'Повязка Рэмбо'
    },
    {
        img: 'images/057.png',
        title: 'Бесконечная Манга',
        count: 1,
    },
    {
        img: 'images/058.png',
        title: 'Ремонтный набор',
        count: 1,
    },
    {
        img: 'images/059.png',
        title: 'Парные кольца',
        count: 4,
    },
    {
        img: 'images/060.png',
       title: 'Рука для fisting',
        count: 5,
    },
    {
        img: 'images/061.png',
        title: 'Чулки Гилтикуса',
        count: 1,
    },
    {
        img: 'images/062.png',
        title: 'Четырехлистный клевер',
        count: 1,
    },
    {
        img: 'images/063.png',
        title: 'Тухлая шаурма',
        count: 2,
    },
   {
       img: 'images/064.png',
       title: 'Чокер боли',
        count: 1,
    },
    {
        img: 'images/065.png',
        title: 'Наперсток удачи'
    },
   {
        img: 'images/066.png',
       title: 'Полукаловая монетка',
       count: 1,
    },
    {
        img: 'images/067.png',
        title: 'Шоколадный Рулет',
        count: 1,
    },
    {
        img: 'images/068.png',
        title: 'Штрафная квитанция',
        count: 1,
    },
    {
        img: 'images/069.png',
        title: 'Стул мамы Мерфи',
        count: 1,
    },
    {
        img: 'images/070.png',
        title: 'Дырявый парашют',
        count: 1,
    },
    {
        img: 'images/071.png',
        title: 'Мошнаторы Здесь? - На месте!'
    },
    {
        img: 'images/072.png',
        title: 'Плюсовый блокнот'
    },
    {
        img: 'images/073.png',
        title: 'Корона короля петучей',
        count: 1,
    },
    {
        img: 'images/074.png',
        title: 'Бомба',
        count: 2,
    },
    
    {
        img: 'images/075.png',
        title: 'Мистер Ржавчик',
        
    },

    {
        img: 'images/076.png',
       title: 'Грабли',
       
    },
    {
        img: 'images/077.png',
        title: 'Всепоглощающий свин',
        
    },
    {
        img: 'images/078.png',
        title: 'Липкая жижа',
         
    },
    {
        img: 'images/079.png',
        title: 'Комп с Алика',
         
    },
    {
        img: 'images/080.png',
        title: 'Вор Трусов',
         
    },
    
    {
        img: 'images/081.png',
        title: 'Увы',
        
    },
    {
        img: 'images/082.png',
        title: 'Часовой рост',
        
    },
    
];
let selectedCellKey = false;

const armory = $('.armory'),
    cellTemplate = $('<div class="cell"><img/><div class="count">1</div></div>'),
    controlIncrementCounter = $('<a/>', {
        text: '+',
        title: 'Увеличить кол-во зарядов/прочность',
        class: 'inc',
        href: '#',
        click: function () {
            const idx = $(this).closest('.cell').index();

            if (cells[idx].count) {
                cells[idx].count += 1;
            }
            else {
                cells[idx].count = 2;
            }
            cellUpdateDOM(idx);
            saveState(cells);

            return false;
        }
    }),
    controlDecrementCounter = $('<a/>', {
        text: '–',
        title: 'Уменьшить кол-во зарядов/прочность',
        class: 'dec',
        href: '#',
        click: function () {
            const idx = $(this).closest('.cell').index();

            if (cells[idx].count && cells[idx].count > 1) {
                cells[idx].count -= 1;
            }
            // кончились заряды
            else if (cells[idx].count === 1) {
                // пустая ячейка
                cells[idx].item = items[0]
            }
            cellUpdateDOM(idx);
            saveState(cells);

            return false;
        }
    }),
    controlInvert = $('<a/>', {
        text: '↑',
        title: 'Инвертировать',
        class: 'inversion',
        href: '#',
        click: function () {
            const idx = $(this).closest('.cell').index();

            cells[idx].inverted = !cells[idx].inverted;
            cellUpdateDOM(idx);
            saveState(cells);

            return false;
        }
    }),
    controlNotSlot = $('<input/>', {
        type: 'checkbox',
        title: 'Предмет, не занимающий слот в инвентаре',
        click: function (e) {
            e.stopPropagation();

            const idx = $(this).closest('.cell').index();

            cells[idx].isNotSlot = $(this).is(':checked');
            cellUpdateDOM(idx);
            saveState(cells);
        }
    }),
    controlDelete = $('<a/>', {
        text: '×',
        title: 'Удалить ячейку',
        class: 'remove',
        href: '#',
        click: function () {
            const $cell = $(this).closest('.cell'),
                idx = $cell.index();

            delete cells[idx];
            cells.splice(idx, 1);

            $cell.find(cellControlsTemplate).detach();
            $cell.remove();
            saveState(cells);

            return false;
        }
    }),
    cellControlsTemplate = $('<div class="controls"></div>')
        .append(controlDecrementCounter)
        .append(controlIncrementCounter)
        .append(controlInvert)
        .append(controlNotSlot)
        .append(controlDelete)
    ,
    addCell = function () {
        const newCell = cellTemplate.clone();
        armory.append(newCell);
        $('.count', newCell).hide();

        newCell.on('click', cellOnClick);
        newCell.on('mouseenter', cellOnHover);
        newCell.on('mouseleave', function () {
            $(this).find(cellControlsTemplate).detach()
        });
    },
    cellUpdateDOM = function (key) {
        if (!cells[key] || !cells[key].item) {
            return
        }

        const $cell = armory.children('.cell').eq(key);

        $('img', $cell).attr({
            src: cells[key].item.img,
            title: cells[key].item.title
        });

        if (cells[key].count && cells[key].count > 1) {
            $('.count', $cell).show()
        }
        else {
            $('.count', $cell).hide()
        }
        $('.count', $cell).text(cells[key].count);

        if (cells[key].isNotSlot) {
            $cell.addClass('not-slot');
        }
        else {
            $cell.removeClass('not-slot');
        }

        if (cells[key].inverted) {
            $('img', $cell).addClass('inverted');
        }
        else {
            $('img', $cell).removeClass('inverted');
        }
    },
    selectCell = function (key) {
        selectedCellKey = key;

        const cells = $('.cell', armory)
            .removeClass('active');

        if (typeof(key) === "number") {
            cells.eq(key).addClass('active');
        }
    },
    cellOnClick = function () {
        const $cell = $(this),
            currIndex = $cell.index()
        ;
        if (selector.is(':visible')) {
            if (selectedCellKey === currIndex) {
                selector.hide();
                selectCell(false);
            }
            else {
                selectCell(currIndex);
            }
        }
        else {
            selector.show();
            selectCell(currIndex);
        }
    },
    addCellOnClick = function () {
        cells.push({});
        addCell();
        saveState(cells);
    },
    cellOnHover = function () {
        const idx = $(this).index();

        controlNotSlot.prop('checked', Boolean(cells[idx].isNotSlot));

        $(this).append(cellControlsTemplate);
    },
    createCells = function (cellsArray) {
        for (let i in cellsArray) {
            addCell();
            cellUpdateDOM(i);
        }
    },
    getStorageKeySuffix = function () {
        return location.search.substring(1, 20);
    },
    saveState = function (cellsArray) {
        localStorage.setItem('armory-' + getStorageKeySuffix(), JSON.stringify(cellsArray));
    },
    loadState = function () {
        let result = [];

        try {
            result = JSON.parse(localStorage.getItem('armory-' + getStorageKeySuffix()));
        } catch (e) {
            console.error('Loading state', e);
        }

        if (!result || !result.length) {
            result = [
                {},
                {},
                {},
            ];
        }

        return result;
    },
    selector = $('.selector'),
    selectorOnClick = function () {
        const $itemKey = $(this).data('key');

        cells[selectedCellKey] = {
            item: items[$itemKey],
            count: items[$itemKey].count || 1,
            isNotSlot: items[$itemKey].isNotSlot || false
        };
        cellUpdateDOM(selectedCellKey);

        saveState(cells);
        selectCell(false);
        selector.hide();
    },
    createSelector = function(items) {
        const list = $('ul', selector);
        for(let i in items) {
            list.append(
                $('<li/>', {
                    ['data-key']: i,
                    html: $('<img/>', {
                        src: items[i].img,
                        title: items[i].title
                    }),
                    click: selectorOnClick
                })
            )
        }
    }
;

$('.add-cell').on('click', addCellOnClick);

cells = loadState();
console.log(cells);
createCells(cells);
createSelector(items);





/*

  {
        img: 'images/01.png',
        title: 'Силовая броня (Корона короля петучей, Щit, Одноразовые перчатки)',
        count: 2,
        isNotSlot: true
    },
    {
        img: 'images/02.png',
        title: 'Костюм мудреца (Порошок прозрения, хакерский компьютер, Жилетка Вассермана)',
        count: 3,
        isNotSlot: true
    },
    {
        img: 'images/03.png',
        title: 'Костюм "Элегантный рекетир" (Наперсток удачи, сексуальные чулки, Рука для фистинга имени Билли Херрингтона)',
        count: 3,
        isNotSlot: true
    },
    {
        img: 'images/04.png',
        title: 'Костюм "Исследователь Пустошей" (Набор выживальщика, Комбинезон химзащиты, Крышка от мусорного бака)',
        count: 3,
        isNotSlot: true
    },
    {
        img: 'images/05.png',
        title: 'Рейдерские лохмотья (Шиш-Кебаб, Кукла вуду, Альпинистский трос)',
        count: 2,
        isNotSlot: true
    },


*/