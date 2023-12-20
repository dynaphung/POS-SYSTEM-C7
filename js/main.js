
// Get data from local storage
const savedProducts = localStorage.getItem("products");
const products = savedProducts ? JSON.parse(savedProducts) : [];

const savedCategories = localStorage.getItem('categories');
const categories = savedCategories ? JSON.parse(savedCategories) : [];

// Calculate the number of categories
const productSold = products.length;
const category = categories.length;

// Get the table body by id
const tableHistore = document.getElementById("tableHistory");
let incomeTotal = 0;

// Loop for creating new products and displaying data in the table
for (let product of products) {
    let rowTable = document.createElement("tr");
    let tdName = document.createElement("td");
    let tdCategory = document.createElement("td");
    let tdPrice = document.createElement("td");
    let tdQuantity = document.createElement("td");
    let tdTotal = document.createElement("td");

    tdName.textContent = product.name;
    tdCategory.textContent = product.category;
    tdPrice.textContent = product.price + "$";
    tdQuantity.textContent = product.quantity;
    tdTotal.textContent = parseInt(product.price) * parseInt(product.quantity) + "$";

    rowTable.appendChild(tdName);
    rowTable.appendChild(tdCategory);
    rowTable.appendChild(tdPrice);
    rowTable.appendChild(tdQuantity);
    rowTable.appendChild(tdTotal);

    tableHistore.appendChild(rowTable);

    incomeTotal += parseInt(product.price) * parseInt(product.quantity);
}

// ------------------total stock in dashborad-----------
function stockData() {
    let listInput = document.querySelectorAll('.displayform h1')[3];
    // let data = JSON.parse(localStorage.getItem('product'));
    let instock = JSON.parse(localStorage.getItem('product'));
    let soldOut = productSold;
    let updatedStock = instock.length - soldOut;
    listInput.textContent = updatedStock;

}

stockData();

// Store the incomeTotal in the corresponding h1 element
document.getElementById('incomeTotal').textContent = incomeTotal + "$";
document.getElementById('sold-out').textContent = productSold;
document.getElementById('category-count').textContent = category;

// -----------show low product and hight product---------------------//
function lowStock(data) {

    let tbodyD = document.querySelector('tbody');
    let tr = document.createElement('tr');
    tr.style.textAlign = 'center';
    let tdName = document.createElement('td');
    tdName.textContent = data.name;
    let tdStock = document.createElement('td');
    tdStock.textContent = data.stock;
    let tdPrice = document.createElement('td');
    tdPrice.textContent = data.price;

    tr.appendChild(tdName);
    tr.appendChild(tdStock);
    tr.appendChild(tdPrice);
    tbodyD.appendChild(tr);

}

function loopLowstock() {
    let datas = JSON.parse(localStorage.getItem('data'));
    let lowproduct = 30;
    let arr = [];
    for (let data of datas) {
        for (let value of data.product) {
            if (value.stock < lowproduct) {
                arr.push(value);
            }
        }
    }

    return arr
}

function loopCreat() {
    document.querySelector('tbody').innerHTML = '';
    let data = loopLowstock();
    if (data.length != 0) {
        for (let i = 0; i < data.length; i++) {
            lowStock(data[i]);
        }
    } else {
        lowStock(data);
    }
}
// loopCreat();

let lowBtn = document.querySelector('.btn');
lowBtn.addEventListener('click', loopCreat);

// -------------best selling--------------

let hightBtn = document.querySelector('.btn');
hightBtn.addEventListener('click', () => {
    document.querySelector('tbody').innerHTML = '';
});
