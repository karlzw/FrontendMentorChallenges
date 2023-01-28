const dropdownMenu = document.querySelectorAll(".dropdown");

const dropdownToggle = document.querySelectorAll(".dropdown-toggle");

const opposite = [1, 0];
for (let i = 0; i < dropdownToggle.length; i++) {
  dropdownToggle[i].onclick = function () {
    if (dropdownMenu[i].style.display == "block") {
      dropdownMenu[i].style.display = "none";
      dropdownToggle[i].src = "./images/angle-down-solid.svg";
    } else {
      dropdownMenu[i].style.display = "block";
      dropdownToggle[i].src = "./images/angle-up-solid.svg";

      dropdownMenu[opposite[i]].style.display = "none";
      dropdownToggle[opposite[i]].src = "./images/angle-down-solid.svg";
    }
  };
}

const closeMenu = document.getElementById("close");
const navBar = document.getElementById("navigation");
const openMenu = document.getElementById("bars");

console.log(closeMenu);
console.log(navBar);

closeMenu.onclick = function () {
  navBar.style.right = "-300px";
};

openMenu.onclick = function () {
  navBar.style.right = "0px";
};
