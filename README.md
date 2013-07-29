jQuery plugin to enhance the HTML file input.
Use it to add styling, a custom button, or initial values to your file inputs.

[View demo.](http://mparramont.github.io/jquery-enhancedfileinput/demo.html)

In your html:

    <script type="text/javascript" src="src/jquery-enhancedfileinput.js"></script>
    ...
    <input type="file" class='file_input' id='example_input'>

In your js:

    options {
      'initial_value' : 'initial_file.jpg',
      'condition'     : function(initial_value){return true;},
      'html'          : "<img src='img/select.png'>"
    };

    $('.file_input').enhanceFileInput(options);

Will create the following:

    <div class="enhanced_file_input_wrapper" id="enhanced_file_input_wrapper_for_example_input" style="position: relative;">
        <input type="file" class="file_input" id="example_input" style="position: relative; opacity: 0; z-index: 2;">
        <div class="enhanced_input_container" style="position: absolute; top: 0px; left: 0px; z-index: 1;">
            <input id="enhanced_file_input_for_example_input_1" class="enhanced_file_input">
            <img src="img/select.png">
        </div>
    </div>

And look like this:

![demo image](http://mparramont.github.com/jquery-enhancedfileinput/img/demo.png)

Inspired by [quirksmode.org/dom/inputfile.html](http://quirksmode.org/dom/inputfile.html)
