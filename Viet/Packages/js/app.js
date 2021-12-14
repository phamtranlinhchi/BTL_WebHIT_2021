const $1 = document.querySelector.bind(document);
const $2 = document.querySelectorAll.bind(document);

const packagesCards = $2('.packages-cards')

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
          if(packagesCardIndex == 0 || (packagesCardIndex == 1 && cardIndex < 3))
            return app.html`
            <div class="card-item">
              <div class="img-card">
                <p class="sale br-30">${card.sale}</p>
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
                  <div class="price">
                  ${card.price}
                  </div>
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

  render: function() {
    this.renderCards();
  },

  start: function() {
    this.render();
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
  

});


// Hidden icon datepicker

