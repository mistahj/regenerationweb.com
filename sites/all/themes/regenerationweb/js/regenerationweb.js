var THEME_COLORS = ['#E0401C', '#E5B051', '#272F30', '#F7EDB7', '#9E2B20'];

(function($) {
  $(window).ready(function() {
    // Lazy-load google maps script:
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "http://maps.googleapis.com/maps/api/js?sensor=false&callback=regenGMapInit";
    document.body.appendChild(script);

    // Image carousel widget on front page.
    $('.flex-slider').flexslider({
          animation: "fade",
          controlsContainer: ".flex-container"
    });

    // Render colors.
    var renderTopEdgeColors = function() {
      var NUM_BOXES = 40;
      var BOX_WIDTH = $(window).width() / NUM_BOXES;
      var edgeEl = $('#edge-colors');

      for (var i = 0; i < NUM_BOXES; i++) {
        var boxEl = $('<div>&nbsp;</div>').attr({
          class: 'box_'+i,
          style:
            'background-color:'+THEME_COLORS[Math.floor(Math.random()*THEME_COLORS.length)]+
            ';width:'+BOX_WIDTH+'px'
        });
        edgeEl.append(boxEl);
      }
    };
    renderTopEdgeColors();
  })
})(jQuery);

// The callback on script load will load this fn, which renders the Google Map
// into the div.
function regenGMapInit() {
  // Regen addr: 238 E 15th st Oakland
  var lat = 37.798388;
  var lng = -122.254935;
  var regen = new google.maps.LatLng(lat, lng);
  var myOptions = {
    zoom: 14,
    center: regen,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(document.getElementById("regen-gmaps"), myOptions);
  var marker = new google.maps.Marker({
    map:map,
    draggable:false,
    animation: google.maps.Animation.DROP,
    position: regen
  });
}
