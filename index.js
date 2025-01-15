let rows = 0
const submit = document.querySelector('button')
let totalSalary = 0;


function handleClick() {
    const tableData = document.getElementById('table'),
        newRow = tableData.insertRow(tableData.length),
        cellone = newRow.insertCell(0),
        celltwo = newRow.insertCell(1),
        cellthree = newRow.insertCell(2),
        cellfour = newRow.insertCell(3),
        cellfive = newRow.insertCell(4),

        firstName = document.getElementById('firstname').value,
        lastName = document.getElementById('lastname').value,
        id = document.getElementById('id').value,
        title = document.getElementById('title').value,
        salary = document.getElementById('salary').value

        

        cellone.innerHTML = firstName
        celltwo.innerHTML = lastName
        cellthree.innerHTML = id
        cellfour.innerHTML = title
        cellfive.innerHTML = salary


    console.log('you pressed submit' )
        
    totalSalary += parseFloat(salary)
    totalMontly()



}

function totalMontly() {
    const totalmMonthlySalary = document.getElementById('totalMonth')
    totalmMonthlySalary.textContext = totalSalary.toFixed(2)
    console.log(totalmMonthlySalary)
}

submit.addEventListener('click', handleClick)