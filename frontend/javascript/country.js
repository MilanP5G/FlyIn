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
  button.addEventListener("click", deleteCountry)
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
    fetch (`${BASE_URL}/countries/${id}`
      

    )
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


  // countryWrapper.innerHTML +=
  // `
  // <div class="swiper-slide">
  // <button class="dlte-btn" data-id=${this.id} onclick="deleteCountry()" ><b>X</b></button>
  // <div class="card" id="card">
  //   <div class="sliderText" id="sliderText">
  //     <h3>${this.name}</h3>
  //   </div>
  //   <div class="content" id="img-content">
  //     <img src=${this.image}>
  //   </div>
  // </div>
  // </div>
  // `
  }
}
