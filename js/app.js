'use strict';

/*      Event Listener OPEN         */

var form = document.getElementById('newStore');

function submitForm(form){
    event.preventDefault();

    var newStore = [event.target.name.value, Number(event.target.min.value), Number(event.target.max.value), Number(event.target.average.value)];

    new cookieStore(newStore[0], newStore[1], newStore[2], newStore[3]);

    data.innerHTML = "";
    totals.innerHTML = "";
    tBody();
    tFooter();

    event.target.name.value = null;
    event.target.min.value = null;
    event.target.max.value = null;
    event.target.average.value = null;
    
}

form.addEventListener('submit', submitForm);

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

function randomizer(max, min, avgCookies){
    return Math.floor((Math.random() * (max - min + 1) + min) * avgCookies);
}

function tBody(){

    for(var i = 0; i < store.length; i++){

        for(var j = 0; j < hours.length; j++){
            store[i].cookiesSold[j] = randomizer(store[i].max, store[i].min, store[i].avgCookies);
        }
        var totalCookies = 0;
    
        for(var k = 0; k < store[i].cookiesSold.length; k++){
            totalCookies = totalCookies + store[i].cookiesSold[k];
        }
        store[i].total = totalCookies;
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
}

function tFooter(){
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

}

tBody();
tFooter();