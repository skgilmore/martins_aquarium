const locationCollection = [
    {
        name: "Great Barrier Reef",
        image: "greatbarrierreef.jpeg",
        url: "https://greatbarrierreef.com.au/fish/"

  
 
    },

    {
        name: "Grandpas Pond",
        image:"grandpaspond.jpeg"

    },

    {
        name: "Restaurant",
        image: "restaurant.jpeg"
    },

    {
        name: "Pacific Ocean",
        image: "pacificocean.jpeg"
    },

    {
        name: "Atlantic Ocean",
        image: "atlanticocean.jpeg"
    },
]
    
    export const useLocation= () => {
        return locationCollection.slice()
    }
    