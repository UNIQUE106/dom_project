const quantity = document.querySelector(".quantity");
const addBtn = document.querySelectorAll(".addToCart");
const removeBtn = document.querySelector(".removeFromCart");
const cart = document.querySelector(".cart")
const dialog = document.querySelector("dialog");
const closeDialog = document.querySelector("dialog p");
const heart = document.querySelectorAll(".fa-regular");
const inc = document.querySelectorAll(".inc");
const itemQuantity = document.querySelector(".inc p");


inc.forEach(inc => {
    inc.addEventListener('click', (e) => {
        if(e.target.classList.contains("decrease") && e.target.parentNode.querySelector("p").textContent > 0) {
            e.target.parentNode.querySelector("p").textContent--
        }
        if(e.target.classList.contains("increase")) {
            e.target.parentNode.querySelector("p").textContent++;
        }
    })
})




heart.forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.classList.toggle("fa-solid");
        btn.classList.toggle("bop");
    })
})

cart.addEventListener('click', () => {
    dialog.showModal();
})

closeDialog.addEventListener('click', () => {
    dialog.close();
})




removeBtn.addEventListener('click', () => {
    quantity.textContent--;
});


addBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        quantity.textContent++;
    });
})