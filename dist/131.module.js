"use strict";(self.webpackChunkmeu_plugin=self.webpackChunkmeu_plugin||[]).push([[131],{131:function(e,n,t){t.r(n),t.d(n,{getCLS:function(){return y},getFCP:function(){return g},getFID:function(){return C},getLCP:function(){return P},getTTFB:function(){return D}});var i,r,a,o,u=function(e,n){return{name:e,value:void 0===n?-1:n,delta:0,entries:[],id:"v2-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},c=function(e,n){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){if("first-input"===e&&!("PerformanceEventTiming"in self))return;var t=new PerformanceObserver((function(e){return e.getEntries().map(n)}));return t.observe({type:e,buffered:!0}),t}}catch(e){}},f=function(e,n){var t=function t(i){"pagehide"!==i.type&&"hidden"!==document.visibilityState||(e(i),n&&(removeEventListener("visibilitychange",t,!0),removeEventListener("pagehide",t,!0)))};addEventListener("visibilitychange",t,!0),addEventListener("pagehide",t,!0)},s=function(e){addEventListener("pageshow",(function(n){n.persisted&&e(n)}),!0)},m=function(e,n,t){var i;return function(r){n.value>=0&&(r||t)&&(n.delta=n.value-(i||0),(n.delta||void 0===i)&&(i=n.value,e(n)))}},v=-1,p=function(){return"hidden"===document.visibilityState?0:1/0},d=function(){f((function(e){var n=e.timeStamp;v=n}),!0)},l=function(){return v<0&&(v=p(),d(),s((function(){setTimeout((function(){v=p(),d()}),0)}))),{get firstHiddenTime(){return v}}},g=function(e,n){var t,i=l(),r=u("FCP"),a=function(e){"first-contentful-paint"===e.name&&(f&&f.disconnect(),e.startTime<i.firstHiddenTime&&(r.value=e.startTime,r.entries.push(e),t(!0)))},o=window.performance&&performance.getEntriesByName&&performance.getEntriesByName("first-contentful-paint")[0],f=o?null:c("paint",a);(o||f)&&(t=m(e,r,n),o&&a(o),s((function(i){r=u("FCP"),t=m(e,r,n),requestAnimationFrame((function(){requestAnimationFrame((function(){r.value=performance.now()-i.timeStamp,t(!0)}))}))})))},h=!1,T=-1,y=function(e,n){h||(g((function(e){T=e.value})),h=!0);var t,i=function(n){T>-1&&e(n)},r=u("CLS",0),a=0,o=[],v=function(e){if(!e.hadRecentInput){var n=o[0],i=o[o.length-1];a&&e.startTime-i.startTime<1e3&&e.startTime-n.startTime<5e3?(a+=e.value,o.push(e)):(a=e.value,o=[e]),a>r.value&&(r.value=a,r.entries=o,t())}},p=c("layout-shift",v);p&&(t=m(i,r,n),f((function(){p.takeRecords().map(v),t(!0)})),s((function(){a=0,T=-1,r=u("CLS",0),t=m(i,r,n)})))},E={passive:!0,capture:!0},w=new Date,L=function(e,n){i||(i=n,r=e,a=new Date,F(removeEventListener),S())},S=function(){if(r>=0&&r<a-w){var e={entryType:"first-input",name:i.type,target:i.target,cancelable:i.cancelable,startTime:i.timeStamp,processingStart:i.timeStamp+r};o.forEach((function(n){n(e)})),o=[]}},b=function(e){if(e.cancelable){var n=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,n){var t=function(){L(e,n),r()},i=function(){r()},r=function(){removeEventListener("pointerup",t,E),removeEventListener("pointercancel",i,E)};addEventListener("pointerup",t,E),addEventListener("pointercancel",i,E)}(n,e):L(n,e)}},F=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(n){return e(n,b,E)}))},C=function(e,n){var t,a=l(),v=u("FID"),p=function(e){e.startTime<a.firstHiddenTime&&(v.value=e.processingStart-e.startTime,v.entries.push(e),t(!0))},d=c("first-input",p);t=m(e,v,n),d&&f((function(){d.takeRecords().map(p),d.disconnect()}),!0),d&&s((function(){var a;v=u("FID"),t=m(e,v,n),o=[],r=-1,i=null,F(addEventListener),a=p,o.push(a),S()}))},k={},P=function(e,n){var t,i=l(),r=u("LCP"),a=function(e){var n=e.startTime;n<i.firstHiddenTime&&(r.value=n,r.entries.push(e),t())},o=c("largest-contentful-paint",a);if(o){t=m(e,r,n);var v=function(){k[r.id]||(o.takeRecords().map(a),o.disconnect(),k[r.id]=!0,t(!0))};["keydown","click"].forEach((function(e){addEventListener(e,v,{once:!0,capture:!0})})),f(v,!0),s((function(i){r=u("LCP"),t=m(e,r,n),requestAnimationFrame((function(){requestAnimationFrame((function(){r.value=performance.now()-i.timeStamp,k[r.id]=!0,t(!0)}))}))}))}},D=function(e){var n,t=u("TTFB");n=function(){try{var n=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,n={entryType:"navigation",startTime:0};for(var t in e)"navigationStart"!==t&&"toJSON"!==t&&(n[t]=Math.max(e[t]-e.navigationStart,0));return n}();if(t.value=t.delta=n.responseStart,t.value<0||t.value>performance.now())return;t.entries=[n],e(t)}catch(e){}},"complete"===document.readyState?setTimeout(n,0):addEventListener("load",(function(){return setTimeout(n,0)}))}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDOEIsTUFBSyxFQUFHZCxTQUFRLEdBQUssSUFBRy9CLEVBQUVlLEdBQUUsR0FBSVYsR0FBRSxTQUFVNUIsR0FBRytCLEVBQUU5QixFQUFFLE9BQU9GLEVBQUUrQixFQUFFakMsRUFBRWtDLEVBQUVqQyxHQUFHK0MsdUJBQXNCLFdBQVlBLHVCQUFzQixXQUFZZCxFQUFFNUIsTUFBTXdDLFlBQVlsQyxNQUFNVCxFQUFFa0MsVUFBVWdDLEVBQUVuQyxFQUFFekIsS0FBSSxFQUFHUCxHQUFFLEVBQUksR0FBRyxHQUFHLEdBQUUsQ0FBQyxFQUFFc0UsRUFBRSxTQUFTeEUsR0FBRyxJQUFJQyxFQUFFQyxFQUFFRSxFQUFFLFFBQVFILEVBQUUsV0FBVyxJQUFJLElBQUlBLEVBQUU2QyxZQUFZMkIsaUJBQWlCLGNBQWMsSUFBSSxXQUFXLElBQUl6RSxFQUFFOEMsWUFBWTRCLE9BQU96RSxFQUFFLENBQUM2RCxVQUFVLGFBQWFuQixVQUFVLEdBQUcsSUFBSSxJQUFJekMsS0FBS0YsRUFBRSxvQkFBb0JFLEdBQUcsV0FBV0EsSUFBSUQsRUFBRUMsR0FBR1csS0FBSzhELElBQUkzRSxFQUFFRSxHQUFHRixFQUFFNEUsZ0JBQWdCLElBQUksT0FBTzNFLENBQUMsQ0FBakwsR0FBcUwsR0FBR0MsRUFBRUksTUFBTUosRUFBRUssTUFBTU4sRUFBRTRFLGNBQWMzRSxFQUFFSSxNQUFNLEdBQUdKLEVBQUVJLE1BQU13QyxZQUFZbEMsTUFBTSxPQUFPVixFQUFFTSxRQUFRLENBQUNQLEdBQUdELEVBQUVFLEVBQUUsQ0FBQyxNQUFNRixHQUFHLENBQUMsRUFBRSxhQUFhMkIsU0FBU21ELFdBQVd2QyxXQUFXdEMsRUFBRSxHQUFHNkIsaUJBQWlCLFFBQU8sV0FBWSxPQUFPUyxXQUFXdEMsRUFBRSxFQUFHLEdBQUUsQyIsInNvdXJjZXMiOlsid2VicGFjazovL21ldV9wbHVnaW4vLi9ub2RlX21vZHVsZXMvd2ViLXZpdGFscy9kaXN0L3dlYi12aXRhbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGUsdCxuLGkscj1mdW5jdGlvbihlLHQpe3JldHVybntuYW1lOmUsdmFsdWU6dm9pZCAwPT09dD8tMTp0LGRlbHRhOjAsZW50cmllczpbXSxpZDpcInYyLVwiLmNvbmNhdChEYXRlLm5vdygpLFwiLVwiKS5jb25jYXQoTWF0aC5mbG9vcig4OTk5OTk5OTk5OTk5Kk1hdGgucmFuZG9tKCkpKzFlMTIpfX0sYT1mdW5jdGlvbihlLHQpe3RyeXtpZihQZXJmb3JtYW5jZU9ic2VydmVyLnN1cHBvcnRlZEVudHJ5VHlwZXMuaW5jbHVkZXMoZSkpe2lmKFwiZmlyc3QtaW5wdXRcIj09PWUmJiEoXCJQZXJmb3JtYW5jZUV2ZW50VGltaW5nXCJpbiBzZWxmKSlyZXR1cm47dmFyIG49bmV3IFBlcmZvcm1hbmNlT2JzZXJ2ZXIoKGZ1bmN0aW9uKGUpe3JldHVybiBlLmdldEVudHJpZXMoKS5tYXAodCl9KSk7cmV0dXJuIG4ub2JzZXJ2ZSh7dHlwZTplLGJ1ZmZlcmVkOiEwfSksbn19Y2F0Y2goZSl7fX0sbz1mdW5jdGlvbihlLHQpe3ZhciBuPWZ1bmN0aW9uIG4oaSl7XCJwYWdlaGlkZVwiIT09aS50eXBlJiZcImhpZGRlblwiIT09ZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlfHwoZShpKSx0JiYocmVtb3ZlRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIixuLCEwKSxyZW1vdmVFdmVudExpc3RlbmVyKFwicGFnZWhpZGVcIixuLCEwKSkpfTthZGRFdmVudExpc3RlbmVyKFwidmlzaWJpbGl0eWNoYW5nZVwiLG4sITApLGFkZEV2ZW50TGlzdGVuZXIoXCJwYWdlaGlkZVwiLG4sITApfSx1PWZ1bmN0aW9uKGUpe2FkZEV2ZW50TGlzdGVuZXIoXCJwYWdlc2hvd1wiLChmdW5jdGlvbih0KXt0LnBlcnNpc3RlZCYmZSh0KX0pLCEwKX0sYz1mdW5jdGlvbihlLHQsbil7dmFyIGk7cmV0dXJuIGZ1bmN0aW9uKHIpe3QudmFsdWU+PTAmJihyfHxuKSYmKHQuZGVsdGE9dC52YWx1ZS0oaXx8MCksKHQuZGVsdGF8fHZvaWQgMD09PWkpJiYoaT10LnZhbHVlLGUodCkpKX19LGY9LTEscz1mdW5jdGlvbigpe3JldHVyblwiaGlkZGVuXCI9PT1kb2N1bWVudC52aXNpYmlsaXR5U3RhdGU/MDoxLzB9LG09ZnVuY3Rpb24oKXtvKChmdW5jdGlvbihlKXt2YXIgdD1lLnRpbWVTdGFtcDtmPXR9KSwhMCl9LHY9ZnVuY3Rpb24oKXtyZXR1cm4gZjwwJiYoZj1zKCksbSgpLHUoKGZ1bmN0aW9uKCl7c2V0VGltZW91dCgoZnVuY3Rpb24oKXtmPXMoKSxtKCl9KSwwKX0pKSkse2dldCBmaXJzdEhpZGRlblRpbWUoKXtyZXR1cm4gZn19fSxkPWZ1bmN0aW9uKGUsdCl7dmFyIG4saT12KCksbz1yKFwiRkNQXCIpLGY9ZnVuY3Rpb24oZSl7XCJmaXJzdC1jb250ZW50ZnVsLXBhaW50XCI9PT1lLm5hbWUmJihtJiZtLmRpc2Nvbm5lY3QoKSxlLnN0YXJ0VGltZTxpLmZpcnN0SGlkZGVuVGltZSYmKG8udmFsdWU9ZS5zdGFydFRpbWUsby5lbnRyaWVzLnB1c2goZSksbighMCkpKX0scz13aW5kb3cucGVyZm9ybWFuY2UmJnBlcmZvcm1hbmNlLmdldEVudHJpZXNCeU5hbWUmJnBlcmZvcm1hbmNlLmdldEVudHJpZXNCeU5hbWUoXCJmaXJzdC1jb250ZW50ZnVsLXBhaW50XCIpWzBdLG09cz9udWxsOmEoXCJwYWludFwiLGYpOyhzfHxtKSYmKG49YyhlLG8sdCkscyYmZihzKSx1KChmdW5jdGlvbihpKXtvPXIoXCJGQ1BcIiksbj1jKGUsbyx0KSxyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKGZ1bmN0aW9uKCl7cmVxdWVzdEFuaW1hdGlvbkZyYW1lKChmdW5jdGlvbigpe28udmFsdWU9cGVyZm9ybWFuY2Uubm93KCktaS50aW1lU3RhbXAsbighMCl9KSl9KSl9KSkpfSxwPSExLGw9LTEsaD1mdW5jdGlvbihlLHQpe3B8fChkKChmdW5jdGlvbihlKXtsPWUudmFsdWV9KSkscD0hMCk7dmFyIG4saT1mdW5jdGlvbih0KXtsPi0xJiZlKHQpfSxmPXIoXCJDTFNcIiwwKSxzPTAsbT1bXSx2PWZ1bmN0aW9uKGUpe2lmKCFlLmhhZFJlY2VudElucHV0KXt2YXIgdD1tWzBdLGk9bVttLmxlbmd0aC0xXTtzJiZlLnN0YXJ0VGltZS1pLnN0YXJ0VGltZTwxZTMmJmUuc3RhcnRUaW1lLXQuc3RhcnRUaW1lPDVlMz8ocys9ZS52YWx1ZSxtLnB1c2goZSkpOihzPWUudmFsdWUsbT1bZV0pLHM+Zi52YWx1ZSYmKGYudmFsdWU9cyxmLmVudHJpZXM9bSxuKCkpfX0saD1hKFwibGF5b3V0LXNoaWZ0XCIsdik7aCYmKG49YyhpLGYsdCksbygoZnVuY3Rpb24oKXtoLnRha2VSZWNvcmRzKCkubWFwKHYpLG4oITApfSkpLHUoKGZ1bmN0aW9uKCl7cz0wLGw9LTEsZj1yKFwiQ0xTXCIsMCksbj1jKGksZix0KX0pKSl9LFQ9e3Bhc3NpdmU6ITAsY2FwdHVyZTohMH0seT1uZXcgRGF0ZSxnPWZ1bmN0aW9uKGkscil7ZXx8KGU9cix0PWksbj1uZXcgRGF0ZSx3KHJlbW92ZUV2ZW50TGlzdGVuZXIpLEUoKSl9LEU9ZnVuY3Rpb24oKXtpZih0Pj0wJiZ0PG4teSl7dmFyIHI9e2VudHJ5VHlwZTpcImZpcnN0LWlucHV0XCIsbmFtZTplLnR5cGUsdGFyZ2V0OmUudGFyZ2V0LGNhbmNlbGFibGU6ZS5jYW5jZWxhYmxlLHN0YXJ0VGltZTplLnRpbWVTdGFtcCxwcm9jZXNzaW5nU3RhcnQ6ZS50aW1lU3RhbXArdH07aS5mb3JFYWNoKChmdW5jdGlvbihlKXtlKHIpfSkpLGk9W119fSxTPWZ1bmN0aW9uKGUpe2lmKGUuY2FuY2VsYWJsZSl7dmFyIHQ9KGUudGltZVN0YW1wPjFlMTI/bmV3IERhdGU6cGVyZm9ybWFuY2Uubm93KCkpLWUudGltZVN0YW1wO1wicG9pbnRlcmRvd25cIj09ZS50eXBlP2Z1bmN0aW9uKGUsdCl7dmFyIG49ZnVuY3Rpb24oKXtnKGUsdCkscigpfSxpPWZ1bmN0aW9uKCl7cigpfSxyPWZ1bmN0aW9uKCl7cmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLG4sVCkscmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJjYW5jZWxcIixpLFQpfTthZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsbixUKSxhZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLGksVCl9KHQsZSk6Zyh0LGUpfX0sdz1mdW5jdGlvbihlKXtbXCJtb3VzZWRvd25cIixcImtleWRvd25cIixcInRvdWNoc3RhcnRcIixcInBvaW50ZXJkb3duXCJdLmZvckVhY2goKGZ1bmN0aW9uKHQpe3JldHVybiBlKHQsUyxUKX0pKX0sTD1mdW5jdGlvbihuLGYpe3ZhciBzLG09digpLGQ9cihcIkZJRFwiKSxwPWZ1bmN0aW9uKGUpe2Uuc3RhcnRUaW1lPG0uZmlyc3RIaWRkZW5UaW1lJiYoZC52YWx1ZT1lLnByb2Nlc3NpbmdTdGFydC1lLnN0YXJ0VGltZSxkLmVudHJpZXMucHVzaChlKSxzKCEwKSl9LGw9YShcImZpcnN0LWlucHV0XCIscCk7cz1jKG4sZCxmKSxsJiZvKChmdW5jdGlvbigpe2wudGFrZVJlY29yZHMoKS5tYXAocCksbC5kaXNjb25uZWN0KCl9KSwhMCksbCYmdSgoZnVuY3Rpb24oKXt2YXIgYTtkPXIoXCJGSURcIikscz1jKG4sZCxmKSxpPVtdLHQ9LTEsZT1udWxsLHcoYWRkRXZlbnRMaXN0ZW5lciksYT1wLGkucHVzaChhKSxFKCl9KSl9LGI9e30sRj1mdW5jdGlvbihlLHQpe3ZhciBuLGk9digpLGY9cihcIkxDUFwiKSxzPWZ1bmN0aW9uKGUpe3ZhciB0PWUuc3RhcnRUaW1lO3Q8aS5maXJzdEhpZGRlblRpbWUmJihmLnZhbHVlPXQsZi5lbnRyaWVzLnB1c2goZSksbigpKX0sbT1hKFwibGFyZ2VzdC1jb250ZW50ZnVsLXBhaW50XCIscyk7aWYobSl7bj1jKGUsZix0KTt2YXIgZD1mdW5jdGlvbigpe2JbZi5pZF18fChtLnRha2VSZWNvcmRzKCkubWFwKHMpLG0uZGlzY29ubmVjdCgpLGJbZi5pZF09ITAsbighMCkpfTtbXCJrZXlkb3duXCIsXCJjbGlja1wiXS5mb3JFYWNoKChmdW5jdGlvbihlKXthZGRFdmVudExpc3RlbmVyKGUsZCx7b25jZTohMCxjYXB0dXJlOiEwfSl9KSksbyhkLCEwKSx1KChmdW5jdGlvbihpKXtmPXIoXCJMQ1BcIiksbj1jKGUsZix0KSxyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKGZ1bmN0aW9uKCl7cmVxdWVzdEFuaW1hdGlvbkZyYW1lKChmdW5jdGlvbigpe2YudmFsdWU9cGVyZm9ybWFuY2Uubm93KCktaS50aW1lU3RhbXAsYltmLmlkXT0hMCxuKCEwKX0pKX0pKX0pKX19LFA9ZnVuY3Rpb24oZSl7dmFyIHQsbj1yKFwiVFRGQlwiKTt0PWZ1bmN0aW9uKCl7dHJ5e3ZhciB0PXBlcmZvcm1hbmNlLmdldEVudHJpZXNCeVR5cGUoXCJuYXZpZ2F0aW9uXCIpWzBdfHxmdW5jdGlvbigpe3ZhciBlPXBlcmZvcm1hbmNlLnRpbWluZyx0PXtlbnRyeVR5cGU6XCJuYXZpZ2F0aW9uXCIsc3RhcnRUaW1lOjB9O2Zvcih2YXIgbiBpbiBlKVwibmF2aWdhdGlvblN0YXJ0XCIhPT1uJiZcInRvSlNPTlwiIT09biYmKHRbbl09TWF0aC5tYXgoZVtuXS1lLm5hdmlnYXRpb25TdGFydCwwKSk7cmV0dXJuIHR9KCk7aWYobi52YWx1ZT1uLmRlbHRhPXQucmVzcG9uc2VTdGFydCxuLnZhbHVlPDB8fG4udmFsdWU+cGVyZm9ybWFuY2Uubm93KCkpcmV0dXJuO24uZW50cmllcz1bdF0sZShuKX1jYXRjaChlKXt9fSxcImNvbXBsZXRlXCI9PT1kb2N1bWVudC5yZWFkeVN0YXRlP3NldFRpbWVvdXQodCwwKTphZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLChmdW5jdGlvbigpe3JldHVybiBzZXRUaW1lb3V0KHQsMCl9KSl9O2V4cG9ydHtoIGFzIGdldENMUyxkIGFzIGdldEZDUCxMIGFzIGdldEZJRCxGIGFzIGdldExDUCxQIGFzIGdldFRURkJ9O1xuIl0sIm5hbWVzIjpbImUiLCJ0IiwibiIsImkiLCJyIiwibmFtZSIsInZhbHVlIiwiZGVsdGEiLCJlbnRyaWVzIiwiaWQiLCJjb25jYXQiLCJEYXRlIiwibm93IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiYSIsIlBlcmZvcm1hbmNlT2JzZXJ2ZXIiLCJzdXBwb3J0ZWRFbnRyeVR5cGVzIiwiaW5jbHVkZXMiLCJzZWxmIiwiZ2V0RW50cmllcyIsIm1hcCIsIm9ic2VydmUiLCJ0eXBlIiwiYnVmZmVyZWQiLCJvIiwiZG9jdW1lbnQiLCJ2aXNpYmlsaXR5U3RhdGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInUiLCJwZXJzaXN0ZWQiLCJjIiwiZiIsInMiLCJtIiwidGltZVN0YW1wIiwidiIsInNldFRpbWVvdXQiLCJmaXJzdEhpZGRlblRpbWUiLCJkIiwiZGlzY29ubmVjdCIsInN0YXJ0VGltZSIsInB1c2giLCJ3aW5kb3ciLCJwZXJmb3JtYW5jZSIsImdldEVudHJpZXNCeU5hbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJwIiwibCIsImgiLCJoYWRSZWNlbnRJbnB1dCIsImxlbmd0aCIsInRha2VSZWNvcmRzIiwiVCIsInBhc3NpdmUiLCJjYXB0dXJlIiwieSIsImciLCJ3IiwiRSIsImVudHJ5VHlwZSIsInRhcmdldCIsImNhbmNlbGFibGUiLCJwcm9jZXNzaW5nU3RhcnQiLCJmb3JFYWNoIiwiUyIsIkwiLCJiIiwiRiIsIm9uY2UiLCJQIiwiZ2V0RW50cmllc0J5VHlwZSIsInRpbWluZyIsIm1heCIsIm5hdmlnYXRpb25TdGFydCIsInJlc3BvbnNlU3RhcnQiLCJyZWFkeVN0YXRlIl0sInNvdXJjZVJvb3QiOiIifQ==