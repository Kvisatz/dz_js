function init(selectorID){
				let carouselElement;
				let btnPrev;
				let btnNext;
				let listOffersWrap;

				carouselElement = document.querySelector(selectorID);

				if(typeof carouselElement == 'null'){
					console.log("Error");
					return 0;
				}

				let carousel = {
					btnPrev: carouselElement.querySelector(".prev"),
					btnNext: carouselElement.querySelector(".next"),
					listOffersWrap: carouselElement.querySelector(".list_offers"),
					offset: 0,
					countItems: function(){
						return this.listOffersWrap.children.length;
					},
					heightElment: 130,
					heightAllOffers: function(){
						return this.countItems() * this.heightElment;
					},
					offsetPrev: function(){
						let app = this;
						this.btnPrev.addEventListener('click', function(){
							if(app.offset > -(app.heightAllOffers() - app.heightElment * 3)){
								app.offset = app.offset - app.heightElment;
								app.listOffersWrap.style.marginTop = app.offset+"px";
							}
						});
					},
					offsetNext: function(){
						let app = this;
						this.btnNext.addEventListener('click', function(){
							
							if(app.offset < 0){
								app.offset = app.offset + app.heightElment;
								app.listOffersWrap.style.marginTop = app.offset+"px";
							}
						});
					},
					Render: function(){
						let offerstr = carouselElement.querySelector('.list_offers');
						for(let offer of offers){
							console.log(offer);
							offerstr.innerHTML = offerstr.innerHTML + `<div class="item_offer">
															<img src="images/${offer.logo_company}" alt="">
															<div class="offer_info">
																<h3>${offer.position}</h3>
																<p class="city">${offer.city}</p>
																<strong class="money">${offer.money} руб</strong>
															</div>
														</div>`;
						}
						
						
					}
				}
				carousel.Render.bind(offers)();
				carousel.offsetNext();
				carousel.offsetPrev();


			}

/*
			function offsetPrev(){
				let app = this;
				this.btnPrev.addEventListener('click', function(){
					if(app.offset > -(app.heightAllOffers() - app.heightElment * 3)){
						app.offset = app.offset - app.heightElment;
						app.listOffersWrap.style.marginTop = app.offset+"px";
					}
				});
			}
			
			function offsetNext(){
				let app = this;
				this.btnNext.addEventListener('click', function(){
					
					if(app.offset < 0){
						app.offset = app.offset + app.heightElment;
						app.listOffersWrap.style.marginTop = app.offset+"px";
					}
				});
			}*/