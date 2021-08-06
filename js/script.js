var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Shivansh@kali:~#')
    .pauseFor(100)
    .typeString('Ethical Hacker')
    .pauseFor(100)
    .deleteChars(14)
    .typeString("CTF Player")
    .pauseFor(100)
    .deleteChars(10)
    .typeString("Bug Bounty Hunter")
    .pauseFor(100)
    .deleteChars(17)
    .typeString("Coder")
    .pauseFor(100)
    .deleteChars(5)
    .typeString("Good at singing :>")
    .start()