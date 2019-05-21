'use strict';

var hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm",
            "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm"];

var store = [
    {
        name: "1st and Pike",
        min: 23,
        max: 65,
        avgCookies: 6.3,
    },
    {
        name: "Seatac Airport",
        min: 3,
        max: 24,
        avgCookies: 1.2,
    },
    {
        name: "Seattle Center",
        min: 11,
        max: 38,
        avgCookies: 3.7,
    },
    {
        name: "Capitol Hill",
        min: 20,
        max: 38,
        avgCookies: 2.3,
    },
    {
        name: "Alki",
        min: 2,
        max: 16,
        avgCookies: 4.6,
    }
]

function randomizer(max, min){
    return Math.floor(Math.random() * (max - min + 1) + min);
};

//for testing randomizer
//console.log(randomizer(1, 50));

var hourly = document.getElementById('hourly');

for(var z=0; z < store.length; z++){

    var newLine = document.createElement('li');
    var li = '<p>' + store[z].name + '</p>'
    for(var h=0; h < hours.length; h++){
        li =  li + '<li>' + hours[h] + ": " + randomizer(store[z].max, store[z].min) + " customers" + '</li>';
    }

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