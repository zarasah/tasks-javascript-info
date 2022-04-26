/**          Create a calendar 
 * 
 * Write a function createCalendar(elem, year, month). 
 * The call should create a calendar for the given year/month and put it inside elem. 
 * The calendar should be a table, where a week is <tr>, and a day is <td>. 
 * The table top should be <th> with weekday names: 
 * the first day should be Monday, and so on till Sunday. 
*/

const dayArr = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU']

let calendar = document.createElement('div');

document.body.append(calendar);
let table = document.createElement('table');
calendar.append(table);

function createCalendar(elem, year, month) {
    let firstTr = document.createElement('tr');
    elem.append(firstTr);
    for (let k = 0; k < 7; k++) {
        let th = document.createElement('th');
        th.textContent = dayArr[k];
        firstTr.append(th);
    }

    let d = new Date(year, month - 1);
    let firstDay = d.getDay();

    if (firstDay === 0) {
        firstDay = 7;
    }

    // first row
    let tr = document.createElement('tr');
    elem.append(tr);
        for (let j = 0; j < firstDay - 1; j++) {
            let td = document.createElement('td');
            td.textcontent = '';
            tr.append(td);
        }
            
        for (j = firstDay - 1; j < 7; j++) {
            let td = document.createElement('td');
            td.textContent = d.getDate();
            tr.append(td);
            d.setDate(d.getDate()+1)
        }

    //middle rows

    while(d.getMonth() === month - 1) {
        
            let tr = document.createElement('tr');
            elem.append(tr);
            for (let i = 0; i < 7; i++) {
                let td = document.createElement('td');
                td.textContent = d.getDate();
                tr.append(td);
                if(d.getMonth() !== month - 1) {
                    td.textContent = '';
                    tr.append(td);
                }
                d.setDate(d.getDate() + 1)
                
            }           
        
    }
}
createCalendar(calendar, 2012, 9);
//createCalendar(calendar, 2022, 4);
//createCalendar(calendar, 2022, 3);