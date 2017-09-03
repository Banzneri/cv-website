$(document).ready(function() {
    var folder = "images/";
    $.ajax({
        url : folder,
        success: function (data) {
            $(data).find("a").attr("href", function (i, val) {
                $("#images1").append("<a class='image-link' href='" + folder + val + "'> <img src='"+ folder + val +"' class='flex-item''></a>");
            });
        }
    });
});