$(document).ready(function() {
    $('#burger').click(function() {
        $('#nav-menu').toggleClass('show');
        $(this).toggleClass('active');
    });
});
