var i = 0;
var txt = 'которая доставляет очень много радости, когда что - то получается.Если учиться, узнавать новое, пробовать — результаты работы не перестанут радовать, а трудности не смогут остановить.'; /* Текст */
var speed = 50; /* Скорость/длительность эффекта в миллисекундах */
function typeWriter() {
    if (i < txt.length) {
        document.getElementById("machine").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}