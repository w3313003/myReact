'use strict';

function createElement(tag, attrs, ...children) {
    return {
        tag,
        attrs,
        children
    }
};
function render(vnode, container) {

}
const React = {
    createElement
}
const element = (
    <div class='add'>
        hello<span>world!</span>
    </div>
);
console.log(element);

function _inherits(subClass, superClass) { 
    if (typeof superClass !== "function" && superClass !== null) { 
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); 
    }; 
    subClass.prototype = Object.create(superClass && superClass.prototype, 
        { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); 
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; 
}
