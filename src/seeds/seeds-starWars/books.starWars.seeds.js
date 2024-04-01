const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const BookStarWars = require('../../api/models/models.StarWars/books.StarWars.model');


const arrayBooksStarWars = [{
        title: 'Star Wars: Episodio I - La amenaza fantasma',
        publication_year: 1999,
        saga: 'Saga de las Precuelas',
        saga_index: 1,
        universe: 'Star Wars Canon',
        author: 'Terry Brooks',
        resume: 'La novelización de la Guerra de las Galaxias Episodio I: La amenaza fantasma fue escrita por Terry Brooks y publicada el 21 de abril de 1999 por Del Rey y se basa en la película. En el desierto mundo de Tatooine, lejos de las preocupaciones de la República, un chico esclavo trabaja de día y de noche por sus sueños de ser un Caballero Jedi y un día de viaje a las estrellas, mundos que sólo en el oído de… historias de la búsqueda de un camino Para ganar la libertad de la esclavitud para sí y su amada madre. Su única esperanza reside en su extraordinaria instintos y su extraño don para la comprensión de la "rectitud" de las cosas, las aptitudes que le permitan ser uno de los mejores corredores de Podracers en el planeta. En otra parte de la galaxia, el Caballero Jedi Qui-Gon Jinn y su aprendiz, el joven Obi-Wan Kenobi, son los encargados de la protección de la Reina Amidala mientras ella trata de poner fin al asedio de su planeta por la Federación de Comercio pero algunos problemas harian cruzar esos mundos apartados con resultados extraños.',
        picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710699249/Star%20Wars/Books/Episodio_I_La_amenaza_fantasma_ydylvp.jpg',
    },
    {
        title: 'Star Wars: Episodio II - El ataque de los clones',
        publication_year: 2002,
        saga: 'Saga de las Precuelas',
        saga_index: 2,
        universe: 'Star Wars Canon',
        author: 'R.A. Salvatore',
        resume: 'Hay grandes disturbios en la Fuerza. Desde los rascacielos gigantes de la imponente Coruscant a los hermosos jardines del pastoral Naboo la distancia es evidente. La República está cayendo, incluso bajo el liderazgo del Supremo Canciller Palpatine, elegido tres años más tarde para resolver la crisis del corrupto gobierno. Los Separatistas están planeando la guerra, y el senado está desesperadamente dividido, inmóvil para decidir la correcta decisión de crear un ejército o seguir manteniendo la frágil paz. Es como una estalagmita que una vez quebrada llevaría al caos galáctico. Decidido y con coraje, Anakin Skywalker se es mayor justamente en un tiempo de desastre. El aprendiz de diecinueve años de Obi-Wan Kenobi es un verdadero engima al Consejo Jedi y todo un reto para su maestro. El tiempo no ha endurecido el carácter de Anakin, no como su entremamiento Jedi formó su agresión independiente. Cuando un atentado a la vida de la senadora Padmé Amidala los une por primera vez en diez años, es claro que el tiempo no sólo ha definido el apego de Anakin por la hermosa diplomática. El ataque a la senadora Padmé Amidala justo antes del crucial voto que lleva al República directamente al perfecto desastre. El Maestro Yoda y Mace Windu sienten grandes desequilibrios. El lado oscuro está creciendo. Cegando toda la visión y percepción de los Jedi sin dejarlos darse cuenta de los catastróficos eventos que suceden. Sin que los Jedi lo sepan, hay todo un ejército construido para la República esperando la batalla. Pero incluso las desdichas de la República, Anakin y Padmé encuentran una conección tan intensa entre ellos que todo lo demás parece carecer de importancia. Anakin se perderá en sus pensamientos, dentro de los sentimientos Jedi, tener apego incondicional hacia otra persona es un privilegio prohibido de dar... Basado en la historia de George Lucas y el guión de George Lucas y Jonathan Hales, esta intensa y reveladora novela por el autor de bestsellers R. A. Salvatore crea una nueva luz en la leyenda de Star Wars y conscientemente ilumina nuestra más querida saga.',
        picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710699252/Star%20Wars/Books/Episodio_II_El_ataque_de_los_clones_ffsddn.jpg',
    },
    {
        title: 'Star Wars: Episodio III - La venganza de los Sith',
        publication_year: 2005,
        saga: 'Saga de las Precuelas',
        saga_index: 3,
        universe: 'Star Wars Canon',
        author: 'Matthew Stover',
        resume: 'Después de años de guerra, los separatistas han maltratado a la vacilante República casi hasta el punto de colapso. En Coruscant, el Senado mira sin poder hacer nada como el Canciller Supremo Palpatine agresivamente tira fuera más y más las libertades constitucionales en nombre de la salvaguardia de la República. Yoda , Mace Windu , y sus compañeros Maestros deben lidiar con el inquietante Canciller que quier pasar a asumir el control del Consejo Jedi. Y Anakin Skywalker, el profetizado Elegido, destinado a aportar equilibrio a la Fuerza, está cada vez más consumido por su temor de que su secreto amor, la Senadora Padmé Amidala, morirá. Como la lucha se intensifica a través de la galaxia, se sientan las bases para un final explosivo: Obi-Wan Kenobi lleva a cabo una peligrosa misión para destruir al temido jefe militar separatista, el General Grievous. Mientras tanto en Coruscant, Palpatine, impaciente por conseguir un mayor control, incluso influye en la opinión pública sutilmente a su vez contra los Jedi. Y un conflicto dentro de Anakin lo deja atormentado por indecibles visiones peligrosamente más cerca de los bordes del poder del Lado Oscuro de la Fuerza, con una galaxia, un gobierno democrático, una orden y la vida de su amada que quedan al final en sus manos. Queda tan sólo para Anakin elegir entre su lealtad a los Jedi y a su amigo y mentor Obi-Wan Kenobi, y entre el Señor Oscuro de los Sith Darth Sidious, cuya sombra se cierne cada vez más grande, para lograr el escalonado golpe definitivo contra la República… y ordenarse como un nuevo temible Lord Sith: Darth Vader.',
        picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710699243/Star%20Wars/Books/Episodio_III_La_venganza_de_los_sith_h6gkdv.jpg',
    },
    {
        title: 'La guerra de las galaxias',
        publication_year: 1976,
        saga: 'Trilogía original',
        saga_index: 4,
        universe: 'Star Wars Canon',
        author: 'George Lucas',
        resume: 'Este resumen salió publicado en la versión en español de la novela. Luke Skywalker, un joven de 20 años, se aburría de la vida monótona del remoto planeta de Tatooine, donde vivía en la granja de su tío. Hasta que un día intercepta el mensaje secreto de la princesa Leia, secuestrada por un siniestro jefe militar. Sin dudarlo, armado únicamente de su valor y de la espada de luz que perteneció a su padre, Luke se enfrenta, como un héroe antigua, a enemigos cuyo inmenso poder desconoce. Cuando consigue penetrar en la nave espacial enemiga, Luke ignora que va a desencadenar una terrorífica guerra del espacio...Esta novela, llevada al cine por Geoge Lucas, batió todos los récords conocidos de asistencia y renovó los temas más antiguos y queridos de la humanidad: el amor, la juventud, la aventura',
        picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710699264/Star%20Wars/Books/La_guerra_de_las_galaxias_vhoycy.jpg',
    },
    {
        title: 'El imperio contraataca',
        publication_year: 1980,
        saga: 'Trilogía original',
        saga_index: 5,
        universe: 'Star Wars Canon',
        author: 'Donald F. Glut',
        resume: ' La trama se centra en la búsqueda de Luke por convertirse en un Jedi, mientras que el Imperio intensifica sus esfuerzos para aplastar a la Alianza Rebelde.',
        picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710699244/Star%20Wars/Books/El_imperio_contraataca_gl62lq.jpg',
    },
    {
        title: 'El retorno del Jedi',
        publication_year: 1983,
        saga: 'Trilogía original',
        saga_index: 6,
        universe: 'Star Wars Canon',
        author: 'James Kahn',
        resume: 'Sigue a Luke Skywalker, Han Solo, la princesa Leia y sus aliados mientras intentan derrotar al Imperio Galáctico y al Emperador Palpatine. La trama culmina en la batalla de Endor, donde la Alianza Rebelde enfrenta al Imperio en un intento por destruir la segunda Estrella de la Muerte y poner fin al reinado de terror del Emperador.',
        picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710699248/Star%20Wars/Books/El_retorno_del_Jedi_mxs4sm.jpg',
    },
]
mongoose
    .connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async() => {
        const allBooksStarWars = await BookStarWars.find();
        if (allBooksStarWars.length > 0) {
            await BookStarWars.collection.drop();
            console.log('Libros borrados');
        }
    })
    .catch((err) => {
        console.log('error borrando los Libros', err);
    })
    .then(async() => {
        const booksStarWarsMap = arrayBooksStarWars.map((book) => new BookStarWars(book));
        await BookStarWars.insertMany(booksStarWarsMap);
        console.log('Libros insertados');
    })
    .catch((err) => {
        console.log('error insertando los Libros', err);
    })
    .finally(() => mongoose.disconnect());