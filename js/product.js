
let formAddPro = document.getElementById('productForm');

let btnCreatePro = document.querySelector("#new_product");
btnCreatePro.addEventListener("click", addNewProduct)

let productForm = document.getElementById("cancel");
productForm.addEventListener("click", onCancel)

let editor = null;
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


//data storage_______________
let datas = JSON.parse(localStorage.getItem('product'));
// add product--------------------------

let table = document.querySelector('table');


function addProdcut() {
    // to do-----------------
    let datas = JSON.parse(localStorage.getItem('product'));
    document.querySelector('tbody').remove();

    let newTbody = document.createElement('tbody');

    for (let index in datas) {
        let tr = document.createElement('tr');
        tr.dataset.index = index;

        let tdId = document.createElement('td');
        tdId.textContent = parseInt(index)+1;

        let tdName = document.createElement('td');
        tdName.textContent = datas[index].name;

        let tdCategory = document.createElement('td');
        tdCategory.textContent = datas[index].categories;
        let tdQty = document.createElement('td');
        tdQty.textContent = datas[index].id
        

        let tdPrice = document.createElement('td');
        tdPrice.textContent = datas[index].price + '$';

        let tdAction = document.createElement('td');

        let i1 = document.createElement('i');
        i1.setAttribute('class', 'material-symbols-outlined');
        i1.textContent = 'edit';
        i1.addEventListener('click', onedit)

        let i2 = document.createElement('i');
        i2.setAttribute('class', 'material-symbols-outlined');
        i2.textContent = 'delete';
        i2.addEventListener('click', ondelete)

        tdAction.appendChild(i1);
        tdAction.appendChild(i2);


        tr.appendChild(tdId);
        tr.appendChild(tdName);
        tr.appendChild(tdCategory);
        tr.appendChild(tdQty);
        tr.appendChild(tdPrice);
        tr.appendChild(tdAction);
        newTbody.appendChild(tr);

    }
    table.appendChild(newTbody)

}

addProdcut()
//delete

function ondelete(e) {
    let index = e.target.closest('tr').dataset.index;
    if (confirm('Are you sure you want to delete this product?')){
        datas.splice(index, 1)
    }

    localStorage.setItem('product', JSON.stringify(datas));
    addProdcut()

}

function onedit(e){
    let data = JSON.parse(localStorage.getItem('product'));

    let index = e.target.closest('tr').dataset.index;

    let allinput = document.querySelectorAll('.form-group');

    allinput[2].children[1].value = data[index].id
    allinput[0].children[1].value= data[index].name
    allinput[1].children[1].value= data[index].categories
    allinput[3].children[1].value= data[index].price
    formAddPro.style.display = 'block'

    editor = index

}
function getValueFromInputProduct() {
    let allinput = document.querySelectorAll('.form-group');
    let data = JSON.parse(localStorage.getItem('product'));
    let obj = {
        id:allinput[2].children[1].value,
        name:allinput[0].children[1].value,
        categories: allinput[1].children[1].value,
        price :allinput[3].children[1].value,

    };

    if (editor === null){
        data.push(obj);
    }else{
        data[editor] = obj
    }

    localStorage.setItem('product', JSON.stringify(data));
    // chooseCategory();
    window.location.reload();
    // console.log(data)

}


let searchP = document.querySelector('#search');
console.log(searchP);
function searchProduct() {

    let data = document.querySelectorAll('tr');
    for (let value of data) {
        if (value.children[1].textContent != 'Product Name') {
            if (value.children[1].textContent.toLocaleLowerCase().includes(searchP.value.toLocaleLowerCase())) {
                value.style.display = '';
            } else {
                value.style.display = 'none'
            }
        }

    }
}

searchP.addEventListener('keyup', searchProduct);