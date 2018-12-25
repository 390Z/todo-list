const loadButton = (bId, bText) => {
    const button = document.createElement('button');
    // Set button's class
    button.classList.add('button');
    // Set button's id
    button.id = bId;
    // Set button's text
    const buttonText = document.createTextNode(bText);
    button.appendChild(buttonText);

    return button;
}

export default loadButton;