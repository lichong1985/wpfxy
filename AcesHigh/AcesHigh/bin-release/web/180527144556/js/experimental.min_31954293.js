var __reflect=this&&this.__reflect||function(e,t,n){e.__class__=t,n?n.push(t):n=[t],e.__types__=e.__types__?n.concat(e.__types__):n},egret;!function(e){var t;!function(e){function t(e){return!!e.exifdata}function n(e,t){t=t||e.match(/^data\:([^\;]+)\;base64,/im)[1]||"",e=e.replace(/^data\:([^\;]+)\;base64,/gim,"");for(var n=atob(e),r=n.length,a=new ArrayBuffer(r),i=new Uint8Array(a),o=0;r>o;o++)i[o]=n.charCodeAt(o);return a}function r(e,t){var n=new XMLHttpRequest;n.open("GET",e,!0),n.responseType="blob",n.onload=function(e){(200==this.status||0===this.status)&&t(this.response)},n.send()}function a(t,a){function s(e){var n=i(e),r=o(e);t.exifdata=n||{},t.iptcdata=r||{},a&&a.call(t)}if(t.src)if(/^data\:/i.test(t.src)){var l=n(t.src,"");s(l)}else if(/^blob\:/i.test(t.src)){var u=new FileReader;u.onload=function(e){s(e.target.result)},r(t.src,function(e){u.readAsArrayBuffer(e)})}else{var d=new XMLHttpRequest;d.onload=function(){if(200!=this.status&&0!==this.status)throw"Could not load image";s(d.response),d=null},d.open("GET",t.src,!0),d.responseType="arraybuffer",d.send(null)}else if(window.FileReader&&(t instanceof window.Blob||t instanceof window.File)){var u=new FileReader;u.onload=function(t){e.debug&&console.log("Got file of length "+t.target.result.byteLength),s(t.target.result)},u.readAsArrayBuffer(t)}}function i(t){var n=new DataView(t);if(e.debug&&console.log("Got file of length "+t.byteLength),255!=n.getUint8(0)||216!=n.getUint8(1))return e.debug&&console.log("Not a valid JPEG"),!1;for(var r,a=2,i=t.byteLength;i>a;){if(255!=n.getUint8(a))return e.debug&&console.log("Not a valid marker at offset "+a+", found: "+n.getUint8(a)),!1;if(r=n.getUint8(a+1),e.debug&&console.log(r),225==r)return e.debug&&console.log("Found 0xFFE1 marker"),c(n,a+4);a+=2+n.getUint16(a+2)}}function o(t){var n=new DataView(t);if(e.debug&&console.log("Got file of length "+t.byteLength),255!=n.getUint8(0)||216!=n.getUint8(1))return e.debug&&console.log("Not a valid JPEG"),!1;for(var r=2,a=t.byteLength,i=function(e,t){return 56===e.getUint8(t)&&66===e.getUint8(t+1)&&73===e.getUint8(t+2)&&77===e.getUint8(t+3)&&4===e.getUint8(t+4)&&4===e.getUint8(t+5)};a>r;){if(i(n,r)){var o=n.getUint8(r+7);o%2!==0&&(o+=1),0===o&&(o=4);var l=r+8+o,u=n.getUint16(r+6+o);return s(t,l,u)}r++}}function s(e,t,n){for(var r,a,i,o,s,l=new DataView(e),u={},c=t;t+n>c;)28===l.getUint8(c)&&2===l.getUint8(c+1)&&(o=l.getUint8(c+2),o in g&&(i=l.getInt16(c+3),s=i+5,a=g[o],r=d(l,c+5,i),u.hasOwnProperty(a)?u[a]instanceof Array?u[a].push(r):u[a]=[u[a],r]:u[a]=r)),c++;return u}function l(t,n,r,a,i){var o,s,l,d=t.getUint16(r,!i),c={};for(l=0;d>l;l++)o=r+12*l+2,s=a[t.getUint16(o,!i)],!s&&e.debug&&console.log("Unknown tag: "+t.getUint16(o,!i)),c[s]=u(t,o,n,r,i);return c}function u(e,t,n,r,a){var i,o,s,l,u,c,g=e.getUint16(t+2,!a),f=e.getUint32(t+4,!a),h=e.getUint32(t+8,!a)+n;switch(g){case 1:case 7:if(1==f)return e.getUint8(t+8,!a);for(i=f>4?h:t+8,o=[],l=0;f>l;l++)o[l]=e.getUint8(i+l);return o;case 2:return i=f>4?h:t+8,d(e,i,f-1);case 3:if(1==f)return e.getUint16(t+8,!a);for(i=f>2?h:t+8,o=[],l=0;f>l;l++)o[l]=e.getUint16(i+2*l,!a);return o;case 4:if(1==f)return e.getUint32(t+8,!a);for(o=[],l=0;f>l;l++)o[l]=e.getUint32(h+4*l,!a);return o;case 5:if(1==f)return u=e.getUint32(h,!a),c=e.getUint32(h+4,!a),s=new Number(u/c),s.numerator=u,s.denominator=c,s;for(o=[],l=0;f>l;l++)u=e.getUint32(h+8*l,!a),c=e.getUint32(h+4+8*l,!a),o[l]=new Number(u/c),o[l].numerator=u,o[l].denominator=c;return o;case 9:if(1==f)return e.getInt32(t+8,!a);for(o=[],l=0;f>l;l++)o[l]=e.getInt32(h+4*l,!a);return o;case 10:if(1==f)return e.getInt32(h,!a)/e.getInt32(h+4,!a);for(o=[],l=0;f>l;l++)o[l]=e.getInt32(h+8*l,!a)/e.getInt32(h+4+8*l,!a);return o}}function d(e,t,n){for(var r="",a=t;t+n>a;a++)r+=String.fromCharCode(e.getUint8(a));return r}function c(t,n){if("Exif"!=d(t,n,4))return e.debug&&console.log("Not valid EXIF data! "+d(t,n,4)),!1;var r,a,i,o,s,u=n+6;if(18761==t.getUint16(u))r=!1;else{if(19789!=t.getUint16(u))return e.debug&&console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)"),!1;r=!0}if(42!=t.getUint16(u+2,!r))return e.debug&&console.log("Not valid TIFF data! (no 0x002A)"),!1;var c=t.getUint32(u+4,!r);if(8>c)return e.debug&&console.log("Not valid TIFF data! (First offset less than 8)",t.getUint32(u+4,!r)),!1;if(a=l(t,u,u+c,e.TiffTags,r),a.ExifIFDPointer){o=l(t,u,u+a.ExifIFDPointer,e.ExifTags,r);for(i in o){switch(i){case"LightSource":case"Flash":case"MeteringMode":case"ExposureProgram":case"SensingMethod":case"SceneCaptureType":case"SceneType":case"CustomRendered":case"WhiteBalance":case"GainControl":case"Contrast":case"Saturation":case"Sharpness":case"SubjectDistanceRange":case"FileSource":o[i]=e.StringValues[i][o[i]];break;case"ExifVersion":case"FlashpixVersion":o[i]=String.fromCharCode(o[i][0],o[i][1],o[i][2],o[i][3]);break;case"ComponentsConfiguration":o[i]=e.StringValues.Components[o[i][0]]+e.StringValues.Components[o[i][1]]+e.StringValues.Components[o[i][2]]+e.StringValues.Components[o[i][3]]}a[i]=o[i]}}if(a.GPSInfoIFDPointer){s=l(t,u,u+a.GPSInfoIFDPointer,e.GPSTags,r);for(i in s){switch(i){case"GPSVersionID":s[i]=s[i][0]+"."+s[i][1]+"."+s[i][2]+"."+s[i][3]}a[i]=s[i]}}return a}e.debug=!1,e.ExifTags={36864:"ExifVersion",40960:"FlashpixVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",37121:"ComponentsConfiguration",37122:"CompressedBitsPerPixel",37500:"MakerNote",37510:"UserComment",40964:"RelatedSoundFile",36867:"DateTimeOriginal",36868:"DateTimeDigitized",37520:"SubsecTime",37521:"SubsecTimeOriginal",37522:"SubsecTimeDigitized",33434:"ExposureTime",33437:"FNumber",34850:"ExposureProgram",34852:"SpectralSensitivity",34855:"ISOSpeedRatings",34856:"OECF",37377:"ShutterSpeedValue",37378:"ApertureValue",37379:"BrightnessValue",37380:"ExposureBias",37381:"MaxApertureValue",37382:"SubjectDistance",37383:"MeteringMode",37384:"LightSource",37385:"Flash",37396:"SubjectArea",37386:"FocalLength",41483:"FlashEnergy",41484:"SpatialFrequencyResponse",41486:"FocalPlaneXResolution",41487:"FocalPlaneYResolution",41488:"FocalPlaneResolutionUnit",41492:"SubjectLocation",41493:"ExposureIndex",41495:"SensingMethod",41728:"FileSource",41729:"SceneType",41730:"CFAPattern",41985:"CustomRendered",41986:"ExposureMode",41987:"WhiteBalance",41988:"DigitalZoomRation",41989:"FocalLengthIn35mmFilm",41990:"SceneCaptureType",41991:"GainControl",41992:"Contrast",41993:"Saturation",41994:"Sharpness",41995:"DeviceSettingDescription",41996:"SubjectDistanceRange",40965:"InteroperabilityIFDPointer",42016:"ImageUniqueID"},e.TiffTags={256:"ImageWidth",257:"ImageHeight",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer",40965:"InteroperabilityIFDPointer",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",274:"Orientation",277:"SamplesPerPixel",284:"PlanarConfiguration",530:"YCbCrSubSampling",531:"YCbCrPositioning",282:"XResolution",283:"YResolution",296:"ResolutionUnit",273:"StripOffsets",278:"RowsPerStrip",279:"StripByteCounts",513:"JPEGInterchangeFormat",514:"JPEGInterchangeFormatLength",301:"TransferFunction",318:"WhitePoint",319:"PrimaryChromaticities",529:"YCbCrCoefficients",532:"ReferenceBlackWhite",306:"DateTime",270:"ImageDescription",271:"Make",272:"Model",305:"Software",315:"Artist",33432:"Copyright"},e.GPSTags={0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude",5:"GPSAltitudeRef",6:"GPSAltitude",7:"GPSTimeStamp",8:"GPSSatellites",9:"GPSStatus",10:"GPSMeasureMode",11:"GPSDOP",12:"GPSSpeedRef",13:"GPSSpeed",14:"GPSTrackRef",15:"GPSTrack",16:"GPSImgDirectionRef",17:"GPSImgDirection",18:"GPSMapDatum",19:"GPSDestLatitudeRef",20:"GPSDestLatitude",21:"GPSDestLongitudeRef",22:"GPSDestLongitude",23:"GPSDestBearingRef",24:"GPSDestBearing",25:"GPSDestDistanceRef",26:"GPSDestDistance",27:"GPSProcessingMethod",28:"GPSAreaInformation",29:"GPSDateStamp",30:"GPSDifferential"},e.StringValues={ExposureProgram:{0:"Not defined",1:"Manual",2:"Normal program",3:"Aperture priority",4:"Shutter priority",5:"Creative program",6:"Action program",7:"Portrait mode",8:"Landscape mode"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{0:"Unknown",1:"Daylight",2:"Fluorescent",3:"Tungsten (incandescent light)",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 - 5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire",1:"Flash fired",5:"Strobe return light not detected",7:"Strobe return light detected",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},SensingMethod:{1:"Not defined",2:"One-chip color area sensor",3:"Two-chip color area sensor",4:"Three-chip color area sensor",5:"Color sequential area sensor",7:"Trilinear sensor",8:"Color sequential linear sensor"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},SceneType:{1:"Directly photographed"},CustomRendered:{0:"Normal process",1:"Custom process"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},GainControl:{0:"None",1:"Low gain up",2:"High gain up",3:"Low gain down",4:"High gain down"},Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},SubjectDistanceRange:{0:"Unknown",1:"Macro",2:"Close view",3:"Distant view"},FileSource:{3:"DSC"},Components:{0:"",1:"Y",2:"Cb",3:"Cr",4:"R",5:"G",6:"B"}};var g={120:"caption",110:"credit",25:"keywords",55:"dateCreated",80:"byline",85:"bylineTitle",122:"captionWriter",105:"headline",116:"copyright",15:"category"},f=function(){function e(){}return e.getData=function(e,n){return(e instanceof Image||e instanceof HTMLImageElement)&&!e.complete?!1:(t(e)?n&&n.call(e):a(e,n),!0)},e.getTag=function(e,n){return t(e)?e.exifdata[n]:void 0},e.getIptcTag=function(e,n){return t(e)?e.iptcdata[n]:void 0},e.getAllTags=function(e){if(!t(e))return{};var n,r=e.exifdata,a={};for(n in r)r.hasOwnProperty(n)&&(a[n]=r[n]);return a},e.getAllIptcTags=function(e){if(!t(e))return{};var n,r=e.iptcdata,a={};for(n in r)r.hasOwnProperty(n)&&(a[n]=r[n]);return a},e.pretty=function(e){if(!t(e))return"";var n,r=e.exifdata,a="";for(n in r)r.hasOwnProperty(n)&&(a+="object"==typeof r[n]?r[n]instanceof Number?n+" : "+r[n]+" ["+r[n].numerator+"/"+r[n].denominator+"]\r\n":n+" : ["+r[n].length+" values]\r\n":n+" : "+r[n]+"\r\n");return a},e.readFromBinaryFile=function(e){return i(e)},e}();e.EXIF=f,__reflect(f.prototype,"egret.experimental.EXIF")}(t=e.experimental||(e.experimental={}))}(egret||(egret={}));var egret;!function(e){var t;!function(e){function t(){return new Promise(function(t,n){var r=document.createElement("input");r.type="file",r.accept="image/*",r.style.display="none",document.body.insertBefore(r,document.body.firstChild),r.addEventListener("change",function(n){var a={png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",bmp:"image/bmp"},i=n.target.files[0],o=i.type;o||(o=a[i.name.match(/\.([^\.]+)$/i)[1]]);var s="";s=window.URL?window.URL.createObjectURL(i):window.webkitURL.createObjectURL(i);var l=new XMLHttpRequest;l.open("GET",s,!0),l.responseType="blob",l.onload=function(n){if(200==this.status){var a=this.response,i=null,o=new FileReader;o.onload=function(){i=this.result;var n=e.EXIF.readFromBinaryFile(i),a=-1;n&&(a=n.Orientation);var o=new Image;o.onload=function(){var e=document.createElement("canvas"),n=e.getContext("2d");switch(e.width=o.width,e.height=o.height,a>4&&(e.width=o.height,e.height=o.width),n.clearRect(0,0,e.width,e.height),a){case 2:n.translate(e.width,0),n.scale(-1,1);break;case 3:n.translate(e.width,e.height),n.rotate(Math.PI);break;case 4:n.translate(0,e.height),n.scale(1,-1);break;case 5:n.rotate(.5*Math.PI),n.scale(1,-1);break;case 6:n.rotate(.5*Math.PI),n.translate(0,-o.height);break;case 7:n.rotate(.5*Math.PI),n.translate(e.width,-e.height),n.scale(-1,1);break;case 8:n.rotate(-.5*Math.PI),n.translate(-e.height,0);break;default:n.transform(1,0,0,1,0,0)}n.drawImage(o,0,0);var i="png";-1!==a&&(i="jpeg");var s="";s="jpg"===i||"jpeg"===i?e.toDataURL("image/"+i):e.toDataURL("image/"+i),t(s),o.parentNode.removeChild(o),r.parentNode.removeChild(r)},o.src=s,o.style.display="none",document.body.appendChild(o),r.value=""},o.readAsArrayBuffer(a)}},l.send()},!1),r.click()})}e.pickPhoto=t}(t=e.experimental||(e.experimental={}))}(egret||(egret={}));