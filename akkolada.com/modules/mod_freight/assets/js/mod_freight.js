jQuery(document).ready(function () {
	jQuery('#mod_184 .button a').removeAttr('data-lity');
    var NextFrameFunc =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(callback)
        {
            window.setTimeout(callback, 1000 / 60);
        };
    function translit(a){
        var space = '-';
        var text = a.toLowerCase();
        var transl = {
            'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e', 'ж': 'zh',
            'з': 'z', 'и': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
            'о': 'o', 'п': 'p', 'р': 'r','с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h',
            'ц': 'c', 'ч': 'ch', 'ш': 'sh', 'щ': 'sh','ъ': '', 'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu', 'я': 'ya',
            ' ': space, '_': space, '`': space, '~': space, '!': space, '@': space,
            '#': space, '$': space, '%': space, '^': space, '&': space, '*': space,
            '(': space, ')': space,'-': space, '\=': space, '+': space, '[': space,
            ']': space, '\\': space, '|': space, '/': space,'.': space, ',': space,
            '{': space, '}': space, '\'': space, '"': space, ';': space, ':': space,
            '?': space, '<': space, '>': space, '№':space
        };
        var result = '';
        var curent_sim = '';
        for(var i=0; i < text.length; i++) {
            if(transl[text[i]] != undefined) {
                if(curent_sim != transl[text[i]] || curent_sim != space){
                    result += transl[text[i]];
                    curent_sim = transl[text[i]];
                }
            }
            else {
                result += text[i];
                curent_sim = text[i];
            }
        }
        result = TrimStr(result);
        return(result);
    }
    function TrimStr(s) {
        s = s.replace(/^-/, '');
        return s.replace(/-$/, '');
    }
    var prevClass1 = '';
    var prevClass2 = '';
    var prevClass3 = '';
    AddFormClass();
    function AddFormClass() {
        if(jQuery('#lity_box_count').length>0 && jQuery('a.modal-link').length>0){
            jQuery('a.modal-link').click(function () {
                var title1 = jQuery(this).siblings('.title').text();
                var title2 = jQuery('.tabs.open').text();
                var title3 = title1 + '_' + title2;
                var title4 = translit(title3);
                var class1 = 'price_page_form_'+title4;
                jQuery('#lity_box_count form').removeClass(prevClass1);
                prevClass1 = class1;
                jQuery('#lity_box_count form').addClass(class1);
            });
        }
        if(jQuery('#lity_box_count').length>0 && jQuery('.button .get-result').length>0){
            jQuery('.button .get-result').click(function () {
                var title1 = jQuery('.jq-selectbox__select-text').text();
                var title2 = translit(title1);
                var class1 = 'calculator_form_'+title2;
                jQuery('#lity_box_count form').removeClass(prevClass2);
                prevClass2 = class1;
                jQuery('#lity_box_count form').addClass(class1);
            });
        }
        if(jQuery('.order-cars tr td .modal_link').length>0){
            setInterval (function(){
                ClassOrder();
            }, 5000);
            function ClassOrder() {

                var title1 = jQuery.trim(jQuery("#cboxLoadedContent iframe").contents().find("#header-form").text());
                var title2 = jQuery.trim(jQuery('.rl_tabs-tab.active').text());
                var title3 = title1 + '_' + title2;
                var title4 = translit(title3);
                var class1 = 'order_auto_'+title4;
                jQuery("#cboxLoadedContent iframe").contents().find("form").removeClass(prevClass3);
                prevClass3 = class1;
                jQuery("#cboxLoadedContent iframe").contents().find("form").addClass(class1);
            }
        }
    };
    
    
    ThanksPopup();
    function ThanksPopup() {
        var formName2 = '';
        if(jQuery('#lity_box_count .moduletable').length>0 && jQuery('#lity_box_count .moduletable form').length == 0){
            jQuery('#lity_box_count').html('<p class="thanks_p">Спасибо! Наши менеджеры свяжутся с вами в ближайшее время</p>');
            if(jQuery('.tabs a.modal-link').length>0){
                jQuery('.tabs a.modal-link')[0].click();
                formName2 = 'transferOrderTable';
                GA2();
            }
            else{
                jQuery('.form-calc .button a').click();
                formName2 = 'flatCalc';
                GA2();
            }
        }
        function GA2(){
            ga('send', 'event', formName2);
            yaCounter27443871.reachGoal(formName2);
        }
    };


    RedForm();
    function RedForm() {
        if (jQuery.trim(jQuery('#lity_box_count p.formRed').text()) == 'Please complete all required fields!'){
            jQuery('p.formRed').text('Напишите номер телефона!');
        }
        if(jQuery('.form-calc .tonnage').length > 0){
            NextFrameFunc(RedForm);
        }
    };
    if(jQuery('.form-calc .tonnage').length > 0){
        jQuery('.form-calc').after('<div class="alert_msg"></div>');
        jQuery('.form-calc .button').click(function (event) {
            if(jQuery('.form-calc .city.departures').val() == ''){
                event.preventDefault();
                event.stopPropagation();
                jQuery('.alert_msg').text('Выберите город погрузки!');
            }
            else{
                if(jQuery('.form-calc .city.destination').val() == ''){
                    event.preventDefault();
                    event.stopPropagation();
                    jQuery('.alert_msg').text('Выберите город выгрузки!');
                }
                else{
                    if(jQuery.trim(jQuery('.jq-selectbox__select-text').text()) == 'Выберите тоннаж'){
                        event.preventDefault();
                        event.stopPropagation();
                        jQuery('.alert_msg').text('Выберите тоннаж!');
                    }
                    else{
                        jQuery('.alert_msg').text('');
                    }
                }
            }
        });
    }
});
    (function ($) {

        $(function () {
            $('.calcbottom .modal-link').click(function () {
                var modalTitle = $(this).parent().find('.title').html() + ' ' + $(this).parents('.container-calc').find('.tabs .open a').text();
                $('#lity_box_count .modal-title').html(modalTitle);
                jQuery("#lity_box_count input[name='form[tonnage]']").val(jQuery(".tabs.open").find('a').text());
            });
            jQuery('a.get-result').click(function () {
                if(jQuery('.jq-selectbox__select-text').length>0){
                    jQuery("#lity_box_count input[name='form[tonnage]']").val(jQuery('.jq-selectbox__select-text').text());
                    jQuery('#lity_box_count input[name="form[car]"]').val(jQuery('.jq-selectbox__select-text').text());
                }
            });
        });
        $.fn.freightCalc = function (token) {

            init();
            var regions, distance, autocompleteDep, autocompleteDes, directionsDisplay, directionsService, regionDep, regionDes, tonnage, discount, discountTonnage, mapObj, mapOptions, geocoder, map, car;
            String.prototype.stripTags = function () {
                return this.replace(/<\/?[^>]+>/g, '');
            };
            function init() {

                regions = {
                    "cnfd": ['Белгородская область', 'Брянская область', 'Владимирская область', 'Воронежская область', 'Ивановская область', 'Калужская область', 'Костромская область', 'Курская область', 'Липецкая область', 'Московская область', 'Орловская область', 'Рязанская область', 'Смоленская область', 'Тамбовская область', 'Тверская область', 'Тульская область', 'Ярославская область', 'Москва'],
                    "ugfd": ['Республика Адыгея', 'Республика Калмыкия', 'Краснодарский край', 'Астраханская область', 'Волгоградская область', 'Ростовская область'],
                    "szfd": ['Республика Карелия', 'Республика Коми', 'Архангельская область', 'Вологодская область', 'Калининградская область', 'Ленинградская область', 'Мурманская область', 'Новгородская область', 'Псковская область', 'Санкт-Петербург'],
                    "fefd": ['республика саха (якутия)', 'Камчатский край', 'Приморский край', 'Хабаровский край', 'Амурская область', 'Магаданская область', 'Сахалинская область', 'Еврейская автономная область', 'Чукотский автономный округ'],
                    "sbfd": ['Республика Алтай', 'республика Бурятия', 'Республика Тува', 'Республика Хакасия', 'Алтайский край', 'Забайкальский край', 'Красноярский край', 'Иркутская область', 'Кемеровская область', 'Новосибирская область', 'Омская область', 'Томская область', 'респу́блика тыва́'],
                    "urfd": ['Курганская область', 'Свердловская область', 'Тюменская область', 'Челябинская область', 'Ханты-Мансийский автономный округ - Югра', 'ямало-ненецкий автономный округ'],
                    "vlfd": ['Республика Башкортостан', 'Республика Марий Эл', 'Республика Мордовия', 'Республика Татарстан', 'Республика удмуртия', 'Pеспублика Удмуртия', 'Удмуртия Pеспублика', 'Чувашская Республика', 'Кировская область', 'Нижегородская область', 'Оренбургская область', 'Пензенская область', 'Ульяновская область', 'Самарская область', 'Саратовская область', 'Пермский край'],
                    "skfd": ['Республика Дагестан', 'Республика Ингушетия', 'Кабардино-Балкарская Республика', 'Карачаево-Черкесская Республика', 'республика северная осетия-алания', 'Чеченская Республика', 'Ставропольский край'],
                    "cmfd": ['Крым', 'Севастополь']
                };
                directionsService = new google.maps.DirectionsService();
                regionDep = '';
                regionDes = '';
                tonnage = false;
                discount = 100;
                discountTonnage = 100;
                mapObj = {'departures': {}, 'destination': {}};
                mapOptions = {result_type: ['street_address', 'political', 'locality', 'route', 'premise', 'subpremise']};
            }

            return this.each(function () {

                var $element = $(this), buttonsModal = $('a.modal-link', $element);
                if (buttonsModal.length > 0) {
                    buttonsModal.on('click', function (e) {

                        init();
                        setTimeout(function () {
                            var $sBox = $('#lity_box_count'), cityDep = $('input.city.departures', $sBox), cityDest = $('input.city.destination', $sBox), arrTonnage = $(e.target).closest('.item').find('.params p:last-of-type').text().split(':');
                            car = $(e.target).closest('.item').find('.title span').text();
                            tonnage = Number(arrTonnage[1].trim());
                            getTonnageDiscount(tonnage);
                            initAutocomplete(cityDep.get(0), cityDest.get(0));
                            //console.log(' $sBox= ' +$sBox, ' cityDep= ' +cityDep, ' cityDest= ' +cityDest, ' arrTonnage= ' +arrTonnage, ' car= ' +car, ' tonnage='+tonnage);
                        }, 800);
                    });
                } else {
                    map = $('#map', $element);
                    init();
                    initialize(map.get(0));
                    var cityDep = $('input.city.departures', $element), cityDest = $('input.city.destination', $element), selectTonnage = $('select', $element);
                    if (selectTonnage.length > 0) {
                        selectTonnage.change(function () {
                            tonnage = $(this).val();
                            getTonnageDiscount(tonnage);
                            getDataFreight(autocompleteDep.getPlace(), 'departures');
                            getDataFreight(autocompleteDes.getPlace(), 'destination');
                        });
                    } else {
                        tonnage = 20;
                    }
                    initAutocomplete(cityDep.get(0), cityDest.get(0));
                }
                function initAutocomplete(el1, el2) {
                    autocompleteDep = new google.maps.places.Autocomplete(el1, mapOptions);
                    autocompleteDes = new google.maps.places.Autocomplete(el2, mapOptions);

                    google.maps.event.addDomListener(el1, 'keydown', function (e) {
                        if (e.keyCode === 13 && !e.triggered) {
                            if ($('.pac-item-selected').length === 0) {
                                google.maps.event.trigger(this, 'keydown', {keyCode: 40});
                            }
                            google.maps.event.trigger(this, 'keydown', {keyCode: 13, triggered: true});
                        }
                    });
                    google.maps.event.addDomListener(el1, 'change', function () {
                        google.maps.event.trigger(this, 'keydown', {keyCode: 40});
                    });
                    google.maps.event.addListener(autocompleteDep, 'place_changed', function () {
                        getDataFreight(autocompleteDep.getPlace(), 'departures');
                    });
                    google.maps.event.addDomListener(el2, 'keydown', function (e) {
                        if (e.keyCode === 13 && !e.triggered) {
                            if ($('.pac-item-selected').length === 0) {
                                google.maps.event.trigger(this, 'keydown', {keyCode: 40});
                            }
                            google.maps.event.trigger(this, 'keydown', {keyCode: 13, triggered: true});
                        }
                    });
                    google.maps.event.addDomListener(el2, 'change', function () {
                        google.maps.event.trigger(this, 'keydown', {keyCode: 40});
                    });
                    google.maps.event.addListener(autocompleteDes, 'place_changed', function () {
                        getDataFreight(autocompleteDes.getPlace(), 'destination');
                    });
                }

                function initialize(el) {
                    var latlng = new google.maps.LatLng(55.74643901, 37.62062073), options = {
                        zoom: 10,
                        center: latlng,
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    };
                    map = new google.maps.Map(el, options);
                    geocoder = new google.maps.Geocoder();
                    directionsDisplay = new google.maps.DirectionsRenderer();
                    directionsDisplay.setMap(map);
                }

                function getDataFreight(result, propMapObj) {
                    var components = result.address_components;
                    for (var j in components) {
                        if (components.hasOwnProperty(j) && components[j].types[0] == "administrative_area_level_1") {

                            var codeReg = components[j].long_name.toLowerCase(), searched = false;
                            console.log(codeReg);
                            for (var prop in regions) {
                                if (regions.hasOwnProperty(prop) && regions[prop].join(',').toLowerCase().indexOf(codeReg) >= 0) {

                                    switch (propMapObj) {
                                        case'departures':
                                            regionDep = prop;
                                            searched = true;
                                            break;
                                        case'destination':
                                            regionDes = prop;
                                            searched = true;
                                            break;
                                    }
                                }
                            }
                            if (!searched) {
                                switch (propMapObj) {
                                    case'departures':
                                        regionDep = '';
                                        break;
                                    case'destination':
                                        regionDes = '';
                                        break;
                                }
                            }
                            if (components[j].long_name.toLowerCase().indexOf('город') + 1) {
                                mapObj[propMapObj].city = components[j].long_name.replace('город ', '');
                            }
                        } else{
                            if (components.hasOwnProperty(j) && components[j].types[0] == "locality" ) {
                                var codeReg = components[j].long_name.toLowerCase(), searched = false;
                                for (var prop in regions) {
                                    if (regions.hasOwnProperty(prop) && regions[prop].join(',').toLowerCase().indexOf(codeReg) >= 0) {
                                        switch (propMapObj) {
                                            case'departures':
                                                regionDep = prop;
                                                searched = true;
                                                break;
                                            case'destination':
                                                regionDes = prop;
                                                searched = true;
                                                break;
                                        }
                                    }
                                }
                                if (!searched) {
                                    switch (propMapObj) {
                                        case'departures':
                                            regionDep = '';
                                            break;
                                        case'destination':
                                            regionDes = '';
                                            break;
                                    }
                                }
                                mapObj[propMapObj].city = components[j].long_name;
                            }
                        }
                    }
                    mapObj[propMapObj].address = result.formatted_address;
                    if (mapObj.departures.address && mapObj.destination.address) {
                        getMap(mapObj);
                    }
					//getMap(mapObj);
                }

                function getTonnageDiscount(tonnage) {
                    var rate = '';
                    if (typeof tonnage == 'number') {
                        if (tonnage > 0 && tonnage < 3) {
                            rate = 'gazelle'
                        } else if (tonnage >= 3 && tonnage < 5) {
                            rate = 'three'
                        } else if (tonnage >= 5 && tonnage < 10) {
                            rate = 'five'
                        } else if (tonnage >= 10 && tonnage < 20) {
                            rate = 'ten'
                        } else if (tonnage >= 20) {
                            rate = 'twenty'
                        }
                    } else {
                        rate = tonnage;
                    }
                    $.ajax({
                        type: 'POST',
                        url: 'index.php?option=com_freight&task=freight.getResult&format=raw&' + token + '=1',
                        cache: false,
                        data: {'rate': rate, 'model': 'getRate'},
                        success: function (data) {
                            discountTonnage = data;
                        },
                        error: function (data) {
                            console.log(data);
                        }
                    });
                }

                function getMap(obj) {
                    var coords = obj || {}, coordDep = coords.departures.address, coordDes = coords.destination.address, request = {
                        origin: coordDep,
                        destination: coordDes,
                        provideRouteAlternatives: false,
                        travelMode: google.maps.DirectionsTravelMode.DRIVING
                    };
                    if (typeof directionsDisplay == 'undefined') {
                        directionsDisplay = new google.maps.DirectionsRenderer();
                    }
                    directionsService.route(request, function (response, status) {
                        if (status == google.maps.DirectionsStatus.OK) {
                            directionsDisplay.setDirections(response);
                            distance = response.routes[0].legs[0].distance.value;
                            var duration = response.routes[0].legs[0].duration.text;
                            getResult(distance, duration, coords.departures.city, coords.destination.city);
                        } else {
                            if (status === 'ZERO_RESULTS') {
                                displayResult('error', '', '', '', '');
                            } else {
                                console.log(status);
                            }
                        }
                    });
                }

                function displayResult(preRes, duration, distance, cityDep, cityDes) {
                    var respondBox = ($('#lity_box_count .respond').length > 0) ? $('#lity_box_count .respond') : $('.container-calc .respond'),
                        form = ($('#lity_box_count .moduletable').length > 0) ? $('#lity_box_count .moduletable') : $('.container-calc .moduletable'),
                        dTextFirst = '<strong>' + cityDep + ' - ' + cityDes + '</strong> ' + Math.round(distance / 1000) + ' км.';
                    if (!isNaN(preRes) && preRes !== 'error') {
                        var dTextFirstRes = ((preRes / 100) * discount) + ' р.';
                        respondBox.find('.waybill').show();
                        respondBox.find('.duration').show();
                        respondBox.find('.insurance').show();
                        respondBox.find('.total-cost').show();
                        respondBox.find('.error').hide();
                        respondBox.find('span.city-names').html(dTextFirst);
                        respondBox.find('.waybill span.result').html(dTextFirstRes);
                        respondBox.find('.duration span.result').html(duration);
                        respondBox.find('.total-cost span.result').html(dTextFirstRes);
                        form.slideDown();
                        submitForm(form, dTextFirst, dTextFirstRes);
                    } else if (isNaN(preRes) && preRes !== 'error') {
                        respondBox.find('.waybill').hide();
                        respondBox.find('.duration').hide();
                        respondBox.find('.insurance').hide();
                        respondBox.find('.total-cost').hide();
                        respondBox.find('.error').remove();
                        respondBox.append('<div class="row-calc error"><span style="display: block;text-align: center">Стоимость данного маршрута уточните у менеджера!</span></div>');
                        form.slideDown();
                        submitForm(form, dTextFirst, 0);
                    } else if (preRes == 'error') {
                        respondBox.find('.waybill').hide();
                        respondBox.find('.duration').hide();
                        respondBox.find('.insurance').hide();
                        respondBox.find('.total-cost').hide();
                        respondBox.find('.error').remove();
                        respondBox.append('<div class="row-calc error"><span style="display: block;text-align: center">По данным точкам невозможно проложить маршрут!</span></div>');
                        form.slideUp();
                    }
					jQuery('#mod_184 .button a').attr('data-lity','');
                }

                function getResult(distance, duration, cityDep, cityDes) {
                    var link = $('.form-calc .button a.get-result');
                    link.unbind('click.getResult');
                    link.removeClass('form-opened');
                    $.ajax({
                        type: 'POST',
                        url: 'index.php?option=com_freight&task=freight.getResult&format=raw&' + token + '=1',
                        cache: false,
                        data: {
                            'model': 'getResult',
                            'distance': distance,
                            'departures': regionDep,
                            'destination': regionDes,
                            'depcity': cityDep,
                            'descity': cityDes
                        },
                        success: function (data) {
                            var preResult = (((((((Number(data) / 100) * Number(discountTonnage)) / 1000) / 5).toFixed(1)) * 1000) * 5).toFixed(0);
                            link.bind('click.getResult', function (e) {
                                if (tonnage) {
                                    if ($(e.target).is('[rel]')) {
                                        $(e.target).addClass('form-opened');
                                        SqueezeBox.open('#modal-respond', {size: {x: 840, y: 400}});
                                        setTimeout(function () {
                                            displayResult(preResult, duration, distance, cityDep, cityDes);
                                        }, 600);
                                    } else {
                                        displayResult(preResult, duration, distance, cityDep, cityDes);
                                    }
                                } else {
                                    alert('Вы не выбрали тоннаж');
                                }
                            });
                        },
                        error: function (data) {
                        }
                    });
                }

                function submitForm(form, freight, price) {
                    if(jQuery('#lity_box_count #submit').length >0){
                        jQuery('#lity_box_count #submit').on('click', function (event) {
                            jQuery('#lity_box_count input[name="form[freight]"]').val(freight.stripTags());
                            jQuery('#lity_box_count input[name="form[price]"]').val(price);
                            if(jQuery('.jq-selectbox__select-text').length>0){
                                jQuery('#lity_box_count input[name="form[car]"]').val(jQuery('.jq-selectbox__select-text').text());
                            }
                            else{
                                jQuery('#lity_box_count input[name="form[car]"]').val(car);
                            }
                        });
                    }
                    else{
                        $('form', form).unbind('submit.noDouble');
                        $('form', form).bind('submit.noDouble', function (e) {

                            $(this).find('input[name="form[freight]"]').val(freight.stripTags());
                            $(this).find('input[name="form[price]"]').val(price);

                            if(typeof car !== 'undefined'){
                                $(this).find('input[name="form[car]"]').val(car);
                            }

                            var data = $(this).serialize(),
                                id   = $(this).find('input[name="form[formId]"]').val(),
                                url  = 'index.php?option=com_rsform&view=rsform&tmpl=component&formId=' + id;

                            $.ajax({
                                type: 'POST',
                                url : url,
                                data: data,
                                success: function (data, status) {
                                    if (status == 'success') {

                                        if ($(data).find('#main p').length == 1) {
                                            form.closest('.moduletable')
                                                .append('<p class="answer" style="text-align: center;color: darkred">' + $(data).find('#main p').text() + '</p>');

                                            if($('form', form).closest('#sbox-window').length > 0){

                                                setTimeout(function () {
                                                    location.reload();
                                                }, 4000);

                                            }
                                        }
                                    }
                                },
                                error: function (data) {
                                    console.log(data);
                                }
                            });

                            return false;
                        });
                    }

                }
            });
        };
    })(jQuery);