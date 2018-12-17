const loadAddProjectForm = () => {
    const addProject = document.createElement('form');
    addProject.classList.add('add-project-form');

    addProject.innerHTML =
        '<input type="text" placeholder="Project Name" class="name" required>' +
        '<input type="submit" value="Submit">';

    return addProject;
}

export default loadAddProjectForm;