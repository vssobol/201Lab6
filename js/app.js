'use strict';

var hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm",
            "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm"];

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

//for testing randomizer
//console.log(randomizer(1, 50));

var hourly = document.getElementById('hourly');

for(var i = 0; i < store.length; i++){

    var newLine = document.createElement('li');
    var li = '<p>' + store[i].name + '</p>'

    for(var j = 0; j < hours.length; j++){

        store[i].cookiesSold[j] = randomizer(store[i].max, store[i].min);
        li =  li + '<li>' + hours[j] + ": " + store[i].cookiesSold[j] + " customers" + '</li>';

    }

    // for(var k = 0; k < store[0].cookiesSold.length; k++){

    //     var totalCookies = 0;
    //     totalCookies = totalCookies + store[i].cookiesSold[k];
    //     li = li + '<li>' + "Total Cookies Sold: " + totalCookies + '</li>';

    // }

    newLine.innerHTML = li;
    hourly.appendChild(newLine);
}


// var data = document.getElementById('data');
// var tr = document.createElement('tr');

// for(var i=0; i <= hours.length; i++){
    
//     for(var s=0; s < store.length; s++){
//         var td = document.createElement('td');
//         td.innerHTML = store[s].name;
//         tr.appendChild(td);
//     }

// //     table.push(
// //         '<td id="data">' + store[i].name + '</td>' +
// //         '<td>' + store[i].min + '</td>' +
// //         '<td>' + store[i].max + '</td>' +
// //         '<td>' + store[i].avgCookies + '</td>'
// //     )
// }

// // if(store.length > 0){
// //     document.createElement('/tr');
// // }
// data.appendChild(tr);