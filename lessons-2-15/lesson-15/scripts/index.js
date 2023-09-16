// FORM
const formEl = document.querySelector('form');
const fileEl = document.getElementById('file');
const imageDivEl = document.getElementById('image-div');

async function sendDataToServer(body) {
  const fetchOptions = {
    method: 'POST',
    body,
  };

  try {
    const response = await fetch(
      'https://if-student-api.onrender.com/api/file',
      fetchOptions,
    );

    if (!response.ok) {
      console.log('Response is not okay');
      return;
    }

    const json = await response.json();
    console.log(json);
  } catch (e) {
    console.log(e.message);
  }
}

formEl.addEventListener('submit', async (event) => {
  event.preventDefault();
  const body = new FormData(formEl);
  await sendDataToServer(body);
});

imageDivEl.addEventListener('click', () => {
  fileEl.click();
});

fileEl.addEventListener('change', (e) => {
  const file = e.target.files[0];

  const fileReader = new FileReader();
  fileReader.addEventListener('load', (e) => {
    imageDivEl.style.backgroundImage = `url(${e.target.result})`;
    imageDivEl.innerHTML = '';
  });
  fileReader.readAsDataURL(file);
});
