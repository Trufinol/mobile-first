$(function() {
    // Close modal
    $('.modal-close').click(function(e) {
        e.preventDefault();
        console.log($(this).parent('.modal').toggleClass('is-active'));
    });

    // Close message
    $(document).on('click', '.message-panel .dismiss', function() {
        $(this).parent('.message-panel').fadeOut(300);
    });
});