const textArea = document.getElementById('textArea');
const Countword = document.getElementById('word');
const Countchar = document.getElementById('char');

// added an eventlistener to the input area
textArea.addEventListener('input', () => {
    // gives the current value status
    const text = textArea.value;
    Countchar.innerHTML = text.length;

    const words = text.trim().split(" ").filter(word => word !== "");
    Countword.innerHTML = words.length;
});


