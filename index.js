const quantity = document.querySelector(".quantity");
const addBtn = document.querySelectorAll(".addToCart");
const cart = document.querySelector(".cart")
const dialog = document.querySelector("dialog");
const closeDialog = document.querySelector("dialog p");
const heart = document.querySelectorAll(".fa-regular");
const inc = document.querySelectorAll(".inc");
const itemQuantity = document.querySelector(".inc p");
const total = document.querySelector('dialog h2 span')
const removeBtn = document.querySelectorAll(".removeFromCart");

addBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        if(btn.parentElement.querySelector("span p").textContent > 0) {
            quantity.textContent++;
            const price = btn.parentElement.parentElement.querySelector(".des span p").textContent;
            const quant = btn.parentElement.querySelector("span p").textContent;
            const finalPrice = parseInt(price.replace("$", "") * quant.replace("$", ""));
            total.textContent = parseInt(total.textContent) + parseInt(finalPrice);
            total.textContent += ".99"
        }
    });
})


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


removeBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        const quant = btn.parentElement.querySelector("span p").textContent;
        quantity.textContent--
        const price = btn.parentElement.parentElement.querySelector(".des span p").textContent;
        const finalPrice = parseInt(price.replace("$", "") * quant.replace("$", ""));
        total.textContent = parseInt(total.textContent) - parseInt(finalPrice);
        // total.textContent -= ".99"
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


