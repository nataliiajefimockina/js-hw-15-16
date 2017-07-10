'use strict';
$(function() {

    var $submit = $('.submit');
    var $field = $('.search-request')

    function sendRequest () {

      var $request = $('.search-request').val().split(" ");
      var $urlString = 'https://pixabay.com/api/?key=3750037-59b70644a0ea3a4147bb2a2ad&q='+ $request.join("+") +'&image_type=photo'

      $.ajax({
        url: $urlString,
        dataType: 'json',
        success: function (data) {
          if(data.hits.length > 0) {
            var $target = $('.results-list');
            $target.html('<ul></ul>')
            var $targetList = $('.results-list ul')
            for (var i=0; i<data.hits.length; i++) {
              $($targetList).append('<li><img src="' + data.hits[i].webformatURL + '"></li>')
            }
          }
        }
      })
}

function enterTrigger (e) {
    if(e.keyCode == 13) {
      sendRequest();
    }
}

$submit.on('click', sendRequest);
$field.on('keypress', enterTrigger);

});
