const dataSets = {
    items: [
        'Гипнотические макасины',
        'Ножик-хуежик',
        'Бронежилет ВДВ',
        ' Очки для слежки',
        'V.I.P для утех',
        ' Первый прототип экзоскелета CumShots',
        'Альманах Девственника',
        'Ремонтный набор',
        'Кольцо шокерной любви',
        'Меч Гаччиста',
        'Трусы Трапика',
        'Умная татуировка',
        'Плазменный дробовик',
        'Глитч-боли',
        'Брелок удачи',
        'Полукаловая монетка',
        'Хачапури по-скуфски',
        'Генератор неприятностей',
        'Поддельные отпечатки пальцев',
        'Брелок неудачника',
        'Да не умер он!',
        'Браслет взлома',
        'Маска Анимешника',
        'Русская Рулетка',
        'Клинок Ассасина ',
        'Тайзер 3000 ',
        'Всепоглощающий мульти-кастет',
        'Военно-наркотический шприц "ZOV"',
        'Китайский робот-убийца Сиаоми',
        'Карта Взлома',
        'Носки Боба',
        'Вирусный калькулятор',
        ' Ну купи, купи Старфилд',
        'Слежка корпораций',
        'Засада',
        'Добро пожаловать в прошлое',
    ],

    effects: [
        'Вето',
        'Я здесь Закон',
        'Выбор Бумер',
        'Выбор Зумер',
        'ИИ Октавия',
        'Кефир вне времени',
        'Интрига',
        'Два по цене одного',
        'Бгхагхский схрон',
        'Плавучий курс',
        'Туз в рукаве',
        'Телепорт обмена',
        'Кредитный чип корпа',
        'LMAO',
        'Проверка на IQ',
        'Еперный рот этого казино',
        'Ой, извините',
        'Кам Мунизм',
        'Перстень религиозного культа',
        'Кибер-сигареты Red Apple',
        'Штаны Торопыги',
        'Куб Мелстроя',
        ' Кнопки выбора',
        'Обруч дополнительно реальности',
    ],
    coin: [
        'Орёл',
        'Решка',
        'Орёл',
        'Решка',
        'Орёл',
        'Решка',
        'Орёл',
        'Решка',
        'Орёл',
        'Решка',
        'Ребро!',
    ],
    streamers: [
        'Alan',
        'Bob',
        'Erik',
        'Kuka',
        'Max',
        'Miron',
        'Musheg'
    ],
    buffs: [
        'Гипнотические макасины',
        'Бронежилет ВДВ',
        '  Очки для слежки',
        'V.I.P для утех',
        'Альманах Девственника',
        'Ремонтный набор',
        'Кольцо шокерной любви',
        'Хачапури по-скуфски',
        'Брелок удачи',
        'Поддельные отпечатки пальцев',
        'Да не умер он!',
        'Браслет взлома',
        'Маска Анимешника',
        'Умная татуировка',
    ],
    debuffs: [
        'Ножик-хуежик',
        'Первый прототип экзоскелета CumShots ',
        'Трусы Трапика',
        'Генератор неприятностей',
        'Брелок неудачника',
        'Русская Рулетка',
        'Носки Боба',
        'Вирусный калькулятор',
        ' Ну купи, купи Старфилд',
        'Слежка корпораций',
        'Засада',
        'Добро пожаловать в прошлое',
    ],
    
};
let currentDataSet = 'items',
    editedDataSets = {};
    



const editDialog = document.getElementById('dialog-edit'),
    editButton = document.getElementById('btn-edit'),
    editConfirmButton = editDialog.getElementsByClassName('apply')[0],
    editOptions = editDialog.getElementsByClassName('options')[0],
    editPresets = editDialog.getElementsByClassName('presets')[0],
    optionClick = function (option, checked) {
        editedDataSets[currentDataSet][option] = checked;
    },
    generateOptions = function (dataObject) {
        let options = '';
        for (let i in dataObject) {
            options += `<label><input type="checkbox" onchange="optionClick('${i}', this.checked)" ${dataObject[i] ? 'checked' : ''} />${i}</label><br />`;
        }

        return options;
    },
    resetEditedDataSet = function () {
        editedDataSets[currentDataSet] = Object.fromEntries(dataSets[currentDataSet].map(v => v).sort().map(v => [v, true]));
    },
    editedDataToArray = function () {
        let result = [];

        for (let [key, value] of Object.entries(editedDataSets[currentDataSet])) {
            if (value) {
                result.push(key)
            }
        }

        return result;
    }
;

editButton.addEventListener('click', function () {
    if (currentDataSet === 'custom') {
        p5Instance.mouseDragEnable(false);
        customDialog.style.display = 'block';

        return;
    }

    editDialog.style.display = 'block';
    p5Instance.mouseDragEnable(false);

    editPresets.innerHTML = '';
    editPresets.append(...presets.getNodes(currentDataSet));
    editOptions.innerHTML = generateOptions(editedDataSets[currentDataSet]);
});
editConfirmButton.addEventListener('click', function () {
    editDialog.style.display = 'none';
    p5Instance.mouseDragEnable();

    p5Instance.setData(editedDataToArray());
});

class Preset {
    constructor(title, disabledEntries, isDefault) {
        this._title = title;
        this._disabledEntries = disabledEntries;
        this._isDefault = Boolean(isDefault);
    }

    get isDefault() {
        return this._isDefault;
    }

    get domNode() {
        const el = document.createElement('a');

        el.setAttribute('href', '#');
        el.appendChild(document.createTextNode(this._title));
        el.addEventListener('click', this.handleClick.bind(this));

        return el;
    }

    handleClick() {
        resetEditedDataSet();

        for(const i in this._disabledEntries) {
            if (editedDataSets[currentDataSet][this._disabledEntries[i]]) {
                editedDataSets[currentDataSet][this._disabledEntries[i]] = false;
            }
        }

        editOptions.innerHTML = generateOptions(editedDataSets[currentDataSet]);

        return false;
    }
}

class PresetAll extends Preset {
    constructor(isDefault) {
        super('Выбрать всё', [], isDefault);
    }
}

class PresetWithoutSpecialRolls extends Preset {
    constructor(isDefault) {
        super(
            'Без спецроллов',
            [
                'Чуйка на говно',
                'Выбор Бумера',
                'Выбор Зумера',
                'Чат здесь закон',
                'Я здесь закон',
                'Never Lucky',
            ],
            isDefault
        );
    }
}

class Presets {
    constructor() {
        this._presets = {
            // inventory: [
             //   new PresetAll(),
            // ],
            effects: [
                new PresetAll(),
                new PresetWithoutSpecialRolls(true),
            ],
            debuffs: [
                new PresetAll(),
                new PresetWithoutSpecialRolls(true),
            ],
            buffs: [
                new PresetAll(),
                new PresetWithoutSpecialRolls(true),
            ],
            streamers: [
                new PresetAll(),
            ],
        };
    }

    hasPreset(dataSetKey) {
        return !!this._presets[dataSetKey];
    }

    getNodes(dataSetKey) {
        let result = [];

        for(const i in this._presets[dataSetKey]) {
            if (i % 2) {
                result.push(document.createTextNode(', '));
            }
            result.push(this._presets[dataSetKey][i].domNode);
        }

        return result;
    }

    applyDefaults(dataSetKey) {
        for(const i in this._presets[dataSetKey]) {
            if (this._presets[dataSetKey][i].isDefault) {
                this._presets[dataSetKey][i].handleClick();
            }
        }
    }
}

const presets = new Presets;

function getImageURI(index) {
    let result = '../items/images/000.png',
        offset = 0
    ;
    switch (currentDataSet) {
        case "items":
            offset = 50;
        case "effects":
            result = '../items/images/0' + ('0' + (index+1 + offset)).slice(-2) + '.png';
            break;
            case "buffs":
                result = '../items/images/00' + ('0' + (index+1 + offset)).slice(-2) + '.png';
            break;

        case "debuffs":
            const mapping = [
                52,
                56,
                61,
                68,
                70,
                74,
                81,
                82,
                83,
                84,
                85,
                86,
            ];
            result = '../items/images/0' + ('0' + (mapping[index])).slice(-2) + '.png';
            break;

        case "coin":
            result = '../images/coin-obverse-20.png';
            if (index === 1) {
                result = '../images/coin-reverse-20.png';
            }
            if (index === 10) {
                result = '../images/coin-gurt.png';
            }
            break;

        case "streamers":
            result = './images/'+ dataSets[currentDataSet][index] +'.png';
            break;
    }

    return result;
}


const p5Instance = new p5(wheelSketch);

p5Instance.onAfterSetup = function () {
    p5Instance.setVideos([
        ['videos/учит крутить рулём под phonk.mp4', 5],
        'videos/Папич.mp4',
        ['videos/Putin walking meme (Full version).mp4', 32],
        ['videos/JOJO\'S BIZARRE MAKEUP TUTORIAL.mp4', 6],
        ['videos/Пузантос - Бумаги [Morrowind].mp4', 129],
        ['videos/Мэддисон - Shooting Stars.mp4', 13],
        ['videos/All Star but they don\'t stop coming pitch corrected.mp4', 20],
        ['videos/Pinoki - Pingana (Havana by Camila Cabello ft. Young Thug Remix).mp4', 54],
        ['videos/Noisestorm - Crab Rave (Official Music Video).mp4', p5Instance.random([75, 137])],
        'videos/14278244937910.webm',
        'videos/14686000376951.webm',
        'videos/[Re-upload] [1080p] HONK HONK.mp4',
        'videos/Pablo.mp4',
        'videos/CHIKA VIBES   Kaguya-sama Love is War.mp4',
        'videos/best Chika meme ever   anime characters in Chika dance MV.mp4',
        'videos/SIGMA.mp4',
        'videos/RESPECT.mp4',
        'videos/ГОЙДА.mp4',
        'videos/Мэддисон дрифтит под Фонк.mp4',
        'videos/01.mp4',
        'videos/02.mp4',
        'videos/03.mp4',
        'videos/04.mp4',
        'videos/06.mp4',
        'videos/08.mp4',
        'videos/09.mp4',
        'videos/10.mp4',
        'videos/12.mp4',
        'videos/13.mp4',
        'videos/14.mp4',
        'videos/16.mp4',
        'videos/17.mp4',
        'videos/18.mp4',
        'videos/19.mp4',
        'videos/20.mp4',
        'videos/21.mp4',
        'videos/22.mp4',
        'videos/23.mp4',
        'videos/24.mp4',
        'videos/25.mp4',
        'videos/26.mp4',
        'videos/27.mp4',
        'videos/28.mp4',
        'videos/29.mp4',
        'videos/30.mp4',
        'videos/31.mp4',
        'videos/32.mp4',
    ]);
};

const image = document.querySelector('#item-image img'); 
p5Instance.onSelectItem = function(data, selectedKey) { 
    if (dataSets[currentDataSet]) { 
        image.src = getImageURI(dataSets[currentDataSet].indexOf(data[selectedKey])); 
    } 
    else { 
        image.src = '../items/images/000.png'; 
    } 
}; 

const customDialog = document.getElementById('custom-list'),
    customTextarea = customDialog.getElementsByTagName('textarea')[0],
    customButton = customDialog.getElementsByTagName('button')[0]
;

customButton.addEventListener('click', function () {
    customDialog.style.display = 'none';

    p5Instance.setData(customTextarea.value.split('\n'));
    p5Instance.mouseDragEnable();
});

let radios = document.querySelectorAll('[name="list"]');
for(let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('click', function () {
        currentDataSet = this.value;

        if (this.value === 'custom') {
            p5Instance.mouseDragEnable(false);
            customDialog.style.display = 'block';

            return;
        }

        customDialog.style.display = 'none';
        p5Instance.mouseDragEnable();

        if (presets.hasPreset(currentDataSet)) {
            if (!editedDataSets[currentDataSet]) {
                resetEditedDataSet();
                presets.applyDefaults(currentDataSet);
            }

            p5Instance.setData(editedDataToArray());
            editButton.removeAttribute('disabled');
        }
        else {
            p5Instance.setData(dataSets[currentDataSet]);
            editButton.setAttribute('disabled', 'disabled');
        }
    });

    // Выбираем начальный вариант при загрузке страницы
    if (radios[i].hasAttribute('checked')) {
        radios[i].dispatchEvent(new Event('click'));
    }
}


/*

'Облизанный ободок унитаза',
        'Ловушка Джокера',
        'Знаток выгоды',
        'Стримбернар',
        'В бухгалтерии все перепутали',
        'Скупщик гречи',
        'Грабли',
        'Выключенный ОБС',
        'ОПЯТЬ НДИДИ',
        'Шуточное колесо',
        'Вор',
        'Чат выбирает',
        'Ультрамошна',
        'Суд присяжных',
        'Тест на вирус',
        'Успешная вылазка',
        'Штаны на 40 хрывень',
        'ВзрывОчка',
        'Залутанная локация',
        'Конченное событие',
        'Комбо неудач',
        'Дух Рэмбо',
        'Настоящий бунтарь',
        'Чуйка на говно',
        'Не та позиция тебе выпала, стремлер',
        'Выбор Бумера',
        'Выбор Зумера',
        'Чат здесь закон',
        'Я здесь закон',
        'Три топора',
        'Сраное колдунье',
        'Два по цене одного',
        'Интрига',
        'РокировОЧКА',
        'По магазинам с чатом',
        'Открытая пачка сухариков',
        'Сырое мясо',
        'Проблев',
        'Кефир с замазанным сроком годности',
        'Таблетки без названия',
        'Сладкий рулет ХПГ',
        'Подземное убежище',
        'Аттракцион невиданной щедрости',
        'Never Lucky',
        'Сахарные бомбы',
        'Наелся и спит',
        'Предательский столб',
        'Падение пиццианской башни',
        'Полное свинство',





        buffs: [
        'Успешная вылазка',
        'Облизанный ободок унитаза',
        'Скупщик гречи',
        'ОПЯТЬ НДИДИ',
        'Вор',
        'Чат выбирает',
        'Тест на вирус',
        'Штаны на 40 хрывень',
        'Залутанная локация',
        'Конченное событие',
        'Комбо неудач',
        'Дух Рэмбо',
        'Не та позиция тебе выпала, стремлер',
        'Чуйка на говно',
        'Три топора',
        'Аттракцион невиданной щедрости',
        'Предательский столб',
        'Падение пиццианской башни',
    ]

*/