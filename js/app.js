const tabBtn=[...document.querySelectorAll("#tab button")]
const pTag=[...document.querySelectorAll("#tabdown p")]

for(let i=0;i<tabBtn.length;i++){
   tabBtn[i].onclick=function(){
       for(let j=0;j<pTag.length;j++){
           pTag[j].classList.remove("tab-active")
       }
      let btnIndex= tabBtn.indexOf(this);
      pTag[btnIndex].classList.add("tab-active")
   }
}


var Reqemler=[10,68,987,7,1,8]

let maxReqem = Reqemler[0]
for (let i=0;i<Reqemler.length;i++){
    if(maxReqem<Reqemler[i]){
        maxReqem=Reqemler[i]
    }
}
console.log(maxReqem);


var change=function convert(olcu) {
    var x;
    if (olcu == "KM") {
      x = document.getElementById("km").value * 1000;
    } else {
     
    
    }
  }
  change()
 


function myRand(){
let myRandom=Math.floor(Math.random()*100)
let count=0

while(myRandom !=30){
    myRandom=Math.floor(Math.random()*100)
    if(myRandom==30){
        break;
    }
    count++
}
}
myRand()