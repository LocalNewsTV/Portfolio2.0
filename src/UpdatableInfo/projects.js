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
// https://github.com/LocalNewsTV/InClass-ICS223
export const projects = [

  /////////////
  {
    id: "",
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
          "",
        ],
    },
    links: {
        github: "https://github.com/LocalNewsTV/Swift-Inventory-App",
    },
  },
  /////////////
  {
    id: "platformer",
    title: "Unity Platformer",
    tools: "C#, Unity",
    sourceImage: [
        "/images/projectImg/MiniPlatformer/Platformer1.webp",
        "/images/projectImg/MiniPlatformer/Platformer2.webp",
        "/images/projectImg/MiniPlatformer/Platformer3.webp"
    ],
    writeUp: {
        summary: [
          "",
        ],
    },
    links: {
        github: "https://github.com/LocalNewsTV/InClass-ICS223",
        //TODO:
        download: "",
    },
  },
    /////////////
    {
      id: "fps",
      title: "Unity First Person Shooter",
      tools: "C#, Unity",
      sourceImage: [
          "/images/projectImg/fps/fps1.webp",
          "/images/projectImg/fps/fps2.webp",
          "/images/projectImg/fps/fps3.webp"
      ],
      writeUp: {
          summary: [
            "Currently a work in progress in my Gaming and Graphics Concepts course, we are working on Creating a First Person Shooter style game to introduce us to using the Unity Engine",
            `The Game implementation uses a small map that spawns some Enemy characters that wander around using SphereCasting to avoid collisions with the walls, and fire 'lasers' at the player character. The Player character shoots using Raycasting bullets to take down the enemy.`,
            `Note: You will need to Alt+F4 to exit.`
          ],
      },
      links: {
          github: "https://github.com/LocalNewsTV/ICS223-FPS",
          download: "https://drive.google.com/drive/folders/1ZiRpXBVw27qUyBiwAbNHSr9OrOHHdi8o?usp=share_link",
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
          "A classic project from a starting developer. I created the todo list near the end of my semester when I was taking a database management course at Camosun College",

          `This application utilizes the MERN Stack in its design, for its application I host the build and Express server off my Raspberri Pi at home so serve as my connection my MongoDB cluster. The demo provided below doesn't have access to my database, but with some additional coding, I have implemented an 'offline' mode for you to use its functionality`
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
          "Since google exists in the address bar, the days of the google homepage are no more. Needing something to replace it, I created my own home application that I originally hosted on my Raspberry Pi before I deployed it as a Github page for others to enjoy. The legacy version was simple, it gave the time at the moment of the search, the weather and some general stats that a thermostat would.",
          `A feature I enjoy about this application is the conditional backgrounds, based on current weather condition and time, The background will update to match the mood from a selection of images I've taken over the years.`,
          `I recreated the Weather app in early 2023 using React instead of JQuery, utilizing React hooks I was able to make the time self updating, as well as refresh its time a new locale was searched for (An issue I attempted to implement in the original design)`,
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
          "During my Networking course we learned about socket connections and network protocols. One of the examples we were given was Java sockets, and paired with making Java GUI applications in my SENG class, I created both a chat client and server that can be deployed on a local network",
          `The client application stores messages locally in a queue to maintain a message history, and reduce the need for large packages being sent from the server. The server end of the application binds to any address usable by the host PC, and stores a user set password for authentication. The server also maintains a smaller message queue that is sent to new client connections`
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
          "Making and managing passwords isn't many peoples favourite thing. Bad passwords count for a large percentage of security breaches.",
          `No matter how good your security policies, there will always be one employee considered a great risk, and so I created this one way hashing algorithm for people who don't want to rememeber long tedious passwords. The algorithm can take a generic password like 'Password1' and turn it into something more secure. It furthers its hashing by optionally allowing users to enter the site they're using the generic password for, giving a unique hash for each website.`,
          `I'm not trying to solve the security crisis, and I don't consider this high safety, but for users with bad passwords out of convenience, I hope this can help.`
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
          "My original portfolio. I created this portfolio over the Summer of 2022 after completing my first year of the Information & Computer Systems program at Camosun College.",
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
          `I've been a fan of Pokemon since my infancy but haven't been keeping up with it much in the last decade or so.`,
          `Over summer vacation I was lucky enough to get to play the Brilliant Diamon / Shining Pearl remakes of the 4th generation games with my partner, but with all the changes and new types over the years, I was having some difficulty remembering which pokemon were which types, and the respective weaknesses.`,
          `Utilizing the PokeAPI, this web application grabs data for a specific Pokemon and displays both its types, and all its weaknesses by iterating through an object I created mapping strengths and weaknesses.`

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
          `After completion of Web Scripting, I took time over the winter break to create a blackjack game for the browser`,
          
          `The game follows the same rules as classic 21, with the dealer having advantage in a push. Some challenges in the project were managing aces in the deck given that they can be high or low. On the top bar display you can keep track of how many cards are in the deck, so users who enjoy counting cards can play higher stakes in pursuit of greater winnings. `
        ],
    },
    links: {
        demo: "https://localnewstv.github.io/BlackJack",
        github: "https://github.com/LocalNewsTV/BlackJack",
        legacy: "",
    },
  },
  /////////////
  {
    id: "iCS228Final",
    title: "ICS228 Final",
    tools: "JQuery, ES6 JavaScript, HTML/CSS, Bootstrap, FakeStoreAPI",
    sourceImage: [
        "/images/projectImg/128Final/128final1.webp",
        "/images/projectImg/128Final/128final2.webp",
        "/images/projectImg/128Final/128final3.webp"
    ],
    writeUp: {
        summary: [
          `Culiminating the skills learned from a semester of Web Scripting, The final project consisted of creating a mobile responsive web application to simulate an Online Shopping experience.`,
          
          `User Information was handled with a form that does client side regex parsing to ensure accuracy before being sent off. Along with some custom made products, Store Inventory is passed in from an API request to the 'Fake Store API', then arranged into cards using Bootstrap.`
        ],
    },
    links: {
        demo: "https://localnewstv.github.io/128Final-FakeStoreFront",
        github: "https://github.com/LocalNewsTV/128Final-FakeStoreFront",
    },
  },
  /////////////
  {
    id: "",
    title: "Browser Combat Simulator",
    tools: "ES6 JavaScript",
    sourceImage: [
        "/images/projectImg/CombatSimulator/CombatSimulator1.webp",
        "/images/projectImg/CombatSimulator/CombatSimulator2.webp"
    ],
    writeUp: {
        summary: [
          `This is one of the first projects I completed outside of school since starting the ICS program at Camosun College. I created Browser Combat Simulator over the reading break after learning about ES6 Classes in my Web Scripting Class, and decided to play around with class interactions.`,

          `The purpose of the project was to further my understanding of ES6 classes and Inheritance. Nostalgic of earlier eras of video games like Kingdom of Loathing, I created this text adventure where you fight a "Gremelkin" [Archaic Term for Cat].`
        ],
    },
    links: {
        demo: "https://localnewstv.github.io/BrowserCombatSimulator",
        github: "https://github.com/LocalNewsTV/BrowserCombatSimulator",
    },
  },
]