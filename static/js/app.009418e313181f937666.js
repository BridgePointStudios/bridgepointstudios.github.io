webpackJsonp([1],{"/ohs":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("nav",{staticClass:"nav-wrapper green"},[e("div",{staticClass:"container"},[e("router-link",{staticClass:"brand-logo",attrs:{to:"/"}},[this._v("Meal Volunteers")])],1)])},staticRenderFns:[]},r={name:"App",components:{Navbar:n("VU/8")(null,i,!1,null,null,null).exports}},s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Navbar"),this._v(" "),e("div",{staticClass:"container"},[e("router-view")],1)],1)},staticRenderFns:[]};var l=n("VU/8")(r,s,!1,function(t){n("/ohs")},null,null).exports,o=n("/ocq"),c=n("kxiW"),d=n.n(c),u=(n("881v"),d.a.initializeApp({apiKey:"AIzaSyCZ68og7O5JaShkO1PUfL-0faj_GYd38PI",authDomain:"meal-volunteers.firebaseapp.com",databaseURL:"https://meal-volunteers.firebaseio.com",projectId:"meal-volunteers",storageBucket:"meal-volunteers.appspot.com",messagingSenderId:"769692560635"}).firestore()),m={name:"dashboard",data:function(){return{orders:[]}},created:function(){var t=this;u.collection("orders").get().then(function(e){e.forEach(function(e){console.log(e.data);var n={id:e.id,orderId:e.data().orderId,description:e.data().description,orderedBy:e.data().userId,location:e.data().location};t.orders.push(n)})})}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"dashboard"}},[n("ul",{staticClass:"collection with-header"},[t._m(0),t._v(" "),t._l(t.orders,function(e){return n("li",{key:e.id,staticClass:"collection-item"},[t._v("\n            "+t._s(e.description)),n("br"),t._v(" at   "+t._s(e.location)+" "),n("br"),t._v(" for "+t._s(e.orderedBy)+"\n        ")])})],2),t._v(" "),n("div",{staticClass:"fixed-action-btn"},[n("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:"/new"}},[n("i",{staticClass:"fa fa-plus"})])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"collection-header"},[e("h2",[this._v("Open Orders")])])}]},v=n("VU/8")(m,h,!1,null,null,null).exports,_={name:"new-meal",data:function(){return{items:[]}},created:function(){var t=this;u.collection("items").get().then(function(e){e.forEach(function(e){console.log(e);var n={id:e.id,category:e.data().category,itemId:e.data().itemId,itemName:e.data().itemName};t.items.push(n)})})}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"new-meal"}},[n("ul",{staticClass:"collection with-header"},[t._m(0),t._v(" "),t._l(t.items,function(e){return n("li",{key:e.id,staticClass:"collection-item"},[n("strong",[t._v(t._s(e.category)+":")]),t._v(" "+t._s(e.itemName)+"\n            "),t._m(1,!0),t._v(" "),n("div",{staticStyle:{clear:"both"}})])})],2),t._v(" "),n("button",{staticClass:"btn btn-warning"},[t._v("Submit")])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"collection-header"},[e("h2",[this._v("New Meal")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticStyle:{float:"right"}},[e("span",{staticStyle:{float:"left"}},[e("label",{attrs:{for:"quantity"}},[this._v("Quantity:")])]),e("input",{attrs:{type:"number",id:"quantity",name:"quantity",min:"0",max:"100"}})])}]},p=n("VU/8")(_,f,!1,null,null,null).exports,b={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"view-meal"}},[e("h3",[this._v("View Meal")])])}]},g=n("VU/8")({name:"view-meal",data:function(){return{}}},b,!1,null,null,null).exports,w={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"edit-meal"}},[e("h3",[this._v("Edit Meal")])])}]},y=n("VU/8")({name:"edit-meal",data:function(){return{}}},w,!1,null,null,null).exports;a.a.use(o.a);var C=new o.a({routes:[{path:"/",name:"dashboard",component:v},{path:"/new",name:"new-meal",component:p},{path:"/edit/:meal_id",name:"edit-meal",component:y},{path:"/:meal_id",name:"view-meal",component:g}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:C,components:{App:l},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.009418e313181f937666.js.map