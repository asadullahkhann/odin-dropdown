import './styles.css';
import { toggleDropdown } from './toggle-dropdown';

const toggleDropdownBtn = document.querySelector('.toggle-dropdown>button');
const buttonImgs = document.querySelectorAll('button>img');
const dropdown = document.querySelector('.dropdown');

toggleDropdownBtn.addEventListener('click', () => {
    toggleDropdown(dropdown);
    buttonImgs.forEach(buttonImg => {
        buttonImg.classList.toggle('hide');
    })
});