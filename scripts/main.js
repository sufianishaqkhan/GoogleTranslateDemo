var init = function () {
    console.log('init called.');

    setTimeout(function () {
        $("#google_translate_element").hide();
        $(".skiptranslate").hide();
        $('body').css('top','0px');
    }, 3000);
};

$( document ).ready(function() {
    //Initialize
    init();
});