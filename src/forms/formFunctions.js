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
    const npName = document.querySelector('.input-project-name').value;

    // Init project object
    const project = {
        name: npName
    }

    // Test if projects is null
    if (localStorage.getItem('projects') === null) {
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
    document.querySelector('.input-project-name').value = '';
}

const fetchProjects = () => {
    const projects = JSON.parse(localStorage.getItem('projects'));
    const projectsDisplay = document.querySelector('.panel-container');
    projectsDisplay.innerHTML = '';
    for (let i = 0, n = projects.length; i < n; i++){
        const name = projects[i].name;
        
        projectsDisplay.innerHTML +=
            '<div class="project-panel">' +
                '<div class="project-name">' + name +
                '</div>'
            '</div>'       
    }
}

export {
    showForm,
    hideForm,
    submitForm,
    fetchProjects
}