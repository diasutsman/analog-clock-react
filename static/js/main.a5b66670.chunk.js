(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(2),o=n.n(r),s=(n(17),n(19),n(3)),l=n(4),i=n(6),u=n(5),d=n(7),m="translate(-50%, -50%)",g=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={secondDeg:0,minuteDeg:0,hourDeg:0},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setClockWiseEveryMilis()}},{key:"setClockWiseEveryMilis",value:function(){var e=this;setInterval(function(){e.setState(function(){var e=new Date;return{secondDeg:6*e.getSeconds()+.006*e.getMilliseconds(),minuteDeg:6*e.getMinutes()+.1*e.getSeconds(),hourDeg:30*e.getHours()+1*(60*e.getMinutes()+e.getSeconds())/120}})},1)}},{key:"render",value:function(){return c.a.createElement("div",{className:"clock"},Array.from({length:61},function(e,t){var n=t%5===0&&0!==t;return c.a.createElement("div",{className:"second",key:t,style:{transform:"".concat(m," rotate(").concat(6*t,"deg)")}},c.a.createElement("div",{className:"bar",style:{height:n?20:5}}),c.a.createElement("span",{className:"number",style:{transform:"translateX(-50%) rotate(".concat(360-6*t,"deg)")}},n?t/5:""))}),c.a.createElement("div",{id:"second",style:{transform:"".concat(m," rotate(").concat(this.state.secondDeg,"deg")}},c.a.createElement("div",null)),c.a.createElement("div",{id:"minute",style:{transform:"".concat(m," rotate(").concat(this.state.minuteDeg,"deg")}},c.a.createElement("div",null)),c.a.createElement("div",{id:"hour",style:{transform:"".concat(m," rotate(").concat(this.state.hourDeg,"deg")}},c.a.createElement("div",null)),c.a.createElement("div",{className:"center-dot"}))}}]),t}(c.a.Component);var v=function(){return c.a.createElement("div",{className:"clock-wrapper"},c.a.createElement("h1",null,"Analog Clock With JS"),c.a.createElement(g,null))},f=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,22)).then(function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null))),f()},8:function(e,t,n){e.exports=n(21)}},[[8,3,2]]]);
//# sourceMappingURL=main.a5b66670.chunk.js.map