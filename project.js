const loadAllProducts = async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json();
    return data;
}

const setAllMenu = async() => {
    const data = await loadAllProducts();
    const menu = document.getElementById('all-menus');
    const uniqueArray = [];

    for (const product of data) {
        // console.log(product.category);
        // console.log(uniqueArray.indexOf(product.category));
        if (uniqueArray.indexOf(product.category)=== -1) {
            uniqueArray.push(product.category);
            const li = document.createElement("li");
            li.innerHTML= `<a>${product.category}</a>`;
            menu.appendChild(li);
        }
      
    }
}

setAllMenu();

// loadAllProducts();

const searchField = document.getElementById('search-field');
searchField.addEventListener("keypress", async (event) => {
    if (event.key === "Enter") {
        // console.log(searchField.value);
        const searchValue = searchField.value;

        const allProducts = await loadAllProducts();
        // console.log(allProducts);
        const foundProducts = allProducts.filter(product => product.category.includes(searchValue));
        // console.log(foundProducts);
        const productContainer = document.getElementById('products-container');
        const notFound = document.getElementById('not-found')
        productContainer.innerHTML = ``;
        notFound.innerHTML = ``;
        if (foundProducts.length === 0) {
            // console.log('not found');
            notFound.innerHTML = `<h2 class="text-2xl text-orange-400 text-center">Not Found</h2>`
            return;
        }


        foundProducts.forEach(product => {

            const { category, image, title, description } = product;

            const div = document.createElement('div');
            div.innerHTML = `<div class="card card-compact w-full bg-base-100 shadow-xl">
            <figure><img class="h-60 w-full" src="${image}" alt="Shoes" /></figure>
            <div class="card-body">
              <h2 class="card-title">${category}</h2>
              <p>${title.length > 20 ? title.slice(0, 20) + '...' : title}</p>
              <div class="card-actions justify-end">
              <label for="my-modal-3" onclick="showModal('${description}','${image}')" class="btn btn-primary modal-button">Show Detail</label>
              </div>
            </div>
          </div>`;
            
            productContainer.appendChild(div);
        });
    }
});
const showModal = (description, image) => {
    // console.log(description,image);
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = ``;
    modalBody.innerHTML = `<p class="py-4">${description}</p>
    <img src="${image}"/>
    `;
}