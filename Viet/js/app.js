const $1 = document.querySelector.bind(document);
const $2 = document.querySelectorAll.bind(document);

const packagesCards = $2('.packages-cards')
const tabCards = $1('.tabs-card')
const changePrice = $1('.progress-value')
const priceValue = $1('.price-value')
const priceTrackValue = $1('.progress-price-track')

const tabCardItems = $2('.tab-card-item')

const app = {
  cards: JSON.parse(localStorage.getItem(CARDS_STORAGE_KEY) || '[]'),

  html([first, ...string], ...values) {
    return values.reduce(
        (acc, cur) => acc.concat(cur, string.shift())
        , [first]
    )
    .filter(x => x && x !== true || x === 0)
    .join('')       
  },

  renderCards() {
    packagesCards.forEach((packagesCard, packagesCardIndex) => {
      packagesCard.innerHTML = app.html`
        ${this.cards.map((card, cardIndex)=> {    
          if(packagesCardIndex == 0 || (packagesCardIndex >= 1 && cardIndex < 3))
            return app.html`
            <div class="card-item">
              <div class="img-card">
              ${card.sale && app.html`
                <p class="sale br-30">${card.sale}</p>              
              `}
                <img class="img-fluid" src="${card.img}" alt="">
                <div class="brand" style="background: ${card.colorBrand}">
                  <div class="position-relative w-100 h-100">
                    <img class="" src="${card.imgIcon}" alt="" class="card-icon">
                  </div>
                </div>
              </div>
              <div class="container-card">        
                <div class="title-card">
                  <h2 class="place">${card.place}</h2>
                  <div class="located flex-center mb-20">
                    <img src="img/icon-pin-grey.png" alt="icon-locate">
                    <p>${card.located}</p>
                  </div>
                </div>  
                <div class="contain-card flex-center">
                  <div class="introduce">
                    <p class="text-uppercase filed-1">${card.filed1}</p>
                    <div class="flex-center">
                      <p class="text-uppercase filed-2">${card.filed2}</p>
                      <p class="add-1 br-30" style="background: ${card.colorBtn}">+1</p>
                    </div>
                  </div>
                  ${card.priceOld && app.html`
                    <div class="priceSaled d-flex">
                      <p class="price-old"><del>${card.priceOld}</del></p>
                      <div class="price">${card.price}</div>
                    </div>
                  `}
                  ${!card.priceOld && app.html`
                    <div class="price">${card.price}</div>
                  `}
                </div>  
                
                <p class="card-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut efficitur ante. Donec dapibus dictum scelerisque.
                </p>
                
                <button class="btn-detail br-30 text-uppercase" style="background-color: ${card.colorBtn}">detail</button>

              </div>
            </div>   
            `           
        })}    
      `
    })
    
  },

  renderTabCards() {
    tabCards.innerHTML = app.html`
      ${this.cards.map((card, index) => {
        return app.html`
        <div class="tab-card-item d-none">
          <div class="tab-header" style="background: url('img/tabs-img/tab-img-1.jpg') center center /cover no-repeat">
            <div class="tab-title">${card.place}</div>
            <div class="place-time flex-center">
              <p class="location text-uppercase">
                <img src="img/icon-pin-white.png" alt="">
                ${card.located}
              </p>
              <p class="time text-uppercase">
                <img src="img/icon-time-white.png" alt="">
                3 - 6 days
              </p>
            </div>
          </div>
    
          <div class="tab-container">
            <div class="d-flex pb-60">
              <div class="part-left">
                <div class="part-left-header flex-center">
                  <div class="box-header-item flex-center">
                    <img src="img/tabs-icon/icon-typologies-greydark.png" alt="">
                    <div class="text">
                      <p class="text-item-1">
                        TYPOLOGIES
                      </p>
                      <p class="text-item-2">
                        Cultural
                        <span class="add-2 br-30" style="background: ${card.colorBtn}">+2</span>
                      </p>
                    </div>
                  </div>
                  <div class="box-header-item flex-center">
                    <img src="img/tabs-icon/icon-battery-greydark.png" alt="">
                    <div class="text">
                      <p class="text-item-1">
                        DIFFICULTY
                      </p>
                      <p class="text-item-2">
                        Medium
                      </p>
                    </div>
                  </div>
                  <div class="box-header-item flex-center">
                    <img src="img/tabs-icon/icon-minage-greydark.png" alt="">
                    <div class="text">
                      <p class="text-item-1">
                        MIN. AGE
                      </p>
                      <p class="text-item-2">
                        3 Years
                      </p>
                    </div>
                  </div>
                </div>
      
                <iframe frameborder="0" src="https://www.google.com/maps/d/u/1/embed?mid=1b9ry5Sg2H7gaJw2jRhUJDNXYcbFjCfW2" width="100%" height="481"></iframe>
              
                <div class="box-btn-option">
                  <button class="btn-op btn-des btn-active" style="background: ${card.colorBtn}">description</button>
                  <button class="btn-op btn-map">map</button>
                  <button class="btn-op btn-photo">photos</button>
                  <button class="btn-op btn-program">program</button>
                </div>
      
                <div class="amazing-experience">
                  <div class="title-section">
                    Amazing Experience
                  </div>
                  <p class="mb-20">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut venenatis lorem. Nunc sodales interdum rhoncus. <u>Nulla a leo finibus</u>, ullamcorper lorem vel, scelerisque massa. Vivamus leo dui, interdum non fermentum eget, laoreet ac lorem. Aliquam a ultricies nisl. Nulla consequat lobortis urna sed cursus.
                  </p>
      
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut venenatis lorem. Nunc sodales interdum rhoncus. Nulla a leo finibus, ullamcorper lorem vel, scelerisque massa. Vivamus leo dui, interdum non fermentum eget, <i>laoreet ac lorem</i>. Aliquam a ultricies nisl. Nulla consequat lobortis urna sed cursus.
                  </p>
      
                  <div class="box-environment">
                    <div class="list-item">
                      <p class="title">
                        Entrance to the museums
                      </p>
                      <p class="description">
                        50% discount on all admissions
                      </p>
                    </div>
      
                    <div class="list-item">
                      <p class="title">
                        Travel with children and pets
                      </p>
                      <p class="description">
                        Possibility to rent the stroller
                      </p>
                    </div>
      
                    <div class="list-item">
                      <p class="title">
                        Travel by bus, car and minivan
                      </p>
                      <p class="description">
                        Air conditioning guaranteed
                      </p>
                    </div>
      
                    <div class="list-item">
                      <p class="title">
                        Package specifications
                      </p>
                      <div class="description">
                        <div class="des-item">
                          <i class="fas fa-check"></i>
                          Travel cancellation insurance
                        </div>
                        <div class="des-item">
                          <i class="fas fa-check"></i>
                          Breakfast and dinner included
                        </div>
                        <div class="des-item m-0">
                          <i class="fas fa-check"></i>
                          Health care included
                        </div>
                      </div>
                    </div>
      
                    <div class="list-item">
                      <p class="title">
                        Services NOT included
                      </p>
                      <div class="description">
                        <div class="des-item">
                          <i class="fas fa-times"></i>
                          Lunch not included in the package
                        </div>
                        <div class="des-item m-0">
                          <i class="fas fa-times"></i>
                          Baggage protection insurance
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
      
                <div class="tour-map">
                  <div class="title-section mt-5 mb-0">
                    Tour map
                  </div>
                  <iframe frameborder="0" src="https://www.google.com/maps/d/u/1/embed?mid=1IkWHR1kZ8bBI1BmhTy-lycGVSTpggI0_" width="100%" height="487"></iframe>
                </div>
      
                <div class="gallery">
                  <div class="title-section mt-40 mb-30">
                    Gallery
                  </div>
                  <div class="d-flex img-gallery">
                    <div class="">
                      <div class="d-flex mb-3">
                        <img src="img/gallary-img/img1.jpg" class="img-fluid img-1" alt="">
                        <img src="img/gallary-img/img2.jpg" class="img-fluid img-2" alt="">
                      </div>
                      <img src="img/gallary-img/img3.jpg" class="img-fluid img-3" alt="">
                    </div>
                    <img src="img/gallary-img/img4.jpg" class="img-fluid img-4" alt="">
    
                  </div>
                </div>
              
                <div class="day-by-day mt-40 mb-40">         
                  <div class="title-section">
                    Day by Day
                  </div>
      
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut venenatis lorem. Nunc sodales interdum rhoncus. <u>Nulla a leo finibus</u>, ullamcorper lorem vel, scelerisque massa. Vivamus leo dui, interdum non fermentum eget, laoreet ac lorem. Aliquam a ultricies nisl. Nulla consequat lobortis urna sed cursus. <u>ipsum dolor sit amet</u>, consectetur adipiscing elit consectef lorem vel, scelerisque massa. Vivamus leo dui, interdum non
                  </p>
      
                  <div class="schedule">
                    <div class="day-item">
                      <div class="icon-deatail" style="background: ${card.colorBtn}">
                        <img src="img/icon-add-white.png" class="deatail-active" alt="">
                        <img src="img/icon-less-white.png"  alt="">
                      </div>
                      <div class="day text-uppercase">
                        day 1 
                      </div>
                      <span class="detail ms-2"> - Departure at the airport and arrival at the hotel</span>
                      <div class="tab-day-detail">
                        Lorem commodo lectus at sollicitudin elementum. Sed dolor turpis, condimentum sit amet maximus sit amet, rhoncus non turpis.
                      </div>
                    </div>
    
                    <div class="day-item">
                      <div class="icon-deatail" style="background: ${card.colorBtn}">
                        <img src="img/icon-add-white.png" class="deatail-active" alt="">
                        <img src="img/icon-less-white.png"  alt="">
                      </div>
                      <div class="day text-uppercase">
                        day 2 
                      </div>
                      <span class="detail ms-2"> - Visit the main museums and lunch included</span>
                      <div class="tab-day-detail">
                        Lorem commodo lectus at sollicitudin elementum. Sed dolor turpis, condimentum sit amet maximus sit amet, rhoncus non turpis.
                      </div>
                    </div>
    
                    <div class="day-item">
                      <div class="icon-deatail" style="background: ${card.colorBtn}">
                        <img src="img/icon-add-white.png" class="deatail-active" alt="">
                        <img src="img/icon-less-white.png"  alt="">
                      </div>
                      <div class="day text-uppercase">
                        day 3
                      </div>
                      <span class="detail ms-2"> - Excursion in the natural oasis and picnic</span>
                      <div class="tab-day-detail">
                        Lorem commodo lectus at sollicitudin elementum. Sed dolor turpis, condimentum sit amet maximus sit amet, rhoncus non turpis.
                      </div>
                    </div>
    
                    <div class="day-item">
                      <div class="icon-deatail" style="background: ${card.colorBtn}">
                        <img src="img/icon-add-white.png" class="deatail-active" alt="">
                        <img src="img/icon-less-white.png"  alt="">
                      </div>
                      <div class="day text-uppercase">
                        day 4 
                      </div>
                      <span class="detail ms-2"> - Transfer to the airport and return to the agency</span>
                      <div class="tab-day-detail">
                        Lorem commodo lectus at sollicitudin elementum. Sed dolor turpis, condimentum sit amet maximus sit amet, rhoncus non turpis.
                      </div>
                    </div>
    
                    <div class="day-item">
                      <div class="icon-deatail" style="background: ${card.colorBtn}">
                        <img src="img/icon-add-white.png" class="deatail-active" alt="">
                        <img src="img/icon-less-white.png"  alt="">
                      </div>
                      <div class="day text-uppercase">
                        day 5
                      </div>
                      <span class="detail ms-2"> - Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                      <div class="tab-day-detail">
                        Lorem commodo lectus at sollicitudin elementum. Sed dolor turpis, condimentum sit amet maximus sit amet, rhoncus non turpis.
                      </div>
                    </div>
                  </div>
      
                  
                </div>
                
                
              </div>
      
              <div class="part-right">
                <div class="part-right-header" style="background: ${card.colorBtn}">700 
                  <span>$</span>
                </div>
                <div class="form-book">
                  <div class="d-flex">
                    <input type="text" class="mr-10" placeholder="Name">
                    <input type="text" class="" placeholder="surname">
                  </div>
                  <div class="d-flex">
                    <input type="email" class="mr-10" placeholder="Email">
                    <input type="text" class="" placeholder="Guests">
                  </div>
                  <input type="text" class="" placeholder="Phone">
                  <textarea type="message" class="" placeholder="Message"></textarea>
      
                  <button class="btn-send text-uppercase" style="background: ${card.colorBtn}">send now</button>
                </div>
                <img src="img/part-right-img.jpg" class="img-fluid mt-40 mb-40" alt="">
                <div class="best-packages mb-40">
                  <div class="section-title">
                    Best Packages
                  </div>
                  <div class="best-package-item d-flex">
                    <img src="img/cards/card1-package.jpg" class="img-place" alt="">
                    <div class="location">
                      <p class="place">
                        Berlin
                      </p>
                      <p class="located">
                        <img src="img/icon-pin-grey.png" alt="">
                        Europe
                      </p>
                      <button class="btn-from" style="background: linear-gradient(to right, #ffd205 0%, #ff9b05 100%)">from 700$</button>
                    </div>
                  </div>
                  <div class="best-package-item d-flex">
                    <img src="img/cards/card2-package.jpg" class="img-place" alt="">
                    <div class="location">
                      <p class="place">
                        HongKong
                      </p>
                      <p class="located">
                        <img src="img/icon-pin-grey.png" alt="">
                        Asia
                      </p>
                      <button class="btn-from" style="background: linear-gradient(to right, #f76570 0%, #f78d65 100%)">from 500$</button>
                    </div>
                  </div>
                  <div class="best-package-item d-flex">
                    <img src="img/cards/card3-package.jpg" class="img-place" alt="">
                    <div class="location">
                      <p class="place">
                        San Francisco
                      </p>
                      <p class="located">
                        <img src="img/icon-pin-grey.png" alt="">
                        Oceania
                      </p>
                      <button class="btn-from" style="background: linear-gradient(to right, #ba71da 0%, #da717b 100%)">from 400$</button>
                    </div>
                  </div>
    
                </div>
    
                <div class="search">
                  <div class="section-title">
                    Search
                  </div>
                  <input type="text">
                  <button class="btn-search text-uppercase">search</button>
                  <div class="package-card-flip" style="background: url('img/package-card-flip.jpg') center left / cover no-repeat">
                    <div class="mask-flip"></div>
                    <div class="flip-text">
                      <p class="flip-text-1">Europe</p>
                      <p class="flip-text-2">3 packages</p>
                    </div>
                    <img src="img/cards-icon/card-icon1.png" alt="">
                    <div class="sub-nav-flip">
                      <p>Packages</p>
                      <div class="text-center mb-20 mt-20">
                        <p>Berlin</p>
                        <p>Amsterdam</p>
                        <p>Tuscany</p>
                      </div>
                      <button class="btn-view br-30">view destination</button>
                    </div>
                  </div>
                </div>
    
                <div class="tags">
                  <div class="section-title">
                    Tags
                  </div>
                  <div class="box-tags d-flex flex-wrap mb-30">
                    <p>adventure</p>
                    <p>agency</p>
                    <p>booking</p>
                    <p>family</p>
                    <p>holiday</p>
                    <p>packages</p>
                    <p>resort</p>
                    <p>tours</p>
                    <p>travel</p>
                    <p>wellness</p>
    
                  </div>
                  <div class="agency-open">
                    agency opening at
                    <p>9 AM</p>
                  </div>
                  <div class="agency-close mb-40">
                    agency will close at
                    <p>9 AM</p>
                  </div>
    
                  <div class="idea">
                    <p>Ctus at sollicitudin elementum. Sed dolor turpis, condimentum sit amet maximus.
                    </p>
                  </div>
                  <div class="flex-center mt-30 mb-20">
                    <img src="img/testimonial-1.jpg" class="author" alt="">
                    <div class="name-comment">
                      <p class="name">jane goleman</p>
                      <p>I love discover the world !</p>
                    </div>
                  </div>
    
                  <div class="package-card-flip mt-40" style="background: url('img/package-card-flip.jpg') center center / cover no-repeat">
                    <img src="img/cards-icon/card-icon1.png" alt="">
                    <div class="mask-flip"></div>
                    <div class="flip-text">
                      <p class="flip-text-1">Oceania</p>
                      <p class="flip-text-2">1 package</p>
                    </div>
                    <div class="sub-nav-flip">
                      <p>Packages</p>
                      <div class="text-center mb-20 mt-20">
                        <p>San Francisco</p>
                      </div>
                      <button class="btn-view br-30">view destination</button>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
    
            
          </div>
          <div class="related">
            <div class="related-box-text">
              <p class="text-uppercase">related</p>
              <p class="text-uppercase package-text">packages</p>
            </div>

            <div class="packages-cards flex-center">
      
            </div>
    
          </div>
        </div>
        `
      })}
    `
  },

  handle: function() {
    // When click card item
    const cardItems = $2('.card-item')
    const tabCardItems = $2('.tab-card-item')
    cardItems.forEach((cardItem, index) => {
      cardItem.onclick = function() {
        const tabCard = tabCardItems[index]
        $1('.container-package').classList.add('d-none')
        tabCard.classList.add('active-tab')
        $1('.tab-card-item.active-tab').classList.remove('active-tab')
      }
    })

    // When change price
    changePrice.oninput = function(e) {
      priceValue.innerText = changePrice.value + '$'
      priceTrackValue.style.width =  $1('.progress-price').offsetWidth * changePrice.value / 10000 + 'px'
    }
  },

  render: function() {
    this.renderCards();
    // this.renderTabCards();
  },

  start: function() {
    this.render();
    this.handle();
  },
}

app.start();

$( "#datepicker" ).on( "click", function() {
  $( "#datepicker" ).datepicker( "show" );
});

$( "#datepicker" ).datepicker({
  minDate: 0,
  dateFormat: "mm-dd-yy",
  monthNames: ["January","February","March","April","May","June", "July","August","September","October","November","December"],
  monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
  dayNamesMin: ["SU","MO","TU","WE","TH","FR", "SA"],
  nextText: "NEXT",
  prevText: "PREV",
  onClose: function() {  },
  buttonText: "Choose",
  showButtonPanel: false,

});

$('#button').button(
  {
    icons: {primary: 'ui-icon', secondary: null}
  }
);


// Hidden icon datepicker

