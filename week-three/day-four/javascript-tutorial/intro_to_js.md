# Evolution

> Javascript is a programming language.

> Web/Mobile Apps, Real time networking apps like chatbots and games

> Every browser comes equipped with JavaScript Engine that executes JS code

`Firefox: SpiderMonkey; Chrome: V8`

> Javascript can also run outside browsers now (Node.js - Program where V8 engine is used inside of a C++ Program

> JavaScript v/s ECMAScript

`ECMAScript is the organization responsible for developing the specification or standard that Javascript as a language should follow. While Javascript is a programming language that actually implements this standard and adheres to it.`

> ECMAScript's first draft or version was released in 1997

`ECMAScript 2015/ES6 (6th Edition) - 2015`
`ECMAScript 2016/ES7 (7th Edition) - 2016`
`ECMAScript 2017/ES8 (8th Edition) - 2017`
`ECMAScript 2018/ES9 (9th Edition) - 2018`

> ES.Next - proposals for new features. New version of specification not finalized yet.

> Javascript Introduction

#### _In Browser - Introduction to chrome developer tools_

`console.log('Hello World');`

- undefined shows up because console function doesn't have a return value.

`2 + 2;`

- no undefined is showed here as arithmetic operations always returns a value

`alert('I am a pop up window');`

#### _In HTML File - Introduction to < script > tag_

`In html file, you can add JS code in between <head> or <body> tags`

`When using script tag always put it at the end just before ending body tag. Why???`

- Because your browsers loads elements from top to bottom. Usually javascript files are heavy in size and might take time to load and you don't want your browser to show blank screen while content is loaded.
- Most javascript code is to add behavior to html elements. They talk to these elements and thus we want to make sure that all the elements are rendered

#### _In Seperate JS File - Seperation of Concerns_

`Things should be kept where it is obvious to store them`

`Javascript is all about behavior and html is all about content. Always try to keep them seperated`

#### _Variables in JS_

`Like a labelled Box. Label is the variable name and content of the box is the data we store in variable.`

`Variable names cannot be one of the reserved keywords in JS`

`Variable names should be meaningful`

`Cannot start with number and cannot have hyphen or space. Always use camelCase`

`Variable names are case-sensitive`

`Types of data that can be stored in Javascript (Data Types) are usually divided into two parts`

- Primitive - String, Number(int, float, double, etc.), Boolean, undefined, null
- Reference - Objects, Array, Function

`Undefined can be both type and value`

`null is value of type object`

> For Objects

`Dot Notation is usually preferred for ease of use`

`Bracket Notation is used when we don't know until runtime which property we want to access`

```
var selection = 'name';
person[selection] = 'Noor';
```

#### _Static v/s Dynamic Typed Languages_

`static languages are strongly typed. Variables needs to be defined and initialized before use. Compile time. Bugs are caught way ahead of encounter`

`dynamic languages are weakly typed. Variables need not be initialized before use. Interpreted. Bugs may be introduced due to variable may be storing wrong type of data`

#### _Arrays_

`Why array index starts at 0 and not at 1?`

```
Array address: 0x7ffe9472bad0
Array[0] = 0x7ffe9472bad0
Array[1] = 0x7ffe9472bad4
Array[2] = 0x7ffe9472bad8
Array[3] = 0x7ffe9472badc
Array[4] = 0x7ffe9472bae0
Array[5] = 0x7ffe9472bae4
```
