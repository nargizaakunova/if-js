const inputTextEls = document.querySelectorAll('input[type=text]');
// CLEAR INPUTS VALUE ON CLICK
function clearInputTextValue(e) {
  e.target.value = '';
  e.target.removeEventListener('click', clearInputTextValue);
}
inputTextEls.forEach((inputTextEl) =>
  inputTextEl.addEventListener('click', clearInputTextValue),
);

// FORM
const formEl = document.querySelector('form');
const fileEl = document.getElementById('file');
const imageDivEl = document.getElementById('image-div');
async function sendDataToServer(body) {
  const fetchOptions = {
    method: 'POST',
    body,
  };

  const response = await fetch(
    'https://if-student-api.onrender.com/api/file',
    fetchOptions,
  );

  if (!response.ok) {
    throw new Error('Network response was not OK');
  }
  return response.json();
}
formEl.addEventListener('submit', async (event) => {
  event.preventDefault();
  const body = new FormData(formEl);
  try {
    const data = await sendDataToServer(body);
    console.log(data);
  } catch (e) {
    console.log('Oh no!', e.message);
  }
});

// CLICK ON IMAGE DIV:
imageDivEl.addEventListener('click', () => {
  fileEl.click();
});

// RESOLVE URL FOR FILE
function getFileDataURL(file) {
  return new Promise((resolve) => {
    const fileReader = new FileReader();

    fileReader.addEventListener('load', (e) => {
      resolve(e.target.result);
    });
    fileReader.readAsDataURL(file);
  });
}

// ADD BACKGROUND IMAGE TO THE DIV:
fileEl.addEventListener('change', async (e) => {
  const file = e.target.files[0];

  if (file) {
    const url = await getFileDataURL(file);
    imageDivEl.style.backgroundImage = `url(${url})`;
    imageDivEl.innerHTML = '';
  }
});
