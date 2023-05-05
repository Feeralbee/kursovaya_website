function send_form() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let question = document.getElementById("subject").value;
    alert("Имя: " + fname + "\nФамилия: " + lname + "\nСтрана: Россия" + "\nВопрос: " + question);
    return false;
}