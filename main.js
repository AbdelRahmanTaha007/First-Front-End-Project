$(document).ready(function(){
    // Make Menu bar fixed While Scrolling
    $(window).scroll(function() {
        if ($(window).scrollTop() > 10) {
            $('header .menu-bar').addClass('fixed');
            $('.menu-bar').fadeIn();
        } else {
            $('header .menu-bar').removeClass('fixed');
        }
    });

    $('.section-head').click(function(){
        $('.section-head').removeClass('active');
        $(this).addClass('active');
    });
    // Show Go to Top Icon 
    $(window).scroll(function(){
        if ($(window).scrollTop() >= 500)
        {
            $('.goTop-btn').fadeIn();
        }
        else
        {
            $('.goTop-btn').fadeOut();
        }
    });
    // Hide Menu bar and Show menu icons
    var menuIcon = $('header .menu-bar-container .icons')
    $(menuIcon).click(function(){
        $('nav ul').toggleClass('show-menu');
        $('.overlay').fadeToggle();
        $('.menu-icon').toggle();
        $('.close-icon').toggle();
    })
    // Show / Hide Overlay 
    $('.overlay').click(function() {
        $('nav ul').removeClass('show-menu');
        $('.overlay').fadeOut();
        $('.menu-icon').show();
        $('.close-icon').hide();
    })
    // Close Menu bar When clicking on Overlay or Close Icon
    $('nav ul li').click(function() {
        if (window.innerWidth < 980) {
            $('nav ul').removeClass('show-menu');
            $('.overlay').fadeOut();
            $('.menu-icon').show();
            $('.close-icon').hide();
        }
    })
    // 
    $(window).scroll(function() {
        $('.section-head').each(function() {
            if ($(window).scrollTop() > ($(this).offset().top)) {
                var sectionId = $(this).attr('id');
                $('header .menu-bar-container nav ul li a').removeClass('active');
                $('header .menu-bar-container nav ul li a[class="' + sectionId + '"]').addClass('active')
            } else if ($(window).scrollTop() < 680) {
                $('header .menu-bar-container nav ul li a[class="home"]').addClass('active')
            }
        });
    });
});



















const button1 = document.getElementById("El1");
const button2 = document.getElementById("El2");
const button3 = document.getElementById("El3");
const button4 = document.getElementById("El4");
const button5 = document.getElementById("El5");
const button6 = document.getElementById("El6");
const content1 = document.getElementById("accordionExample1");
const content2 = document.getElementById("accordionExample2");
const content3 = document.getElementById("accordionExample3");
const content4 = document.getElementById("accordionExample4");
const content5 = document.getElementById("accordionExample5");
const content6 = document.getElementById("accordionExample6");

if (button1) {
  button1.addEventListener("click", function () {
    content2.classList.add("hidden");
    content3.classList.add("hidden");
    content4.classList.add("hidden");
    content5.classList.add("hidden");
    content6.classList.add("hidden");
    content2.classList.remove("active");
    content3.classList.remove("active");
    content4.classList.remove("active");
    content5.classList.remove("active");
    content6.classList.remove("active");
    content1.classList.add("active");
  });
}

if (button2) {
  button2.addEventListener("click", function () {
    content1.classList.remove("active");
    content1.classList.add("hidden");
    content2.classList.remove("hidden");
    content2.classList.add("active")
    content3.classList.remove("active");
    content4.classList.remove("active");
    content5.classList.remove("active");
    content6.classList.remove("active");
  });
}

if (button3) {
  button3.addEventListener("click", function () {
    content2.classList.remove("active");
    content2.classList.add("hidden");
    content1.classList.remove("active");
    content1.classList.add("hidden");
    content4.classList.remove("active");
    content4.classList.add("hidden");
    content5.classList.remove("active");
    content5.classList.add("hidden");
    content6.classList.remove("active");
    content6.classList.add("hidden");
    content3.classList.add("active");
  });
}

if (button4) {
  button4.addEventListener("click", function () {
    content2.classList.remove("active");
    content2.classList.add("hidden");
    content1.classList.remove("active");
    content1.classList.add("hidden");
    content3.classList.remove("active");
    content3.classList.add("hidden");
    content5.classList.remove("active");
    content5.classList.add("hidden");
    content6.classList.remove("active");
    content6.classList.add("hidden");
    content4.classList.add("active");
  });
}

if (button5) {
  button5.addEventListener("click", function () {
    content2.classList.remove("active");
    content2.classList.add("hidden");
    content1.classList.remove("active");
    content1.classList.add("hidden");
    content3.classList.remove("active");
    content3.classList.add("hidden");
    content4.classList.remove("active");
    content4.classList.add("hidden");
    content6.classList.remove("active");
    content6.classList.add("hidden");
    content5.classList.add("active");
  });
}

if (button6) {
  button6.addEventListener("click", function () {
    content2.classList.remove("active");
    content2.classList.add("hidden");
    content1.classList.remove("active");
    content1.classList.add("hidden");
    content3.classList.remove("active");
    content3.classList.add("hidden");
    content4.classList.remove("active");
    content4.classList.add("hidden");
    content5.classList.remove("active");
    content5.classList.add("hidden");
    content6.classList.add("active");
  });
}
