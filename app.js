var StudentName = prompt('Enter Student Name')
var math = +prompt('Enter Math Marks')
var urdu = +prompt('Enter Urdu Marks')
var english = +prompt('Enter English Marks')
var islamiyat = +prompt('Enter Islamiyat Marks')
var chemistry = +prompt('Enter Chemistry Marks')
var total = math + urdu + english + islamiyat + chemistry
var perc = total / 500 * 100
var grade;
if (perc >= 80) {
    grade = 'A+'
}
else if(perc >= 100){
    grade = 'INVALID'
}
else if(perc >= 70){
    grade = 'A'
}
else if(perc >= 60){
    grade = 'B'
}
else if(perc >= 50){
    grade = 'C'
}
else if(perc >= 40){
    grade = 'D'
}
else{
    grade = 'FAIL'
}
document.write(
    `
    <table align='center' border='2px'>
        <tr>
            <th>Name</th>
            <th>Math</th>
            <th>Urdu</th>
            <th>English</th>
            <th>Islamiyat</th>
            <th>Chemistry</th>
            <th>Total</th>
            <th>Percentage</th>
            <th>Grade</th>
        </tr>
        <tr>
            <td>${StudentName}</td>
            <td>${math}</td>
            <td>${urdu}</td>
            <td>${english}</td>
            <td>${islamiyat}</td>
            <td>${chemistry}</td>
            <td>${total}</td>
            <td>${perc}</td>
            <td>${grade}</td>
        </tr>
    </table>
    `
)