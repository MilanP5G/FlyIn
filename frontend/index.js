const BASE_URL = "http://localhost:3000"

document.addEventListener("DOMContentLoaded", () => {
  fetchCountries()
  addCountry()
  goHome()
})

function fetchCountries(){
  fetch(`${BASE_URL}/countries`)
  .then(resp => resp.json())
  .then(countries => {
    for (const country of countries){
      let cntry = new Country(country.id, country.name, country.image_url)
      cntry.renderCountry()
    }
  })
}

function addCountry(){
  let form = document.getElementById('country-form')

  form.innerHTML +=
  `
  <form class="form-section" id="country-form" action="index.html" method="post">
   <input type="text" name="name" id="c-name" placeholder="Country">
   <input type="file" name="image" id="c-image" accept="image/*">
   <input type="submit">
  </form>
  `
  form.addEventListener("submit", addCountrySubmit)
}

function addCountrySubmit(event){
  event.preventDefault()
  let formData = new FormData(event.target)


  fetch(`${BASE_URL}/countries`, {

    method: "POST",
    headers: {
      "Accept": "application/json"
    },
    body: formData
  })
  .then(resp => resp.json())
  .then(country => {
    let cntry = new Country(country.id, country.name, country.image_url)
    cntry.renderCountry()
  })

}

function deleteCountry() {
   let countryId = parseInt(event.target.dataset.id)

   fetch(`${BASE_URL}/countries/${countryId}`, {
     method: "DELETE"
   })

   this.location.reload()
}

function goHome() {
  let mainLogo =  document.getElementById('main-logo').addEventListener("click", () => {
    this.location.reload()
  })
}

function newPlace() {
  let placeForm = document.createElement('form')

  placeForm.innerHTML +=
  `
  <form class="place-form" id="form-place" action="index.html" method="post">
   <input type="text" name="name" id="p-name" placeholder="Place name">
   <input type="text" name="description" id="p-desc" placeholder="Articulate your experience...">
   <input type="file" name="image" id="p-image" accept="image/*">
   <input type="submit">
  </form>
  `
  document.body.appendChild(placeForm)
  // placeForm.addEventListener("submit", addPlaceSubmit)
}
