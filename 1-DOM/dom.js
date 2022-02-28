function manipulateDom() {
    const elements = document.querySelectorAll('.quote');
    elements.forEach(element => {
        element.style.borderColor = 'blue';
        element.style.backgroundColor = 'lightblue';
        element.style.fontStyle = 'italic';
    });
};

export { manipulateDom };