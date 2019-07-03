exports.handler = function(event, context, callback) {
    /*
      https://medium.com/@mbebenita/hello-world-in-webassembly-83951757775

      // C
      char * hello() {
        return "Hello World";
      }

      // Web Assembly
      (module
        (type $type0 (func (result i32)))
        (table 0 anyfunc)
        (memory 1)
        (export "memory" memory)
        (export "hello" $func0)
        (func $func0 (result i32)
          i32.const 16
        )
        (data (i32.const 16)
          "Hello World\00"
        )
      )
    */

    let buffer = new Uint8Array([0,97,115,109,1,0,0,0,1,133,128,128,128,0,1,96,0,1,
      127,3,130,128,128,128,0,1,0,4,132,128,128,128,0,1,112,0,0,5,131,128,128,128,0,
      1,0,1,6,129,128,128,128,0,0,7,146,128,128,128,0,2,6,109,101,109,111,114,121,2,
      0,5,104,101,108,108,111,0,0,10,138,128,128,128,0,1,132,128,128,128,0,0,65,16,11,
      11,146,128,128,128,0,1,0,65,16,11,12,72,101,108,108,111,32,87,111,114,108,100,0])

    let module = new WebAssembly.Instance(new WebAssembly.Module(buffer))
    let { hello, memory } = module.exports
    let memoryBuffer = new Uint8Array(memory.buffer)

    let result = ""

    for (var index = hello(); memoryBuffer[index]; index++) {
      result += String.fromCharCode(memoryBuffer[index])
    }

    callback(null, {
      statusCode: 200,
      body: result
    });
  };

