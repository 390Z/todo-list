import loadControlsNav from './sections/controlsNav.js';
import loadPanelContainer from './components/panelContainer.js';
import loadNewProjectForm from './forms/newProjectForm.js';
import { fetchProjects } from './forms/formFunctions.js';

const content = document.querySelector('#content');

const controlsNav = loadControlsNav();
const panelContainer = loadPanelContainer();
const npf = loadNewProjectForm();

content.appendChild(controlsNav);
content.appendChild(panelContainer);
content.appendChild(npf);

window.onload = fetchProjects;