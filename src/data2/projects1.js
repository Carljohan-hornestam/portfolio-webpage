import sgfm1_bild1 from "../images/sgfm1_bild1.png";
import sgfm1_bild2 from "../images/sgfm1_bild2.png";
import sgfm2_bild1 from "../images/SGFM2.png";
import sgfm2_bild2 from "../images/SGFM2_bild2.png";
import movieknights from "../images/movieknights.png";
import movieknights2 from "../images/movieknights2.png";
import supercalendar from "../images/supercalendar.png";
import supercalendar2 from "../images/supercalendar2.png";

export const projects1 = [
  {
    name: "Super Galaxy Face Melter",
    description: `Super Galaxy Face Melter är den första utgåvan av kortspelet. Det är en konsolapplikation som är skriven i Java.
       Vid start delas fem kort ut till de två spelarna, och varje runda börjar den spelare som inte började förra rundan. Det kort med högst attackpoäng vinner. Spelaren som vinner får så många poäng som det besegrade kortets attackpoäng är.
       Spelets värd väljer hur många kort på hand spelarna ska ha, och hur många poäng som krävs för att vinna.`,
    githubLink: "https://github.com/nekcoj/SuperGalaxyFaceMelter",
    imageSrc: sgfm1_bild1,
    images: [sgfm1_bild1, sgfm1_bild2],
    writtenIn: ["Java"],
  },
  {
    name: "Super Galaxy Face Melter 2",
    description: `Det här är den andra utgåvan av Super Galaxy Face Melter serien. Den här gången är det ett komplett onlinespel med både server och klient.
     Servern och klienten kommunicerar via Socket.io. Servern är skriven i Java och frontenden i Vue 3. Applikationen använder Neo4j som databas. 
     Samma spelregler som första utgåvan av spelet.`,
    githubLink: "https://github.com/BitLord69/SGFM2",
    imageSrc: sgfm2_bild1,
    images: [sgfm2_bild1, sgfm2_bild2],
    writtenIn: ["Java", "Javascript", "Vue 3", "Node", "Neo4j"],
  },
  {
    name: "Movieknights",
    description: `Movieknights är en webbapp där backenden är skriven i Java och Spring, och frontenden i Vue 3.
       Här kan man söka bland flera hundratusentals filmer i vår databas och boka filmkvällar med andra Google-användare direkt i sin Google-kalender.`,
    githubLink: "https://github.com/BitLord69/movieknights",
    imageSrc: movieknights,
    images: [movieknights, movieknights2],
    writtenIn: ["Java", "JavaScript", "Vue 3", "Spring", "Neo4j"],
  },
  {
    name: "SuperCalendar",
    description: `SuperCalendar är en webbapplikation som låter dig boka in evenemang och bjuda in andra användare till dessa. Frontenden är skriven i Javascript och React, och backenden är skriven i Node.js. Databasen som används är SQLite. 
      `,
    githubLink: "https://github.com/Carljohan-hornestam/SuperCalendar",
    imageSrc: supercalendar,
    images: [supercalendar, supercalendar2],
    writtenIn: ["JavaScript", "React", "SQLite", "Node"],
  },
];
