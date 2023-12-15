
const products = [
    {
        id: 1,
        productName: "Orange",
        category: "Fruit",
        quantity: 2,
        price: 10,
    },
    {
        id: 2,
        productName: "My boy",
        category: "Cake",
        quantity: 4,
        price: 10,
    },
    {
        id: 3,
        productName: "Burger",
        category: "Snack",
        quantity: 3,
        price: 10,
    },
    {
        id: 4,
        productName: "Lemon",
        category: "Fruit",
        quantity: 4,
        price: 10,
    },
    {
        id: 5,
        productName: "Chhampion Ice",
        category: "Drink",
        quantity: 5,
        price: 10,
    },
    {
        id: 6,
        productName: "Coconut",
        category: "Fruit",
        quantity: 6,
        price: 10,
    },
    {
        id: 7,
        productName: "Cafe",
        category: "Drink",
        quantity: 7,
        price: 10,
    },
];

function displayTable() {
    const tbody = document.querySelector(".user-list tbody");

    for (let product of products) {
        let tableRow = document.createElement("tr");

        let tdId = document.createElement("td");
        let tdProductName = document.createElement("td");
        let tdCategory = document.createElement("td");
        let tdQuantity = document.createElement("td");
        let tdPrice = document.createElement("td");
        let tdActions = document.createElement("td");

        tdId.textContent = product.id;
        tdProductName.textContent = product.productName;
        tdCategory.textContent = product.category;
        tdQuantity.textContent = product.quantity;
        tdPrice.textContent = product.price + "$";

        let deleteIcon = document.createElement("i");
        deleteIcon.classList.add("fas", "fa-trash", "delete-icon");
        deleteIcon.addEventListener("click", function () {
            deleteProduct(product.id);
        });

        let editIcon = document.createElement("i");
        editIcon.classList.add("fas", "fa-edit", "edit-icon");
        editIcon.addEventListener("click", function () {
            editProduct(product.id);
        });

        tdActions.appendChild(deleteIcon);
        tdActions.appendChild(editIcon);

        tableRow.appendChild(tdId);
        tableRow.appendChild(tdProductName);
        tableRow.appendChild(tdCategory);
        tableRow.appendChild(tdQuantity);
        tableRow.appendChild(tdPrice);
        tableRow.appendChild(tdActions);

        tbody.appendChild(tableRow);
    }
}

function deleteProduct(productId) {
    console.log("Deleting", productId);
}

function editProduct(productId) {
    console.log("Editing", productId);
}

// function select data category ==================================

function selectCategory(e) {

    let selecter = e.target.value.toLowerCase();
    let rows = document.querySelectorAll(".user-list tbody tr");

    for (let row of rows) {
        let category = row.querySelector("td:nth-child(3)").textContent.toLowerCase();

        if (category === selecter) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    }
}

// function for clear data ===================================
function clearFilter() {

    let rows = document.querySelectorAll(".user-list tbody tr");

    for (let row of rows) {
        row.style.display = "";
    }
}

// Create function for searching list name of product ==========================

function searchProduct(e) {
    let text = e.target.value.toLowerCase();
    let rows = document.querySelectorAll(".user-list tbody tr");

    for (let row of rows) {
        let productName = row.querySelector("td:nth-child(2)").textContent.toLowerCase();

        if (productName.includes(text)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    }
}

// ==========================================================

const select = document.querySelector("#selecter");
const search = document.querySelector("#search");

select.addEventListener("change", selectCategory);
search.addEventListener("keyup", searchProduct);

// call function to display ==============================
displayTable();

