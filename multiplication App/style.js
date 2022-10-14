const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);
const question=document.getElementById("quest");
const inputE=document.getElementById("input");
const sub=document.getElementById("form");
const s=document.getElementById("score");
question.innerText=`what if ${num1} multiplied by ${num2}?`;
correctAns=num1*num2;
let score=JSON.parse(localStorage.getItem("score"));
s.innerText=`Score:${score}`;
if(!score){
    score=0;
}

sub.addEventListener("submit",()=>{
const ans=+inputE.value;
if(ans==correctAns){
    score++;
    updateStorage();
}
else{
    score--;
    updateStorage();
}

})
function updateStorage(){
    localStorage.setItem("score",JSON.stringify(score));
}




