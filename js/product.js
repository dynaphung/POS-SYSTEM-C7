
let formAddPro = document.getElementById('productForm');

let btnCreatePro = document.querySelector("#new_product");
btnCreatePro.addEventListener("click", addNewProduct)

let productForm = document.getElementById("cancel");
productForm.addEventListener("click", onCancel)

// //To display block on form add product
function addNewProduct() {
    formAddPro.style.display = "block";
}

//to cancel to display none on cancel button
function onCancel() {
    formAddPro.style.display = "none";
}


//clear filter, search, filter category
const select = document.querySelector('#cat');
const rows = document.querySelectorAll('tbody tr');
const btn = document.querySelector('#clearfilter');
const search = document.querySelector('#search');

select.addEventListener('change', filterData);
btn.addEventListener('click', clearFilter);
search.addEventListener('input', searchName);

function filterData(e) {
    const cat = e.target.value;
    for (let tr of rows) {
        const category = tr.children[2].textContent;
        if (cat === '' || category === cat) {
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
    select.selectedIndex = 0;
}

function searchName() {
    const searchText = search.value.toLowerCase();
    for (let tr of rows) {
        const productName = tr.children[1].textContent.toLowerCase();
        if (productName.includes(searchText)) {
            tr.style.display = '';
        } else {
            tr.style.display = 'none';
        }
    }
}


// // add categories to filter--------------------------------------
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
chooseCategory();





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
    tdCategory.textContent = data.categories;
    let tdQty = document.createElement('td');
    let inputQty = document.createElement('input');
    inputQty.type = 'number';
    inputQty.id = 'quantity';
    inputQty.name = 'quantity';
    inputQty.required = true;
    tdQty.appendChild(inputQty);

    let tdPrice = document.createElement('td');
    tdPrice.textContent = data.price + '$';

    let tdAction = document.createElement('td');
    let i = document.createElement('i');
    i.setAttribute('class', 'material-symbols-outlined');
    i.textContent = 'visibility';
    let i1 = document.createElement('i');
    i1.setAttribute('class', 'material-symbols-outlined');
    i1.textContent = 'edit';
    let i2 = document.createElement('i');
    i2.setAttribute('class', 'material-symbols-outlined');
    i2.textContent = 'delete';
    tdAction.appendChild(i);
    tdAction.appendChild(i1);
    tdAction.appendChild(i2);


    tr.appendChild(tdId);
    tr.appendChild(tdName);
    tr.appendChild(tdCategory);
    tr.appendChild(tdQty);
    tr.appendChild(tdPrice);
    tr.appendChild(tdAction);
    tbody.appendChild(tr);

}


function loopProductAdd() {
    // tbody.innerHTML = '';
    let datas = JSON.parse(localStorage.getItem('product'));
    for (let data of datas) {
        addProdcut(data);
    }
}
loopProductAdd();

function getValueFromInputProduct(){
    let allinput = document.querySelectorAll('.form-group');
    let data = JSON.parse(localStorage.getItem('product'));
    let obj = {};
    obj.id = allinput[2].children[1].value;
    obj.name = allinput[0].children[1].value;
    obj.categories = allinput[1].children[1].value;
    obj.price = allinput[3].children[1].value;
    data.push(obj);
    localStorage.setItem('product', JSON.stringify(data));
    // chooseCategory();
    window.location.reload();
    // console.log(data)

}


let searchP = document.querySelector('#search');
console.log(searchP);
function searchProduct(){

    let data = document.querySelectorAll('tr');
    for (let value of data){
        if (value.children[1].textContent != 'Product Name'){
            if (value.children[1].textContent.toLocaleLowerCase().includes(searchP.value.toLocaleLowerCase())){
                value.style.display = '';
            }else{
                value.style.display = 'none'
            }
        }
        
    }
}

searchP.addEventListener('keyup',  searchProduct);