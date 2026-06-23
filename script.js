const counters=document.querySelectorAll(".stat-card h2");

counters.forEach(counter=>{
const target=counter.innerText.replace(/\D/g,'');

if(!target) return;

let count=0;

const update=()=>{
const increment=target/100;

if(count<target){
count+=increment;
counter.innerText=Math.floor(count)+"+";
setTimeout(update,20);
}else{
counter.innerText=target+"+";
}
};

update();
});


