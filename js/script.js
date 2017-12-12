$(function () {

  // проверка email 
  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

// проверка на заполненность блоков
function checkSubmitButton(formInput) {
  var $form = formInput;
  var errorInput = 0;
  var email = $form.find('.mail-input').val();
  agreeCheck = $('.agreement-check', $form),
    agreeError = $('.agreement-check-error', $form);

  $('input[required]', $form).each(function() {
    var valueInput = $(this).val();
    var parentInput = $(this).parent();

    if (!valueInput) {
      parentInput.addClass('has-error');
      errorInput = errorInput + 1;
    } else {
      parentInput.removeClass('has-error');

      if ($(this).hasClass('mail-input')) {
        if(validateEmail(email)) {
          parentInput.removeClass('has-error');
        } else {
         parentInput.addClass('has-error');
         errorInput = errorInput + 1;
       }
     }
   }
   return errorInput;
 })
  if (agreeCheck.length > 0) {
    if(!agreeCheck.prop('checked')) {
      agreeError.css('display', 'block');
      errorInput = errorInput + 1;
    } else {
      agreeError.css('display', 'none');
    }
  }  
  if(errorInput == 0)  {
    return true;
  } else {
    return false;
  }
}

// тут пишем отправку письма!!!
$('.form-submit').click(function(e) {
  var formInput = $(this).parents('form');
  e.preventDefault();
  if (checkSubmitButton(formInput)) {
    $('.form-submit').text('Ваша заявка отправлена');
    $('.form-submit').addClass('out');
  }
});


$('.scroll-to').click(function (e) {
  e.preventDefault();
  $('html,body').animate({scrollTop:$('#form-scroll').offset().top+"px"},{duration:1E3});
});


});