# multiline [![Build Status](https://travis-ci.org/sindresorhus/multiline.png?branch=master)](https://travis-ci.org/sindresorhus/multiline)

> Multiline strings in JavaScript

No more string concatenation or array join!

*Note that ES6 will have [template string](http://www.2ality.com/2011/09/quasi-literals.html) which can be multiline, but time...*

#### Before

```js
var str = '' +
'<!doctype html>' +
'<html>' +
'	<body>' +
'		<h1>Hello world</h1>' +
'	</body>' +
'</html>' +
'';
```

#### After

```js
var str = multiline(function(){/*
<!doctype html>
<html>
	<body>
		<h1>Hello world!</h1>
	</body>
</html>
*/});
```


## How

It works by wrapping the text in a block comment, anonymous function, and a function call. The anonymous function is passed into the function call and the contents of the comment extracted.

Even though it's [slower than string concat](http://jsperf.com/multiline), that shouldn't realistically matter as you can still do 2 million of those a second. Convenience over micro performance always.


## Install

#### [npm](https://npmjs.org/package/multiline)

```
npm install --save multiline
```

### Browser

#### Compatibility

- Latest Chrome
- Firefox >=17
- Safari >=4
- Opera >=9
- Internet Explorer >=6

Make sure to use `/*!` instead of `/*` when minifying to prevent the comments from being stripped.

Download [manually](https://github.com/sindresorhus/multiline/releases) or with a package-manager.

#### [Bower](http://bower.io)

```
bower install --save multiline
```

#### [Component](https://github.com/component/component)

```
component install sindresorhus/multiline
```


## Example

Everything after the first newline and before the last will be returned as seen below:

```js
var str = multiline(function(){/*
<!doctype html>
<html>
	<body>
		<h1>Hello world!</h1>
	</body>
</html>
*/});

console.log(str);
```

Which outputs:

```
<!doctype html>
<html>
	<body>
		<h1>Hello world!</h1>
	</body>
</html>
```

And a [real-world use-case](https://github.com/sindresorhus/pageres/blob/cb85922dec2b962c7b45484023c9ba43a9abf6bd/cli.js#L14-L33).


## Experiment

I've also done an [experiment](experiment.js) where you don't need the anonymous function. It's too fragile and slow to be practical though.

It generates a callstack and extracts the contents of the comment in the function call.

```js
var str = multiline(/*
<!doctype html>
<html>
	<body>
		<h1>Hello world!</h1>
	</body>
</html>
*/);
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
