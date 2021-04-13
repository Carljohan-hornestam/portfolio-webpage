import sgfm from "../images/SGFM.png";
import example from "../images/exampleImage.jpg"

export const projects1 = [
  {
    name: "Super Galaxy Face Melter",
    description: `Super Galaxy Face Melter är den första utgåvan av kortspelet. Det är en konsolapplikation som är skriven i Java.
       Vid start delas fem kort ut till de två spelarna, och varje runda börjar den spelare som inte började förra rundan. Det kort med högst attackpoäng vinner.
       Spelets värd väljer hur många kort på hand spelarna ska ha, och hur många poäng som krävs för att vinna.`,
    githubLink: "https://github.com/nekcoj/SuperGalaxyFaceMelter",
    imageSrc: sgfm,
    writtenIn: ["Java"],
  },
  {
    name: "Marvelissimo",
    description:
      "Marvelissimo är en Android applikation som är skriven i Kotlin. Appen hämtar karaktärer och serier från Marvels API och presenterar dessa i en snygg lista. Man kan även favoritmarkera och skicka favoriter till andra användare.",
    githubLink: "https://github.com/BitLord69/Marvelissimo",
    imageSrc: example,
    writtenIn: ["Kotlin", "Firebase"],
  },
  {
    name: "Super Galaxy Face Melter 2",
    description: `Det här är den andra utgåvan av Super Galaxy Face Melter serien. Den här gången är det ett komplett onlinespel med både server och klient.
     Servern och klienten kommunicerar via Socket.io. Servern är skriven i Java och frontenden i Vue 3. Applikationen använder Neo4j som databas. 
     Samma spelregler som första utgåvan av spelet.`,
    githubLink: "https://github.com/BitLord69/SGFM2",
    imageSrc: sgfm,
    writtenIn: ["Java", "Javascript", "Vue 3", "Node", "Neo4j"],
  },
  {
    name: "Movieknights",
    description: `Movieknights är en webbapp där backenden är skriven i Java och Spring, och frontenden i Vue 3.
       Här kan man söka bland flera hundratusentals filmer i vår databas och boka filmkvällar med andra Google-användare direkt i sin Google-kalender.`,
    githubLink: "https://github.com/BitLord69/movieknights",
    imageSrc: sgfm,
    writtenIn: ["Java", "JavaScript", "Vue 3", "Spring", "Neo4j"],
  },
  {
    name: "SuperCalendar",
    description: `SuperCalendar är en webbapplikation som låter dig boka in evenemang och bjuda in andra användare till dessa. Frontenden är skriven i Javascript och React, och backenden är skriven i Node.js. Databasen som används är SQLite. 
      `,
    githubLink: "https://github.com/Carljohan-hornestam/SuperCalendar",
    imageSrc: sgfm,
    writtenIn: ["JavaScript", "React", "SQLite", "Node"],
  },
];
