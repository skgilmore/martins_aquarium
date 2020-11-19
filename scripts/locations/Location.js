export const Location = (location) => {
return `
<section class="location">
<div><image class="location__image image--card" src="images/${location.image}" /></div>
<div class="location__name">${location.name}</div>
<div class="location__url">
    <a href="https://greatbarrierreef.com.au/fish/" alt="Webpage on the Great Barrier Reef"></a>
<div class="location__description">${location.description}</div>
</section>

`
}
// // <section class="fish card">
// <div><img  class="fish__image image--card" src="images/${fish.image}" /></div>
// <div class="fish__name">${fish.name}</div>
// <div class="fish__species">${fish.species}</div>
// <div class="fish__length">${fish.length}</div>
// <div class="fish__location">${fish.location}</div>
// <div class="fish__diet">${fish.diet}</div>
// </section>