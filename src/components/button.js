const loadButton = (bId) => {
    const button = document.createElement('button');
    button.classList.add('button');
    button.id = bId;

    return button;
}

export default loadButton;