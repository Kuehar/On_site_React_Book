// P.18 2.2.1.1
/*
var foo = 0;

function func(){
  if(true){
    var foobar = 'foobar';
  }
  
  console.log(foobar);
}
func();
*/

// P.18 2.2.1.2
let bar = 1;
const baz = 2;

function func(){
  if(true){
    let foobar1 = 'foobar1';
    const foobar2 = 'foobar2';
  }
  // スコープ外なので出力エラー
  console.log(foobar1); 
  console.log(foobar2);
}