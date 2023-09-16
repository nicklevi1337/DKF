'use strict';

let unit = [];
const element = [
   
    {
        img: 'images/051.png',
        title: 'Гипнотические макасины',
        count: 1,
    },
    {
        img: 'images/052.png',
        title: 'Ножик-хуежик',
        count: 1,

    },
    {
        img: 'images/053.png',
        title: 'Бронежилет ВДВ',
        count: 1,
    },
    {
        img: 'images/054.png',
        title: 'Очки для слежки',
    },
    {
        img: 'images/055.png',
        title: 'V.I.P для утех',
        count: 1,
    },
    {
        img: 'images/056.png',
        title: 'Повязка Рэмбо'
    },
    {
        img: 'images/057.png',
        title: 'Альманах Девственника',
        count: 1,
    },
    {
        img: 'images/058.png',
        title: 'Ремонтный набор',
        count: 1,
    },
    {
        img: 'images/059.png',
        title: 'Кольцо шокерной любви',
        count: 4,
    },
    {
        img: 'images/060.png',
       title: 'Меч Гаччиста',
        count: 5,
    },
    {
        img: 'images/061.png',
        title: 'Трусы Трапика',
        count: 1,
    },
    {
        img: 'images/062.png',
        title: 'Умная татуировка',
        count: 1,
    },
    {
        img: 'images/063.png',
        title: 'Плазменный дробовик',
        count: 2,
    },
   {
       img: 'images/064.png',
       title: 'Глитч-боли',
        count: 1,
    },
    {
        img: 'images/065.png',
        title: 'Брелок удачи'
    },
   {
        img: 'images/066.png',
       title: 'Полукаловая монетка',
       count: 1,
    },
    {
        img: 'images/067.png',
        title: 'Хачапури по-скуфски',
        count: 1,
    },
    {
        img: 'images/068.png',
        title: 'Генератор неприятностей',
        count: 1,
    },
    {
        img: 'images/069.png',
        title: 'Поддельные отпечатки пальцев',
        count: 1,
    },
    {
        img: 'images/070.png',
        title: 'Брелок неудачника',
        count: 1,
    },
    {
        img: 'images/071.png',
        title: 'Да не умер он!'
    },
    {
        img: 'images/072.png',
        title: 'Браслет взлома'
    },
    {
        img: 'images/073.png',
        title: 'Маска Анимешника',
        count: 1,
    },
    {
        img: 'images/074.png',
        title: 'Русская Рулетка',
        count: 2,
    },
    
    {
        img: 'images/075.png',
        title: 'Клинок Ассасина',
        
    },

    {
        img: 'images/076.png',
       title: 'Тайзер 3000',
       
    },
    {
        img: 'images/077.png',
        title: 'Всепоглощающий мульти-кастет',
        
    },
    {
        img: 'images/078.png',
        title: 'Военно-наркотический шприц "ZOV"',
         
    },
    {
        img: 'images/079.png',
        title: 'Китайский робот-убийца Сиаоми',
         
    },
    {
        img: 'images/080.png',
        title: 'Карта Взлома',
         
    },
    
    {
        img: 'images/081.png',
        title: 'Носки Боба',
        count: 1,
        
    },
    {
        img: 'images/082.png',
        title: 'Вирусный калькулятор',
        
    },
    {
        img: 'images/083.png',
        title: 'Ну купи, купи Старфилд',
        count: 1,
        
    },
    {
        img: 'images/084.png',
        title: 'Слежка корпораций',
        
    },
    {
        img: 'images/085.png',
        title: 'Засада',
        
    },
    {
        img: 'images/086.png',
        title: 'Добро пожаловать в прошлое',
        count: 2,
        
    },

    {
        img: 'images/006.png',
        title: 'Кефир вне времени',
        
    },
    {
        img: 'images/005.png',
        title: 'ИИ Октавия',
        
    },
    {
        img: 'images/008.png',
        title: 'Два по цене одного',
        
    },
    {
        img: 'images/010.png',
        title: 'Плавучий курс',
        
    },
    {
        img: 'images/011.png',
        title: 'Туз в рукаве',
        
    },
    {
        img: 'images/012.png',
        title: 'Телепорт обмена',
        
    },
    {
        img: 'images/013.png',
        title: 'Кредитный чип корпа',
        
    },
    {
        img: 'images/014.png',
        title: 'LMAO',
        
    },

    {
        img: 'images/015.png',
        title: 'Проверка на IQ',
        
    },
    {
        img: 'images/016.png',
        title: 'Еперный рот этого казино',
        
    },
    {
        img: 'images/017.png',
        title: 'Ой, извините',
        
    },
    {
        img: 'images/018.png',
        title: 'Кам Мунизм',
        
    },
    {
        img: 'images/019.png',
        title: 'Перстень религиозного культа',
        
    },
    {
        img: 'images/020.png',
        title: 'Кибер-сигареты Red Apple',
        
    },
    {
        img: 'images/021.png',
        title: 'Штаны Торопыги',
        
    },
    {
        img: 'images/022.png',
        title: 'Куб Мелстроя',
        
    },
    {
        img: 'images/023.png',
        title: 'Кнопки выбора',
        
    },
    {
        img: 'images/024.png',
        title: 'Обруч дополнительно реальности',
        
    },
    {
        img: 'images/027.png',
        title: 'Выбор Бумер',
        
    },
    {
        img: 'images/028.png',
        title: 'Выбор Зумер',
        
    },
    {
        img: 'images/030.png',
        title: 'Я здесь Закон',
        
    },
    {
        img: 'images/001.png',
        title: 'Мистер Президент',
        
    },
    {
        img: 'images/007.png',
        title: 'Интрига',
        
    },
    {
        img: 'images/009.png',
        title: 'Бгхагхский схрон',
        
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