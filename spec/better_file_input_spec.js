describe("better_file_input", function() {

  describe ('filename', function(){
    it("with a Windows path, should leave only the file name", function(){
      expect(filename('C:\\path\\to\\file.ext?1234')).toEqual('file.ext');
    });    

    it("with a Unix path, should leave only the file name", function(){
      expect(filename('/path/to/file.ext?1234')).toEqual('file.ext');
    });    

  });

  describe ('better_file_input_for', function(){
    it('with an input_id, should add: [wrapper, input, onchange]',function() {
      setFixtures('<input id="example_input"></div>');
      better_file_input_for('example_input');
      expect($('#better_file_input_wrapper_for_example_input')).toExist();
      expect($('.better_input_container input.better_file_input')).toExist();
      expect($('#example_input').get(0).onchange).toBe(preserve_value);
    });

    it('using data-better-file-input-id should also work',function() {
      setFixtures('<input data-better-file-input-id="example_input"></div>');
      better_file_input_for('example_input');
      expect($('[data-better-file-input-id=example_input]').get(0).onchange)
        .toBe(preserve_value);
    });

    it("with initial_content, should set it as the new input's value",function() {
      setFixtures('<input id="example_input"></div>');
      better_file_input_for('example_input', 'initial value');
      expect($('#better_file_input_for_example_input').val())
        .toBe('initial value');
    });

    describe("with a condition for the initial_content", function(){
      beforeEach(function() {
        setFixtures('<input id="example_input"></div>');
        condition = function(value){
          return (value.indexOf('missing.png') == -1)
        };
      });

      it("should set it as the new input's value if true",function() {        
        better_file_input_for('example_input', 'initial value', condition);
        expect($('#better_file_input_for_example_input').val())
          .toBe('initial value');
      });

      it("should not set it as the new input's value if false",function() {        
        better_file_input_for('example_input', 'missing.png', condition);
        expect($('#better_file_input_for_example_input').val())
          .toBe('');
      });

    });

  });

});