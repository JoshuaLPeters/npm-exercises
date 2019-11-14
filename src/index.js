import $ from "jquery";
$(document).ready(function() {

    function sayHello() {
        return "hello";
    }

    console.log(sayHello);
    $('body').css('background-color', 'blue');
});