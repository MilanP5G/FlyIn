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
  <button class="dlte-btn" data-id=${this.id} onclick="deleteCountry()" ><b>X</b></button>
  <div class="card" id="card">
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
