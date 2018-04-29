(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1334:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={operators:[{operator_id:"is",label:"Is"},{operator_id:"contains",label:"Contains"},{operator_id:"isLowerThan",label:"<"},{operator_id:"isEqualTo",label:"="},{operator_id:"isHigherThan",label:">"},{operator_id:"isBetween",label:"is between"}],types:[{type_id:"int",operator_ids:["isLowerThan","isEqualTo","isHigherThan"]},{type_id:"string",operator_ids:["is","contains"]},{type_id:"datetime",operator_ids:["is","isBetween"]}],targets:[{target_id:"article.title",label:"Article title",type_id:"string"},{target_id:"article.videoCount",label:"Article video count",type_id:"int"},{target_id:"article.publishingAt",label:"Article publish date",type_id:"datetime"}],logicalTypes:[{logicalType_id:"any",label:"Any"},{logicalType_id:"all",label:"All"},{logicalType_id:"none",label:"None"}]}},1352:function(e,t,o){"use strict";(function(e){c(o(316));var t=o(684),r=o(137),n=c(o(1351)),i=c(o(1349)),a=o(1346),s=o(1344),d=c(o(1334));function c(e){return e&&e.__esModule?e:{default:e}}var u=o(134).withStorySource;(0,t.storiesOf)("ui-predicate",e).addDecorator(u("import Vue from 'vue';\nimport { storiesOf } from '@storybook/vue';\n\nimport { action, actions } from '@storybook/addon-actions';\nimport backgrounds from '@storybook/addon-backgrounds/vue';\nimport Centered from '@storybook/addon-centered';\nimport { withNotes } from '@storybook/addon-notes';\n\nimport { array, boolean, button, color, date, number, select, text, withKnobs } from '@storybook/addon-knobs/vue';\n\nimport DEFAULT_CONFIG from './__fixtures__';\n\nstoriesOf('ui-predicate', module)\n  .addDecorator(Centered)\n  .addDecorator(withKnobs)\n  .addDecorator(withNotes)\n  .addDecorator(\n    backgrounds([\n      {\n        name: 'gray',\n        value: 'whitesmoke',\n        default: true,\n      },\n      {\n        name: 'twitter',\n        value: '#00aced',\n      },\n      {\n        name: 'facebook',\n        value: '#3b5998',\n      },\n    ])\n  )\n  .add(\n    'minimal configuration',\n    () => {\n      return {\n        template: '<ui-predicate :config=\"config\"></ui-predicate>',\n        data() {\n          return { config: DEFAULT_CONFIG };\n        },\n      };\n    },\n    {\n      notes: {\n        markdown: `\n      ## minimal configuration\n\n      \\`<ui-predicate/>\\` only requires a \\`config\\` object.\n      That's how you will pass your \\`targets\\`,\\`operators\\` , \\`types\\` and \\`logicalTypes\\`.\n\n    `,\n      },\n    }\n  )\n  .add(\n    'events | @onChange',\n    () => ({\n      template: '<ui-predicate :config=\"config\" @changed=\"onChange\" @initialized=\"onInit\"></ui-predicate>',\n      data() {\n        return { config: DEFAULT_CONFIG };\n      },\n      methods: {\n        onChange: action('`changed` event'),\n        onInit: action('`initialized` event'),\n      },\n    }),\n    { notes: '' }\n  );\n",{"ui-predicate@events | @onChange":{startLoc:{col:4,line:57},endLoc:{col:17,line:68}},"ui-predicate@minimal configuration":{startLoc:{col:4,line:35},endLoc:{col:5,line:54}}})).addDecorator(i.default).addDecorator(s.withKnobs).addDecorator(a.withNotes).addDecorator((0,n.default)([{name:"gray",value:"whitesmoke",default:!0},{name:"twitter",value:"#00aced"},{name:"facebook",value:"#3b5998"}])).add("minimal configuration",function(){return{template:'<ui-predicate :config="config"></ui-predicate>',data:function(){return{config:d.default}}}},{notes:{markdown:"\n      ## minimal configuration\n\n      `<ui-predicate/>` only requires a `config` object.\n      That's how you will pass your `targets`,`operators` , `types` and `logicalTypes`.\n\n    "}}).add("events | @onChange",function(){return{template:'<ui-predicate :config="config" @changed="onChange" @initialized="onInit"></ui-predicate>',data:function(){return{config:d.default}},methods:{onChange:(0,r.action)("`changed` event"),onInit:(0,r.action)("`initialized` event")}}},{notes:""})}).call(this,o(90)(e))},1353:function(e,t,o){var r={"./ui-predicate.stories.js":1352};function n(e){var t=i(e);return o(t)}function i(e){var t=r[e];if(!(t+1)){var o=new Error('Cannot find module "'+e+'".');throw o.code="MODULE_NOT_FOUND",o}return t}n.keys=function(){return Object.keys(r)},n.resolve=i,e.exports=n,n.id=1353},1354:function(e){e.exports={name:"ui-predicate-vue",version:"0.1.2",description:"Finally a predicate UI component for VueJS",main:"src/index.js",scripts:{"examples:build":"npm run --silent storybook:build","examples:build:watch":"npm run --silent storybook:dev",test:"jest","test:debugger":"node --inspect-brk node_modules/.bin/jest --watch","test:watch":"jest --watch --coverage=false","test:watch:coverage":"npm run --silent test:watch -- --coverage","test:coverage":"true",dev:"parcel --no-cache examples/index.html","storybook:build":"build-storybook --output-dir ../../docs/packages/$npm_package_name/$npm_package_version/examples","storybook:watch":"start-storybook -p 9001","image-snapshots":"npm run storybook:build && npm run image-snapshots:run","image-snapshots:run":"jest --projects=./image-snapshots",lint:"eslint --fix examples src",docs:"jsdoc -c ../../jsdoc.json","docs:private":"jsdoc -c ../../jsdoc.json -p"},author:"Francois-Guillaume Ribreau <npm@fgribreau.com> (http://fgribreau.com/)",license:"MIT",devDependencies:{"@storybook/addon-actions":"4.0.0-alpha.4","@storybook/addon-backgrounds":"4.0.0-alpha.4","@storybook/addon-centered":"4.0.0-alpha.4","@storybook/addon-jest":"4.0.0-alpha.4","@storybook/addon-knobs":"4.0.0-alpha.4","@storybook/addon-links":"4.0.0-alpha.4","@storybook/addon-notes":"4.0.0-alpha.4","@storybook/addon-options":"4.0.0-alpha.4","@storybook/addon-storyshots":"4.0.0-alpha.4","@storybook/addon-storysource":"4.0.0-alpha.4","@storybook/addon-viewport":"4.0.0-alpha.4","@storybook/addons":"4.0.0-alpha.4","@storybook/vue":"4.0.0-alpha.4","@vue/component-compiler-utils":"^1.2.1","@vue/test-utils":"^1.0.0-beta.15","babel-core":"^6.26.0","babel-loader":"^7.1.4","babel-preset-env":"^1.6.0","babel-preset-vue":"^2.0.2","cross-env":"^5.1.4",eslint:"^4.19.1","eslint-plugin-vue":"^4.5.0","file-loader":"^1.1.11",jest:"^22.4.3","jest-serializer-vue":"^1.0.0","jest-vue-preprocessor":"^1.4.0",jsdoc:"^3.5.5","parcel-bundler":"^1.7.1",react:"^16.3.2","react-dom":"^16.3.2","svg-url-loader":"^2.3.2","ui-predicate-core":"^0.1.0","vue-jest":"^2.5.0","vue-loader":"^14.2.2","vue-template-compiler":"^2.5.16",webpack:"^4.6.0","webpack-dev-server":"^3.1.3"},dependencies:{vue:"^2.5.16"}}},1356:function(e,t,o){const{merge:r,find:n,curry:i,prop:a,tap:s,pipe:d,filter:c,map:u,over:p,lens:l,lensPath:m,takeLast:f,clone:g,keys:h,startsWith:v,set:y,differenceWith:b,partition:P,lensProp:_,insert:T}=o(92),C=o(1355),{EventEmitter:A}=o(214);function w(e){return C.fromNullable(e[0]).value()}e.exports=function({dataclasses:e,invariants:t,errors:o,rules:a}){const{CompoundPredicate:s,ComparisonPredicate:p,Predicate:l,Target:m,LogicalType:y}=e,b=(e,t)=>C.fromNullable(n(e=>e.target_id==t,e)),P=(e,t)=>C.fromNullable(n(e=>e.logicalType_id==t,e)),_=i((e,t)=>d(c(({operator_id:e})=>t.includes(e)))(e)),k=i((e,t)=>(t.$operators=_(e.operators,t.operator_ids),t)),M=i((e,o)=>{const r=((e,t)=>C.fromNullable(n(e=>e.type_id==t,e)))(e.types,o.type_id);return t.TargetMustReferToADefinedType(r,o).then(e=>(o.$type=e,o))}),O=(e,t)=>d(e,(e=>(function(t){return t.then(t=>(e(),t))}))(t)),j=t=>{t.operators=u(e.Operator,t.operators),t.logicalTypes=u(e.LogicalType,t.logicalTypes);const o=d(e.Type,k(t));t.types=u(o,t.types);const r=d(e.Target,M(t));return Promise.all(u(r,t.targets)).then(e=>(t.targets=e,t))};function L({data:e,columns:n,options:i}={}){return j(n||L.defaults.columns).then(n=>{let c,u;const m=new A,y=r(L.defaults.options,i);const _=d(function(){const e=!a.predicateToRemoveIsTheLastComparisonPredicate(c,s,p);s.forEach(c,function(t){t.$canBeRemoved=e&&!a.predicateToRemoveIsRootPredicate(c,t)})},function(){m.emit("changed",u)});function k(e){return t.RootPredicateMustBeACompoundPredicate(e,s).then(()=>{c=e})}function M({where:e,how:r="after",type:i}){return Promise.resolve().then(()=>t.AddOnlySupportsAfter(r)).then(()=>t.PredicateTypeMustBeValid(i,l.Types)).then(()=>y[`getDefault${i}`](n,y)).then(t=>{const r=p.is(e);if(r||s.is(e)){if(r){const o=$(e),[r,[n,i]]=f(2,o);r.predicates=T(i+1,t,r.predicates)}else e.predicates.unshift(t);return t}return Promise.reject(new o.CannotAddSomethingElseThanACompoundPredicateOrAComparisonPredicate)})}function j(e){return Promise.resolve().then(()=>t.RemovePredicateMustDifferFromRootPredicate(c,e)).then(()=>t.RemovePredicateCannotBeTheLastComparisonPredicate(c,e,s,p)).then(()=>{if(s.is(e)||p.is(e)){const t=$(e),[o,[r,n]]=f(2,t);return o.predicates.splice(n,1),0===o.predicates.length?j(o):e}return Promise.reject(new o.CannotRemoveSomethingElseThanACompoundPredicateOrAComparisonPredicate)})}function R(e,o){return t.PredicateMustBeACompoundPredicate(e,s).then(()=>P(n.logicalTypes,o)).then(e=>t.LogicalType_idMustReferToADefinedLogicalType(e)).then(t=>{e.logic=t.value()})}function D(e,o){return t.PredicateMustBeAComparisonPredicate(e,p).then(()=>b(n.targets,o)).then(e=>t.Target_idMustReferToADefinedTarget(e)).then(t=>(e.target=t.value(),I(e,w(e.target.$type.$operators).operator_id)))}function I(e,o){return Promise.resolve().then(()=>C.fromNullable(e.target.$type.$operators.find(e=>e.operator_id===o))).then(e=>t.Operator_idMustReferToADefinedOperator(e)).then(t=>{e.operator=t.value(),e.arguments=[]})}function $(e){return s.reduce(c,(t,o,r)=>e===o?r:t,null)}function x(){const e=g(c),t=Object.prototype.toString,o=e=>"[object Object]"===t.call(e);return s.forEach(e,function e(t,r=1){r<0||h(t).forEach(n=>{"predicates"!==n&&(v("$",n)&&delete t[n],o(t[n])&&e(t[n],r-1))})}),e}function E(e,t){m.on(e,t)}function B(e,t){m.once(e,t)}function N(e,t){e?t?m.removeListener(e,t):m.removeAllListeners(e):m.removeAllListeners()}return(e?Promise.resolve(e):y.getDefaultData(n,y)).then(O(k,_)).then(()=>u={on:E,once:B,off:N,setData:O(k,_),add:O(M,_),remove:O(j,_),setPredicateTarget_id:O(D,_),setPredicateOperator_id:O(I,_),setPredicateLogicalType_id:O(R,_),get root(){return c},toJSON:x,get columns(){return n},get options(){return y}})})}return L.defaults={options:{getDefaultData:(e,t)=>t.getDefaultComparisonPredicate(e,t).then(o=>t.getDefaultCompoundPredicate(e,t,[o])),getDefaultCompoundPredicate:(e,t,o)=>(Array.isArray(o)&&0!==o.length?Promise.resolve(o):t.getDefaultComparisonPredicate(e,t).then(e=>[e])).then(o=>t.getDefaultLogicalType(o,e,t).then(e=>s(e,o))),getDefaultComparisonPredicate(e,t){const o=w(e.targets);return p(o,w(o.$type.$operators),[])},getDefaultLogicalType:(e,t,o)=>Promise.resolve(w(t.logicalTypes))},columns:{operators:[{operator_id:"is",label:"is"},{operator_id:"contains",label:"contains"},{operator_id:"isLowerThan",label:"<"},{operator_id:"isEqualTo",label:"="},{operator_id:"isHigherThan",label:">"},{operator_id:"isBetween",label:"is between"}],types:[{type_id:"int",operator_ids:["isLowerThan","isEqualTo","isHigherThan"]},{type_id:"string",operator_ids:["is","contains"]},{type_id:"datetime",operator_ids:["is","isBetween"]}],targets:[{target_id:"title",label:"Title",type_id:"string"},{target_id:"videoCount",label:"Video count",type_id:"int"},{target_id:"publishedAt",label:"Created at",type_id:"datetime"}],logicalTypes:[{logicalType_id:"any",label:"Any"},{logicalType_id:"all",label:"All"},{logicalType_id:"none",label:"None"}]}},L}},1357:function(e,t,o){const{merge:r}=o(92),n=o(678);e.exports=(({invariants:e})=>{function t(o){return e.PredicateTypeMustBeValid(o.$name,t.Types).then(()=>r(n(o.$name),{$canBeRemoved:!0}))}function o(e,n,i){return t(o).then(t=>r(t,{target:e,operator:n,arguments:i}))}function i(o,n){return e.CompoundPredicateMustHaveAtLeastOneSubPredicate(n,i).then(()=>t(i)).then(e=>r(e,{logic:o,predicates:n}))}return t.Types={ComparisonPredicate:"ComparisonPredicate",CompoundPredicate:"CompoundPredicate"},o.$name=t.Types.ComparisonPredicate,o.is=(e=>e&&e.$_type===t.Types.ComparisonPredicate),i.$name=t.Types.CompoundPredicate,i.reduce=function(e,t,o,r=[]){return o=t(o,e,r),e.predicates.reduce((o,n,a)=>{const s=r.concat([e,[n,a]]);return i.is(n)?i.reduce(n,t,o,s):t(o,n,s)},o)},i.forEach=((e,t)=>{i.reduce(e,(e,o,r)=>{t(o)},null)}),i.is=(e=>e&&e.$_type===t.Types.CompoundPredicate),{Predicate:t,ComparisonPredicate:o,CompoundPredicate:i}})},1358:function(e,t,o){const{mergeAll:r}=o(92),n=o(678);e.exports={Type:function(e){const{type_id:t,operator_ids:o}=e;return r([n("Type"),{type_id:t,operator_ids:o},e])},Target:function(e){const{target_id:t,label:o,type_id:i}=e;return r([n("Target"),{target_id:t,label:o,type_id:i},e])},Operator:function(e){const{operator_id:t,label:o}=e;return r([n("Operator"),{operator_id:t,label:o},e])},LogicalType:function(e){const{logicalType_id:t,label:o}=e;return r([n("LogicalType"),{logicalType_id:t,label:o},e])}}},1359:function(e,t,o){const{merge:r}=o(92);e.exports=(e=>r(o(1358),o(1357)(e)))},1360:function(e,t,o){const{is:r}=o(92);e.exports=(({errors:e,rules:t})=>({CompoundPredicateMustHaveAtLeastOneSubPredicate:t=>Array.isArray(t)&&0!==t.length?Promise.resolve():Promise.reject(new e.CompoundPredicateMustHaveAtLeastOneSubPredicate),PredicateTypeMustBeValid:(t,o)=>Object.keys(o).includes(t)?Promise.resolve():Promise.reject(new e.InvalidPredicateType),RootPredicateMustBeACompoundPredicate:(t,o)=>o.is(t)?Promise.resolve(t):Promise.reject(new e.RootPredicateMustBeACompoundPredicate),PredicateMustBeAComparisonPredicate:(t,o)=>o.is(t)?Promise.resolve():Promise.reject(new e.PredicateMustBeAComparisonPredicate),PredicateMustBeACompoundPredicate:(t,o)=>o.is(t)?Promise.resolve():Promise.reject(new e.PredicateMustBeACompoundPredicate),AddOnlySupportsAfter:t=>"after"!==t?Promise.reject(new e.AddCurrentlyOnlySupportAfterInsertion):Promise.resolve(),TargetMustReferToADefinedType:(t,o)=>t.isNone()?Promise.reject(new e.TargetMustReferToADefinedType(`target ${JSON.stringify(o.target_id)} does not refer to a defined type, target.type_id=${JSON.stringify(o.type_id)}`)):Promise.resolve(t.value()),LogicalType_idMustReferToADefinedLogicalType:t=>t.isNone()?Promise.reject(new e.LogicalType_idMustReferToADefinedLogicalType):Promise.resolve(t),Target_idMustReferToADefinedTarget:t=>t.isNone()?Promise.reject(new e.Target_idMustReferToADefinedTarget):Promise.resolve(t),Operator_idMustReferToADefinedOperator:t=>t.isNone()?Promise.reject(new e.Operator_idMustReferToADefinedOperator):Promise.resolve(t),RemovePredicateMustDifferFromRootPredicate:(o,r)=>t.predicateToRemoveIsRootPredicate(o,r)?Promise.reject(new e.ForbiddenCannotRemoveRootCompoundPredicate):Promise.resolve(r),RemovePredicateCannotBeTheLastComparisonPredicate:(o,r,n,i)=>i.is(r)&&t.predicateToRemoveIsTheLastComparisonPredicate(o,n,i)?Promise.reject(new e.ForbiddenCannotRemoveLastComparisonPredicate):Promise.resolve()}))},1361:function(e,t){e.exports={predicateToRemoveIsRootPredicate:(e,t)=>e===t,predicateToRemoveIsTheLastComparisonPredicate:(e,t,o)=>{return 1===t.reduce(e,(e,t)=>o.is(t)?e+1:e,0)}}},1367:function(e,t,o){const{mergeAll:r}=o(92),n=o(1366);function i(e){return{[e]:n(e)}}e.exports=r([i("InvalidPredicateType"),i("CompoundPredicateMustHaveAtLeastOneSubPredicate"),i("RootPredicateMustBeACompoundPredicate"),i("PredicateMustBeACompoundPredicate"),i("PredicateMustBeAComparisonPredicate"),i("AddCurrentlyOnlySupportAfterInsertion"),i("TargetMustReferToADefinedType"),i("LogicalType_idMustReferToADefinedLogicalType"),i("Target_idMustReferToADefinedTarget"),i("Operator_idMustReferToADefinedOperator"),i("ForbiddenCannotRemoveRootCompoundPredicate"),i("ForbiddenCannotRemoveLastComparisonPredicate"),i("CannotRemoveSomethingElseThanACompoundPredicateOrAComparisonPredicate"),i("CannotAddSomethingElseThanACompoundPredicateOrAComparisonPredicate")])},1368:function(e,t,o){const{merge:r}=o(92),n=o(1367),i=o(1361),a=o(1360)({errors:n,rules:i}),s=o(1359)({invariants:a}),d=o(1356)({dataclasses:s,invariants:a,errors:n,rules:i});e.exports={PredicateCore:d,errors:n,invariants:a,dataclasses:s}},1370:function(e,t,o){(e.exports=o(1369)(!1)).push([e.i,".ui-predicate.main{display:flex}.ui-predicate--row{flex-direction:row}.ui-predicate--col{display:inline-block}",""])},1371:function(e,t,o){var r=o(1370);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,o(687).default)("dbc4eb24",r,!0,{})},1372:function(e,t,o){"use strict";o.r(t);var r=o(218),n=o.n(r);for(var i in r)"default"!==i&&function(e){o.d(t,e,function(){return r[e]})}(i);var a=o(453),s=o(91);var d=function(e){o(1371)},c=Object(s.a)(n.a,a.a,a.b,!1,d,null,null);t.default=c.exports},1373:function(e,t,o){"use strict";o.r(t);var r=o(219),n=o.n(r);for(var i in r)"default"!==i&&function(e){o.d(t,e,function(){return r[e]})}(i);var a=o(454),s=o(91),d=Object(s.a)(n.a,a.a,a.b,!1,null,null,null);t.default=d.exports},1374:function(e,t,o){"use strict";o.r(t);var r=o(220),n=o.n(r);for(var i in r)"default"!==i&&function(e){o.d(t,e,function(){return r[e]})}(i);var a=o(455),s=o(91),d=Object(s.a)(n.a,a.a,a.b,!1,null,null,null);t.default=d.exports},1375:function(e,t,o){"use strict";o.r(t);var r=o(221),n=o.n(r);for(var i in r)"default"!==i&&function(e){o.d(t,e,function(){return r[e]})}(i);var a=o(456),s=o(91),d=Object(s.a)(n.a,a.a,a.b,!1,null,null,null);t.default=d.exports},1376:function(e,t,o){"use strict";var r=o(1375),n=o(1374),i=o(1373),a=o(1372),s={"ui-predicate-options":r,"ui-predicate-comparison":n,"ui-predicate-compound":i,"ui-predicate":a},d=function(e){Object.keys(s).forEach(function(t){e.component(t,s[t].default||s[t])})};"undefined"!=typeof window&&window.Vue&&d(window.Vue),e.exports={version:o(1354).version,install:d,components:s,UIPredicateOptions:r,UIPredicateComparison:n,UIPredicateCompound:i,UIPredicate:a},e.exports.default=e.exports},1389:function(e,t,o){"use strict";(function(e){var t=o(684),r=o(1378),n=a(o(316)),i=a(o(1376));function a(e){return e&&e.__esModule?e:{default:e}}n.default.use(i.default),(0,r.setOptions)({hierarchyRootSeparator:/\|/}),(0,t.configure)(function(){var e=o(1353);e.keys().forEach(function(t){return e(t)})},e)}).call(this,o(90)(e))},1391:function(e,t,o){o(452),o(1390),e.exports=o(1389)},218:function(e,t,o){"use strict";var r=o(1368);e.exports={name:"ui-predicate",props:{config:{type:Object,required:!0},data:{type:Object,required:!1}},data:function(){return{root:{},columns:{},isInAddCompoundMode:!1}},provide:function(){var e=this;return{getAddCompoundMode:function(){return e.isInAddCompoundMode},add:function(t){return e.ctrl.add({where:t,how:"after",type:e.isInAddCompoundMode?"CompoundPredicate":"ComparisonPredicate"})},remove:function(t){return e.ctrl.remove(t)},setPredicateLogicalType_id:function(t,o){return e.ctrl.setPredicateLogicalType_id(t,o)},setPredicateTarget_id:function(t,o){return e.ctrl.setPredicateTarget_id(t,o)},setPredicateOperator_id:function(t,o){return e.ctrl.setPredicateOperator_id(t,o)}}},methods:{setIsInAddCompoundMode:function(e){this.isInAddCompoundMode=e,this.$root.$emit("isInAddCompoundMode",e)},onAltPressed:function(e){18==e.keyCode&&this.setIsInAddCompoundMode(!0)},onAltReleased:function(e){18==e.keyCode&&this.setIsInAddCompoundMode(!1)},triggerChanged:function(){this.$emit("changed",this.ctrl)}},mounted:function(){var e=this;(0,r.PredicateCore)({data:this.data,columns:this.config}).then(function(t){e.ctrl=t,e.root=t.root,e.columns=t.columns,e.$emit("initialized",t),t.on("changed",e.triggerChanged)},function(e){console.error(e)}),window.addEventListener("keyup",this.onAltReleased),window.addEventListener("keydown",this.onAltPressed)},destroyed:function(){this.ctrl&&this.ctrl.off(),window.removeEventListener("keyup",this.onAltReleased),window.removeEventListener("keydown",this.onAltPressed)}}},219:function(e,t,o){"use strict";e.exports={name:"ui-predicate-compound",props:{compound:{type:Object,required:!0},columns:{type:Object,required:!0}},inject:["add","setPredicateLogicalType_id"],methods:{changeLogic:function(e){var t=e.target.value;this.setPredicateLogicalType_id(this.compound,t)}}}},220:function(e,t,o){"use strict";e.exports={name:"ui-predicate-comparison",props:{predicate:{type:Object,required:!0},columns:{type:Object,required:!0}},inject:["add","setPredicateTarget_id","setPredicateOperator_id"],methods:{changeTarget:function(e){var t=e.target.value;this.setPredicateTarget_id(this.predicate,t)},changeOperator:function(e){var t=e.target.value;this.setPredicateOperator_id(this.predicate,t)}},mounted:function(){window.addEventListener("keyup",this.onAltReleased),window.addEventListener("keydown",this.onAltPressed)},destroyed:function(){window.removeEventListener("keyup",this.onAltReleased),window.removeEventListener("keydown",this.onAltPressed)}}},221:function(e,t,o){"use strict";e.exports={name:"ui-predicate-options",props:{predicate:{type:Object,required:!0}},data:function(){return{isInAddCompoundMode:this.getAddCompoundMode()}},inject:["remove","add","getAddCompoundMode"],methods:{isInAddCompoundModeChanged:function(e){this.isInAddCompoundMode=e}},mounted:function(){this.$root.$on("isInAddCompoundMode",this.isInAddCompoundModeChanged)},destroyed:function(){this.$root.$off("isInAddCompoundMode",this.isInAddCompoundModeChanged)}}},453:function(e,t,o){"use strict";o.d(t,"a",function(){return r}),o.d(t,"b",function(){return n});var r=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{},[t("div",{staticClass:"ui-predicate main"},[t("ui-predicate-compound",{attrs:{compound:this.root,columns:this.columns}})],1)])},n=[]},454:function(e,t,o){"use strict";o.d(t,"a",function(){return r}),o.d(t,"b",function(){return n});var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"ui-predicate ui-predicate--row compound"},[o("div",{staticClass:"ui-predicate ui-predicate--row"},[o("div",{staticClass:"ui-predicate--col"},[e.compound.logic?o("select",{domProps:{value:e.compound.logic.logicalType_id},on:{change:e.changeLogic}},e._l(e.columns.logicalTypes,function(t){return o("option",{domProps:{value:t.logicalType_id}},[e._v(e._s(t.label))])})):e._e()]),e._v(" "),o("ui-predicate-options",{attrs:{predicate:e.compound}})],1),e._v(" "),o("div",{staticClass:"ui-predicate predicates ui-predicate--row"},e._l(e.compound.predicates,function(t,r){return o("div",{staticClass:"ui-predicate predicate"},["CompoundPredicate"===t.$_type?o("ui-predicate-compound",{attrs:{compound:t,columns:e.columns}}):e._e(),e._v(" "),"ComparisonPredicate"===t.$_type?o("ui-predicate-comparison",{attrs:{predicate:t,columns:e.columns}}):e._e()],1)}))])},n=[]},455:function(e,t,o){"use strict";o.d(t,"a",function(){return r}),o.d(t,"b",function(){return n});var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"ui-predicate--row comparison"},[o("div",{staticClass:"ui-predicate--col"},[o("select",{domProps:{value:e.predicate.target.target_id},on:{change:e.changeTarget}},e._l(e.columns.targets,function(t){return o("option",{domProps:{value:t.target_id}},[e._v(e._s(t.label))])}))]),e._v(" "),o("div",{staticClass:"ui-predicate--col"},[o("select",{domProps:{value:e.predicate.operator.operator_id},on:{change:e.changeOperator}},e._l(e.predicate.target.$type.$operators,function(t){return o("option",{domProps:{value:t.operator_id}},[e._v(e._s(t.label))])}))]),e._v(" "),o("div",{staticClass:"ui-predicate--col"},[o("input",{attrs:{type:"text"},domProps:{value:e.predicate.arguments}})]),e._v(" "),o("ui-predicate-options",{attrs:{predicate:e.predicate}})],1)},n=[]},456:function(e,t,o){"use strict";o.d(t,"a",function(){return r}),o.d(t,"b",function(){return n});var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"ui-predicate--col ui-predicate--option"},[o("button",{attrs:{type:"button",disabled:!1===e.predicate.$canBeRemoved},on:{click:function(t){e.remove(e.predicate)}}},[e._v("-")]),e._v(" "),o("button",{attrs:{type:"button"},on:{click:function(t){e.add(e.predicate)}}},[e._v(e._s(e.isInAddCompoundMode?"…":"+"))])])},n=[]},678:function(e,t){e.exports=function(e){return{$_type:e}}}},[[1391,1,2]]]);
//# sourceMappingURL=preview.2b8a5b08167ca0a3a0c2.bundle.js.map