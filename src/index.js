import loadNav from './components/nav.js';
import loadIconBtn from './components/iconBtn.js';
import loadPanelContainer from './components/panelContainer.js';
import loadAddProjectForm from './forms/addProjectForm.js';

const content = document.querySelector('#content');

//configure "button nav" and "panel container" elements
const nav = loadNav();
const panelContainer = loadPanelContainer();

const btnLayout = loadIconBtn('layout', 'list-ul');
const btnColor = loadIconBtn('color', 'lightbulb-o');
const btnAddProject = loadIconBtn('add', 'plus');

nav.appendChild(btnLayout);
nav.appendChild(btnColor);
nav.appendChild(btnAddProject);

content.appendChild(nav);
content.appendChild(panelContainer);

//"add project" script
const addProjectForm = loadAddProjectForm();
document.querySelector('.add-project-form').onsubmit = () => {
    const name = document.querySelector('.name').value;
    
};