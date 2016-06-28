$(document).ready(function() {

  $('#submit').on('click', function(){
    addDonut();
  });

  var count = 0;
  $.getJSON('http://api.doughnuts.ga/doughnuts/', function(data) {
    $.each(data, function(i) {
      // console.log(data[i].style);
      var content = ('<h2> ' + data[i].style + ' - <em>' + data[i].flavor + ' </em></h2>');
      var li = $("<li>")
        .html(content)
        .attr('donut-data-id', data[i].id)
        .addClass(data[i].id);
      $('#ul').append(li);
      count += 1;
      console.log(count);
    });
  });

  var addDonut = function() {
    var newDonut = $.ajax({
      url: 'http://api.doughnuts.ga/doughnuts/',
      method: 'POST',
      data: {
        style: $('input#style').val(),
        flavor: $('input#flavor').val()
      }
    });
    console.log("successful POST to API");
    newDonut.done(function(data) {
      console.log(data);
    });
    newPost = $('input#style').val();
    $('#ul')
    .append("<li><h2>" +
    $('input#style').val() + ' - <em>' + $('input#flavor').val() + "</em></h2></li>");
    // example:
    // http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_html_append
    document.getElementById("style").reset();
    // $("#style")[0].reset();
    // $("#flavor")[0].reset();
  };

  function deleteNote() {
      // console.log($(this));
      // console.log($(this).data('note-id'));
      var donutId = $(this).data('note-id');
      var del = confirm('Are you sure?');
      if (del) {
        $.ajax({
          url: 'http://api.doughnuts.ga/doughnuts/' + noteId,
          // ($(this).attr("class")) //GET THE CLASS OF CLICKED
          method: 'DELETE',
          success: function(data) {
            console.log(data);
            $('tr[data-note-id="' + noteId + '"]').remove();
          },
          error: function(data) {
            console.log('ERROR');
          }
        });
      }
    }

});
