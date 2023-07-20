const  password = document.querySelector('#password');

const openEye = document.querySelector('#open-eye');
const closeEye = document.querySelector('#close-eye');

const eye = document.querySelector('.open');


openEye.addEventListener('click', () => {
  { closeEye.style.display = 'block';
    openEye.style.display = 'none';
    password.type = 'text';
} 
}
)

closeEye.addEventListener('click', () => {
    closeEye.style.display = 'none';
    openEye.style.display = 'block';
    password.type = 'password';
  }
)