function better_file_input_for(input_id, initial_content){
  var l = $('#'+input_id).get(0);

  // html for the better_input
  $(l).parent().append("\
    <div class='better_input'>\
      <input id='better_file_input_for_"+input_id+"' class='fakeinput'>\
      <img src='img/select.png'>\
    </div>"
  );

  var better_file_input = $('#better_file_input_for_'+input_id).get(0);

  if (initial_content)
    $(better_file_input).val(filename(initial_content));

  // transfer the original input's value to better_file_input when it changes
  l.relatedElement = better_file_input;
  l.onchange = preserve_value;

  //styling to hide the original input and show the enhanced one
  $('.file_input_container').css('position', 'relative');
  $('.file_input').css({
    'position': 'relative',
    'opacity': '0',
    'z-index': '2'
  });
  $('.better_input').css({
    'position': 'absolute',
    'top': '0',
    'left': '0',
    'z-index': '1'
  });
}

function filename(path){
  path = path.replace(/^.*[\\\/]/, ''); // strip file path
  path = path.replace(/\?.*/, ''); // strip cache expires salt
  return path
}

function preserve_value(){
  this.relatedElement.value = filename(this.value);
}
