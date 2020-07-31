class Country {
  constructor(id, name, image){
    this.id = id
    this.name = name
    this.image = image
  }

renderCountry() {
  let countryWrapper = document.getElementById('swipe-wrap')

  countryWrapper.innerHTML +=
  `
  <div class="swiper-slide">
  <div class="card" id="card">
  <button class="dlte-btn" data-id=${this.id} onclick="deleteCountry()" >X</button>
    <div class="sliderText" id="sliderText">
      <h3>${this.name}</h3>
    </div>
    <div class="content" id="img-content">
      <img src=${this.image}>
    </div>
  </div>
  </div>
  `
  }
}
