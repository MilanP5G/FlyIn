class Place {
  constructor(id, name, image, description, country_id) {
    this.id = id
    this.name = name
    this.image = image
    this.description = description
    this.country_id = country_id
  }


  renderPlace() {
    let form = document.querySelector('.place-form')
    form.style.display = "none"

    let placeWrapper = document.createElement('swiper-wrap')

    let swiper = document.createElement('div')
    swiper.classList.add('swipe-slide')
    let button = document.createElement('button')
    button.classList.add('dlte-plce')
    button.dataset.id = this.id
    button.addEventListener("click", Place.deletePlace)
    button.innerHTML = "<b>X</b>"
    let card = document.createElement('div')
    card.classList.add('plce-card')
    let slider = document.createElement('div')
    let placeName = document.createElement('h3')
    placeName.innerText = this.name
    let content = document.createElement('div')
    content.classList.add('plce-content')
    let image = document.createElement('img')
    image.src = this.image

    slider.appendChild(placeName)
    content.appendChild(image)
    card.appendChild(slider)
    card.appendChild(content)
    swiper.appendChild(button)
    swiper.appendChild(card)
    placeWrapper.appendChild(swiper)
    document.body.append(placeWrapper)

    }

    static deleteCountry(event) {

       let id = null
       if (event.target.classList.contains('dlte-plce')) {
         id = parseInt(event.target.dataset.id)
       } else {
         id = parseInt(event.target.parentElement.dataset.id)
       }

       fetch(`${BASE_URL}/places/${id}`, {
         method: "DELETE"
       })
       .then(resp => resp.json())

       document.location.reload()
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
