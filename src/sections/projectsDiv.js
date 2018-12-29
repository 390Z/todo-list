// import functions from projectFunctions.js

/*
1) Load Options Dropdown Menu functionality
    a) click Options btn -> SHOW  menu
    b) click Delete btn -> DELETE project, HIDE menu
            -SHOW confirm/cancel popup
       click Anywhere Else -> HIDE menu

2) Load 'Click' Project functionality
    a) click Project -> OPEN project animation into full window
*/


const loadProjectsDiv = () => {
    const panelContainer = document.createElement('div');
    panelContainer.classList.add('panel-container');

    return panelContainer;
}

const loadOptionsDropdown = () => {
    const optionsDropdown = document.createElement('div');
    optionsDropdown.classList.add('project-options-dropdown');

    const btnDelete = document.createElement('button');
    const btnDeleteText = document.createTextNode('Delete');
    btnDelete.appendChild(btnDeleteText);
    btnDelete.addEventListener('click', deleteProject);

    optionsDropdown.appendChild(btnDelete);
}

export {
    loadProjectsDiv,
    loadOptionsDropdown
}