$(document).ready(function() {



  // ------------------------------------------------------------------------
  // NAVBAR:

  $('.navbar-nav>li>.same-page').on('click', function() {
    $('.navbar-collapse').collapse('hide');
  });
  // ------------------------------------------------------------------------

  // ------------------------------------------------------------------------
  // SEND EMAIL:

  $('#send-contact').click(function() {
    var subject_input = $('#subject').val();
    var msg_input = $('#msg').val();
    var name_input = $('#name-contacter').val();


    $(location).attr('href', 'mailto:juliagalyacohenart@gmail.com?subject=' +
      encodeURIComponent(subject_input) +
      "&body=" +
      encodeURIComponent("This message was sent from the julia's scene site by:\n" + name_input + "\nand the message is:\n" + msg_input)
    );
  });

  // ------------------------------------------------------------------------





  //-----------------------------------------------------------------------------
  // HANDALING SCROLL CHANGES:
  //-----------------------------------------------------------------------------

  // ------------------------------------------------------------------------
  // transperent to solid nav bar function:
  function navbar_scroll() {
    var height = $('.video-header').height();
    var scrollTop = $(window).scrollTop();

    if (scrollTop >= height - 40) {
      $('.my-nav').addClass('solid-nav');
      $('.navbar-brand').addClass('solid-navbar-brand');

      // $('.dropdown-item').addClass('solid-dropdown-item');


    } else {
      $('.my-nav').removeClass('solid-nav');
      $('.navbar-brand').removeClass('solid-navbar-brand');
      // $('.dropdown-item').removeClass('solid-dropdown-item');
    }
  }


  // ------------------------------------------------------------------------
  // hr animation function:
  var direction_i = 0,
    $window = $(window);

  function hr_scroll() {
    var scroll_top = $window.scrollTop(),
      direction = (scroll_top > direction_i) ? 'up' : 'down',
      direction_i = scroll_top;

    $('hr').each(function() {
      var $this = $(this),
        from_top = $this.offset().top - scroll_top - 100,
        is_activated = $this.hasClass('activated');

      if (from_top < 300 && from_top > 0) {
        if (is_activated) {
          $this.removeClass('activated');
        }
        $this.css('width', (100 - (from_top / 300) * 100) + '%');
      }

      if (from_top <= 0 && !is_activated) {
        if (direction === 'down') {
          $this.addClass('activated');
        }
      }

    });
  }





  // ------------------------------------------------------------------------



  $(window).scroll(function() {
    navbar_scroll();
    hr_scroll();

  });



  //-----------------------------------------------------------------------------
  // HANDALING MODALS:
  //-----------------------------------------------------------------------------


  const openModalButtons = document.querySelectorAll('[data-modal-target]')
  const closeModalButtons = document.querySelectorAll('[data-close-button]')
  const contactModalButtons = document.querySelectorAll('[modal-contact-button]')



  const overlay = document.getElementById('my-overlay')

  openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = document.querySelector(button.dataset.modalTarget)
      openModal(modal)
    })
  })

  closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.my-modal')
      closeModal(modal)
    })
  })

  overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.my-modal.active')
    modals.forEach(modal => {
      closeModal(modal)
    })
  })


  contactModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.my-modal')
      closeModal(modal)

      window.open("https://api.whatsapp.com/send?phone=972528899773", '_blank');


    })
  })



  function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
  }

  function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
  }

  //-----------------------------------------------------------------------------
  //-----------------------------------------------------------------------------
  //-----------------------------------------------------------------------------

  // READ ABOUT SHOP TOGGLER:
  $(".read-shop-btn").click(function() {
    $("#apparel-description").slideToggle("slow");
  });


  $(".read-art-btn").click(function() {
    $("#art-description").slideToggle("slow");
  });



  //DANCE ART PAGE:

  // $('.video-gallery').magnificPopup({
  //   delegate: 'a',
  //   type: 'iframe',
  //   gallery: {
  //     enabled: true
  //   }
  // });


  // alert("fffff");





  var url1 = $("#video1").attr('src');
  var url2 = $("#video2").attr('src');

  $("#playModal1").on('hide.bs.modal', function() {
    $("#video1").attr('src', '');
  });


  $("#playModal1").on('show.bs.modal', function() {
    $("#video1").attr('src', url1);
  });


  $("#playModal2").on('hide.bs.modal', function() {
    $("#video2").attr('src', '');
  });


  $("#playModal2").on('show.bs.modal', function() {
    $("#video2").attr('src', url2);
  });









});
