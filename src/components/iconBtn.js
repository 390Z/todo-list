import loadButton from './button.js';

const loadIconBtn = (bId, faIcon) => {
    const icon = document.createElement('i');
    icon.setAttribute('class', `fa fa-${faIcon}`);
    icon.setAttribute('aria-hidden', 'true')

    const button = loadButton(bId, '');
    button.appendChild(icon);

    return button;
}

export default loadIconBtn;