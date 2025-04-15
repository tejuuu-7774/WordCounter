const textArea = document.getElementById('textArea');
const Countword = document.getElementById('word');
const Countchar = document.getElementById('char');

textArea.addEventListener('input', () => {
    const text = textArea.value;
    Countchar.innerHTML = text.length;

    const words = text.trim().split(" ").filter(word => word !== "");
    Countword.innerHTML = words.length;
});


