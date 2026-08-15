let style="Поп";


function choose(s){

style=s;

alert("Выбран стиль: "+s);

}


function createSong(){


let idea=document.getElementById("idea").value;


if(!idea){

alert("Напишите тему песни");

return;

}


document.getElementById("result").classList.remove("hidden");


document.getElementById("title").innerHTML =
"🎵 "+idea;


document.getElementById("text").innerHTML =

"Куплет:<br>"+
"Сегодня новый день, новая история...<br><br>"+

"Припев:<br>"+
"Мы создаём свой путь и свою мечту...<br><br>"+

"Стиль: "+style;


}
