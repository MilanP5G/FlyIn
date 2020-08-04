class Place {
  constructor(country_id, name, image, description) {
    this.name = name
    this.image = image
    this.description = description
    this.country_id = country_id
  }

  

  renderPlace() {
    let placeWrapper = document.getElementById('swipe-wrap')

    let swiper = document.createElement('div')
    swiper.classList.add('swiper-slide')
    let button = document.createElement('button')
    button.classList.add('dlte-btn')
    button.dataset.id = this.id
    button.addEventListener("click", Place.deletePlace)
    button.innerHTML = "<b>X</b>"
    let card = document.createElement('div')
    card.classList.add('card')
    let slider = document.createElement('div')
    let placeName = document.createElement('h3')
    placeName.innerText = this.name
    let content = document.createElement('div')
    content.classList.add('content')
    let image = document.createElement('img')
    image.src = this.image

    slider.appendChild(placeName)
    content.appendChild(image)
    card.appendChild(slider)
    card.appendChild(content)
    swiper.appendChild(button)
    swiper.appendChild(card)
    placeWrapper.appendChild(swiper)

    }

    fetchPlaces(){
      fetch(`${BASE_URL}/places`)
      .then(resp => resp.json())
      .then(places => {
        for (const place of places){
          let plce = new Place(place.id, place.name, place.image_url, place.description)
          plce.renderPlace()
        }
      })
    }

}
