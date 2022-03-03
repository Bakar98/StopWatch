var mil = document.getElementById("mil");
var sec = document.getElementById("sec");
var min = document.getElementById("min");
var lapContainer = document.getElementById("lapContainer");



var startBtn = document.getElementById("start");
var lapBtn = document.getElementById("lap");

var timerId = "";
var isStart = false;
var seconds = 0;


startBtn.addEventListener("click", function(){
    if(isStart){
      // stop timer

      clearInterval(timerId);
      isStart = false;
      startBtn.innerText = "Start"
      startBtn.style.backgroundColor = "rgb(39,109,221)";
      startBtn.style.color = "white";
      lapBtn.innerText = "Reset"
    }
    else{
      // start timer
       timerId = setInterval(  function(){
              seconds++;

              let mili = seconds%100;
              let s = (Math.floor(seconds/100))%60;
              let m = Math.floor(((parseInt(seconds/100)))/60); 

              if(mili<10) mili = "0" + mili;
              if(s<10) s = "0" + s;
              if(m<10) m = "0" + m;

             
              mil.innerText = mili;
              sec.innerText = s;
              min.innerText = m;
            
            }, 10)

            startBtn.style.backgroundColor = "rgba(255,0,0,.2)";
       
            startBtn.style.color = "red";

            isStart = true;
            startBtn.innerText = "Stop"
            lapBtn.innerText = "Lap"
    }


})

 var lapCount = 0;

lapBtn.addEventListener("click", function(){
  var x = lapBtn.innerText;
  var lapP = document.createElement("p");
  var timerP = document.createElement("p");
  lapP.setAttribute("id", "lapP");
  timerP.setAttribute("id", "timerP");

  if(x=="Reset"){
    clearInterval(timerId);
    seconds = 0;
    mil.innerText = "00"
    sec.innerText = "00"
    min.innerText = "00"
    lapContainer.innerHTML = "";
    lapCount = 0;
  }


  else{
    
    if(seconds>0){
    lapCount++;
    var line = document.createElement("hr");
    var lapDiv = document.createElement("div");
    lapDiv.setAttribute("id", "lapDiv");
    line.setAttribute("id", "line")
    
    lapP.innerText = "Lap "+ lapCount;
    

    lapDiv.appendChild(lapP);

    let mili = seconds%100;
    let s = (Math.floor(seconds/100))%60;
    let m = Math.floor(((parseInt(seconds/100)))/60);

    if(mili<10) mili = "0" + mili;
    if(s<10) s = "0" + s;
    if(m<10) m = "0" + m;

    timerP.innerText = `${m}:${s}:${mili}`;
    lapDiv.appendChild(timerP);
    lapContainer.appendChild(line)
    lapContainer.appendChild(lapDiv)
    }


  }


})



