const fishCollection = [
    {
        name:"Bart",
        diet: "crustaceans",
        length: 8,
        location: "Pacific Ocean",
        species: "",
        // insert a jpeg for image?//
        image:""
    },
    {
        name:"Kodi",
        diet: "Hotdogs",
        length: 4,
        location: "Restaurnt",
        species: "koi",
        // insert a jpeg for image?//
        image:""
},
  {   
        name:"Dori",
        diet:"Fritos",
        length: 3,
        location: "Atlantic Ocean",
        species: "goldfish",
        // insert a jpeg for image?//
        image:""
  },
{
    
        name:"Ted",
        diet: "Pringles",
        length: 12,
        species: "catfish",
        // insert a jpeg for image?//
        image:""
    },
]
export const useFish = () => {
    return fishCollection.slice()
}