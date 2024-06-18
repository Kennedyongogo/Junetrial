

function sumAll () {
    let sum = 0;
    for(let i = 0; i<arguments.length;i++) {
      sum += arguments[i] 
    }
    return sum

  }
  document.getElementById("here").innerHTML = sumAll(200000, 20348, 123457)


  function findMax () {
    let max = -Infinity;
    for(let i = 0; i < arguments.length;i++) {
      if(arguments[i] > max){max = arguments[i]}
    }
    return max;
  }
  document.getElementById("next").innerHTML = findMax(1,2,3,4,5,6,7,8)

  function mOut(obj) {
    obj.innerHTML = "AVRIL ROSE"
  }
  function mOver(obj) {
    obj.innerHTML = "CARL MART"
  }
  function mUp(obj) {
    obj.style.background = "yellowgreen";
    obj.innerHTML = "AVRIL ROSE"
  }
  function mDown(obj) {
    obj.style.background = "red";
    obj.innerHTML = "CARL MART"
  }

  

  const x = document.getElementById("location");

  function getLocation() {
    if(navigator.geolocation) {navigator.geolocation.getCurrentPosition(showPosition);}
    else{x.innerHTML = "Geolocation is not supported by this browser."}
  }
  function showPosition(position) {
    x.innerHTML = "Latitude:" + position.coords.latitude + "<br> Longitude:" + position.coords.longitude;
  }

  
 
