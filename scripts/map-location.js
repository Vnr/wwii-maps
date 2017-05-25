/**
 * Класс для создания ссылки на карту.
 * @class
 * @name MapLocation
 * @param {ymaps.Map} map Экземпляр карты.
 * @param {MapLocationState} state Объект-состояние карты.
 */
 
 /*IE8 fix*/
(function(fn){
    if (!fn.map) fn.map=function(f){var r=[];for(var i=0;i<this.length;i++)if(this[i]!==undefined)r[i]=f(this[i]);return r}
    if (!fn.filter) fn.filter=function(f){var r=[];for(var i=0;i<this.length;i++)if(this[i]!==undefined&&f(this[i]))r[i]=this[i];return r}
})(Array.prototype);

function MapLocation(map, state) {
    this._map = map;
    this._state = state;
    this._freeze = false;
    this.events = new ymaps.event.Manager();

    map.events.add(['boundschange', 'typechange'], this._onMapStateChange, this);
}

/**
 * @private
 * @function
 */
MapLocation.prototype._onMapStateChange = function (e) {
    var oldState = this._state;

    if(this._freeze) {
        this._freeze = false;
    }
    else {
        this._state = new MapLocationState({
            center: (e.get('newCenter') || oldState.get('center')).map(MapLocationState.toFixedNumber),
            zoom: e.get('newZoom') != null ? e.get('newZoom') : oldState.get('zoom'),
            //type: e.get('newType') || oldState.get('type')
            type: e.get('target').getType() || oldState.get('type')
        });
        if (oldState.get('type') == this._state.get('type')) {
            this._state.set('path', oldState.get('path'));
        }
        /**
         * @event
         * @name ymaps.Map#statechange
         * @param {MapLocationState} oldState Предыдущее состояние карты.
         * @param {MapLocationState} newState Актуальное состояние карты.
         */
        this.events.fire('statechange', {
            oldState: oldState,
            newState: this._state
        });
    }
};

/**
 * Получение состояния карты.
 * @function
 * @name MapLocation.getState
 * @returns {MapLocationState} Состояние карты.
 */
MapLocation.prototype.getState = function () {
    return this._state;
};

/**
 * Выставить состояние карты.
 * @function
 * @name MapLocation.setState
 * @param {Object} data Данные состояния.
 * @param {Number[]} [data.center] Массив координат центра карты.
 * @param {Number} [data.zoom] Масштаб карты.
 * @param {String} [data.type] Тип карты.
 * @returns {MapLocation} Экземпляр класса для чайнинга.
 */
MapLocation.prototype.setState = function (data) {
    var map = this._map,
        state = this._state;

    // Не кидаем событие "statechange"
    this._freeze = true;

    // Если тип карты не изменился значит изменился центр или масштаб.
    if(data.type === state.get('type')) {
        map.setCenter(data.center, data.zoom);
        state
            .set('center', data.center)
            .set('zoom', data.zoom);
    }
    else {
        map.setType(data.type);
        state.set('type', data.type);
    }

    return this;
};

/**
 * Класс состояния карты.
 * @class
 * @name MapLocationState
 * @param {Object} data Данные состояния.
 */
function MapLocationState(data) {
    this._data = data;
}

/**
 * Геттер состояния.
 * @function
 * @name MapLocationState.get
 * @param {String} param Имя поля состояния.
 */
MapLocationState.prototype.get = function (param) {
    return this._data[param];
};

/**
 * Сеттер состояния.
 * @function
 * @name MapLocationState.set
 * @param {String} param Имя поля.
 * @param {String|Number|Number[]} value Значение поля.
 * @returns {MapLocationState} Экземпляр класса для чайнинга.
 */
MapLocationState.prototype.set = function (param, value) {
    if(value != null) {
        this._data[param] = value;
    }

    return this;
};

/**
 * Получение всех данных состояния.
 * @function
 * @name MapLocationState.getData
 * @returns {Object} Данные состояния.
 */
MapLocationState.prototype.getData = function () {
    return this._data;
};

/**
 * @function
 * @name MapLocationState.toString
 * @returns {String} Строковое представление состояния карты.
 */
MapLocationState.prototype.toString = function () {
    var data = this._data,
        params = [];

    for(var param in data) {
        if (data[param] != undefined) {  // не выводим в хэш неопределенные параметры
            params.push(encodeURI(param) + '=' + encodeURIComponent(data[param]));
        }
    }

    return params.join('&');
};

/**
 * Парсер строки запроса.
 * @static
 * @function
 * @name MapLocationState.fromString
 * @param {String} location Урл параметры карты.
 * @returns {MapLocationState} Экземпляр класса состояния.
 */
MapLocationState.fromString = function (location) {
    var params = {};
    
    location.slice(1).replace(/[^?&]+(?=&|$)/g, function (s) {
        var param = s.split('=');

        params[decodeURI(param[0])] = decodeURIComponent(param[1]);
    });
    
    return new MapLocationState({
        center: params.center ? 
		        	params.center.split(',').map(MapLocationState.toFixedNumber) : 
		        	undefined,
        zoom: 6 <= Number(params.zoom) && Number(params.zoom) <= 13 ? Number(params.zoom) : 12,
        //controls: ["rulerControl", "fullscreenControl", "zoomControl", "routeEditor"],
        type: params.type || 'wwii#4111ukr',
        path: params.path
    });
};

/**
 * Преобразование координат к числу фиксированной длины.
 * @static
 * @function
 * @name MapLocationState.toFixedNumber
 * @param {String|Number} i
 * @returns {Number} Число с 6-ю цифрами поле точки.
 */
MapLocationState.toFixedNumber = function (i) {
    return Number(i).toFixed(6);
};
