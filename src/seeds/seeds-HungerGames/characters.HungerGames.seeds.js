const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const CharacterHungerGames = require('../../api/models/models.HungerGames/characters.HungerGames.model');

const arrayCharactersHungerGames = [
    {
        name: "Katniss Everdeen",
        actor: "Jennifer Lawrence",
        district: "12",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710443205/JuegosDelHambre/Characters/KatnissEverdeen_qncuqv.webp",
        resume: "Katniss Everdeen es el personaje principal de la trilogía de libros juveniles Los juegos del hambre, de la escritora Suzanne Collins. Esta trilogía es relatada desde su punto de vista. En la adaptación cinematográfica de la saga, el personaje es interpretado por la actriz Jennifer Lawrence. Su apodo es ”La chica en llamas”.                                                                                                  Katniss y su familia viven en el Distrito 12, que se encarga de la minería de carbón. Es el distrito más pobre y menos poblado en el ficticio país de Panem. Katniss vive junto a su hermana Primrose (Prim) Everdeen y su madre. Su padre murió en un accidente minero y ahora es ella la encargada de mantener a salvo a su familia. Para ello se va todos los días a cazar furtivamente con su mejor amigo, Gale Hawthorne. Katniss se diferencia por su valentía y rebeldía entre otras cosas.                                                                                                  Después de que su hermana menor, Prim, es elegida para participar en los 74º Juegos del hambre, Katniss toma su lugar voluntariamente en el puesto de tributo femenino del Distrito 12.                                                                                                         Sus actos de rebeldía contra el Capitolio en la Arena, condujeron al pueblo de Panem a verla como la cara de la rebelión. Más tarde se convirtió en lo que se llamó «el Sinsajo» y encabezó la rebelión contra el Capitolio."
    },
    {
        name: "Peeta Mellark",
        actor: "Josh Hutcherson",
        district: "12",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710443217/JuegosDelHambre/Characters/PeetaMellark_w7prm4.jpg",
        resume: "Peeta es el hijo del panadero del Distrito 12, por lo que está mejor alimentado que el resto de la gente del Distrito. Tiene dos hermanos de los que se desconoce los nombres, y a sus padres, quienes mueren en el bombardeo al Distrito durante el Vasallaje de los Veinticinco.                                                                                             Cuando Peeta es elegido para los juegos, Katniss recuerda cuando una vez le dio un pan que la salvo del hambre y le dieron esperanza para salir adelante en la pobreza, quemando a propósito unas barras de pan y dándoselas sin importarle las consecuencias, ya que al día siguiente Peeta apareció con golpes en el rostro y cuerpo.                                                                                                     Peeta y Katniss jamás habían hablado antes de los Juegos, aunque Peeta siempre intento hacerlo, por lo que no habían tenido ningún tipo de relación. Pero durante una entrevista, Peeta confiesa estar enamorado de Katniss, lo que hace que ella se enfade y lo golpee. Después, su mentor le hace entender que es mejor que el público crea esto para ganar audiencia. Así que, a ella no le queda más remedio que actuar el papel de chica enamorada y hacer de los Juegos más entretenidos, sucediendo la historia de amor entre los trágicos amantes del Distrito 12."
    },
    {
        name: "Gale Hawthorne",
        actor: "Liam Hemsworth",
        district: "12",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710443193/JuegosDelHambre/Characters/GaleHawthorne_sci2vs.webp",
        resume: "Gale Hawthorne es uno de los personajes principales de la trilogía. Es un chico de dieciocho años de edad, tiene cabello oscuro y ojos grises. Es el mejor amigo de Katniss y compañero de caza furtiva.                                                                                            Intentando apoyar a su familia tras la muerte de su padre en la misma mina que mató al padre de Katniss, Gale tuvo que pedir muchas teselas. (Esta 42 veces en la cosecha) Tiene diecisiete años, posiblemente ya diecinueve en los capítulos de “En llamas” y “Sinsajo”. Suele cazar a menudo, la mayoría de veces con Katniss, siendo de ese modo como se conocieron.                                                                                             Cuando Katniss tenía doce años y él catorce, los padres de ambos murieron en un accidente minero, y pronto se convirtieron en compañeros de caza. Katniss dice que a los catorce, “Gale ya parecía un hombre”. Se menciona más tarde que medía un metro ochenta y algo. Al igual que mucha gente en la Veta, tiene la piel olivácea, pelo liso oscuro y ojos grises. Admite haberse enamorado de Katniss en “En Llamas”, y su relación crece en cada libro. Odia al Capitolio y tiene cicatrices de cuando fue azotado en “En Llamas” por un agente de la paz, tras haber sido pillado cazando ilegalmente."
    },
    {
        name: "Haymitch Abernathy",
        actor: "Woody Harrelson",
        district: "12",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710443199/JuegosDelHambre/Characters/HaymitchAbernathy_ksior5.jpg",
        resume: "Haymitch fue seleccionado en la Cosecha del segundo Vasallaje de los 25, el año 50.º de los Juegos del Hambre junto a otro Tributo masculino y dos Tributos femeninos.                                                                                                 Tras ganar los Juegos, el Capitolio vio en su actuación con el campo de fuerza un acto de rebeldía, por lo que ordenó asesinar a su familia y su novia. Durante los siguientes 24 años, Haymitch se dedicó a entrenar en solitario a los Tributos de su Distrito, cayendo en el alcoholismo conforme iba viendo cómo todos morían.                                                                                                  Katniss y Haymitch tienen bastante en común. Ambos son letales y desconfiados, dispuestos a sobrevivir pero al mismo tiempo capaces de sacrificarse si hace falta. A pesar de que ambos se tratan con brusquedad, Haymitch constituye el principal apoyo de Katniss, ya que ambos tienen en común un fuerte instinto de protección y sentido de la lealtad hacia Peeta."
    },
    {
        name: "Effie Trinket",
        actor: "Elizabeth Banks",
        district: "Capitolio",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710443187/JuegosDelHambre/Characters/EffieTrinket_drqimc.jpg",
        resume: "Es la escolta de los tributos del Distrito 12, Katniss y Peeta. Es muy formal y correcta, y posee claro acento del Capitolio. Los modales son muy importantes para ella, así como mantener un estricto horario. Se viste de manera llamativa, como suelen hacerlo los ciudadanos de El Capitolio. Ayuda a organizar los regalos de los patrocinadores junto a Haymitch para enviarle a Katniss durante los Juegos. Ella también eligió los tributos durante la cosecha para los 74º Juegos del Hambre. Trató de ayudar a Peeta y Katniss con sus modales y etiqueta pero fue aterrorizada por la falta deliberada de modales en Katniss, rápidamente aumentó su frustración y se rindió. Se pone feliz y aliviada cuando Katniss y Peeta ganan los Juegos."
    },
    {
        name: "Presidente Coriolanus Snow",
        actor: "Donald Sutherland",
        district: "Capitolio",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710443175/JuegosDelHambre/Characters/CoriolanusSnowAnciano_ohx7es.webp",
        resume: "El presidente de Panem. Habla con Katniss cara a cara por primera vez al principio de En llamas. Se describe por tener los labios muy hinchados, lo más probable es que haya sido una operación para alterar la apariencia, las cuales son muy populares en el Capitolio. Su aliento huele un poco a sangre, y por eso lleva una rosa blanca genéticamente modificada en el bolsillo para tapar el olor."
    },
    {
        name: "Seneca Crane",
        actor: "Wes Bentley",
        district: "Capitolio",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710443223/JuegosDelHambre/Characters/SenecaCrane_vjrsb0.jpg",
        resume: 'El Ex-jefe de los Vigilantes. Es asesinado por permitir que Katniss y Peeta ganaran los 74º Juegos del Hambre. Fue asesinado por el Presidente Snow con bayas "jaulas de noche". El presidente Snow implica que fue asesinado por su falta de previsión.'
    },
    {
        name: "Cinna",
        actor: "Lenny Kravitz",
        district: "Capitolio",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710443144/JuegosDelHambre/Characters/Ceena_u8mjif.webp",
        resume: "Estilista de Katniss, sigue ayudando a Katniss a ser más astuta que el Capitolio con sus irreverentes diseños. Durante el Vasallaje, transforma el vestido de boda de Katniss en el símbolo de la resistencia, el sinsajo. Mientras que Katniss estaba en el tubo de vidrio para salir a la arena, Cinna es golpeado y sacado fuera de la habitación por Agentes de la paz."
    },
    {
        name: "Finnick Odair",
        actor: "Sam Claflin",
        district: "4",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710443181/JuegosDelHambre/Characters/FinnickOdair_wcnnnw.webp",
        resume: 'Finnick ganó los 65.os Juegos del Hambre cuando tenía 14 años siendo el más joven en hacerlo, Su mentora fue otra antigua vencedora de los juegos, llamada Mags, vencedora de los 11° juegos del hambre, con quien luego participó con él en la 75.ª edición. Durante los 65.os Juegos del Hambre, a Finnick le regalaron un tridente, el cual fue probablemente el objeto más caro regalado en la historia de los juegos. El tridente era un arma que Finnick dominaba puesto que lo había usado toda su vida en el Distrito 4 como herramienta de trabajo, y con la ayuda de una red, que él mismo hizo con viñas que encontró en la arena, logró atrapar a sus oponentes y matarlos con el tridente.                                                                                                Durante los 74.os Juegos del Hambre, Finnick sirvió, junto a Mags, como mentor de los tributos del Distrito 4, tal y como se revela en el tercer libro, Sinsajo. Un año más tarde, participó como tributo en la edición especial de los 75.os Juegos del Hambre. Durante estos juegos, Odair forma una alianza con Peeta Mellark, Katniss Everdeen, Wiress, Beetee, Johanna Mason y su mentora anterior, Mags.                                                                                                  Katniss atribuye el éxito de Finnick a su extraordinaria apariencia física y a su popularidad entre los habitantes del Capitolio. Aunque es un excelente luchador con lanzas y cuchillos encontrados en la Cornucopia, recibió muchos regalos, incluyendo un tridente, que aseguró su supervivencia. Después de proclamarse vencedor, fue forzado a ser prostituido por el presidente Snow como "acompañante" a personas importantes del Capitolio. Pero Finnick en lugar de dinero, a cambio de su compañía, pedía secretos.'
    },
    {
        name: "Caesar Flickerman",
        actor: "Stanley Tucci",
        district: "Capitolio",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710443164/JuegosDelHambre/Characters/CaesarFlickerman_igxn22.jpg",
        resume: "Caesar Flickerman es el anfitrión de los Juegos del Hambre. Es famoso por convertir cualquier conversación en torno a lo positivo, y suele cambiar el color de sus labios, pelo, y párpados para cada uno de los Juegos del Hambre. Siempre usa un traje color azul medianoche con luces en él."
    },
    {
        name: "Coriolanus Snow",
        actor: "Tom Blyth",
        district: "Capitolio",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710443170/JuegosDelHambre/Characters/CoriolanusSnow_kleih2.webp",
        resume: "Snow asistió a la Academia y fue uno de sus mejores alumnos. Como tal, en su último año, fue elegido como mentor en los 10.os Juegos del Hambre. Se dio cuenta de que algo iba mal cuando su logro como estudiante de alto rendimiento no fue reconocido y se le asignó la tutoría de la tributo femenina del Distrito 12, Lucy Gray Baird, que procedía de uno de los distritos con peores resultados."
    },
    {
        name: "Lucy Gray Baird",
        actor: "Rachel Zegler",
        district: "12",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710443211/JuegosDelHambre/Characters/LucyGraid_byypqo.jpg",
        resume: "Lucy Gray Baird fue una tributo del Distrito 12 en los 10.os Juegos del Hambre. Su mentor fue Coriolanus Snow, un estudiante de alto rendimiento en la Academia. Fue la vencedora de los Juegos y una de las favoritas del Capitolio. Formando parte de los Covey, ella y su familia quedaron atrapados en el Distrito 12 tras la Primera Rebelión, pero originalmente viajaron por todo Panem. Anteriormente mantuvo una relación con Billy Taupe y Coriolanus Snow."
    },
];

mongoose
    .connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async() => {
        const allCharactersHungerGames = await CharacterHungerGames.find();
        if (allCharactersHungerGames.length > 0) {
            await CharacterHungerGames.collection.drop();
            console.log('Personajes borrados');
        }
    })
    .catch((err) => {
        console.log('error borrando los Personajes', err);
    })
    .then(async() => {
        const charactersHungerGamesMap = arrayCharactersHungerGames.map(
            (character) => new CharacterHungerGames(character)
        );
        await CharacterHungerGames.insertMany(charactersHungerGamesMap);
        console.log('Personajes insertados');
    })
    .catch((err) => {
        console.log('error insertando los Personajes', err);
    })
    .finally(() => mongoose.disconnect());