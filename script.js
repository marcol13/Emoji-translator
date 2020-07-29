var txtAreaDocument = document.querySelector('.text');
var emojiAreaDocument = document.querySelector('.emoji');
var button = document.querySelector('button.copy');
var table = document.querySelector('.alphabet table');

txtAreaDocument.addEventListener("focus", (event) => {event.target.className = "notext"})
txtAreaDocument.addEventListener("focusout", (event) => {if(event.target.value == ""){event.target.className = "text"}})
txtAreaDocument.addEventListener("input", translate)
button.addEventListener("click", () => {emojiAreaDocument.select();document.execCommand('copy')})

/*
    '0': '0⃣',
    '1': '1⃣',
    '2': '2⃣',
    '3': '3⃣',
    '4': '4⃣',
    '5': '5⃣',
    '6': '6⃣',
    '7': '7⃣',
    '8': '8⃣',
    '9': '9⃣',
*/
dictionary = {
    '?': '❓',
    '!': '❗',
    'a': '🍉',
    'b': '🎟️',
    'c': '🍋',
    'ć': '♩',
    'd': '🌳',
    'e': '📐',
    'f': '🌊',
    'g': '⭐',
    'h': '🚁',
    'i': '🦃',
    'j': '🦄',
    'k': '🔑',
    'l': '🔍',
    'ł': '⛸️',
    'm': '🐁',
    'n': '👃',
    'o': '👓',
    'ó': '🎱',
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
}

function makeTable(dict, tab){
    i = 0;
    for(const prop in dict){
        if(prop === ' ')
            break;
        if(i % 2 == 0){
            var tr = document.createElement("tr");
            table.appendChild(tr);
        }
        var td1 = document.createElement("td");
        var td1_text = document.createTextNode(prop.toUpperCase());
        td1.appendChild(td1_text);
        var td2 = document.createElement("td");
        var td2_text = document.createTextNode(dict[prop]);
        td2.appendChild(td2_text);
        tr.appendChild(td1);
        tr.appendChild(td2);
        i++;
    }
}

makeTable(dictionary,table);