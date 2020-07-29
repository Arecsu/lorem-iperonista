let button = document.querySelector('.button');
let title = document.querySelector('.title');
let content = document.querySelector('.lorem-container');

button.addEventListener('click', function(){ 
    var newLorem = [];

    let lorem = 
       ['El Justicialismo ha dejado de ser la causa de un hombre para ser la causa del pueblo, y por ella sí valdría la pena darlo todo, incluso la vida.',
       'El Justicialismo necesita apóstoles y para ser apóstol hay que estar dispuesto a ser héroe, y solamente los fanáticos de amor por una causa son capaces de morir por un ideal.',
       'El Justicialismo ha dejado de ser la causa de un hombre para ser la causa del pueblo, y por ella sí valdría la pena darlo todo, incluso la vida.',
       'Gobernar es fácil, lo difícil es conducir.',
       'La verdadera democracia es aquella donde el gobierno hace lo que el pueblo quiere y defiende un solo interés: el del pueblo.',
       'Yo llevo en mis oídos la más maravillosa música, que, para mí, es la palabra del pueblo argentino.',
       'Quien me quiera seguir, que me siga y quien me quiera acompañar, que me acompañe.',
       'Para conducir a un pueblo la primera condición es que uno haya salido del pueblo, que sienta y piense como el pueblo. Quien se dedica a la conducción debe ser profundamente humanista: el conductor siempre trabaja para los demás, jámas para él.',
       'No hay peor cosa que un bruto con inquietudes.',
       'La única verdad es la realidad.',
       'El capitalismo foráneo, el capitalismo foráneo y sus sirvientes oligárquicos y entreguistas han podido comprobar que no hay fuerza capaz de doblegar a un pueblo que tiene conciencia de sus derechos.',
       'No existe para el peronismo más que una sola clase de hombres: los que trabajan.',
       'Sensibilidad e imaginación es base para ver, ver base para apreciar, apreciar base para resolver, y resolver base para actuar.',
       'El hombre es bueno, pero si se lo vigila es mejor.',
       'Para un peronista no puede haber nada mejor que otro peronista.',
       'Por cada uno de los nuestros que caiga, caerán cinco de los de ellos.',
       'La Argentina es un país riquísimo que hasta ahora ha sido saqueado por propios y extraño.',
       'Quien me quiera seguir, que me siga y quien me quiera acompañar, que me acompañe.',
       'Yo llevo en mis oídos la más maravillosa música, que, para mí, es la palabra del pueblo argentino.'
       ];

    for (var i = 0; i < 10; i++) {
        // random pick a sentence from lorem list
        var index = Math.floor(Math.random() * lorem.length);
        
        // add sentence to newLorem list
        newLorem.push(lorem[index]);

        // remove sentence from lorem list so it won't get repeated again
        lorem.splice(index, 1);
    
    }

    content.style.backgroundColor = '#84a9ac';
    content.innerText = newLorem.join(' ')
});

// newLorem = randomLorem

// let randomLorem = Math.floor(Math.random() * lorem.length)
    //  while (newLorem === randomLorem) {
    //     randomLorem = Math.floor(Math.random() * lorem.length);
    // }
