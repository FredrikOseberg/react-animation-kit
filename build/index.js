module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e){t.exports=require("react")},function(t,e,n){t.exports=n(2)()},function(t,e,n){"use strict";var r=n(3);function o(){}t.exports=function(){function t(t,e,n,o,i,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e};return n.checkPropTypes=o,n.PropTypes=n,n}},function(t,e,n){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i=n(1),a=n.n(i);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){y(t,e,n[e])})}return t}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h=function(t){function e(t){var n,r,o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,o=l(e).call(this,t),n=!o||"object"!==c(o)&&"function"!=typeof o?p(r):o,y(p(p(n)),"decorateStyles",function(t){var e=n.props,r=e.left,o=void 0!==r&&r,i=e.right,a=void 0!==i&&i,c=e.up,s=void 0!==c&&c,l=e.down,f=void 0!==l&&l,p=e.by,y=void 0===p?void 0:p,h=e.delayBy,d=void 0===h?void 0:h,b=u({},t);return o&&(b.transform="translateX(".concat(y,"px)")),a&&(b.transform="translateX(-".concat(y,"px)")),s&&(b.transform="translateY(".concat(y,"px)")),f&&(b.transform="translateY(-".concat(y,"px)")),d&&(b.transitionDelay="".concat(d,"s")),b}),n.state={applyStyles:!1},n}var n,i,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(e,r["Component"]),n=e,(i=[{key:"componentDidMount",value:function(){var t=this;setTimeout(function(){return t.setState({applyStyles:!0})},0)}},{key:"render",value:function(){var t,e=this.state.applyStyles,n=this.props.easeTiming,r=void 0===n?.5:n;e&&(t={opacity:"1",transform:"translateX(0) translateY(0)"});var i=u({},this.decorateStyles({opacity:"0",transition:"opacity ".concat(r,"s ease, transform ").concat(r,"s ease")}),t);return o.a.createElement("div",{style:i},this.props.children)}}])&&s(n.prototype,i),a&&s(n,a),e}();h.propTypes={easeTiming:a.a.number,left:a.a.bool,right:a.a.bool,up:a.a.bool,down:a.a.bool,by:a.a.number,delayBy:a.a.number},h.defaultProps={easeTiming:.5,left:!1,right:!1,up:!1,down:!1,by:void 0,delayBy:void 0};var d=h;function b(t){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function O(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var S=function(t){function e(t){var n,r,o,i,a,c;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,o=v(e).call(this,t),n=!o||"object"!==b(o)&&"function"!=typeof o?O(r):o,i=O(O(n)),c=function(){n.props.mounted||n.setState({show:!1})},(a="onTransitionEnd")in i?Object.defineProperty(i,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[a]=c;var u=n.props.mounted;return n.state={show:u,styles:null},n}var n,i,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}(e,r["Component"]),n=e,(i=[{key:"componentDidUpdate",value:function(t){var e=this,n=this.props,r=n.mounted,o=n.enter,i=n.leave;t.mounted!==r&&(r?this.setState({show:!0},function(){setTimeout(function(){e.setState({styles:o})},50)}):this.setState({styles:i}))}},{key:"render",value:function(){var t=this.props.start,e=this.state,n=e.show,r=e.styles;return n?o.a.createElement("div",{className:"".concat(t," ").concat(r),onTransitionEnd:this.onTransitionEnd},this.props.children):null}}])&&m(n.prototype,i),a&&m(n,a),e}();S.propTypes={mounted:a.a.bool.isRequired,enter:a.a.string,leave:a.a.string,start:a.a.string},S.defaultProps={enter:"",leave:"",start:""};var w=S;function j(t){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function P(t){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function E(t,e){return(E=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function H(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function T(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var C=function(t){function e(t){var n,r,i;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,i=P(e).call(this,t),n=!i||"object"!==j(i)&&"function"!=typeof i?H(r):i,T(H(H(n)),"setupEventListeners",function(t){window.addEventListener("transitionend",t)}),T(H(H(n)),"setInitialHeight",function(){setTimeout(function(){n.setState({initialHeight:n.outerContentRef.current.clientHeight})},0)}),T(H(H(n)),"setSelectedHeight",function(){n.setState({selectedHeight:n.contentRef.current.clientHeight,displayDiv:!0},n.handleCallback)}),T(H(H(n)),"setBaseline",function(){var t=n.props,e=t.callback,r=t.renderSpaceAfter;e&&e(0,n.props.animateHeightId),r&&setTimeout(function(){n.setState({displayDiv:!1})},500)}),T(H(H(n)),"handleCallback",function(){var t=n.props.callback;t&&t(n.state.selectedHeight-n.state.initialHeight,n.props.animateHeightId)}),T(H(H(n)),"getScale",function(){return n.props.shouldChange?n.state.selectedHeight/n.state.initialHeight:1}),T(H(H(n)),"getTransition",function(){var t=n.props.transition;return t||"transform 0.5s ease-in-out"}),T(H(H(n)),"getStyle",function(){var t=n.props.style,e=n.getScale();return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){T(t,e,n[e])})}return t}({position:"absolute",top:"0",right:"0",left:"0",bottom:"0",backgroundColor:"#fff",transition:n.getTransition(),transform:"scaleY(".concat(e,")"),transformOrigin:"center top",zIndex:"-1000"},t)}),T(H(H(n)),"getHeight",function(){return n.state.initialHeight?"".concat(n.state.initialHeight,"px"):"100%"}),T(H(H(n)),"renderSpaceAfter",function(){if(n.state.displayDiv)return o.a.createElement("div",{style:{height:"".concat(n.state.selectedHeight-n.state.initialHeight,"px")}})}),n.state={initialHeight:0,selectedHeight:0,displayDiv:!1},n.contentRef=o.a.createRef(),n.outerContentRef=o.a.createRef(),n}var n,r,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&E(t,e)}(e,o.a.Component),n=e,(r=[{key:"componentDidMount",value:function(){var t=this.props.handleTransitionEnd;this.setInitialHeight(),t&&this.setupEventListeners()}},{key:"componentWillUnmount",value:function(){var t=this.props.handleTransitionEnd;t&&window.removeEventListener("transitionend",t)}},{key:"componentDidUpdate",value:function(t){var e=this.props.shouldChange;e!==t.shouldChange&&(e?this.setSelectedHeight():this.setBaseline())}},{key:"render",value:function(){var t=this.props.renderSpaceAfter,e=this.getStyle(),n=this.getHeight();return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{style:{position:"relative",height:n,width:"100%"},ref:this.outerContentRef},o.a.createElement("div",{style:e,className:this.props.className}),o.a.createElement("div",{ref:this.contentRef},this.props.children)),t&&this.renderSpaceAfter())}}])&&_(n.prototype,r),i&&_(n,i),e}();function k(t){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function x(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function R(t){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function A(t,e){return(A=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function I(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function D(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var M=function(t){function e(){var t,n,r,i;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var a=arguments.length,c=new Array(a),u=0;u<a;u++)c[u]=arguments[u];return r=this,i=(t=R(e)).call.apply(t,[this].concat(c)),n=!i||"object"!==k(i)&&"function"!=typeof i?I(r):i,D(I(I(n)),"renderItems",function(){return void 0!==n.props.selectedId&&void 0!==n.props.transitionAmount?n.renderSingleOpen():n.props.transitionAmounts?n.renderMultiple():void 0}),D(I(I(n)),"renderMultiple",function(){return o.a.Children.map(n.props.children,function(t){var e=n.calculateMultipleHeight(n.props.transitionAmounts,t),r=n.getTransition();return n.createContainer(r,e,t)})}),D(I(I(n)),"calculateMultipleHeight",function(t,e){var n=0;return t.forEach(function(t){t.id<e.props.animateHeightId&&(n+=t.transitionAmount)}),n}),D(I(I(n)),"renderSingleOpen",function(){return o.a.Children.map(n.props.children,function(t){var e=0;t.props.animateHeightId>n.props.selectedId&&(e=n.props.transitionAmount);var r=n.getTransition();return n.createContainer(r,e,t)})}),D(I(I(n)),"getTransition",function(){var t="transform 0.5s ease-in-out";return n.props.transition&&(t=n.props.transition),t}),D(I(I(n)),"createContainer",function(t,e,n){return o.a.createElement("div",{style:{transition:t,transform:"translateY(".concat(e,"px)")}},n)}),n}var n,r,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&A(t,e)}(e,o.a.Component),n=e,(r=[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,this.renderItems())}}])&&x(n.prototype,r),i&&x(n,i),e}();function B(t){return(B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function L(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function U(t){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function Y(t,e){return(Y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function F(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var N=function(t){function e(t){var n,r,i,a,c,u;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,i=U(e).call(this,t),n=!i||"object"!==B(i)&&"function"!=typeof i?F(r):i,a=F(F(n)),u=function(){n.props.shouldChange?n.setState({selectedHeight:n.contentRef.current.clientHeight}):n.setState({initialHeight:n.contentRef.current.clientHeight})},(c="handleTransitionEnd")in a?Object.defineProperty(a,c,{value:u,enumerable:!0,configurable:!0,writable:!0}):a[c]=u,n.state={initialHeight:"auto",selectedHeight:0},n.contentRef=o.a.createRef(),n}var n,r,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Y(t,e)}(e,o.a.Component),n=e,(r=[{key:"componentDidMount",value:function(){var t=this.props.adjustOnTransitionEnd;this.setState({initialHeight:this.contentRef.current.clientHeight}),t&&window.addEventListener("transitionend",this.handleTransitionEnd)}},{key:"componentWillUnmount",value:function(){this.props.adjustOnTransitionEnd&&window.removeEventListener("transitionend",this.handleTransitionEnd)}},{key:"componentDidUpdate",value:function(t){var e=this.props.shouldChange;e!==t.shouldChange&&e&&this.setState({selectedHeight:this.contentRef.current.clientHeight})}},{key:"render",value:function(){var t=this.props,e=t.shouldChange,n=t.transition,r=this.state.initialHeight;e?r="".concat(this.state.selectedHeight,"px"):"auto"!==this.state.initialHeight&&(r="".concat(this.state.initialHeight,"px"));var i=n;return i||(i="height 0.5s ease-in-out"),o.a.createElement("div",{style:{height:r,transition:i}},o.a.createElement("div",{ref:this.contentRef},this.props.children))}}])&&L(n.prototype,r),i&&L(n,i),e}();n.d(e,"FadeIn",function(){return d}),n.d(e,"AnimateOnMount",function(){return w}),n.d(e,"AnimateHeight",function(){return C}),n.d(e,"AnimateHeightContainer",function(){return M}),n.d(e,"AnimateHeightBySacrificingPerf",function(){return N});var q={FadeIn:d,AnimateOnMount:w,AnimateHeight:C,AnimateHeightContainer:M,AnimateHeightBySacrificingPerf:N};e.default=q}]);