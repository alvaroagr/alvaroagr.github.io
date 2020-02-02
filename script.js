// Get the modal
var modalSpa = document.getElementById("modal-spa");
// Get the button that opens the modal
var btnSpa = document.getElementById("btn-spa");
// Get the <span> element that closes the modal
var spanSpa = document.getElementsByClassName("close")[0];

var modalEng = document.getElementById("modal-eng");
var btnEng = document.getElementById("btn-eng");
var spanEng = document.getElementsByClassName("close")[1];

var modalFre = document.getElementById("modal-fre");
var btnFre = document.getElementById("btn-fre");
var spanFre = document.getElementsByClassName("close")[2];

var modalJap = document.getElementById("modal-jap");
var btnJap = document.getElementById("btn-jap");
var spanJap = document.getElementsByClassName("close")[3];

var modalProg = document.getElementById("modal-prog");
var btnProg = document.getElementById("btn-prog");
var spanProg = document.getElementsByClassName("close")[4];

var modalEdit = document.getElementById("modal-edit");
var btnEdit = document.getElementById("btn-edit");
var spanEdit = document.getElementsByClassName("close")[5];

var modalCalc = document.getElementById("modal-calc");
var btnCalc = document.getElementById("btn-calc");
var spanCalc = document.getElementsByClassName("close")[6];

// When the user clicks on the button, open the modal
btnSpa.onclick = function () {
  modalSpa.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
spanSpa.onclick = function () {
  modalSpa.style.display = "none";
}



btnEng.onclick = function () {
  modalEng.style.display = "block";
}
spanEng.onclick = function () {
  modalEng.style.display = "none";
}

//French

btnFre.onclick = function () {
  modalFre.style.display = "block";
}
spanFre.onclick = function () {
  modalFre.style.display = "none";
}

//Japanese

btnJap.onclick = function () {
  modalJap.style.display = "block";
}
spanJap.onclick = function () {
  modalJap.style.display = "none";
}

//Programming

btnProg.onclick = function () {
  modalProg.style.display = "block";
}
spanProg.onclick = function () {
  modalProg.style.display = "none";
}

//Editing

btnEdit.onclick = function () {
  modalEdit.style.display = "block";
}
spanEdit.onclick = function () {
  modalEdit.style.display = "none";
}

//Calculus

btnCalc.onclick = function () {
  modalCalc.style.display = "block";
}
spanCalc.onclick = function () {
  modalCalc.style.display = "none";
}

window.onclick = function (event) {
  switch (event.target) {
    case modalSpa:
      this.modalSpa.style.display = "none";
      break;
    case modalEng:
      this.modalEng.style.display = "none";
      break;
    case modalFre:
      this.modalFre.style.display = "none";
      break;
    case modalJap:
      this.modalJap.style.display = "none";
      break;
    case modalProg:
      this.modalProg.style.display = "none";
      break;
    case modalEdit:
      this.modalEdit.style.display = "none";
      break;
    case modalCalc:
      this.modalCalc.style.display = "none";
      break;
  }
}