 const defaultSelect = () => {
  const element = document.querySelector('.default');
  const choices = new Choices(element, {
    searchEnabled: false,
  });
 };

 defaultSelect();

//  map
type="text/javascript">
    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [48.872185, 2.354224],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 7
        });

      var myPlacemark = new ymaps.Placemark([48.872185, 2.354224], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map.svg',
        iconImageSize: [30, 42],
        iconImageOffset: [-3, -42]
      });
      // Размещение геообъекта на карте.
      myMap.geoObjects.add(myPlacemark);
    }

    // tippy
    tippy('#myButton', {
      content: "Глава 2, страница 176",
    });

    // form
    var selector = document.querySelector("input[type='tel']");
    var im = new Inputmask("+7(999)-999-99-99");

    im.mask(selector);

    new JustValidate('.form', {
      rules: {
        name: {
          required: true, //поле обязательно для заполнения
          minLength: 2,
          maxLength: 30
        },
        tel: {
          required: true,
          function: (name, value) => {
            const phone = selector.inputmask.inmaskedvalue()
            return Number(phone) && phone.length === 10
          },
        },
        mail: {
          required: true,
          email: true
        },
      },
      messages: {
        name: {
          required: 'Вы не ввели имя'
        },
        tel: {
          required: 'Вы не ввели телефон'
        },
        mail: {
          required: 'Вы не ввели e-mail'
        },
      },
    });
