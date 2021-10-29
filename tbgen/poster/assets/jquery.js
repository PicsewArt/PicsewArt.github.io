(function($){
    var formState = false,
        fieldState = false,
        wFocus = false,
        globalOptions = {};


    var validateField = function(field, valid) { // 验证字段
        var el = $(field),
            error = false,
            errorMsg = '';

        for (i = 0; i < valid.length; i++) {

            var x = true,
                flag = valid[i],
                msg = (el.attr(flag + '-message')==undefined)?null:el.attr(flag + '-message');

            if (flag.substr(0, 1) == '!') {
                x = false;
                flag = flag.substr(1, flag.length - 1);
            }

            var rules = globalOptions.validRules;
            for (j = 0; j < rules.length; j++) {
                var rule = rules[j];
                if (flag == rule.name) {
                    if (rule.validate.call(field, el.val()) == x) {
                        error = true;
                        errorMsg = (msg == null)?rule.defaultMsg:msg;
                        break;
                    }
                }
            }

            if (error) {break;}
        }

        var controls = el.parents('.libs'),
            controlGroup = el.parents('.li'),
            errorEl = controls.children('.help_block, .help_inline');

        if (error) {
            if (!controlGroup.hasClass('error')) {
                if (errorEl.length > 0) {
                    var help = errorEl.text();
                    controls.data('help-message', help);
                    errorEl.text(errorMsg);
                } else {
                    controls.append('<span class="help_inline">'+errorMsg+'</span>');
                }
                controlGroup.addClass('error');
            }
        } else {
            if (fieldState) {
                if (errorEl.length > 0) {
                    var help = controls.data('help-message');
                    if (help == undefined) {
                        errorEl.remove();
                    } else {
                        errorEl.text(help);
                    }
                }
                controlGroup.attr('class','li');
            } else {
                if (errorEl.length > 0) {
                    var help = errorEl.text();
                    controls.data('help-message', help);
                }
            }
        }
        return !error;
    };

    var validationForm = function(obj) { // 表单验证方法
        var form=$(obj);
        form.submit(function(ex) { // 提交时验证
            /*if (formState) { // 重复提交则返回
             return false;
             }*/
            formState = true;
            var validationError = false;
            $('input,textarea,select',this).each(function () {
                var el = $(this),
                    valid = (el.attr('check-type')==undefined)?null:el.attr('check-type').split(' ');

                if (valid != null && valid.length > 0) {
                    if (!validateField(this, valid)) {
                        if (wFocus == false) {
                            scrollTo(0, el[0].offsetTop - 50);
                            wFocus = true;
                        }
                        validationError = true;
                    }
                }

            });

            wFocus = false;
            fieldState = true;

            if (validationError) {
                formState = false;
                $('input,textarea,select',this).each(function() {
                    var el = $(this),
                        valid = (el.attr('check-type')==undefined)?null:el.attr('check-type').split(' ');

                    if (valid != null && valid.length > 0) {
                        el.focus(function() { // 获取焦点时
                            var controls = el.parents('.controls'),
                                controlGroup = el.parents('.control-group'),
                                errorEl = controls.children('.help_block, .help_inline');
                            if (errorEl.length > 0) {
                                var help = controls.data('help-message');
                                if (help == undefined) {
                                    errorEl.remove();
                                } else {
                                    errorEl.text(help);
                                }
                            }
                            controlGroup.attr('class','li');
                        });

                        el.blur(function() { // 失去焦点时
                            validateField(this,valid);
                        });
                    }
                });
                globalOptions.failure.call(this,ex,form);
                return false;
            }
            globalOptions.success.call(this,ex,form);
            return true;
        });
    };

    $.fn.validation = function(options) {
        return this.each(function() {
            globalOptions = $.extend({}, $.fn.validation.defaults, options);
            validationForm(this);
        });
    };

    $.fn.validation.defaults = {
        validRules : [
            {name:'required', validate: function(value) {return ($.trim(value) == '');}, defaultMsg: '请输入内容'},
            {name:'number', validate: function(value) {return (!/^[0-9]\d*$/.test(value));}, defaultMsg: '请输入数字'},
            {name:'price', validate: function(value) {return (!/^\d*\.{0,1}\d+$/.test(value));}, defaultMsg: '请输入价格'},
            {name:'mail', validate: function(value) {return (!/^[a-zA-Z0-9]{1}([\._a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+){1,3}$/.test(value));}, defaultMsg: '请输入邮箱地址'},
            {name:'char', validate: function(value) {return (!/^[_a-zA-Z]+$/.test(value));}, defaultMsg: '请输入英文字符'},
            {name: 'chinese', validate: function(value) {return (!/^[\u4e00-\u9fff]$/.test(value));}, defaultMsg: '请输入汉字'},
            {name: 'url', validate: function(value) {return (!/^http(s)?:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\:+!]*([^<>])*$/.test(value));}, defaultMsg: '请输入正确的网址'},
            {name: 'date', validate: function(value) {return (!/^((\d{2}(([02468][048])|([13579][26]))[\-\/\s]?((((0?[13578])|(1[02]))[\-\/\s]?((0?[1-9])|([1-2][0-9])|(3[01])))|(((0?[469])|(11))[\-\/\s]?((0?[1-9])|([1-2][0-9])|(30)))|(0?2[\-\/\s]?((0?[1-9])|([1-2][0-9])))))|(\d{2}(([02468][1235679])|([13579][01345789]))[\-\/\s]?((((0?[13578])|(1[02]))[\-\/\s]?((0?[1-9])|([1-2][0-9])|(3[01])))|(((0?[469])|(11))[\-\/\s]?((0?[1-9])|([1-2][0-9])|(30)))|(0?2[\-\/\s]?((0?[1-9])|(1[0-9])|(2[0-8]))))))(\s(((0?[1-9])|(1[0-2]))\:([0-5][0-9])((\s)|(\:([0-5][0-9])\s))([AM|PM|am|pm]{2,2})))?$/.test(value));}, defaultMsg: '请输入日期'},
            {name: 'mobile', validate: function(value) {return (!/^0?(1[358][0-9]{9})$/.test(value));}, defaultMsg: '请输入正确的手机号码'},
            {name: 'tel', validate: function(value) {return (!/^(\\d{3,4}-)?\\d{7,8}$/.test(value));}, defaultMsg: '请输入正确的固定电话号码'},
            {name: 'password', validate: function(value) {return (!/^[A-Za-z0-9_-]{6,20}$/.test(value));}, defaultMsg: '请输入6-20位密码'},
            {name: 'username', validate: function(value) {return (!/^[A-Za-z0-9_\-\u4e00-\u9fa5]{4,12}$/.test(value));}, defaultMsg: '请输入4-12位的用户名'}
        ],
        success:function(ex){

        },
        failure:function(ex){

        }
    };
})(window.jQuery);