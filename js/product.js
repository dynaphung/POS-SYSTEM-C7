
//To display block on form add product
function addNewPro() {
    formAddPro.style.display = "block";
}

//to cancel to display none on cancel button
function onCancel() {
    formAddPro.style.display = "none";
}

//To make it can add new product 
// const tbody = document.querySelector('tbody');
// tbody.remove();
// let tBody = document.createElement('tbody');

let productlist = [
    { id: 1, name: "Milk Tea", category: "drink", quantity: "2", price: "2", description: "test" },
    { id: 2, name: "Fry egg", category: "drink", quantity: "2", price: "2", description: "test" },
    { id: 3, name: "Apple", category: "drink", quantity: "2", price: "2", description: "test" },
];

function saveStorage() {
    localStorage.setItem("productlist", JSON.stringify(productlist));
}
// saveStorage();

function getStorage() {
    if (JSON.parse(localStorage.getItem("productlist")) != null) {
        productlist = JSON.parse(localStorage.getItem("productlist"));
    }
}


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

function chooseCategory() {
    sectIon.innerHTML = '';
    let datas = JSON.parse(localStorage.getItem('categories'));
    for (let data of datas) {
        let option = document.createElement('option');
        option.value = data.name;
        option.textContent = data.name;
        sectIon.appendChild(option);
    }
}
// chooseCategory();



//btn add product
let btnaddProduct = document.getElementById("addProduct");
btnaddProduct.addEventListener("click", addProdcut);



// add product--------------------------
let tbody = document.querySelector('tbody');
function addProdcut(data) {
    // to do-----------------
    let tr = document.createElement('tr');

    let tdId = document.createElement('td');
    tdId.textContent = data.id;

    let tdName = document.createElement('td');
    tdName.textContent = data.name;

    let tdCategory = document.createElement('td');
    // let inputCate = document.createElement('input');
    // inputCate.type = 'number';
    // inputCate.id = 'quantity';
    // inputCate.name = 'quantity';
    // inputCate.required = true;
    // tdCategory.appendChild(inputCate);
    tdCategory.textContent = data.category;
    // console.log(tdCategory);

    let tdPrice = document.createElement('td');
    tdPrice.textContent = data.price;

    


    tr.appendChild(tdId)
    tr.appendChild(tdName)
    tr.appendChild(tdCategory)
    tr.appendChild(tdPrice)
    tbody.appendChild(tr);

}


function loopProductAdd() {
    tbody.innerHTML = '';
    let datas = JSON.parse(localStorage.getItem('productlist'));
    for (let data of datas) {
        addProdcut(data);
    }
}

loopProductAdd();


