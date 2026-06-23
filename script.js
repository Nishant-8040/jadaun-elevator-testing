const counters = document.querySelectorAll(".stat-card h2");

counters.forEach(counter => {

const originalText = counter.innerText;

if(originalText === "2015") return;

const target = parseInt(originalText.replace(/\D/g,''));

let count = 0;

const update = () => {

const increment = Math.ceil(target / 100);

if(count < target){

count += increment;

if(count > target) count = target;

counter.innerText = count + "+";

setTimeout(update,20);

}

};

update();

});


