// Set values null because we need to in put data ==================?
const products = [];

function displayTable() {
    const tbody = document.querySelector(".myTable tbody");
    const totalInput = document.querySelector("input[type='get-total']");

    tbody.innerHTML = "";

    let total = 0;

    for (let product of products) {
        let tableRow = document.createElement("tr");

        let tdName = document.createElement("td");
        let tdCategory = document.createElement("td");
        let tdPrice = document.createElement("td");
        let tdQty = document.createElement("td");
        let tdTotal = document.createElement("td");

        tdName.textContent = product.name;
        tdCategory.textContent = product.category;
        tdPrice.textContent = product.price + "$";
        tdQty.textContent = product.quantity;
        tdTotal.textContent = product.price * product.quantity + "$";

        tableRow.appendChild(tdName);
        tableRow.appendChild(tdCategory);
        tableRow.appendChild(tdPrice);
        tableRow.appendChild(tdQty);
        tableRow.appendChild(tdTotal);

        tbody.appendChild(tableRow);

        total += parseInt(product.price) * parseInt(product.quantity);
    }

    totalInput.value = total + "$";
}

function buyProduct(event) {
    event.preventDefault();

    const nameInput = document.getElementById("enter-name");
    const categoryInput = document.getElementById("enter-category");
    const priceInput = document.getElementById("enter-price");
    const quantityInput = document.getElementById("enter-quantity");

    const product = {
        name: nameInput.value,
        category: categoryInput.value,
        price: parseFloat(priceInput.value),
        quantity: parseInt(quantityInput.value),
    };

    products.push(product);
    displayTable();
    saveProduct();

    nameInput.value = "";
    categoryInput.value = "";
    priceInput.value = "";
    quantityInput.value = "";
}

function buyProduct(event) {
    // Prevent form submission ===================?
    event.preventDefault();

    const nameInput = document.getElementById("enter-name");
    const categoryInput = document.getElementById("enter-category");
    const priceInput = document.getElementById("enter-price");
    const quantityInput = document.getElementById("enter-quantity");

    // list our product ===================== ?
    const product = {
        name: nameInput.value,
        category: categoryInput.value,
        price: parseFloat(priceInput.value),
        quantity: parseInt(quantityInput.value),
    };

    // put data in table ================ ?
    products.push(product);
    displayTable();
    saveProduct();

    // Clear the input fields after buying the product ============?
    nameInput.value = "";
    categoryInput.value = "";
    priceInput.value = "";
    quantityInput.value = "";
}

// function store data to localstorage ================= ?
function saveProduct() {
    localStorage.setItem("products", JSON.stringify(products));
}


function loadProduct() {
    const savedProducts = localStorage.getItem("products");
    if (savedProducts) {
        products.push(...JSON.parse(savedProducts));
        displayTable();
    }
}

// button click for buy product =============== ?
document.addEventListener("DOMContentLoaded", function () {
    const buyNow = document.getElementById("buy-product");
    buyNow.addEventListener("click", buyProduct);

    loadProduct();
});