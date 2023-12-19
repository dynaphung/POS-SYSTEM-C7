
// Get data from local storage ======================
const savedProducts = localStorage.getItem("products");
const products = savedProducts ? JSON.parse(savedProducts) : [];

// Get the table body  by id =================
const tableBody = document.getElementById("tableHistory");

// Loop for creating new products display data to table =================
for (let product of products) {

    // Create a new table row =================
    let tRow = document.createElement("tr");

    // Create table td =================
    let tdCustomer = document.createElement("td");
    let tdName = document.createElement("td");
    let tdCategory = document.createElement("td");
    let tdPrice = document.createElement("td");
    let tdQuantity = document.createElement("td");
    let tdTotal = document.createElement("td");

    // add textContent to the table row =================
    tdCustomer.textContent = product.customer
    tdName.textContent = product.name;
    tdCategory.textContent = product.category;
    tdPrice.textContent = product.price + "$";
    tdQuantity.textContent = product.quantity;
    tdTotal.textContent = parseInt(product.price) * parseInt(product.quantity) + "$";

    // Append all data such as name, category, price to tRow =====================
    tRow.appendChild(tdCustomer)
    tRow.appendChild(tdName);
    tRow.appendChild(tdCategory);
    tRow.appendChild(tdPrice);
    tRow.appendChild(tdQuantity);
    tRow.appendChild(tdTotal);

    // Append tRow to the tbody =====================
    tableBody.appendChild(tRow);
}


