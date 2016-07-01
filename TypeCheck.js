/* TypeCheck v1.0 by GuineaGuy99 */
function TypeCheck(){
	var args = TypeCheck.caller.arguments;
	if (args.length != arguments.length) throw 'received an incorrect number of arguments';
	for (var i=0;i<args.length;i++) {
		if (typeof arguments[i] === 'string'){
			if (arguments[i] == '*') continue;
			if (TypeOf(args[i]) !== arguments[i].toLowerCase()) {
				throw new TypeError('argument['+i+'] is a <'+TypeOf(args[i])+'> but should be a <'+arguments[i].toLowerCase()+'>');
			}
		} else {
			if (!(args[i] instanceof arguments[i])) {
				throw new TypeError('argument['+i+'] is not a instance of <'+arguments[i].name+'>');
			}
		}
	}
	function TypeOf(obj){return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();}
}