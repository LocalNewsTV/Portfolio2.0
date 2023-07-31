/*

  /////////////
  {
    id: "",
    title: "",
    tools: "",
    sourceImage: [
        "/images/projectImg//.webp",
        "/images/projectImg//.webp",
        "/images/projectImg//.webp"
    ],
    writeUp: {
        summary: [
          "",
        ],
    },
    links: {
        demo: "https://localnewstv.github.io/<Repo>",
        github: "https://github.com/LocalNewsTV/<Repo>",
        legacy: "",
        download: "",
        readmore: "",
    },
  },
*/

export const projects = [

    /////////////
    {
      id: "Dollywood",
      title: "Game Design Final Project",
      tools: "Unity, C#",
      sourceImage: [
          "/images/projectImg/Dollywood/Dollywood1.webp",
          "/images/projectImg/Dollywood/Dollywood2.webp",
          "/images/projectImg/Dollywood/Dollywood3.webp",
          "/images/projectImg/Dollywood/Dollywood4.webp",
          "/images/projectImg/Dollywood/Dollywood5.webp",
          "/images/projectImg/Dollywood/Dollywood6.webp",
          "/images/projectImg/Dollywood/Dollywood7.webp",
          "/images/projectImg/Dollywood/Dollywood8.webp",
          "/images/projectImg/Dollywood/Dollywood9.webp"
      ],
      writeUp: {
          summary: [
            "For my Graphics and Gaming Concepts class, I created a first-person shooter game using Unity. The game consists of multiple levels with increasing difficulty and includes four different weapons for the player to use. There are various pickups throughout the levels that can be collected to gain health or ammunition, as well as multiple enemy types with unique AI behaviors. I spent a lot of time tweaking the game mechanics to ensure a satisfying and engaging experience for the player.",
            "Overall, the project was a great way for me to put my Unity skills to the test and create a fully realized game from scratch using the skills taught in the course."
          ]
      },
      links: {
          demo: "",
          github: "",
          legacy: "",
          download: "",
          readmore: "",
      },
    },
  /////////////
  {
    id: "groceryAssistant",
    title: "Grocery Assistant",
    tools: "React Native, Expo, Google Play Store",
    sourceImage: [
        "/images/projectImg/GroceryAssistant/GroceryAssistant1.webp",
        "/images/projectImg/GroceryAssistant/GroceryAssistant2.webp",
        "/images/projectImg/GroceryAssistant/GroceryAssistant3.webp",
        "/images/projectImg/GroceryAssistant/GroceryAssistant4.webp"
    ],
    writeUp: {
      summary: [
        "This is a React Native application for Android that includes a built-in grocery list feature. Users can easily create and manage their grocery lists using the app's intuitive interface.",
        "One of the standout features of the app is its ability to convert inputs for size, units, package, and price into a standardized unit. This makes it easy for users to compare prices and quantities across different items and brands.",
        "Overall, this app is a must-have for anyone looking to streamline their grocery shopping and save money in the process."
      ]
    },
    links: {
        demo: "",
        github: "",
        legacy: "",
        download: "https://play.google.com/store/apps/details?id=com.localnewstv.groceryassistant",
        readmore: "",
    },
  },
  /////////////
  {
    id: "swiftinventory",
    title: "Swift Inventory App",
    tools: "Swift, SwiftUI",
    sourceImage: [
        "/images/projectImg/SwiftLabOne/SwiftLabOne1.webp",
        "/images/projectImg/SwiftLabOne/SwiftLabOne2.webp",
        "/images/projectImg/SwiftLabOne/SwiftLabOne3.webp",
        "/images/projectImg/SwiftLabOne/SwiftLabOne4.webp"
    ],
    writeUp: {
        summary: [
          "For my Mobile Applications class, the first half of the semester had us creating a simple inventory application using Swift and SwiftUI.",
          `This class has a steep learning curve as we were thrown into the deep end of Swift by having our first introduction be diving right into the SwiftUI Library.`,
          `The application could add new inventory items either from built-in icons or images stored on a user's device. Users could edit descriptions of items and toggle which items were their favorites. Data was stored on the device for data retention.`
        ],
    },
    links: {
        github: "https://github.com/LocalNewsTV/Swift-Inventory-App",
    },
  },
  /////////////
  {
    id: "todoList",
    title: "Todo List",
    tools: "MongoDB, ExpressJS, ReactJS, Node",
    sourceImage: [
        "/images/projectImg/TodoList/Todolist1.webp",
        "/images/projectImg/TodoList/todolist2.webp",
        "/images/projectImg/TodoList/todolist3.webp"
    ],
    writeUp: {
        summary: [
          `I created a todo list application utilizing the MERN Stack for its design that can be accessed anywhere on my home network.`,
          `The App allows all CRUD operations to take place in the browser making the application user friendly, intuitively and quick to adopt`,
          `Later on I revisited this application for its github hosted version added localStorage functionality so it can be utilized by anybody anywhere with persisting data.` 
        ],
    },
    links: {
        demo: "https://localnewstv.github.io/home-to-do-list",
        github: "https://github.com/LocalNewsTV/home-to-do-list",
    },
  },
  /////////////
  {
    id: "weatherApp",
    title: "Weather Application 2.0",
    tools: "ReactJS, Axios, weatherapi.com",
    sourceImage: [
        "/images/projectImg/WeatherApp/Weather1.webp",
        "/images/projectImg/WeatherApp/Weather2.webp",
        "/images/projectImg/WeatherApp/Weather3.webp"
    ],
    writeUp: {
        summary: [
          "Since Google exists in the address bar, the days of the Google homepage are no more. Needing something to replace it, I created my own home application that I originally hosted on my Raspberry Pi before I deployed it as a Github page for others to enjoy. The legacy version was simple; it gave the time at the moment of the search, the weather, and some general statistics that a thermostat would.",
          `A feature I enjoy about this application is the conditional backgrounds. Based on the current weather condition and time, the background will update to match the weather using a selection of images I've taken over the years.`,
          `I recreated the Weather app in early 2023 using React instead of JQuery. Utilizing React hooks, I was able to make the time self-updating as well as refresh its timer when a new locale was searched for (an issue I attempted to implement in the original design).`,
        ],
    },
    links: {
        demo: "https://localnewstv.github.io/weather-app",
        github: "https://github.com/LocalNewsTV/weather-app",
        legacy: "https://Localnewstv.github.io/WeatherApplication",
    },
  },
  /////////////
  {
    id: "chatClient",
    title: "Chat Client",
    tools: "Java, JavaGUI, NetBeans",
    sourceImage: [
        "/images/projectImg/ChatClient/ChatClient1.webp",
        "/images/projectImg/ChatClient/ChatClient2.webp",
        "/images/projectImg/ChatClient/ChatClient3.webp"
    ],
    writeUp: {
        summary: [
          "During my networking course, we learned about socket connections and network protocols. One of the examples we were given was Java sockets, and paired with making Java GUI applications in my SENG class, I created both a chat client and server that can be deployed on a local network.",
          `The client application stores messages locally in a queue to maintain a message history and reduce the need for large packages to be sent from the server. The server end of the application binds to any address usable by the host PC and stores a user-set password for authentication. The server also maintains a smaller message queue that is sent to new client connections.`
        ],
    },
    links: {
        github: "https://github.com/LocalNewsTV/ChatServerClient",
        //TODO:
        download: "",
    },
  },
  /////////////
  {
    id: "passwordHasher",
    title: "Password Hasher 2.0",
    tools: "ReactJS, ES6 JavaScript, Create-react-app",
    sourceImage: [
        "/images/projectImg/PasswordHasher/PasswordHasherNew1.webp",
        "/images/projectImg/PasswordHasher/PasswordHasherNew2.webp",
        "/images/projectImg/PasswordHasher/PasswordHasherOld.webp"
    ],
    writeUp: {
        summary: [
          "Making and managing passwords isn't many people's favourite thing. Bad passwords account for a large percentage of security breaches.",
          `No matter how good your security policies are, there will always be one employee considered a great risk, and so I created this one-way hashing algorithm for people who don't want to remember long, tedious passwords. The algorithm can take a generic password like "Password 1" and turn it into something more secure. It furthers its hashing by optionally allowing users to enter the site they're using the generic password for, giving a unique hash for each website.`,
        ],
    },
    links: {
        demo: "https://localnewstv.github.io/password-hasher",
        github: "https://github.com/LocalNewsTV/password-hasher",
        legacy: "https://localnewstv.github.io/PasswordGenerator",
    },
  },
  
  /////////////
  {
    id: "portfolioOld",
    title: "Portfolio 1.0",
    tools: "ES6 JavaScript, HTML/CSS, JQuery",
    sourceImage: [
        "/images/projectImg/PortfolioOld/PortfolioOld1.webp",
        "/images/projectImg/PortfolioOld/PortfolioOld2.webp",
        "/images/projectImg/PortfolioOld/PortfolioOld3.webp"
    ],
    writeUp: {
        summary: [
          "My original portfolio I created this portfolio over the summer of 2022 after completing my first year of the Information and Computer Systems programme at Camosun College.",
          `I'm proud of its design, having used photos taken from my roadtrip with my father to the Northwest Territories in July.`,
          `The original project was built using the languages I'd been taught in my first year. Now that I'm in my second year, I've found places to change and improve upon, so with fresh eyes and a new perspective, I improved on the original design utilizing ReactJS and NextJS.`
        ],
    },
    links: {
        demo: "https://localnewstv.github.io/old-portfolio",
        github: "https://github.com/LocalNewsTV/old-portfolio",
    },
  },
  /////////////
  {
    id: "pokeWeakness",
    title: "Pokemon Assistant",
    tools: "JQuery, ES6 JavaScript, CSS/HTML, PokeAPI",
    sourceImage: [
        "/images/projectImg/PokemonWeakness/PokemonWeakness1.webp",
        "/images/projectImg/PokemonWeakness/PokemonWeakness2.webp",
        "/images/projectImg/PokemonWeakness/PokemonWeakness3.webp"
    ],
    writeUp: {
        summary: [
          `I've been a fan of Pokemon since my infancy but haven't kept up with it much in the last decade or so.`,
          `Over summer vacation, I was lucky enough to get to play the Brilliant Diamon and Shining Pearl remakes of the 4th generation games with my partner, but with all the changes and new types over the years, I was having some difficulty remembering which pokemon were which types and their respective weaknesses.`,
          `Utilizing the PokeAPI, this web application grabs data for a specific Pokemon and displays both its types and all its weaknesses by iterating through an object I created mapping strengths and weaknesses.`

        ],
    },
    links: {
        demo: "https://localnewstv.github.io/PokeHelper",
        github: "https://github.com/LocalNewsTV/PokeHelper",
    },
  },
  /////////////
  {
    id: "blackjack",
    title: "Blackjack",
    tools: "ES6 JavaScript, JQuery, HTML/CSS",
    sourceImage: [
        "/images/projectImg/Blackjack/Blackjack1.webp",
        "/images/projectImg/Blackjack/Blackjack2.webp",
    ],
    writeUp: {
        summary: [
          `After completion of web scripting, I took time over the winter break to create a blackjack game for the browser.`,
          
          `The game follows the same rules as classic 21, with the dealer having the advantage in a push. Some challenges in the project were managing aces in the deck given that they can be high or low. On the top bar display, you can keep track of how many cards are in the deck, so users who enjoy counting cards can play higher stakes in pursuit of greater winnings.

          `
        ],
    },
    links: {
        demo: "https://localnewstv.github.io/BlackJack",
        github: "https://github.com/LocalNewsTV/BlackJack",
        legacy: "",
    },
  },

]
