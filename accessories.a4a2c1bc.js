(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})();!function(){let e=document.querySelectorAll(".select__header"),t=document.querySelectorAll(".select__item");function c(){this.parentElement.classList.toggle("is-active")}function l(){let e=this.innerText,t=this.closest(".select");t.querySelector(".select__current").innerText=e,t.classList.remove("is-active")}e.forEach((e=>{e.addEventListener("click",c)})),t.forEach((e=>{e.addEventListener("click",l)}))}();
//# sourceMappingURL=accessories.a4a2c1bc.js.map
