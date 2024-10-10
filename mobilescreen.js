const navbarMain = document.querySelector("div.navbar span")
const modal = document.querySelector("div.modal")
const modalContent = document.querySelector("div.modal__content")
const faqHead = document.querySelectorAll("div.faq__head")
const faqBody = document.querySelectorAll("div.faq__body")

// Main //
navbarMain.addEventListener("click", ()=>{
    modal.classList.add("modal__activated")
    modalContent.classList.add("modal__content__activated")

    modal.addEventListener("click", ()=>{
        modal.classList.remove("modal__activated")
        modalContent.classList.remove("modal__content__activated")
    })
})
// // // // 

// FAQ //
faqHead.forEach((value, index) => {
    value.addEventListener("click", () => {
        value.classList.toggle("faq__head__icon")
        faqBody[index].classList.toggle("faq__body__extend")
    })
})
// // // //