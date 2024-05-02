// script.js
$(document).ready(function() {
    $('#wave').click(function() {
      $(this).css({
        'animation-duration': '2s'
      });
    });
        $('.toggle-checkbox').change(function() {
            if ($(this).is(':checked')) {
                $('body').addClass('light-mode');
            } else {
                $('body').removeClass('light-mode');
            }
        });
    });
