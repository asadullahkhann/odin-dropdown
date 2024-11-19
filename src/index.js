import './styles.css';
import { toggleDropdown } from './toggle-dropdown';

const toggleDropdownBtn = document.querySelector('.toggle-dropdown>button');
const dropdown = document.querySelector('.dropdown');

toggleDropdownBtn.addEventListener('click', () => {
    toggleDropdown(dropdown);
});