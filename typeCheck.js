/* typeCheck v1.0 by GuineaGuy99 */
function typeCheck(){
	var args = typeCheck.caller.arguments;
	if (args.length != arguments.length) throw 'received an incorrect number of arguments';
	for (var i=0;i<args.length;i++) {
		if (typeof arguments[i] === 'string') {
			if (arguments[i] == '*') continue;
			if (typeOf(args[i]) !== arguments[i].toLowerCase()) {
				throw new TypeError('argument['+i+'] is a <'+typeOf(args[i])+'> but should be a <'+arguments[i].toLowerCase()+'>');
			}
		} else {
			if (!(args[i] instanceof arguments[i])) {
				throw new TypeError('argument['+i+'] is not a instance of <'+arguments[i].name+'>');
			}
		}
	}
	function typeOf(obj){return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();}
}