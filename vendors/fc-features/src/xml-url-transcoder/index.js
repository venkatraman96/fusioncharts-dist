import{triggerEvent,raiseWarning}from'../../../fc-core/src/event-api';import{sourceName,onDataLoadRequest,onDataLoadRequestCancel}from'../utils/url-transcoder-utils';const BASE_FORMAT='xml';let UNDEF;function fetchXML(a='',b={},c,d,e){triggerEvent('dataLoadRequested',e,{source:sourceName,url:a,dataFormat:BASE_FORMAT,silent:!!d,config:b,successcallback:c},UNDEF,onDataLoadRequest,onDataLoadRequestCancel)}function setXMLUrl(a){this.setChartDataUrl(a,'xmlurl')}function setDataURL(){raiseWarning(this,'11171116293','run','JavaScriptRenderer~setDataURL()','Use of deprecated "setDataURL()". Replace with "setXMLUrl()".'),this.setXMLUrl.apply(this,arguments)}function wrapper(a){return a&&(a.prototype.setXMLUrl=setXMLUrl),a&&(a.prototype.setDataURL=setDataURL),{format:'xmlurl',toJSON:fetchXML}}export default{extension:wrapper,name:'XMLUrl',type:'transcoder',requiresFusionCharts:!0};