import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const FORM_DATA_KEY_LS = 'feedback-form-state';

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

const formDataObjectParsed = JSON.parse(localStorage.getItem(FORM_DATA_KEY_LS));

populateFormFields();

function onFormInput(evt) {
  const formDataObject =
    JSON.parse(localStorage.getItem(FORM_DATA_KEY_LS)) ?? {};

  formDataObject[evt.target.name] = evt.target.value;

  localStorage.setItem(FORM_DATA_KEY_LS, JSON.stringify(formDataObject));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(formDataObjectParsed);
  form.reset();
  localStorage.removeItem(FORM_DATA_KEY_LS);
}

function populateFormFields() {
  try {
    const formNames = Object.keys(formDataObjectParsed);
    formNames.forEach(key => {
      form.elements.namedItem(key).value = formDataObjectParsed[key];
    });
  } catch (err) {
    return;
  }
}
