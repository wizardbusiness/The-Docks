
function handleShowForm() {
  const info = document.querySelector("#profile")
  const form = document.querySelector("#edit-profile");
  let showForm = false;
  return () => {
    showForm === true ? showForm = false : showForm = true;
    console.log(showForm)
    if (showForm) {
      form.style.display = 'block';
      info.style.display = 'none';
    } else if (!showForm) {
      form.style.display = 'none';
      info.style.display = 'block';
    }
  }
}

const toggleShowForm = handleShowForm();

const editBtn = document.querySelector("#edit-btn")
editBtn.addEventListener("click", toggleShowForm)


