import '../styles.css';

const switchRef = document.querySelector('.js-switch-input');
const bodyRef = document.querySelector('body');
// bodyRef.classList.add('light-theme');

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

 function checkTheme(){
   const  themeFromHost = localStorage.getItem('theme');
   if(themeFromHost === Theme.DARK){
     bodyRef.classList.add(themeFromHost);
     switchRef.checked = true;
   }
};

function changeTheme (event) {
  if(!event.target.checked){
     bodyRef.classList.remove(Theme.DARK);
    bodyRef.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  } else {
    bodyRef.classList.remove(Theme.LIGHT);
    bodyRef.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  }
}
checkTheme();
switchRef.addEventListener('change', changeTheme);







