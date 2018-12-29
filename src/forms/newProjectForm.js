import loadButton from '../components/button.js';
import { hideForm, submitForm } from '../forms/formFunctions.js'

const loadNewProjectForm = () => {
    // Modal setup and new project form (npf) sections
    const bg = document.createElement('div');
    bg.classList.add('npf-bg');
    
    const npf = document.createElement('div');
    const npfHeader = document.createElement('div');
    const npfFields = document.createElement('div');
    const npfButtons = document.createElement('div');

    npf.classList.add('npf');
    npfHeader.classList.add('npf-header');
    npfFields.classList.add('npf-fields');
    npfButtons.classList.add('npf-buttons');

    // npf Header
    const title = document.createElement('div');
    const titleText = document.createTextNode('New Project');
    title.classList.add('npf-title');
    title.appendChild(titleText);

    npfHeader.appendChild(title);

    // npf Fields
    const name = document.createElement('input');
    name.classList.add('npf-name');
    name.setAttribute('type', 'text');
    name.setAttribute('placeholder', 'Project Name');

    npfFields.appendChild(name);

    // npf Buttons
    const btnSubmit = loadButton('add-project', 'Add Project');
    btnSubmit.addEventListener('click', hideForm);
    btnSubmit.addEventListener('click', submitForm);

    const btnCancel = loadButton('cancel', 'Cancel');
    btnCancel.addEventListener('click', hideForm);

    npfButtons.appendChild(btnSubmit);
    npfButtons.appendChild(btnCancel);

    // Append parts to npf, npf to bg
    npf.appendChild(npfHeader);
    npf.appendChild(npfFields);
    npf.appendChild(npfButtons);
    bg.appendChild(npf);

    return bg;
}

export default loadNewProjectForm;