
function handleShowForm() {
  const info = document.querySelector("#profile")
  const form = document.querySelector("#edit-profile");
  let showForm = false;
  return () => {
    showForm === true ? showForm = false : showForm = true;
    if (showForm) {
      form.style.display = 'block';
      info.style.display = 'none';
    } else if (!showForm) {
      form.style.display = 'none';
      info.style.display = 'block';
    }
  }
}

function handleUpdateFormFields() {

}

const toggleShowForm = handleShowForm();
const editBtn = document.querySelector("#edit-btn");
editBtn.addEventListener("click", toggleShowForm);


const submitEditBtn = document.querySelector("#submit-edit-btn")
function submitEdit(e) {
  e.preventDefault();
  const inputFields= document.querySelectorAll("input");
  const displayElements = document.querySelectorAll("h3");
  inputFields.forEach((field) => {
    displayElements.forEach(element => {
      if (field.id === element.id) {
        element.textContent = field.value;
      }
    })
  })
  toggleShowForm();
}

const form = document.querySelector("form");
form.addEventListener("submit", submitEdit)




