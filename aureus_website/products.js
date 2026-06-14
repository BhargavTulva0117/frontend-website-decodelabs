// FILTER BUTTONS

const filterButtons = document.querySelectorAll(".filter-btn");

const products = document.querySelectorAll(".shop-product");



// FILTER FUNCTION

filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        // REMOVE ACTIVE

        filterButtons.forEach((btn) => {

            btn.classList.remove("active");

        });

        // ADD ACTIVE

        button.classList.add("active");

        const filter = button.dataset.filter;



        products.forEach((product) => {

            if(filter === "all"){

                product.style.display = "block";
            }

            else if(product.classList.contains(filter)){

                product.style.display = "block";
            }

            else{

                product.style.display = "none";
            }

        });

    });

});



// SEARCH

const searchInput =
document.getElementById("productSearch");

searchInput.addEventListener("keyup", () => {

    const value =
    searchInput.value.toLowerCase();

    products.forEach((product) => {

        const title =
        product.querySelector("h3")
        .textContent
        .toLowerCase();

        if(title.includes(value)){

            product.style.display = "block";
        }

        else{

            product.style.display = "none";
        }

    });

});