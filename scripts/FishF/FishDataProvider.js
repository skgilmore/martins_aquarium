const fishCollection = [
    {
        name:"Bart",
        diet: "crustaceans",
        length: 8,
        location: "Pacific Ocean",
        species: "whale",
        // insert a jpeg for image?//
        image: "whale.jpeg"
    },
    {
        name:"Kodi",
        diet: "Hotdogs",
        length: 4,
        location: "Restaurnt",
        species: "koi",
        // insert a jpeg for image?//
        image: "koifish.jpeg"
},
  {   
        name:"Dori",
        diet:"Fritos",
        length: 3,
        location: "Atlantic Ocean",
        species: "goldfish",
        // insert a jpeg for image?//
        image:"goldfish.jpeg"
  },
{
    
        name:"Ted",
        diet: "Pringles",
        length: 12,
        species: "catfish",
        location: "Grandpas Pond",
        // insert a jpeg for image?//
        image:"catfish.jpeg"
    },
]
export const useFish = () => {
    return fishCollection.slice()
}





export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []


    for (const fish  of fishCollection) {
    if (fish.length  %  3 === 0) {
        holyFish.push(fish)
    }

    }

    return holyFish
}

export const soldierFish = () => {
    const soldiers = []
    for (const fish of fishCollection) {
        if (fish.length %  5 === 0 && fish.length % 3 !== 0) {
        soldiers.push(fish)
    }
}
    // 5, 10, 15, 20, 25, etc... fish
    return soldiers
}

export const nonHolyFish = () => {
    const regularFish = []
    for (const fish of fishCollection) {
        if (fish.length %  3 !== 0  && fish.length % 5 !== 0) {
        regularFish.push(fish)
    }
}
    // Any fish not a multiple of 3 or 5
    return regularFish
}