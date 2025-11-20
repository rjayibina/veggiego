 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	"use strict";

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};


	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});
	
		$('.carousel-testimony').owlCarousel({
			center: true,
			loop: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 3
				},
				1000:{
					items: 3
				}
			}
		});

	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	
	var counter = function() {
		
		$('#section-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();

	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();


	// navigation
	var OnePageNav = function() {
		$(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function(e) {
		 	e.preventDefault();

		 	var hash = this.hash,
		 			navToggler = $('.navbar-toggler');
		 	$('html, body').animate({
		    scrollTop: $(hash).offset().top
		  }, 700, 'easeInOutExpo', function(){
		    window.location.hash = hash;
		  });


		  if ( navToggler.is(':visible') ) {
		  	navToggler.click();
		  }
		});
		$('body').on('activate.bs.scrollspy', function () {
		  console.log('nice');
		})
	};
	OnePageNav();


	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });



	var goHere = function() {

		$('.mouse-icon').on('click', function(event){
			
			event.preventDefault();

			$('html,body').animate({
				scrollTop: $('.goto-here').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});
	};
	goHere();


	function makeTimer() {

		var endTime = new Date("21 December 2019 9:56:00 GMT+01:00");			
		endTime = (Date.parse(endTime) / 1000);

		var now = new Date();
		now = (Date.parse(now) / 1000);

		var timeLeft = endTime - now;

		var days = Math.floor(timeLeft / 86400); 
		var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
		var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
		var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

		if (hours < "10") { hours = "0" + hours; }
		if (minutes < "10") { minutes = "0" + minutes; }
		if (seconds < "10") { seconds = "0" + seconds; }

		$("#days").html(days + "<span>Days</span>");
		$("#hours").html(hours + "<span>Hours</span>");
		$("#minutes").html(minutes + "<span>Minutes</span>");
		$("#seconds").html(seconds + "<span>Seconds</span>");		

}

setInterval(function() { makeTimer(); }, 1000);



})(jQuery);


fetch('data/products.json')
.then(res => res.json())
.then(data => {

/* ---------------------------------------------
	SHOP PAGE — LOAD ALL PRODUCTS WITH CATEGORY FILTER
	--------------------------------------------- */
const shopContainer = document.getElementById('products-container');
const categoryLinks = document.querySelectorAll('.product-category a');

if (shopContainer && typeof data !== "undefined") {

	// Function to render products
	function renderProducts(products) {
		shopContainer.innerHTML = ""; // clear current products

		if (products.length === 0) {
			// Show fallback text when no products found
			shopContainer.innerHTML = `
				<div class="col-12 text-center">
					<p style="font-size: 18px; color: #555;">No products found in this category.</p>
				</div>
			`;
			return; // exit function
		}

		products.forEach(p => {
			const discountHTML = p.discount_percent
				? `<span class="status">${p.discount_percent}%</span>`
				: "";

			const priceHTML = p.price_sale
				? `<p class="price">
						<span class="mr-2 price-dc">$${p.price_original.toFixed(2)}</span>
						<span class="price-sale">$${p.price_sale.toFixed(2)}</span>
				</p>`
				: `<p class="price">
						<span>$${p.price_original.toFixed(2)}</span>
				</p>`;

			shopContainer.innerHTML += `
				<div class="col-md-6 col-lg-3 ftco-animate">
					<div class="product">
						<a href="product-single.html?id=${p.id}" class="img-prod">
							<img class="img-fluid" src="${p.image}" alt="${p.name}">
							${discountHTML}
							<div class="overlay"></div>
						</a>
						<div class="text py-3 pb-4 px-3 text-center">
							<h3><a href="product-single.html?id=${p.id}">${p.name}</a></h3>
							<div class="d-flex">
								<div class="pricing">${priceHTML}</div>
							</div>
							<div class="bottom-area d-flex px-3">
								<div class="m-auto d-flex">
									<a href="#" class="add-to-cart d-flex justify-content-center align-items-center text-center">
										<span><i class="ion-ios-menu"></i></span>
									</a>
									<a href="#" class="buy-now d-flex justify-content-center align-items-center mx-1">
										<span><i class="ion-ios-cart"></i></span>
									</a>
									<a href="#" class="heart d-flex justify-content-center align-items-center ">
										<span><i class="ion-ios-heart"></i></span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>`;
		});

		// Refresh AOS and trigger animations for new elements
		if (typeof AOS !== "undefined") AOS.refreshHard();

		$(".ftco-animate").waypoint(function (direction) {
			if (direction === "down" && !$(this.element).hasClass("ftco-animated")) {
				$(this.element).addClass("item-animate");
				setTimeout(function () {
					$("body .ftco-animate.item-animate").each(function (k) {
						var el = $(this);
						setTimeout(function () {
							el.addClass("fadeInUp ftco-animated");
							el.removeClass("item-animate");
						}, k * 50);
					});
				}, 100);
			}
		}, { offset: "95%" });
	}

	// Initially render all products
	renderProducts(data.products);

	// Category filter click
	categoryLinks.forEach(link => {
		link.addEventListener('click', e => {
			e.preventDefault();

			// Remove active class from all links and set current active
			categoryLinks.forEach(l => l.classList.remove('active'));
			link.classList.add('active');

			const category = link.textContent.trim().toLowerCase();

			if (category === "all") {
				renderProducts(data.products);
			} else {
				const filtered = data.products.filter(p => p.category.toLowerCase() === category);
				renderProducts(filtered);
			}
		});
	});
}

/* ---------------------------------------------
	INDEX PAGE — LOAD LATEST 6 PRODUCTS ONLY
	--------------------------------------------- */
const featuredContainer = document.getElementById('featured-products');

if (featuredContainer) {

	// latest 6 products (reverse to show newest first)
	const latestSix = data.products.slice(0, 8);

	latestSix.forEach(p => {
	let discountHTML = p.discount_percent
		? `<span class="status">${p.discount_percent}%</span>`
		: "";

	let priceHTML = p.price_sale
		? `<p class="price">
			<span class="mr-2 price-dc">$${p.price_original.toFixed(2)}</span>
			<span class="price-sale">$${p.price_sale.toFixed(2)}</span>
			</p>`
		: `<p class="price">
			<span>$${p.price_original.toFixed(2)}</span>
			</p>`;

	featuredContainer.innerHTML += `
		<div class="col-md-6 col-lg-3 ftco-animate">
		<div class="product">
			<a href="product-single.html?id=${p.id}" class="img-prod">
			<img class="img-fluid" src="${p.image}" alt="${p.name}">
			${discountHTML}
			<div class="overlay"></div>
			</a>
			<div class="text py-3 pb-4 px-3 text-center">
			<h3><a href="product-single.html?id=${p.id}">${p.name}</a></h3>
			<div class="d-flex">
				<div class="pricing">
				${priceHTML}
				</div>
			</div>
			<div class="bottom-area d-flex px-3">
				<div class="m-auto d-flex">
				<a href="#" class="add-to-cart d-flex justify-content-center align-items-center text-center">
					<span><i class="ion-ios-menu"></i></span>
				</a>
				<a href="#" class="buy-now d-flex justify-content-center align-items-center mx-1">
					<span><i class="ion-ios-cart"></i></span>
				</a>
				<a href="#" class="heart d-flex justify-content-center align-items-center ">
					<span><i class="ion-ios-heart"></i></span>
				</a>
				</div>
			</div>
			</div>
		</div>
		</div>`;
	});
}

// Get product ID from URL
const params = new URLSearchParams(window.location.search);
const productId = params.get('id');

if (productId) {
  fetch('data/products.json')
    .then(res => res.json())
    .then(data => {
      const product = data.products.find(p => p.id == productId);
      if (!product) return;

      // -----------------------------
      // UPDATE IMAGE
      // -----------------------------
      const imgEl = document.getElementById('product-image');
      if (imgEl) imgEl.src = product.image;

      const imgLink = document.querySelector('.image-popup');
      if (imgLink) imgLink.href = product.image;

      // -----------------------------
      // UPDATE NAME
      // -----------------------------
      const nameEl = document.getElementById('product-name');
      if (nameEl) nameEl.textContent = product.name;

      // -----------------------------
      // UPDATE PRICE
      // -----------------------------
      const priceEl = document.getElementById('product-price');
      if (priceEl) {
        if (product.price_sale) {
          priceEl.innerHTML = `<span class="mr-2 price-dc">$${product.price_original.toFixed(2)}</span>
                               <span class="price-sale">$${product.price_sale.toFixed(2)}</span>`;
        } else {
          priceEl.innerHTML = `<span>$${product.price_original.toFixed(2)}</span>`;
        }
      }

      // -----------------------------
      // UPDATE STOCK
      // -----------------------------
      const stockEl = document.getElementById('product-stock');
      if (stockEl) stockEl.textContent = `${product.stock || 100} kg available`;

      // -----------------------------
      // ADD DISCOUNT BADGE
      // -----------------------------
      if (product.discount_percent) {
        const imgProd = document.querySelector('.img-prod');
        if (imgProd && !imgProd.querySelector('.status')) {
          const discountEl = document.createElement('span');
          discountEl.className = 'status';
          discountEl.textContent = product.discount_percent + '%';
          imgProd.appendChild(discountEl);
        }
      }

      // -----------------------------
      // UPDATE DESCRIPTION
      // -----------------------------
      const descEl = document.getElementById('product-description');
      if (descEl) descEl.textContent = product.description || "No description available.";

      // -----------------------------
      // UPDATE RATING AND COUNTS
      // -----------------------------
      const ratingValue = product.rating || 5;
      const ratingCount = product.rating_count || 100;
      const soldCount = product.sold || 500;

      const ratingEl = document.getElementById('product-rating');
      if (ratingEl) ratingEl.textContent = ratingValue.toFixed(1);

      const starsEl = document.querySelectorAll('.rating p:first-child a span');
      starsEl.forEach((star, index) => {
        if (index < Math.round(ratingValue)) {
          star.className = 'ion-ios-star';
          star.style.color = '#82ae46';
        } else {
          star.className = 'ion-ios-star-outline';
          star.style.color = '#82ae46';
        }
      });

      const ratingCountEl = document.getElementById('rating-count');
      if (ratingCountEl) ratingCountEl.textContent = ratingCount;

      const soldEl = document.getElementById('sold-count');
      if (soldEl) soldEl.textContent = soldCount;

      // -----------------------------
      // UPDATE BREADCRUMBS
      // -----------------------------
      const bcEl = document.querySelector('.breadcrumbs');
      if (bcEl) {
        bcEl.innerHTML = `
          <span class="mr-2"><a href="index.html">Home</a></span> &gt; 
          <span class="mr-2"><a href="shop.html">Products</a></span> &gt; 
          <span>${product.name}</span>
        `;
      }

      // -----------------------------
      // UPDATE H1
      // -----------------------------
      const h1El = document.querySelector('.hero-wrap .bread');
      if (h1El) h1El.textContent = product.name;
    });
}


if (productId) {
	const relatedContainer = document.querySelector('#related-products .row');
	if (relatedContainer) {
		relatedContainer.innerHTML = '';

		const relatedProducts = data.products.filter(p => p.id != productId).slice(0, 4);

		relatedProducts.forEach(p => {
			let discountHTML = p.discount_percent ? `<span class="status">${p.discount_percent}%</span>` : "";
			let priceHTML = p.price_sale
				? `<p class="price"><span class="mr-2 price-dc">$${p.price_original.toFixed(2)}</span><span class="price-sale">$${p.price_sale.toFixed(2)}</span></p>`
				: `<p class="price"><span>$${p.price_original.toFixed(2)}</span></p>`;

			const col = document.createElement('div');
			col.className = 'col-md-6 col-lg-3 ftco-animate';
			col.innerHTML = `
				<div class="product">
					<a href="product-single.html?id=${p.id}" class="img-prod">
						<img class="img-fluid" src="${p.image}" alt="${p.name}">
						${discountHTML}
						<div class="overlay"></div>
					</a>
					<div class="text py-3 pb-4 px-3 text-center">
						<h3><a href="product-single.html?id=${p.id}">${p.name}</a></h3>
						<div class="d-flex">
							<div class="pricing">${priceHTML}</div>
						</div>
						<div class="bottom-area d-flex px-3">
							<div class="m-auto d-flex">
								<a href="#" class="add-to-cart d-flex justify-content-center align-items-center text-center">
									<span><i class="ion-ios-menu"></i></span>
								</a>
								<a href="#" class="buy-now d-flex justify-content-center align-items-center mx-1">
									<span><i class="ion-ios-cart"></i></span>
								</a>
								<a href="#" class="heart d-flex justify-content-center align-items-center">
									<span><i class="ion-ios-heart"></i></span>
								</a>
							</div>
						</div>
					</div>
				</div>`;
			relatedContainer.appendChild(col);
		});
	}
}

/* ---------------------------------------------
	FIX ANIMATIONS FOR DYNAMIC CONTENT
	--------------------------------------------- */
setTimeout(() => {
	if (typeof AOS !== "undefined") {
	AOS.refreshHard();
	}

	$(".ftco-animate").waypoint(function (direction) {
	if (direction === "down" && !$(this.element).hasClass("ftco-animated")) {
		$(this.element).addClass("item-animate");
		setTimeout(function () {
		$("body .ftco-animate.item-animate").each(function (k) {
			var el = $(this);
			setTimeout(function () {
			el.addClass("fadeInUp ftco-animated");
			el.removeClass("item-animate");
			}, k * 50);
		});
		}, 100);
	}
	}, { offset: "95%" });

}, 300);
});


$(document).ready(function() {
    // Capture Add to Cart click
    $('.btn-black').click(function(e){
		e.preventDefault();

		// Get product id from URL
		const productId = new URLSearchParams(window.location.search).get('id');

		// Load products JSON
		$.getJSON('data/products.json', function(data) {
			const productData = data.products.find(p => p.id == productId);
			if(!productData) return alert('Product not found');

			// Determine price (sale or original)
			const price = productData.price_sale ? productData.price_sale : productData.price_original;

			// Create product object
			const product = {
				id: productData.id,
				name: productData.name,
				price: parseFloat(price),
				image: productData.image,
				size: $('#product-size').val(),
				quantity: parseInt($('#quantity').val()) || 1
			};

			// Load cart
			let cart = JSON.parse(localStorage.getItem('cart')) || [];

			// Add/update product
			const existing = cart.find(p => p.id === product.id && p.size === product.size);
			if(existing){
				existing.quantity += product.quantity;
			} else {
				cart.push(product);
			}

			// Save cart
			localStorage.setItem('cart', JSON.stringify(cart));

			// Update cart count dynamically
			updateCartCount();

			// Optional: show a small alert instead of redirecting
			alert(product.name + ' added to cart!');
		});
	});

	function updateCartCount() {
		const cart = JSON.parse(localStorage.getItem('cart')) || [];
		const totalItems = cart.reduce((acc, p) => acc + p.quantity, 0);

		// Replace everything inside <a> with updated count
		$('.nav-item.cta a').html('<span class="icon-shopping_cart"></span>[' + totalItems + ']');
	}

	updateCartCount();

    // Delivery fee
    const deliveryFee = 10;

    // Load cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Render cart items
    function renderCart() {
        const $tbody = $('.cart-list table tbody');
        $tbody.empty();

        if(cart.length === 0){
            $tbody.html('<tr><td colspan="6" class="text-center">Your cart is empty.</td></tr>');
            updateTotals();
            return;
        }

        cart.forEach((p, index) => {
            const total = (p.price * p.quantity).toFixed(2);
            $tbody.append(`
                <tr class="text-center" data-index="${index}">
                    <td class="product-remove"><a href="#" class="remove-item"><span class="ion-ios-close"></span></a></td>
                    <td class="image-prod"><div class="img" style="background-image:url(${p.image});"></div></td>
                    <td class="product-name">
                        <h3>${p.name}</h3>
                        <p>Size: ${p.size || '-'}</p>
                    </td>
                    <td class="price">$${p.price.toFixed(2)}</td>
                    <td class="quantity">
                        <input type="number" min="1" max="20" value="${p.quantity}" class="form-control pr-1 input-number">
                    </td>
                    <td class="total">$${total}</td>
                </tr>
            `);
        });

        updateTotals();
    }

    // Update cart totals
    function updateTotals() {
        let subtotal = 0;
        cart.forEach(p => subtotal += p.price * p.quantity);
        const discount = 0; // example discount
        const total = subtotal + deliveryFee - discount;

        $('.cart-total p:contains("Subtotal") span').last().text('$' + subtotal.toFixed(2));
        $('.cart-total p:contains("Delivery") span').last().text('$' + deliveryFee.toFixed(2));
        $('.cart-total p:contains("Discount") span').last().text('$' + discount.toFixed(2));
        $('.cart-total .total-price span').last().text('$' + total.toFixed(2));
    }

    // Remove item
    $('.cart-list table tbody').on('click', '.remove-item', function(e){
        e.preventDefault();
        const index = $(this).closest('tr').data('index');
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    });

    // Update quantity
    $('.cart-list table tbody').on('input change', '.input-number', function(){
        const index = $(this).closest('tr').data('index');
        let qty = parseInt($(this).val()) || 1;
        if(qty < 1) qty = 1;
        if(qty > 20) qty = 20;
        $(this).val(qty);
        cart[index].quantity = qty;
        localStorage.setItem('cart', JSON.stringify(cart));

        // Update product total
        $(this).closest('tr').find('.total').text('$' + (cart[index].price * qty).toFixed(2));
        updateTotals();
    });

    // Initialize cart rendering
    renderCart();
});