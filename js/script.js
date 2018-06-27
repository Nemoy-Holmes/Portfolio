
$(document).ready(function(){

  //smooth scrolling
      var $root = $('html, body');
      $('.navbar-nav a').click(function () {
          var href = $.attr(this, 'href');
          if (href != undefined && href != '#') {
              $root.animate({
                  scrollTop: $(href).offset().top
              }, 500, function () {
                  window.location.hash = href;
              });
          }
          return false;
      });

      $('.dropdown-toggle').dropdown();


  //stellar (background parallax)
  $.stellar();
  //tooltip
      $(function () {
          $('[data-toggle="tooltip"]').tooltip();
      });
//background-color for message-box
      $('.message-box').css("background-color", "#ffdab9");

//appending message
      $('#submit-btn').on('click',function(){
        var name=$('.name').val();
        var phone=$('.phone').val();
        var subject=$('.subject').val();
        var email=$('.email').val();
        var comment=$('.message-box').val();
        if(comment===""){
          $(".message-box").css('border-color', 'red');
        }
        else if(name===""){
          $(".name").css('border-color', 'red');
        }
      else if(email===""){
        $(".email").css('border-color', 'red');
      }
    else if(subject===""){
      $(".subject").css('border-color', 'red');
    }


        else{
        $('#form').hide();
        $('.phone').hide();
        $('.email').hide();
        $('.subject').hide();
        $('.message-box').hide();
        $('#visible-response').html("Thank you for your response, i'll get in");
        return false;
      }
      });
  //keyup

$(".message-box").on("keyup",function(){
  var charCount=$(".message-box").val().length;
  console.log(charCount);
  if(charCount<50){
    $('#char-count').css("color", "black");
  }
  else{
    $('#char-count').css("color","red");
  }
  $('#char-count').html(charCount);
});

//work section
for(var i=0; i<works.length;++i){
  $("#work").append("\
  <div class='col-xs-6 col-md-4 edit-obj'>\
      <a class='work-img' href='"+works[i].link+"'>\
          <img class='img-responsive' src='img/"+works[i].pic+"'>\
          <span class='info'><p class='proj-title'>go to "+works[i].title+"</p>\
          </span>\
          <p class='work-title'>click here: "+works[i].title+"</p>\
      </a>\
  </div>")
$(".proj-title").css("color","maroon");
  var images=$("#work img");
  if(i%2===0){
    $(images[i]).css("border", "2px solid dodgerBlue");
  }
  else{
    $(images[i]).css("border","2px solid salmon");
  };
};

});
//maps start
function initMap(){
  var uluru= {lat:54.3228872, lng:10.122552};
  var map= new google.maps.Map(document.getElementById('map'), {
    center: uluru,
    zoom:8
  });
  //message content
  var contentString= '<div id="content">\
  <div id="siteNotice"></div>\
  <h1 id="firstHeading" class="firstHeading">Address</h1>\
<div id="bodyContent">\
<p>Möllingstr. Kiel, 24103</p>\
</div>\
</div>';
var infowindow= new google.maps.InfoWindow({
  content: contentString
});
//marker
var marker=new google.maps.Marker({
  position:uluru,
  map:map,
  draggable:true,
  animation: google.maps.Animation.DROP,
});
function toggleBounce(){
  if(marker.getAnimation() !==null){
    marker.setAnimation(null);
  }
  else{
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}
marker.addListener('click', toggleBounce);
marker.addListener('click',function(){
  infowindow.open(map, marker);
});
}
