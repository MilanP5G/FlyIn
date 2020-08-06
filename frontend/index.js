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
  <form class="form-section" id="cntry-form" action="index.html" method="post">
   <input type="text" name="name" id="c-name" placeholder="Country">
   <input type="file" name="image" class="cntry-img" id="c-image" accept="image/*">
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
    swiper.update()
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

function fetchPlaces(){
  fetch(`${BASE_URL}/places`)
  .then(resp => resp.json())
  .then(places => {
    for (const place of places){
      let plce = new Place(place.id, place.name, place.image_url, place.description, place.country_id)
      let form = document.querySelector('.placeForm-div')
      form.style.display = "none"
      plce.renderPlace()
    }
  })
}

function newPlace() {
  let swiper = document.querySelectorAll(".swipe-wrap")
  for (let i = 0; i < swiper.length; i++)
    swiper[i].style.display = "none"
  let placeForm = document.querySelector(".placeForm-div")
  placeForm.style.display = "block"

  if (placeForm.childElementCount === 0) {

  placeForm.style.display = "block"
  placeForm.innerHTML +=
  `
  <form class="place-form" id="form-place" action="index.html" method="post">
   <input type="text" name="name" id="p-name" placeholder="Place name">
   <input type="text" name="description" id="p-desc" placeholder="Articulate your experience...">
   <input type="file" name="image" id="p-image" accept="image/*">
   <input type="submit">
  </form>
  `
  placeForm.addEventListener("submit", addPlaceSubmit)
 }
}

function addPlaceSubmit(event) {
  event.preventDefault()
  let formData = new FormData(event.target)
  let countryId = document.querySelector('.country-sp').id
  formData.append("countryId", countryId)
  document.getElementById('form-place').reset()

  fetch(`${BASE_URL}/places`, {

    method: "POST",
    headers: {
      "Accept": "application/json"
    },
    body: formData

  })
  .then(resp => resp.json())
  .then(place => {
    let plce = new Place(place.id, place.name, place.image_url, place.description, place.country_id)
    fetchPlaces()
  })
}
