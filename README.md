jQuery plugin to enhance the HTML file input.
To use:

    options {
      'initial_value' : '',
      'condition'     : function(initial_value){return true;},
      'html'          : "<img src='img/select.png'>"
    };

    $('.file_input).enhanceFileInput(options)

Inspired by [quirksmode.org/dom/inputfile.html](http://quirksmode.org/dom/inputfile.html)
