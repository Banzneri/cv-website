$(document).ready(function() {
    var folder = "http://localhost:8000/images/";
    $.ajax({
        url : folder,
        success: function (data) {
            $(data).find("a").attr("href", function (i, val) {
                if( val.match(/\.(jpe?g|png|gif)$/) ) { 
                    $("#images1").append("<a class='image-link' href='" + folder + val + "'> <img src='"+ folder + val +"' class='flex-item''></a>");
                }
            });
        }
    });
});