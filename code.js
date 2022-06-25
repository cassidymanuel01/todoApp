let myList = document.getElementById('newUL');
console.log(myList)
// localStorage.clear()
let lists = JSON.parse(localStorage.getItem('data')) ?
JSON.parse(localStorage.getItem('data')) : [];

function initiate() {
    myList.innerHTML = ''
    lists.forEach(element => {
        myList.innerHTML += `
        <li class="d-flex justify-content-between p-1">
        <input class="form-check-input" type="checkbox">
        <p>${element.item}</p>
        <i class='bi bi-trash' onclick='deleteData(event)'></i>
        </li>`
    });
    console.table(lists)
}
initiate()

function addData() {
    let todo = document.getElementById('myInput').value
    lists.push({
        id: lists.length + 1,
        item: todo,
    });
    initiate()
    localStorage.setItem('data', JSON.stringify(lists))
}

function deleteData(event) {
    event.target.parentElement.remove();
}

function sort() {
    myList.innerHTML = ''
    let sortBy = lists.sort(function (a, b) {
        if (a.item.toLowerCase() < b.item.toLowerCase()) {
            return -1;
        }
        if (a.item.toLowerCase() > b.item.toLowerCase()) {
            return 1;
        }
        return 0;
    });

    console.log(sortBy);
    sortBy.forEach(element => {
       initiate()
    });
}