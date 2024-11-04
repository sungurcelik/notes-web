// const person = {
//   name: "Sungur",
//   surname: "ÇELİK",
//   age: 22,
// };

// localStorage.setItem("person", JSON.stringify(person));

// console.log(JSON.parse(localStorage.getItem("person")));

// localStorage.clear();
const months = [
  "Ocak",
  "Şubak",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık",
];

const addBox = document.querySelector(".add-box i");
const popupBoxContainer = document.querySelector(".popup-box");
const popupBox = document.querySelector(".popup-box .popup");
const popupTitle = popupBox.querySelector("header p");
const closeIcon = popupBox.querySelector("header i");
const form = document.querySelector("form");

// Not güncellemesi için değişkenlerin oluşturulması
let isUpdate = false;

let updateId;

let notes = JSON.parse(localStorage.getItem("notes")) || [];

addBox.addEventListener("click", () => {
  // popup'ı görünür kıldık.
  popupBoxContainer.classList.add("show");
  popupBox.classList.add("show");

  // sayfa kaydırılmasını engelle
  document.querySelector("body").style.overflow = "hidden";
});

closeIcon.addEventListener("click", () => {
  popupBoxContainer.classList.remove("show");
  popupBox.classList.remove("show");
  document.querySelector("body").style.overflow = "auto";
});

// Not verisine erişme

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let titleInput = e.target[0];
  let descriptionInput = e.target[1];

  let title = titleInput.value.trim();
  let description = descriptionInput.value.trim();

  if (title && description) {
    const date = new Date();
    let month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    let noteInfo = {
      title,
      description,
      date: `${month} ${day}, ${year}`,
    };
    notes.push(noteInfo);
    localStorage.setItem("notes", JSON.stringify(notes));

    // POPUP kaldır
    popupBoxContainer.classList.remove("show");
    popupBox.classList.remove("show");
    document.querySelector("body").style.overflow = "hidden";
  }
  titleInput.value = "";
  descriptionInput.value = "";
});
