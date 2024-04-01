const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const CharacterJurassicPark = require('../../api/models/models.JurassicPark/characters.JurassicPark.model');

const arrayCharactersJurassicPark = [
    {
        name: "Paul kirby",
        actor: "William H. Macy",
        profession: "Empresario",
        film: "Jurassic Park III",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710520305/Jurassic%20Park/Characters/PAUL_KIRBY_-_copia_zeiqxe.webp",
        resume: "Paul Kirby, esposo de Amanda Kirby, fue el empresario que engañó al Dr. Alan Grant para que regresara a Isla Sorna en busca de su hijo, Eric Kirby, quien desapareció en la isla dos meses antes. Paul mintió al afirmar ser un millonario empresario que era dueño de la inexistente Kirby Enterprises para convencer a Alan Grant de unirse a ellos. Más tarde admite que solo era dueño de un pequeño negocio llamado Kirby Paint and Tile Plus en el Centro Comercial West Gate en Enid, Oklahoma."
    },
    {
        name: "Amanda kirby",
        actor: "Téa Leoni",
        profession: "Ama de casa",
        film: "Jurassic Park III",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710519509/Jurassic%20Park/Characters/AMANDA_KIRBY_-_copia_ydssrg.webp",
        resume: "Amanda Kirby es la esposa de Paul Kirby y ex novia de Ben Hildebrand. Junto con Paul, engañó a Alan Grant y Billy Brennan para viajar a Isla Sorna con el fin de encontrar a su hijo pequeño, Eric Kirby, quien desapareció en la isla dos meses antes junto con Ben.Amanda vivía en Enid, Oklahoma, y estaba casada con Paul Kirby. Tuvieron un hijo, Eric, pero con el tiempo se distanciaron, discutiendo constantemente y siendo incapaces de ponerse de acuerdo en nada. Amanda finalmente se divorció de Paul poco más de un año antes de los eventos de Jurassic Park III. Después de eso, comenzó a salir con Ben Hildebrand. Su personaje favorito de Los Simpson es Homer, y disfruta abrazar, los donuts y su atracción para niños favorita es 'Stuart Little'."
    },
    {
        name: "Eric kirby",
        actor: "Trevor Morgan",
        profession: "Estudiante",
        film: "Jurassic Park III",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710519965/Jurassic%20Park/Characters/ERIC_KIRBY_-_copia_atbt9y.webp",
        resume: "Eric Kirby es un entusiasta de los dinosaurios de 12 años que queda varado en la infame Isla Sorna después de un accidente de parasailing. Tiene que sobrevivir, completamente solo, en la isla durante ocho semanas, utilizando solo su inteligencia y conocimientos como armas.Eric había leído dos libros del Dr. Alan Grant, uno antes de Isla Nublar y otro después del incidente, y afirmó que le gustaba más el primero porque mostraba que Grant disfrutaba de los dinosaurios. También había leído el libro del Dr. Ian Malcolm, pero lo encontró un poco 'sermoneador' y 'egocéntrico', hablando demasiado sobre 'caos'.Dado que sus padres, Paul y Amanda Kirby, no pudieron obtener ayuda ni del gobierno de EE. UU. ni del de Costa Rica para rescatarlo, recurrieron a invitar al Dr. Grant con falsas pretensiones, comenzando así los eventos en la película.                                                                                                                                                                                                                                                                 Aunque al principio, Grant duda de que Eric todavía esté vivo, pronto descubre que el niño ha logrado sobrevivir. Eric salva a Grant de una manada de Velociraptores y lo lleva a su campamento en un camión cisterna volcado, cuyo tanque proporciona refugio seguro y sólido tanto de los elementos como de los depredadores. Siendo un amante de los dinosaurios y habiendo leído los libros de Grant, Eric reconoce de inmediato al paleontólogo y los dos comienzan a formar una relación amistosa, especialmente después de que Grant se entera de que Eric tampoco era fanático del libro de Malcolm.Más tarde, Eric se reúne con sus padres y es salvado por Billy Brennan de una bandada de Pteranodones asesinos. Al final, deja la isla con sus padres; aunque no se menciona explícitamente, se insinúa que Paul y Amanda se reconcilian y vuelven a casarse. De hecho, en una escena eliminada de Jurassic Park III, los dos se besan y deciden volver juntos por Eric, quien los observa con deleite.."
    },
    {
        name: "Alan Grant",
        actor: "Sam Neil",
        profession: "Paleontologo",
        film: "Jurassic Park, Jurassic Park III, Jurassic World: Dominion",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710519507/Jurassic%20Park/Characters/ALAN_GRANT_-_copia_rnn1pn.jpg",
        resume: "El Dr. Alan Grant es un paleontólogo especializado en la evolución y biología de Dinosaurios Deinonicosaurianos. Es también conocido por sus aclamados libros, Dinosaur Detectives y The Lost World of the Dinosaurs, así como por su participación con International Genetic Technologies en los incidentes de 1993 y 2001 en las islas costarricenses de Nublar y Sorna respectivamente.Es uno de los personajes principales de la franquicia Jurassic Park, tanto en la novela original del autor Michael Crichton como en la saga cinematográfica, donde es interpretado por el actor Sam Neill, apareciendo en las cintas Jurassic Park, Jurassic Park III y Jurassic World: Dominion, siendo el protagonista principal en las dos primeras                                                                                                                                                                                                                                                                   Se interesó por los dinosaurios a una edad muy temprana. Durante su primera infancia en la década de 1960, se descubrieron y nombraron muchas especies fósiles nuevas; en la década de 1970, se hicieron aún más descubrimientos en lugares como África y América del Sur, y el Dr. Jack Horner descubrió los primeros huevos de dinosaurio conocidos en el hemisferio occidental. Cuando era niño, el dinosaurio favorito de Grant era el Triceratops, uno de los ceratópsidos más conocidos de América del Norte.Grant obtuvo una educación superior en el campo paleontológico, aunque actualmente se desconoce la institución a la que asistió; puede haber sido la Universidad Estatal de Montana en Bozeman , que está afiliada al Museo de las Montañas Rocosas con el que Grant también está asociado. Si Grant asistió a la MSU a fines de la década de 1980, cuando tendría veintitantos, probablemente habría estudiado junto con el famoso paleontólogo Jack Horner. Grant exhibe muchas características similares a las de Horner (incluido un aparente sentido de rivalidad con el Dr. Robert Bakker), lo que sugiere que respeta mucho a Horner como una autoridad en su campo. Grant obtuvo un doctorado en la década de 1990, especializándose en paleobiología Deinonicosauriana. Se adhirió al sistema de clasificación propuesto por Gregory S. Paul en su libro Predatory Dinosaurs of the World de 1988, en el que muchos Deinonicosaurios Dromeosáuridos se agruparon en el género Velociraptor."
    },
    {
        name: "Ellie Satter",
        actor: "Laura Dern",
        profession: "Paleobotanica",
        film: "Jurassic Park, Jurassic Park III, Jurassic World: Dominion",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710519963/Jurassic%20Park/Characters/ELLIE_SHATTER_-_copia_jzmqgs.jpg",
        resume: "La Dra. Ellen 'Ellie' Degler (apellido de soltera: Sattler) es una paleo-botánica y autora de ciencia de no ficción. Es mejor conocida por su trabajo junto al paleontólogo Alan Grant, y hasta cierto punto por ser testigo del incidente de Isla Nublar en 1993, del que ha intentado distanciarse.En 2001, estaba casada con el empleado del Departamento de Estado de los EE. UU. Mark Degler y vivía en Washington, DC con su esposo y sus dos hijos.En la década de 1990, Sattler había obtenido un doctorado en ciencias de una institución actualmente no divulgada. Hizo una carrera en paleo-botánica, el estudio de plantas antiguas a través de sus restos (como fósiles de polen, impresiones de hojas y madera petrificada). Su experiencia incluía especies de plantas existentes, así como taxones fósiles, y además de los estudios paleo-botánicos, a veces estuvo involucrada en la investigación de otros aspectos de los ecosistemas prehistóricos.                                                                                                                     Hacia el final de sus veintes, se había familiarizado con el paleontólogo Alan Grant, con quien se involucró sentimentalmente. Se sabía que trabajaba con Grant en excavaciones paleontológicas, incluido un sitio productivo en las tierras baldías cerca de Snakewater, Montana, que desenterró restos excepcionales de Deinonicosaurios durante el verano de 1993. Esta expedición fue financiada por el CEO de International Genetic Technologies, John Hammond.Parece que Ellie pudo haber estado interesada en tener hijos en el futuro, mientras que el Dr. Grant no compartía este interés y, a veces, tenía dificultades para interactuar con los niños. En algún momento tuvieron un guacamayo llamado Jack, al que le enseñaron a hablar.."
    },
    {
        name: "Billie Brennan",
        actor: "Alessandro Nivola",
        profession: "Paleontologo",
        film: "Jurassic Park III",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710528256/Jurassic%20Park/Characters/BILY_BRENAN_d3ngko.webp",
        resume: "Billy Brennan era un joven profesor asociado de paleontología y el administrador del sitio  del nuevo sitio de excavación del DR. Alan Grant, de quienfue estudiante y becario, en Fort Peck Lake. Estuvo involucrado en el incidente de Isla Sorna en 2001, siendo uno de los sobrevivientes de este.A los 25, era profesor asociado de paleontología y trabajaba como administrador del sitio de excavación de su colega, el Dr. Alan Grant.                                                                                                                                                                                                                                                                 Durante los acontecimientos de 2001, se encontraba trabajando en la excavación de un ejemplar de Deinonychus en Montana junto con otros paleontólogos, entre ellos la practicante Cheryl Logan. El Dr. Grant vuelve de dar una conferencia sobre las capacidades de comunicacion del Velociraptor. Este le informa a Billy que deben prepararse para suspender todo en breve porque ya no tenían fondos, Billy le dice que en menos tiempo porque rento equipo de impresoras 3D para recrear la camara de resonancia de los raptores. Desafortunadamente ya era tarde pues ya nadie estaba interesado en la paleontologia convencional si no en estudiar a los dinosaurios clonados de Ingen.Poco despues es citado junto al Dr. Grant por el matrimonio de Paul Kirby y su esposa Amanda Kirby. Es convencido junto a Alan de acompañar a los aventureros millonarios, que les ofrecen un cheque por el precio que ellos decidieran para escoltarlos a hacer un vuelo turístico sobre la Isla Sorna."
    },
    {
        name: "Ellie Satter",
        actor: "Michael Jeter",
        profession: "Facilitador",
        film: "Jurassic Park III",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710528372/Jurassic%20Park/Characters/UDESKY_ggodww.webp",
        resume: "Udesky es uno de los mercenarios que contrato el matrimonio de Paul y Amanda Kirby. Aparece probando las armas para la expedicion de busqueda y rescate de Eric Kirby y Ben Hildebrand en Isla Sorna en 2001. Luego de aterrizar el y los demas de su grupo se topan con un Spinosaurus, el animal devora a Cooper y hace estrellar el avion en el que se disponian a escapar, este se estrella en la copa de un arbol. El Spinosaurus tira el avion desde la copa al suelo, no sin antes devorar a M.B. Nash, los demas escapan de los restos de la nave, evadiendo al Spinosaurus en una parte densa de la jungla, solo para toparse unos pasos mas adelante con un Sub-adulto ejemplar de Tyrannosaurus rex. Los humanos retroceden y se encuentran con el Spinosaurus nuevamente, ambos colosos chocan en un combate equilibrado que termina ganando el Spinosaurus sin mucho problema.                                                                                                                                                                                                                                                                 Poco despues se destapa la mentira de los Kirbys, ellos no son millonarios, y están buscando a su hijo que se perdio en la isla hace 8 semanas con el novio de Amanda. Alan Grant y Billy Brennan deciden pasar de ellos y se van a buscar algun metodo de escape en la costa. Udesky y los Kirbys deciden acompañarlos, en eso se topan con los restos de Ben, luego llegan al complejo abandonado de Ingen donde se clonaban a los dinosaurios. Ahí son atacados por una especie nueva de Velociraptor no identificada. Estos los persiguen por una llanura llena de Parasaurolophus y Corythosaurus. Udesky es el unico que no logra ponerse a salvo mientras los demás suben a los árboles de la jungla, es sorprendido y rodeado por los raptors, en una escena eliminada vemos que Udesky lucha con ellos con valentia con una rama de arbol. Pero estos esfuerzos son en vano y es derribado, se escucha su grito de dolor, luego vemos como uno de los raptores le clava su garra letal del pie en la espalda a la altura de la columna vertebral, dejándolo parapléjico y mortalmente herido. Amanda nota desde un árbol que el pobre hombre aun se mueve, pero Billy insiste en que ya es tarde para él, ella se niega a abandonarlo y en un intento de bajar del árbol para ayudarlo se resbala y cae quedando colgada de una rama. Esto hace salir de su escondite a los raptores que esperaban que alguien fuera en ayuda del pobre Udesky. Paul ayuda a Amanda a incorporarse estando cerca de ser mordida en la cara por la pareja de raptores, Billy se sorprende de como los raptores se las ingeniaron para poner una trampa tan cruel. Luego de esto los raptores alpha llaman a la pareja desde la lejanía y uno de éstos antes de retirarse toma a Udesky por la cabeza con su mandíbula y rápidamente le rompe el cuello, terminando así con su sufrimiento. Aunque es probable que Udesky ya haya fallecido poco antes debido a la gravedad de sus heridas, esto se deduce por la falta de gritos agónicos y expresión pálida poco antes de ser ejecutado."
    },
    {
        name: "Ian Malcom",
        actor: "Jeff Globurn",
        profession: "Matematico",
        film: "Jurassic Park, Jurassic Park: El mundo perdido, Jurassic World: El reino caido, Jurassic World: Dominion",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710519979/Jurassic%20Park/Characters/IAN_MALCOM_-_copia_rnvomw.webp",
        resume: "El Dr. Ian Malcolm es un matemático que se especializa en una rama de las matemáticas conocida como la 'Teoría del caos', lo que lo lleva a su autodescripción como un 'caótico'. Es conocido principalmente por su participación altament publicitada en el incidente de Isla Nublar de 1993, siendo la primera persona en hablar abiertamente sobre esos eventos. En menor grado, es conocido por su participación en el incidente de Isla Sorna en 1997 y su libro, Dios Crea a los Dinosaurios, sobre las formas en que la extinción se relaciona con la teoría del caos y otras disciplinas matemáticas. Debido a su participación en la historia de la des-extinción, sus opiniones sobre temas bioéticos son muy respetadas por el público y el gobierno de los Estados Unidos.                                                                                                                                                                                                                                                                    Es uno de los protagonistas principales en la franquicia Jurassic Park que tiene aparición en las novelas del autor Michael Crichton Parque Jurásico y El mundo perdido, respectivamente. En la saga fílmica es interpretado por el actor Jeff Goldblum en las adaptaciones cinematográficas de Jurassic Park y The Lost World: Jurassic Park, (formando parte del elenco principal en ambas películas). Tuvo un cameo en película Jurassic World: Fallen Kingdom y se espera su regreso en la próxima Jurassic World: Dominion.."
    },
    {
        name: "John Hammond",
        actor: "Richard Attenborough",
        profession: "Millionario",
        film: "Jurassic Park",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710519981/Jurassic%20Park/Characters/JOHN_HAMMOND_-_copia_vp3wrn.webp",
        resume: "El Dr. John Parker Hammond, (o John Alfred Hammond) (1913-1997/98), fue un empresario británico fundador, director ejecutivo y presidente de International Genetic Technologies, Inc. y más tarde un activista de los derechos de los animales des-extintos.                                                                                                                                                                                                                                                             Es mejor conocido por planificar y construir parcialmente el revolucionario parque temático Jurassic Park, que finalmente se convirtió en Jurassic World. Hammond supervisó la des-extinción de la primera vida prehistórica, así como los orígenes de la hibridación genética avanzada, y se considera que fue un actor clave en la era genética temprana. Falleció por causas naturales después de haber sido retirado de InGen debido a numerosas demandas, su creciente ecologismo y el fracaso de Jurassic Park.El personaje de Hammond ha tenido participación tanto en la novela original del autor Michael Crichton como en la saga cinematográfica, siendo parte fundamental de la trama en ambas versiones. Fue interpretado en las películas por el actor Sir Richard Attenborough, teniendo aparición en las cintas Jurassic Park y The Lost World: Jurassic Park respectivamente.."
    },
    {
        name: "Robert Mulldoon",
        actor: "Bob Peck",
        profession: "Cazador",
        film: "Jurassic Park",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710519486/Jurassic%20Park/Characters/Robert_Muldoon_29_Profile_-_copia_bpir5j.webpg",
        resume: "Robert Muldoon fue un guardabosques y guardaparques británico de Kenia conocido mundialmente por su experiencia como consultor de vida silvestre. Pasó gran parte de su carrera empleado por el Dr. John Hammond, trabajando para él mucho antes de que Hammond fundara International Genetic Technologies. Muldoon estuvo empleado en el fallido parque temático de des-extinción Jurassic Park, ubicado en la remota Isla Nublar, Costa Rica, hasta su muerte en 1993; murió debido a un ataque animal durante el incidente que azotó la isla ese año.                                                                                                                                                                                                                                                                      Muldoon aparece tanto en el canon literario del autor Michael Crichton como en el canon cinematográfico de la franquicia Jurassic Park. Tiene aparición en la novela original de Parque Jurásico, así como su adaptación cinematográfica homonimia, en la que es interpretado por el fallecido actor Bob Peck, siendo parte escencial de la trama en ambas versiones.."
    },
    {
        name: "Donald Gennaro",
        actor: "Martin Ferrero",
        profession: "Abogado",
        film: "Jurassic Park",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710519520/Jurassic%20Park/Characters/Donald_Gennaro_29_Profile_-_copia_mpucex.webp",
        resume: "Donald Gennaro fue un abogado estadounidense empleado por las Oficinas Legales de Cowan, Swain & Ross, en San Francisco. Participó en la asociación de la firma con International Genetic Technologies, Inc. en las décadas de 1980 y 1990, y fue convocado para representar a los inversores de InGen durante una investigación sobre la seguridad del proyecto Jurassic Park, de InGen, en el verano de 1993.                                                                                                                                                                                                                                                                     Mientras estaba en Isla Nublar para supervisar la investigación, Gennaro se vio involucrado en un incidente de sabotaje que permitió a los animales escapar de sus áreas de recinto designadas; murió a causa de un ataque animal durante el incidente. La muerte de Gennaro resultó en una demanda de su familia que impulsó la crisis financiera de InGen.Gennaro aparece tanto en el canon literario del autor Michael Crichton como en el canon cinematográfico de la franquicia Jurassic Park. Tiene aparición en la novela original de Parque Jurásico, así como su adaptación cinematográfica homonimia, siendo interpretado por el actor Martin Ferrero, aunque ambas representaciones del personaje son extremadamente diferentes en la mayoría de los aspectos.."
    },
    {
        name: "Tim Murphy",
        actor: "Joseph Mazzello",
        profession: "Estudiante",
        film: "Jurassic Park, Jurassic Park: El Mundo Perdido",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710520284/Jurassic%20Park/Characters/JP-TimMurphy_-_copia_lohaxb.webp",
        resume: "Timothy 'Tim' Murphy es un entusiasta de los dinosaurios estadounidense y nieto del fallecido empresario escocés John Hammond. Es mejor conocido por su participación en el incidente de Isla Nublar de 1993, del cual fue uno de los sobrevivientes. Además, él y su hermana mayor, Alexis, estuvieron entre las primeras personas fuera del negocio de la biotecnología en enterarse de que la des-extinción se había llevado a cabo con éxito.                                                                                                                                                                                                                                                                  Tim aparece tanto en el canon literario del autor Michael Crichton como en el canon cinematográfico de la saga Jurassic Park, siendo interpretado por el actor Joseph Mazzello en las cintas Jurassic Park y The Lost World: Jurassic Park respectivamente.Aún así, Tim cuenta con diferencias notables entre ambos canones; siendo en la novela el hermano mayor, y no Lex, y muchas de sus acciones y rasgos son intercambiados."
    },
    {
        name: "Lex Murphy",
        actor: "Ariana Richards",
        profession: "Estudiante",
        film: "Jurassic Park, Jurassic Park: El Mundo Perdido",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710520292/Jurassic%20Park/Characters/Lex1997_-_copia_myttqi.webp",
        resume: "Alexis 'Lex' Murphy es un entusiasta de la programación estadounidense y nieta del fallecido empresario escosés John Hammond. Es mejor conocida por su papel en el incidente de Isla Nublar de 1993, en el que jugó un papel fundamental para permitir que los sobrevivientes escaparan, y por ser, junto con su hermano menor, Timothy, una de las primeras personas fuera de InGen en saber que la compañía había llevado a cabo la des-extinción.                                                                                                                                                                                                                                                           Lex aparece tanto en el canon literario del autor Michael Crichton como en la saga cinematográfico de la franquicia Jurassic Park, siendo interpretada por la actriz Ariana Richards en las cintas Jurassic Park y The Lost World: Jurassic Park respectivamente.Aún así, Lex cuenta con diferencias notables entre ambos canones; siendo en la novela la hermana menor, y no Tim, y muchas de sus acciones y rasgos son intercambiados."
    },
    {
        name: "Ray Arnold",
        actor: "Samuel L Jackson",
        profession: "Cientifico",
        film: "Jurassic Park",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710529206/Jurassic%20Park/Characters/Mrarnold.JPG_qwubku.webp",
        resume: "John Raymond 'Ray' Arnold fue un ingeniero de sistemas afroamericano que fue contratado por International Genetic Technologies, Inc. a fines de la década de 1980 y principios de la de 1990 para la construcción y operación del parque temático de des-extinción Jurassic Park, en Isla Nublar, Costa Rica. Se desconoce la mayor parte de su carrera anterior (aunque algunos aspectos se pueden suponer a partir de su homólogo del canon literario).                                                                                                                                                                                                                                                              Arnold se encontraba en Isla Nublar en el momento de los eventos de 1993, que detuvieron el proyecto Jurassic Park, siendo asesinado en un ataque animal durante el segundo día del incidente. Fue una de las varias muertes reportadas durante este hecho de varios días; una demanda de su familia, una de muchas, contribuyó a la crisis financiera de InGen de la década de 1990. Arnold, en particular, es recordado por haber sido una de las fuerzas impulsoras más fuertes para mantener el desastre bajo control, y su muerte ocurrió durante un esfuerzo por restaurar los sistemas del parque a un estado de funcionalidad.Arnold aparece tanto en el canon literario del autor Michael Crichton como en el canon cinematográfico de la franquicia Jurassic Park. Tiene aparición en la novela original de Parque Jurásico, así como su adaptación cinematográfica homonimia, en la que es interpretado por el actor Samuel L. Jackson, siendo parte fundamental de la trama en ambas versiones.."
    },
    {
        name: "Henry Wu",
        actor: "B. D. Wong",
        profession: "Genetista",
        film: "Jurassic Park, Jurassic World, Jurassic World: Fallen Kindom, Jurassic World: Dominion",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710519976/Jurassic%20Park/Characters/HENRY_WU_-_copia_b4qpk3.webp",
        resume: "Henry Wu (anteriormente Dr. Henry Wu) es un genetista evolutivo chino-estadounidense conocido por su innovadora investigación en ingeniería genética. Fue famoso por trabajar en International Genetic Technologies, Inc. desde 1986 hasta finales de 2015, tiempo durante el cual trabajó tanto en el fallido parque temático de des-extinción Jurassic Park como en el exitoso Jurassic World. También es famoso (y controvertido) por su investigación sobre la hibridogénesis transgénica, un campo de la ingeniería genética en el que Wu y su personal de InGen fueron pioneros en gran medida.                                                                                                                                                                                                                                                                  Su trabajo en esta área fue un factor importante en el éxito de la des-extinción a finales de la década de 1980, demostrando que el daño a las moléculas de ADN antiguo debido a la descomposición radioactiva podía repararse mediante el empalme con genes donantes. Sin embargo, estos animales hibridados a veces mostraban rasgos biológicos inesperados que no estaban presentes en sus formas ancestrales. Esto llevó a Wu a investigar aplicaciones prácticas de este resultado; en 1997, él y su personal lograron crear una especie de planta con flores diseñada artificialmente, Karacosis wutensis. Para 2015, su trabajo habría producido una gran variedad de géneros artificiales, incluido Indominus rex, desarrollado en 2012. El trabajo de Wu sobre la hibridación siempre se ha considerado controvertido y resultó en una investigación legal por parte del Congreso de EE. UU. Se convirtió en un fugitivo de la ley a partir de 2015, aunque continuó su investigación mientras estaba oculto."
    },
    {
        name: "Dennis Nedri",
        actor: "Laura Dern",
        profession: "Informatico",
        film: "Jurassic Park",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710520287/Jurassic%20Park/Characters/DENNIS_NEDRY_-_copia_k2oqwk.webp",
        resume: "Dennis Theodore Nedry fue un programador informático estadounidense de Cambridge empleado por International Genetic Technologies, Inc. durante los años ochenta y principios de los noventa. Se le considera en gran parte responsable del incidente ocurrido en Isla Nublar entre el 11 y el 13 de junio de 1993, que provocó la muerte de varios de sus compañeros de trabajo y personal visitante. El propio Nedry murió debido a un ataque animal en la noche del 11 de junio, poco después de su acto de sabotaje que inició el incidente.                                                                                                                                                                                                                                                                Nedry aparece tanto en el canon literario del autor Michael Crichton como en el canon cinematográfico de la franquicia Jurassic Park. Tiene aparición en la novela original de Parque Jurásico, así como su adaptación cinematográfica homonimia, en la que es interpretado por el actor Wayne Knight, siendo parte escencial de la trama en ambas versiones."
    },
    {
        name: "Peter Ludlow",
        actor: "Arliss Howard",
        profession: "Empresario (sobrino de Hammond)",
        film: "Jurassic Park: El Mundo perdido",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710529465/Jurassic%20Park/Characters/PETER_LUDLOW_iqlwuv.webpg",
        resume: "Peter Ludlow fue un empresario británico conocido por su carrera en International Genetic Technologies, Inc. , una empresa fundada por su tío materno John Hammond. Se desempeñó como CEO de la compañía desde principios de 1997 hasta su muerte en la madrugada del 23 de febrero de ese año.                                                                                                                                                                                                                                                                    La muerte de Ludlow fue el resultado final del incidente de San Diego de 1997, del cual el propio Ludlow fue el principal responsable. Murió debido a un ataque animal mientras intentaba recuperar el control de dichos animales para la prometedora atracción Jurassic Park: San Diego.Ludlow es interpretado por el actor Arliss Howard en la película The Lost World: Jurassic Park, siendo el principal antagonista humano en dicha cinta."
    },
    {
        name: "Roland Tembo",
        actor: "Pete Postlethwaite",
        profession: "Cazador",
        film: "Jurassic Park: El Mundo perdido",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710519491/Jurassic%20Park/Characters/Rolandtembo_-_copia_ywng8b.webp",
        resume: "Roland Tembo es un cazador experimentado de Mombaza, Kenya. Es mayormente reconocido por ser contratado por Peter Ludlow, CEO de International Genetic Technologies, para dirigir su expedición de captura de los dinosaurios de InGen en Isla Sorna durante los eventos del incidente en dicha isla en 1997.Considerado como el mejor de los mejores en su campo, Roland fue elegido por Peter Ludlow para ser el líder del equipo de su expedición a Isla Sorna para capturar dinosaurios, aunque originalmente rechazó la invitación. Aburrido de la caza porque siempre tenía demasiado éxito, creía que no existía ningún lugar en la Tierra que pudiera plantearle un desafío."
    },
    {
        name: "Sarah Harding",
        actor: "Julianne Moore",
        profession: "Paleobotanica",
        film: "Jurassic Park: el Mundo Perdido",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710529745/Jurassic%20Park/Characters/sarah_harding_zyj2mh.webp",
        resume: "La Dra. Sarah Harding (29 de junio de 1965) es una zoóloga y paleobióloga estadounidense especializada en el comportamiento de animales carnívoros (tanto extintos como actuales). Es mejor conocida por su trabajo en el campo de la paleontología del comportamiento, un subconjunto de estudios de comportamiento animal que utiliza evidencia paleontológica para teorizar cómo se comportaron los animales extintos. La Dra. Harding también es conocida por su participación en el incidente de San Diego en 1997, que dio como resultado que la des-extinción se revelara al público como un hecho científico.                                                                                                                          Sarah aparece tanto en el canon literario del autor Michael Crichton como en el canon cinematográfico de la franquicia Jurassic Park. Hace aparición en la novela The Lost World y en su adaptación cinematográfica homónima, The Lost World: Jurassic Park, en la que es interpretada por la actriz Julianne Moore, siendo la coprotagonista de la cinta."
    },

      {
        name: "Nick Van Owen",
        actor: "Vince Vaugn",
        profession: "Fotografo",
        film: "Jurassic Park: el Mundo Perdido",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710520297/Jurassic%20Park/Characters/NICK_VAN_OWEN_-_copia_h3sqda.webp",
        resume: "Nick Van Owen (29 de junio de 1964) es un videoperiodista y activista medioambiental estadounidense. Es mejor conocido por su trabajo con Nightline en la última parte del siglo XX, tiempo durante el cual informó sobre varios conflictos importantes. Van Owen también es un apasionado defensor de la justicia ambiental y los derechos de los animales, siendo miembro de Tierra Primero y trabajado con Greenpeace. Fue debido a esta combinación de experiencia y creencia política que estuvo involucrado en el incidente de Isla Sorna en 1997 y, por lo tanto, jugó un papel fundamental en la revelación de la des-extinción al público.La participación de Van Owen con Tierra Primero, así como sus acciones en Isla Sorna, han llevado a que se lo considere un ecoterrorista. Sin embargo, actualmente no hay evidencia de que esté en la lista de terroristas de ningún gobierno.."
    },  
    {
        name: "Eddie Carr",
        actor: "Richard Schiff",
        profession: "Ingeniero",
        film: "Jurassic Park: el Mundo Perdido",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710519957/Jurassic%20Park/Characters/EDWARD_CARR_-_copia_wwoxqq.webp",
        resume: "Eddie Carr (29 de junio de 1955 - 28 de mayo de 1997) fue un ingeniero mecánico estadounidense y propietario / operador de Mobile Field Systems. Se destaca por haber sido miembro de la expedición de los “Recolectores”, enviada a Isla Sorna por el Dr. John Hammond, fundador y ex-CEO de International Genetic Technologies, en 1997; fue el especialista en equipos de campo seleccionado por Hammond para proporcionar al equipo suministros y vehículos especialmente diseñados. Carr murió debido a un ataque animal el 28 de mayo de 1997, siendo la primera víctima confirmada de los incidentes ocurridos ese año.                                                                                                                                                                                                                                                                 Eddie aparece tanto en el canon literario del autor Michael Crichton como en el canon cinematográfico de la saga Jurassic Park, teniendo aparición en la novela The Lost World y en su adaptación cinematográfica homónima, The Lost World: Jurassic Park, siendo interpretado por el actor Richard Schiff.Sin embargo, sus dos versiones son muy diferentes en ambos medios: mientras que en la película es el experto tecnológico del grupo, en la novela es solo el asistente de Jack Thorne, es más joven y su muerte es distinta.."
    },
    {
        name: "Kellie Malcom",
        actor: "Laura Dern",
        profession: "Estudiante",
        film: "Jurassic Park: el Mundo Perdido",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710529977/Jurassic%20Park/Characters/kelly_malcom_ny5pko.webp",
        resume: "Kelly aparece por primera vez cuando saluda a su padre, el Dr. Ian Malcolm, cuando está visitando a Eddie Carr en su garaje modificando los vehículos que utilizaran en la expedición a la Isla Sorna. Aunque ella insiste en acompañar a Malcolm en su viaje, cuyo destino le oculta, Malcolm insiste en que Kelly se queda con una persona llamada Karen. Después de una breve discusión en la que Kelly comenta que fue expulsada del equipo de gimnasia de la escuela y que sus sentimientos sobre Malcolm a menudo no le prestan atención, Malcolm le informa a Eddie, pero no antes de decirle sarcásticamente a Kelly que no lo escucha. Mientras Malcolm conversa con Eddie, Kelly se escabulle por los remolques y se esconde.                                                                                                                             Una vez en Isla Sorna, Kelly se toma el tiempo de preparar la cena para el resto del grupo que en este momento no se da cuenta de su presencia. Sin embargo, su fogata alerta la atención de Eddie Carr y Nick Van Owen, el documentalista de video del equipo, quienes se apresuran a poner una jarra de agua antes de que la Dra. Sarah Harding les diga que se cambien a tierra."
    },
    {
        name: "Zach Mitchell",
        actor: "Nick Robinson",
        profession: "Estudiante",
        film: "Jurassic World",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710519503/Jurassic%20Park/Characters/ZACH_MICHELL_-_copia_ivbcfc.webp",
        resume: "Zachary 'Zach' Mitchell es uno de los protagonistas de Jurassic World, es el hermano mayor de Gray y sobrino de Claire, tiene 16 años y viaja junto a su hermano a un moderno parque conocido como Jurassic World (anteriormente conocido como Jurassic Park ) en la Isla Nublar con la invitación de su tía.Después de despedirse de su familia y su novia se embarca junto a su hermano hacia la isla, cuando llega, son recibidos por la asistente de su tía llamada Zara quien cuidará de ellos durante su estadía ya que su tía está ocupada por su trabajo y el nuevo dinosaurio que crearon en el laboratorio. Mientras Zara habla por teléfono, Zach incita a Gray a escapar subiendo a diversas atracciones y al Recinto del Mosasaurio. Después fueron al Valle de las Girosferas, y para su mala suerte, la Indominus Rex, la nueva atracción del parque, se había escabullido de su recinto y empezado a provocar caos en el Parque.                                                                                                                                                                                                                                                                   Cuando ya estaban al límite del valle, y empezaba a verse la reja que dividía el bosque y el valle de las Girosferas, Zach decidió romper las reglas y conducir más allá. En el bosque se encontraron con cuatro Ankylosaurus, pero la Indominus Rex había llegado al bosque y por suerte, Gray se había dado cuenta. La Indominus Rex rugió y espantó a los Ankylosaurios, uno de ellos se dignó a pelear con ella, hasta que de un coletazo le hizo una grieta a la Girosfera y la Indominus Rex pateó a la Girosfera haciéndola rodar con Zach y Gray dentro. La I-Rex ataca al Ankylosaurio, y con sus garras le hiere la pata trasera izquierda. Cuando Zach intenta girar la Girosfera, la I-Rex le da la vuelta al Ankylosaurus y lo remata estrujandole la cabeza y aplastándosela con sus enormes fauces. Mientras que Zach intenta darle la vuelta a la Girosfera, Gray le dice a Zach que mire, mientras se quedan aterrados viendo como el I-Rex los observaba. Mientras intentaban quedarse quietos el celular de Zach recibe una segunda llamada de Claire, ya que la señal se había cortado en la primera, Zach no puede alcanzar su celular y es cuando la I-Rex ataca la Girosfera, rompiéndola el cristal con su garra, e intenta agarrarla con la boca pero Zach y Gray logran escapar desabrochándose los cinturones de los asientos y salir por unas de la puerta de entrada de la Girosfera.."
    },
    {
        name: "Grey Mitchell",
        actor: "Ty Simpkins",
        profession: "Estudiante",
        film: "Jurassic World",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710519971/Jurassic%20Park/Characters/GRAY_MITCHELL_-_copia_jtqmhd.webp",
        resume: "ray Mitchell es el hermano menor de Zach y sobrino de Claire. Junto con su hermano Zach, fue a Jurassic World para visitar a su tía Claire y entretenerse. Como Claire estaba ocupada los dejó a cargo de Zara, con ella fueron a muchas atracciones; pero cuando estaban en el Mini Zoo y Zara estaba distraída, se escabulleron y fueron al Show de alimentación del Mosasaurus a ver como este devora a un Tiburon Blanco. Después fueron al Valle de las Giroesferas viendo Triceratops, Stegosaurus, Parasaurolophus y Apatosaurus, y para su mala suerte la Indominus Rex, se había escabullido y empezado a hacer el caos en el Parque, y como a las Giroesferas no les llega la señal de los celulares, el intento de llamada de Claire para Zach, fué fallido. Cuando ya estaban al límite del valle, y empezaba a verse la reja que dividía el bosque y el valle de las Giroesferas, Zach decidió romper las reglas y conducir más allá. En el bosque se encontraron con cuatro Ankylosaurios, pero la Indominus Rex había llegado al bosque y por suerte, Gray se había dado cuenta. La Indominus Rex rugió y espantó a los Ankylosaurios, uno de ellos se dignó a pelear con ella, hasta que de un coletazo le hizo una grieta a la Giroesfera y la Indominus Rex pateó a la Giroesfera haciéndola rodar con Zach y Gray dentro. El I-Rex ataca al Ankylosaurio, y con sus garras le hiere la pata trasera izquierda. Cuando Zach intenta girar la Giroesfera, la I-Rex le da la vuelta al Ankylosaurio y lo remata estrujandole la cabeza y aplastándosela con sus enormes fauces."
    },
    {
        name: "Claire Dearing",
        actor: "Bryce Dallas Howard",
        profession: "Directora del parque",
        film: "Jurassic World, Jurassic World: El Reino Perdido, Jurassic World: Dominion",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710519515/Jurassic%20Park/Characters/Claire_Dearing_2022_-_copia_xhmuq6.webp",
        resume: "Claire Dearing es una activista por los derechos de los animales y ex Gerente de Operaciones de Jurassic World. Es ampliamente conocida por fundar el Grupo de Protección de Dinosaurios, una organización de defensa de los derechos de los animales des-extintos con sede en San Francisco, y por actuar como Gerente de Activos, además de Gerente de Operaciones, de Jurassic World entre 2007 y el cierre del parque a finales de 2015. Desde 2016 en adelante, ha sido una figura política prominente en la controversia en torno a los derechos y protecciones de la vida animal des-extinta, utilizando las redes sociales y el cabildeo político para promover la idea de que la vida des-extinta debe tener las mismas protecciones que las especies que existen de forma natural.                                                                                                                                                                                                                                                               Claire es la hermana menor de Karen Mitchell y tiene dos sobrinos, Zach y Gray. Fue empleada del multimillonario director ejecutivo de Masrani Global Corporation y fundador de Jurassic World, Simon Masrani, y jefe superior del conductista animal Owen Grady, con quien sostiene una relación amorosa.."
    },
    {
        name: "Simon Masrani",
        actor: "nfarn Karn",
        profession: "Empresario",
        film: "Jurassic World",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710519494/Jurassic%20Park/Characters/SIMON_MARASHNI_-_copia_yqjzeo.webp",
        resume: "Simon Masrani (1967-2015) fue un empresario y emprendedor multimillonario indio, así como el director ejecutivo de Masrani Global Corporation desde 1992 hasta su muerte a finales de 2015. Supervisó la mayoría de los principales desarrollos de la empresa, como la expansión de los servicios de telecomunicaciones de la subsidiaria Mascom Network y la adquisición de International Genetic Technologies. A este último le siguió rápidamente la construcción del parque temático Jurassic World en la Isla Nublar, que se convirtió en la empresa insignia de la compañía y en su activo más famoso. A Masrani le gustaba mucho Jurassic World y lo consideraba el mayor logro de su empresa. Sin embargo, después de unos años, las ganancias del parque comenzaron a estabilizarse; Masrani autorizó al genetista evolutivo Henry Wu, de InGen, a utilizar la ingeniería genética para crear una nueva atracción para atraer multitudes más grandes, lo que resultó en la creación del híbrido Indominus rex.                                                                                                                                    Tras no poder visitar Jurassic World durante un período de tres años, entre 2012 y 2015, Masrani regresó a Isla Nublar el 22 de diciembre de 2015 para ver al Indominus. Durante la inspección, el animal rompió la contención y causó la muerte de varios miembros del personal. Masrani se encargó de someter personalmente al animal, pero murió en un accidente de helicóptero durante la operación."
    },
    {
        name: "Owen Grady",
        actor: "Cris Pratt",
        profession: "Marine, Conductivista animal",
        film: "Jurassic World, Jurassic World: El Reino Perdido, Jurassic World: Dominion",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710519963/Jurassic%20Park/Characters/ELLIE_SHATTER_-_copia_jzmqgs.jpg",
        resume: "Owen Grady es un conductista animal estadounidense anteriormente empleado por la Marina de los Estados Unidos y la División de Seguridad de International Genetic Technologies. Es mejor conocido por su empleo en InGen Security, donde fue el entrenador de animales líder en el denominado Proyecto IBRIS entre 2012 y el cierre de Jurassic World en 2015. Debido a sus experiencias laborales, Grady es considerado un especialista en el comportamiento de animales inteligentes y uno de los principales expertos en VelociraptorActualmente mantiene una relación con la activista por los derechos de los animales y ex Gerente de Operaciones de Jurassic World, Claire Dearing, quien anteriormente fue su jefa superior..                                                                                                                           Owen Grady tenía 34 años entre el 22 y el 23 de diciembre de 2015, colocando su fecha de nacimiento entre el 24 de diciembre de 1980 y el 21 de diciembre de 1981. El acento y el comportamiento de Owen implican que creció en el sur de Estados Unidos o Medio Oeste.En febrero de 1997, cuando tendría quince o dieciséis años, ocurrió un incidente en San Diego, California, en el que, para sorpresa del mundo, apareció en la ciudad un Tyrannosaurus rex vivo. Esto reveló que International Genetic Technologies, Inc. había logrado la des-extinción con éxito, trayendo de vuelta organismos que se habían extinguido hace millones de años."
    }, 
    {
        name: "Barry Semblene",
        actor: "Omar Sy",
        profession: "Conductivista animal",
        film: "Jurassic World, Jurassic World: Dominion",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710519511/Jurassic%20Park/Characters/BARRY_SEMBENE_-_copia_zjwlft.webp",
        resume: "Barry Sembène es un conductista animal y ex miembro de la Armada francesa. Es conocido por su participación con InGen Security en el denominado Proyecto IBRIS, donde trabajó como cuidador de animales.También es reconocido por su amistad con el ex marin y conductista animal Owen Grady, con quien estuvo involucrado en el incidente de Isla Nublar en 2015, que culminó en el cierre permanente del parque temático Jurassic World."
    }, 
    {
        name: "Vic Hoskins",
        actor: "Vincent Dónofrio",
        profession: "Jefe de investigacion INGEN",
        film: "Jurassic world",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710530795/Jurassic%20Park/Characters/vic_hoskins_tq4c1b.webp",
        resume: "Vic Hoskins fue un contratista de seguridad estadounidense conocido por sus trabajos con las Fuerzas Armadas de EE. UU. y, más tarde, con la División de Seguridad de International Genetic technologies. Durante su tiempo con el ejército estadounidense, vio un combate activo en el Medio Oriente y estuvo involucrado en el segundo incidente confirmado que involucró a animales des-extintos en el continente americano. Posteriormente, fue contratado como jefe de InGen Security, cargo que ocupó hasta su muerte el 22 de diciembre de 2015.                                                                                                                                                                                                                                                                    A lo largo de su carrera en InGen, Hoskins fue un gran defensor del uso de animales militares, así como de la expansión de este concepto para incluir nuevas especies. Su participación en el Proyecto I.B.R.I.S, de InGen, fue un esfuerzo para criar especies des-extintas propiedad de la empresa, como Velociraptor, para uso militar. Hoskins también estuvo involucrado, aunque de manera encubierta, con el Indominus rex; también tenía la intención de explorar la posibilidad de manipular genéticamente animales de grado militar. Durante el incidente de Jurassic World en 2015, Hoskins fue asesinado por uno de los especímenes de I.B.R.I.S.."
    }, 
    {
        name: "Maisie Lockwood",
        actor: "Isabella Shermon",
        profession: "Estudiante",
        film: "Jurassic World: El Reino Caido, Jurassic World:_ Dominion",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710520294/Jurassic%20Park/Characters/MAISIE_LOCKWOOD_-_copia_shycfp.webp",
        resume: "Maisie Lockwood (2008) es la hija de la genetista Charlotte Lockwood y nieta del ex empresario y activista Sir Benjamin Lockwood.Se destaca por ser el primer clon humano confirmado en nacer y por su participación en el incidente de la Mansión Lockwood en 2018.La madre de Maisie (la Maisie Lockwood original) falleció debido a un fatal accidente automovilístico. Su padre estaba muy angustiado por su muerte y tomó medidas extremas para llenar el vacío emocional que dejó, utilizando avanzadas técnicas de clonación de InGen para replicarla. Es muy probable que Maisie Jr. fuera creada mediante transferencia nuclear de células somáticas, un proceso en el que el núcleo de la célula somática de un sujeto (en este caso, la Maisie original) se inserta en un óvulo desnucleado para generar un embrión que es genéticamente idéntico al sujeto. Esto fue logrado por los científicos por primera vez en enero de 2007, pero los embriones resultantes se terminaron en el curso de la investigación. En 2008, los científicos también descubrieron métodos mejorados para la clonación mediante células madre pluripotentes inducidas, pero este proceso era bastante nuevo en ese momento y se considera menos eficiente, por lo que probablemente no sea la técnica que Lockwood usó para clonar a su hija.                                                                                                                                                                                                                                                                      En cualquier caso, la producción de un clon humano conlleva desafíos que la clonación de reptiles (como InGen había perfeccionado) no presenta. Dado que los humanos son mamíferos, no pueden incubar dentro de los huevos, sino que deben incubar en el útero de una hembra adulta. Lockwood habría tenido que encontrar un anfitrión dispuesto a actuar como madre sustituta durante todo el período de gestación de nueve meses. Debido a que la clonación humana reproductiva es explícitamente ilegal en el estado de California, Lockwood podría haber enfrentado sanciones civiles si se descubriera su acto. Es muy probable que recurriera a su confidente de mayor confianza, la cuidadora de su patrimonio, Iris Carroll, para que actuara como madre sustituta de Maisie Jr.Maisie Lockwood Jr. nació en 2008. Tenía 10 años entre el 22 y el 24 de junio de 2018, lo que significa que su fecha de nacimiento es anterior a esa fecha. Dado que fue clonada en algún momento después de junio de 2007, esto significa que no pudo haber nacido antes de abril de 2008. Esto le otorga un cumpleaños entre abril y principios de junio. Es casi seguro que nació en la Mansión Lockwood, al sur de Orick, California, donde su familia había vivido durante décadas.."
    }, 
    {
        name: "Franking Web",
        actor: "Justin Smith",
        profession: "Informatico",
        film: "Jurassic World: El Reino Caido, Jurassic World:_ Dominion",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710519967/Jurassic%20Park/Characters/Franklin_Webb_29_-_copia_qz5uye.webp",
        resume: "Franklin Webb es un profesional de la tecnología de la información, diseñador web y activista por los derechos de los animales estadounidense. Es mejor conocido por su participación en el Dinosaur Protection Group, donde trabajó como analista de sistemas y coordinador de redes sociales desde 2017 hasta los incidentes de junio de 2018.Webb también fue empleado en el parque temático Jurassic World antes de su cierre en 2015, aunque generalmente laboraba en una instalación externa en lugar del propio parque. A partir de 2022, ha estado empleado en la División de Especies Peligrosas de la Agencia Central de Inteligencia de EE. UU."
    }, 
    {
        name: "Benjamin Lockwood",
        actor: "James Cronwell",
        profession: "Millionario",
        film: "Jurassic World: El reino caido",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710519513/Jurassic%20Park/Characters/BENJAMIN_LOCKWOOD_-_copia_gj4e8r.webp",
        resume: "Sir Benjamin Lockwood fue un empresario británico y, más tarde, activista por los derechos de los animales des-extintos. Es mejor conocido por ser uno de los padres fundadores de International Genetic Technologies, Inc. y por su participación en la operación para la reubicación de los dinosaurios de Isla Nublar en 2018. Fue Caballero Comandante de la Excelentísima Orden del Imperio Británico.Se informó que murió pacíficamente mientras dormía durante la noche del 24 de junio de 2018. Sin embargo, las circunstancias de su muerte en realidad fueron encubiertas; fue asesinado por el administrador de su propiedad, pero como no hubo testigos y el asesino murió poco después, nunca se descubrió la verdadera causa de su muerte.."
    }, 
    {
        name: "Elly Mills",
        actor: "Rafe Sparks",
        profession: "Empresario",
        film: "Jurassic World: El reino caido",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710531309/Jurassic%20Park/Characters/elly_mills_urlvzt.webp",
        resume: "Eli Mills fue un empresario de finanzas estadounidense mejor conocido por su empleo en la Fundación Lockwood, que dirigió hasta su muerte en 2018, además de ser el albacea de la herencia del empresario y filántropo británico Benjamin Lockwood. Mills también es conocido por su participación en la asociación entre la Fundación Lockwood y Jurassic World. Utilizó dinero de su empleador para financiar la creación de la Indominus rex, y también es responsable de la reubicación ilegal de muchas especies animales des-extintas de Isla Nublar al noroeste del Pacífico.                                                                                                                            Murió durante la noche del 24 de junio de 2018 después de realizar una subasta del mercado negro en la residencia de Lockwood sin el conocimiento de su empleador, quien falleció esa misma noche; tras mantener cautivos a numerosos animales dentro del edificio, los que no habían sido subastados fueron liberados sin el conocimiento de Mills, quien fue asesinado por uno de los animales mientras intentaba huir de la propiedad.."
    }, 
    {
        name: "Gunnar Everson",
        actor: "Toby Jones",
        profession: "Subastador",
        film: "Jurassic World: El reino caido",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710519973/Jurassic%20Park/Characters/Gunnar_Eversoll_29_-_copia_e1xyul.webp",
        resume: "Eversol fue empleado por Eli Mills para vender los dinosaurios capturados tomados de Isla Nublar por su mercenario contratado Ken Wheatley y su equipo. A pesar de estar aliado con Mills, Eversol no estaba contento con la idea de vender dinosaurios, pero la etiquetaba debido a su codicia de dinero.Después de que los dinosaurios son transportados a Lockwood Estate, Gunnar Eversol comienza la subasta presentando varios dinosaurios a varios clientes, en su mayoría traficantes de armas y caudillos que pretenden utilizarlos como armas. Así como finalmente se vendieron cuatro dinosaurios cuando Eversol presenta el Indoraptor, Owen logra interrumpir el evento liberando un Stygimoloch y soltándolo para interrumpir las subastas, lo que hace que muchas personas huyan despavoridas.                                                                                                                                                                                                                                                           El Indoraptor luego se liberó de la custodia fingiendo ser tranquilizado por Wheatley, lo que le permitió asesinar a Wheatley hasta la muerte, un acto presenciado por Eversol. Decidiendo que no vale la pena, Eversol logró escapar a un ascensor con varias personas y por culpa de una mujer que empieza a gritar, el Indoraptor los descubre, y Eversol cerró el ascensor accediendo al panel de botones, pero el Indoraptor desactiva los controles sin saberlo con su cola, haciendo que las puertas del ascensor se abran de nuevo. Con esto, el Indoraptor irrumpió y mutiló a Eversol y los subastadores que se escondían a su muerte."
    }, 
    {
        name: "Kayla Watts",
        actor: "DeWanda Wise",
        profession: "Piloto",
        film: "Jurassic Park: Dominion",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710531524/Jurassic%20Park/Characters/Kayla_watts_pjoyjs.webp",
        resume: "Kayla Watts es una piloto y contrabandista afroamericana. Anteriormente fue miembro de la Fuerza Aérea de EE. UU., antes de decidir trabajar por cuenta propia, en gran parte de forma ilegal. En algún momento después de 2018, BioSyn Genetics la contrató para transportar animales des-extintos desde varios lugares del mundo a las instalaciones de la empresa, como el Santuario de BioSyn Genetics. También es conocida por sus operaciones en Mombasa y el mercado nocturno Amber Clave, en Malta; hasta la primavera de 2022, frecuentemente tomó trabajos con la temida mediadora del mercado negro Soyona Santos.Hasta su aterrizaje forzoso final durante el incidente del Valle de BioSyn en 2022, era conocida por su exclusivo Fairchild C-119 Flying Boxcar, el Midnight Oiler. Después de esto, se convirtió en piloto del sucesor de ese avión, el Midnight Oiler 2.."
    }, 
    {
        name: "Ramsay Cole",
        actor: "Mamoudou Athie",
        profession: "Ayudante",
        film: "Jurassic Park: Dominion",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710531524/Jurassic%20Park/Characters/Kayla_watts_pjoyjs.webp",
        resume: "Ramsay Cole es un profesional de negocios afroamericano conocido por su anterior empleo como Jefe de Comunicaciones en BioSyn Genetics y por jugar un papel decisivo a la hora de exponer la complicidad de la propia empresa en la plaga de langostas híbridas de 2022, operando entre bastidores para reunir pruebas y testigos de las malas acciones de la compañía y actuando como principal denunciante de estas.Cole ejerce un rol breve pero relevante en la segunda trilogía que comprende el canon cinematográfico de la franquicia Jurassic Park, siendo interpretado por el actor Mamoudou Athie."
    }, 

    {
        name: "Lewis Dogson",
        actor: "Cameron Thor",
        profession: "Empresario",
        film: "Jurassic Park: Dominion",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710519517/Jurassic%20Park/Characters/DOCTOR_LEWIS_DOGSON_-_copia_chujaz.webp",
        resume: "Lewis Dodgson fue un empresario estadounidense empleado durante más de veinte años por BioSyn Genetics, ejerciendo el cargo de director ejecutivo de la empresa desde 2013 hasta su muerte en 2022.Pese a su estatus como una figura pública generalmente respetada, Dodgson fue declarado póstumamente culpable de delitos de guante blanco, aunque ha evitado la mayoría de las consecuencias legales de sus crímenes mediante el uso extensivo de apoderados. Su primer delito grave pudo haber sido una conspiración para robar secretos comerciales de una corporación rival, lo que condujo a un incidente en 1993 que causó la muerte de al menos cuatro personas y millones de dólares en daños. Desde entonces, estuvo involucrado en el mercado negro de animales des-extintos, el soborno al gobierno y otros delitos importantes, que culminaron con su papel en la plaga de langostas híbridas de principios de la década de 2020; nunca fue a juicio por ninguno de estos actos, muriendo debido a un ataque animal durante el incidente del Valle de BioSyn en 2022.                                                                                                                                                                                                                                                                    Dodgson ha sido una figura relevante tanto en el canon literario del autor Michael Crichton como en el canon cinematográfico de la franquicia Jurassic Park, siendo interpretado respectivamente por los actores Cameron Thor y Campbell Scott (películas), y por Adam Harrington (serie animada; voz). Es un antagonista tanto en la novela Jurassic Park como en su secuela, The Lost World, aunque es en esta última que adquiere un rol más protagónico. Se ejerce como un antagonista secundario en la adaptación cinematográfica de la novela original y en la serie Jurassic World: Camp Cretaceous (aunque con un rol más prominente en esta última), y el principal antagonista humano de la cinta Jurassic World: Dominion.."
    }, 

];

mongoose
    .connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async() => {
        const allCharactersJurassicPark = await CharacterJurassicPark.find();
        if (allCharactersJurassicPark.length > 0) {
            await CharacterJurassicPark.collection.drop();
            console.log('Personajes borrados');
        }
    })
    .catch((err) => {
        console.log('error borrando los Personajes', err);
    })
    .then(async() => {
        const charactersJurassicParkMap = arrayCharactersJurassicPark.map(
            (character) => new CharacterJurassicPark(character)
        );
        await CharacterJurassicPark.insertMany(charactersJurassicParkMap);
        console.log('Personajes insertados');
    })
    .catch((err) => {
        console.log('error insertando los Personajes', err);
    })
    .finally(() => mongoose.disconnect());