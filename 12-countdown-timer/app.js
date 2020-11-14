const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");


let futureDate = new Date(2020,11,12,12,12,12);


const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();
let month = months[futureDate.getMonth()];
let date = futureDate.getDate();
const day = weekdays[futureDate.getDay()];
giveaway.textContent = `giveaway ends on ${day}, ${date}th ${month} ${year} ${hours}:${mins}am`;





const futureTime = futureDate.getTime();
//console.log(futureTime);

function getRemainingTime(){
const today = new Date().getTime();
//console.log(today);
const t = futureTime - today;



const oneDay = 24 * 60 * 60 * 1000; 
const oneHour = 60 * 60 * 1000; 
const oneMinute = 60 * 1000; 

let days =Math.floor( t/oneDay);

let hours = Math.floor((t % oneDay) / oneHour);
let minutes = Math.floor((t % oneHour) / oneMinute);
let seconds = Math.floor((t % oneMinute) / 1000);
//console.log(hours);
const values = [days,hours,minutes,seconds];
function format(item){
  if(item < 10){
    return item = `0${item}`
  }
  else{
    return item;
  }
}
items.forEach(function(item,index){
  item.innerHTML = format(values[index]);
});
if(t<0){
  clearInterval(countdown);
  deadline.innerHTML = `<h4 class="expired"> sorry, this giveaway has expired </h4>`;
}
}
let countdown = setInterval(getRemainingTime,1000);

getRemainingTime();