$(document).ready(function () {

    $("#infoBtn").click(function () {

        $("#modal").css("display", "flex");

        $("#modalBody").html("جاري تحميل المعلومات...");

        $.ajax({
            url: "../booking-modal.html",
            type: "GET",

            success: function (data) {
                $("#modalBody").html(data);
            },

            error: function () {
                $("#modalBody").html(
                    "حدث خطأ أثناء تحميل معلومات الحجز."
                );
            }
        });

    });

    $("#close").click(function () {
        $("#modal").hide();
    });

});