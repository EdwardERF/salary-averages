// Variables
professions = [];

// Utils
function addInputInfo(tagId, professionName, professionSalary) {
  let newText = `${professionName}: ${professionSalary}` + "\n";

  let currentText = document.getElementById("paragraph-info");
  currentText.innerText = currentText.innerText + newText;
}

function clearParagraphById(tagId) {
  let tag = document.getElementById(tagId);
  tag.innerText = "";
}

function createErrorParagraph(tagId, errorMessage) {
  let tag = document.createElement("p");
  tag.setAttribute("id", "errorTag");
  let text = document.createTextNode(errorMessage);
  tag.appendChild(text);
  let section = document.getElementById(tagId);
  section.appendChild(tag);
}

function removeParagraphById(paragraphId) {
  let paragrah = document.getElementById(paragraphId);
  paragrah.remove();
}


function addProfession() {
  let professionName = document.getElementById("professionName").value;
  let professionSalary = document.getElementById("professionSalary").value;

  // Chequeo de que se hayan ingresado los dos valores necesarios
  if (professionName != "" && professionSalary != "") {
    // Chequeando si hay mensaje de error, para borrarlo
    if (document.getElementById("errorTag")) {
      removeParagraphById("errorTag");
    }

    clearParagraphById("paragraph-info");

    professions.push([professionName, professionSalary]);

    for (let i = 0; i < professions.length; i++) {
      addInputInfo("input-info", professions[i][0], professions[i][1]);
    }
  } else {
    createErrorParagraph(
      "main-form",
      "You must put both Name and Salary to correctly add a profession."
    );
  }
}
