// import as from '../assets/projects/web/01_web.png'
export const technologies = [
  {
    name: 'react',
    priority:1,
  },
  {
    name: 'redux',
    priority:1,
  },
  {
    name: 'scikit-learn',
    priority:1,
  },
  {
    name: 'machine-learning',
    priority:1,
  },
  {
    name: 'express',
    level: 'basics',
    priority:2, //denerian ser 1
  },
  {
    name: 'sQL',
    level: 'basics',
    priority:2, //denerian ser 1
  },
  {
    name: 'mongoDB',
    level: 'basics',
    priority:2, //denerian ser 1
  },
  {
    name: 'firebase',
    level: 'basics',
    priority:2, //denerian ser 1
  },
  {
    name: 'node',
    priority:1,
  },
  {
    name: 'javaScript',
    priority:2,
  },
  {
    name: 'typeScript',
    priority:2,
  },
  {
    name: 'python',
    priority:2,
  },
  {
    name: 'hTML',
    priority:3,
  },
  {
    name: 'cSS',
    priority:3,
  },
  {
    name: 'sass',
    priority:3,
  },
  {
    name: 'stylus',
    priority:3,
  },
  {
    name: 'less',
    priority:3,
  },
  {
    name: 'antd',
    priority:4,
  },
  {
    name: 'tailwind',
    priority:4,
  },
  {
    name: 'mui',
    priority:4,
  },
  
]

export const projectsWeb = [

  {
    categorie: "web",
    name: "cryptoVerse App",
    details: "this app displays the most important cryptos currencies information live. U can watch their stats and news live",
    important: "",
    technologies: ["hTML", "cSS" , "javaScript", "react", "redux", "ant"],
    date: new Date("2023-06-02T00:00:00.000-06:00"),
    link: "https://crypto-verse-app-nl.netlify.app/"
  },
  {
    categorie: "web",
    name: "travel Advisor App",
    details: "in this app you can search for restaurants, hotels and attractions from any city you are interested in traveling to. The app displays these places into a map, and u can see different information of interest for each place (e.g., price, rating, contact-info, website, etc.)",
    important: "",
    technologies: ["hTML", "cSS" , "javaScript", "react", "mui"],
    date: new Date("2023-05-02T00:00:00.000-06:00"),
    link: "https://travel-advitsor-app.netlify.app/"
  },

  {
    categorie: "web",
    name: "car Sharing App Demo",
    details: "it’s a demo for a car sharing app. You can login as a driver or passenger. As a driver u can schedule trips, and start the travel. As a passenger u can join to any existing trip. Once the trip starts, the app tracks the real time position ‘till it finishes, just as Uber or In-Driver",
    important: "designed for SMALL screens only (e.g., iPhone S6). To login, u just need a valid e-mail address (u don't need any password): u can login as a driver using the email, 'driver@gmail.com'; u can login as a driver using the email, 'tester1@gmail.com'. The Backend is hosted on a free server, so it may need some time to fetch the data. U can try to press the login button a few times to 'awake' the server",
    technologies: ["hTML", "cSS" , "javaScript", "react", "mongoDB","node", "expresss", "sass"],
    date: new Date("2023-04-02T00:00:00.000-06:00"),
    link: "https://rapidapi.com/ludwing/api/amazon-data-scraper133"
  },
  
  {
    categorie: "web",
    name: "amazon Data Scraper API",
    details: "an API to fetch Amazon products data (i.e., query a product by its name, search its reviews, different offers, and details)",
    important: "the Backend is hosted on a free server, so it may need some time to fetch the data. U can try by repeat the request a few times to 'awake' the server. It also needs a scrapper -API key- to work",
    technologies: ["hTML", "cSS" , "javaScript", "node", "expresss"],
    date: new Date("2023-03-02T00:00:00.000-06:00"),
    link: "https://rapidapi.com/ludwing/api/amazon-data-scraper133"
  },

  {
    categorie: "web",
    name: "vans Rental",
    details: "a dummy vans rental app. Builded into a React Router Dom course, taken to learn the 'new' V6.4 Data layer APIs",
    important: "designed for SMALL screens only. To login, use the following credentials, email: 'b@b.com', password: 'p123'",
    technologies: ["hTML", "cSS" , "javaScript", "react", "firebase"],
    date: new Date("2023-02-02T00:00:00.000-06:00"),
    link: "https://vanlife-app-ppr-nl.netlify.app/"
  },


  {
    categorie: "web",
    name: "shopi e-commerce app",
    details: "a dummy e-commerce app",
    important: "designed for large screens only",
    technologies: ["hTML", "cSS" , "javaScript", "tailwind", "react"],
    date: new Date("2023-01-02T00:00:00.000-06:00"),
    link: "https://creative-narwhal-78faec.netlify.app/"
  },

  {
    categorie: "web",
    name: "simple UI test",
    details: "a dummy web app to test some UI ideas I had and the redux essentials",
    important: "designed for large screens only",
    technologies: ["hTML", "cSS" , "javaScript", "redux", "react"],
    date: new Date("2022-02-02T00:00:00.000-06:00"),
    link: "https://master--dashing-parfait-e884c0.netlify.app/"
  },

  {
    categorie: "web",
    name: "1st gen pokemons APP",
    details: "a pokemon web app showing 1st gen Pokemons basic info. Builded to test my Redux Toolkit knowledge",
    important: "designed for large screens only",
    technologies: ["hTML", "cSS" , "javaScript", "redux", "react", "antd"],
    date: new Date("2022-04-02T00:00:00.000-06:00"),
    link: "https://platzi-react-07-pro-react-redux.vercel.app/"
  },

  {
    categorie: "web",
    name: "redux Shopping App",
    details: "a pretty simple e-commer dummy web app. Builded into a Redux course",
    important: "u don't need any info to login, just press the login button",
    technologies: ["hTML", "cSS" , "javaScript", "redux", "react", "firebase", "mui"],
    date: new Date("2022-03-02T00:00:00.000-06:00"),
    link: "https://redux-01-beginner-to-advanced-mqhk6ad6t-nicolevenachi.vercel.app/"
  },

  {
    categorie: "web",
    name: "ioT crop monitoring project",
    details: "an IoT application to monitor crops' live, view its historical data, and automate its irrigation",
    important: "the Backend is hosted on a free server, so it may need some time to fetch the data. U can try by refreshing the page a few times to 'awake' the server",
    technologies: ["hTML", "cSS", "javaScript", "node", "firebase", "express"],
    date: new Date("2022-05-03T00:00:00.000-06:00"),
    link: "https://github.com/NicoleVenachi/Instrumentaci-n-Fend"
  },

  {
    categorie: "web",
    name: "preprocessors demo - Sass 01",
    details: "a dummy static web app to test the preprocessor Sass",
    important: "designed for large screens only",
    technologies: ["hTML", "cSS", "sass"],
    date: new Date("2022-01-06T00:00:00.000-06:00"),
    link: "https://nicolevenachi.github.io/Platzi_Estilos_02_Preprocesadores/03_sass/html/ejercicio-sass.html"
  },

  {
    categorie: "web",
    name: "preprocessors demo - Sass 02",
    details: "a dummy static web app to test the preprocessor Sass",
    important: "designed for large screens only",
    technologies: ["hTML", "cSS", "sass"],
    date: new Date("2022-01-05T00:00:00.000-06:00"),
    link: "https://nicolevenachi.github.io/Platzi_Estilos_02_Preprocesadores/05_proyecto/html/pagina-principal.html"
  },
  
  {
    categorie: "web",
    name: "preprocessors demo - Less",
    details: "a dummy static web app to test the preprocessor Less",
    important: "designed for large screens only",
    technologies: ["hTML", "cSS", "less"],
    date: new Date("2022-01-04T00:00:00.000-06:00"),
    link: "https://nicolevenachi.github.io/Platzi_Estilos_02_Preprocesadores/02_less/html/articulo.html"
  },
  
  {
    categorie: "web",
    name: "preprocessors demo - Styluss",
    details: "a dummy static web app to test the preprocessor Stylus",
    important: "designed for large screens only",
    technologies: ["hTML", "cSS", "stylus"],
    date: new Date("2022-01-03T00:00:00.000-06:00"),
    link: "https://nicolevenachi.github.io/Platzi_Estilos_02_Preprocesadores/05_proyecto/html/resultados-busqueda.html"
  },

  {
    categorie: "web",
    name: "react To-Do list",
    details: "a simple to-do list project builded using react",
    important: "",
    technologies: ["hTML", "cSS", "javaScript", "react"],
    date: new Date("2021-02-02T00:00:00.000-06:00"),
    link: "https://nicolevenachi.github.io/01_introduccion-a-react/"
  },

  {
    categorie: "web",
    name: "grid layout demo",
    details: "a dummy static web app to test my grid layout knowledge",
    important: "",
    technologies: ["hTML", "cSS"],
    date: new Date("2021-01-02T00:00:00.000-06:00"),
    link: "https://nicolevenachi.github.io/Platzi_Estilos_01_GridBasico/03_Proyecto/"
  },

  {
    categorie: "web",
    name: "aESS webpage",
    details: "aESS -Aerospace and Electronic Systems Society- Popayán web page v.1  ",
    important: "",
    technologies: ["hTML", "cSS" , "javaScript"],
    date: new Date("2020-02-02T00:00:00.000-06:00"),
    link: "https://nicolevenachi.github.io/AESS_Development/"
  },

  {
    categorie: "web",
    name: "simple UI test",
    details: "a dummy static web app to test some UI ideas i had",
    important: "designed for large screens only",
    technologies: ["hTML", "cSS" , "sass"],
    date: new Date("2020-03-02T00:00:00.000-06:00"),
    link: "https://nicolevenachi.github.io/Platzi_Frontend_Developer/maquetacion.html"
  },

  {
    categorie: "web",
    name: "simple UI test",
    details: "a dummy static web app to test some UI ideas i had",
    important: "",
    technologies: ["hTML", "cSS" , "sass"],
    date: new Date("2020-04-02T00:00:00.000-06:00"),
    link: "https://nicolevenachi.github.io/Curso_Practico_JS//03_ForkedProject/index.html"
  },

  {
    categorie: "web",
    name: "personal website V1",
    details: "a pretty old portfolio builded to test my CSS basic knowledge back then",
    important: "",
    technologies: ["hTML", "cSS"],
    date: new Date("2019-11-02T00:00:00.000-06:00"),
    link: "https://nicolevenachi.github.io/Desarrollo_Web_Online/"
  },

  {
    categorie: "web",
    name: "cSS Course",
    details: "a portfolio idea builded into a CSS responsive design course",
    important: "",
    technologies: ["hTML", "cSS"],
    date: new Date("2019-10-02T00:00:00.000-06:00"),
    link: "https://nicolevenachi.github.io/Responsive-Design/"
  },

  {
    categorie: "web",
    name: "bootsrap Course",
    details: "a dummy static web page builded into a Bootstrap course",
    important: "",
    technologies: ["hTML", "cSS"],
    date: new Date("2019-09-02T00:00:00.000-06:00"),
    link: "https://nicolevenachi.github.io/curso_bootstrap_4/"
  },
  
]

