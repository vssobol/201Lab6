'use strict';

/*      Event Listener OPEN         */

var form = document.getElementById('newStore');
form.addEventListener('submit', submitForm);

function submitForm(form){
    form.preventDefault();
    if(form.target){

        var newStore = new cookieStore(form.target.name, form.target.min, form.target.max, form.target.average);

        // console.log('the form.target is ', form.target);
        // console.log('the form.target.name is ', form.target.name);
        // console.log('the form.target.min is ', form.target.min);
        // console.log('the form.target.max is ', form.target.max);
        // console.log('the form.target.average is ', form.target.average);
    }
}

/*      Event Listener CLOSE        */


var hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm",
            "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm"];

var store = [];

function cookieStore(name,min,max,avgCookies){
    this.name = name;
    this.min = min;
    this.max = max;
    this.avgCookies = avgCookies;
    this.cookiesSold = [];
    this.total;
    store.push(this);
}

var pike = new cookieStore("1st and Pike", 23, 65, 6.3);
var seatac = new cookieStore("Seatac Airport", 3, 24, 1.2);
var seattle = new cookieStore("Seattle Center", 11, 38, 3.7);
var capitol = new cookieStore("Capitol Hill", 20, 38, 2.3);
var alki = new cookieStore("Alki", 2, 16, 4.6);

function randomizer(max, min){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var hourly = document.getElementById('hourly');

for(var i = 0; i < store.length; i++){ /* for each store */

    var newLine = document.createElement('li'); /* start new line */
    var li = '<p id="store">' + store[i].name + '</p>' + '<br>';

    for(var j = 0; j < hours.length; j++){ /* for each hour */

     /* randomize a number between min and max and store it in cookiesSold for each store */
        store[i].cookiesSold[j] = randomizer(store[i].max, store[i].min);
     /* add a new list item with hour: random number sold */
        li =  li + '<li id="list">' + hours[j] + ": " + store[i].cookiesSold[j] + " customers" + '</li>';

    }

    var totalCookies = 0; /* creating variable for total cookies sold */
    for(var k = 0; k < store[i].cookiesSold.length; k++){ /* for however many items are in the cookiesSold array */

     /* add each value in the array to totalCookies */
        totalCookies = totalCookies + store[i].cookiesSold[k];

    }
 /* add a new list item with total cookies */
    li = li + '<li id="list">' + "Total Cookies Sold: " + totalCookies + '</li>' + '<br>';
    store[i].total = totalCookies;

    newLine.innerHTML = li;
    //hourly.appendChild(newLine);
}


var data = document.getElementById('data');

for(var s = 0; s < store.length; s++){

  var tr = document.createElement('tr');

  var tdStore = document.createElement('td');
  var storeLocation = store[s].name;
  tdStore.innerHTML = storeLocation;
  tr.appendChild(tdStore);


    for(var k = 0; k < store[s].cookiesSold.length; k++){

        var tdHourly = document.createElement('td');
        var customers = store[s].cookiesSold[k];
        tdHourly.innerHTML = customers;
        tr.appendChild(tdHourly);

    }

    var tdTotal = document.createElement('td');
    var daily = store[s].total;
    tdTotal.innerHTML = daily;
    tr.appendChild(tdTotal);

    data.appendChild(tr);
}

var totals = document.getElementById('totals');

var tr = document.createElement('tr');
var tdZero = document.createElement('td');
tdZero.innerHTML = "Totals";
tr.appendChild(tdZero);

for(var a = 0; a <= hours.length; a++){

    var td = document.createElement('td');
    var sum = 0;

    for(var h = 0; h < store.length; h++){

        if(a === hours.length){

            sum = sum + store[h].total;
            td.innerHTML = sum;
            td.appendChild;

        } else{

            sum = sum + store[h].cookiesSold[a];
            td.innerHTML = sum;
            td.appendChild;

        }
    }

    tr.appendChild(td);

}

totals.appendChild(tr);