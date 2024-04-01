const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const BookStartrek = require('../../api/models/models.Startrek/books.Startrek.model');


const arrayBooksStartrek = [
    {
        title: 'Star Trek',
        publication_year: 1979,
        saga_index: 1,
        author: 'Gene Roddemberry',
        resume: 'El escritor-productor que creó al Sr. Spock y a todos los demás personajes de Star Trek, que inventó la nave estelar Enterprise, que le dio al programa su apariencia, sus ideales, ¡lo reúne todo de nuevo aquí en su primera novela de Star Trek!Su primera misión de cinco años ha terminado. Kirk, Spock, McCoy, Scotty, toda la tripulación se ha dispersado en otros trabajos o en otras vidas. Ahora están juntos de nuevo en un fabulosamente renovado USS Enterprise, mientras una poderosamente destructiva amenaza se cierne sobre la Tierra y la raza humana.',
        picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711136246/startrek/books/1._stra_trek_a49nv0.webp',
    },
    {
        title: 'El efecto entropia',
        publication_year: 1981,
        saga_index: 2,
        author: 'Vonda N. McIntyre',
        resume: 'El Enterprise es convocado para transportar a un peligroso criminal desde la prisión de la base estelar hasta un centro de rehabilitación: el brillante físico, el Dr. Georges Mordreaux, acusado de prometer enviar a personas de vuelta en el tiempo, y luego matarlas en su lugar.Pero cuando Mordreaux escapa, irrumpiendo en el puente y matando al Capitán Kirk, Spock debe viajar atrás en el tiempo para evitar el desastre, ¡antes de que ocurra!Ahora hay más en juego que solo la vida de Kirk. Los experimentos de Mordreaux han arrojado al universo entero a una mortal distorsión temporal. Spock está luchando contra el tiempo... y el universo se está cerrando sobre sí mismo con la implacable presión de',
        picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711136749/startrek/books/9788425325427-es_ns4iqp.jpg',
    },
    {
        title: 'El gambito de los Kinglon',
        publication_year: 1981,
        saga_index: 3,
        author: 'Robert E. Vardeman',
        resume: 'Cuando el Capitán Kirk y su tripulación reciben la orden de enfrentarse a la nave estelar Klingon más mortífera, la Terror, creen estar preparados para cualquier cosa. La tripulación vulcana indefensa de una nave científica de la Federación ha sido aniquilada, y el crucero de batalla Klingon tiene a la USS Enterprise en su mira, listo para destruirla...Pero el Capitán Kirk parece incapaz de tomar decisiones, Spock ha empezado a tener ataques de ira. Y Chekov ha desobedecido órdenes vitales. La tripulación del Enterprise está perdiendo la razón... uno por uno... todos víctimas de... EL PLAN KLINGON..',
        picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711136251/startrek/books/2._el_gambito_de_los_klingon_doepac.webp',
    },
    {
        title: 'El Pacto de la Corona',
        publication_year: 1981,
        saga_index: 4,
        author: 'Howard Weinstein',
        resume: 'Una lanzadera del Enterprise se ve obligada a aterrizar de emergencia en medio de una violenta tormenta en el árido planeta Sigma 1212. Spock, McCoy y Kailyn, la hermosa heredera al trono de Shaddan, sobreviven al casi desastre.Perseguidos por cazadores primitivos y una banda de exploradores Klingon, deben alcanzar la montaña donde está escondida la fabulosa corona dinástica. Con la ayuda de Spock y McCoy, y sus propios fantásticos poderes mentales, Kailyn debe demostrar que ella sola es la verdadera heredera al trono.Si fallan, abrirán la puerta para la toma de control Klingon de todo el cuadrante.',
        picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711136283/startrek/books/3._el_pacto_de_la_corona_y0oros.jpg',
    },
    {
        title: 'El proyecto Prometeo',
        publication_year: 1982,
        saga_index: 5,
        author: 'Sondra Marshak y Myrna Culbreath',
        resume: 'El Capitán Kirk y su tripulación están en una misión para investigar la misteriosa ola de violencia que ha asolado a los Helvans: revoluciones, disturbios masivos, torturas horribles. Este caos es parte de un experimento por un poder inimaginable que pronto afecta incluso a la tripulación del USS Enterprise.El Capitán Kirk es atormentado por alucinaciones violentas y es apartado del mando. Spock toma el mando, pero sus órdenes parecen irracionales, incluso crueles.A menos que este terrible poder pueda ser detenido, no solo la nave estelar Enterprise, sino toda una galaxia quedará atrapada en el mortal agarre del Diseño Prometheus.',
        picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711136288/startrek/books/4._el_proyecto_prometeo_imkhtt.webp',
    },
    {
        title: 'La morada de la vida',
        publication_year: 1982,
        saga_index: 6,
        author: 'Lee Correy',
        resume: 'En el planeta Mercan, no hay estrellas, no hay luna, no hay espacio exterior...Los ciudadanos de Mercan no pueden concebir mundos más allá del suyo. Su sol, Mercaniad, es propenso a erupciones mortales y radiactivas, y los Mercanos han organizado sus vidas en torno a la necesidad de sobrevivir al Ordeal, hasta que un extraño visitante aparece de la nada...El USS Enterprise, gravemente dañado y desesperadamente necesitado de reparaciones, debe buscar ayuda de un pueblo que no puede creer en su existencia. Mercaniad está a punto de explotar, y James Kirk enfrenta una elección imposible: atacar el sol mismo y salvar su nave y tripulación, o dejar que un pueblo viva en paz, en el único mundo que conocen... el hogar de la vida.',
        picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711136296/startrek/books/5._la_morada_de_la_vida_o0yz11.webp',
    },
    {
        title: 'Stark Trek: La ira de Khan',
        publication_year: 1982,
        saga_index: 7,
        author: 'Vonda N. McIntyre',
        resume: '¡Prepárate para una emoción a velocidad de warp 10!El futuro definitivo de la galaxia está en manos de James Kirk, el Sr. Spock y la intrépida tripulación del USS Enterprise...El arma definitiva de la galaxia está en manos del malvado Khan y sus seguidores.Una batalla que sacudirá el universo no puede ser evitada... y la aventura definitiva está a punto de comenzar.',
        picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711136635/startrek/books/The_Wrath_of_Khan_29_bszagr.webp',
    },
    {
        title: 'Fuego Negro',
        publication_year: 1983,
        saga_index: 8,
        author: 'Sony Cooper',
        resume: 'Cuando el sabotaje golpea al Enterprise, la investigación de Spock lo lleva a formar una alianza con los imperios Romulano y Klingon contra los Tomarii, una raza sedienta de sangre para quienes la guerra es la vida misma. Spock es declarado un traidor y sentenciado a la prisión de máxima seguridad de la Federación, y Kirk debe elegir entre la amistad y el deber, con consecuencias graves para él mismo, Spock y toda la Federación si se equivoca',
        picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711136298/startrek/books/6._fuego_negro_crcrfm.webp',
    },
    {
        title: 'Triangulo',
        publication_year: 1983,
        saga_index: 9,
        author: 'Sondra Marshak y Myrna Culbreath',
        resume: 'El alma de Kirk... La vida de Spock.Un oscuro plan ha sido desatado en la galaxia, un diseño tan vasto que solo una mente colectiva, y despiadada, como la Totalidad podría haberlo concebido. Ahora el Capitán Kirk debe luchar contra la seductora fuerza de la voluntad de la Totalidad. Era razonable que el Capitán Kirk y la Agente Libre de la Federación Sola Than se enamoraran. Pero ninguna razón en el universo podría haber previsto la tragedia del propio amor de Spock por la misma mujer. Ahora este conflicto inimaginable podría costarle al Capitán Kirk su propia alma y llevar la muerte al orgulloso Vulcano. Pero en lo inimaginable radica su única oportunidad, y la libertad de la galaxia depende del resultado del... Triángulo.',
        picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711136306/startrek/books/8._triangulo_gkmtur.webp',
    },
    {
        title: 'La telarña de los Romulanos',
        publication_year: 1983,
        saga_index: 10,
        author: 'M.S.Murdock',
        resume: 'Devastados por un virus mortal, los romulanos ingresan a Canara, donde se encuentra el único antídoto. Desesperados, incitan a un ataque victorioso del USS Enterprise contra una de sus naves, pero Kirk descubre su ardid.Mientras tanto, la computadora central se ha enamorado de él, causando graves daños a la nave estelar Enterprise. De alguna manera, Kirk debe superar a la computadora enamorada y llevar el antídoto a los romulanos antes de que la galaxia caiga al borde de la guerra.',
        picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711136303/startrek/books/7._la_telara%C3%B1a_de_los_romulanos_ekika3.jpg',
    },
    {
        title: 'Motin en el Enterprise',
        publication_year: 1983,
        saga_index: 11,
        author: 'Robert E Vanderman',
        resume: 'El USS Enterprise está paralizado en órbita alrededor de un peligroso planeta vivo y respirante, y una desesperada misión de paz hacia el Brazo de Orión se encuentra estancada. El Capitán Kirk nunca ha necesitado tanto a su tripulación. Pero una mujer alienígena y ágil está lanzando un hechizo de pacifismo, y ahora de amotinamiento, sobre la tripulación.De repente, el viaje de Kirk por la paz se ha convertido en una aterradora guerra: ¡recuperar el mando de su nave!',
        picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711136239/startrek/books/13._motin_en_el_entreprise_cjpn1q.jpg',
    },
    {
        title: 'El cielo Herido',
        publication_year: 1983,
        saga_index: 12,
        author: 'Diane Duane',
        resume: 'Un científico alienígena inventa el motor de inversión intergaláctica, un sistema de propulsión que trasciende la velocidad de curvatura, ¡y el USS Enterprise será el primero en probarlo! Los Klingons intentan frustrar la prueba, pero un peligro mayor se cierne cuando extraños síntomas surgen entre la tripulación, y el tiempo se vuelve sin sentido.Ahora el Capitán Kirk y sus amigos enfrentan su mayor desafío: reparar el tejido del universo antes de que el tiempo se pierda para siempre.',
        picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711136242/startrek/books/14._el_cielo_herido_x3q5ho.jpg',
    },
    {
        title: 'La Nave Fantasma(La Nueva Generacion)',
        publication_year: 1998,
        saga_index: 1,
        author: 'Diane Carey',
        resume: 'En 1995, un portaaviones soviético es destruido por una criatura misteriosa que luego desaparece de manera igualmente misteriosa. Más de trescientos años después, la consejera Deanna Troi despierta en sus aposentos de una pesadilla en la que percibe las voces de la tripulación de ese barco ruso, cuyas esencias vitales fueron absorbidas de alguna manera por la criatura que los destruyó. Y la pesadilla anuncia un peligro para el USS Enterprise-D mismo, porque si Picard no puede descubrir una manera de comunicarse con la criatura, podría absorber a su tripulación de la misma manera que lo hizo con los rusos.',
        picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711136249/startrek/books/1._la_nave_fantasma_nueva_vdocek.jpg',
    },
    {
        title: 'Los Guardianes de la Paz(La Nueva Generacion)',
        publication_year: 1988,
        saga_index: 2,
        author: 'Gene DeWeese',
        resume: 'Explorando una nave alienígena abandonada, el Teniente Comandante Data y el Teniente Geordi La Forge se encuentran de repente transportados a años luz de distancia, ¡en medio de un conflicto mortal!                                                                                                                                                                                                                     Mientras el Capitán Picard y la tripulación del USS Enterprise™ buscan febrilmente a los miembros desaparecidos de la tripulación, Data y La Forge descubren que están en una estación casi idéntica a la que estaban explorando, en órbita alta alrededor de un mundo similar a la Tierra. Años atrás, los habitantes de ese planeta tropezaron accidentalmente con la nave y su tecnología avanzada, y desde entonces han utilizado sus armas para mantener desarmadas y en paz a las naciones en el planeta debajo.Ahora su propia llegada ha precipitado una crisis en la estación. De alguna manera, Data y La Forge deben encontrar una manera de restaurar la confianza entre el planeta debajo y los guardianes de la estación arriba, ¡antes de que estalle una guerra final y destructiva!',
        picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711136528/startrek/books/Unification_gzyitx.webp',
    },
    {
        title: 'Los niños de Hamlin(La Nueva Generacion)',
        publication_year: 1988,
        saga_index: 3,
        author: 'Gene DeWeese',
        resume: 'La Masacre de Hamlin: cada oficial de la Flota Estelar conoce la historia. El diminuto puesto de avanzada de la Federación en Hamlin fue destruido, toda su población adulta fue brutalmente asesinada antes de que se levantaran los primeros escudos de defensa. Aún peor, los niños de la colonia desaparecieron sin dejar rastro, secuestrados por los alienígenas que atacaron con una ferocidad y velocidad que superaron a sus perseguidores de la Flota Estelar.                                                                                                                                                                                                                    Ahora, cincuenta años después, las naves Choraii han aparecido nuevamente. Pero esta vez la Federación está lista; esta vez los Choraii deben pagar por lo que necesitan. Los metales preciosos solo pueden ser comprados con los niños de Hamlin todavía viviendo con sus captores.Esta vez, los Choraii deben enfrentarse al Capitán Jean-Luc Picard y la tripulación de la nave estelar USS Enterprise-D...',
        picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711136244/startrek/books/The_Children_of_Hamlin_cover_dwxqqc.webp',
    },
    {
        title: 'Supervivientes(La Nueva Generacion)',
        publication_year: 1989,
        saga_index: 4,
        author: 'Jean Loraah',
        resume: 'Treva: una colonia humana en los confines del espacio conocido. Aislada del resto de la galaxia, según el último informe estaban al borde de convertirse en una verdadera comunidad interestelar, un miembro de pleno derecho de la Federación. Pero ahora, el USS Enterprise-D ha recibido una señal de socorro. Treva está en medio de una violenta revolución, liderada por un despiadado señor de la guerra que ha cometido innumerables atrocidades en nombre de la libertad                                                                                                                                                                                                                    Data y Natasha Yar son enviados para investigar. Pero una vez que llegan a Treva, descubren que la verdad, y cualquier posible solución, puede ser más compleja que una simple rebelión. Porque la presidenta de Treva quiere más que las buenas palabras de la Flota Estelar en su lucha contra los rebeldes.Ella quiere sus armas. Y antes de que termine la batalla, pretende conseguirlas. Aunque sea a costa de la vida de Data y Yar..',
        picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711136285/startrek/books/3._los_supervivientes_xevh6u.jpg',
    },
    {
        title: 'Zona de Conflicto(La Nueva Generacion)',
        publication_year: 1989,
        saga_index: 5,
        author: 'Peter David',
        resume: 'En lo profundo de las regiones inexploradas de nuestra galaxia, los Kreel, una raza primitiva y belicosa, han tropezado con armas poderosas más allá de su imaginación más desbordante. Los Kreel han utilizado esas armas para atacar a sus enemigos más amargos, los Klingons.El Capitán Jean-Luc Picard y la tripulación del USS Enterprise-D son llamados para mediar en el conflicto al transportar equipos diplomáticos de las dos razas en guerra hasta el origen de su conflicto, el misterioso planeta donde se descubrieron las armas, en un intento de encontrar una solución pacífica al conflicto y descubrir los orígenes de las armas súper poderosas.Antes de que la galaxia estalle en una guerra a gran escala.',
        picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711136301/startrek/books/6._zona_de_conflicto_nueva_n957du.jpg',
    },
    {
        title: 'Hambre de poder(La Nueva Generacion)',
        publication_year: 1989,
        saga_index: 6,
        author: 'Howard Weinsten',
        resume: 'Enviados para entregar ayuda humanitaria de emergencia a la Planeta Thiopa, los únicos aliados de la Federación en un sector críticamente importante del espacio, la tripulación se encuentra con una dictadura brutal, más preocupada por preservar su propio poder que por proteger a sus ciudadanos o el mundo que comparten. El Capitán Picard duda en entregar los suministros al gobierno corrupto: teme que nunca lleguen a su destino previsto. Pero ¿podrá convencer al consejo gobernante de cambiar sus formas antes de que sea demasiado tarde, tanto para el gobierno como para Thiopa misma?',
        picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711136291/startrek/books/4._hambre_d_epoder_nueva_cycqzx.jpg',
    },
    {
        title: 'Mascaras(La Nueva Generacion)',
        publication_year: 1989,
        saga_index: 7,
        author: 'John Wormholm',
        resume: 'El USS Enterprise-D viaja a Lorca, un mundo hermoso con una cultura feudal donde los habitantes usan máscaras para mostrar su rango y estación. Allí, el Capitán Picard y un equipo de desembarco se ponen máscaras propias para comenzar una búsqueda del gobernante del planeta y la gran Máscara de la Sabiduría que el líder lleva tradicionalmente. Su misión: establecer relaciones diplomáticas.                                                                                                                                                                                                               Pero poco después de transportarse, Picard y su grupo pierden contacto con la nave, y el Comandante Riker lidera un grupo de búsqueda hacia el planeta para encontrarlos.Sin embargo, ambos hombres ignoran que sus búsquedas, de hecho, toda la misión de la nave, forman parte del plan de un loco. Un loco que está preparando el escenario para una trampa que atrapará a ambos equipos de desembarco del Enterprise y lo dejará listo para apoderarse de la impresionante Máscara de la Sabiduría...',
        picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711136228/startrek/books/9._mascaras_nueva_xbzb2u.webp',
    },
    {
        title: 'El honor del capitan(La Nueva Generacion)',
        publication_year: 1989,
        saga_index: 8,
        author: 'David y Daniel Dworkin',
        resume: "Una serie de ataques viciosos por parte del Imperio M'Dok ha devastado el planeta Tenara, lo que lleva al USS Enterprise-D y otra nave estelar, el Centurion, a ayudar al planeta. El capitán del Centurion es Lucius Sejanus, un hombre poderoso y magnético que favorece tomar una postura mucho más fuerte contra los M'Dok que el Capitán Picard. Y a medida que el conflicto se intensifica, parece que los instintos de Sejanus son correctos... porque solo medidas extremas pueden detener los asaltos mortales en Tenara.                                                                                                       Ahora, el pueblo de Tenara debe decidir qué camino seguirá: el camino de la paz o el camino hacia la guerra. Pero desconocido para todos, uno de los oficiales del Centurion ha tomado esa decisión por ellos y planea provocar una guerra a gran escala entre la Federación y el Imperio M'Dok..",
        picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711136227/startrek/books/9._el_honor_del_capitan_nueva_jlt6pw.webp',
    },
    {
        title: 'Una llamada a la oscuridad(La Nueva Generacion)',
        publication_year: 1989,
        saga_index: 9,
        author: 'Michael Jan Friedman',
        resume: 'El USS Enterprise-D descubre una nave de investigación de la Federación sin vida, orbitando un planeta oculto detrás de un misterioso escudo de energía. A pesar de las fuertes objeciones de sus oficiales superiores, el Capitán Picard y un equipo de desembarco se transportan para buscar a la tripulación desaparecida...Y desaparecen.Pero pronto la desaparición de su capitán no es el único problema que enfrenta el Comandante Riker. Una misteriosa enfermedad ha comenzado a devastar a la tripulación del Enterprise. Ahora Riker debe desentrañar los secretos del planeta debajo para rescatar a Picard y prevenir la destrucción de la nave estelar',
        picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711136233/startrek/books/10._una_llamada_a_la_oscuridad_nueva_jcdxfh.webp',
    },

]
mongoose
    .connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async() => {
        const allBooksStartrek = await BookStartrek.find();
        if (allBooksStartrek.length > 0) {
            await BookStartrek.collection.drop();
            console.log('Libros borrados');
        }
    })
    .catch((err) => {
        console.log('error borrando los Libros', err);
    })
    .then(async() => {
        const booksStartrek = arrayBooksStartrek.map((book) => new BookStartrek(book));
        await BookStartrek.insertMany(booksStartrek);
        console.log('Libros insertados');
    })
    .catch((err) => {
        console.log('error insertando los Libros', err);
    })
    .finally(() => mongoose.disconnect());