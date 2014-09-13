(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.templatizer = factory();
    }
}(this, function () {
    var jade=function(){function r(r){return null!=r&&""!==r}function n(e){return Array.isArray(e)?e.map(n).filter(r).join(" "):e}var e={};return e.merge=function t(n,e){if(1===arguments.length){for(var a=n[0],s=1;s<n.length;s++)a=t(a,n[s]);return a}var i=n["class"],l=e["class"];(i||l)&&(i=i||[],l=l||[],Array.isArray(i)||(i=[i]),Array.isArray(l)||(l=[l]),n["class"]=i.concat(l).filter(r));for(var o in e)"class"!=o&&(n[o]=e[o]);return n},e.joinClasses=n,e.cls=function(r,t){for(var a=[],s=0;s<r.length;s++)a.push(t&&t[s]?e.escape(n([r[s]])):n(r[s]));var i=n(a);return i.length?' class="'+i+'"':""},e.attr=function(r,n,t,a){return"boolean"==typeof n||null==n?n?" "+(a?r:r+'="'+r+'"'):"":0==r.indexOf("data")&&"string"!=typeof n?" "+r+"='"+JSON.stringify(n).replace(/'/g,"&apos;")+"'":t?" "+r+'="'+e.escape(n)+'"':" "+r+'="'+n+'"'},e.attrs=function(r,t){var a=[],s=Object.keys(r);if(s.length)for(var i=0;i<s.length;++i){var l=s[i],o=r[l];"class"==l?(o=n(o))&&a.push(" "+l+'="'+o+'"'):a.push(e.attr(l,o,!1,t))}return a.join("")},e.escape=function(r){var n=String(r).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");return n===""+r?r:n},e.rethrow=function a(r,n,e,t){if(!(r instanceof Error))throw r;if(!("undefined"==typeof window&&n||t))throw r.message+=" on line "+e,r;try{t=t||require("fs").readFileSync(n,"utf8")}catch(s){a(r,null,e)}var i=3,l=t.split("\n"),o=Math.max(e-i,0),c=Math.min(l.length,e+i),i=l.slice(o,c).map(function(r,n){var t=n+o+1;return(t==e?"  > ":"    ")+t+"| "+r}).join("\n");throw r.path=n,r.message=(n||"Jade")+":"+e+"\n"+i+"\n\n"+r.message,r},e}();

    var templatizer = {};
    templatizer["cardEditor"] = {};
    templatizer["cardGenerator"] = {};
    templatizer["welcome"] = {};
    templatizer["cardEditor"]["toolbar"] = {};

    // 404.jade compiled template
    templatizer["404"] = function tmpl_404() {
        return '<h1 class="text-center">Page not found!<h2 class="text-center">404</h2></h1>';
    };

    // cardEditor/editor.jade compiled template
    templatizer["cardEditor"]["editor"] = function tmpl_cardEditor_editor() {
        return '<h1 class="text-center">Edit your card!</h1><div class="container-fluid"><div class="row"><div class="editor-viewport col-sm-12 left"><div class="row"><div class="col-left col-sm-2"><div class="row tools"><div class="col-sm-12"><div class="panel panel-default"><div class="panel-heading"><div class="text-center">Инструменты</div></div><div class="panel-body"><button type="button" class="draw-random-background btn btn-success btn-block">Случайный фон					</button></div></div></div></div></div><div class="col-center col-sm-7"><div id="canvas-container"></div></div><div class="col-right col-sm-3"><div id="panel-1" class="row"></div><div id="panel-2" class="row"></div><div id="panel-3" class="row"></div><div class="row save-button"><div class="col-sm-12"><div class="text-center"><button type="button" class="save-to-image btn btn-default">Сохранить в PNG</button></div></div></div></div></div></div></div></div>';
    };

    // cardEditor/toolbar/baseToolbarPanel.jade compiled template
    templatizer["cardEditor"]["toolbar"]["baseToolbarPanel"] = function tmpl_cardEditor_toolbar_baseToolbarPanel(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(title, addButtonText, removeButtonText) {
            buf.push('<div class="col-sm-12"><div class="panel panel-default"><div class="panel-heading"><div class="text-center">' + jade.escape(null == (jade_interp = title) ? "" : jade_interp) + '<button class="collapse-toggler btn btn-default btn-xs right"><span class="caret"></span></button></div></div><div class="panel-body"><div class="row"><div class="col-sm-6 text-center"><button type="button" class="add-child btn btn-success">' + jade.escape(null == (jade_interp = addButtonText) ? "" : jade_interp) + '</button></div><div class="col-sm-6 text-center"><button type="button" class="remove-child btn btn-danger">' + jade.escape(null == (jade_interp = removeButtonText) ? "" : jade_interp) + '</button></div></div></div><ul class="items-container list-group"></ul></div></div>');
        })("title" in locals_for_with ? locals_for_with.title : typeof title !== "undefined" ? title : undefined, "addButtonText" in locals_for_with ? locals_for_with.addButtonText : typeof addButtonText !== "undefined" ? addButtonText : undefined, "removeButtonText" in locals_for_with ? locals_for_with.removeButtonText : typeof removeButtonText !== "undefined" ? removeButtonText : undefined);
        return buf.join("");
    };

    // cardEditor/toolbar/layer.jade compiled template
    templatizer["cardEditor"]["toolbar"]["layer"] = function tmpl_cardEditor_toolbar_layer(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(layerName) {
            buf.push('<span class="ui-icon ui-icon-arrowthick-2-n-s">' + jade.escape(null == (jade_interp = layerName) ? "" : jade_interp) + '</span><button class="close right"><span aria-hidden="true">&times;</span></button>');
        })("layerName" in locals_for_with ? locals_for_with.layerName : typeof layerName !== "undefined" ? layerName : undefined);
        return buf.join("");
    };

    // cardEditor/toolbar/layerChild.jade compiled template
    templatizer["cardEditor"]["toolbar"]["layerChild"] = function tmpl_cardEditor_toolbar_layerChild(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(shapeName) {
            buf.push('<span class="ui-icon ui-icon-arrowthick-2-n-s">' + jade.escape(null == (jade_interp = shapeName) ? "" : jade_interp) + '</span><button class="close right"><span aria-hidden="true">&times;</span></button>');
        })("shapeName" in locals_for_with ? locals_for_with.shapeName : typeof shapeName !== "undefined" ? shapeName : undefined);
        return buf.join("");
    };

    // cardGenerator/card.jade compiled template
    templatizer["cardGenerator"]["card"] = function tmpl_cardGenerator_card() {
        return '<div class="card-perspective"><div class="card-perspective-inner-wrapper"><canvas resize="true" class="card-canvas front">HTML5 Canvas is not supported</canvas><canvas resize="true" class="card-canvas back">HTML5 Canvas is not supported</canvas></div></div>';
    };

    // cardGenerator/cardsGreed.jade compiled template
    templatizer["cardGenerator"]["cardsGreed"] = function tmpl_cardGenerator_cardsGreed() {
        return '<h1 class="text-center">Chose card!</h1><div id="cardsGreed"><ul class="cards"><li class="step-form-controller-wrapper"><div class="step-form-controller"><form action="/" class="step-form-controller-form q1"><div class="step-form-controller-form-label">Текст вопроса</div><div class="step-form-controller-form-input"></div><button type="submit" value="" class="step-form-controller-form-submit icon-arrow-right2"></button></form><div class="step-form-controller-form-statusbar"><div class="step-form-controller-form-statusbar-value"></div></div><div class="step-form-controller-form-statusbar-step"><span class="step-form-controller-form-statusbar-current"> </span>/  <span class="step-form-controller-form-statusbar-quantity"></span></div><div class="step-form-controller-form-controls"><div class="step-form-controller-form-control prev"><a class="icon-arrow-left"></a></div><div class="step-form-controller-form-control next"><a class="icon-arrow-right"></a></div></div></div></li></ul></div>';
    };

    // cardGenerator/stepForm.jade compiled template
    templatizer["cardGenerator"]["stepForm"] = function tmpl_cardGenerator_stepForm() {
        return '<div class="step-form-controller"><form action="/" class="step-form-controller-form q1"><div class="step-form-controller-form-label">Текст вопроса</div><div class="step-form-controller-form-input"></div><button type="submit" value="" class="step-form-controller-form-submit icon-arrow-right2"></button></form><div class="step-form-controller-form-statusbar"><div class="step-form-controller-form-statusbar-value"></div></div><div class="step-form-controller-form-statusbar-step"><span class="step-form-controller-form-statusbar-current"> </span>/  <span class="step-form-controller-form-statusbar-quantity"></span></div><div class="step-form-controller-form-controls"><div class="step-form-controller-form-control prev"><a class="icon-arrow-left"></a></div><div class="step-form-controller-form-control next"><a class="icon-arrow-right"></a></div></div></div>';
    };

    // modal1.jade compiled template
    templatizer["modal1"] = function tmpl_modal1() {
        return '<div class="modal"></div>';
    };

    // modal2.jade compiled template
    templatizer["modal2"] = function tmpl_modal2() {
        return '<div class="modal"></div>';
    };

    // modal3.jade compiled template
    templatizer["modal3"] = function tmpl_modal3() {
        return '<div class="modal"></div>';
    };

    // page.jade compiled template
    templatizer["page"] = function tmpl_page() {
        return '<div class="page"> <h1 class="text-center">Read about!</h1><p>Любя, съешь щипцы, — вздохнёт мэр, — кайф жгуч. Шеф взъярён тчк щипцы с эхом гудбай Жюль. Эй, жлоб! Где туз? Прячь юных съёмщиц в шкаф. Экс-граф? Плюш изъят. Бьём чуждый цен хвощ! Эх, чужак! Общий съём цен шляп (юфть) — вдрызг! Любя, съешь щипцы, — вздохнёт мэр, — кайф жгуч. Шеф взъярён тчк щипцы с эхом гудбай Жюль. Эй, жлоб! Где туз? Прячь юных съёмщиц в шкаф. Экс-граф? Плюш изъят. Бьём чуждый цен хвощ! Эх, чужак! Общий съём цен шляп (юфть) — вдрызг! Любя, съешь щипцы, — вздохнёт мэр, — кайф жгуч. Шеф взъярён тчк щипцы с эхом гудбай Жюль. Эй, жлоб! Где туз? Прячь юных съёмщиц в шкаф. Экс-граф? Плюш изъят. Бьём чуждый цен хвощ! Эх, чужак! Общий съём цен шляп (юфть) — вдрызг! Любя, съешь щипцы, — вздохнёт мэр, — кайф жгуч. Шеф взъярён тчк щипцы с эхом гудбай Жюль. Эй, жлоб! Где туз? Прячь юных съёмщиц в шкаф. Экс-граф? Плюш изъят. Бьём чуждый цен хвощ! Эх, чужак! Общий съём цен шляп (юфть) — вдрызг!Любя, съешь щипцы, — вздохнёт мэр, — кайф жгуч. Шеф взъярён тчк щипцы с эхом гудбай Жюль. Эй, жлоб! Где туз? Прячь юных съёмщиц в шкаф. Экс-граф? Плюш изъят. Любя, съешь щипцы, — вздохнёт мэр, — кайф жгуч. Шеф взъярён тчк щипцы с эхом гудбай Жюль. Эй, жлоб! Где туз? Прячь юных съёмщиц в шкаф. Экс-граф? Плюш изъят. Бьём чуждый цен хвощ! Эх, чужак! Общий съём цен шляп (юфть) — вдрызг! Любя, съешь щипцы, — вздохнёт мэр, — кайф жгуч. Шеф взъярён тчк щипцы с эхом гудбай Жюль. Эй, жлоб! Где туз? Прячь юных съёмщиц в шкаф. Экс-граф? Плюш изъят. Бьём чуждый цен хвощ! Эх, чужак! Общий съём цен шляп (юфть) — вдрызг! Любя, съешь щипцы, — вздохнёт мэр, — кайф жгуч. Шеф взъярён тчк щипцы с эхом гудбай Жюль. Эй, жлоб! Где туз? Прячь юных съёмщиц в шкаф. Экс-граф? Плюш изъят. Бьём чуждый цен хвощ! Эх, чужак! Общий съём цен шляп (юфть) — вдрызг! Любя, съешь щипцы, — вздохнёт мэр, — кайф жгуч. Шеф взъярён тчк щипцы с эхом гудбай Жюль. Эй, жлоб! Где туз? Прячь юных съёмщиц в шкаф. Экс-граф? Плюш изъят. Бьём чуждый цен хвощ! Эх, чужак! Общий съём цен шляп (юфть) — вдрызг!Любя, съешь щипцы, — вздохнёт мэр, — кайф жгуч. Шеф взъярён тчк щипцы с эхом гудбай Жюль. Эй, жлоб! Где туз? Прячь юных съёмщиц в шкаф. Экс-граф? Плюш изъят.</p></div>';
    };

    // welcome/welcomePage.jade compiled template
    templatizer["welcome"]["welcomePage"] = function tmpl_welcome_welcomePage() {
        return '<div class="page"><h1 class="text-center">Welcome, User!</h1><div class="container-fluid"><div class="row"><div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="well text-justify"><div class="text-center"><strong>COL1</strong></div>Любя, съешь щипцы, — вздохнёт мэр, — кайф жгуч. Шеф взъярён тчк щипцы с эхом гудбай Жюль. Эй, жлоб! Где туз? Прячь юных съёмщиц в шкаф. Экс-граф? Плюш изъят. Бьём чуждый цен хвощ! Эх, чужак! Общий съём цен шляп (юфть) — вдрызг! Любя, съешь щипцы, — вздохнёт мэр, — кайф жгуч. Шеф взъярён тчк щипцы с эхом гудбай Жюль. Эй, жлоб! Где туз? Прячь юных съёмщиц в шкаф. Экс-граф? Плюш изъят. Бьём чуждый цен хвощ! Эх, чужак! Общий съём цен шляп (юфть) — вдрызг! Любя, съешь щипцы, — вздохнёт мэр, — кайф жгуч. Шеф взъярён тчк щипцы с эхом гудбай Жюль. Эй, жлоб! Где туз? Прячь юных съёмщиц в шкаф. Экс-граф?</div></div><div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="well text-justify"><div class="text-center"><strong>COL2</strong></div>Любя, съешь щипцы, — вздохнёт мэр, — кайф жгуч. Шеф взъярён тчк щипцы с эхом гудбай Жюль. Эй, жлоб! Где туз? Прячь юных съёмщиц в шкаф. Экс-граф? Плюш изъят. Бьём чуждый цен хвощ! Эх, чужак! Общий съём цен шляп (юфть) — вдрызг! Любя, съешь щипцы, — вздохнёт мэр, — кайф жгуч. Шеф взъярён тчк щипцы с эхом гудбай Жюль. Эй, жлоб! Где туз? Прячь юных съёмщиц в шкаф. Экс-граф? Плюш изъят. Бьём чуждый цен хвощ! Эх, чужак! Общий съём цен шляп (юфть) — вдрызг! Любя, съешь щипцы, — вздохнёт мэр, — кайф жгуч. Шеф взъярён тчк щипцы с эхом гудбай Жюль. Эй, жлоб! Где туз? Прячь юных съёмщиц в шкаф. Экс-граф?</div></div><div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="well text-justify"><div class="text-center"><strong>COL3</strong></div>Любя, съешь щипцы, — вздохнёт мэр, — кайф жгуч. Шеф взъярён тчк щипцы с эхом гудбай Жюль. Эй, жлоб! Где туз? Прячь юных съёмщиц в шкаф. Экс-граф? Плюш изъят. Бьём чуждый цен хвощ! Эх, чужак! Общий съём цен шляп (юфть) — вдрызг! Любя, съешь щипцы, — вздохнёт мэр, — кайф жгуч. Шеф взъярён тчк щипцы с эхом гудбай Жюль. Эй, жлоб! Где туз? Прячь юных съёмщиц в шкаф. Экс-граф? Плюш изъят. Бьём чуждый цен хвощ! Эх, чужак! Общий съём цен шляп (юфть) — вдрызг! Любя, съешь щипцы, — вздохнёт мэр, — кайф жгуч. Шеф взъярён тчк щипцы с эхом гудбай Жюль. Эй, жлоб! Где туз? Прячь юных съёмщиц в шкаф. Экс-граф?</div></div><div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="well text-justify"><div class="text-center"><strong>COL4</strong></div>Любя, съешь щипцы, — вздохнёт мэр, — кайф жгуч. Шеф взъярён тчк щипцы с эхом гудбай Жюль. Эй, жлоб! Где туз? Прячь юных съёмщиц в шкаф. Экс-граф? Плюш изъят. Бьём чуждый цен хвощ! Эх, чужак! Общий съём цен шляп (юфть) — вдрызг! Любя, съешь щипцы, — вздохнёт мэр, — кайф жгуч. Шеф взъярён тчк щипцы с эхом гудбай Жюль. Эй, жлоб! Где туз? Прячь юных съёмщиц в шкаф. Экс-граф? Плюш изъят. Бьём чуждый цен хвощ! Эх, чужак! Общий съём цен шляп (юфть) — вдрызг! Любя, съешь щипцы, — вздохнёт мэр, — кайф жгуч. Шеф взъярён тчк щипцы с эхом гудбай Жюль. Эй, жлоб! Где туз? Прячь юных съёмщиц в шкаф. Экс-граф?</div></div><div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="well text-justify"><div class="text-center"><strong>COL5</strong></div>Любя, съешь щипцы, — вздохнёт мэр, — кайф жгуч. Шеф взъярён тчк щипцы с эхом гудбай Жюль. Эй, жлоб! Где туз? Прячь юных съёмщиц в шкаф. Экс-граф? Плюш изъят. Бьём чуждый цен хвощ! Эх, чужак! Общий съём цен шляп (юфть) — вдрызг! Любя, съешь щипцы, — вздохнёт мэр, — кайф жгуч. Шеф взъярён тчк щипцы с эхом гудбай Жюль. Эй, жлоб! Где туз? Прячь юных съёмщиц в шкаф. Экс-граф? Плюш изъят. Бьём чуждый цен хвощ! Эх, чужак! Общий съём цен шляп (юфть) — вдрызг! Любя, съешь щипцы, — вздохнёт мэр, — кайф жгуч. Шеф взъярён тчк щипцы с эхом гудбай Жюль. Эй, жлоб! Где туз? Прячь юных съёмщиц в шкаф. Экс-граф?</div></div><div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="well text-justify"><div class="text-center"><strong>COL6</strong></div>Любя, съешь щипцы, — вздохнёт мэр, — кайф жгуч. Шеф взъярён тчк щипцы с эхом гудбай Жюль. Эй, жлоб! Где туз? Прячь юных съёмщиц в шкаф. Экс-граф? Плюш изъят. Бьём чуждый цен хвощ! Эх, чужак! Общий съём цен шляп (юфть) — вдрызг! Любя, съешь щипцы, — вздохнёт мэр, — кайф жгуч. Шеф взъярён тчк щипцы с эхом гудбай Жюль. Эй, жлоб! Где туз? Прячь юных съёмщиц в шкаф. Экс-граф? Плюш изъят. Бьём чуждый цен хвощ! Эх, чужак! Общий съём цен шляп (юфть) — вдрызг! Любя, съешь щипцы, — вздохнёт мэр, — кайф жгуч. Шеф взъярён тчк щипцы с эхом гудбай Жюль. Эй, жлоб! Где туз? Прячь юных съёмщиц в шкаф. Экс-граф?</div></div></div></div></div>';
    };

    return templatizer;
}));