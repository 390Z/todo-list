import loadButton from '../components/button.js';
import loadIconBtn from '../components/iconBtn.js'; // Parameters: (bId, faIcon)
import loadElement from '../components/element.js'; // Parameters: (tag, text, className)

const fetchProjects = () => {
    const projects = JSON.parse(localStorage.getItem('projects'));
    const projectsDisplay = document.querySelector('.panel-container');
    projectsDisplay.innerHTML = '';

    for (let i = 0, n = projects.length; i < n; i++) {
        const name = projects[i].name;
        
        const projectPanel = loadElement('div', null, 'project-panel');
        projectPanel.addEventListener('click', openProject);
        const projectName = loadElement('div', name, 'project-name');
        const projectMenu = loadElement('div', null, 'panel-buttons');
        const menuButton = loadIconBtn('options', 'ellipsis-v');
        menuButton.addEventListener('click', showProjectOptions);
        const menuContents = loadElement('div', null, 'menu-contents');
        const btnDelete = loadElement('button', 'Delete', null);
        btnDelete.addEventListener('click', deleteProject);

        menuContents.appendChild(btnDelete);
        projectMenu.appendChild(menuButton);
        projectMenu.appendChild(menuContents);
        projectPanel.appendChild(projectMenu)
        projectPanel.appendChild(projectName);
        projectsDisplay.appendChild(projectPanel);
    }
}

const openProject = () => {

}

const deleteProject = () => {
    const projects = JSON.parse(localStorage.getItem('projects'));
    //const projectName = document.querySelector('.project-name').innerHTML;
    const projectIndex = projects.findIndex(project => project === ProjectName);
}

const showProjectOptions = () => {
    document.querySelector('.project-options-dropdown').classList.toggle('show');
}

const hideProjectOptions = () => {
    window.onclick = (e) => {
        if (!e.target.matches('.options')) {
            const optionsDropdown = document.querySelector('project-options-dropdown');
            for (let i = 0, n = optionsDropdown.length; i < n; i++) {
                const openDropdown = optionsDropdown[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
}



export {
    fetchProjects
}