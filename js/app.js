'use strict';

/*      Event Listener OPEN         */

var form = document.getElementById('newStore');
form.addEventListener('submit', submitForm);

function submitForm(event){
    event.preventDefault();
    if(event.target){
        console.log('the event.target is ', event.target);
        console.log('the event.target.name is ', event.target.name);
        console.log('the event.target.min is ', event.target.min);
        console.log('the event.target.max is ', event.target.max);
        console.log('the event.target.average is ', event.target.average);
    }
}

/*      Event Listener CLOSE        */


var hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm",
            "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm"];


// function cookieStore(name,min,max,avgCookies){
//     this.name = name;
//     this.min = min;
//     this.max = max;
//     this.avgCookies = avgCookies;
// }

// var pike = cookieStore("1st and Pike", 23, 65, 6.3);
// var seatac = cookieStore("Seatac Airport", 3, 24, 1.2);
// var seattle = cookieStore("Seattle Center", 11, 38, 3.7);
// var capitol = cookieStore("Capitol Hill", 20, 38, 2.3);
// var alki = cookieStore("Alki", 2, 16, 4.6);

// cookieStore.prototype.avgCookies = [];

var store = [
    {
        name: "1st and Pike",
        min: 23,
        max: 65,
        avgCookies: 6.3,
        cookiesSold: [],
    },
    {
        name: "Seatac Airport",
        min: 3,
        max: 24,
        avgCookies: 1.2,
        cookiesSold: [],
    },
    {
        name: "Seattle Center",
        min: 11,
        max: 38,
        avgCookies: 3.7,
        cookiesSold: [],
    },
    {
        name: "Capitol Hill",
        min: 20,
        max: 38,
        avgCookies: 2.3,
        cookiesSold: [],
    },
    {
        name: "Alki",
        min: 2,
        max: 16,
        avgCookies: 4.6,
        cookiesSold: [],
    }
]

function randomizer(max, min){
    return Math.floor(Math.random() * (max - min + 1) + min);
};

//testing randomizer
//console.log(randomizer(1, 50));

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
    //console.log(store[i].cookiesSold);

    var totalCookies = 0; /* creating variable for total cookies sold */
    for(var k = 0; k < store[i].cookiesSold.length; k++){ /* for however many items are in the cookiesSold array */

        //console.log(totalCookies);
     /* add each value in the array to totalCookies */
        totalCookies = totalCookies + store[i].cookiesSold[k];
        //console.log(totalCookies);

    }
 /* add a new list item with total cookies */
    li = li + '<li id="list">' + "Total Cookies Sold: " + totalCookies + '</li>' + '<br>';
    store[i].cookiesSold = store[i].cookiesSold;
    store[i].total = totalCookies;

    newLine.innerHTML = li;
    hourly.appendChild(newLine);
}


var data = document.getElementById('data');

for(var s = 0; s < store.length; s++){

  var tr = document.createElement('tr');

  var tdStore = document.createElement('td');
  var storeLocation = store[s].name;
  tdStore.innerHTML = storeLocation;
  tr.appendChild(tdStore);


    for(var k = 0; k < store[0].cookiesSold.length; k++){

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

            break;

        }

        sum = sum + store[h].cookiesSold[a];
        //console.log(store[h].cookiesSold[a], sum);
        td.innerHTML = sum;
        td.appendChild;
    }

    tr.appendChild(td);

}

totals.appendChild(tr);