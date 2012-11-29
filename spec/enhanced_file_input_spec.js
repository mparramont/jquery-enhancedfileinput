describe("enhanced_file_input", function() {

  describe ('filename', function(){
    it("with a Windows path, should leave only the file name", function(){
      expect(filename('C:\\path\\to\\file.ext?1234')).toEqual('file.ext');
    });    

    it("with a Unix path, should leave only the file name", function(){
      expect(filename('/path/to/file.ext?1234')).toEqual('file.ext');
    });    

  });

  describe ('enhanced_file_input_for', function(){
    beforeEach(function() {
      setFixtures('<input id="example_input"></div>');
    });

    it('should add: [wrapper, input, onchange]', function() {
      $('#example_input').enhanceFileInput();
      expect($('#enhanced_file_input_wrapper_for_example_input')).toExist();
      expect($('.enhanced_input_container input.enhanced_file_input')).toExist();
      expect($('#example_input').get(0).onchange).toBe(preserve_value);
    });

    it('should add html after the enhanced input, if provided', function() {
      $('#example_input').enhanceFileInput({
        'html': '<button id="myButton"></button>'
      });
      expect($('button#myButton')).toExist();

    });

    describe("with some initial value", function(){
      options = { 'initial_value': 'val' };

      it("should set it as the new input's value",function() {
        $('#example_input').enhanceFileInput(options);
        expect($('#enhanced_file_input_for_example_input').val()).toBe('val');
      });

      describe("with a condition for the initial value", function(){
        options['condition'] = function(value){
          return (value.indexOf('missing.png') == -1)
        };

        it("should set it as the new input's value if true",function() {        
          $('#example_input').enhanceFileInput(options);
          expect($('#enhanced_file_input_for_example_input').val()).toBe('val');
        });

        it("should not set it as the new input's value if false",function() {        
          options['initial_value'] = 'missing.png';
          $('#example_input').enhanceFileInput(options);
          expect($('#enhanced_file_input_for_example_input').val()).toBe('');
        });

      });

    });
    
  });

});