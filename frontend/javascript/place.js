class Place {
  constructor(id, name, image, description, country_id) {
    this.id = id
    this.name = name
    this.image = image
    this.description = description
    this.country_id = country_id
  }


  renderPlace() {
    let countryId = document.querySelector('.country-sp').id

    if (this.country_id == countryId) {
    let placeWrapper = document.createElement('swiper-wrap')
    placeWrapper.classList.add('swipe-wrap')
    let swiper = document.createElement('div')
    swiper.classList.add('swipe-slide')
    let button = document.createElement('button')
    button.classList.add('dlte-plce')
    button.dataset.id = this.id
    button.addEventListener("click", Place.deletePlace)
    button.innerHTML = "<b>X</b>"
    let card = document.createElement('div')
    card.classList.add('plce-card')
    let placeSlider = document.createElement('div')
    placeSlider.classList.add('plce-sliderText')
    placeSlider.id = this.id
    let placeName = document.createElement('h3')
    placeName.innerText = this.name
    let content = document.createElement('div')
    content.classList.add('plce-content')
    let image = document.createElement('img')
    image.src = this.image
    let desc = document.createElement('div')
    desc.classList.add('plce-desc')
    let descCont = document.createElement('p')
    descCont.innerText = this.description


    placeSlider.appendChild(placeName)
    content.appendChild(image)
    desc.appendChild(descCont)
    card.appendChild(placeSlider)
    card.appendChild(content)
    card.appendChild(desc)
    swiper.appendChild(button)
    swiper.appendChild(card)
    placeWrapper.appendChild(swiper)
    document.body.append(placeWrapper)

     }


    }

    static deletePlace(event) {
       let id = null
       if (event.target.classList.contains('dlte-plce')) {
         id = parseInt(event.target.dataset.id)
       } else {
         id = parseInt(event.target.parentElement.dataset.id)
       }

       fetch(`${BASE_URL}/places/${id}`, {
         method: "DELETE"
       })

       event.target.nextElementSibling.remove()
       event.target.parentElement.remove()
       event.target.remove()
    }

}
