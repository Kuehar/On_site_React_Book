import React from 'react';

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
// P.19 2.2.1.3
// constは定数なので代入できない例
const baz = 2;
baz = 100;
console.log(baz);

// P.19 2.2.1.4
class Human{
  // コンストラクタ
  constructor(name:string){
    this.name = name;
  }

  // インスタンスメソッド
  say(){
    console.log('Hello My name is ' + this.name + ' .');
  }
}

const Taro = new Human('Taro');

Taro.say();



class Human{
  constructor(name:string){
    this.name = name
  }

  say(){
    console.log('Hello My name is ' + this.name + ' .');
  }
}


// Humanを継承してHumanAdvancedを作成している
class HumanAdvanced extends Human{
  say(){
    console.log('I am ' + this.name + '. Thanks.');
  }
}

const Taro = new Human('Taro');
const Hanako = new HumanAdvanced('Hanako');

Taro.say(); // Hello My name is Taro.
Hanako.say(); // I am Hanako. Thanks.

// P.21 2.2.1.6
var name:string = 'Taro';

var message:string = 'Hello my name is ' + name + ' .';
console.log(message); // Hello my name is Taro.

const message2:string = `Hello my name is ${name}.`;

const message3:string = `
I am ${name}.
Thanks.
`;



// P.22 2.2.1.7
let a,b;
[a,b] = [1,2];
console.log(a); // 1.
console.log(b); // 2.

// 定義されたオブジェクトから相当する名前の変数へまとめて展開
const list = {
  foo: 1,
  bar: 2,
  baz: 3
}

const { foo,bar,baz} = list;
console.log(foo); // 1
console.log(bar); // 2
console.log(baz); // 3


// P.36 2.3.1.2
// React標準APIによるDOM定義
const Hello = () => React.createElement("p", { className: "Hello" }, "Hello, world!!");

export default Hello; // <p class="hello">Hello world!!</p>


// P.2.3.1.3
// JSXを使用したDOM定義
// こちらの方がXML風の「開始タグ」と「終了タグ」によるマークアップが採用されているためチーム開発では採用されやすい。
const Hello = () => {
  return <p className='hello'>Hello world!!</p>;
}
export default Hello; // <p class="hello">Hello world!!</p>



// P.36 2.3.1.5
// React標準APIによるDOM定義(入れ子)
const Hello = () => React.createElement(
  'section',
  { className:'box'},
  React.createElement(
    'h1',
    null,
    'message'
  ),
  React.createElement(
    'p',
    {className:'hello'},
    'Hello world!!'
  )
);

export default Hello;
*/

const Hello = () => {
  return (
    <section className="box">
      <h1>Message</h1>
      <p className="hello">Hello world!!</p>
    </section>
  )
};

export default Hello;