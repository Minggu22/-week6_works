$(document).ready(function () {

    $(".door1").on("click", function () {
        $(".door1").addClass("active")
        $(".monster").addClass("see")
    })

    $(".door2").on("click", function () {
        $(".door2").addClass("active")
    })

    $(".door3").on("click", function () {
        $(".door3").addClass("active")
    })

    $(".door4").on("click", function () {
        $(".door4").addClass("active")
    })

    $(".door5").on("click", function () {
        $(".door5").addClass("active")
    })

    $(".door6").on("click", function () {
        $(".door6").addClass("active")
    })

    $(".door7").on("click", function () {
        $(".door7").addClass("active")
    })

    $(".door8").on("click", function () {
        $(".door8").addClass("active")
    })



    $(".door1").on("mouseleave", function () {
        $(".door1").removeClass("active")
        $(".monster").removeClass("see")
    })

    $(".door2").on("mouseleave", function () {
        $(".door2").removeClass("active")
    })

    $(".door3").on("mouseleave", function () {
        $(".door3").removeClass("active")
    })

    $(".door4").on("mouseleave", function () {
        $(".door4").removeClass("active")
    })

    $(".door5").on("mouseleave", function () {
        $(".door5").removeClass("active")
    })

    $(".door6").on("mouseleave", function () {
        $(".door6").removeClass("active")
    })

    $(".door7").on("mouseleave", function () {
        $(".door7").removeClass("active")
    })

    $(".door8").on("mouseleave", function () {
        $(".door8").removeClass("active")
    })

})