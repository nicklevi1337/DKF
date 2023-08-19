'use strict';

let unit = [];
const element = [
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
let selectedUnitKey = false;

const  list = $('.bob__inventory'),
    unitTemplate = $('<div class="unit"><img/><div class="count">1</div></div>'),
    controlIncrementCounter = $('<a/>', {
        text: '+',
        title: 'Увеличить кол-во зарядов/прочность',
        class: 'inc',
        href: '#',
        click: function () {
            const idx = $(this).closest('.unit').index();

            if (unit[idx].count) {
                unit[idx].count += 1;
            }
            else {
                unit[idx].count = 2;
            }
            unitUpdateDOM(idx);
            saveState(unit);

            return false;
        }
    }),
    controlDecrementCounter = $('<a/>', {
        text: '–',
        title: 'Уменьшить кол-во зарядов/прочность',
        class: 'dec',
        href: '#',
        click: function () {
            const idx = $(this).closest('.unit').index();

            if (unit[idx].count && unit[idx].count > 1) {
                unit[idx].count -= 1;
            }
            // кончились заряды
            else if (unit[idx].count === 1) {
                // пустая ячейка
                unit[idx].item = element[0]
            }
            unitUpdateDOM(idx);
            saveState(unit);

            return false;
        }
    }),
    controlInvert = $('<a/>', {
        text: '↑',
        title: 'Инвертировать',
        class: 'inversion',
        href: '#',
        click: function () {
            const idx = $(this).closest('.unit').index();

            unit[idx].inverted = !unit[idx].inverted;
            unitUpdateDOM(idx);
            saveState(unit);

            return false;
        }
    }),
    controlNotSlot = $('<input/>', {
        type: 'checkbox',
        title: 'Предмет, не занимающий слот в инвентаре',
        click: function (e) {
            e.stopPropagation();

            const idx = $(this).closest('.unit').index();

            unit[idx].isNotSlot = $(this).is(':checked');
            unitUpdateDOM(idx);
            saveState(unit);
        }
    }),
    controlDelete = $('<a/>', {
        text: '×',
        title: 'Удалить ячейку',
        class: 'remove',
        href: '#',
        click: function () {
            const $unit = $(this).closest('.unit'),
                idx = $unit.index();

            delete unit[idx];
            unit.splice(idx, 1);

            $unit.find(unitControlsTemplate).detach();
            $unit.remove();
            saveState(unit);

            return false;
        }
    }),
    unitControlsTemplate = $('<div class="controls"></div>')
        .append(controlDecrementCounter)
        .append(controlIncrementCounter)
        .append(controlInvert)
        .append(controlNotSlot)
        .append(controlDelete)
    ,
    addUnit = function () {
        const newUnit = unitTemplate.clone();
        list.append(newUnit);
        $('.count', newUnit).hide();

        newUnit.on('click', unitOnClick);
        newUnit.on('mouseenter', unitOnHover);
        newUnit.on('mouseleave', function () {
            $(this).find(unitControlsTemplate).detach()
        });
    },
    unitUpdateDOM = function (key) {
        if (!unit[key] || !unit[key].item) {
            return
        }

        const $unit = list.children('.unit').eq(key);

        $('img', $unit).attr({
            src: unit[key].item.img,
            title: unit[key].item.title
        });

        if (unit[key].count && unit[key].count > 1) {
            $('.count', $unit).show()
        }
        else {
            $('.count', $unit).hide()
        }
        $('.count', $unit).text(unit[key].count);

        if (unit[key].isNotSlot) {
            $unit.addClass('not-slot');
        }
        else {
            $unit.removeClass('not-slot');
        }

        if (unit[key].inverted) {
            $('img', $unit).addClass('inverted');
        }
        else {
            $('img', $unit).removeClass('inverted');
        }
    },
    selectUnit = function (key) {
        selectedUnitKey = key;

        const unit = $('.unit', list)
            .removeClass('active');

        if (typeof(key) === "number") {
            unit.eq(key).addClass('active');
        }
    },
    unitOnClick = function () {
        const $unit = $(this),
            currIndex = $unit.index()
        ;
        if (selector.is(':visible')) {
            if (selectedUnitKey === currIndex) {
                selector.hide();
                selectUnit(false);
            }
            else {
                selectUnit(currIndex);
            }
        }
        else {
            selector.show();
            selectUnit(currIndex);
        }
    },
    addUnitOnClick = function () {
        unit.push({});
        addUnit();
        saveState(unit);
    },
    unitOnHover = function () {
        const idx = $(this).index();

        controlNotSlot.prop('checked', Boolean(unit[idx].isNotSlot));

        $(this).append(unitControlsTemplate);
    },
    createUnit = function (unitArray) {
        for (let i in unitArray) {
            addUnit();
            unitUpdateDOM(i);
        }
    },
    getStorageKeySuffix = function () {
        return location.search.substring(1, 20);
    },
    saveState = function (unitArray) {
        localStorage.setItem('bob__inventory-' + getStorageKeySuffix(), JSON.stringify(unitArray));
    },
    loadState = function () {
        let result = [];

        try {
            result = JSON.parse(localStorage.getItem('bob__inventory-' + getStorageKeySuffix()));
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

        unit[selectedUnitKey] = {
            item: element[$itemKey],
            count: element[$itemKey].count || 1,
            isNotSlot: element[$itemKey].isNotSlot || false
        };
        unitUpdateDOM(selectedUnitKey);

        saveState(unit);
        selectUnit(false);
        selector.hide();
    },
    createSelector = function(element) {
        const list = $('ul', selector);
        for(let i in element) {
            list.append(
                $('<li/>', {
                    ['data-key']: i,
                    html: $('<img/>', {
                        src: element[i].img,
                        title: element[i].title
                    }),
                    click: selectorOnClick
                })
            )
        }
    }
;

$('.add-unit').on('click', addUnitOnClick);

unit = loadState();
console.log(unit);
createUnit(unit);
createSelector(element);





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