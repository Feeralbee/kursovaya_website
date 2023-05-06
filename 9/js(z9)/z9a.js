// Установите дату, до которой мы ведем обратный отсчет
var countDownDate = new Date("May 11, 2023 09:00:00").getTime();

// Обновляйте обратный отсчет каждые 1 секунду
var x = setInterval(function () {

  // Получить сегодняшнюю дату и время
  var now = new Date().getTime();

  // Найдите расстояние между моментом сейчас и датой обратного отсчета
  var distance = countDownDate - now;

  // Расчеты времени для дней, часов, минут и секунд
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Выведите результат в виде элемента с id="demo"
  document.getElementById("demo").innerHTML = "Осталось " + days + " дней " + hours + " часов "
    + minutes + " минут " + seconds + " секунд ";

  // Если обратный отсчет закончился, напишите какой-нибудь текст
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Экзамены начались 11 мая 23 года в 9 утра";
  }
}, 1000);