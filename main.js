const teams = ["Braves", "Nationals","Phillies","Mets","Marlins","Cardinals","Cubs","Brewers","Reds","Pirates","Dogers","Diamondbacks","Giants","Padres","Rockies",];
const wins = [89,79,74,72,51,81,76,74,67,62,93,75,69,66,60];
const losses = [55,63,68,70,91,62,66,68,77,81,52,68,74,76,84];

const tableBody = document.getElementById('tableBody');

for (let i = 0; i < teams.length; i++) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${teams[i]}</td>
        <td>${wins[i]}</td>
        <td>${losses[i]}</td>`;
        tableBody.appendChild(row);
};

let high = 0;
let highIndex = -1;

for (let j = 0; j < wins.length; j++) {
    if (wins[j] > high) {
        high = wins[j];
        highIndex = j;
    }
} 


if (highIndex !== -1) {
    const rows = tableBody.getElementsByTagName('tr');
    rows[highIndex].getElementsByTagName('td')[0].innerHTML = `<strong>${teams[highIndex]}</strong>`;
    rows[highIndex].getElementsByTagName('td')[1].innerHTML = `<strong>${wins[highIndex]}</strong>`;
    rows[highIndex].getElementsByTagName('td')[2].innerHTML = `<strong>${losses[highIndex]}</strong>`;
}

