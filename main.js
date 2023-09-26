let date = document.querySelector('.date')
let day= document.querySelector('.day')
let month = document.querySelector('.month')
let year = document.querySelector('.year')

const todayDate = new Date()

date.innerHTML = todayDate.getDate()

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
day.innerHTML = weekday[todayDate.getDay()]

const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
month.innerHTML = monthNames[todayDate.getMonth()]

year.innerHTML = todayDate.getFullYear()