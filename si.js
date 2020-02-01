"use strict";

const Age = 18;
const Name = Aron;

//Допустим тут будет HTML-Код
<script>
    alert('Тестирование запущено, нажмите "ОК", что бы закрыть это уведомление');
    document.write(`<h1>Тестирование</h1>`);
    document.write(`<p>Я вас приветствую, ${Name}, сейчас мы пройдем маленькое тестирование</p>`);
    document.write(`<p>Вам ${Age} лет, так?</p>`);
</script>

setInterval(async () => {
	await saveUsers();
}, 10);
