'use strict';

function createElement(tag, attrs, ...children) {
    return {
        tag,
        attrs,
        children
    }
};
function render(vnode, container) {
   if(typeof vnode === 'string') {
		const textNode = document.createTextNode( vnode );
		container.appendChild(textNode);
		return;
   };
   const dom = document.createElement(vnode.tag);
   if(vnode.attrs) {
		Object.keys(vnode.attrs).forEach(key => {
		// 当属性名为className时，改回class
		if ( key === 'className' ) key = 'class';            
		dom.setAttribute( key, vnode.attrs[ key ] )
	   })
   };
   vnode.children.forEach( child => render( child, dom) ); 
   return container.appendChild(dom);
}
const React = {
    createElement
}

const ReactDOM = {
    render(vnode, container) {
		container.innerHTML = '';
		return render(vnode, container)
	}
};

function tick() {
	const element = (
		<div class='add'>
			hello<span>world!</span>
			 <h2>It is {new Date().toLocaleTimeString()}.</h2>
		</div>
	);
	ReactDOM.render(
	    element,
	    document.getElementById('root')
	);
};
setInterval( tick, 1000 );
