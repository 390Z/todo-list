import loadIconBtn from '../components/iconBtn.js';
import {hideForm, submitForm} from '../forms/formFunctions.js'

const loadNewProjectForm = () => {
    const bg = document.createElement('div');
    bg.classList.add('npf-bg');
    
    const panel = document.createElement('div');
    panel.classList.add('npf');
    const panelContents = document.createElement('div');

    //construct header
    const panelHeader = document.createElement('div');

    const title = document.createElement('div');
    const titleText = document.createTextNode('New Project');
    title.appendChild(titleText);

    const btnX = loadIconBtn('cancel', 'times');
    btnX.addEventListener('click', hideForm);

    panelHeader.appendChild(title);
    panelHeader.appendChild(btnX);

    //construct form input
    const inputPN = document.createElement('input');
    inputPN.classList.add('pc-sect', 'input-project-name');
    inputPN.setAttribute('type', 'text');
    inputPN.setAttribute('placeholder', 'Project Name');
    inputPN.required = true;
    panelContents.appendChild(inputPN);

    //construct submit button
    const btnSubmit = loadIconBtn('submit', 'check');
    btnSubmit.classList.add('pc-sect');
    btnSubmit.addEventListener('click', hideForm);
    btnSubmit.addEventListener('click', submitForm);
    panelContents.appendChild(btnSubmit);

    //append parts to panel, panel to bg
    panel.appendChild(panelHeader);
    panel.appendChild(panelContents);
    bg.appendChild(panel);

    return bg;
}

export default loadNewProjectForm;