const faqCont = document.querySelectorAll(".section-faq__container__head");

faqCont.forEach((e) => {
  e.addEventListener("click", () => {
    const answer = e.nextElementSibling;
    const plus = e.lastElementChild;
    plus.classList.toggle("rotate45");
    answer.classList.toggle("visible");
    faqCont.forEach((element) => {
      if (element !== e) {
        // Tıklanan öğe dışındakiler için
        const otherAnswer = element.nextElementSibling;
        const otherPlus = element.lastElementChild;
        otherAnswer.classList.remove("visible");
        otherPlus.classList.remove("rotate45");
      }
    });
  });
});
