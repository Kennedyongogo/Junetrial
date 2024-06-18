//   window.alert("i tried this today it was fun")

            const intro = document.getElementsByClassName('with');
            document.getElementById('that').innerHTML = "for class it turn out: " + intro[0].innerHTML;


            const yes = document.querySelectorAll('p.go');
            document.getElementById('here').innerHTML = "CSS is suppose to be : " + yes[0].innerHTML;

            document.getElementById('change').innerHTML = "let's try";

            function validateForm() {
                let x = document.forms['myForm'] ['firstname'] ['password'].value;
                if (x == '') {
                     alert('firstname must be filled out') ('password must be filled out');

                    return false;
                }
            }


        function sumAll () {
          let sum = 0;
          for(let i = 0; i<arguments.length;i++) {
            sum += arguments[i] 
          }
          return sum

        }
        document.getElementById("qwetu").innerHTML = sumAll(8,20348,123457)







     function findMax () {
     let max = -Infinity
     for(let i = 0; i< arguments.length;i++){
        if(arguments[i] > max){ max = arguments[i]}
     }
      
     return max;
     }
     document.getElementById("today").innerHTML = findMax(1,2,3,4,5,6,7,8,9)



















        function myFunction ( a,b) {return a*b};
        let x = myFunction(3, 5)*7;
        document.getElementById("demo").innerHTML = x;

       function mOver(obj) {
        obj.innerHTML = "kennedy ongogo"
       }
      function mOut(obj) {
        obj.innerHTML = "carl mart"
      }
       function mUp(obj) {
        obj.style.background = "#1ec5e5";
        obj.innerHTML = "kennedy ongogo"
       }
      function mDown(obj) {
       obj.style.background =  "red";
        obj.innerHTML = "carl mart"
      }
     
      function myFunction(obj) {
        obj.style.background = "yellow";
      }















       document.getElementById('wagwan').style.color = 'blue';









        function findMax(){
            let max = -Infinity;
            for(let i = 0; i<arguments.length;i++) {
                if(arguments[i]> max){
                    max = arguments[i]
                }
            }
            return max;
        }
        document.getElementById("tiy").innerHTML = findMax(100, 200, 300, 400, 500, 600)