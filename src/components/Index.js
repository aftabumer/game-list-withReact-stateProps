import React, { Component } from "react";
import Card from "./Card";

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      games: [
        {
          name: "CSGO",
          description:
            "Counter-Strike: Global Offensive is a multiplayer first-person shooter video game developed by Hidden Path Entertainment and Valve Corporation.",
          image: require("./img/csgo.jpg")
        },
        {
          name: "PUBG",
          description:
            "PlayerUnknown's Battlegrounds is an online multiplayer battle royale game developed and published by PUBG Corporation, a subsidiary of South Korean video game company Bluehole.",
          image: require("./img/pubg.jpg")
        },
        {
          name: "GTA V",
          description:
            "Grand Theft Auto V is an action-adventure video game developed by Rockstar North and published by Rockstar Games. It was released in September 2013 for PlayStation 3 and Xbox 360,",
          image: require("./img/gta.jpg")
        },
        {
          name: "FORTNITE",
          description:
            "Fortnite is an online video game developed by Epic Games and released in 2017. It is available in three distinct game mode versions that otherwise share the same general gameplay and game engine",
          image: require("./img/fortnite.jpg")
        },
        {
          name: "APEX LEAGEND",
          description:
            "Apex Legends is a free-to-play battle royale game developed by Respawn Entertainment and published by Electronic Arts. It was released for Microsoft Windows, PlayStation 4, and Xbox One",
          image: require("./img/apex.jpg")
        },
        {
          name: "OVER WATCH",
          description:
            "Overwatch is a team-based multiplayer first-person shooter developed and published by Blizzard Entertainment and released on May 24, 2016 for PlayStation 4, Xbox One, and Windows.",
          image: require("./img/overwatch.jpeg")
        },
        {
          name: "DOTA 2",
          description:
            "Dota 2 is a multiplayer online battle arena video game developed and published by Valve Corporation. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III: Reign of Chaos and its expansion pack, The Frozen Throne.",
          image: require("./img/dota.jpg")
        },
        {
          name: "CYBER PUNK 2070",
          description:
            "Cyberpunk 2077 is an upcoming role-playing video game developed and published by CD Projekt, releasing for Microsoft Windows, PlayStation 4, and Xbox One on 16 April 2020.",
          image: require("./img/cyber.jpg")
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <Card game={this.state.games} />

        {/* <ul>
            {this.state.games.map((item, i) => (
                <li key={i}>
                    Game Name: {item.name}
                    <br />
                     The game detail is {item.description}
                     <br />
                    {item.image=require("./img/csgo.jpg")}
                </li>
            ))}
        </ul> */}
      </div>
    );
  }
}
export default Index;

//   image={require("./img/csgo.jpg")}
//   name={"CounterStrick (Globle Ofensive)"}
//   description={
//     "Counter-Strike: Global Offensive (CS: GO) expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago. CS: GO features new maps, characters, weapons, and game modes, and delivers updated versions of the classic CS content (de_dust2, etc.)."
//   }
