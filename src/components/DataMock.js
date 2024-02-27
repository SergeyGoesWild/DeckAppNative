const decksData = [
  {
    name: "Fire",
    id: 0,
    avatar: require("../../assets/fire.png"),
    deckContent: [
      {
        id: "base2-1",
        localId: "1",
        name: "Clefable",
        image: "https://assets.tcgdex.net/en/base/base2/1",
      },
      {
        id: "base5-1",
        localId: "1",
        name: "Dark Alakazam",
        image: "https://assets.tcgdex.net/en/base/base5/1",
      },
      {
        id: "basep-1",
        localId: "1",
        name: "Pikachu",
        image: "https://assets.tcgdex.net/en/base/basep/1",
      },
      {
        id: "bw1-1",
        localId: "1",
        name: "Snivy",
        image: "https://assets.tcgdex.net/en/bw/bw1/1",
      },
      {
        id: "tk-bw-e-1",
        localId: "1",
        name: "Lillipup",
      },
      {
        id: "tk-bw-z-1",
        localId: "1",
        name: "Purrloin",
      },
      {
        id: "tk-sm-l-1",
        localId: "1",
        name: "Caterpie",
      },
      {
        id: "tk-xy-b-1",
        localId: "1",
        name: "Fletchling",
      },
      {
        id: "pop4-1",
        localId: "1",
        name: "Chimecho δ",
        image: "https://assets.tcgdex.net/en/pop/pop4/1",
      },
      {
        id: "pop5-1",
        localId: "1",
        name: "Ho-Oh",
        image: "https://assets.tcgdex.net/en/pop/pop5/1",
      },
      {
        id: "pop6-1",
        localId: "1",
        name: "Bastiodon",
        image: "https://assets.tcgdex.net/en/pop/pop6/1",
      },
      {
        id: "pop7-1",
        localId: "1",
        name: "Ampharos",
        image: "https://assets.tcgdex.net/en/pop/pop7/1",
      },
      {
        id: "pop8-1",
        localId: "1",
        name: "Heatran",
        image: "https://assets.tcgdex.net/en/pop/pop8/1",
      },
      {
        id: "pop9-1",
        localId: "1",
        name: "Garchomp",
        image: "https://assets.tcgdex.net/en/pop/pop9/1",
      },
      {
        id: "sv03.5-001",
        localId: "001",
        name: "Bulbasaur",
        image: "https://assets.tcgdex.net/en/sv/sv03.5/001",
      },
      {
        id: "sv03-001",
        localId: "001",
        name: "Oddish",
        image: "https://assets.tcgdex.net/en/sv/sv03/001",
      },
      {
        id: "sv02-001",
        localId: "001",
        name: "Hoppip",
        image: "https://assets.tcgdex.net/en/sv/sv02/001",
      },
      {
        id: "sv04-001",
        localId: "001",
        name: "Surskit",
        image: "https://assets.tcgdex.net/en/sv/sv04/001",
      },
      {
        id: "sv01-001",
        localId: "001",
        name: "Pineco",
        image: "https://assets.tcgdex.net/en/sv/sv01/001",
      },
      {
        id: "sm3-1",
        localId: "1",
        name: "Caterpie",
        image: "https://assets.tcgdex.net/en/sm/sm3/1",
      },
      {
        id: "sm7-1",
        localId: "1",
        name: "Bellsprout",
        image: "https://assets.tcgdex.net/en/sm/sm7/1",
      },
      {
        id: "sm12-1",
        localId: "1",
        name: "Venusaur & Snivy GX",
        image: "https://assets.tcgdex.net/en/sm/sm12/1",
      },
      {
        id: "sm4-1",
        localId: "1",
        name: "Weedle",
        image: "https://assets.tcgdex.net/en/sm/sm4/1",
      },
      {
        id: "det1-1",
        localId: "1",
        name: "Bulbasaur",
        image: "https://assets.tcgdex.net/en/sm/det1/1",
      },
      {
        id: "sm7.5-1",
        localId: "1",
        name: "Charmander",
      },
      {
        id: "sm6-1",
        localId: "1",
        name: "Exeggcute",
        image: "https://assets.tcgdex.net/en/sm/sm6/1",
      },
      {
        id: "sm2-1",
        localId: "1",
        name: "Bellsprout",
        image: "https://assets.tcgdex.net/en/sm/sm2/1",
      },
      {
        id: "sm115-1",
        localId: "1",
        name: "Caterpie",
        image: "https://assets.tcgdex.net/en/sm/sm115/1",
      },
      {
        id: "sm8-1",
        localId: "1",
        name: "Tangela",
        image: "https://assets.tcgdex.net/en/sm/sm8/1",
      },
      {
        id: "sm3.5-1",
        localId: "1",
        name: "Bulbasaur",
      },
      {
        id: "sm1-1",
        localId: "1",
        name: "Caterpie",
        image: "https://assets.tcgdex.net/en/sm/sm1/1",
      },
      {
        id: "sm9-1",
        localId: "1",
        name: "Celebi & Venusaur GX",
        image: "https://assets.tcgdex.net/en/sm/sm9/1",
      },
      {
        id: "sm5-1",
        localId: "1",
        name: "Exeggcute",
        image: "https://assets.tcgdex.net/en/sm/sm5/1",
      },
      {
        id: "sm10-1",
        localId: "1",
        name: "Pheromosa & Buzzwole GX",
        image: "https://assets.tcgdex.net/en/sm/sm10/1",
      },
      {
        id: "sm11-1",
        localId: "1",
        name: "Rowlet & Alolan Exeggutor GX",
        image: "https://assets.tcgdex.net/en/sm/sm11/1",
      },
      {
        id: "swsh10-001",
        localId: "001",
        name: "Beedrill V",
        image: "https://assets.tcgdex.net/en/swsh/swsh10/001",
      },
      {
        id: "swsh5-1",
        localId: "1",
        name: "Bellsprout",
        image: "https://assets.tcgdex.net/en/swsh/swsh5/1",
      },
      {
        id: "swsh9-001",
        localId: "001",
        name: "Exeggcute",
        image: "https://assets.tcgdex.net/en/swsh/swsh9/001",
      },
      {
        id: "cel25-1",
        localId: "1",
        name: "Ho-Oh",
        image: "https://assets.tcgdex.net/en/swsh/cel25/1",
      },
      {
        id: "swsh3.5-1",
        localId: "1",
        name: "Venusaur V",
        image: "https://assets.tcgdex.net/en/swsh/swsh3.5/1",
      },
      {
        id: "swsh6-1",
        localId: "1",
        name: "Weedle",
        image: "https://assets.tcgdex.net/en/swsh/swsh6/1",
      },
      {
        id: "swsh12.5-001",
        localId: "001",
        name: "Oddish",
        image: "https://assets.tcgdex.net/en/swsh/swsh12.5/001",
      },
      {
        id: "swsh3-1",
        localId: "1",
        name: "Butterfree V",
        image: "https://assets.tcgdex.net/en/swsh/swsh3/1",
      },
      {
        id: "swsh7-1",
        localId: "1",
        name: "Pinsir",
        image: "https://assets.tcgdex.net/en/swsh/swsh7/1",
      },
      {
        id: "swsh8-1",
        localId: "1",
        name: "Caterpie",
        image: "https://assets.tcgdex.net/en/swsh/swsh8/1",
      },
      {
        id: "swsh11-001",
        localId: "001",
        name: "Oddish",
        image: "https://assets.tcgdex.net/en/swsh/swsh11/001",
      },
      {
        id: "fut2020-1",
        localId: "1",
        name: "Pikachu on the Ball",
        image: "https://assets.tcgdex.net/en/swsh/fut2020/1",
      },
      {
        id: "swsh10.5-001",
        localId: "001",
        name: "Bulbasaur",
        image: "https://assets.tcgdex.net/en/swsh/swsh10.5/001",
      },
      {
        id: "swsh2-1",
        localId: "1",
        name: "Caterpie",
        image: "https://assets.tcgdex.net/en/swsh/swsh2/1",
      },
      {
        id: "swsh4.5-1",
        localId: "1",
        name: "Yanma",
        image: "https://assets.tcgdex.net/en/swsh/swsh4.5/1",
      },
      {
        id: "swsh12-001",
        localId: "001",
        name: "Venonat",
        image: "https://assets.tcgdex.net/en/swsh/swsh12/001",
      },
      {
        id: "swsh1-1",
        localId: "1",
        name: "Celebi V",
        image: "https://assets.tcgdex.net/en/swsh/swsh1/1",
      },
      {
        id: "swsh4-1",
        localId: "1",
        name: "Weedle",
        image: "https://assets.tcgdex.net/en/swsh/swsh4/1",
      },
      {
        id: "tk-ex-latia-1",
        localId: "1",
        name: "Bagon",
      },
      {
        id: "tk-ex-latio-1",
        localId: "1",
        name: "Electrike",
      },
      {
        id: "tk-ex-n-1",
        localId: "1",
        name: "Arcanine",
      },
    ],
  },
  {
    name: "Electro",
    id: 1,
    avatar: require("../../assets/elec.png"),
    deckContent: [
      {
        id: "basep-1",
        localId: "1",
        name: "Pikachu",
        image: "https://assets.tcgdex.net/en/base/basep/1",
      },
      {
        id: "pop5-1",
        localId: "1",
        name: "Ho-Oh",
        image: "https://assets.tcgdex.net/en/pop/pop5/1",
      },
      {
        id: "pop9-1",
        localId: "1",
        name: "Garchomp",
        image: "https://assets.tcgdex.net/en/pop/pop9/1",
      },
    ],
  },
  {
    name: "Plant",
    id: 2,
    avatar: require("../../assets/plant.png"),
    deckContent: [
      {
        id: "bw5-1",
        localId: "1",
        name: "Bulbasaur",
        image: "https://assets.tcgdex.net/en/bw/bw5/1",
      },
      {
        id: "bw2-1",
        localId: "1",
        name: "Pansage",
        image: "https://assets.tcgdex.net/en/bw/bw2/1",
      },
    ],
  },
];

export default decksData;