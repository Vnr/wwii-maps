ymaps.ready(function() {
    document.getElementById('loading').style.display='none';

/////////////////////////Layers define//////////////////////////////
    yaskeleton = function() {
        //http://lrs.maps.yandex.net/tiles/?l=grd&v=1.0&%c
        return new ymaps.Layer('http://vec0%d.maps.yandex.net/tiles?l=skl&%c&lang=ru_RU', {
            zIndex: 1000,
            //projection: ymaps.projection.sphericalMercator,
            tileTransparent: true
        });
    };
    ymaps.layer.storage.add('my#skeleton', yaskeleton);
    
    
    yamapL = function() {
        return new ymaps.Layer('http://vec0%d.maps.yandex.net/tiles?l=map&%c&lang=ru_RU', {
            tileTransparent: true
        });
    };
    ymaps.layer.storage.add('yamapL', yamapL);
    ymaps.mapType.storage.add('yamap', new ymaps.MapType('Yandex.Карта', ['yamapL']));
    
    
    yasatL = function() {
        layer =  new ymaps.Layer('http://sat0%d.maps.yandex.net/tiles?l=sat&%c&lang=ru_RU', {
            tileTransparent: true
        });
        layer.getZoomRange = function () {
            return ymaps.vow.resolve([7, 19]);
        };
        return layer;
    };
    ymaps.layer.storage.add('yasatL', yasatL);
    ymaps.mapType.storage.add('yasat', new ymaps.MapType('Yandex.Спутник', ['yasatL']));


    var layerOSM = function() {
        var layer = new ymaps.Layer('http://b.tile.openstreetmap.org/%z/%x/%y.png', {
            projection: ymaps.projection.sphericalMercator
        });
        layer.getCopyrights = function() {
            return ymaps.vow.resolve('© OpenStreetMap contributors, CC-BY-SA | ');
        };
        return layer;
    };
    ymaps.layer.storage.add('layerOSM', layerOSM);
    ymaps.mapType.storage.add('openstreet#map', new ymaps.MapType('Openstreetmap', ['layerOSM']));


    var googleSatL = function() {
        return new ymaps.Layer('http://khm%d|2.googleapis.com/kh?v=702&hl=ru-RU&%c', {
            projection: ymaps.projection.sphericalMercator,
            tileTransparent: false
        });
    };
    ymaps.layer.storage.add('google#satL', googleSatL);
    ymaps.mapType.storage.add('google#sat', new ymaps.MapType('Google.Спутник', ['google#satL']));


//        var googleMapL = function() {
//            return new ymaps.Layer('http://mt0.google.com/vt/lyrs=m@176000000&hl=ru&%c', {
//                projection: ymaps.projection.sphericalMercator,
//                tileTransparent: false
//            });
//        };
//        var googleMap = new ymaps.MapType('Google map', [googleMapL]);
//        ymaps.mapType.storage.add('google#map', googleMap);


    var shubertL = function() {
        var layer =  new ymaps.Layer('https://vnr.github.io/aprmaps/img/shubert/Z%z/%y/%x.jpg', {
            projection: ymaps.projection.sphericalMercator,
            tileTransparent: true
        });
        layer.getZoomRange = function () {
            return ymaps.vow.resolve([8, 13]);
        };
        return layer;
    };
    ymaps.layer.storage.add('shubertL', shubertL);
    ymaps.mapType.storage.add('shubert', new ymaps.MapType('Карта Шуберта (1860)', ['shubertL']));
    
    
    var genshtabL = function() {
        var layer =  new ymaps.Layer('https://vnr.github.io/wwii-maps/maps/genshtab_500m/Z%z/%y/%x.png', {
            projection: ymaps.projection.sphericalMercator,
            tileTransparent: true
        });
        layer.getZoomRange = function () {
            return ymaps.vow.resolve([8, 14]);
        };
        return layer;
    };
    ymaps.layer.storage.add('genshtabL', genshtabL);
    ymaps.mapType.storage.add('genshtab', new ymaps.MapType('Генштаб 500м (1982)', ['genshtabL']));


     var genshtab1kL = function() {
        var layer =  new ymaps.Layer('https://vnr.github.io/wwii-maps/maps/genshtab_1k/Z%z/%y/%x.jpg', {
            projection: ymaps.projection.sphericalMercator,
            tileTransparent: true
        });
        layer.getZoomRange = function () {
            return ymaps.vow.resolve([8, 14]);
        };
        return layer;
    };
    ymaps.layer.storage.add('genshtab1kL', genshtab1kL);
    ymaps.mapType.storage.add('genshtab1k', new ymaps.MapType('Генштаб 1км (1982)', ['genshtab1kL']));

///////////////////////////////////////////////////////////////////////////////////////////

    var proryv2L = function() {
        var layer = new ymaps.Layer('https://vnr.github.io/wwii-maps/maps/burcevo/Z%z/%y/%x.png', {
//      var layer = new ymaps.Layer('https://vnr.github.io/aprmaps/img/wwii-burzevo/Z%z/%y/%x.png', {
            projection: ymaps.projection.sphericalMercator,
            tileTransparent: true
        });
        layer.getCopyrights = function() {
            return ymaps.vow.resolve('© Courtesy of <a href="http://pamyat-naroda.ru" target="_blank">Память народа</a> | ');
        };
        layer.getZoomRange = function () {
            //var promise = new ymaps.util.Promise();
            //return promise.resolve([10, 14]);
              return ymaps.vow.resolve([8, 13]);
        };
        return layer;
    };
    ymaps.layer.storage.add('wwii#proryv2L', proryv2L);
    var proryv2M = new ymaps.MapType('1941-12-01 Бурцевский прорыв (208-0002511-0230)', ['wwii#proryv2L']);
    ymaps.mapType.storage.add('wwii#proryv2', proryv2M);
    
    
    var wwii411119L = function() {
            var layer = new ymaps.Layer('https://vnr.github.io/wwii-maps/maps/1941-11-19/Z%z/%y/%x.png', {
            projection: ymaps.projection.sphericalMercator,
            tileTransparent: true
        });
        layer.getCopyrights = function() {
            return ymaps.vow.resolve('© Courtesy of <a href="http://pamyat-naroda.ru" target="_blank">Память народа</a> | ');
        };
        layer.getZoomRange = function () {
            return ymaps.vow.resolve([7, 13]);
        };
        return layer;
    };
    ymaps.layer.storage.add('wwii#411119', wwii411119L)
    var wwii411119M = new ymaps.MapType('Карта положения войск фронта 16-19.11.1941 г. (208-2511-541)', ['wwii#411119']);
    ymaps.mapType.storage.add('wwii#411119', wwii411119M); //ссылка!
    
    
   var wwii4111ukrL = function() {
        var layer = new ymaps.Layer('https://vnr.github.io/wwii-maps/maps/1941-11-ukr/z%z/%y/%x.png', { 
        //var layer = new ymaps.Layer('https://vnr.github.io/aprmaps/img/wwii-ukrep/Z%z/%y/%x.png', {
            projection: ymaps.projection.sphericalMercator,
            tileTransparent: true
        });
        layer.getCopyrights = function() {
            return ymaps.vow.resolve('© Courtesy of <a href="http://pamyat-naroda.ru" target="_blank">Память народа</a> | ');
        };
        layer.getZoomRange = function () {
            return ymaps.vow.resolve([7, 13]);
        };
        return layer;
    };
    ymaps.layer.storage.add('wwii#4111ukrL', wwii4111ukrL);
    var wwii4111ukrM = new ymaps.MapType('1941-11 Карта-схема инженерных заграждений (208-2511-0311)', ['wwii#4111ukrL']);
    ymaps.mapType.storage.add('wwii#4111ukr', wwii4111ukrM);


    addMap(
        'Передача_087_КП097Р_С46/208-0002511-0263/00000002.jpg',
        'Отчетная карта обстановки ЗапФ 16-19.11.41',
        '208_2511_263'
    );

    addMap(
        'Передача_030_КП097Р_С39/208-0002511-0690/00000002.jpg',
        'Карта положения войск 16 А 8-15 ноября 1941',
        '208_2511_690'
    );
    
    addMap(
        'Передача_079_КП097Р_С46/208-0002511-0262/00000002.jpg',
        'Отчетная карта ЗапФ 11-15.11.41',
        '208_2511_262'
    );

    addMap(
        'Передача_030_КП097Р_С39/208-0002511-0692/00000002.jpg',
        'Карта положения войск 16 А на 19 ноября',
        '208_2511_692'
    );

    addMap(
        'Передача_026_КП097Р_С39/208-0002511-0671/00000002.jpg',
        'Карта положения 20 и 16 А на 20.11.41',
        '208_2511_671'
    );

    addMap(
        '208-0002511-0265/00000003.jpg',
        'Отчетная карта оперотдела ЗапФ 19-23.11.41',
        '208_2511_265'
    );
    
//        addMap(
//            '208-0002511-0266/00000002.jpg',
//            'Отчетная карта отдела 19-23.11.41',
//            '208_2511_266'
//        );
    
//        addMap(
//            '208-0002511-0267/00000002.jpg',
//            'Отчетная карат отдела с 23-24 ноября',
//            '208_2511_267'
//        );

//        addMap(
//            '208-0002511-0269/00000002.jpg',
//            'Отчетная карта 24-26.11.41',
//            '208_2511_269'
//        );

    addMap(
        '208-0002511-0268/00000002.jpg',
        'Отчетная карта оперотдела ЗапФ 24-26.11.41',
        '208_2511_268'
    );

    addMap(
        'Передача_026_КП097Р_С39/208-0002511-0693/00000002.jpg',
        'Карта положения войск 16 А 23-27 ноября',
        '208_2511_693'
    );
    
//        addMap(
//            '208-0002511-0272/00000002.jpg',
//            'К отчетной карте № 258 с 27-28.11.41',
//            '208_2511_272'
//        );
    
    addMap(
        'Передача_026_КП097Р_С39/208-0002511-0694/00000002.jpg',
        'Карта положения войск 16 А на 27-28 ноября',
        '208_2511_694'
    );
    
    addMap(
        '208-0002511-0271/00000002.jpg',
        'Отчетная карта оперотдела ЗапФ с 27-28.11.41',
        '208_2511_271'
    );
    
    addMap(
        '208-0002511-0273/00000002.jpg',
        'Отчетная карта ЗапФ с 28-30.11.41',
        '208_2511_273'
    );
    
//        addMap(
//            '208-0002511-0274/00000003.jpg',
//            'Отчетная карта ЗапФ с 28.11 по 29.11.41',
//            '208_2511_274'
//        );
    
    addMap(
        'Передача_044_КП097Р_С39/358-0005916-0007/00000002.jpg',
        'Обстановка на фронте 16 А на 4.00 30.11.41',
        '358_5916_7'
    );
    
    addMap(
        'Передача_026_КП097Р_С39/208-0002511-0697/00000002.jpg',
        'Положения 16 А на 10.00 3.12.41',
        '208_2511_697'
    );
    
    addMap(
        'Передача_026_КП097Р_С39/208-0002511-0698/00000002.jpg',
        'Карта положения войск 16 А на 3 декабря',
        '208_2511_698'
    );
    
    addMap(
        '208-0002511-0275/00000003.jpg',
        'Отчетная карта оперотдела ЗапФ 1-3.12.41',
        '208_2511_275'
    );
    
    /*addMap(
        '208-0002511-0276/00000002.jpg',
        'Дополнение к отчетной карте оперотдела фронта с 1-3.12.41',
        '208_2511_276'
    );*/
    
    addMap(
        '208-0002511-0389/00000002.jpg',
        'Обстановка на фронтах с 22.10 по 4.12',
        '208_2511_389',
        {zoomRange: [6, 10]}
    );

//        addMap(
//            'Передача_027_КП097Р_С39/208-0002511-0911/00000002.jpg',
//            'Обстановка на фронте 33 А 1-4.12.41',
//            '208_2511_911'
//        );

    addMap(
        'Передача_026_КП097Р_С39/208-0002511-0912/00000002.jpg',
        'Положение частей 33 А с 1-5.12.41',
        '208_2511_912'
    ); 
    
    addMap(
        'Передача_026_КП097Р_С39/208-0002511-0699/00000002.jpg',
        'Карта положений частей 16 А на 4 и 5.12.41',
        '208_2511_699'
    ); 

//        addMap(
//            'Передача_076_КП097Р_С46/208-0002511-0278/00000002.jpg',
//            'Отчетная карта оперотдела ЗапФ с 4.12 по 8.12.41',
//            '208_2511_278'
//        );

    addMap(
        'Передача_081_КП097Р_С39/208-0002511-0622/00000002.jpg',
        'Карта положения войск 5 А 1.12.41',
        '208_2511_622'
    );
    
    addMap(
        '450-0011158-0095/00000004.jpg',
        'Карта МЗО 7-25.10.41 пр. к делу № 93',
        '450-0011158-0095'
    );
    
    
    
///////////////////////
    addMap(
        '208-0002511-0509/00000002.jpg',
        'TEST',
        'test'
    );
    
    var mapTypes = [
        '450-0011158-0095',
        'wwii#4111ukr', '208_2511_262', '208_2511_690', '208_2511_692', 
        'wwii#411119', '208_2511_263', '208_2511_671', '208_2511_265', '208_2511_268', 
        '208_2511_693', '208_2511_694', '208_2511_271', '208_2511_273',
        '358_5916_7', '208_2511_622', '208_2511_697', '208_2511_698', '208_2511_275',
        '208_2511_389',
        '208_2511_912', 'wwii#proryv2',
        '208_2511_699',
        //'test', 

    ];

    typeSelector = new ymaps.control.TypeSelector({
        data: {
            content: 'Основная карта'
        },
        mapTypes: [        
            'shubert', 'genshtab', 'genshtab1k', 
            'google#sat', 'yasat', 'yamap', 'openstreet#map',
            'shubert', 'genshtab', 'genshtab1k',
            //        'google#sat', 'yandex#map', 'yandex#hybrid', 'openstreet#map'
            ].concat(mapTypes),
        options: {
            size: 'large'
        }
    });
/*************************************/
   
    function tileFactory(imagePath) {
//            if (!(_id in window.image_paths)) {
//                //var query = {"query":{"term":{"id":"101140174"}}};
//                var query = {"query":{"term":{"id":_id}}};
//                $.post('https://cdn.pamyat-naroda.ru/ind/pamyat/document,map/_search', JSON.stringify(query))
//                    .done(function(data){
//                        var path = data['hits']['hits'][0]['_source']['image_path'];
//                        //window.image_paths[_id] = path;
//                        callback(path);
//                });
        return function(coords, zoom) {
            var bound = Math.pow(2, zoom);
            var tile_url = 'http://cdn.pamyat-naroda.ru/tiles/' + imagePath + '_tiles' +
                '/' + zoom + '/' + coords[0] + '/' + (bound - coords[1] - 1) + '.png';
            return tile_url;
        }
    }
    
    function layerFactory(imagePath, params) {
        console.log('layerFactory', imagePath, params.zoomRange);
        return function(){
            var layer = new ymaps.Layer(tileFactory(imagePath), {
                    projection: ymaps.projection.sphericalMercator,
                    tileTransparent: true
            });
            if ('copyrights' in params) {
                layer.getCopyrights = function() {
                    return ymaps.vow.resolve(params.copyrights);
                };
            } else {
                layer.getCopyrights = function() {
                    return ymaps.vow.resolve('© Courtesy of <a href="http://pamyat-naroda.ru" target="_blank">Память народа</a> | ');
                }
            }
            
            layer.getZoomRange = function () {
                return ymaps.vow.resolve(params.zoomRange || [6, 13]);
            };
            return layer;            
       }
    }
    
    function addMap(imagePath, title, hash, params) {
    /*params = {zoomRange: [], extraLayers: []}*/
        params = params || {};
        ymaps.layer.storage.add( hash + 'L', layerFactory(imagePath, params) );
        var layers = [hash + 'L'];
        if (params && 'extraLayers' in params) {
            layers = layers.concat(params.extraLayers);
        }
        ymaps.mapType.storage.add( hash, new ymaps.MapType(title + ' (' + hash + ')', layers) );
    }

    /*// Возьмем список слоев для типа карты Яндекс и добавим к нему свой слой 
    ymaps.mapType.storage.add('customMapType4', new ymaps.MapType('Locia',
        ymaps.mapType.storage.get('yandex#map').getLayers().concat(['customMapType4']));*/

//////////////////////////////////////////////////////////////////////////

    var initialState = MapLocationState.fromString(document.location.hash);
    if (!ymaps.mapType.storage.get(initialState.get('type'))) { // если в хранилище нет карты с таким типом
        initialState.set('type', 'wwii#4111ukr');
    }
    
    var params = initialState.getData();
    if (!params.center) {
        params.center= [55.427437, 36.792976];
    }
    
    history.replaceState(params, undefined, "#" + initialState);
    
    params.controls = ["rulerControl", "zoomControl", "routeEditor"];
    
    var map = window.map = new ymaps.Map('ymap', params, {
        maxZoom: 17,
        minZoom: 6,
        suppressMapOpenBlock: true,
        adjustZoomOnTypeChange: true
    });
    
    //map.controls.get('fullscreenControl').enterFullscreen();
    map.behaviors.enable('scrollZoom');
    
    
    var mapLocation = new MapLocation(map, initialState);
    
    mapLocation.events.add('statechange', function (e) {
        var state = e.get('newState'), 
            hash = '#' + state; //MapLocationState.prototype.toString
        
        if('pushState' in window.history) {
            //window.history.pushState(state.getData(), null, hash);
            history.replaceState(state.getData(), undefined, hash);
        }
        else {
            //document.location.hash = hash;
            document.location.replace(hash);
        }
    });

    window.onpopstate = function (e) {
        //var state = e.originalEvent.state;
        var state = e.state;

        if(state) {
            mapLocation.setState(state);
        }
        else {
            //переход к новым координатам при изменении url-hash руками
            var newState = MapLocationState.fromString(document.location.hash);
            var hash = "#" + newState;
            mapLocation.setState(newState.getData());
            history.pushState(newState.getData(), null, hash);

            //mapLocation.setState(initialState.getData());
        }
    };
    
    
    map.typeBounds = {
        'wwii#proryv':[[55.17327, 36.48573],[55.68167, 37.5157]],
        'wwii#proryv2':[[55.17327, 36.48573],[55.68167, 37.5157]],
        'wwii#ukrep':[[54.31783, 35.49147],[56.69261, 37.96339]],
        'wwii#411119':[[54.69131, 35.45302],[56.68302, 38.00734]],
        'wwii#411126':[[54.96404, 36.01881],[57.02311, 37.5184]],
        'wwii#411203':[[54.97036, 35.96388],[57.02011, 38.0403]],
        'wwii#4111ukr':[[54.31783, 35.49147],[56.69261, 37.96339]]
    };
    map.events.add('typechange', function (e) {
        var eMap = e.get('target');
        var currentType = eMap.getType();
        var newBounds = eMap.getBounds();
        console.log('typechange: ', currentType);
        if (currentType in eMap.typeBounds) {
            if ( !ymaps.util.bounds.areIntersecting(newBounds, eMap.typeBounds[currentType]) ) {
                console.log('setting new bounds...');
                newBounds = eMap.typeBounds[currentType];
            }
        }
        eMap.setBounds(newBounds, {checkZoomRange: true});
        //e.get('target').events.fire('correctZoom');
    });
    

    
    function correctZoom(myMap) {
        console.log('correctZoom');
        myMap.setZoom(myMap.getZoom(), {checkZoomRange: true});
    }
    
    correctZoom(map);
    
    map.events.add('correctZoom', function(e) {
//            var eMap = e.get('target');
//            correctZoom(eMap);
          correctZoom(this); // можно изспользовать this, т.к. передали контекст карты
//            eMap.zoomRange.get(eMap.getCenter()).then(function (range) {
//                var curZoom = eMap.getZoom();
//                var  minZoom = range[0], maxZoom = range[1];
//                //console.log('zoomRange', curZoom, minZoom, maxZoom);
//                if (curZoom > maxZoom) {
//                    eMap.setZoom(maxZoom);
//                } else if (curZoom < minZoom) {
//                    eMap.setZoom(minZoom);
//                }
//            });
    }, this);
    
    
    var button = new ymaps.control.Button({
        data: {
            content: 'Гибрид',
            title: 'Включить гибридный слой'
        },
        options: {
            //           maxWidth: [150, 200, 300],
            floatIndex: 2,
            float: 'right'
        }
    });
    button.events.add('click', function(e) {
        if (button.state.get('selected') == true) {
            this.layers.remove('my#skeleton');
        } else {
            this.layers.add('my#skeleton');
        }
    }, map)
    map.controls.add(button);


    map.controls.add(
        new ymaps.control.SearchControl({
            options: {
                provider: 'yandex#map',
                useMapBounds: true,
                floatIndex: 10,
                float: 'left',
                suppressYandexSearch: 'true',
                //noCentering: 'true',
                //zoomMargin: [300, 100]
            }
        })
    );
    
//////////////////////////////

    map.controls.add(typeSelector);
    //typeSelector.addMapType('208_2511_911', 4);

    //ymaps.mapType.storage.hash['yandex#hybrid'].getLayers();
        
   overlays = [
        new ymaps.control.ListBoxItem({
            data: {
                content: 'Шуберт (1860)',
                overlay: 'shubertL'
             }
        }),
        new ymaps.control.ListBoxItem({
            data: {
                content: 'Генштаб 500м (1982)',
                overlay: 'genshtabL'
             }
        }),
        new ymaps.control.ListBoxItem({
            data: {
                content: 'Генштаб 1км (1982)',
                overlay: 'genshtab1kL'
             }
        }),            
        new ymaps.control.ListBoxItem({
            data: {
                content: 'Яндекс.Спутник',
                overlay: 'yandex#satellite'
             },
            //state: {selected: 'true'}
        }),
        new ymaps.control.ListBoxItem({
            data: {
                content: 'Google.Спутник',
                overlay: 'google#satL'
             }
        }),
        new ymaps.control.ListBoxItem({options: {type: 'separator'}}),
    ];
    
   for (var i=0; i < mapTypes.length; i++) {
       var mapType = ymaps.mapType.storage.get(mapTypes[i]);
       var item = new ymaps.control.ListBoxItem({
            data: {
                content: mapType.getName(),
                overlay: mapType.getLayers()[0]
             }
        });
        overlays.push(item);
   };
   
    var overlayList = window.overlayList = new ymaps.control.ListBox({
            data: {
                content: 'Overlay ',
                title: 'Выбрать карту для наложения'
            },
            options: {
                collapseOnBlur: false,
                //popupFloat: 'left'
            },
            items: overlays
    });
    
    overlayList.events.add('select', function(e){
        var curItem = e.get('target');
        overlayList.each(function(i){
            if (i != curItem) {
                i.deselect();
            }
        });
        var overlay = curItem.data.get('overlay');
        map.layers.add(overlay);
        overlayList.data.set('content', 'Overlay ✔');
        //correctZoom(map);
        
    }).add('deselect', function(e){
        var item = e.get('target');
        var overlay = item.data.get('overlay');
        map.layers.remove(overlay);
//            var counter = 0;
//            overlayList.each(function(i){
//                if (i.isSelected()){
//                    counter++;
//                }
//            });
//            if (counter == 0){
//                overlayList.data.set('content', 'Overlay');
//            }
        overlayList.data.set('content', 'Overlay ');
        correctZoom(map);
    });
    map.controls.add(overlayList, {float: 'right', floatIndex: 201 });
    
    map.events.add('click', function () {
        if (overlayList.isExpanded()) {
            overlayList.collapse();
        }
    });
    typeSelector.events.add('expand', function(e) {
        overlayList.collapse();
    }, this);        
    
//        overlayList.get(0).events.add('click', function () {
//            //debugger;
//            overlay = 'yandex#satellite';
//            //map.setCenter([55.752736, 37.606815]);
//        });


// https://tech.yandex.ru/maps/doc/jsapi/2.1/ref/reference/Rectangle-docpage/#param-options.cursor
// graphics.render.detect.all, после чего в опции(рядом с цветом) передайте renderType: 'SVG'
//var rectangle = new ymaps.Rectangle(map.getBounds(), {}, {
//    cursor: "dragCursor",
//    outline: false,
//    strokeOpacity: 0,
//    //opacity: .5,
//    renderType: 'SVG',
//    fillImageHref: 'file:///Y:/Maps/bear.svg'
//});
//map.geoObjects.add(rectangle);

                                                 
//ymaps.geoXml.load('https://dl.dropboxusercontent.com/u/31288655/Petrishevo.kml')
//        .then(onGeoXmlLoad);
//
//// Обработчик загрузки XML-файлов.
//function onGeoXmlLoad (res) {
//    map.geoObjects.add(res.geoObjects);
//    if (res.mapState) {
//        res.mapState.applyToMap(map);
//    }
//}    

});
