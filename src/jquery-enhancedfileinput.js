(function( $ ) {
  $.fn.enhanceFileInput = function(options) {

    var settings = $.extend( {
      'initial_value' : '',
      'condition'     : function(initial_value){return true;},
      'html'        : "<img src='img/select.png'>"
    }, options);

    return this.each(function() {

      var $this = $(this);

      // wrapper for enhanced_input
      var input = $this.get(0);
      $this.wrap("\
        <div \
          class='enhanced_file_input_wrapper' \
          id='enhanced_file_input_wrapper_for_"+input.id+"'\
        >\
      ");

      // html for the enhanced_input
      $('#enhanced_file_input_wrapper_for_'+input.id).append("\
        <div class='enhanced_input_container'>\
          <input \
            id='enhanced_file_input_for_"+input.id+"' \
            class='enhanced_file_input'>\
          "+settings['html']+"\
        </div>"
      );

      var enhanced_file_input = $('#enhanced_file_input_for_'+input.id).get(0);

      var initial_value = settings['initial_value'];
      var condition = settings['condition'];

      if(condition(initial_value))
        $(enhanced_file_input).val(filename(initial_value));

      // transfer the input's value to enhanced_file_input when it changes
      input.relatedElement = enhanced_file_input;
      input.onchange = preserve_value;

      //styling to hide the original input and show the enhanced one
      $('.enhanced_file_input_wrapper').css('position', 'relative');
      $('#'+input.id).css({
        'position': 'relative',
        'opacity': '0',
        'z-index': '2'
      });
      $('.enhanced_input_container').css({
        'position': 'absolute',
        'top': '0',
        'left': '0',
        'z-index': '1'
      });

    });

  };
})( jQuery );

function filename(path){
  path = path.replace(/^.*[\\\/]/, ''); // strip file path
  path = path.replace(/\?.*/, ''); // strip cache expires salt
  return path
}

function preserve_value(){
  this.relatedElement.value = filename(this.value);
}
