!function(){"use strict";var globals="undefined"==typeof window?global:window;if("function"!=typeof globals.require){var modules={},cache={},aliases={},has={}.hasOwnProperty,_cmp="components/",unalias=function(alias,loaderPath){var start=0;loaderPath&&(0===loaderPath.indexOf(_cmp)&&(start=_cmp.length),loaderPath.indexOf("/",start)>0&&(loaderPath=loaderPath.substring(start,loaderPath.indexOf("/",start))));var result=aliases[alias+"/index.js"]||aliases[loaderPath+"/deps/"+alias+"/index.js"];return result?_cmp+result.substring(0,result.length-".js".length):alias},_reg=/^\.\.?(\/|$)/,expand=function(root,name){for(var part,results=[],parts=(_reg.test(name)?root+"/"+name:name).split("/"),i=0,length=parts.length;length>i;i++)part=parts[i],".."===part?results.pop():"."!==part&&""!==part&&results.push(part);return results.join("/")},dirname=function(path){return path.split("/").slice(0,-1).join("/")},localRequire=function(path){return function(name){var absolute=expand(dirname(path),name);return globals.require(absolute,path)}},initModule=function(name,definition){var module={id:name,exports:{}};return cache[name]=module,definition(module.exports,localRequire(name),module),module.exports},require=function(name,loaderPath){var path=expand(name,".");if(null==loaderPath&&(loaderPath="/"),path=unalias(name,loaderPath),has.call(cache,path))return cache[path].exports;if(has.call(modules,path))return initModule(path,modules[path]);var dirIndex=expand(path,"./index");if(has.call(cache,dirIndex))return cache[dirIndex].exports;if(has.call(modules,dirIndex))return initModule(dirIndex,modules[dirIndex]);throw new Error('Cannot find module "'+name+'" from "'+loaderPath+'"')};require.alias=function(from,to){aliases[to]=from},require.register=require.define=function(bundle,fn){if("object"==typeof bundle)for(var key in bundle)has.call(bundle,key)&&(modules[key]=bundle[key]);else modules[bundle]=fn},require.list=function(){var result=[];for(var item in modules)has.call(modules,item)&&result.push(item);return result},require.brunch=!0,require._cache=cache,globals.require=require}}(),require.register("application",function(exports,require,module){"use strict";var App={init:function(){console.log("App initialized.")}};module.exports=App});
//# sourceMappingURL=scripts.js.map
