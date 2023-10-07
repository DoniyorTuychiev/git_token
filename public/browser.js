console.log("Frontend JS ishka tushdi");

function itemTemplate(item) {
    return `<li
     class="list-group-item list-group-item-info d-flex aligin-items-center justify-content-between"
    >
    <span
     class="item-text">${item.reja}</span>
    <div>
        <button 
         data-id="${item._id}" 
         class="edit-me btn btn-secondary btn-sm mr-1"
         >
            Ozgartirish
        </button>
        <button 
         data-id="${item._id}"
         class="delete-me btn btn-danger btn-sm"
         >
         Ochirish
         </button>
    </div>
</li>`;
}

let createField = document.getElementById("create-field");

document
.getElementById("create-form")
.addEventListener("submit", function (e) {
e.preventDefault(); // / orqali host qilinganga byDefault bolib successed add bolmaslidi uchun preventDefault qoyildi

axios
    .post("/create-item", { reja: createField.value })
    .then((response) => {
        document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
      createField.value = "";
      createField.focus();  
    })
    .catch((err) => {
        console.log("Qaytadan harakat qiling!");
    });
});

document.addEventListener("click", function(e) { // har qanday tugma bosilganda
    //delete operation
    console.log(e.target);
    if(e.target.classList.contains("delete-me")) { //contains classList ichida delete-me nomli buyruq mavjudmi degan manoni bildiradi
        if(confirm("Aniq ochirmoqchimisiz?")) {
            axios
            .post("/delete-item", { id: e.target.getAttribute("data-id") })
            .then((response) => {
                console.log(response.data);
                e.target.parentElement.parentElement.remove();
            })
            .catch((err) => {
                console.log("Iltimos qaytadan harakat qiling!");
            });
        }
    }

    //Edit operation
    if(e.target.classList.contains("edit-me")){
        alert("siz Editni bostingiz");
    }
});
