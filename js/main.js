import easytabs from "./easytabs";
import carouFredSel from "caroufredsel";


$(document).ready(function () {

  /* ---------------------------------------------------------------------- */
	/*	Custom Functions
	/* ---------------------------------------------------------------------- */

  // Logo
  var $logo = $('.logo');

  if (location.href.indexOf("#") != -1) {
    $logo.show();
  }
  // Show logo 
  $('.menu .tab a').click(function () {
    $logo.fadeIn('slow');
  });
  // Hide logo
  $('.tab__ancle').click(function () {
    $logo.fadeOut('slow');
  });

  $('#yellow-color').click(function(e){
    $(".container").attr("id", "yellow");
  });
  
  $('#red-color').click(function (e) {
    $(".container").attr("id", "red");
  });

  $('#blue-color').click(function (e) {
    $(".container").attr("id", "blue");
  });

  $('#green-color').click(function (e) {
    console.log('press green');
    $(".container").attr("id", "green");
  });

  $(".setting-icon").click(function() {
    $(".color-box").toggleClass("main");
  });


  $(".socials-text").click(function () {
    $(".social-icons").toggleClass("main");
  });

  /* ---------------------------------------------------------------------- */
	/*	Profile
	/* ---------------------------------------------------------------------- */

  // Footer
  var $copyright = $(".copyright")
  $copyright.text('copyright © ' + new Date().getFullYear() + ' Fernando Guevara')


  /* ---------------------------------------------------------------------- */
	/*	Resume
	/* ---------------------------------------------------------------------- */

  // Rating bars
  $(".skills li .rating").each(function (index, e) {

    // Vars
    var
      $ratNum = 7,
      $rat = $(e).attr("data-rat"),
      $point = "<span></span>";

    // Append points
    while ($ratNum > 0) {
      $(e).append($point);
      $ratNum--;
    }

    $(e).find("span").each(function (index, e) {
      if (index >= $rat) return false;
      // Append Disabled Rats
      $(e).animate({
        opacity: 1
      });
    });

  });

  /* ---------------------------------------------------------------------- */
	/*	About
	/* ---------------------------------------------------------------------- */

  // Profile Photo Slider
  // $(".photo-inner ul").carouFredSel({
  //   direction: "left",
  //   circular: true,
  //   auto: true,
  //   scroll: {
  //     items: 1,
  //     fx: 'crossfade',
  //     duration: 1500,
  //     wipe: true
  //   },
  //   swipe: {
  //     onTouch: true
  //   },
  //   items: {
  //     width: 153
  //   }
  // });

  /* ---------------------------------------------------------------------- */
	/*	Menu
	/* ---------------------------------------------------------------------- */

  // Needed variables
  var $content = $(".content");

  // Run easytabs
  $content.easytabs({
    animate: true,
    updateHash: false,
    transitionIn: 'slideDown',
    transitionOut: 'slideUp',
    animationSpeed: 600,
    tabs: ".tab__item",
    tabActiveClass: 'active',
  });


  // Hover menu effect
  $content.find('.tab li a').hover(
    function () {
      $(this).stop().animate({ marginTop: "-7px" }, 200);
    }, function () {
      $(this).stop().animate({ marginTop: "0px" }, 300);
    }
  );

  // Menu Navigation
  $(".menu .tab").carouFredSel({
    responsive: true,
    direction: "left",
    circular: false,
    infinite: false,
    pagination: "#menu-controls",
    auto: false,
    scroll: {
      items: 1,
      duration: 300,
      wipe: true
    },
    prev: {
      button: "#menu-prev",
      key: "right"
    },
    next: {
      button: "#menu-next",
      key: "left"
    },
    swipe: {
      onTouch: true
    },
    items: {
      width: 140,
      visible: {
        min: 4,
        max: 4
      }
    },
    // wrapper: {
    //   classname: "prueba"
    // }
  });
  /* ---------------------------------------------------------------------- */
	/*	Cats Filter
	/* ---------------------------------------------------------------------- */

  var $catsfilter = $('#portfolio-filter');

  // Copy categories to item classes
  $catsfilter.find('a').click(function () {
    var currentOption = $(this).attr('data-filter');
    $(this).parent().parent().find('a').removeClass('current');
    $(this).addClass('current');
  });

  /* ---------------------------------------------------------------------- */
	/*	Portfolio
	/* ---------------------------------------------------------------------- */

	
	// Needed variables
	const $plist = document.querySelectorAll('#portfolio-list li');
  const $pfilter = document.querySelector('#portfolio-filter');
  let category = "*"

  $pfilter.addEventListener('click', (e) => {
    if(e.target.classList.contains('portfolio-filter__link')) {
      category = e.target.dataset.filter;
    }
    filterProjects(category);
  })


  function filterProjects(category) {
    if(category === '*') {
      for(let item of Array.from($plist)) {
        item.classList.remove('hide');
      }
      return;
    }
    const hideProjects = Array.from($plist).filter((project) => !project.classList.contains(category));
    const showProjects = Array.from($plist).filter((project) => project.classList.contains(category));
    for(let item of hideProjects) {
      item.classList.add('hide');
    }
    for(let item of showProjects) {
      item.classList.remove('hide');
    }
  }
  
});	