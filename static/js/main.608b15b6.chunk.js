(this["webpackJsonp2019-2-Atom-Frontend-A-Kutuzov"]=this["webpackJsonp2019-2-Atom-Frontend-A-Kutuzov"]||[]).push([[0],[,,function(e,t,a){e.exports={sheet:"Profile_sheet__yZwu0",toolBar:"Profile_toolBar__2-9UO",backButton:"Profile_backButton__oU4_H",title:"Profile_title__21JpR",confirm:"Profile_confirm__1fUi9",avatar:"Profile_avatar__1fH0k",Box:"Profile_Box__1B1qD",attachment:"Profile_attachment__FwVIE",information:"Profile_information__17VPp",customInput:"Profile_customInput__3tVUV"}},,,,function(e,t,a){e.exports={header:"HeaderChat_header__3heOh",headerButton:"HeaderChat_headerButton__2K77O",fullStatus:"HeaderChat_fullStatus__20NsM",userAvatar:"HeaderChat_userAvatar__195oP",userName:"HeaderChat_userName__3-xXT",name:"HeaderChat_name__I9IcK",status:"HeaderChat_status__3P65G",backButton:"HeaderChat_backButton__3N4IB",searchButton:"HeaderChat_searchButton__2mNSG",optionsButton:"HeaderChat_optionsButton__2Yx3d"}},,,function(e,t,a){e.exports={dialogWrap:"DialogBox_dialogWrap__IxTyz",textContent:"DialogBox_textContent__5nKcg",dialogName:"DialogBox_dialogName__1Gsh5",dialogAvatar:"DialogBox_dialogAvatar__6-U48",status:"DialogBox_status__10X_a",messageTime:"DialogBox_messageTime__3qfbJ",lastMessage:"DialogBox_lastMessage__tnJfk",messageStatus:"DialogBox_messageStatus__C_9VS"}},function(e,t,a){e.exports={footer:"FormInput_footer__2Rv4r",customInput:"FormInput_customInput__2BLjQ",additionalButton:"FormInput_additionalButton__2jPAQ",listStyle:"FormInput_listStyle__UQRRH",li:"FormInput_li__2pBg7",inputButton:"FormInput_inputButton__3kNHl"}},,,,,,,,function(e,t,a){e.exports={messageBox:"MessageBox_messageBox__2HSJh",smoothDrop:"MessageBox_smoothDrop__3q2IV",time:"MessageBox_time__3IT6X",text:"MessageBox_text__2tGZF",img:"MessageBox_img__1EJXL",Box:"MessageBox_Box__cK_U8"}},,,function(e,t,a){e.exports={header:"HeaderDialogList_header__2rNrX",message:"HeaderDialogList_message__18L-D",menu:"HeaderDialogList_menu__2w5pb",search:"HeaderDialogList_search__22FFT"}},function(e,t,a){e.exports={messageWrap:"MessageList_messageWrap__Ooxrj",messageBox:"MessageList_messageBox__32R2c",smoothDrop:"MessageList_smoothDrop__3N9Ys",self:"MessageList_self__1Qfd0",outSide:"MessageList_outSide__1kEbI",dropZone:"MessageList_dropZone__1G6Hs"}},,,,function(e,t,a){e.exports={wrap:"ChatList_wrap__2OeBO",noMessage:"ChatList_noMessage__1prP_"}},function(e,t,a){e.exports={buttonNew:"ButtonNewChat_buttonNew__76SdQ",pen:"ButtonNewChat_pen__FlBr8"}},,function(e,t,a){e.exports={send:"SendButton_send__2T4QO",cancel:"SendButton_cancel__3gVV8",mic:"SendButton_mic__25tY-"}},,,,,,,function(e,t,a){e.exports={wrap:"ControlChat_wrap__16pul"}},function(e,t,a){e.exports=a(49)},,,,,,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(33),c=a.n(r),o=a(11),i=a(12),l=a(14),m=a(13),u=a(4),d=a(15),h=a(7),p=a(16),g=a(20),v=a(9),_=a.n(v);function f(e){var t=e.boxInfo,a=e.setActiveChat;return s.a.createElement(h.b,{to:"/chat/".concat(t.id),onClick:function(e){a(t.id)}},s.a.createElement("div",{className:_.a.dialogWrap},s.a.createElement("div",{className:_.a.dialogAvatar}),s.a.createElement("div",{className:_.a.textContent},s.a.createElement("div",{className:_.a.dialogName},t.dialogName),s.a.createElement("div",{className:_.a.lastMessage},t.lastMessage)),s.a.createElement("div",{className:_.a.status},s.a.createElement("div",{className:_.a.messageTime},t.messageTime),s.a.createElement("div",{className:_.a.messageStatus},t.messageStatus))))}var E=a(26),N=a.n(E);function b(e){var t=[],a=0,n=e.chatList,r=e.setActiveChat;return n?n.map((function(e){var n=s.a.createElement(f,{key:a++,boxInfo:e,setActiveChat:r});t.push(n)})):t.push(s.a.createElement("div",{key:a,className:N.a.noMessage},"\u041d\u0435\u0442 \u0447\u0430\u0442\u0438\u043a\u043e\u0432")),s.a.createElement("div",null,s.a.createElement("div",{className:N.a.wrap},t))}var x=a(21),C=a.n(x);function B(e){return s.a.createElement("div",{className:C.a.header},s.a.createElement(h.b,{to:"/profile"},s.a.createElement("div",{className:C.a.menu})),s.a.createElement("div",{className:C.a.message},"\u041c\u0435\u0441\u0441\u0435\u043d\u0434\u0436\u0435\u0440"),s.a.createElement("div",{className:C.a.search}))}var O=a(27),S=a.n(O);function y(e){var t=e.createChat;return s.a.createElement("div",{className:S.a.buttonNew,onClick:function(e){var a=prompt("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u0447\u0430\u0442\u0430","NewChat"),n=prompt("\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, \u0441 \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u0432\u0435\u0434\u0435\u043c \u0434\u0438\u0430\u043b\u043e\u0433","");n&&t(a,n)}},s.a.createElement("div",{className:S.a.pen}))}var D=function(e){function t(e){var a;Object(o.a)(this,t);var n=(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).parseDataDB();return a.state={chatList:n.chatList},a.createChat=a.createChat.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"parseDataDB",value:function(){var e;try{e={chatList:JSON.parse(localStorage.getItem("chatList"))}}catch(t){localStorage.clear(),e={chatList:null}}return e}},{key:"createChat",value:function(e,t){var a=this.state.chatList,n=new Date(parseInt((new Date).getTime(),10));n="".concat(String(n.getHours()).padStart(2,"0"),":").concat(String(n.getMinutes()).padStart(2,"0")),this.setState({chatList:[].concat(Object(g.a)(a),[{id:a.length,dialogName:e,lastMessage:"",messageTime:"".concat(n[0],":").concat(n[1]),messageStatus:"",isGroup:!1,isOnline:!1,userName:t}])}),localStorage.setItem("chatList",JSON.stringify(a))}},{key:"render",value:function(){var e=this.state.chatList;return s.a.createElement("div",null,s.a.createElement(B,null),s.a.createElement(b,{chatList:e,setActiveChat:this.props.setActiveChat}),s.a.createElement(y,{createChat:this.createChat}))}}]),t}(s.a.Component),M=a(6),w=a.n(M);function k(e){return s.a.createElement("div",{className:w.a.header},s.a.createElement("div",{className:w.a.headerButton},s.a.createElement(h.b,{to:"/"},s.a.createElement("div",{className:w.a.backButton}))),s.a.createElement("div",{className:w.a.fullStatus},s.a.createElement("div",{className:w.a.userAvatar}),s.a.createElement("div",{className:w.a.userName},s.a.createElement("div",{className:w.a.name},"\u0410\u0440\u0442\u0435\u043c \u041a\u0443\u0442\u0443\u0437\u043e\u0432"),s.a.createElement("div",{className:w.a.status},"Online"))),s.a.createElement("div",{className:w.a.headerButton},s.a.createElement("div",{className:w.a.searchButton}),s.a.createElement("div",{className:w.a.optionsButton})))}var j=a(22),L=a.n(j),I=a(18),A=a.n(I);function R(e){var t=e.content,a=null;return a="self"===e.shift?{float:"right"}:{float:"left"},s.a.createElement("div",{className:A.a.messageBox,style:a},!t.attachment&&s.a.createElement("div",{className:A.a.text},t.text),t.attachment&&"audio"===t.attachment.type&&s.a.createElement("div",{className:A.a.Box},s.a.createElement("audio",{src:t.attachment.path[0],controls:!0})),t.attachment&&"document"===t.attachment.type&&s.a.createElement("a",{href:t.attachment.path[0]},t.attachment.name),t.attachment&&"image"===t.attachment.type&&s.a.createElement("p",{className:A.a.img},s.a.createElement("img",{src:t.attachment.path[0],alt:"",height:"200px"})),s.a.createElement("div",{className:A.a.time},t.time))}function H(e){var t=e.messageMap,a=e.activeChat,n=e.isAudio,r=[],c=1;return a>=0&&t[a]&&t[a].map((function(e){if("self"===e.owner){var t=s.a.createElement("div",{className:L.a.messageBox,key:c++},s.a.createElement(R,{shift:"self",content:e,isAudio:n}));r.push(t)}else if("outside"===e.owner){var a=s.a.createElement("div",{className:L.a.messageBox,key:c++},s.a.createElement(R,{shift:"outside",content:e}));r.push(a)}else console.log("Error")})),s.a.createElement("div",{className:L.a.messageWrap},r)}var P=a(30),T=a(28),U=a.n(T),F=a(29),J=a.n(F),Z=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={recording:!1,audios:[]},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"startRecording",value:function(e){var t,a=this;return U.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),n.next=3,U.a.awrap(navigator.mediaDevices.getUserMedia({audio:!0}));case 3:t=n.sent,this.mediaRecorder=new MediaRecorder(t,{mimeType:"audio/webm"}),this.chunks=[],this.mediaRecorder.ondataavailable=function(e){e.data&&e.data.size>0&&a.chunks.push(e.data)},this.mediaRecorder.start(10),this.setState({recording:!0});case 9:case"end":return n.stop()}}),null,this)}},{key:"stopRecording",value:function(e){e.preventDefault(),this.mediaRecorder.stop(),this.setState({recording:!1}),this.saveAudio()}},{key:"saveAudio",value:function(){var e=this.state.audios,t=new Blob(this.chunks,{type:"audio/webm"}),a=window.URL.createObjectURL(t);e.push([a]),this.props.handlerAudio(e[e.length-1]),this.setState({audios:e})}},{key:"render",value:function(){var e=this,t=this.state.recording;return s.a.createElement("div",null,!t&&s.a.createElement("button",{className:J.a.mic,onClick:function(t){return e.startRecording(t)}}),t&&s.a.createElement("button",{className:J.a.cancel,onClick:function(t){return e.stopRecording(t)}}))}}]),t}(s.a.Component),V=a(10),K=a.n(V);function G(e){var t=e.sendMessage,a=Object(n.useRef)(),r=Object(n.useRef)(),c=Object(n.useState)(""),o=Object(P.a)(c,2),i=o[0],l=o[1],m=Object(n.useState)(null),u=Object(P.a)(m,2),d=u[0],h=u[1];return s.a.createElement("div",{className:K.a.footer},s.a.createElement("div",{className:K.a.inputButton},s.a.createElement("div",{className:K.a.additionalButton,onClick:function(e){!d&&h({height:"120px",boxShadow:"0 0 60px 10px #151716"}),d&&h(null)}},s.a.createElement("ul",{style:d,className:K.a.listStyle},s.a.createElement("li",{className:K.a.li,onClick:function(e){navigator.geolocation.getCurrentPosition((function(e){var a="https://www.openstreetmap.org/#map=17/".concat(e.coords.latitude,"/").concat(e.coords.longitude),n=s.a.createElement("a",{href:a},a);t(n)}))}},"\u0413\u0435\u043e\u043b\u043e\u043a\u0430\u0446\u0438\u044f"),s.a.createElement("li",{className:K.a.li,onClick:function(){return r.current.click()}},"\u0424\u0430\u0439\u043b",s.a.createElement("input",{ref:r,type:"file",onChange:function(e){var a=e.target.files;if(!a.length)return!1;var n={name:a[0].name,type:"document",path:[window.URL.createObjectURL(a[0])]};t(null,n)},style:{display:"none"}})),s.a.createElement("li",{className:K.a.li,onClick:function(){return a.current.click()}},"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",s.a.createElement("input",{ref:a,type:"file",accept:"image/*",onChange:function(e){var a=e.target.files;if(!a.length)return!1;var n={name:a[0].name,type:"image",path:[window.URL.createObjectURL(a[0])]};t(null,n)},style:{display:"none"}}))))),s.a.createElement("input",{className:K.a.customInput,onKeyPress:function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;13===e.charCode&&(t(i,a),l(""))},onChange:function(e){l(e.target.value)},value:i,placeholder:"\u041f\u043e\u0440\u0430\u0434\u0443\u0439 \u0441\u043e\u0431\u0435\u0441\u0435\u0434\u043d\u0438\u043a\u0430!",type:"text"}),s.a.createElement(Z,{handlerAudio:function(e){e&&t(null,{name:"AudioMessage",type:"audio",path:e},!0)}}))}var z=a(36),Q=a.n(z),W=function(e){function t(e){var a;Object(o.a)(this,t);var n=(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).parseData();return a.state={messageMap:n.messageMap,activeChat:e.activeChat,setVisibleDropZone:!1,dropFiles:[],isAudio:!1},a.sendMessage=a.sendMessage.bind(Object(u.a)(a)),a.triggerDropZone=a.triggerDropZone.bind(Object(u.a)(a)),a.dragOver=a.dragOver.bind(Object(u.a)(a)),a.dragLeave=a.dragLeave.bind(Object(u.a)(a)),a.drop=a.drop.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"parseData",value:function(){var e;try{e={messageMap:JSON.parse(localStorage.getItem("messageMap"))}}catch(t){localStorage.clear(),console.log("Error local storage"),e={messageMap:null}}return e}},{key:"triggerDropZone",value:function(e){this.setState({setVisibleDropZone:e})}},{key:"dragOver",value:function(e){e.preventDefault(),this.triggerDropZone(!0)}},{key:"dragLeave",value:function(e){this.triggerDropZone(!1)}},{key:"drop",value:function(e){e.preventDefault(),e.stopPropagation(),this.triggerDropZone(!1);var t={name:"drop",type:"image",path:[window.URL.createObjectURL(e.dataTransfer.files[0])]};this.sendMessage(null,t)}},{key:"sendMessage",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=this.state,s=n.messageMap,r=n.activeChat,c=new Date(parseInt((new Date).getTime(),10));if(c=c.toString().split(" ")[4].split(":"),r>=0&&(e||t)){if(s[r])s[r]=[].concat(Object(g.a)(s[r]),[{id:s[r].length+2,attachment:t,owner:"self",text:e,time:"".concat(c[0],":").concat(c[1])}]),this.setState({messageMap:s,isAudio:a});else{var o=[].concat(Object(g.a)(s),[[{id:1,attachment:t,owner:"self",text:e,time:"".concat(c[0],":").concat(c[1])}]]);this.setState({messageMap:o})}localStorage.setItem("messageMap",JSON.stringify(s))}}},{key:"render",value:function(){var e=this.state,t=e.messageMap,a=e.activeChat,n=e.isAudio;return s.a.createElement("div",{className:Q.a.wrap,onDrop:this.drop,onDragOver:this.dragOver,onDragLeave:this.dragLeave},s.a.createElement(k,null),s.a.createElement(H,{messageMap:t,activeChat:a,isAudio:n}),s.a.createElement(G,{sendMessage:this.sendMessage}))}}]),t}(s.a.Component),X=a(2),Y=a.n(X);function q(e){return s.a.createElement("div",{className:Y.a.sheet},s.a.createElement("div",{className:Y.a.toolBar},s.a.createElement(h.b,{to:"/"},s.a.createElement("div",{className:Y.a.backButton})),s.a.createElement("div",{className:Y.a.title},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u0443\u0435\u043c \u043f\u0440\u043e\u0444\u0438\u043b\u044c"),s.a.createElement(h.b,{to:"/"},s.a.createElement("div",{className:Y.a.confirm}))),s.a.createElement("div",{className:Y.a.avatar}),s.a.createElement("div",{className:Y.a.Box},s.a.createElement("div",{className:Y.a.information},"\u0412\u0430\u0448\u0430 \u0444\u0430\u043c\u0438\u043b\u0438\u044f \u0438 \u0438\u043c\u044f"),s.a.createElement("input",{className:Y.a.customInput,placeholder:"\u0414\u0430 \u0432\u044b \u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0439 \u0447\u0435\u043b\u043e\u0432\u0435\u043a:)",type:"text"})),s.a.createElement("div",{className:Y.a.Box,style:{marginBottom:"80px"}},s.a.createElement("div",{className:Y.a.information},"Username"),s.a.createElement("input",{className:Y.a.customInput,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0438\u043a\u043d\u0435\u0439\u043c",type:"text"}),s.a.createElement("div",{className:Y.a.attachment},"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u0430\u044f \u0434\u043b\u0438\u043d\u0430 - 5 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432")),s.a.createElement("div",{className:Y.a.Box,style:{height:"120px"}},s.a.createElement("div",{className:Y.a.information},"\u041e \u0441\u0435\u0431\u0435"),s.a.createElement("input",{className:Y.a.customInput,placeholder:"\u041f\u043e\u0440\u0430\u0434\u0443\u0439\u0442\u0435 \u043d\u0430\u0441!",type:"text"}),s.a.createElement("div",{className:Y.a.attachment,style:{paddingTop:"16px"}},"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043e \u0441\u0435\u0431\u0435, \u043c\u044b \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u043f\u0440\u043e\u0430\u043d\u0430\u043b\u0438\u0437\u0438\u0440\u0443\u0435\u043c \u0438 \u0432\u044b\u0447\u0438\u0441\u043b\u0438\u043c \u0432\u0430\u0441 \u043f\u043e IP")))}var $=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={activeChat:null},a.setCurrentChat=a.setCurrentChat.bind(Object(u.a)(a)),function(){var e=new Date(parseInt((new Date).getTime(),10));e=e.toString().split(" ")[4].split(":");var t=[{id:0,dialogName:"Data Science",lastMessage:"Dumin - one love",messageTime:"".concat(e[0],":").concat(e[1]),messageStatus:"sent",isGroup:!0,isOnline:!1,userName:"Artem Kutuzov"},{id:1,dialogName:"Stanlox",lastMessage:"\u042f \u0412 \u041a\u041e\u0420\u041c2 \u043d\u0435 \u043f\u043e\u0439\u0434\u0443, MERCY - \u0441\u0438\u043b\u0430, \u041a\u041e\u0420\u041c - \u043c\u043e\u0433\u0438\u043b\u0430",messageTime:"".concat(e[0],":").concat(e[1]),messageStatus:"read",isGroup:!1,isOnline:!0,userName:"Autist Stanlox"}];localStorage.setItem("chatList",JSON.stringify(t));var a={id:1,attachment:null,owner:"self",text:"Hello",time:"".concat(e[0],":").concat(e[1])},n={id:2,attachment:null,owner:"self",text:"\u042f \u0412 \u041a\u041e\u0420\u041c2 \u043d\u0435 \u043f\u043e\u0439\u0434\u0443, MERCY - \u0441\u0438\u043b\u0430, \u041a\u041e\u0420\u041c - \u043c\u043e\u0433\u0438\u043b\u0430",time:"".concat(e[0],":").concat(e[1])},s=[[a,{id:3,attachment:null,owner:"outside",text:"Dumin - one love",time:"".concat(e[0],":").concat(e[1])}],[n]];localStorage.setItem("messageMap",JSON.stringify(s))}(),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){try{var e=localStorage.getItem("activeChat"),t=JSON.parse(e);t>=0&&this.setState({activeChat:t})}catch(a){localStorage.clear()}}},{key:"setCurrentChat",value:function(e){this.setState({activeChat:e}),localStorage.setItem("activeChat",JSON.stringify(e))}},{key:"render",value:function(){var e=this.state.activeChat;return s.a.createElement(h.a,{basename:"/2019-2-Atom-Frontend-A-Kutuzov"},s.a.createElement(p.c,null,s.a.createElement(p.a,{path:"/",exact:!0},s.a.createElement(D,{setActiveChat:this.setCurrentChat})),s.a.createElement(p.a,{path:"/chat"},s.a.createElement(W,{activeChat:e})),s.a.createElement(p.a,{path:"/profile",component:q})))}}]),t}(s.a.Component);a(48);c.a.render(s.a.createElement($,null),document.getElementById("root"))}],[[37,1,2]]]);
//# sourceMappingURL=main.608b15b6.chunk.js.map