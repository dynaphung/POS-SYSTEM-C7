const products = [
    {
      id: 1,
      category: "Fruit",
    },
    {
      id: 2,
      category: "Cake",
    },
    {
      id: 3,
      category: "Snack",
    },
    {
      id: 4,
      category: "Fruit",
    },
    {
      id: 5,
      category: "Drink",
    },
    {
      id: 6,
      category: "Fruit",
    },
    {
      id: 7,
      category: "Drink",
    },
  ];
  
  function displayTable() {
    const tbody = document.querySelector(".user-list tbody");
  
    for (let product of products) {
      let tableRow = document.createElement("tr");
  
      let tdId = document.createElement("td");
      let tdCategory = document.createElement("td");
      let tdActions = document.createElement("td");
  
      tdId.textContent = product.id;
      tdCategory.textContent = product.category;
  
      let btnDelete = document.createElement('button');
      btnDelete.classList.add('delete');
      btnDelete.textContent = 'Delete';
      btnDelete.addEventListener('click', () => {
        deleteRow(tableRow, product.id);
      });
  
      let btnEdit = document.createElement('button');
      btnEdit.classList.add('edit');
      btnEdit.textContent = 'Edit';
  
      tdActions.appendChild(btnEdit);
      tdActions.appendChild(btnDelete);
  
      tableRow.appendChild(tdId);
      tableRow.appendChild(tdCategory);
      tableRow.appendChild(tdActions);
  
      tbody.appendChild(tableRow);
    }
  }
  
  function deleteRow(row, productId) {
  
    const index = products.findIndex(product => product.id === productId);
    let deletNow = confirm('Are you want to delete this product?');
    if (index !== -1 && deletNow) {
      row.remove();
      products.splice(index, 1);
      localStorage.setItem('products', JSON.stringify(products));
    }else{
      localStorage.setItem('products', JSON.stringify(products));
    }
    localStorage()
    
  }
  
  function storeProducts() {
    localStorage.setItem('products', JSON.stringify(products));
  }
  
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
  
  const search = document.querySelector("#search");
  const add = document.querySelector("#add");
  search.addEventListener("keyup", searchProduct);
  // add.addEventListener("keyup")
  
  displayTable();
  storeProducts();