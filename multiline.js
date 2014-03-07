/*!
	multiline
	Multiline strings in JavaScript
	https://github.com/sindresorhus/multiline
	by Sindre Sorhus
	MIT License
*/
(function () {
	'use strict'; 

	/* match all multi-line comments
	 * matches oddities such as function /* comment *\/ () {}
	 */
	var reCommentContents = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;

	/* match YUI (!) / Closure Compiler (@preserve) preserve syntax or default (/*)
	 * matches pre-minified and post-minified scripts 
	 * start matching after: comment start block => optional whitespace => newline
	 * stop matching before: last newline => optional whitespace => comment end block
	 */
	var reCommentPreserve = /(?:^\/\*!?|@preserve)(?:\s*\r?\n)([\s\S]*)(?:\r?\n\s*\*\/$)/;

	var multiline = function (fn) {
		if (typeof fn !== 'function')
			throw new TypeError('Expected a function.');
		if (fn.toString().match(reCommentContents) == null)
			return '';
		return (RegExp.lastMatch.match(reCommentPreserve) || [])[1] || '';
	};

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = multiline;
	} else {
		window.multiline = multiline;
	}
})();
