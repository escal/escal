function carousel( domNode, delay ) {
	var defaultStyle = {
		'background-size': 'contain',
		'background-position': 'center'
	};

	var sources = [];

	[].forEach.call( domNode.children, function( node ){ sources.push( node.src ); } );

	step();

	function step() {
		var source = sources.shift();

		domNode.style.backgroundImage = 'url(' + source + ')';
		domNode.style.backgroundSize = 'contain';
		domNode.style.backgroundPosition = 'center';
		domNode.style.backgroundRepeat = 'no-repeat';

		sources.push( source );

		setTimeout( step, delay );
	}
}
