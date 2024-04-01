const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const BookHarryPotter = require('../../api/models/models.HarryPotter/books.HarryPotter.model');


const arrayBooksHarryPotter = [{
        title: 'Harry Potter y la Piedra Filosofal',
        publication_year: 1997,
        saga_index: 1,
        author: 'J.K. Rowling',
        resume: 'Harry Potter, un niño huérfano que vive con su desagradable familia Dursley, descubre que es un mago en su undécimo cumpleaños cuando es visitado por Hagrid, un hombre gigante y misterioso. Hagrid le revela a Harry su verdadera identidad y el hecho de que es famoso en el mundo mágico por sobrevivir al ataque mortal de Lord Voldemort, quien mató a sus padres cuando era solo un bebé. Harry es llevado al Colegio Hogwarts de Magia y Hechicería para comenzar su educación mágica. Durante su primer año en Hogwarts, Harry hace nuevos amigos, Hermione Granger y Ron Weasley, pero también enfrenta desafíos y rivalidades con otros estudiantes y miembros del personal. Descubre que Voldemort está buscando la piedra filosofal, un artefacto que otorga la inmortalidad, y que está escondida en Hogwarts.                                                                  Harry y sus amigos se dan cuenta de que alguien está tratando de robar la piedra, pero los adultos en la escuela no les creen. Deciden investigar por sí mismos y se aventuran a la cámara donde se guarda la piedra, enfrentando varios obstáculos y trampas en el camino. Finalmente, Harry llega a la cámara y se enfrenta a Quirinus Quirrell, quien está poseído por Voldemort.Harry logra evitar que Voldemort obtenga la piedra, que termina siendo destruida por Albus Dumbledore para evitar que caiga en manos equivocadas. Al final del año escolar, Harry regresa brevemente a casa con los Dursley, esperando ansiosamente su segundo año en Hogwarts y las aventuras que le esperan.',
        picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710329162/HarryPotter/Books/Opcion2/1_book_HPYLaPiedraFilosofal_ycw2bo.jpg',
    },
    {
        title: 'Harry Potter y la Cámara Secreta',
        publication_year: 1998,
        saga_index: 2,
        author: 'J.K. Rowling',
        resume: 'Después de su primer año en Hogwarts, Harry regresa a casa de los Dursley. Es advertido por Dobby, un elfo doméstico, de que está en peligro si regresa a la escuela, pero Harry ignora la advertencia. Ron y sus hermanos llegan en un coche volador para rescatarlo.En su segundo año en Hogwarts, Harry comienza a escuchar voces y descubre que la Cámara de los Secretos ha sido abierta nuevamente. Un misterioso heredero de Slytherin está petrificando a estudiantes nacidos de muggles. Con la ayuda de Ron y Hermione, Harry investiga y encuentra un diario que perteneció a Tom Riddle, quien acusa a Hagrid de abrir la Cámara en el pasado. Después de que Hermione es petrificada, Harry y Ron descubren que el monstruo detrás de los ataques es un basilisco que se mueve a través de las tuberías de la escuela. Mientras tanto, el Ministro de Magia retiene a Hagrid y Lucius Malfoy intenta destituir a Dumbledore como director. Después de que Ginny es secuestrada, Harry y Ron confrontan a Gilderoy Lockhart, quien resulta ser un fraude. Descubren una entrada a la Cámara secreta y, mientras Ron intenta abrir el paso, Harry entra solo y encuentra a Ginny inconsciente junto al diario de Riddle. Riddle, quien resulta ser una versión joven de Voldemort, libera al basilisco para matar a Harry. Con la ayuda del Fénix de Dumbledore, Harry mata al basilisco y destruye el diario. Al final, las víctimas de petrificación son curadas y Harry es honrado por su valentía.Dumbledore restablece el orden en la escuela y revela que solo un verdadero miembro de Gryffindor podría haber utilizado la espada de Godric Gryffindor para derrotar al basilisco, refutando las acusaciones de Malfoy.',
        picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710329167/HarryPotter/Books/Opcion2/2_book_HPYLaCamaraSecreta_fcj3ad.webp',
    },
    {
        title: 'Harry Potter y el Prisionero de Azkaban',
        publication_year: 1999,
        saga_index: 3,
        author: 'J.K. Rowling',
        resume: ' Después de su primer año en Hogwarts, Harry Potter regresa a casa de los Dursley. Ignorando las advertencias de un elfo doméstico llamado Dobby, regresa a Hogwarts con la ayuda de Ron y sus hermanos. En su segundo año, descubre que la Cámara de los Secretos ha sido abierta nuevamente, amenazando a los estudiantes nacidos de muggles. Harry, Ron y Hermione investigan y descubren un diario que contiene la memoria de Tom Riddle, quien culpa a Hagrid por abrir la Cámara en el pasado. Después de que Hermione es petrificada, Harry y Ron enfrentan al falso profesor Lockhart y descubren la entrada a la Cámara secreta. Harry entra solo y enfrenta al basilisco, derrotándolo con la espada de Gryffindor y destruyendo el diario de Riddle. Al final, las víctimas de petrificación son curadas, Dumbledore restablece el orden en la escuela y Harry es honrado por su valentía.',
        picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710329172/HarryPotter/Books/Opcion2/3_book_HPYElPrisioneroDeAzkaban_qugoov.jpg',
    },
    {
        title: 'Harry Potter y el Cáliz de Fuego',
        publication_year: 2000,
        saga_index: 4,
        author: 'J.K. Rowling',
        resume: 'El libro comienza con un sueño de Harry Potter sobre Frank Bryce, un jardinero, que presencia una conversación entre Lord Voldemort y Peter Pettigrew. Durante el verano, Harry asiste a la Copa Mundial de Quidditch con los Weasley y Hermione, donde los mortífagos aterrorizan a los presentes. De vuelta en Hogwarts, se anuncia el Torneo de los Tres Magos, en el cual Harry es seleccionado como un cuarto campeón misterioso, desatando tensiones entre él y sus amigos.El nuevo profesor de Defensa Contra las Artes Oscuras, Alastor "Ojoloco" Moody, enseña a los estudiantes las maldiciones imperdonables. Harry descubre que es el único en sobrevivir a la maldición asesina de Voldemort. En la primera prueba del Torneo, Harry enfrenta un dragón y gana con ayuda de sus amigos. Las tensiones aumentan entre los estudiantes durante el Baile de Navidad, donde Harry ve a Karkaroff y Snape discutir y descubre el secreto de Hagrid.En la segunda prueba, Harry rescata a los seres queridos de los otros campeones del fondo del lago. Rita Skeeter, una periodista de El Profeta, causa problemas con sus artículos falsos. Harry y Krum encuentran a Barty Crouch Sr. en el bosque, quien desaparece misteriosamente. En la tercera prueba, Harry y Cedric Diggory terminan juntos en un cementerio donde Voldemort regresa a la vida. Cedric es asesinado y Harry escapa.En Hogwarts, el impostor de Moody es descubierto como Barty Crouch Jr. y es detenido. A pesar de las pruebas, el Ministro de Magia se niega a aceptar el regreso de Voldemort. Harry es declarado ganador del torneo y decide dar su premio a los gemelos Weasley para abrir su tienda de bromas. Regresa a casa de los Dursley para otro verano.',
        picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710329178/HarryPotter/Books/Opcion2/4_book_HPYElCalizDeFuego_v7ooyf.webp',
    },
    {
        title: 'Harry Potter y la Orden del Fénix',
        publication_year: 2003,
        saga_index: 5,
        author: 'J.K. Rowling',
        resume: 'El libro comienza con Harry viviendo en Privet Drive, preocupado por las pesadillas sobre Voldemort y sintiéndose ignorado por los Dursley. Un encuentro con dementores lleva a un enfrentamiento donde Harry realiza el hechizo Patronus. La Orden del Fénix, liderada por Dumbledore, lo rescata y lo lleva a la sede de la Orden.En Hogwarts, Dolores Umbridge impone su tiranía como nueva profesora de Defensa Contra las Artes Oscuras, restringiendo el aprendizaje práctico y despidiendo a profesores. Harry, Hermione y Ron forman el Ejército de Dumbledore para prepararse para la guerra. Harry descubre que él y Voldemort comparten una conexión mental y Dumbledore le enseña a protegerse.Umbridge toma el cargo de directora de Hogwarts y reprime a profesores y alumnos. Harry tiene visiones sobre Sirius siendo torturado por Voldemort en el Departamento de Misterios. El Ejército de Dumbledore y la Orden del Fénix viajan al Ministerio donde encuentran a los mortífagos. En la batalla, Sirius muere y Harry persigue a Bellatrix, pero Voldemort aparece y enfrenta a Dumbledore.Voldemort intenta poseer a Harry, pero este logra resistir y el Señor Tenebroso huye. Dumbledore explica que Voldemort intentó matarlo cuando era un bebé debido a una profecía que predecía que Harry podría derrotarlo. Ahora Harry entiende su destino y la importancia de su papel en la lucha contra Voldemort.',
        picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710329184/HarryPotter/Books/Opcion2/5_book_HPYLaOrdenDelFenix_uikhxs.webp',
    },
    {
        title: 'Harry Potter y el Misterio del Príncipe',
        publication_year: 2005,
        saga_index: 6,
        author: 'J.K. Rowling',
        resume: 'En el verano de 1996, Cornelius Fudge informa al primer ministro del Reino Unido sobre el regreso de Voldemort y la creciente amenaza que representa. Mientras tanto, Snape realiza un Juramento Inquebrantable para ayudar a Draco Malfoy en una misión secreta de Voldemort. Dumbledore persuade a Horace Slughorn para que regrese como profesor a Hogwarts.Harry, Ron y Hermione sospechan de las actividades de Draco y lo siguen al callejón Diagon, donde lo ven en Borgin y Burkes. En Hogwarts, Snape enseña Defensa Contra las Artes Oscuras y Harry destaca en Pociones con un libro perteneciente al Príncipe Mestizo.Dumbledore y Harry exploran recuerdos para aprender sobre los Horrocruxes, objetos que contienen partes del alma de Voldemort. Descubren que Voldemort dividió su alma y crearon Horrocruxes para mantenerse inmortal. Durante un viaje, encuentran y destruyen uno de los Horrocruxes en una cueva protegida por Inferi.De vuelta en Hogwarts, Dumbledore es asesinado por Snape, quien revela su identidad como el Príncipe Mestizo y huye. Harry, Ron y Hermione deciden no regresar a Hogwarts y emprenden la búsqueda de los Horrocruxes para derrotar a Voldemort, dejando a la comunidad mágica enfrentarse al segundo levantamiento del Señor Tenebroso.',
        picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710329191/HarryPotter/Books/Opcion2/6_book_HPYElMisterioDelPrincipe_h4ohjg.jpg',
    },
    {
        title: 'Harry Potter y las Reliquias de la Muerte',
        publication_year: 2007,
        saga_index: 7,
        author: 'J.K. Rowling',
        resume: 'Harry Potter cumple la mayoría de edad y pierde la protección mágica en casa de los Dursley. Después de un intento de emboscada por parte de Voldemort, Harry, Ron y Hermione se refugian en La Madriguera y reciben la herencia de Dumbledore, que incluye la espada de Gryffindor y el libro "Los cuentos de Beedle el Bardo", donde encuentran pistas sobre las Reliquias de la Muerte.Durante la boda de Bill Weasley, notan un extraño símbolo en el colgante de Xenophilius Lovegood, relacionado con las Reliquias de la Muerte. Al escapar de los Mortífagos, el trío busca Horrocruxes por todo el Reino Unido y descubre la verdad sobre las Reliquias.Capturados y llevados a la Mansión Malfoy, escapan y encuentran más Horrocruxes. Luego, participan en la batalla final en Hogwarts, donde Voldemort asesina a Snape, revelando su lealtad. Harry descubre que es un Horrocrux y debe morir para vencer a Voldemort.En un limbo, Dumbledore le revela a Harry que el Horrocrux en él fue destruido y se convierte en el verdadero "señor de la muerte". Harry regresa, reinicia la batalla y Voldemort muere por su propia maldición. El epílogo muestra a los protagonistas 19 años después, llevando a sus hijos a Hogwarts.',
        picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710329197/HarryPotter/Books/Opcion2/7_book_HPYLasReliquiasDeLaMuerte_qatuad.jpg',
    },
    {
        title: 'Harry Potter y el Legado Maldito',
        publication_year: 2016,
        saga_index: 8,
        author: 'J.K. Rowling, Jack Thorne, John Tiffany',
        resume: 'Ser Harry Potter nunca ha sido tarea fácil, menos aún desde que se ha convertido en un atareadísimo empleado del Ministerio de Magia, un hombre casado y padre de tres hijos. Y si Harry planta cara a un pasado que se resiste a quedar atrás, su hijo menor, Albus Severus, ha de luchar contra el peso de una herencia familiar de la que él nunca ha querido saber nada. Cuando el destino conecte el pasado con el presente, padre e hijo deberán afrontar una verdad muy incómoda: a veces, la oscuridad surge de los lugares más insospechados. Desde que el primer libro apareciera en librerías en 1997 —en 1999 en castellano—, la saga de Harry Potter se ha traducido a setenta y nueve idiomas en doscientos países y ha sumado más de cuatrocientos cincuenta millones de ejemplares vendidos en todo el mundo, de los cuales más de trece millones en castellano. Un fenómeno que ha aficionado a la lectura a millones de jóvenes de todas las culturas.',
        picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710329287/HarryPotter/Books/Opcion2/8_book_HPYElLegadoMaldito_r5lpi0.webp',
    }
]
mongoose
    .connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async() => {
        const allBooksHarryPotter = await BookHarryPotter.find();
        if (allBooksHarryPotter.length > 0) {
            await BookHarryPotter.collection.drop();
            console.log('Libros borrados');
        }
    })
    .catch((err) => {
        console.log('error borrando los Libros', err);
    })
    .then(async() => {
        const booksHarryPotter = arrayBooksHarryPotter.map((book) => new BookHarryPotter(book));
        await BookHarryPotter.insertMany(booksHarryPotter);
        console.log('Libros insertados');
    })
    .catch((err) => {
        console.log('error insertando los Libros', err);
    })
    .finally(() => mongoose.disconnect());