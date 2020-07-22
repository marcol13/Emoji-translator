var txtAreaDocument = document.querySelector('.text');
var emojiAreaDocument = document.querySelector('.emoji');
var button = document.querySelector('button.copy');

txtAreaDocument.addEventListener("focus", (event) => {event.target.className = "notext"})
txtAreaDocument.addEventListener("focusout", (event) => {if(event.target.value == ""){event.target.className = "text"}})
txtAreaDocument.addEventListener("input", translate)
button.addEventListener("click", () => {emojiAreaDocument.select();document.execCommand('copy')})

dictionary = {
    'a': '🍉',
    'b': '🎟️',
    'c': '🍋',
    'ć': '♩',
    'd': '🌳',
    'e': '📐',
    'f': '🌊',
    'g': '🍐',
    'h': '🚁',
    'i': 'ℹ️',
    'j': '🦄',
    'k': '🔑',
    'l': '🔍',
    'ł': '⛸️',
    'm': '🐜',
    'n': '👃',
    'o': '👓',
    'ó': '8️⃣',
    'p': '🐧',
    'r': '🚀',
    's': '🎻',
    'ś': '🐌',
    't': '🌈',
    'u': '👄',
    'w': '⚖️',
    'y': '☯️',
    'z': '⌚',
    'ż': '🐢',
    ' ': '     '
};

function translateWord(str){
    let result = ""
    for(const i of str.toLowerCase()){
        result += [dictionary[i]]
    }
    console.log(result)
    return result
}

function translate(e){
    emojiAreaDocument.textContent = translateWord(e.target.value)
    // temp = e.target.value.toLowerCase();
    // k = dictionary[temp[temp.length - 1]]
    // k != undefined ? emojiAreaDocument.textContent += dictionary[temp[temp.length - 1]] : emojiAreaDocument.textContent += " "
}