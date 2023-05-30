// скрипт отправки данных из формы
function send_form() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let question = document.getElementById("subject").value;
    country = document.getElementById("country");
    country_name =  country.options[country.selectedIndex].text
    alert("Имя: " + fname + "\nФамилия: " + lname + "\nСтрана: " + country_name + "\nВопрос: " + question);
    return false;
}