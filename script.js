console.log(titulo);

let objetoDeLabibliotecaTypewriter = new Typewriter(titulo, {
    loop: true
});

objetoDeLabibliotecaTypewriter
    .typeString('Ariadna Espinoza')
    .deleteChars(17)
    .pauseFor(500)
    .typeString('Arco Aris')
    .pauseFor(2500)
    .deleteChars(14)
    .start();


        // JavaScript para hacer que las imágenes se deslicen automáticamente
        let currentImageIndex = 0;

