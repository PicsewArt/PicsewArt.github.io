/* namespace of the util tool */
var com = window.com || {};

/*
 *The information about the com
 */
com.informatioin={
    version:'0.6',
    author:'Corning.HW',
    website:'www.corningSpace.com',
    contact:'272827416@qq.com'
};

/*
 *The default options about com
 */
com.defaultOptions={
    idPrefix:'com_',
    idIndexCounter:0
};

/*
 *The method reset default options to com
 */
com.resetOptions=function(options){
    var _opt=options||{};
    $.extend(true,com.defaultOptions,_opt);
};

/*
 *The method method to generateId
 */
com.generateId=function(nameSpace){
    var _id=com.defaultOptions.idPrefix+(typeof nameSpace=='string'?nameSpace:'')+com.defaultOptions.idIndexCounter;
    com.defaultOptions.idIndexCounter+=1;
    return _id;
};

/*
 *The method method to getReserveHorizontal
 */
com.getReserveHorizontal=function(obj){
    var leftW=$(obj).css("border-left-width");
    leftW=parseInt(leftW.replace('px',''));
    var rightW=$(obj).css("border-right-width");
    rightW=parseInt(rightW.replace('px',''));
    return leftW+rightW;
};

/*
 *The method to getReserveVertical
 */
com.getReserveVertical=function(obj){
    var topW=$(obj).css("border-top-width");
    topW=parseInt(topW.replace('px',''));
    var bottomW=$(obj).css("border-bottom-width");
    bottomW=parseInt(bottomW.replace('px',''));
    return topW+bottomW;
};

/*
 *The method to generateRandomData
 */
com.generateRandomData=function(min,max){
    if(!!min&&!!max){
        return (Math.random()(max-min+1)+min);
    }else{
        return Math.random();
    }
};

/*
 *The method to getMaxZIndex
 */
com.getMaxZIndex=function(){
    var index = 0;
    $("*").each(function (i, n){
        var tem = parseInt($(n).css("z-index"));
        if(tem > 0){
            if(tem > index){
                index = tem + 1;
            }
        }
    });
    return index;
};

/*
 *The method to DragAble
 */
com.dragAble=function(dragTarget,moveOjb,options){
    var move=false,x= 0,y=0;
    var defaultOptions={
        resetZIndex:true
    };
    $.extend(true,defaultOptions,options||{});
    var defaultCursor=$(dragTarget).css('cursor');
    $(dragTarget)
        .mousedown(function(e){
            move=true;
            e=e||window.event;
            if(defaultOptions.resetZIndex){
                $(moveOjb).css({
                    zIndex:com.getMaxZIndex()
                });
            }
            x= e.pageX-parseInt($(moveOjb).css('left'));
            y= e.pageY-parseInt($(moveOjb).css('top'));
            $(moveOjb).fadeTo(20,0.5);
        })
        .mouseover(function(e){
            $(dragTarget).css({
                cursor:'move'
            });
        })
        .mouseout(function(e){
            $(dragTarget).css({
                cursor:defaultCursor
            });
        });

    $(document)
        .mousemove(function(e){
            e=e||window.event;
            if(move){
                var _x= e.pageX- x,
                    _y= e.pageY-y;
                $(moveOjb).css({
                    left:_x,
                    top:_y
                });
            }
        })
        .mouseup(function(e){
            move=false;
            $(moveOjb).fadeTo('fast',1);
        });
};

/*
 *The LockModel, Only one mode
 */
com.LockModel={};
com.LockModel.collection=[];
com.LockModel.hasKey=function(keyName,widgetName){
    for(var i=0;i<com.LockModel.collection.length;i++){
        if(com.LockModel.collection[i][keyName]==widgetName){
            return true;
        }
    }
    return false;
};
com.LockModel.registerKey=function(keyName,widgetName){
    if(com.LockModel.hasKey(keyName,widgetName)){
        return false;
    }
    var obj={};
    obj[keyName]=widgetName;
    com.LockModel.collection.push(obj);
    return true;
};
com.LockModel.deleteKey=function(keyName,widgetName){
    for(var i=0;i<com.LockModel.collection.length;i++){
        if(com.LockModel.collection[i][keyName]==widgetName){
            com.LockModel.collection.pop(i);
            return true;
        }
    }
    return false;
};

/* showTip */
com.showTip=function(target,type,title,msg,time,func){
    var _target=target;
    if(_target==null||_target==undefined){
        return ;
    }
    $(_target).empty();
    var _type=type||"error";//warn,error,success,info
    var _title=title||"";//title of alert;
    var _msg=msg||"";//the message of alert;
    var _time=time||100;// the time of the alert to hide
    var div=$("<div class='com_css_util_alert'/>");
    div.addClass("com_css_util_alert_"+_type);
    var _t=$("<strong/>");
    _t.html(_title);
    _t.appendTo(div);
    div.append(_msg);
    div.hide();
    div.appendTo($(_target));
    div.fadeIn(300);
    var timerInstance=null;
    function _to_(){
        timerInstance= setTimeout(function(){
            div.slideUp(500,function(){
                div.remove();
                if(typeof func=='function'){
                    func.call(this);
                }
            });
        },_time);
    }
    _to_();
    div.hover(function(){
        clearTimeout(timerInstance);
    },function(){
        timerInstance=_to_();
    });
};

/* getCssValToInt */
com.getCssValToInt=function(target,name){
    if(!target||!name)
        return 0;
    var w=target.css(name).replace('px','');
    isNaN(parseInt(w))&&(w=0);
    return parseInt(w);
};

/* getCssValToFloat */
com.getCssValToFloat=function(target,name,fixedLength){
    if(!target||!name)
        return 0;
    var w=target.css(name).replace('px','');
    isNaN(parseFloat(w))&&(w=0);
    return parseFloat(w).toFixed(fixedLength||2);
};

/* getCssColor */
com.getCssColor=function(target,name){
    if(!target||!name)
        return 'transparent';
    var color=target.css(name);
    !color&&(color='transparent');
    return color;
};

/* dialog */
com.layer = function (options, deep){
    this.id = "com_layer_div_"+com.layer.__layerNumber;
    this.contentBgFrameId = "com_layer_bg_content_iframe" + com.layer.__layerNumber;
    this.__bgIFrameId="com_layer_bg_iframe"+com.layer.__layerNumber;
    this.__bgDivId="com_layer_bg_shade"+com.layer.__layerNumber;
    var opt = {};
    $.extend(true, opt, com.layer.defaultOptions);
    this.options = opt;
    this.setOptions(options, deep);
    this._init();
    com.layer.__layerNumber++;
};
com.layer.__layerNumber = 0;
com.layer.triggerType = {
    hover: function (){
        var trigger = this.options.trigger;
        var wrapperId = this.getId();
        var src = this;
        var over = false;
        var curTrigger;
        var timeoutId;
        $("#" + wrapperId).hover(function (){
                clearTimeout(timeoutId);
                over = true;
            },
            function (){
                over = false;
                timeoutId = setTimeout(close, src.options.closeTimeout);
            });
        $(trigger).hover(function (){
                clearTimeout(timeoutId);
                over = true;
                if(curTrigger == this && src.alreadyShow){
                    return;
                }
                src.options.positionType.call(src, this);
                src.show(this);
                curTrigger = this;
            },
            function (){
                over = false;
                timeoutId = setTimeout(close, src.options.closeTimeout);
            });

        function close(){
            if(!over){
                src.hide();
            }
        }
    },
    click: function (){
        var trigger = this.options.trigger;
        var wrapperId = this.getId();
        var src = this;
        var curTrigger;
        $(trigger).click(function (e){
            e.stopPropagation();
            if(curTrigger == this && src.alreadyShow){
                return;
            }
            src.show(this);
        });
        $("#" + wrapperId).click(function (e){
            e.stopPropagation();
        });
    }
};
com.layer.positionType = {
    center: function (){
        var wrapper = $("#" + this.getId());
        var optOffset = this.options.offset;
        var top = $(window).scrollTop() + $(window).height() / 2;
        var pos = {
            position: "absolute",
            left: "50%",
            top: top,
            marginLeft: -(wrapper.width() / 2) + optOffset.x,
            marginTop: -(wrapper.height() / 2) + optOffset.y
        };
        wrapper.css(pos);
        if($.ie6()){
            $("#" + this.contentBgFrameId).css(pos).css({
                width: wrapper.width(),
                height: wrapper.height()
            });
        }
    },
    margin: function (trigger){
        if(!trigger){
            return;
        }
        trigger = trigger || this.options.trigger;
        var wrapper = $("#" + this.getId());
            trigger = $(trigger);
        var optOffset = this.options.offset;
        var triggerOffset = trigger.offset();
        var pos = {
            position: "absolute",
            left: triggerOffset.left + optOffset.x,
            top: triggerOffset.top + optOffset.y
        };
        wrapper.css(pos);
        if($.ie6()){
            $("#" + this.contentBgFrameId).css(pos).css({
                width: wrapper.width(),
                height: wrapper.height()
            });
        }
    }
};
com.layer.showAction = {
    normal: function (){
        $("#" + this.getId()).show();
    },
    fade: function (){
        $("#" + this.getId()).fadeIn(this.options.actionSpeed);
    },
    slideV: function (){
        $("#" + this.getId()).slideDown(this.options.actionSpeed);
    },
    expand: function (){
        $("#" + this.getId()).show(this.options.actionSpeed);
    }
};
com.layer.hideAction = {
    normal: function (){
        $("#" + this.getId()).hide();
    },
    fade: function (){
        $("#" + this.getId()).fadeOut(this.options.actionSpeed);
    },
    slideV: function (){
        $("#" + this.getId()).slideUp(this.options.actionSpeed);
    },
    expand: function (){
        $("#" + this.getId()).hide(this.options.actionSpeed);
    }
};
com.layer.defaultOptions = {
    trigger: "",
    content: '',
    src: "",
    loaded: false,
    cache: true,
    title: '',
    closeText: "",
    isModal: false,
    shadeColor: "#000000",
    opacity: 0.3,
    outClass: "",
    titleClass: "",
    contentClass: "",
    closeClass: "",
    style: {
        position: "absolute",
        backgroundColor: "#f0f0f0",
        overflow: "hidden",
        width: 300,
        height: 120
    },
    titleStyle: {},
    closeStyle: {},
    contentStyle: {},
    triggerType: com.layer.triggerType.click,
    positionType: com.layer.positionType.margin,
    showAction: com.layer.showAction.fade,
    hideAction: com.layer.hideAction.slideV,
    actionSpeed: 400,
    closeTimeout: 800,
    isBgClose: true,
    showClose:true,
    offset: {
        x: 0,
        y: 0
    },
    beforeShow: function (){},
    afterShow:function(){},
    afterClose: function (){}
};
com.layer.prototype = {
    setOptions: function (options, deep){
        if(typeof deep == "boolean" && !deep){
            $.extend(this.options, options || {});
        }
        $.extend(true, this.options, options || {});
    },
    _init: function (){
        if( !! this._hasInit){
            return;
        }
        this._createContentBgIFrame();
        var opt = this.options;
        if(opt.isModal){
            this._createShade();
        }
        var wrapperDiv = $("<div/>");
        wrapperDiv.attr("id", this.getId());
        wrapperDiv.css(opt.style);
        wrapperDiv.css("zIndex", $.getMaxIndex()+10);
        wrapperDiv.addClass(opt.outClass);
        if(opt.title != ""){
            var titleDiv = $("<div/>");
            titleDiv.attr("id", this.getTitleId());
            titleDiv.css(opt.titleStyle);
            titleDiv.addClass(opt.titleClass);
            titleDiv.html(opt.title);
            titleDiv.appendTo(wrapperDiv);
        }
        var src = this;
        if( (!!opt.closeText)&&opt.showClose){
            var closeDiv = $("<div/>");
            closeDiv.attr("id", this.getCloseId());
            closeDiv.css(opt.closeStyle);
            closeDiv.addClass(opt.closeClass);
            closeDiv.html(opt.closeText);
            closeDiv.click(function (e){
                e.preventDefault();
                src.hide();
            });
            closeDiv.appendTo(wrapperDiv);
        }
        var contentDiv = $("<div/>");
        contentDiv.attr("id", this.getContentId());
        contentDiv.css(opt.contentStyle);
        contentDiv.addClass(opt.contentClass);
        if(this.isIFrameContent()){
            var iframe = $("<iframe/>");
            iframe.attr({
                frameborder: 0,
                allowtransparency: true
            });
            if(opt.loaded){
                iframe.attr("src", opt.src + (opt.cache ? "" : (/\?/.test(opt.src) ? "&_=" : "?_=") + Math.random()));
            }
            iframe.appendTo(contentDiv);
        }else{
            contentDiv.html($(opt.content));
        }
        contentDiv.appendTo(wrapperDiv);
        wrapperDiv.hide().appendTo($(document.body));
        this._resizeIFrame();
        if(this.hasTrigger()){
            opt.triggerType.apply(this);
        }
        if(this.options.isModal && this.options.isBgClose){
            $("#" + this.__bgDivId).click(function (e){
                src.hide();
                src.alreadyShow = false;
            });
        }
        this._hasInit = true;
    },
    getSize: function (){
        return {
            width: this.options.style.width,
            height: this.options.style.height
        }
    },
    reload: function (){
        var iframe = this.getIFrame();
        if(iframe != null){
            iframe[0].reload();
        }
    },
    setWidth: function (width){
        this.options.style.width = width;
        this.getWrapper().width(width);
        this._resizeIFrame();
    },
    setHeight: function (height){
        this.options.style.height = height;
        this.getWrapper().height(height);
        this._resizeIFrame();
    },
    _resizeIFrame: function (){
        var iframe = this.getIFrame();
        if(iframe != null){
            var size = this.getSize();
            iframe.css({
                width: size.width,
                height: size.height+( !! this.options.title ? -$("#" + this.getTitleId()).height() : 0)
            });
        }
    },
    _showContentBgFrame: function (){
        if($.ie6()){
            $("#" + this.contentBgFrameId).show();
        }
    },
    _hideContentBgFrame: function (){
        if($.ie6()){
            $("#" + this.contentBgFrameId).hide();
        }
    },
    _createContentBgIFrame: function (){
        if($.ie6()){
            var iframe = $("<iframe/>");
            iframe.css({
                position: "absolute",
                opacity: 0,
                display: "none"
            });
            iframe.attr({
                id: this.contentBgFrameId,
                frameborder: 0
            });
            iframe.appendTo(this.getBody());
        }
    },
    _createShade: function (){
        var me=this;
        var __hiddenIFrameId = this.__bgIFrameId;
        if($("#" + __hiddenIFrameId).length == 0){
            var opt = this.options;
            var maxIndex = $.getMaxIndex();
            var iframe = $("<iframe/>");
            iframe.css({
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: maxIndex++,
                opacity: 0,
                display: "none"
            });
            iframe.attr({
                id: __hiddenIFrameId,
                frameborder: 0
            });
            iframe.appendTo(this.getBody());
            var bgDiv = '<div id="' + this.__bgDivId + '" style="background:' + opt.shadeColor + '; filter:alpha(opacity=' + (opt.opacity * 100) + '); opacity: ' + opt.opacity + '; z-index:' + maxIndex + '; position:absolute; left:0px; top:0px;display:none;"></div>';
            this.getBody().append(bgDiv);
            
            $(window).resize(function (){
                var bgIFrame = $("#" + __hiddenIFrameId);
                if(bgIFrame.length == 0) return;
                var bw = $(window).width();
                var bh = $(document.body).height() > $(window).height() ? $(document).height() : $(window).height();
                bgIFrame.width(bw);
                bgIFrame.height(bh);
                var bgDiv = $("#" + me.__bgDivId);
                bgDiv.width(bw);
                bgDiv.height(bh);
            });
            $(window).resize();
        }
    },
    _showShade: function (){
        $("#" + this.__bgDivId).show();
        $("#" + this.__bgIFrameId).show();
    },
    _hideShade: function (){
        $("#" + this.__bgDivId).hide();
        $("#" + this.__bgIFrameId).hide();
    },
    isIFrameContent: function (){
        return !!this.options.src;
    },
    getIFrame: function (){
        if(this.isIFrameContent()){
            return this.getWrapper().find("iframe");
        }
        return null;
    },
    setTitle: function (html){
        this.options.title = html;
        $("#" + this.getTitleId()).html(html);
    },
    setContent: function (html){
        this.options.content = html;
        $("#" + this.getContentId()).html(html);
    },
    getId: function (){
        return this.id;
    },
    getCloseId: function (){
        return this.getId() + "_close";
    },
    getTitleId: function (){
        return this.getId() + '_title';
    },
    getContentId: function (){
        return this.getId() + "_content";
    },
    getTriggers: function (){
        if(this.hasTrigger){
            return $(this.options.trigger)
        }
    },
    getWrapper: function (){
        return $("#" + this.getId());
    },
    hasTrigger: function (){
        return !!this.options.trigger;
    },
    setSrc: function (src){
        this.options.src = src;
        this.reload();
    },
    show: function (trigger){
        if( !! trigger){
            this.lastTrigger = trigger;
        }
        if(typeof this.options.beforeShow == "function") this.options.beforeShow.call(this, trigger);
        if(!this.options.loaded){
            this.reload();
        }
        if(this.alreadyShow){
            return;
        }
        this.options.positionType.call(this, trigger);
        if(this.options.isModal){
            this._showShade();
        }
        this._showContentBgFrame();
        this.options.showAction.apply(this);
        this.alreadyShow = true;
        if(typeof this.options.afterShow == "function") this.options.afterShow.call(this, trigger);
    },
    hide: function (){
        if(!this.alreadyShow){
            return;
        }
        if(this.options.isModal){
            this._hideShade();
        }
        this._hideContentBgFrame();
        this.options.hideAction.apply(this);
        this.alreadyShow = false;
        if(typeof this.options.afterClose == "function"){
            this.options.afterClose.call(this);
        }
    },
    unbind: function (){
        var trigger = this.options.trigger;
        var wrapperId = this.getId();
        $(trigger).unbind();
        $("#" + wrapperId).unbind();
    },
    abandon: function (){
        this.unbind();
        $("#" + this.getId()).remove();
        if(this.options.isModal){
            $("#" + this.__bgDivId).remove();
            $("#" +this.__bgIFrameId).remove();
        }
        this.alreadyShow=false;

    },
    destroy:function(){
        this.abandon();
    },
    getBody:function(){
        return $('body');
    }
};
(function ($){
    $.extend({
        getMaxIndex: function (){
            var index = 0;
            $('*').each(function(i,n){
                var tem =parseInt($(n).css("z-index"));
                if(tem > 0){
                    if(tem > index){
                        index = tem + 1;
                    }
                }
            });
            return index;
        },
        ie6: function (){
            return window.VBArray && !window.XMLHttpRequest;
        }
    });
})(jQuery);

/* 遮罩层 */
com.mask=function(msg,options,loadingType){
    var type=('mask_loading_type'+(loadingType||'0'));
    var msgHtml='<div style="border: 2px solid #79B362;padding: 8px 8px; line-height: 20px; font-size: 13px;overflow: hidden;"><div class="mask_loading_type '+type+'"></div>'+(msg||'正在处理...')+'</div>';
    var defaultOptions={
        content:msgHtml,
        title:'',
        closeText:'',
        timeout:null,
        opacity:0.1,
        isModal:true,
        style:{
            width:'auto',
            height:'auto',
            backgroundColor:'#fff'
        },
        isBgClose:false,
        positionType:com.layer.positionType.center
    };
    $.extend(true,defaultOptions,options||{});
    var layer=new com.layer(defaultOptions);
    layer.show();
    if(defaultOptions.timeout&&defaultOptions.timeout>0){
        setTimeout(function(){
            layer.destroy();
        },defaultOptions.timeout);
    }
    return layer;
};

com.Dialog = function (options) {
    this.options = options || {};
    this.retuenVal = false;
    this.defaultOptions = {
        buttons: [],
        type: com.Dialog.type.FORM,
        typeStyle: {

        },
        formAction:"",
        formId:"",
        formMethod:"",
        formHtml:"",
        title: "",
        titleStyle: {

        },
        titleWrapperStyle: {

        },
        info: "",
        infoStyle: {

        },
        width: 700,
        height: 'auto',
        isModal: true,
        isConfirm:false,
        isLeftHand: true,
        isBgClose: true,
        showClose:true,
        dragAble:false,
        resetZIndex:false,
        opacity: 0.3,
        eventObj: null,
        eventOffset: {
            x: 0,
            y: 0
        },
        afterClose: function (value) {

        },
        beforeShow: function () {

        },
        afterShow:function(){

        },
        preventClosed: false
    };
    this.initialise();
};

com.Dialog.type = {
    WARN:"warn",
    RIGHT:"right",
    ERROR:"error",
    INFO:"info",
    FORM:"form"
};

com.Dialog.prototype = {
    initialise: function () {
        $.extend(true, this.defaultOptions, this.options);
        this.generateDialog();
    },
    generateDialog: function () {
        var _root = this;
        _root._dialog = new com.layer({
            positionType: com.layer.positionType.center,
            isModal: _root.defaultOptions.isModal,
            opacity: _root.defaultOptions.opacity,
            isBgClose: _root.defaultOptions.isBgClose,
            outClass: "com_css_util_dialog",
            closeClass: "close",
            closeText: '<a class="fix_ie6" href="#">X</a>',
            showClose:_root.defaultOptions.showClose,
            title:_root.defaultOptions.title,
            titleClass:"com_css_util_dialog_title",
            titleStyle:_root.defaultOptions.titleStyle,
            contentClass: 'com_css_util_dialog_content',
            content: '',
            beforeShow: function () {
                _root.defaultOptions.beforeShow.call(_root,_root);

            },
            afterShow: function () {
                if (_root.defaultOptions.type!=com.Dialog.type.FORM) {
                    _root.reSetBoxWindow();
                }
                if(_root.defaultOptions.dragAble){
                    com.dragAble(_root.getTitle(),_root.getWindow(),{
                        resetZIndex:false
                    });
                }
                _root.defaultOptions.afterShow.call(_root,_root);
                _root.resetFormPosition();
            },
            afterClose: function () {
                _root._dialog.abandon();
                _root.defaultOptions.afterClose.call(_root, _root.retuenVal);
            },
            style: {
                width: _root.defaultOptions.width,
                height: _root.defaultOptions.height,
                backgroundColor: "#fff",
                overflow: "visible"
            }
        });

        _root.generateHTML().appendTo($("#" + _root._dialog.getContentId()));
        _root._dialog.show();
    },
    setTitle:function(title){
        this._dialog.setTitle(title);
        this.defaultOptions.title=title;
    },
    generateHTML: function () {
        var _root = this;
        var html = $("<div/>");
        if(_root.defaultOptions.type==com.Dialog.type.FORM){
            html.addClass("form");
            var form=$("<form/>");
            form.addClass("com_form");
            form.css(_root.defaultOptions.infoStyle);
            form.attr({
                id:_root.defaultOptions.formId,
                action:_root.defaultOptions.formAction,
                method:_root.defaultOptions.formMethod
            });
            form.html(_root.defaultOptions.formHtml);
            form.appendTo(html);
        }else{
            html.addClass("com_css_util_dialog_info_wrapper");
            var info = $("<div/>");
            var button = $("<div/>");

            var _type = $("<div/>");
            _type.addClass(this.defaultOptions.type);
            _type.css(this.defaultOptions.typeStyle);

            info.addClass("info_wrapper");
            info.css(this.defaultOptions.infoStyle);
            $("<div class='info'/>").html(this.defaultOptions.info).appendTo(info);
            info.appendTo(html);

            button.addClass("com_css_util_pop_button_wrapper");

            if (this.defaultOptions.isConfirm) {
                var button_yes = $("<button type='button' class='com_css_util_button_style_two'>是</button>");
                var button_no = $("<button type='button' class='com_css_util_button_style_one'>否</button>");

                if (this.defaultOptions.isLeftHand) {
                    button_no.css({
                        marginRight: 0
                    });
                    button_yes.appendTo(button);
                    button_no.appendTo(button);
                } else {
                    button_yes.css({
                        marginRight: 0
                    });
                    button_no.appendTo(button);
                    button_yes.appendTo(button);
                }

                button_yes.click(function (e) {
                    e.preventDefault();
                    _root.retuenVal = true;
                    _root._dialog.hide();
                });
                button_no.click(function (e) {
                    e.preventDefault();
                    _root.retuenVal = false;
                    _root._dialog.hide();
                });

            } else {
                if (this.defaultOptions.buttons.length < 1) {
                    var button_close = $("<button type='button' class='com_css_util_button_style_two'>关闭</button>");
                    button_close.css({
                        marginRight: 0
                    });
                    button_close.appendTo(button);
                    button_close.click(function (e) {
                        e.preventDefault();
                        _root._dialog.hide();
                    });
                } else {
                    for (var i = 0; i < this.defaultOptions.buttons.length; i++) {
                        _root.generateButton(button, this.defaultOptions.buttons[i]);
                    }
                }
            }

            button.appendTo(html);
        }

        return html;
    },
    generateButton: function (button, ele) {
        var _root = this;
        var cloneButton = {
            buttonText: "确定",
            buttonClass: "com_css_util_button_style_one",
            buttonStyle: {

            },
            onClick: function (v) {

            }
        };
        $.extend(true, cloneButton, ele || {});
        $("<button type='button'/>")
        .text(cloneButton.buttonText)
        .addClass(cloneButton.buttonClass)
        .css(cloneButton.buttonStyle)
        .appendTo(button)
        .click(function (e) {
            e.preventDefault();
            if (!_root.defaultOptions.preventClosed) {
                _root._dialog.hide();
            }
            cloneButton.onClick.call(this,_root);
        });
    },
    getContent: function () {
        return $("#" + this._dialog.getContentId());
    },
    getForm:function(){
        return $("#"+this.defaultOptions.formId);
    },
    getClose: function () {
        return $("#" + this._dialog.getCloseId());
    },
    getTitle:function(){
        return $("#"+this._dialog.getTitleId());
    },
    getWindow:function(){
        return $("#"+this._dialog.getId());
    },
    reSetBoxWindow: function () {
        var _root = this;
        $("#" + _root._dialog.getId()).removeClass("com_css_util_dialog").addClass("com_css_util_pop_close com_css_util_pop_window com_css_util_pop_"+_root.defaultOptions.type);
        var icon=$("<span class='icon'/>");
        ($("#"+_root._dialog.getTitleId())).prepend(icon);
        if (this.defaultOptions.eventObj != null) {
            _root._dialog.getWrapper().css({
                left: _root.defaultOptions.eventObj.pageX -80 + _root.defaultOptions.eventOffset.x,
                top: _root.defaultOptions.eventObj.pageY +72 + _root.defaultOptions.eventOffset.y
            });
        }
    },
    resetFormPosition:function(){
        if(this.defaultOptions.type==com.Dialog.type.FORM){
            var wrapper = $("#" + this._dialog.getId());
            var top = $(window).scrollTop() + $(window).height() / 2;
            var pos = {
                top: top,
                marginTop: -(wrapper.height() / 2)
            };
            wrapper.animate(pos,900);
        }
    },
    closeWindow:function(){
        this._dialog.hide();
    }
};

/* 提示简化方法 */
com.message=function(msg,closeCallBack,options){

    return new com.Dialog($.extend(true,{
        type:'warn',
        title:'操作提示',
        width:270,
        opacity:0.3,
        isBgClose:false,
        info:msg||'确定！',
        afterClose:function(){
            if(typeof closeCallBack=='function'){
                closeCallBack.call(this);
            }
        }
    },options||{}));
};

com.confirm=function(msg,yesCallBack,noCallBack,options){
    var defaultOptions={
        isConfirm:true,
        type:'warn',
        title:'操作提示',
        width:270,
        opacity:0.3,
        isBgClose:false,
        info:msg||'是否要进行操作？',
        afterClose:function(v){
            if(v){
                if(typeof yesCallBack=='function'){
                    yesCallBack.call(this);
                }
            }else{
                if(typeof noCallBack=='function'){
                    noCallBack.call(this);
                }
            }
        }
    };
    $.extend(defaultOptions,options||{});
    return new com.Dialog(defaultOptions);
};

/* the dataGrid widget */
com.DataGrid=function(options){
    this.elementsSource=[];
    this.defaultOptions={
        id:com.generateId("dataGrid_"),
        editModel:false,
        showPageInfo:true,
        pageInfo:'第 {#START} 到 {#END} 条,共 {#TOTAL} 条记录',
        //其它可以替换的字符 {#PAGESIZE} {#CURRENTPAGE} {#TOTALPAGE}
        pageInfoStyle:{

        },
        pageInfoClass:'',
        showRowNum:true,
        singleSelect:false,
        fixedHeader:true,
        fixedHeight:360,
        storeSelectedElements:[],
        showFirst:true,
        firstTest:'首页',
        showLast:true,
        lastTest:'尾页',
        pageSize:25,
        dotSize:10,
        totalCount:0,
        totalPage:1,
        currentPage:1,
        dataUrl:'',
        showDelete:true,
        deleteUrl:'',
        deleteText:'删除',
        type:"get",
        async:true,
        dataSource:{

        },
        showCheckBox:true,
        title:'',
        columns:[],
        primaryKey:'',
        parameters:{
        },
        emptyMsg:'没有数据！',
        attachTarget:'',
        wrapperClass:'com_css_util_data_grid',
        wrapperStyle:{

        },
        tableClass:'',
        tableStyle:{
            width:'100%'
        },
        caption:'',
        captionClass:'',
        captionStyle:{
            display: "none"
        },
        headerClass:'table_header',
        bodyClass:'table_entity',
        footerClass:'pageBar',
        footerStyle:{

        },
        filterData:function(resData){
            return resData||{'total':0,'data':[]};
        },
        beforeRending:function(){

        },
        afterRending:function(trSource){

        },
        onElementsClick:function(value,binding){

        }
    };
    $.extend(true,this.defaultOptions,options||{});
    this.initialise();
};

com.DataGrid.prototype={
    initialise:function(){
        this.generateHtml();
        this.render();
    },
    generateHtml:function(){
        var root=this;
        var html=$("<div/>")
        .attr("id",root.getId())
        .addClass(root.defaultOptions.wrapperClass)
        .css(root.defaultOptions.wrapperStyle);

        var table=$("<table/>")
        .addClass(root.defaultOptions.tableClass)
        .css(root.defaultOptions.tableStyle);

        root.generateTCaption().appendTo(table);
        root.generateTHeader().appendTo(table);
        root.generateTBody().appendTo(table);

        table.appendTo(html);
        root.generateTFooter().appendTo(html);

        html.appendTo($(root.defaultOptions.attachTarget));
    },
    generateTHeader:function(){
        var header=$("<thead/>")
        .addClass(this.defaultOptions.headerClass)
        .attr('id',this.getId()+'_header'),
            tr=$('<tr/>');
        tr.appendTo(header);

        if(this.defaultOptions.showRowNum){
            $("<th/>").css({
                width:25
            }).appendTo(tr);
        }

        if(this.defaultOptions.showCheckBox){
            $("<th/>")
            .html("<input type='checkbox' name='checkAll'/>")
            .css({
                width:25,
                textAlign:'center',
                verticalAlign:'middle'
            }).appendTo(tr);
        }
        for(var i=0;i<this.defaultOptions.columns.length;i++){
            this.copyTHeader(this.defaultOptions.columns[i],tr);
        }
        if((this.defaultOptions.showDelete)&&(!!this.defaultOptions.deleteUrl)){
            $("<th/>").text(this.defaultOptions.deleteText)
                .css({
                    width:50,
                    textAlign:'center',
                    verticalAlign:'middle'
                })
                .appendTo(tr);
        }
        return header;
    },
    getTHeader:function(){
        return $('#'+this.getId()+'_header');
    },
    copyTHeader:function(hOption,header){
        var cloneOption={
            field:'',
            title:'',
            width:'auto',
            className:'',
            align:'center',
            style:{

            },
            filter:function(data){
                return data||'';
            },
            elementClass:'',
            elementStyle:{

            },
            editType:'text',
            beforeEdit:function(dataRow){

            },
            afterEdit:function(dataRow){

            }
        };
        $.extend(true,cloneOption,hOption);

        var element={
            elementName:cloneOption.field,
            elementClass:cloneOption.elementClass,
            elementStyle:cloneOption.elementStyle,
            elementFilter:cloneOption.filter,
            editType:cloneOption.editType,
            beforeEdit:cloneOption.beforeEdit,
            afterEdit:cloneOption.afterEdit
        };

        this.elementsSource.push(element);

        $('<th/>').addClass(cloneOption.className)
        .css($.extend({
                textAlign:cloneOption.align,
                width:cloneOption.width
            },cloneOption.style))
        .html(cloneOption.title)
        .attr("data-name",cloneOption.name)
        .appendTo(header);
    },
    generateTCaption:function(){
        return $("<caption/>")
        .attr("id",this.getId()+"_caption")
        .addClass(this.defaultOptions.captionClass)
        .css(this.defaultOptions.captionStyle);
    },
    getCaption:function(){
        return $("#"+this.getId()+"_caption");
    },
    renderCaption:function(){
        this.getCaption().empty().html(this.defaultOptions.caption);
    },
    generateTBody:function(){
        var body=$("<tbody/>");
        body.attr("id",this.getId()+"_body");
        body.addClass(this.defaultOptions.bodyClass);

        return body;
    },
    getBody:function(){
        return $("#"+this.getId()+"_body");
    },
    renderBody:function(){
        var me=this;
        var checkAll=me.getTHeader().find('tr>th>input[name="checkAll"]').eq(0);
        if(me.defaultOptions.showCheckBox&&checkAll.length>0){
            checkAll[0].checked=false;
        }
        var body=me.getBody();
        body.empty();
        if(typeof me.defaultOptions.dataSource['rows']=='undefined'||me.defaultOptions.dataSource['rows'].length<=0){
            var th=me.getTHeader().find('th').length;
            var tds=$("<td colspan='"+th+"'></td>");
            tds.text(me.defaultOptions.emptyMsg);
            tds.appendTo(body);
            return;
        }
        for(var i=0;i<this.defaultOptions.dataSource["rows"].length;i++){
            var tr=$("<tr/>");
            var val=this.defaultOptions.dataSource['rows'][i];
            if(this.defaultOptions.showRowNum){
                $("<td/>").css({
                    textAlign:'center',
                    verticalAlign:'middle'
                }).text(i+1).appendTo(tr);
            }

            if((!!me.defaultOptions.primaryKey)&&val[me.defaultOptions.primaryKey]&&me.defaultOptions.showCheckBox){
                var ch=$("<td/>")
                    .css({
                        textAlign:'center',
                        verticalAlign:'middle'
                    });

                $('<input/>')
                    .attr({
                        type:"checkbox",
                        name:"checkId"
                    })
                    .val(val[me.defaultOptions.primaryKey])
                    .appendTo(ch);

                ch.appendTo(tr);
                tr.attr("data-id",val[me.defaultOptions.primaryKey]);
            }

            $(me.elementsSource).each(function(index,ele){
                var eleTD=$("<td/>")
                .attr("data-name",ele['elementName'])
                .html(ele['elementFilter'].call(this,val[ele['elementName']]))
                .addClass(ele['elementClass'])
                .css(ele['elementStyle']);
                eleTD.appendTo(tr);
            });

            if((me.defaultOptions.showDelete)&&(!!me.defaultOptions.deleteUrl)){

                var a=$('<a/>')
                    .text(me.defaultOptions.deleteText)
                    .attr("href","javascript:;")
                    .attr("data-id",val[me.defaultOptions.primaryKey])
                    .click(function(e){

                        e.preventDefault();
                        e.stopPropagation();
                        var that=$(this);

                        com.confirm('您确定要删除此数据？',function(){
                            $.ajax({
                                type:"post",
                                url:me.defaultOptions.deleteUrl,
                                dataType:'json',
                                data:{
                                    id:that.attr('data-id')
                                },
                                success:function(resData){
                                    if(resData['success']){
                                        me.refresh();
                                    }else{
                                        com.message(resData['msg']);
                                    }
                                }
                            });
                        });

                    });

                $("<td/>")
                    .append(a)
                    .css({
                        width:50,
                        textAlign:'center',
                        verticalAlign:'middle'
                    })
                    .appendTo(tr);

            }
            tr.appendTo(body);
        }

    },
    getTarget:function(){
        return $("#"+this.getId());
    },
    registerDataEvent:function(){
        var me=this;
        var context=me.getTarget();
        var checkAll=context.find('tr>th>input[name="checkAll"]').eq(0);
        var checkElements=context.find('tr>td>input[name="checkId"]');
        var dataElements=me.getBody().find('tr');

        if(me.defaultOptions.showCheckBox){
            checkAll.unbind('click').click(function(){
                var isChecked=this.checked;
                var add_arrVal=[],
                    del_arrVal=[];

                $(dataElements).each(function(){
                    var id=$(this).attr('data-id');
                    if(isChecked&&!$(this).hasClass('selected')){
                        add_arrVal.push(id);
                    }else{
                        del_arrVal.push(id);
                    }
                });

                if(isChecked){
                    checkElements.parents('tr').addClass('selected');
                }else{
                    checkElements.parents('tr').removeClass('selected');
                }
                checkElements.each(function(){
                    this.checked=isChecked;
                });

                me._selectItem(isChecked,isChecked?add_arrVal:del_arrVal);

            });

            function _check_all_selected(){
                if(me.getBody().find('tr').length>0&&((me.getBody().find("tr.selected").length)==(me.getBody().find('tr').length))&&me.defaultOptions.showCheckBox){
                    checkAll[0].checked=true;
                }
            }

            checkElements.each(function(){
                var _this=$(this);
                _this.click(function(e){
                    e.stopPropagation();
                    var isChecked=this.checked;
                    if(isChecked){
                        $(this).parents("tr").addClass('selected');
                        _check_all_selected();
                    }else{
                        $(this).parents("tr").removeClass('selected');
                        checkAll[0].checked=isChecked;
                    }
                    me._selectItem(isChecked,_this.val());
                    me.defaultOptions.onElementsClick.call(this,isChecked,_this.val());
                });
            });
        }

        dataElements.each(function(){
            var _this=$(this);
            _this.click(function(){
                _this.toggleClass("selected");
                var isSelected=_this.hasClass('selected');
                var check=_this.find('td>input[name="checkId"]').eq(0);
                if(isSelected){
                    _check_all_selected();
                }else{
                    if(me.defaultOptions.showCheckBox){
                        checkAll[0].checked=isSelected;
                    }
                }

                if(me.defaultOptions.showCheckBox){
                    check[0].checked=isSelected;
                }
                me._selectItem(isSelected,check.val());
                me.defaultOptions.onElementsClick.call(this,isSelected,check.val());

            });
        });
    },
    generateTFooter:function(){
        var footer=$("<div/>");
        footer.attr("id",this.getId()+"_footer");
        footer.addClass(this.defaultOptions.footerClass);
        footer.css(this.defaultOptions.footerStyle);
        return footer;
    },
    getFooter:function(){
        return $("#"+this.getId()+"_footer");
    },
    renderFooter:function(){
        var me=this;
        var footer=me.getFooter();
        footer.empty();

        me.defaultOptions.totalCount=me.defaultOptions.dataSource["total"];
        me.defaultOptions.totalPage=Math.ceil(me.defaultOptions.totalCount/me.defaultOptions.pageSize);

        var toLeft=$('<div class="toLeft"/>');
        var totalPage=Math.ceil(me.defaultOptions.totalCount/me.defaultOptions.pageSize||0);

        if(me.defaultOptions.showFirst&&totalPage>1){
            var first=$('<a/>');
            if(me.defaultOptions.currentPage==1)
                first=$('<span class="disabled"/>');
            first
                .attr({
                    val:1,
                    href:'javascript:;'
                })
                .text(me.defaultOptions.firstTest)
                .appendTo(toLeft);
        }
        var totalSteps=Math.ceil(totalPage/me.defaultOptions.dotSize);
        var currentStep=Math.ceil(me.defaultOptions.currentPage/me.defaultOptions.dotSize);

        var currentIndex=(currentStep-1)*me.defaultOptions.dotSize+1;
        var endIndex=(currentStep-1)*me.defaultOptions.dotSize+me.defaultOptions.dotSize;

        if(endIndex>totalPage){
            endIndex=totalPage;
        }

        /* 前一组的索引 */
        if(totalSteps>1&&currentStep!=1){
            $('<a/>')
                .attr({
                    val:currentIndex-1,
                    href:'javascript:;'
                })
                .text('...')
                .appendTo(toLeft);
        }
        /* 循环输出当前页 */
        for(var i=currentIndex;i<=endIndex;i++){
            var page=$('<a/>');
            if(i==me.defaultOptions.currentPage){
                page=$('<span class="current"/>');
            }
            page
                .attr({
                    val:i,
                    href:'javascript:;'
                })
                .text(i)
                .appendTo(toLeft);
        }
        /* 下一组索引 */
        if(totalSteps>1&&currentStep!=totalSteps){
            $('<a/>')
                .attr({
                    val:endIndex+1,
                    href:'javascript:;'
                })
                .text('...')
                .appendTo(toLeft);
        }
        /* 最后一页 */
        if(me.defaultOptions.showLast&&totalPage>1){
            var last=$('<a/>');
            if(me.defaultOptions.currentPage==totalPage)
                last=$('<span class="disabled"/>');
            last
                .attr({
                    val:totalPage,
                    href:'javascript:;'
                })
                .text(me.defaultOptions.lastTest)
                .appendTo(toLeft);
        }
        toLeft.appendTo(footer);

        /* 展示信息 */
        if(me.defaultOptions.showPageInfo){
            var toRight=$('<div class="toRight"/>');
            toRight
                .addClass(me.defaultOptions.pageInfoClass)
                .css(me.defaultOptions.pageInfoStyle)
                .appendTo(footer);
            var pageInfo=me.defaultOptions.pageInfo;
            var start=(me.defaultOptions.currentPage-1)*me.defaultOptions.pageSize+1;
            var end=start+me.defaultOptions.pageSize-1;
            start=(me.defaultOptions.totalCount==0)?0:start;
            end=(end>me.defaultOptions.totalCount)?me.defaultOptions.totalCount:end;

            pageInfo=pageInfo.replace(/\{#CURRENTPAGE\}/g,me.defaultOptions.currentPage);
            pageInfo=pageInfo.replace(/\{#TOTALPAGE\}/g,me.defaultOptions.totalPage);
            pageInfo=pageInfo.replace(/\{#PAGESIZE\}/g,me.defaultOptions.pageSize);
            pageInfo=pageInfo.replace(/\{#START\}/g,start);
            pageInfo=pageInfo.replace(/\{#END\}/g,end);
            pageInfo=pageInfo.replace(/\{#TOTAL\}/g,me.defaultOptions.totalCount);

            toRight.html(pageInfo);
        }

        this.registerPagingEvent();
    },
    registerPagingEvent:function(){
        var me=this;
        var footer=me.getFooter();
        footer.find('.toLeft>a').each(function(i,v){
            $(v).unbind().click(function(e){
                e.preventDefault();
                if($(v).hasClass('current')||$(v).hasClass('disabled')){
                    return;
                }
                me.defaultOptions.currentPage=parseInt($(v).attr('val'));
                me.refresh();
            });
        });
    },
    getId:function(){
        return this.defaultOptions.id;
    },
    addMask:function(){
        var mask_wrapper=$('<div class="mask_wrapper"/>');
        var mask_text=$('<div class="mask_text"/>');
        mask_wrapper.appendTo(this.getTarget());
        mask_text.appendTo(this.getTarget());
    },
    removeMask:function(){
        this.getTarget().find('.mask_wrapper,.mask_text').remove();
    },
    setData:function(success_callback,error_callback){
        var _this=this;
        if(_this.defaultOptions.dataUrl){
            var dataFiles=_this.defaultOptions.parameters;
            dataFiles['page']=_this.defaultOptions.currentPage;
            dataFiles['page_size']=_this.defaultOptions.pageSize;
            $.ajax({
                type:_this.defaultOptions.type,
                url:_this.defaultOptions.dataUrl,
                data:dataFiles,
                async:_this.defaultOptions.async,
                dataType:"json",
                beforeSend:function(){
                    _this.addMask();
                },
                success:function(resData){
                    _this.removeMask();
                    var res=_this.defaultOptions.filterData.call(this,resData);
                    _this.defaultOptions.dataSource['total']=res['total'];
                    _this.defaultOptions.dataSource['rows']=res['data'];
                    if(typeof success_callback=='function'){
                        success_callback.call(_this);
                    }
                },
                error:function(msg){
                    _this.removeMask();
                    _this.defaultOptions.dataSource['msg']=msg;
                    if(typeof error_callback=='function'){
                        error_callback.call(this);
                    }
                }
            });
        }
    },
    _selectItem:function(isSelected,values){
        var me=this;
        if(!me.defaultOptions.primaryKey){
            return;
        }
        function isExits(v,isDelete){
            var reVal=false;

            $(me.getSelectedItems()).each(function(i,val){
                reVal=(val[me.defaultOptions.primaryKey]==v);
                if(reVal&&isDelete){
                    me.defaultOptions.storeSelectedElements.splice(i,1);
                }
            });
            return reVal;
        }

        function __getSelected(primaryKey){
            var res={};
            $(me.defaultOptions.dataSource['rows']).each(function(ni,nv){
                if(nv[me.defaultOptions.primaryKey]==primaryKey)
                {
                    res=nv;
                }
            });
            return res;
        }

        if(isSelected){//添加
            if(values instanceof Array){//数组ID

                $(values).each(function(iN,vN){
                    if(!isExits(vN)){
                        me.defaultOptions.storeSelectedElements.push(__getSelected(vN));
                    }
                });
            }else{//单个ID
                if(!isExits(values)){
                    me.defaultOptions.storeSelectedElements.push(__getSelected(values));
                }
            }
        }else{//删除
            if(values instanceof Array){//数组ID
                $(values).each(function(iN,vN){
                    isExits(vN,true);
                });
            }else{//单个ID
                isExits(values,true);
            }
        }
    },
    syncSelectedData:function(){
        if(!this.defaultOptions.showCheckBox){
            return false;
        }
        var resCounter=0;
        var me=this;
        var trs=me.getBody().find("tr");
        $(me.getSelectedItems()).each(function(j,k){
            $(trs).each(function(j2,k2){
                if($(k2).attr("data-id")==k[me.defaultOptions.primaryKey]){
                    $(k2).addClass("selected");
                    $(k2).find("input[name='checkId']").eq(0)[0].checked=true;
                    resCounter+=1;
                }
            });
        });
        if(resCounter>0&&resCounter==trs.length){
            me.getTarget().find('tr>th>input[name="checkAll"]').eq(0)[0].checked=true;
        }
    },
    getSelectedItems:function(){
        return this.defaultOptions.storeSelectedElements;
    },
    getSelectedPrimaryKeys:function(){
        var items=this.getSelectedItems();
        var res=[];
        var me=this;
        $(items).each(function(i,v){
            res.push(v[me.defaultOptions.primaryKey]);
        });
        return res;
    },
    getItemDataByPrimaryKey:function(key){
        var me=this;
        var items=me.defaultOptions.dataSource['rows'];
        var res={};
        $(items).each(function(i,v){
            if(v[me.defaultOptions.primaryKey]==key)
                res=v;
        });
        return res;
    },
    render:function(){
        var me=this;
        me.defaultOptions.beforeRending.call(this,this);
        me.setData(function(){
            me.renderCaption();
            me.renderBody();
            me.renderFooter();
            me.syncSelectedData();
            me.defaultOptions.afterRending.call(me,me);
            setTimeout(function(){
                me.fixedHeader();
            },50);
        });
    },
    refresh:function(isStrong){
        if(!!isStrong){
            this.setCurrentPage(1);
            this.defaultOptions.storeSelectedElements=[];
        }
        this.render();
    },
    setParameters:function(parameters){
        if(typeof parameters!='object'){
            return false;
        }
        this.defaultOptions.parameters=parameters;
    },
    setCurrentPage:function(page){
        if(!!page&&(page>0)){
            this.defaultOptions.currentPage=page;
        }
    },
    setPageSize:function(size){
        if(!!size&&(size>0)){
            this.defaultOptions.pageSize=size;
        }
    },
    fixedHeader:function(){
        var me=this;
        if(me.getTarget().find('.com_css_util_data_grid_fixed_wrapper').length>0){
            var _caption=me.getCaption(),
                _table=me.getTarget().find('.tb_wrapper table').eq(0);
            _table.css({
                marginTop:0
            });
            _caption.prependTo(_table);
            _table.prependTo(me.getTarget());
            me.getTarget().find('.com_css_util_data_grid_fixed_wrapper').remove();
        }

        var tableHeight=me.getTarget().find('table').eq(0).height();

        if(me.defaultOptions.fixedHeader&&(tableHeight>me.defaultOptions.fixedHeight)){

            var table=me.getTarget().find('table').eq(0),
                cloneTable=table.clone();
                table.find('caption').remove();

            var wrapper=$('<div class="com_css_util_data_grid_fixed_wrapper"/>'),
                th_wrapper=$('<div class="th_wrapper"/>'),
                tb_wrapper=$('<div class="tb_wrapper"/>');

            wrapper.prependTo(table.parent());

            cloneTable.find('tbody').remove();
            cloneTable.find('thead').attr('id','');
            cloneTable.appendTo(th_wrapper);

            th_wrapper.prependTo(wrapper);
            table.appendTo(tb_wrapper);
            tb_wrapper.appendTo(wrapper);

            wrapper.css({
                height:me.defaultOptions.fixedHeight-th_wrapper.height(),
                paddingBottom:th_wrapper.height()
            });

            table.css({
                marginTop:-th_wrapper.height()
            });

            cloneTable.css({
                width:table.width()
            });

            $(window).resize(function(){
                cloneTable.css({
                    width:table.width()
                });
            });

        }

        me.registerDataEvent();
    }
};

/* 基于模板的数据分页 */
com.DataList=function(options){
    this.defaultOptions={
        attachTarget:'',
        id:com.generateId("com_data_list_"),
        wrapperClass:'com_data_list',
        wrapperStyle:{

        },
        bodyClass:'',
        bodyStyle:{

        },
        pageBarClass:'',
        pageBarStyle:{

        },
        template:[
            '<div class="item">',
                '<div class="img">',
                    '<img src="{#path}" alt="{#name}"/>',
                '</div>',
                '<div class="title">',
                    '<a href="{#url}" target="_blank">{#name}</a>',
                '</div>',
            '</div>'
        ],
        paramName:{
            limit:'limit',
            start:'page',
            total:'total',
            data:'data'
        },
        parameters:{

        },
        emptyMsg:'没有数据！',
        errorMsg:'错误，必配参数未配置！',
        local:false,
        dataUrl:'',
        async:false,
        dataSource:[],
        showPageBar:true,
        total:0,
        pageSize:10,
        currentPage:1,
        dotSize:5,
        showFirst:true,
        firstTest:'首页',
        showLast:true,
        lastTest:'尾页',
        showPageInfo:true,
        pageInfo:'第 {#START} 到 {#END} 条,共 {#TOTAL} 条记录',
        //其它可以替换的字符 {#PAGESIZE} {#CURRENTPAGE} {#TOTALPAGE}
        pageInfoStyle:{

        },
        pageInfoClass:'',
        filterData:function(resData){
            return resData||{'total':0,'data':[]};
        },
        beforeRending:function(){

        },
        afterRending:function(trSource){

        }
    };
    $.extend(true,this.defaultOptions,options||{});
    this.initialise();
};
com.DataList.prototype={
    initialise:function(){
        this.load();
    },
    getWrapper:function(){
        return $("#"+this.defaultOptions.id);
    },
    getBody:function(){
        return $("#"+this.defaultOptions.id+'_body');
    },
    getPageBar:function(){
        return $("#"+this.defaultOptions.id+'_page_bar');
    },
    render:function(){
        var me=this;
        if($(me.defaultOptions.attachTarget).length==1){
            $(me.defaultOptions.attachTarget).empty();
            if(!me.defaultOptions.template){
                $(me.defaultOptions.attachTarget).html(me.defaultOptions.errorMsg);
                return;
            }
            if(me.defaultOptions.dataSource.length==0){
                $(me.defaultOptions.attachTarget).html(me.defaultOptions.emptyMsg);
                return;
            }
            me.generateHtml();
        }
    },
    load:function(params,callback){
        var me=this;
        if(me.defaultOptions.local){
            !!params&&(params instanceof Array)&&(me.defaultOptions.dataSource=params);
            me.defaultOptions.total=me.defaultOptions.dataSource.length;
            me.render();
            (typeof callback=='function')&&callback.call(me);
        }else if(!!me.defaultOptions.dataUrl){
            var param={};
            param[me.defaultOptions.paramName.start]=me.defaultOptions.currentPage;
            param[me.defaultOptions.paramName.limit]=me.defaultOptions.pageSize;
            $.ajax({
                async:me.defaultOptions.async,
                url:me.defaultOptions.dataUrl,
                dataType:'json',
                beforeSend:function(){

                },
                data: $.extend(param,me.defaultOptions.parameters,params||{}),
                success:function(resData){
                    resData=me.defaultOptions.filterData.call(me,resData);
                    var totalName=me.defaultOptions.paramName.total;
                    var dataName=me.defaultOptions.paramName.data;
                    if(resData.hasOwnProperty(totalName)&&resData.hasOwnProperty(dataName)){
                        me.defaultOptions.total=resData[totalName];
                        me.defaultOptions.dataSource=resData[dataName];
                        me.render();
                        (typeof callback=='function')&&callback.call(me,resData);
                    }else{
                        me.defaultOptions.total=0;
                        me.defaultOptions.dataSource=[];
                    }
                }
            });
        }
    },
    generateBody:function(){
        var me=this;
        var body=$('<div class="body"/>');
        body
            .addClass(me.defaultOptions.bodyClass)
            .css(me.defaultOptions.bodyStyle)
            .attr('id',me.defaultOptions.id+'_body');
        var template=(me.defaultOptions.template instanceof Array)
            ?(me.defaultOptions.template.join('')):(me.defaultOptions.template);

        var theSource=[];
        if(me.defaultOptions.local){
            var startIndex=(me.defaultOptions.currentPage-1)*me.defaultOptions.pageSize;
            var endIndex=startIndex+me.defaultOptions.pageSize;
            endIndex=(endIndex>me.defaultOptions.dataSource.length)?me.defaultOptions.dataSource.length:endIndex;
            theSource=me.defaultOptions.dataSource.slice(startIndex,endIndex);
        }else{
            theSource=me.defaultOptions.dataSource;
        }
        $(theSource).each(function(i,v){
            var item=template;
            for(var a in v){
                if(v.hasOwnProperty(a)){
                    var reg="{#"+a+"}";
                    reg=new RegExp(reg,'g');
                    item=item.replace(reg,v[a]);
                }
            }
            $(item).appendTo(body);
        });
        return body;
    },
    generatePageBar:function(){
        var me=this;
        var pageBar=$('<div class="pageBar"/>');
        pageBar
            .addClass(me.defaultOptions.pageBarClass)
            .css(me.defaultOptions.pageBarStyle)
            .attr('id',me.defaultOptions.id+'_page_bar');

        var toLeft=$('<div class="toLeft"/>');

        var totalPage=Math.ceil(me.defaultOptions.total/me.defaultOptions.pageSize||0);

        if(me.defaultOptions.showFirst&&totalPage>1){
            var first=$('<a/>');
            if(me.defaultOptions.currentPage==1)
                first=$('<span class="disabled"/>');
            first
                .attr({
                    val:1,
                    href:'javascript:;'
                })
                .text(me.defaultOptions.firstTest)
                .appendTo(toLeft);
        }
        var totalSteps=Math.ceil(totalPage/me.defaultOptions.dotSize);
        var currentStep=Math.ceil(me.defaultOptions.currentPage/me.defaultOptions.dotSize);

        var currentIndex=(currentStep-1)*me.defaultOptions.dotSize+1;
        var endIndex=(currentStep-1)*me.defaultOptions.dotSize+me.defaultOptions.dotSize;

        if(endIndex>totalPage){
            endIndex=totalPage;
        }

        /* 前一组的索引 */
        if(totalSteps>1&&currentStep!=1){
            $('<a/>')
                .attr({
                    val:currentIndex-1,
                    href:'javascript:;'
                })
                .text('...')
                .appendTo(toLeft);
        }
        /* 循环输出当前页 */
        for(var i=currentIndex;i<=endIndex;i++){
            var page=$('<a/>');
            if(i==me.defaultOptions.currentPage){
                page=$('<span class="current"/>');
            }
            page
                .attr({
                    val:i,
                    href:'javascript:;'
                })
                .text(i)
                .appendTo(toLeft);
        }
        /* 下一组索引 */
        if(totalSteps>1&&currentStep!=totalSteps){
            $('<a/>')
                .attr({
                    val:endIndex+1,
                    href:'javascript:;'
                })
                .text('...')
                .appendTo(toLeft);
        }
        /* 最后一页 */
        if(me.defaultOptions.showLast&&totalPage>1){
            var last=$('<a/>');
            if(me.defaultOptions.currentPage==totalPage)
                last=$('<span class="disabled"/>');
            last
                .attr({
                    val:totalPage,
                    href:'javascript:;'
                })
                .text(me.defaultOptions.lastTest)
                .appendTo(toLeft);
        }
        toLeft.appendTo(pageBar);

        /* 展示信息 */
        if(me.defaultOptions.showPageInfo){
            var toRight=$('<div class="toRight"/>');
            toRight
                .addClass(me.defaultOptions.pageInfoClass)
                .css(me.defaultOptions.pageInfoStyle)
                .appendTo(pageBar);
            var pageInfo=me.defaultOptions.pageInfo;
            var start=(me.defaultOptions.currentPage-1)*me.defaultOptions.pageSize+1;
            var end=start+me.defaultOptions.pageSize-1;
            start=(me.defaultOptions.total==0)?0:start;
            end=(end>me.defaultOptions.total)?me.defaultOptions.total:end;

            pageInfo=pageInfo.replace(/\{#CURRENTPAGE\}/g,me.defaultOptions.currentPage);
            pageInfo=pageInfo.replace(/\{#TOTALPAGE\}/g,me.defaultOptions.totalPage);
            pageInfo=pageInfo.replace(/\{#PAGESIZE\}/g,me.defaultOptions.pageSize);
            pageInfo=pageInfo.replace(/\{#START\}/g,start);
            pageInfo=pageInfo.replace(/\{#END\}/g,end);
            pageInfo=pageInfo.replace(/\{#TOTAL\}/g,me.defaultOptions.total);

            toRight.html(pageInfo);
        }

        return pageBar;
    },
    generateHtml:function(){
        var me=this;
        me.defaultOptions.beforeRending.call(me);
        var wrapper=$('<div/>');
        wrapper
            .addClass(me.defaultOptions.wrapperClass)
            .css(me.defaultOptions.wrapperStyle)
            .attr('id',me.defaultOptions.id)
            .append(me.generateBody());
        if(me.defaultOptions.showPageBar){
            wrapper.append(me.generatePageBar());
        }
        wrapper.appendTo(me.defaultOptions.attachTarget);
        me.proxyEvent(me);
        me.defaultOptions.afterRending.call(me);
    },
    proxyEvent:function(proxyTarget){
        var me=this;
        /* 分页事件 */
        me.getPageBar().find('.toLeft>a').each(function(i,v){
            $(v).unbind().click(function(e){
                e.preventDefault();
                if($(v).hasClass('current')||$(v).hasClass('disabled')){
                    return;
                }
                me.defaultOptions.currentPage=parseInt($(v).attr('val'));
                me.load();
            });
        });
    }
};

(function(){
    /* 验证 */
    var validateRegExp = {
        email:"^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$",
        //邮件
        notempty:"^\\S+$",
        //非空
        password:"^[A-Za-z0-9_-]+$",
        //密码
        username:"^[A-Za-z0-9_\\-\\u4e00-\\u9fa5]{4,20}$",
        //用户名
        mobile:"^0?(1[358][0-9]{9})$",
        //手机号
        tel:"^(\\d{3,4}-)?\\d{7,8}$",
        //固定电话
        number:"^([0-9]+\\.)?([0-9]+)$",
        //数字
        url:"^http(s)?:\\/\\/[A-Za-z0-9]+\\.[A-Za-z0-9]+[\\/=\\?%\\-&_~`@[\\]\\:+!]*([^<>])*$"
        //地址
    };

    com.validateRules = {
        isNull:function (str) {
            return (str == "" || typeof str != "string");
        },
        isUserName:function (str) {
            return new RegExp(validateRegExp.username).test(str);
        },
        isEmail:function (str) {
            return new RegExp(validateRegExp.email).test(str);
        },
        isMobile:function(str){
            return new RegExp(validateRegExp.mobile).test(str);
        },
        isTelephone:function(str){
            return new RegExp(validateRegExp.tel).test(str);
        },
        isNumber:function(str){
            return new RegExp(validateRegExp.number).test(str);
        },
        isUrl:function(str){
            return new RegExp(validateRegExp.url).test(str);
        }
    };

    /* 日期函数 */
    Date.prototype.format=function(rule){
        this._rule=rule||'yyyy-MM-dd hh:mm:ss';
        this._rule=this._rule.replace('yyyy',this.getFullYear());
        this._rule=this._rule.replace('MM',this.getMonth()+1);
        this._rule=this._rule.replace('dd',this.getDate());
        this._rule=this._rule.replace('hh',this.getHours());
        this._rule=this._rule.replace('mm',this.getMinutes());
        this._rule=this._rule.replace('ss',this.getSeconds());
        return this._rule;
    };

})();


/* GET请求数据 */
com.getForm=function(url,formData,fn){
    if(!com.validateRules.isUrl(url)){
        return;
    }
    $.ajax({
        type:'get',
        dataType:"json",
        url:url,
        data:formData||{},
        success:function(resData){
            if(typeof fn=="function"){
                fn.call(this,resData);
            }
        },
        error:function(resData){

        }
    });
};

/* POST提交数据 */
com.postForm=function(url,formData,fn){
    if(!com.validateRules.isUrl(url)){
        return;
    }
    $.ajax({
        type:'post',
        dataType:"json",
        url:url,
        data:formData||{},
        success:function(resData){
            if(typeof fn=="function"){
                fn.call(this,resData);
            }
        },
        error:function(resData){

        }
    });
};

/* Form Elements */
com.form={};

/* Numeric */
com.form.Numeric=function(options){
    this.defaultOptions={
        attachTarget:'',
        id:com.generateId('form_numeric'),
        stepNumber:1,
        startValue:0,
        minValue:0,
        maxValue:'',
        isFloat:false,
        fixedLength:2,
        enableInput:true,
        change:function(number){

        }
    };
    $.extend(true,this.defaultOptions,options||{});
    this.initialise();
    return this;
};

com.form.Numeric.prototype={
    initialise:function(){
        var me=this;
        var attachTarget=$(me.defaultOptions.attachTarget);
        if(!attachTarget){
            return false;
        }
        /*if(com.validateRules.isNumber(attachTarget.attr("data-step"))){
            me.defaultOptions.stepNumber=parseInt(attachTarget.attr('data-step'));
        }
        if(com.validateRules.isNumber(attachTarget.attr("value"))){
            me.defaultOptions.startValue=parseInt(attachTarget.attr('data-start'));
        }
        if(com.validateRules.isNumber(attachTarget.attr("data-min"))){
            me.defaultOptions.minValue=parseInt(attachTarget.attr('data-min'));
        }
        if(com.validateRules.isNumber(attachTarget.attr("data-max"))){
            me.defaultOptions.maxValue=parseInt(attachTarget.attr('data-max'));
        }*/
        this.generateElement();
    },
    generateElement:function(){
        var me=this;
        var com_numeric_wrapper=$('<div/>');
            com_numeric_wrapper
                .addClass('com_numeric_wrapper')
                .attr("id",me.defaultOptions.id);
        var num_w=$('<div class="num_w"/>');
        if(!me.defaultOptions.enableInput){
            var input_mask=$('<div class="input_mask"/>');
            input_mask.appendTo(num_w);
        }

        var input_num=$('<input class="input_num" type="text"/>');

        var attachTarget=$(me.defaultOptions.attachTarget);
            attachTarget.addClass('input_num');
        com_numeric_wrapper.insertBefore(attachTarget);
        if((attachTarget.attr('type')=='text')&&attachTarget.is('input')){
            input_num=attachTarget;
        }else{
            attachTarget.hide();
        }
        input_num.appendTo(num_w);
        var sV=me.defaultOptions.startValue;
        sV=me.defaultOptions.isFloat?(parseFloat(sV).toFixed(me.defaultOptions.fixedLength)):parseInt(sV);
        input_num.val(sV);
        num_w.appendTo(com_numeric_wrapper);

        var dotted=$('<div class="dotted"/>');
        var up=$('<a class="up" href="javascript:;">▲</a>');
            up.appendTo(dotted);
        var down=$('<a class="down" href="javascript:;">▼</a>');
            down.appendTo(dotted);
        dotted.appendTo(com_numeric_wrapper);
        var max=me.defaultOptions.isFloat?parseFloat(parseFloat(me.defaultOptions.maxValue).toFixed(me.defaultOptions.fixedLength)):parseInt(me.defaultOptions.maxValue);
        var min=me.defaultOptions.isFloat?parseFloat(parseFloat(me.defaultOptions.minValue).toFixed(me.defaultOptions.fixedLength)):parseInt(me.defaultOptions.minValue);
        up.click(function(ex){
            ex.preventDefault();

            var curNumber=me.defaultOptions.isFloat?parseFloat(parseFloat(input_num.val()).toFixed(me.defaultOptions.fixedLength)):parseInt(input_num.val());
            curNumber=me.defaultOptions.isFloat?parseFloat(parseFloat(curNumber+me.defaultOptions.stepNumber).toFixed(me.defaultOptions.fixedLength)):parseInt(curNumber+me.defaultOptions.stepNumber);

            if((max>0)&&(curNumber>=max)){
                curNumber=max;
            }
            input_num.val(curNumber);
            me.defaultOptions.change.call(me,curNumber);
        });

        down.click(function(ex){
            ex.preventDefault();
            var curNumber=me.defaultOptions.isFloat?parseFloat(parseFloat(input_num.val()).toFixed(me.defaultOptions.fixedLength)):parseInt(input_num.val());
            curNumber=me.defaultOptions.isFloat?parseFloat(parseFloat(curNumber-me.defaultOptions.stepNumber).toFixed(me.defaultOptions.fixedLength)):parseInt(curNumber-me.defaultOptions.stepNumber);
            if(curNumber<=min){
                curNumber=min;
            }
            input_num.val(curNumber);
            me.defaultOptions.change.call(me,curNumber);
        });

        input_num.blur(function(){
            if(com.validateRules.isNumber(input_num.val())){
                var num=me.defaultOptions.isFloat?parseFloat(parseFloat(input_num.val()).toFixed(me.defaultOptions.fixedLength)):parseInt(input_num.val());
                if(num>=max){
                    num=max;
                }else if(num<=min){
                    num=min;
                }
            }else{
                num=me.defaultOptions.startValue;
            }
            input_num.val(num);
            me.defaultOptions.change.call(me,num);
        });

    },
    getValue:function(){
        var theVal=this.getNumericObject().find("input[type=text]").eq(0).val();
        theVal=me.defaultOptions.isFloat?parseFloat(parseFloat(theVal).toFixed(me.defaultOptions.fixedLength)):parseInt(theVal);
        return theVal;
    },
    getNumericObject:function(){
        return $("#"+this.defaultOptions.id);
    }
};

/* Checkbox */
com.form.Checkbox=function(options){
    this.defaultOptions={
        attachTarget:'',
        id:com.generateId('form_checkbox'),
        checked:false,
        style:{

        },
        click:function(checked){

        }
    };
    $.extend(true,this.defaultOptions,options||{});
    this.initialise();
    return this;
};

com.form.Checkbox.prototype={
    initialise:function(){
        var me=this;
        var attachTarget=$(me.defaultOptions.attachTarget);
        if(!attachTarget){
            return false;
        }
        this.generateElement();
    },
    generateElement:function(){
        var me=this;
        var com_checkbox_wrapper=$('<div/>');
            com_checkbox_wrapper.addClass('com_checkbox_wrapper').attr('id',me.defaultOptions.id).css(me.defaultOptions.style);

        var checkbox=$('<a href="javascript:;"></a>');
            checkbox.addClass('checkbox').addClass('com_form_bg').appendTo(com_checkbox_wrapper);

        var attachTarget=$(me.defaultOptions.attachTarget);
        if((attachTarget.attr('type')=='checkbox')&&attachTarget.is('input')){
            com_checkbox_wrapper.insertBefore(attachTarget);
            attachTarget.hide().appendTo(com_checkbox_wrapper);
        }else{
            com_checkbox_wrapper.appendTo(attachTarget);
            $('<input type="checkbox"/>').attr('checked',me.defaultOptions.checked?'checked':false).attr('name',attachTarget.attr('data-name')).hide().appendTo(com_checkbox_wrapper);
        }

        if(com_checkbox_wrapper.find('input').eq(0).attr("checked")=='checked'){
            checkbox.addClass('checked');
        }

        checkbox.click(function(ex){
            ex.preventDefault();
            var new_checked=com_checkbox_wrapper.find('input').eq(0);

            if(checkbox.hasClass('checked')){
                checkbox.removeClass('checked');
                new_checked.attr("checked",false);
                me.defaultOptions.click.call(this,false);
            }else{
                checkbox.addClass('checked');
                new_checked.attr("checked",'checked');
                me.defaultOptions.click.call(this,true);
            }
        });

    },
    getCheckboxObject:function(){
        return $("#"+this.defaultOptions.id);
    }
};

/* Text */
com.form.Text=function(options){
    this.defaultOptions={
        attachTarget:'',
        label:'',
        name:'',
        id:com.generateId('form_text'),
        value:'',
        style:{

        },
        focus:function(val,obj){

        },
        blur:function(val,obj){

        },
        change:function(val,obj){

        }
    };
    $.extend(true,this.defaultOptions,options||{});
    this.initialise();
    return this;
};

com.form.Text.prototype={
    initialise:function(){
        var me=this;
        var attachTarget=$(me.defaultOptions.attachTarget);
        if(!attachTarget){
            return false;
        }
        this.generateElement();
    },
    generateElement:function(){
        var me=this;
        var com_text_wrapper=$('<div/>');
            com_text_wrapper.addClass('com_text_wrapper').attr('id',me.defaultOptions.id);

        var attachTarget=$(me.defaultOptions.attachTarget);
        if((attachTarget.attr('type')=='text')&&attachTarget.is('input')){
            attachTarget.addClass('text').css(me.defaultOptions.style);
            if(!attachTarget.attr("name")){
                attachTarget.attr('name',me.defaultOptions.name);
            }
            com_text_wrapper.insertBefore(attachTarget);
            attachTarget.appendTo(com_text_wrapper);
        }else{
            com_text_wrapper.appendTo(attachTarget);
            $('<input type="text"/>').addClass('text').css(me.defaultOptions.style).attr('value',me.defaultOptions.value).attr('name',me.defaultOptions.name).appendTo(com_text_wrapper);
        }

        var objText=com_text_wrapper.find('input.text:eq(0)');

        objText.focus(function(){
            me.defaultOptions.focus.call(me,objText.val(),objText);
        }).blur(function(){
            me.defaultOptions.blur.call(me,objText.val(),objText);
        }).on('input',function(){
            me.defaultOptions.change.call(me,objText.val(),objText);
        });
    }
};

/* Select */
com.form.Select=function(options){
    this.defaultOptions={
        attachTarget:'',
        id:com.generateId('form_select'),
        selected:'',
        maxHeight:300,
        unSelectedText:'---请选择---',
        unSelectedValue:'',
        showUnSelected:true,
        forceUnSelected:false,
        dataUrl:'',
        parameters:{

        },
        options:[],
        name:'',
        style:{

        },
        change:function(val,obj){

        }
    };
    $.extend(true,this.defaultOptions,options||{});
    this.initialise();
    return this;
};

com.form.Select.prototype={
    initialise:function(){
        var me=this;
        var attachTarget=$(me.defaultOptions.attachTarget);
        if(!attachTarget){
            return false;
        }
        this.getAjaxOptions();
        this.generateElement();
    },
    generateElement:function(){
        var me=this;
        var com_select_wrapper=$('<div/>'),
            select_box=$('<div/>'),
            dotted=$('<span/>'),
            text=$('<span/>'),
            ul=$('<ul/>'),
            hidden=$('<input/>');

            com_select_wrapper.addClass('com_select_wrapper').attr('id',me.defaultOptions.id);
            select_box.addClass('select_box').css(me.defaultOptions.style);
            dotted.addClass('dotted').text('▼');
            text.addClass('text').text(me.defaultOptions.unSelectedText);
            ul.addClass('select_ul');
        if(me.defaultOptions.showUnSelected){
            var unText=$('<div/>');
                unText.addClass('li_text').text(me.defaultOptions.unSelectedText);
            var unLi=$('<li/>');
                unLi.addClass('select_li').attr('data-value',me.defaultOptions.unSelectedValue).append(unText);
                unLi.appendTo(ul);
        }
            hidden.attr('type','hidden').attr('name',me.defaultOptions.name).val(me.defaultOptions.selected);

            dotted.appendTo(select_box);
            text.appendTo(select_box);
            hidden.appendTo(select_box);
            ul.appendTo(select_box);
            select_box.appendTo(com_select_wrapper);

        var attachTarget=$(me.defaultOptions.attachTarget);
        if(attachTarget.is('select')&&me.defaultOptions.options.length==0){
            me.getSelectOptions();
        }

        $(me.defaultOptions.options).each(function(i,v){
                var li=$('<li/>');
                li.addClass('select_li');
                var li_text=$('<div/>');
                li_text.addClass('li_text').text(v['text']);
                li_text.attr('data-value',v['value']).appendTo(li);
                if(v['value']==me.defaultOptions.selected){
                    text.text(v['text']);
                    li.addClass('selected');
                    hidden.val(v['value']);
                }
                if(v['children']){
                    li.addClass('children');
                    var sub_ul=$('<ul/>');
                        sub_ul.addClass('sub_ul');
                    $(v['children']).each(function(i2,v2){
                        var sub_li=$('<li/>');
                        sub_li.addClass('sub_li');
                        var sub_text=$('<div/>');
                        sub_text.addClass('sub_text').text(v2['text']);
                        sub_text.attr('data-value',v2['value']).appendTo(sub_li);
                        if(v2['value']==me.defaultOptions.selected){
                            text.text(v['text']);
                            sub_li.addClass('selected');
                            hidden.val(v['value']);
                        }
                        sub_li.appendTo(sub_ul);
                    });
                    sub_ul.appendTo(li);
                }
                li.appendTo(ul);
        });

        if(attachTarget.is('select')){
            com_select_wrapper.insertBefore(attachTarget);
            attachTarget.remove();
        }else{
            com_select_wrapper.appendTo(attachTarget);
        }

        var isFocus=false;
        com_select_wrapper.click(function(ex){
            ex.preventDefault();
            ex.stopPropagation();
            ul.toggleClass('show').css({
                overflow:'auto',
                height:'auto'
            });
            isFocus=ul.hasClass('show');
            if(ul.hasClass('show')&&(ul.height()>me.defaultOptions.maxHeight)){
                ul.css({
                    'overflow-y':'scroll',
                    height:me.defaultOptions.maxHeight
                });
            }
            ul.find('.select_li>div,.sub_li>div').each(function(i2,v2){
                $(v2).click(function(ex2){
                    if($(this).parent('li').hasClass('children')){
                        return false;
                    }
                    text.text($(this).text());
                    if($(this).attr('data-value')!=hidden.val()){
                        me.defaultOptions.change.call(me,$(this).attr('data-value'),me);
                    }
                    hidden.val($(this).attr("data-value"));
                    ul.find('.select_li,.sub_li').removeClass('selected');
                    $(v2).parent('li').addClass('selected');
                });
            });
        });

        $('body').click(function(e){
            if(isFocus){
                ul.removeClass('show');
                isFocus=false;
            }
        });

    },
    getAjaxOptions:function(){
        var me=this;
        if(me.defaultOptions.dataUrl){
            $.ajax({
                type:'Get',
                dataType:'json',
                url:me.defaultOptions.dataUrl,
                data:me.defaultOptions.parameters,
                async:false,
                success:function(resData){
                    if(resData['statue']&&resData['data']){
                        me.defaultOptions.options=resData['data'];
                    }
                    if((!!resData['selected'])&&!me.defaultOptions.forceUnSelected){
                        me.defaultOptions.selected=resData['selected'];
                    }
                }
            });
        }
    },
    getSelectOptions:function(){
        var me=this;
        var attachTarget=$(me.defaultOptions.attachTarget);
        if(attachTarget.is('select')){
            if(!!attachTarget.attr('name')){
                me.defaultOptions.name=attachTarget.attr('name');
            }
            var newArr=[];
            attachTarget.find('option').each(function(i,v){
                var _this=$(this);
                if((!!_this.attr('selected'))&&!me.defaultOptions.forceUnSelected){
                    me.defaultOptions.selected=_this.val();
                }
                var _opt={};
                _opt['value']=_this.val();
                _opt['text']=_this.text();
                newArr=newArr.concat(_opt);
            });
            me.defaultOptions.options=newArr;
        }
    }
};

/* Select Box */
com.form.SelectBox=function(options){
    this.defaultOptions={
        attachTarget:'',
        id:com.generateId('form_select_box'),
        dataUrl:'',
        options:[],
        height:200,
        parameters:{
            parentId:0
        },
        style:{

        },
        click:function(e,source,object){

        }
    };
    $.extend(true,this.defaultOptions,options||{});
    this.initialise();
    return this;
};

com.form.SelectBox.prototype={
    initialise:function(){
        if(!this.defaultOptions.dataUrl||$(this.defaultOptions.attachTarget).length==0){
            return false;
        }
        this.getAjaxResult();
        this.generateHtml();
    },
    generateHtml:function(){
        var me=this,
            com_select_box_wrapper=$('<div/>'),
            sb_ul=$('<ul/>'),
            attachTarget=$(me.defaultOptions.attachTarget);

        com_select_box_wrapper.addClass('com_select_box_wrapper').css({height:me.defaultOptions.height});
        sb_ul.addClass('sb_ul');
        sb_ul.appendTo(com_select_box_wrapper);

        if(me.defaultOptions.options.length>0){

            com_select_box_wrapper.appendTo(attachTarget);

            $(me.defaultOptions.options).each(function(i,v){
                var sb_li=$('<li/>'),
                    a=$('<a/>');
                a.attr('href','javascript:;');
                a.text(v['text'])
                    .attr({
                        "data-value":v['value'],
                        "data-level":v['level'],
                        "data-id":v['id']
                    })
                    .appendTo(sb_li);
                if(v['en']){
                    a.attr('data-en',v['en']);
                }
                if(v['zh']){
                    a.attr('data-zh',v['zh']);
                }
                if(!v['isLeaf']){
                    var span=$('<span/>');
                    span.addClass('parent').text('▶').prependTo(a);
                }
                sb_li.addClass('sb_li').appendTo(sb_ul);

                a.click(function(e){
                    sb_ul.find('.sb_li').removeClass('selected');
                    sb_li.addClass('selected');
                    var param={
                        parentId:v['value']
                    };
                    $.extend(true,me.defaultOptions.parameters,param);
                    com_select_box_wrapper.nextAll('.com_select_box_wrapper').remove();

                    if(!v['isLeaf']){
                        me.getAjaxResult();
                        me.generateHtml();
                    }
                    me.defaultOptions.click.call(this,e,v,com_select_box_wrapper);
                });

            });
        }

    },
    getAjaxResult:function(){
        var me=this;
        $.ajax({
            type:'Get',
            dataType:'json',
            url:me.defaultOptions.dataUrl,
            data:me.defaultOptions.parameters,
            async:false,
            success:function(resData){
                if(resData['statue']&&resData['data']){
                    me.defaultOptions.options=resData['data'];
                }
            }
        });
    }
};

/* Widgets */
com.form.Widgets=function(options){
    this.defaultOptions={
        attachTarget:'',
        id:com.generateId('form_widgets'),
        items:[],
        action:'javascript:;',
        method:'get',
        style:{

        },
        submitText:'提交',
        submit:function(ext,form,obj){

        }
    };
    $.extend(true,this.defaultOptions,options||{});
    this.initialise();
    return this;
};

com.form.Widgets.prototype={
    initialise:function(){
        var me=this;
        var attachTarget=$(me.defaultOptions.attachTarget);
        if(!attachTarget){
            return false;
        }
        this.generateElement();
    },
    generateElement:function(){
        var me=this;
        var attachTarget=$(me.defaultOptions.attachTarget);
        var com_widgets_wrapper=$('<div/>'),
            form=$('<form/>');

            com_widgets_wrapper
                .addClass('com_widgets_wrapper')
                .attr('id',me.defaultOptions.id)
                .css(me.defaultOptions.style);

            form.attr({
                action:me.defaultOptions.action,
                method:me.defaultOptions.method,
                id:me.defaultOptions.id+'_form'
            });

        $(me.defaultOptions.items).each(function(i,v){
            if(v['type']&&v['options']){
                var item=$('<div/>'),
                    label=$('<div/>');
                    item.addClass('item');
                    label.addClass('label').text(v['label']).appendTo(item);

                var _opt=v['options'];
                    _opt['attachTarget']=item;

                switch (v['type']){
                    case 'Text':
                        new com.form.Text(_opt);
                        break;
                    case 'Select':
                        new com.form.Select(_opt);
                        break;
                    case 'Checkbox':
                        new com.form.Checkbox(_opt);
                        break;
                    case 'Numeric':
                        new com.form.Numeric(_opt);
                        break;
                    default :
                        break;
                }
                item.appendTo(form);
            }
        });

        var sub=$('<input/>');
        sub.attr('type','submit').val(me.defaultOptions.submitText).addClass('com_css_util_button_wrapper com_css_util_button_color_green submit').appendTo(form);

        form.appendTo(com_widgets_wrapper);
        $('<div/>').css({clear:'both',width:'100%',height:0}).appendTo(com_widgets_wrapper);
        com_widgets_wrapper.appendTo(attachTarget);

        form.submit(function(ext){
            me.defaultOptions.submit.call(me,ext,form,me);
        });
    },
    getForm:function(){
        return $("#"+this.defaultOptions.id+"_form:eq(0)");
    },
    getFormData:function(){
        var me=this,
            data={},
            form=me.getForm();
        $(form.serializeArray()).each(function(i,v){
            data[v['name']]=v['value'];
        });
        return data;
    }
};