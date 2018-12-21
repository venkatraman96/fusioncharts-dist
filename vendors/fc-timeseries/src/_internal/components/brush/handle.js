import{SmartRenderer}from'../../../../../fc-core/src/component-interface';import{getTouchEvent}from'../../../../../fc-core/src/lib';class Handle extends SmartRenderer{constructor(){super(),this._dimensions={}}configureAttributes(a={}){super.configureAttributes(a);let b=this,c=b.config;c.orientation=a.orientation,c.type=a.type}setDimension(a){this._dimensions=a}getDimension(){return this._dimensions}attachHandlers(){let a,b,c,d,f,g=this,h=g.getLinkedParent(),i=h.getFromEnv('timeNavigator');g.addEventListener('fc-dragstart',g.dragstartHandler||(g.dragstartHandler=function(c){b=getTouchEvent(c).clientX,a=h.getCurrentBrushDimensions()})),g.addEventListener('fc-dragmove',g.dragmoveHandler||(g.dragmoveHandler=function(h){c=getTouchEvent(h).clientX-b,'leftHandle'===g.config.type?(d=a.x+c,f=a.x+a.width):(d=a.x,f=a.x+a.width+c),g.getFromEnv('animationManager').setAnimationState('timenavSqueeze'),i.validateDomain([d,f],g.config.type)}))}draw(){let a=this,b=a.getDimension(),c=b.x,d=b.y,e=b.width,f=b.height;a.addGraphicalElement({el:'rect',attr:{x:c,y:d,width:e,height:f,fill:'#dfdfdf',stroke:'none'},css:{cursor:'ew-resize'},label:'handleButton',component:a,container:{id:'brushGroup',label:'brushGroup',isParent:!0}}),a.addGraphicalElement({el:'path',attr:{path:`M ${c+3.5},${d+6} v ${f-12}
               M ${c+6.5},${d+6} v ${f-12}`,stroke:'#808080',"stroke-width":'1',"stroke-linecap":'round'},label:'handlePath',component:a,css:{cursor:'ew-resize'},container:{id:'brushGroup',label:'brushGroup',isParent:!0}})}}export default Handle;