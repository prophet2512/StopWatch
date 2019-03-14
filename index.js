let h1 = document.getElementsByTagName('h1')[0],
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    clear = document.getElementById('clear'),
    lap = document.getElementById('lap'),

    miliseconds = 0,seconds = 0, minutes = 0, lapCount = 0,
    t;

function add(){
  miliseconds++;
  if(miliseconds>=100){
    miliseconds = 0;
    seconds++;

    if(seconds>=60){
      minutes++;
      seconds = 0;
    }
  }

  h1.textContent = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00")
  + ":" + (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00")
  + ":" + (miliseconds > 9 ? miliseconds : "0" + miliseconds);

  timer();
}

function timer() {
    t = setTimeout(add, 10);
}

timer(); //starts the clock as and when the page is loaded


start.onclick = timer;

stop.onclick = function(){
  clearTimeout(t)
};

clear.onclick = function(){
  h1.textContent = "00:00:00";
  miliseconds = 0; seconds = 0; minutes= 0, lapCount = 0;
  document.getElementById('list').innerHTML = '';
};

lap.onclick = function(){
  let list = document.getElementById('list');
  let li = document.createElement('li');
  lapCount+=1;
  li.appendChild(document.createTextNode("Lap "+ lapCount+" : "+
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" +
    (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") + ":" +
    (miliseconds > 9 ? miliseconds : "0" + miliseconds))
                );
  li.setAttribute('class', 'list-group-item');
  list.appendChild(li);
}
