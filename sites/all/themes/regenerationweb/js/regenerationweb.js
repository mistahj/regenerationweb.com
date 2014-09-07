var THEME_COLORS = ['#E0401C', '#E5B051', '#F7EDB7', '#9E2B20', '#40350A'];
// '#272F30' is dark blue

(function($) {
  $(window).ready(function() {
    // Image carousel widget on front page.
    $('.flex-slider').flexslider({
          animation: "slide",
          controlsContainer: ".flex-container"
    });

    // Render colors.
    var renderTopEdgeColors = function(container) {
      var NUM_BOXES = 40;
      var BOX_WIDTH = $(window).width() / NUM_BOXES;

      for (var i = 0; i < NUM_BOXES; i++) {
        var boxEl = $('<div>&nbsp;</div>').attr({
          class: 'box_'+i,
          style:
            'background-color:'+THEME_COLORS[Math.floor(Math.random()*THEME_COLORS.length)]+
            ';width:'+BOX_WIDTH+'px'
        });
        container.append(boxEl);
      }
    };
    //renderTopEdgeColors($('.edge-colors'));

    // Convert MP3 files to native players on the podcast page.
    //$('#aggregator h3.feed-item-title [href$=mp3]').each(function(idx, el) {
    //  var containerEl = $(el).closest('.feed-item');
    //  var linkEl = $('<a></a>').attr("href", el.href).text('Download');
    //  var downloadEl = linkEl.clone().addClass('media-embed').text($(el).text());
    //  containerEl.find('.feed-item-meta').after(linkEl).after(downloadEl);
    //});

    //// Insert media players into anything tagged media-embed
    //$('.media-embed').media({
    //  height: 24,
    //  caption: false,
    //  bgColor: "transparent"
    //});

    $(document).foundation()
  })
})(jQuery);
