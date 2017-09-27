$(function () {
    $("#countdown > h1").countdown('2018/01/08', function(event) {
        $(this).html(event.strftime('%m %w %d %H %M %S'));
    });
});
