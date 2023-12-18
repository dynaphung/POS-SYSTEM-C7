// Data = [] because we need to input the data to the tabels and store data in localstorage

const products = [];

// function call the table that will show data ========================
function displayTable() {
    const tbody = document.querySelector(".myTable tbody");
    const totalInput = document.querySelector("input[type='get-total']");

    // set data == " " after we input all information ===================

    tbody.innerHTML = "";
    // crate variable == 0 that count all total price ===================
    let total = 0;

    // loop for displaying table =================
    for (let product of products) {
        // create a new table =================
        let tableRow = document.createElement("tr");

        // call the table td that have data =================
        let tdName = document.createElement("td");
        let tdCategory = document.createElement("td");
        let tdPrice = document.createElement("td");
        let tdQty = document.createElement("td");
        let tdTotal = document.createElement("td");

        // textContent all data =======================
        tdName.textContent = product.name;
        tdCategory.textContent = product.category;
        tdPrice.textContent = product.price + "$";
        tdQty.textContent = product.quantity;
        tdTotal.textContent = product.price * product.quantity + "$";

        // apppend all data such as Idname, tdCategory, tdPrice, tdQty, total to tableRow
        tableRow.appendChild(tdName);
        tableRow.appendChild(tdCategory);
        tableRow.appendChild(tdPrice);
        tableRow.appendChild(tdQty);
        tableRow.appendChild(tdTotal);

        // append tableRow to tbody ===================
        tbody.appendChild(tableRow);

        // multiple price with quanlity (parseInt is function convert string to integer) ================= 
        total += parseInt(product.price) * parseInt(product.quantity);
    }

    // function store all count of price ================
    totalInput.value = total + "$";
}

// function buy product =================
function buyProduct(event) {
    // set preventDefault after input new product ================
    event.preventDefault();

    // call all input that input product =====================
    const nameInput = document.getElementById("enter-name");
    const categoryInput = document.getElementById("enter-category");
    const priceInput = document.getElementById("enter-price");
    const quantityInput = document.getElementById("enter-quantity");

    // varible set data of product ===================
    const name = nameInput.value;
    const category = categoryInput.value;
    const price = parseFloat(priceInput.value);
    const quantity = parseInt(quantityInput.value);

    // Check if any input field is empty is display new data in table ==============
    if (name === "" || category === "" || price === 0 || quantity === 0) {
        alert("Please enter information of product");
        return;
    }

    // varible new product input =================
    const product = {
        name: name,
        category: category,
        price: price,
        quantity: quantity,
    };

    // push the new product into the table and store in localstorage ============
    products.push(product);
    displayTable();
    saveProduct();

    // clear the value before input new data =================
    nameInput.value = "";
    categoryInput.value = "";
    priceInput.value = "";
    quantityInput.value = "";
}

// function save Product in localstorage =================
function saveProduct() {
    localStorage.setItem("products", JSON.stringify(products));
}

// function get product from input field =================
function loadProduct() {
    const savedProducts = localStorage.getItem("products");
    if (savedProducts) {
        products.push(...JSON.parse(savedProducts));
        displayTable();
    }
}

// button click buy product ================================

const buyNow = document.getElementById("buy-product");
buyNow.addEventListener("click", buyProduct);
// call loadProdoct for get data from input ===============
loadProduct();