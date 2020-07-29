const BASE_URL = "http://localhost:3000/"

document.addEventListener("DOMContentLoaded", () => {
  fetchCountries()
  addCountry()
  // chosenCountry()
})

function fetchCountries(){
  fetch(`${BASE_URL}/countries`)
  .then(resp => resp.json())
  .then(countries => {
    for (const country of countries){
      let cntry = new Country(country.id, country.name, country.image)
      cntry.renderCountry()
    }
  })
}

function addCountry(){
  let form = document.getElementById('country-form')

  form.innerHTML +=
  `
  <form class="form-section" id="country-form" action="index.html" method="post">
   <input type="text" id="c-name" placeholder="Country">
   <input type="text" id="c-image" placeholder="Image address">
   <input type="submit">
  </form>
  `
  form.addEventListener("submit", addCountrySubmit)
}

function addCountrySubmit(){
  event.preventDefault()
  let countryName = document.getElementById('c-name').value
  let countryImage = document.getElementById('c-image').value


  let country = {
    name: countryName,
    image: countryImage
  }

  fetch(`${BASE_URL}/countries`, {

    method: "POST",
    headers: {
      "Content-type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(country)
  })
  .then(resp => resp.json())
  .then(country => {
    let cntry = new Country(country.id, country.name, country.image)
    cntry.renderCountry()
  })

}

// function chooseCountry() {
//   let countryCard = document.getElementById('swipe-wrap')
//   countryCard.addEventListener('click', chosenCountry)
// }
