import loadIconBtn from "../components/iconBtn";

const showForm = () => {
    const modal = document.querySelector('.npf-bg');
    modal.style.display = 'block';
}

const hideForm = () => {
    const modal = document.querySelector('.npf-bg');
    modal.style.display = 'none';
}

const submitForm = () => {
    console.log('Submit Form');
    
    // Get form values
    const npName = document.querySelector('.npf-name').value;

    // Init project object
    const project = {
        name: npName
    }

    // Test if form is empty, then test if projects is null
    if (npName === '') {
        return;
    } else if (localStorage.getItem('projects') === null) {
        const projects = [];
        projects.push(project);
        localStorage.setItem('projects', JSON.stringify(projects));
    } else {
        const projects = JSON.parse(localStorage.getItem('projects'));
        projects.push(project);
        localStorage.setItem('projects', JSON.stringify(projects));
    }

    fetchProjects();
    resetForm();
}

const resetForm = () => {
    document.querySelector('.npf-name').value = '';
}

const fetchProjects = () => {
    const projects = JSON.parse(localStorage.getItem('projects'));
    const projectsDisplay = document.querySelector('.panel-container');
    projectsDisplay.innerHTML = '';

    for (let i = 0, n = projects.length; i < n; i++) {
        const name = projects[i].name;
        
        const projectPanel = document.createElement('div');
        projectPanel.classList.add('project-panel');

        const projectName = document.createElement('div');
        projectName.classList.add('project-name');
        projectName.appendChild(document.createTextNode(name));

        const panelButtons = document.createElement('div');
        panelButtons.classList.add('panel-buttons');
        const panelOptions = loadIconBtn('options', 'ellipsis-v');
        panelButtons.appendChild(panelOptions);
        
        projectPanel.appendChild(panelButtons)
        projectPanel.appendChild(projectName);
        
        projectsDisplay.appendChild(projectPanel);
    }
}

export {
    showForm,
    hideForm,
    submitForm,
    fetchProjects
}