(function(){Registry.require(["pingpong","helper","i18n"],function(){var n=Registry.get("pingpong"),p=Registry.get("helper"),e=Registry.get("i18n"),f=null,c=[],d=null,c=[{name:e.getMessage("Default"),layout:"default"},{name:e.getMessage("Default_Dark"),layout:"default",theme:"dark",footer:'Theme by <a href="https://github.com/narcolepticinsomniac" target="blank">narcolepticinsomniac</a> from the <a href="https://github.com/openstyles/stylus" target="blank">Stylus</a> project.'}],g=!1,h={default:e.getMessage("Default"),
monokai:"Monokai","default-dark":e.getMessage("Default_Dark"),solarized:"Solarized","mdn-like":"MDN-like",eclipse:"Eclipse",railscasts:"RailsCasts",zenburn:"ZenBurn"},k=function(){var a=Registry.isDevVersion("layout")?["test"]:[];g||(Registry.isDevVersion("helper")&&a.forEach(function(a){Registry.getRaw("layout/"+a+"/options.js")&&c[a].push({name:a.charAt(0).toUpperCase()+a.slice(1),layout:a})}),c=c.map(function(a){a.value=a.theme?[a.layout,a.theme].join("#"):a.layout;return a}),g=!0);return c},l=
function(a){var b=document.createElement("link");b.type="text/css";b.rel="stylesheet";b.href=rea.extension.getURL(a);(document.head||document.body||document.documentElement||document).appendChild(b)};Registry.register("layout","5828",{init:function(a,b){var m=function(){if(c.length){var b=c.pop().split("#")[0];console.log("Try to load layout",b);Registry.loadFile(["layout",b,a].join("/"));d=window.setTimeout(function(){d=null;m()},1E3)}else console.warn("Layout: Unable to load file",
a)};n.ping(function(a){c=["default",p.getUrlArgs().layout||(a&&a.config?a.config.layout:null)||"default"];m();b.suc&&b.suc()},b.fail)},render:function(a,b){void 0===b&&(b=a,a=null);(function(b){a?Registry.loadFile(a,b):b()})(function(){b(f);f=null});d&&(window.clearTimeout(d),d=null)},addStyle:l,applyTheme:function(a){a&&a.theme?(a.footer&&$(".footer").html(a.footer),l(["layout",a.layout,a.theme+".css"].join("/")),a=a.theme):a="default";$(document.body).addClass(a)},getLayouts:k,getLayoutByValue:function(a){var b;
k().some(function(c){if(c.value===a)return b=c,!0});return b},getEditorThemes:function(){return Object.keys(h).map(function(a){return{name:h[a]||a,value:a}})}})})})();
