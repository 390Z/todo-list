import loadIconBtn from '../components/iconBtn.js';
import { showForm, hideForm } from '../forms/formFunctions.js'

const loadControlsNav = () => {
    //create nav to hold buttons
    const nav = document.createElement('div');
    nav.className += 'controls-nav';

    //create buttons
    const btnLayout = loadIconBtn('layout', 'list-ul');
    const btnColor = loadIconBtn('color', 'lightbulb-o');
    const btnAdd = loadIconBtn('add', 'plus');

    //add button functions
    //btnLayout.addEventListener('click', btnLayoutFcn);
    //btnColor.addEventListener('click', btnColorFcn);
    btnAdd.addEventListener('click', showForm);

    //append buttons to nav
    nav.appendChild(btnLayout);
    nav.appendChild(btnColor);
    nav.appendChild(btnAdd);

    return nav;
}

export default loadControlsNav;