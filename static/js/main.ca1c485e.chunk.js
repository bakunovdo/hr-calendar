(this.webpackJsonpcalendar=this.webpackJsonpcalendar||[]).push([[0],{143:function(e,t,n){},172:function(e,t,n){"use strict";n.r(t);var a=n(18),i=n(0),r=n.n(i),c=n(17),s=n.n(c),o=(n(143),n(214)),u=n(20),d=n(30),l=n(80),j=n.n(l),b=n(217),h=n(216),w=n(179),D=j()((function(e){return{root:{backgroundColor:"#e7e7e7"}}})),O=Object(b.a)((function(e){var t=e.CalendarModel,n=D(),i="day"===t.view.current?n.root:"",r="week"===t.view.current?n.root:"",c="month"===t.view.current?n.root:"";return Object(a.jsxs)(h.a,{color:"primary",children:[Object(a.jsx)(w.a,{className:i,onClick:function(){return t.setDayView()},children:"Day"}),Object(a.jsx)(w.a,{className:r,onClick:function(){return t.setWeekView()},children:"Week"}),Object(a.jsx)(w.a,{className:c,onClick:function(){return t.setMonthView()},children:"Month"})]})})),f=j()((function(e){return{paper:{overflow:"auto"}}})),v=Object(b.a)((function(e){var t=e.CalendarModel,n=f(),r=Object(i.useCallback)((function(){return Object(a.jsx)(d.j.FlexibleSpace,{children:Object(a.jsx)(O,{CalendarModel:t})})}),[]),c=(new Date).getTime();return Object(a.jsx)(o.a,{className:n.paper,children:Object(a.jsxs)(d.h,{data:t.data,children:[Object(a.jsx)(u.s,{defaultCurrentDate:c}),Object(a.jsx)(u.k,{onCommitChanges:function(e){var n=e.added,a=e.changed,i=e.deleted;n&&t.addEvent(n),a&&t.changeEvent(a),i&&t.deleteEvent(i)}}),Object(a.jsx)(u.m,{}),Object(a.jsx)(d.j,{flexibleSpaceComponent:r}),Object(a.jsx)(d.e,{}),Object(a.jsx)(d.i,{}),t.getCurrentView,Object(a.jsx)(d.d,{}),Object(a.jsx)(d.c,{}),Object(a.jsx)(d.b,{showOpenButton:!0,showDeleteButton:!0}),Object(a.jsx)(d.a,{})]})})})),x=n(124),k=n(57),y=n(122),m=n(123),p=n(50),g=[{title:"Create Icons for Website",startDate:new Date(2020,11,6),endDate:new Date(2020,11,8),allDay:!0,id:1},{title:"Google AdWords Strategy",startDate:new Date(2020,11,7,0,0),endDate:new Date(2020,11,8,10,30),id:2},{title:"Rollout of New Website and Marketing Brochures",startDate:new Date(2020,11,10,10,0),endDate:new Date(2020,11,10,14,30),id:3},{title:"Update NDA Agreement",startDate:new Date(2020,11,10,16,0),endDate:new Date(2020,11,10,18,30),id:4},{title:"Customer Workshop",startDate:new Date(2020,11,11,0,0),endDate:new Date(2020,11,15,10,30),allDay:!0,id:5},{title:"Submit New Website Design",startDate:new Date(2020,11,8,14,0),endDate:new Date(2020,11,8,16,0),allDay:!0,id:6}],C={startDayHour:0,endDayHour:24,cellDuration:60},M=new(function(){function e(){Object(y.a)(this,e),this.data=[],this.view={current:"week",day:function(){return Object(a.jsx)(d.f,Object(k.a)({},C))},week:function(){return Object(a.jsx)(d.k,Object(k.a)({},C))},month:function(){return Object(a.jsx)(d.g,Object(k.a)({},C))}},Object(p.c)(this,{},{deep:!0}),this.setData(g)}return Object(m.a)(e,[{key:"setData",value:function(e){this.data=e}},{key:"setDayView",value:function(){this.view.current="day"}},{key:"setWeekView",value:function(){this.view.current="week"}},{key:"setMonthView",value:function(){this.view.current="month"}},{key:"addEvent",value:function(e){var t=Object.assign({id:(new Date).getTime()},e);this.data=[].concat(Object(x.a)(this.data),[t])}},{key:"changeEvent",value:function(e){this.data=this.data.map((function(t){return e[t.id]?Object(k.a)(Object(k.a)({},t),e[t.id]):t}))}},{key:"deleteEvent",value:function(e){this.data=this.data.filter((function(t){return t.id!==e}))}},{key:"getCurrentView",get:function(){return this.view[this.view.current]()}}]),e}()),V={height:"100%",padding:"10px",display:"flex",flexDirection:"column"};var W=function(){return Object(a.jsx)("div",{style:V,children:Object(a.jsx)(v,{CalendarModel:M})})};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(W,{})}),document.getElementById("root"))}},[[172,1,2]]]);
//# sourceMappingURL=main.ca1c485e.chunk.js.map