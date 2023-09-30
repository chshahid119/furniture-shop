"strict mode";
const Navbar = document.querySelector("Navbar__container");
const AddToCart = document.querySelectorAll(".addToCart");
const CollectionCart = document.querySelector(".cartIcon");
const NavbarContainer = document.querySelector(".Navbar__container");
const Mainheading = document.querySelector(".companyMotivation");
const darkMode = document.querySelector(".darkModeIcon");
const companyDesc = document.querySelector(".CompanyDescription");
const OurSpecialChairs = document.querySelector(".OurSpecialChairs");
const sellingBestChairs = document.querySelector(".sellingBestChairs");
const chairPrice = document.querySelector(".price");
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
});
let arr = [];
AddToCart.forEach((userItem) => {
  userItem.addEventListener("click", function (e) {
    const value = e.target.getAttribute("value");
    arr.push(value);
    console.log(...arr);
  });
});
// Show Cart when click on Cart Icon
// CollectionCart.addEventListener("click", function () {
//   html = ` <div class="CollectionCart">
//   <div>
//     <ol>
//       <li>The Laid Back</li>
//       <li>The Laid Back</li>
//       <li>The Laid Back</li>
//     </ol>
//   </div>
// </div>`;

//   NavbarContainer.insertAdjacentHTML("afterend", html);
// });