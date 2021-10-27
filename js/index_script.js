
    

$(document).ready(function() {
        
      
        // Prevent closing from click inside dropdown
          $(document).on('click', '.dropdown-menu', function (e) {
            e.stopPropagation();
          });
      
          // make it as accordion for smaller screens
          if ($(window).width() < 992) {
            $('.dropdown-menu a').click(function(e){
              e.preventDefault();
                if($(this).next('.submenu').length){
                  $(this).next('.submenu').toggle();
                }
                $('.dropdown').on('hide.bs.dropdown', function () {
               $(this).find('.submenu').hide();
            })
            });
        }
        
      });

    
    
    
    
// news bar contant


;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.Marquee3k = factory();
  }
}(this, function() {
  'use strict';

  let animationId = 0;

  class Marquee3k {
    constructor(element, options) {
      this.element = element;
      this.selector = options.selector;
      this.speed = element.dataset.speed || 0.25;
      this.pausable = element.dataset.pausable;
      this.reverse = element.dataset.reverse;
      this.paused = false;
      this.parent = element.parentElement;
      this.parentProps = this.parent.getBoundingClientRect();
      this.content = element.children[0];
      this.innerContent = this.content.innerHTML;
      this.wrapStyles = '';
      this.offset = 0;

      this._setupWrapper();
      this._setupContent();
      this._setupEvents();

      this.wrapper.appendChild(this.content);
      this.element.appendChild(this.wrapper);
    }

    _setupWrapper() {
      this.wrapper = document.createElement('div');
      this.wrapper.classList.add('marquee3k__wrapper');
      this.wrapper.style.whiteSpace = 'nowrap';
    }

    _setupContent() {
      this.content.classList.add(`${this.selector}__copy`);
      this.content.style.display = 'inline-block';
      this.contentWidth = this.content.offsetWidth;

      this.requiredReps = this.contentWidth > this.parentProps.width ? 2 : Math.ceil((this.parentProps.width - this.contentWidth) / this.contentWidth) + 1;

      for (let i = 0; i < this.requiredReps; i++) {
        this._createClone();
      }

      if (this.reverse) {
        this.offset = this.contentWidth * -1;
      }

      this.element.classList.add('is-init');
    }

    _setupEvents() {
      this.element.addEventListener('mouseenter', () => {
        if (this.pausable) this.paused = true;
      });

      this.element.addEventListener('mouseleave', () => {
        if (this.pausable) this.paused = false;
      });
    }

    _createClone() {
      const clone = this.content.cloneNode(true);
      clone.style.display = 'inline-block';
      clone.classList.add(`${this.selector}__copy`);
      this.wrapper.appendChild(clone);
    }

    animate() {
      if (!this.paused) {
        const isScrolled = this.reverse ? this.offset < 0 : this.offset > this.contentWidth * -1;
        const direction = this.reverse ? -1 : 1;
        const reset = this.reverse ? this.contentWidth * -1 : 0;

        if (isScrolled) this.offset -= this.speed * direction;
        else this.offset = reset;

        this.wrapper.style.whiteSpace = 'nowrap';
        this.wrapper.style.transform = `translate(${this.offset}px, 0) translateZ(0)`;
      }
    }

    _refresh() {
      this.contentWidth = this.content.offsetWidth;
    }

    repopulate(difference, isLarger) {
      this.contentWidth = this.content.offsetWidth;

      if (isLarger) {
        const amount = Math.ceil(difference / this.contentWidth) + 1;

        for (let i = 0; i < amount; i++) {
          this._createClone();
        }
      }
    }

    static refresh(index) {
      MARQUEES[index]._refresh();
    }

    static pause(index) {
      MARQUEES[index].paused = true;
    }

    static play(index) {
      MARQUEES[index].paused = false;
    }

    static toggle(index) {
      MARQUEES[index].paused = !MARQUEES[index].paused;
    }

    static refreshAll() {
      for (let i = 0; i < MARQUEES.length; i++) {
        MARQUEES[i]._refresh();
      }
    }

    static pauseAll() {
      for (let i = 0; i < MARQUEES.length; i++) {
        MARQUEES[i].paused = true;
      }
    }

    static playAll() {
      for (let i = 0; i < MARQUEES.length; i++) {
        MARQUEES[i].paused = false;
      }
    }

    static toggleAll() {
      for (let i = 0; i < MARQUEES.length; i++) {
        MARQUEES[i].paused = !MARQUEES[i].paused;
      }
    }

    static init(options = { selector: 'marquee3k' }) {
      if (animationId) window.cancelAnimationFrame(animationId);

      window.MARQUEES = [];
      const marquees = Array.from(document.querySelectorAll(`.${options.selector}`));
      let previousWidth = window.innerWidth;
      let timer;

      for (let i = 0; i < marquees.length; i++) {
        const marquee = marquees[i];
        const instance = new Marquee3k(marquee, options);
        MARQUEES.push(instance);
      }

      animate();

      function animate() {
        for (let i = 0; i < MARQUEES.length; i++) {
          MARQUEES[i].animate();
        }
        animationId = window.requestAnimationFrame(animate);
      }

      window.addEventListener('resize', () => {
        clearTimeout(timer);

        timer = setTimeout(() => {
          const isLarger = previousWidth < window.innerWidth;
          const difference = window.innerWidth - previousWidth;

          for (let i = 0; i < MARQUEES.length; i++) {
            MARQUEES[i].repopulate(difference, isLarger);
          }

          previousWidth = this.innerWidth;
        }, 250);
      });
    }
  }

  return Marquee3k;

}));


function myFunction(x) {
  if (x.matches) { // If media query matches
    document.getElementById('top-second-navbar').style.height = "320px";
    document.getElementById('top-second-navbar').style.position = "static";
  } else {
    document.getElementById('top-second-navbar').style.height = "100px";
  }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

$('#name').focusout(function(){
      var name=$('#name').val();

      
      if(name.trim() == "")
        {
          $('#error-message-name').text('Please enter a valid name ');
          $('#name').addClass('border-error');
          $('#btn-send').prop('disabled', true);
        }
        else
        {
          $('#error-message-name').text(' ');
          $('#name').removeClass('border-error');
          $('#btn-send').prop('disabled', false);
          
        }

      
});

$('#email').focusout(function(){
  var email=$('#email').val();
  var emailpattern=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if(!emailpattern.test(email))
        {
          $('#error-message').text('Please enter a valid email ');
          $('#email').addClass('border-error');
          
        }
        else
        {
          $('#error-message').text(' ');
          $('#email').removeClass('border-error');
          $('#btn-send').prop('disabled', false);
          
        }

});

$('#message').focusout(function(){
  var message=$('#message').val();
  if(message.trim() == "")
        {
          $('#error-message-message').text('Please enter a valid message ');
          $('#message').addClass('border-error');
        }
        else
        {
          $('#error-message-message').text(' ');
          $('#message').removeClass('border-error');
          $('#btn-send').prop('disabled', false);
          
        }

});

$('#close-btn').click(function(){

    $('#email').val("");
    $('#name').val("");
    $('#message').val("");
    $('#error-message-name').text(' ');
    $('#name').removeClass('border-error');
    $('#error-message').text(' ');
    $('#email').removeClass('border-error');
    $('#error-message-message').text(' ');
    $('#message').removeClass('border-error');
    


});

$(function(){
  $('#btn-send').click(function(){
      var name,email,message;
      //get date
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;
    
    email=$('#email').val();
    name=$('#name').val();
    message=$('#message').val();
    var emailpattern=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;



    if (name.trim() == "" || message.trim() == "" || email.trim()=="" )
    {
      $('#btn-send').prop('disabled', true);
      return false;
    }
    else
    {
      $('#btn-send').prop('disabled', false);
      
    }

    
     
    

    var contactUs=
    {
        email:email,
        name:name,
        message:message,
        date:today
    }

    console.log(contactUs);

    $.ajax({
        type:'PATCH',
        url:`http://127.0.0.1:3002/api/users/ContactUs/`,
        data:
        {
            email:contactUs.email,
            name:contactUs.name,
            message:contactUs.message,
            date:contactUs.date
        },
        seccess:function(data)
        {
          
          
        }


    });
    Swal.fire({
      position: 'middle',
      icon: 'success',
      title: 'Thank you for contacting us, we will contact you shortly by email ',
      showConfirmButton: false,
      timer: 4000
    });
    setTimeout(() => {
      location.reload();
    }, 2000);
  });


})