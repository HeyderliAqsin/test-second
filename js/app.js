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
