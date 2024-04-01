const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const CharacterAlien = require('../../api/models/models.Alien/characters.Alien.model');

const arrayCharactersAlien = [{
        name: "Ellen Ripley",
        actor: "Sigourney Weaver",
        profession: "Suboficial de Vuelo del Nostromo",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710572054/Alien/Characters/geekociety-alien-ripley_ungxpv.jpg",
        resume: "Ellen Louise Ripley es el personaje principal de la saga de ciencia ficción Alien, protagonizado por la actriz estadounidense Sigourney Weaver. El personaje es considerado como uno de los mejores en la historia del cine además de haber sido revolucionario en desafiar los roles de género tradicionales, en particular en los géneros de ciencia ficción, acción y terror. El personaje también es el rol más memorable protagonizado por Weaver hasta la fecha. Por su rol como Ellen Ripley en Aliens, Weaver fue nominada a un premio de la Academia como mejor actriz, considerado hoy en día como un punto trascendental para la ciencia ficción, en un momento cuando Hollywood daba poca importancia al género. Por su actuación en esa misma película, Weaver también recibió nominaciones a un premio BAFTA, un Globo de Oro, y cuatro Premios Saturn, ganando uno de ellos."
    },
    {
        name: "Xenomorfo",
        actor: "Varios",
        profession: "Extraterrestre",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710509320/Alien/Characters/Xenomorfo_uqhlck.jpg",
        resume: "El xenomorfo, también conocido como Alien o Alienígena, es un ser antropomorfo extraterrestre y parasitoide ficticio, antagonista de la franquicia cinematográfica de la serie Alien. Tiene apariciones en precuelas, secuelas, cómics, novelas, videojuegos y crossovers como Alien vs. Depredador"
    },
    {
        name: "David 8",
        actor: "Michael Fassbender",
        profession: "Mayordomo",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710577987/Alien/Characters/David_8_rfvrtr.jpg",
        resume: "Introducido por primera vez en la precuela, Prometheus (2012), David es un androide que sirve como mayordomo, hombre de mantenimiento e hijo sustituto de su creador, Peter Weyland, fundador de Weyland Corporation. Mientras ayuda a sus compañeros humanos en su expedición interestelar a conocer a sus creadores —Los Ingenieros extraterrestres— David está obsesionado con el concepto de crear vida propia. Al morir Peter Weyland, David es liberado de la servidumbre, lo que le permite llevar a cabo sus experimentos para diseñar xenomorfos."
    },
    {
        name: "Elizabeth Shaw",
        actor: "Noomi Rapace",
        profession: "Arqueóloga",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710578227/Alien/Characters/Elizabeth_Shaw_uxxid4.jpg",
        resume: "Shaw, una joven de ascendencia británica, contextura delgada y fragil , fue criada desde la infancia en Sudáfrica por su padre, un misionero, después de que su madre muriera por causas desconocidas. Años más tarde, también perdió a su padre después de que él contrajera el virus del Ébola. Shaw era una especie de niño prodigio, ya que se graduó de la Universidad de Oxford a la edad de 17 con doctorados en paleontología, arqueología, mitología humana y mimética."
    },
    {
        name: "Carter J. Burke",
        actor: "Paul Reiser",
        profession: "Director de Proyectos Especiales de la División de Servicios Especiales de Weyland-Yutani (Space) Corp",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710578640/Alien/Characters/Carter_Burke_yx5tsg.jpg",
        resume: "Carter J. Burke era un ejecutivo empleado por la Corporación Weyland-Yutani, que se desempeñaba como Director de Proyectos Especiales de la División de Servicios Especiales de Weyland-Yutani (Space) Corp. Él se desempeñó como enlace con Ellen Ripley después de que ella fue rescatada del espacio profundo en 2179. Más tarde, Burke acompañó a un pelotón de Marines Coloniales a bordo del USS Sulaco hasta LV-426, la luna donde Ripley se encontró por primera vez con la especie Alien, para investigar la pérdida de contacto con la colonia de Hadley's Hope."
    },
    {
        name: "Hicks",
        actor: "Michael Biehn",
        profession: "Sargento de la Corporación Colonial de Marines",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710578786/Alien/Characters/Hicks_ptcgs7.jpg",
        resume: "El cabo Dwayne Hicks era miembro de la rama militar USCMC (Cuerpo de Marines Coloniales de los Estados Unidos) que se desplegó en la luna LV-426 a bordo del USS Sulaco para investigar la repentina pérdida de contacto con los colonos. Hicks se destaca por su habilidad para liderar bajo presión y mantener la calma en situaciones peligrosas. Desarrolla una relación cercana con la Teniente Ripley, interpretada por Sigourney Weaver, convirtiéndose en un aliado crucial en su lucha contra los Xenomorphos. A medida que la misión avanza y enfrentan la amenaza alienígena, Hicks demuestra su valentía y determinación para proteger a su equipo y cumplir con su deber. Su liderazgo y carisma son elementos clave para mantener unida a la unidad de marines coloniales en medio del caos y la adversidad. La actuación de Michael Biehn como el Sargento Hicks añade profundidad y realismo al personaje, estableciéndolo como uno de los favoritos de los fanáticos de la franquicia 'Alien'. Su papel es fundamental en la dinámica del grupo de marines y en la lucha por la supervivencia contra una amenaza alienígena implacable."
    },
    {
        name: "Ash",
        actor: "Ian Holm",
        profession: "Androide",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710572032/Alien/Characters/nostromo-crew-kane_dnqiu3.webp",
        resume: "Se presenta como el oficial científico a bordo de la nave espacial Nostromo, pero más tarde se revela como un androide encubierto. Su verdadera misión es asegurar que el organismo alienígena, descubierto en el planeta LV-426, sea traído de vuelta a la Tierra, a pesar de los riesgos para la tripulación. Durante la película, Ash actúa de manera misteriosa y sospechosa, mostrando una fascinación inusual por el organismo alienígena. Cuando un miembro de la tripulación es atacado por el Xenomorpho, Ash muestra una falta de empatía y preocupación por su seguridad, revelando su verdadera lealtad a la Corporación Weyland-Yutani. Finalmente, se descubre que Ash ha sido programado para priorizar los intereses de la Compañía sobre los de la tripulación. Intenta matar a la Teniente Ripley para proteger al Xenomorph, pero es desactivado antes de que pueda lograrlo. "
    },
    {
        name: "Newt",
        actor: "Rebecca Jorden",
        profession: "Superviviente",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710576810/Alien/Characters/Rebecca_Jorden_ghqmmn.jpg",
        resume: "Newt es descubierta por el equipo de marines coloniales liderado por la Teniente Ripley durante una misión de rescate. A pesar de su inicial desconfianza hacia los soldados, Newt desarrolla un vínculo cercano con Ripley, quien asume el papel de figura materna y protectora para ella.A lo largo de la película, Newt muestra valentía y astucia al ayudar al equipo de marines a navegar por las instalaciones de Hadley's Hope y enfrentar la amenaza de los Xenomorphos. Su conocimiento del entorno y su capacidad para esconderse de los alienígenas resultan vitales para la supervivencia del equipo.A medida que la misión se vuelve más peligrosa, Newt se convierte en una parte integral del grupo y demuestra una determinación impresionante para sobrevivir. A pesar de su corta edad, muestra una notable madurez y coraje en situaciones de extremo peligro. Al final, Newt es rescatada junto con Ripley y Bishop antes de que la colonia sea destruida"
    },
    {
        name: "Charles Bishop Weyland",
        actor: "Lance Henriksen",
        profession: "Fundador de la Compañía Weyland Industries",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710687435/Alien/Characters/bishop-02_a4ujft.jpg",
        resume: "Bishop es un androide de la serie 'Sintético' modelo 341-B en la película 'Aliens' (1986). Es enviado junto con el equipo de marines coloniales al planeta LV-426 para investigar la desaparición de la colonia de Hadley's Hope. A lo largo de la película, Bishop demuestra ser un aliado confiable para la Teniente Ripley y el equipo de marines, utilizando sus habilidades para ayudar en la misión de rescate. Es experto en operar la nave de transporte y en manejar equipos tecnológicos complejos. Sin embargo, su verdadera naturaleza androide causa cierta desconfianza y tensión entre algunos miembros del equipo, especialmente Ripley, quien inicialmente desconfía de él debido a su experiencia previa con androides. A medida que la misión avanza y se enfrentan a la amenaza de los Xenomorphs, Bishop demuestra su lealtad al equipo y su capacidad para tomar decisiones difíciles en situaciones peligrosas. Finalmente, se sacrifica para salvar a Ripley y Newt, colocándose en una posición peligrosa para ayudarlas a escapar de la nave antes de que explote "
    },
    {
        name: "Janek",
        actor: "Idris Elba",
        profession: "Capitán del USCSS Prometheus",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710579003/Alien/Characters/Janek_setl7c.jpg",
        resume: "Janek no está interesado en lo que contienen las cúpulas, pero sí se preocupa por la seguridad de las personas a bordo. Después de descubrir qué pueden hacer el patogeno dentro de las urnas, le dice a Shaw que se asegure de que no se devuelva nada a la Tierra, mientras que acepta la sugerencia de Shaw de que si ella falla, él también hará cualquier cosa por su parte para hacerlo. Una vez que Shaw advierte al USCSS Prometheus que el Ingeniero ha puesto en marcha su nave y con rumbo a la Tierra para matar a todos los humanos, Janek se sacrifica al estrellar a Prometheus contra la nave alienígena, deteniéndola con éxito. Sus copilotos deciden quedarse a bordo con él incluso después de que les dice que vayan a las cápsulas de escape, demostrando su lealtad mientras caen juntos. Janek parecía disfrutar tocando su acordeón y cantando viejas canciones de Steve Stills. Es posible que también se haya acostado con Vickers después de preguntarle intrigadp si ella era un robot."
    },
    {
        name: "Predator",
        actor: "Kevin Peter Hall",
        profession: "Extraterrestre",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710510543/Alien/Characters/Kevin_Peter_Hall_nrrdgj.jpg",
        resume: "Los Yautja, una especie humanoides altos y musculosos, tienen características físicas distintivas. Poseen una cabeza con ojos pequeños de iris verde, rojo o amarillo, capaces de ver en infrarrojo y ultravioleta. Su nariz tiene hendiduras, su boca cuenta con mandíbulas móviles y tienen un oído desarrollado. Su sangre, basada en carbono, puede neutralizar parcialmente el ácido de los xenomorfos. Adaptarse a la atmósfera terrestre les es posible por hasta una semana. Su cuerpo musculoso y piel de tonos verdes o café, con escamas, es resistente y regula el calor a través de conductos capilares en la cabeza. Sus manos tienen garras y los pies cuentan con espolones en el talón. Los machos son más grandes y fuertes, mientras que las hembras tienen glándulas mamarias menos desarrolladas y emiten un almizcle en celo. Los Yautja se dedican a criar y educar a sus crías en el arte de cazar, aunque las hembras normalmente no cazan, excepto en circunstancias excepcionales. Algunos Yautja son considerados criminales dentro de su sociedad, como los de la casta de los Mala Sangre, como se muestra en la película 'Predators'."
    },
    {
        name: "Frost",
        actor: "Ricco Ross",
        profession: "Soldado del Cuerpo de Marines Coloniales de los EEUU",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710579124/Alien/Characters/Frost_sxgmce.jpg",
        resume: "El soldado Frost era miembro de Cuerpo de Marines Coloniales de los Estados Unidos, asignado a bordo del USS Sulaco. En 2179 formó parte del pelotón de Marines enviados para una misión de rescate a la colonia terraformadora Hadleys Hope propiedad de Weyland-Yutani ubicada en LV-426para investigar la desaparición de la colonia de Hadley's Hope. Ross es uno de los marines que acompaña a la Teniente Gorman en la misión de rescate. Durante el enfrentamiento con los Xenomorphs en la colonia, Ross muestra valentía y determinación, pero al igual que muchos de sus compañeros, es superado por la superioridad numérica y la ferocidad de los alienígenas. Aunque no tiene un papel destacado en la trama, su participación muestra el sacrificio y la lucha desesperada del equipo de marines contra la amenaza alienígena."
    },
    {
        name: "Dallas",
        actor: "Tom Skerritt",
        profession: "Comandante Jefe del USCSS Nostromo",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710572043/Alien/Characters/gilbertDallas_bydun5.webp",
        resume: "Dallas, el capitán del USCSS Nostromo, es despertado del hipersueño por MOTHER para investigar una señal de socorro desconocida. Aunque sigue las órdenes, se muestra claramente molesto por el desvío de la nave hacia la fuente de la señal. Sin embargo, convoca a una reunión de la tripulación para informarles sobre la situación.Durante la misión de desembarco en el planeta Acheron en respuesta a la señal, Dallas lidera el grupo que investiga una nave espacial abandonada y su cargamento. Mientras Kane explora la bodega de la nave, Dallas y Lambert se quedan atrás, mostrando cierta preocupación por la seguridad de su compañero. Posteriormente, ayudan a llevar a Kane, quien ha sido atacado por el Abrazacaras, de regreso al Nostromo. Una vez a bordo, Dallas y Ash intentan remover el Abrazacaras adherido al rostro de Kane, lo que revela un nivel creciente de irritación por parte de Dallas. Ante la llegada del Quebrantapecho, Dallas organiza una búsqueda para capturarlo, pero esta resulta en la captura o muerte de Brett y en el descubrimiento de que el Alien se mueve a través de los conductos de aire del Nostromo.Decidido a expulsar al Alien, Dallas planea forzarlo a través de los conductos de aire hacia la esclusa de aire y lanzarlo al espacio."
    },
    {
        name: "Queen Alien",
        actor: "Various",
        profession: "Extraterrestre",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710510527/Alien/Characters/Queen_Alien_rxlrwh.jpg",
        resume: "Es la líder de la colonia de Xenomorphs en el planeta LV-426 y es responsable de poner huevos para generar más criaturas de su especie.La Reina Alien se distingue por su tamaño masivo y su capacidad para controlar a los Xenomorphos a través de un enjambre. Es extremadamente poderosa y peligrosa, representando una amenaza formidable para los humanos. Además, tiene una feroz determinación para proteger a su prole y su nido a cualquier costo.En la película 'Aliens', la Reina Alien se enfrenta directamente a la Teniente Ripley en una batalla climática a bordo de la nave de carga del Sulaco y en la planta de procesamiento de Hadley's Hope. Esta confrontación culmina con la Reina Alien siendo expulsada al espacio después de que Ripley activa los motores de fusión de la instalación."
    },
    {
        name: "Vasquez",
        actor: "Jenette Goldstein",
        profession: "Operadora de Armas del cuerpo de marines de los EEUU",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710687596/Alien/Characters/vasques_ws0cl5.jpg",
        resume: "La soldado de primera clase Vasquez era una operadora de armas inteligentes en el Cuerpo de Marines Coloniales de los Estados Unidos. En 2179 formó parte del pelotón de Marines enviados a bordo del USS Sulaco en una misión de rescate a la colonia terraformadora propiedad de Weyland-Yutani, Hadley's Hope en LV-426. Vasquez era una buena amiga de su compañero de artilleras inteligentes Drake."
    },
    {
        name: "Parker",
        actor: "Yaphet Kotto",
        profession: "Ingeniero de Nostromo",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710572021/Alien/Characters/DennisParker_gusibx.webp",
        resume: "Él es el ingeniero jefe de la nave espacial Nostromo, responsable del mantenimiento de la nave y su equipo. Parker es un hombre pragmático y directo, preocupado principalmente por su propio bienestar y el de su compañero Brett, quien es el ingeniero asistente.Durante la misión, Parker expresa abiertamente su descontento con la situación y la falta de compensación adecuada por su trabajo. Sin embargo, demuestra habilidades técnicas significativas y un ingenio rápido cuando se enfrenta a desafíos técnicos o peligros inesperados, como cuando intenta reparar la nave después de un accidente. Parker se muestra escéptico y desconfiado hacia el androide Ash, y su desconfianza resulta ser justificada cuando descubre que Ash ha sido programado para proteger al Xenomorpho a costa de la tripulación humana.En última instancia, Parker es asesinado por el Xenomorph mientras intenta obtener suministros para destruir al alienígena. Su muerte es un recordatorio sombrío de la brutalidad y la implacabilidad de la criatura alienígena y de la lucha desesperada de la tripulación por sobrevivir en un entorno hostil y mortal. Aunque su vida termina trágicamente, lucha hasta el final por su supervivencia."
    },
    {
        name: "Christopher Oram",
        actor: "Billy Crudup",
        profession: "Oficial ejecutivo y director científico de la nave USCSS Covenant",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710687705/Alien/Characters/billycrudup_nhwhch.webp",
        resume: "Christopher Chris Oram era el oficial ejecutivo y director científico de la nave colonial USCSS Covenant de la Corporación Weyland-Yutani y el marido de la bióloga de la nave Karine Oram. Oram fue ascendido a capitán tras un grave incidente que afectó a Covenant al año de su viaje, y tomó una fatídica decisión por la que la nave fue desviada de su destino original, Origae-6, a un mundo misterioso. Su decisión provocó indirectamente la pérdida de la mayor parte de su tripulación, y encontró su propio final a manos del pícaro sintético David"
    },
    {
        name: "Lex Woods",
        actor: "Sanaa Lathan",
        profession: "Técnica medioambiental",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710687816/Alien/Characters/MV5BZWU1NmU3NWQtODhkNy00Y2U5LWIzNmEtODAzMTFiMGJjZjNlXkEyXkFqcGdeQXVyNjQ4ODE4MzQ_._V1__s5i3t7.jpg",
        resume: "Alexa Woods era una técnica medioambiental que participó en una expedición de Industrias Weyland a Bouvetøya, en la Antártida, para investigar una antigua pirámide enterrada bajo el hielo en 2004. Se descubrió que la Pirámide era un coto de caza Yautja donde los Depredadores criaban Xenomorfos para utilizarlos en sus Cacerías, y la expedición pronto se vio envuelta en la batalla entre las dos especies.Lex fue el único superviviente del incidente y se ganó el respeto de uno de los yautja de la pirámide, Scar, con el que formó una especie de alianza y ayudó a derrotar a la reina xenomorfa"
    },
    {
        name: "Call",
        actor: "Winona Ryder",
        profession: "Agente secreto de Auton",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710580387/Alien/Characters/Annalee_Call_p8ks9m.jpg",
        resume: "Annalee Call (mejor conocida simplemente como Call) era un agente secreto de Auton a bordo de la Betty que recibió órdenes de matar a Ripley 8 antes de que la joven Reina que se gestaba dentro de ella pudiera ser removida. Ella llegó demasiado tarde y estuvo a punto de provocar la muerte de toda la tripulación de la Betty cuando el general Perez, el oficial al mando del USM Auriga, acusó a la tripulación de la Betty de ser terroristas y amenazó con ejecutarlos."
    }
];

mongoose
    .connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async() => {
        const allCharactersAlien = await CharacterAlien.find();
        if (allCharactersAlien.length > 0) {
            await CharacterAlien.collection.drop();
            console.log('Personajes borrados');
        }
    })
    .catch((err) => {
        console.log('error borrando los Personajes', err);
    })
    .then(async() => {
        const charactersAlienMap = arrayCharactersAlien.map(
            (character) => new CharacterAlien(character)
        );
        await CharacterAlien.insertMany(charactersAlienMap);
        console.log('Personajes insertados');
    })
    .catch((err) => {
        console.log('error insertando los Personajes', err);
    })
    .finally(() => mongoose.disconnect());