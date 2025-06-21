var bookMarkName = document.getElementById("bookMarkName");
var webSiteUrl = document.getElementById("webSiteUrl");
var tBody = document.getElementById("tBody");
var bookMarksArr = [];

function restForm() {
  bookMarkName.value = "";
  webSiteUrl.value = "";
}

if (localStorage.getItem("bookMarks") != null) {
  bookMarksArr = JSON.parse(localStorage.getItem("bookMarks"));
  displayBookMark();
}
function createBookMark() {
  event.preventDefault(); // stops the form from submitting
  var bookMark = {
    name: bookMarkName.value,
    url: webSiteUrl.value,
  };

  bookMarksArr.push(bookMark);
  localStorage.setItem("bookMarks", JSON.stringify(bookMarksArr));

  displayBookMark();
  restForm();
}

function displayBookMark() {
  var box = "";
  for (var i = 0; i < bookMarksArr.length; i++) {
    box += ` <tr>
        <td>${i + 1}</td>
        <td>${bookMarksArr[i].name}</td>
        <td>
          <a class="btn btn-visit" href="${
            bookMarksArr[i].url
          }" target="_blank">
             <i class="fa-solid fa-eye me-2"></i> Visit
         </a>
        </td>
        <td>
          <button class="btn btn-danger" onclick="deleteBookMark(${i})">
            <i class="fa-solid fa-trash-can me-2"></i>Delete
          </button>
        </td>
      </tr>`;
  }
  tBody.innerHTML = box;
}

function deleteBookMark(bookMarkIndex) {
  bookMarksArr.splice(bookMarkIndex, 1);
  displayBookMark();
  localStorage.setItem("bookMarks", JSON.stringify(bookMarksArr));
}
