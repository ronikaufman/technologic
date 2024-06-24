const verbs = ["buy", "use", "break", "fix", "trash", "change", "mail", "upgrade", "charge", "point", "zoom", "press", "snap", "work", "erase", "write", "cut", "past", "save", "load", "check", "rewrite", "plug", "play", "burn", "rip", "drag and drop", "unzip", "lock", "fill", "call", "find", "view", "code", "jam", "unlock", "surf", "scroll", "pause", "click", "cross", "crack", "switch", "update", "name", "read", "tune", "print", "scan", "send", "fax", "rename", "touch", "bring", "pay", "watch", "turn", "leave", "start", "format"];
const voices = speechSynthesis.getVoices();

function createButtons() {
    let divEl = document.getElementById("buttons");
    for (let verb of verbs) {
        let buttonEl = document.createElement("button");
        buttonEl.setAttribute("onclick", "speak(\""+verb+" it\")");
        buttonEl.innerHTML = verb;
        divEl.appendChild(buttonEl);
    }
}

function speak(txt) {
    const utterance = new SpeechSynthesisUtterance(txt);

    utterance.voice = voices[~~(Math.random()*voices.length)];

    utterance.pitch = 2;
    utterance.rate = 1.5;
    speechSynthesis.speak(utterance);
}

createButtons();
let titleEl = document.getElementById("title");
titleEl.setAttribute("onclick", "speak(\"Technologic\")");