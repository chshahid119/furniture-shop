"strict mode";
const Navbar = document.querySelector("Navbar__container");
const AddToCart = document.querySelectorAll(".addToCart");

const orederedList = document.querySelector(".orederedList");
const Mainheading = document.querySelector(".companyMotivation");
const darkMode = document.querySelector(".darkModeIcon");
const companyDesc = document.querySelector(".CompanyDescription");
const OurSpecialChairs = document.querySelector(".OurSpecialChairs");
const sellingBestChairs = document.querySelector(".sellingBestChairs");
const satisfyClients = document.querySelector(".clientsSatisfy");
const chairPrice = document.querySelector(".price");
const togglePaymentPlansButton = document.querySelectorAll(".plan");
const cartIcon = document.querySelector(".cartIcon");
const cartList = document.querySelector(".cartList");
const CartVisibility = document.querySelector(".cart_container");
const addtoCartList = document.querySelector(".cart_ol");
darkMode.addEventListener("click", function () {
  document.body.classList.toggle("BodyBackground");
  Mainheading.classList.toggle("companyMotivation");
  Mainheading.classList.toggle("BodyBackground");
  companyDesc.classList.toggle("BodyBackground");
  companyDesc.classList.toggle("CompanyDescription");
  OurSpecialChairs.classList.toggle("BodyBackground");
  OurSpecialChairs.classList.toggle("OurSpecialChairs");
  sellingBestChairs.classList.toggle("BodyBackground");
  sellingBestChairs.classList.toggle("sellingBestChairs");
  chairPrice.classList.toggle("BodyBackground");
  chairPrice.classList.toggle("price");
  Navbar.classList.toggle("NavigationBarBackgroundColor");
  Navbar.classList.toggle("BodyBackground");
  chairPrice.classList.toggle("NavigationBarBackgroundColor");
  chairPrice.classList.toggle("BodyBackground");
});
let arr = [];
AddToCart.forEach((userItem) => {
  userItem.addEventListener("click", function (e) {
    const value = e.target.getAttribute("value");
    arr.push(value);
    console.log(...arr);
  });
});

// payment plans toggle button
togglePaymentPlansButton.forEach((el) =>
  el.addEventListener("click", function (e) {
    let clickedElement = e.target;
    togglePaymentPlansButton[0].classList.remove("openedPlan");
    togglePaymentPlansButton[1].classList.remove("openedPlan");
    clickedElement.classList.toggle("openedPlan");
  })
);
console.log(arr);

// posted all the data in the cart
// Show Cart when click on Cart Icon
cartIcon.addEventListener("click", function () {
  CartVisibility.classList.toggle("visibility");
  console.log(CartVisibility.classList);
  arr.map((curr) => {
    addtoCartList.innerHTML += `<li>${curr}</li>`;
  });
});
