import { fetchProjects } from '../sections/projectFunctions.js';

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

export {
    showForm,
    hideForm,
    submitForm,
    fetchProjects
}