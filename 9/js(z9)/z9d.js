// скрипт смены цвета заднего фона при уменьшении ширины экрана
function myFunctionBackcolor(x) {
    if (x.matches) { // Если медиа запрос совпадает
        document.body.style.backgroundColor = "yellow";
    } else {
        document.body.style.backgroundColor = "darkseagreen";
    }
}

var x = window.matchMedia("(max-width: 540px)")
myFunctionBackcolor(x) // Вызов функции прослушивателя во время выполнения
x.addListener(myFunctionBackcolor) // Прикрепить функцию прослушивателя при изменении состояния
