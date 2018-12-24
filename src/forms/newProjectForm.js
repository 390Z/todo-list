import loadIconBtn from '../components/iconBtn.js';
import { hideForm, submitForm } from '../forms/formFunctions.js'

const loadNewProjectForm = () => {
    const bg = document.createElement('div');
    bg.classList.add('npf-bg');
    
    const panel = document.createElement('div');
    panel.classList.add('npf');
    const panelContents = document.createElement('div');
    panelContents.classList.add('npf-contents');

    // Header
    const panelHeader = document.createElement('div');
    panelHeader.classList.add('npf-header');

    const title = document.createElement('div');
    title.classList.add('npf-title');
    const titleText = document.createTextNode('New Project');
    title.appendChild(titleText);

    const btnX = loadIconBtn('cancel', 'times');
    btnX.addEventListener('click', hideForm);

    panelHeader.appendChild(title);
    panelHeader.appendChild(btnX);

    // Form input
    const inputPN = document.createElement('input');
    inputPN.classList.add('pc-sect', 'input-project-name');
    inputPN.setAttribute('type', 'text');
    inputPN.setAttribute('placeholder', 'Project Name');
    inputPN.required = true;
    panelContents.appendChild(inputPN);

    // Submit button
    const btnSubmit = loadIconBtn('submit', 'check');
    btnSubmit.classList.add('pc-sect');
    btnSubmit.addEventListener('click', hideForm);
    btnSubmit.addEventListener('click', submitForm);
    panelContents.appendChild(btnSubmit);

    // Append parts to panel, panel to bg
    panel.appendChild(panelHeader);
    panel.appendChild(panelContents);
    bg.appendChild(panel);

    return bg;
}

export default loadNewProjectForm;