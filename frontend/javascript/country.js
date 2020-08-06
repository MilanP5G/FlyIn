class Country {
  constructor(id, name, image){
    this.id = id
    this.name = name
    this.image = image
  }

renderCountry() {
  let countryWrapper = document.getElementById('swipe-wrap')

  let swiper = document.createElement('div')
  swiper.classList.add('swiper-slide')
  let button = document.createElement('button')
  button.classList.add('dlte-btn')
  button.dataset.id = this.id
  button.addEventListener("click", Country.deleteCountry)
  button.innerHTML = "<b>X</b>"
  let card = document.createElement('div')
  card.classList.add('card')
  let slider = document.createElement('div')
  slider.classList.add('sliderText')
  slider.id = this.id
  slider.addEventListener("click", (e) => {
    let id = null
    if (e.target.classList.contains('sliderText')) {
      id = e.target.id
    } else {
      id = e.target.parentElement.id
    }
    fetch (`${BASE_URL}/countries/${id}`)
    .then(resp => resp.json())
    .then(country => Country.countryShowPage(country))
  })
  let countryName = document.createElement('h3')
  countryName.innerText = this.name
  let content = document.createElement('div')
  content.classList.add('content')
  let image = document.createElement('img')
  image.src = this.image

  slider.appendChild(countryName)
  content.appendChild(image)
  card.appendChild(slider)
  card.appendChild(content)
  swiper.appendChild(button)
  swiper.appendChild(card)
  countryWrapper.appendChild(swiper)

  }

  static countryShowPage(object) {
    let container = document.querySelector('.swiper-container')
    container.style.display = "none"
    let form = document.querySelector('.form-section')
    form.style.display = "none"
    let countrySP = document.createElement('div')
    countrySP.id = object.id
    countrySP.classList.add('country-sp')
    let heading = document.createElement('h1')
    heading.classList.add('country-name')
    heading.innerText = object.name

    let addBtn = document.createElement('button')
    addBtn.classList.add('place-button')
    addBtn.innerText = "Add Place"
    let swiper = document.querySelector('.swipe-slide')
    // console.log(swiper)
    let header = document.getElementById('cont-header')
    header.appendChild(addBtn)
    countrySP.appendChild(heading)
    header.appendChild(countrySP)
    addBtn.addEventListener("click", () => {
      newPlace()
    })
    fetchPlaces()

  }


  static deleteCountry(event) {

     let id = null
     if (event.target.classList.contains('dlte-btn')) {
       id = parseInt(event.target.dataset.id)
     } else {
       id = parseInt(event.target.parentElement.dataset.id)
     }

     fetch(`${BASE_URL}/countries/${id}`, {
       method: "DELETE"
     })
     .then(resp => resp.json())

     document.location.reload()
  }


}
