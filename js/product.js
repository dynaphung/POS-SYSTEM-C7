
//To display block on form add product
function addNewPro() {
    formAddPro.style.display = "block";
}

//to cancel to display none on cancel button
function onCancel() {
    formAddPro.style.display = "none";
}

//To make it can add new product 
const tbody = document.querySelector('tbody');
tbody.remove();
let tBody = document.createElement('tbody');

let productlist = [
    { id: 1, name: "Milk Tea", category: "drink", quantity: "2", price: "2", description: "test" },
    { id: 2, name: "Fry egg", category: "drink", quantity: "2", price: "2", description: "test" },
    { id: 3, name: "Apple", category: "drink", quantity: "2", price: "2", description: "test" },
];

function saveStorage() {
    localStorage.setItem("productlist", JSON.stringify(productlist));
}

function getStorage() {
    if (JSON.parse(localStorage.getItem("productlist")) != null) {
        productlist = JSON.parse(localStorage.getItem("productlist"));
    }
}


//To do
// function onAddProduct() {
//     // Get the form input values
//     const nameInput = document.getElementById("name").value;
//     const categoryInput = document.getElementById("category").value;
//     const quantityInput = document.getElementById("quantity").value;
//     const priceInput = document.getElementById("price").value;
//     const descriptionInput = document.getElementById("description").value;

//     // Create a new product object
//     const newProduct = {
//         id: productlist.length + 1,
//         name: nameInput,
//         category: categoryInput,
//         quantity: quantityInput,
//         price: priceInput,
//         description: descriptionInput,
//     };

//     // Add the new product to the product list
//     productlist.push(newProduct);

//     // Save the updated product list to localStorage
//     saveStorage();

//     // Clear the form input fields
//     document.getElementById("name").value = "";
//     document.getElementById("category").value = "";
//     document.getElementById("quantity").value = "";
//     document.getElementById("price").value = "";
//     document.getElementById("description").value = "";

//     // Hide the form
//     formAddPro.style.display = "none";

//     // Refresh the product table
//     displayProducts();

//     // Create a new tbody element for the product table
//     let tBody = document.createElement("tbody");

//     // Display the products in the product table
//     function displayProducts() {
//         // Clear the existing table rows
//         while (tBody.firstChild) {
//             tBody.removeChild(tBody.firstChild);
//         }

//         // Create table rows for each product
//         for (let product of productlist) {
//             let row = document.createElement("tr");

//             let idCell = document.createElement("td");
//             idCell.textContent = product.id;
//             row.appendChild(idCell);

//             let nameCell = document.createElement("td");
//             nameCell.textContent = product.name;
//             row.appendChild(nameCell);

//             let categoryCell = document.createElement("td");
//             categoryCell.textContent = product.category;
//             row.appendChild(categoryCell);

//             let quantityCell = document.createElement("td");
//             quantityCell.textContent = product.quantity;
//             row.appendChild(quantityCell);

//             let priceCell = document.createElement("td");
//             priceCell.textContent = product.price;
//             row.appendChild(priceCell);

//             let descriptionCell = document.createElement("td");
//             descriptionCell.textContent = product.description;
//             row.appendChild(descriptionCell);

//             tBody.appendChild(row);
//         }

//         // Replace the existing tbody with the updated one
//         let oldTBody = document.querySelector("tbody");
//         oldTBody.parentNode.replaceChild(tBody, oldTBody);
//     }
// }

// // Retrieve the product list from localStorage
// getStorage();

// // Display the initial products
// displayProducts();

let formAddPro = document.getElementById('productForm');

let productForm = document.getElementById("cancel");
productForm.addEventListener("click", onCancel)

let btnCreatePro = document.querySelector("#new_product");
btnCreatePro.addEventListener("click", addNewPro)



//Product Page
function filterData(e) {
    let cat = e.target.value;
    for (let tr of rows) {
        let category = tr.lastElementChild.previousElementSibling.textContent;
        if (category === cat) {
            tr.style.display = '';
        } else {
            tr.style.display = 'none';
        }
    }
}

function clearFilter() {
    for (let tr of rows) {
        tr.style.display = '';
    }
}

function searchName(e) {
    let text = e.target.value;
    for (let tr of rows) {
        let proName = tr.firstElementChild.nextElementSibling.textContent;
        if (proName.indexOf(text) !== -1) {
            tr.style.display = '';
        } else {
            tr.style.display = 'none';
        }
    }
}

// add categories to filter--------------------------------------
let sectIon = document.querySelector('#cat');
console.log(sectIon);

function chooseCategory(){
    sectIon.innerHTML = '';
    let datas = JSON.parse(localStorage.getItem('categories'));
    for (let data of datas){
        let option = document.createElement('option');
        option.value = data.name;
        option.textContent = data.name;
        sectIon.appendChild(option);
    }
}
chooseCategory();


// add product--------------------------
// let tbody = document.querySelector('tbody');
function addProdcut(data){
    // to do-----------------
    let tr = document.createElement('tr');
    let tdId = document.createElement('td');
    tdId.textContent = data.id;
    let tdName = document.createElement('td');
    tdName.textContent = data.name;
    let tdCategory = document.createElement('td');
    tdCategory.textContent = data.category;
    let tdPrice = document.createElement('td');
    tdPrice.textContent = data.price;

    tr.appendChild(tdId)
    tr.appendChild(tdName)
    tr.appendChild(tdCategory)
    tr.appendChild(tdPrice)
    tBody.appendChild(tr);
    
}

function loopProductAdd(){
    tbody.innerHTML = '';
    let datas = JSON.parse(localStorage.getItem('productlist'));
    for (let data of datas){
        addProdcut(data);
    }
}

loopProductAdd();