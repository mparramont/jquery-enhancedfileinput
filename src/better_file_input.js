function better_file_input_for(input_id, initial_content){
  var original_input = $('#'+input_id).get(0);

  // wrapper for better_input
  $(original_input).wrap("<div class='better_input_wrapper'>");

  // html for the better_input
  $('.better_input_wrapper').append("\
    <div class='better_input_container'>\
      <input id='better_file_input_for_"+input_id+"' class='better_file_input'>\
      <img src='img/select.png'>\
    </div>"
  );

  var better_file_input = $('#better_file_input_for_'+input_id).get(0);

  if (initial_content)
    $(better_file_input).val(filename(initial_content));

  // transfer the original input's value to better_file_input when it changes
  original_input.relatedElement = better_file_input;
  original_input.onchange = preserve_value;

  //styling to hide the original input and show the enhanced one
  $('.file_input_container').css('position', 'relative');
  $('.file_input').css({
    'position': 'relative',
    'opacity': '0',
    'z-index': '2'
  });
  $('.better_input_container').css({
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
