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
}

export {
    showForm,
    hideForm,
    submitForm
}