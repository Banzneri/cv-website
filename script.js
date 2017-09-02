$(document).ready(function() {

    var folder = "images/";
    $("body").append( "<img src='"+ folder + val +"'>" );
    $.ajax({
        url : folder,
        success: function (data) {
            $(data).find("a").attr("href", function (i, val) {
                if( val.match(/\.(jpe?g|png|gif)$/) ) { 
                    $("body").append( "<img src='"+ folder + val +"'>" );
                }
                $("h1").hide();
            });
        }
    });
});