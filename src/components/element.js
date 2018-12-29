const loadElement = (tag, text, className) => {
    // 'tag' parameter configuration
    const element = document.createElement(`${tag}`);

    // 'text' parameter configuration
    if (text === null) {
        text = null;
    } else {
        const textNode = document.createTextNode(`${text}`);
        element.appendChild(textNode);
    }
    
    // 'className' parameter configuration
    if (className === null) {
        className = null;
    } else {
        element.classList.add(`${className}`);
    }

    return element;
}

export default loadElement;