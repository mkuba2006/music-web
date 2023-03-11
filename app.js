let items =  products;
categories = new Set();
let products_container = document.querySelector('.products')

const render_items = (items) =>{
    products_container.innerHTML =``;
    for(let i = 0; i<= items.length; i++){
        const new_prod = document.createElement('div');
        new_prod.className = `product product${items[i].id}`;
        new_prod.innerHTML = `
            <div id="img_back" class="img_back${items[i].id}">
                <img src="${items[i].obraz}"/>
            </div>
            <div id="content">
                <a id="title">${items[i].nazwa_albumu}</a>
                <div id="opis">
                    <p>${items[i].zespol}</p>
                    <p>${items[i].cena} zł</p>
                </div>
            </div>
        `;
        products_container.appendChild(new_prod);
    }
};

document.onload = render_items(items);
// class="btn btn-dark"