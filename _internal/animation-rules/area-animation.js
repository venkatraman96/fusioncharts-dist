export default{"*.dataset.area":function(){return{"anchor.appearing":[{initialAttr:{opacity:0},finalAttr:{opacity:1},startEnd:{start:.5,end:1},slot:'plot'}],"anchor.updating":[{initialAttr:{opacity:0},finalAttr:{opacity:1},slot:'final'}],"anchor.disappearing":[{finalAttr:{opacity:0,"fill-opacity":0,"stroke-opacity":0},slot:'final'}],"line.appearing":a=>{let b=a.component,c=b.components.data,d=b.getFromEnv('chartConfig').isstacked,e=b.getFromEnv('chartConfig').is3D,f=b.getLinePath(c,null,d||e?'base':'zero'),g=a.attr,h=b.getState('_total'),j=b.config._childIndex;return[{initialAttr:{opacity:0,path:f.getPathArr()},finalAttr:{opacity:1,path:g.path},startEnd:{start:d?.5/h*j:0,end:d?.5/h*(j+1):.5},slot:'plot',hookFn:function(){this.attr({opacity:1})}}]},"label.appearing":[{initialAttr:{opacity:0},finalAttr:{opacity:1},slot:'final'}],"label.updating":function(){return[{initialAttr:{opacity:0},finalAttr:{opacity:1},slot:'final'}]},"group.appearing":a=>'label-group'===a.attr.name?[{initialAttr:{opacity:0},finalAttr:{opacity:1},slot:'final'}]:'plot-group'===a.attr.name?[{initialAttr:{opacity:0},finalAttr:{opacity:1},startEnd:{start:.5,end:1},slot:'plot'}]:[{initialAttr:{opacity:1},finalAttr:{opacity:1},slot:'final'}],"*":null}}};