import { useLocation } from "./LocationDataProvider.js"
import { Location } from "./Location.js"

export const LocationList = () =>{

const contentElement = document.querySelector(".locations")
const allLocations = useLocation()

for (const locactionObject of allLocations) {

    const locationHTML = Location(locactionObject)

 
// Add to the existing HTML in the content element
contentElement.innerHTML += locationHTML
// `
}

}

// export const FishList = () => {

// Get a reference to the `<article class="content">` element
    // const contentElement = document.querySelector(".fishList")
    // const allTheFish = useFish()