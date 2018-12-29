import loadControlsNav from './sections/controlsNav.js';
import { loadProjectsDiv } from './sections/projectsDiv.js';
import loadNewProjectForm from './forms/newProjectForm.js';
import { fetchProjects } from './forms/formFunctions.js';

const content = document.querySelector('#content');

// Load controlsNav.js
const controlsNav = loadControlsNav();
const panelContainer = loadProjectsDiv();

// Load panelContainer

const npf = loadNewProjectForm();

content.appendChild(controlsNav);
content.appendChild(panelContainer);
content.appendChild(npf);

window.onload = fetchProjects;