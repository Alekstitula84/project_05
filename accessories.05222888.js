!function(){!function(){var e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};function t(){e.menu.classList.toggle("is-hidden")}e.openMenuBtn.addEventListener("click",t),e.closeMenuBtn.addEventListener("click",t)}();var e;!function(){var e=document.querySelectorAll(".select__header"),t=document.querySelectorAll(".select__item");function n(){this.parentElement.classList.toggle("is-active")}function o(){var e=this.innerText,t=this.closest(".select");t.querySelector(".select__current").innerText=e,t.classList.remove("is-active")}e.forEach((function(e){e.addEventListener("click",n)})),t.forEach((function(e){e.addEventListener("click",o)}))}(),(e={toggleMargin:document.querySelector("[data-toggle]"),textArea:document.querySelector("[data-inputs]")}).toggleMargin.addEventListener("click",(function(){e.textArea.classList.toggle("js-margin")})),function(){var e={openModalBtnBuy:document.querySelector("[data-modal-open-buy]"),closeModalBtnBuy:document.querySelector("[data-modal-close-buy]"),modalBuy:document.querySelector("[data-modal-buy]")};function t(){e.modalBuy.classList.toggle("is-hidden")}e.openModalBtnBuy.addEventListener("click",t),e.closeModalBtnBuy.addEventListener("click",t)}(),function(){var e={openModalBtnCart:document.querySelector("[data-modal-open-cart]"),closeModalBtnCart:document.querySelector("[data-modal-close-cart]"),modalCart:document.querySelector("[data-modal-cart]")};function t(){e.modalCart.classList.toggle("is-hidden")}e.openModalBtnCart.addEventListener("click",t),e.closeModalBtnCart.addEventListener("click",t)}(),function(){var e={openModalBtnSend:document.querySelector("[data-modal-open-send]"),closeModalBtnSend:document.querySelector("[data-modal-close-send]"),modalSend:document.querySelector("[data-modal-send]")};function t(){e.modalSend.classList.toggle("is-hidden")}e.openModalBtnSend.addEventListener("click",t),e.closeModalBtnSend.addEventListener("click",t)}()}();
//# sourceMappingURL=accessories.05222888.js.map