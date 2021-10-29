/**
 * Created by Administrator on 14-5-25.
 */

$(document).ready(function(){
    var com=window.com||{};

    com.run.add('leaveMessage',{
        path:G_PATH_ARRAY['ASSETS_PATH']+'home/js/leave_message.js',
        type:'js'
    });
    com.run.add('util',{
        path:G_PATH_ARRAY['ASSETS_PATH']+'common/js/util.js',
        type:'js'
    });
    com.run.add('util.css',{
        path:G_PATH_ARRAY['ASSETS_PATH']+'common/css/util.css',
        type:'css'
    });

    var current_page=window.current_page||'';
    var current_item=window.current_item||'';
    if(!!current_page){
        var navs=$('ul.nav>li>a');
        navs.each(function(i,v){
            var me=$(this);
            if(me.attr("data-page")==current_page){
                $('ul.nav>li').removeClass('cur');
                me.parent('li').addClass('cur');
            }
        });


        var items=$('.left .com_list_style_a .li>a');
        items.each(function(i,v){
            var me=$(this);
            if(me.attr("data-id")==current_item){
                items.removeClass('cur');
                me.addClass('cur');
            }
        });
    }

    /* 上传图片控件 */
    var com=window.com||{};
    com.swfupload=function(option){

        var defaultOption={
            success_upload:function(){

            },
            start_upload:function(){

            },
            process_upload:function(){

            },
            targetId:'',
            upload_action:''
        };

        $.extend(true,defaultOption,option||{});

        return new SWFUpload({
            // Backend settings
            upload_url:G_PATH_ARRAY['BASE_URL']+"home/"+defaultOption.upload_action,
            // Flash Settings
            flash_url :G_PATH_ARRAY['ASSETS_PATH']+"common/swfupload/demos/swfupload/swfupload.swf",
            flash9_url :G_PATH_ARRAY['ASSETS_PATH']+"common/swfupload/demos/swfupload/swfupload_fp9.swf",
            file_post_name: "Filed_Dta",
            // Flash file settings
            file_size_limit : "1 MB",
            file_types : "*.jpg;*.gif;*.png",			// or you could use something like: "*.doc;*.wpd;*.pdf",
            file_types_description : "请上传图片文件",
            file_upload_limit : 1,
            file_queue_limit : 1,
            // Event handler settings
            swfupload_loaded_handler : function(){

            },
            file_dialog_start_handler: function(){

            },
            file_queued_handler : function(){

            },
            file_queue_error_handler : function(){

            },
            file_dialog_complete_handler : function(){
                try {
                    this.startUpload();
                } catch (ex)  {
                    this.debug(ex);
                }
            },
            upload_start_handler : function(){

            },	// I could do some client/JavaScript validation here, but I don't need to.
            swfupload_preload_handler : function(){

            },
            swfupload_load_failed_handler : function(){

            },
            upload_progress_handler : function(){

            },
            upload_error_handler : function(){

            },
            upload_success_handler : function(swf_data, serverData, isTrue){
                var resData=eval('('+serverData+')');
                defaultOption.success_upload.call(this,resData);
            },
            upload_complete_handler : function(event, file, serverData){

            },

            // Button Settings
            button_image_url :G_PATH_ARRAY['ASSETS_PATH']+"common/images/add_button_80.png",
            button_placeholder_id :defaultOption.targetId,
            button_width: 80,
            button_height: 80,
            custom_settings : {
                progress_target : "",
                upload_successful : false
            },
            // Debug settings
            debug: false
        });
    };

    /* 错误提示 */
    function errorTips(resData){
        new com.Dialog({
            isConfirm:false,
            type:'error',
            title:'操作提示',
            width:270,
            opacity:0,
            info:resData['msg']||'登陆错误！',
            afterClose:function(){
                var type=resData['errorType'];
                switch (type){
                    case 1:
                        location.href=G_PATH_ARRAY['BASE_URL']+'home/login?return_url='+encodeURIComponent(resData['return_url']);
                        break;
                    case 2:
                        break;
                    case 3:
                        break;
                    default:
                        location.href=G_PATH_ARRAY['BASE_URL'];
                        break;
                }
            }
        });
    }

    /* 验证登陆控件 */
    com.safeGetData=function(url,formData,fn){
        com.getForm(url,formData,function(resData){
            if(typeof fn=="function"){
                var statue=resData['statue']||false;
                if(!statue){
                    errorTips(resData);
                }else{
                    fn.call(this,statue,resData);
                }
            }
        });
    };

    com.safePostData=function(url,formData,fn){
        com.postForm(url,formData,function(resData){
            if(typeof fn=="function"){
                var statue=resData['statue']||false;
                if(!statue){
                    errorTips(resData);
                }else{
                    fn.call(this,statue,resData);
                }
            }
        });
    };

    //右侧悬浮效果
    $(window).scroll(function () {
        var sTop=$(window).scrollTop();
        if(sTop>260){
            $("#fixed_bottom .scrollShow").fadeIn();
        }else{
            $("#fixed_bottom .scrollShow").fadeOut();
        }
    });

    $("#fixed_bottom .up>a").click(function(ex){
        ex.preventDefault();
        $("html,body").animate({ scrollTop: 0 }, 300);
    });

    $("#fixed_bottom .msg>a").click(function(ex){
        ex.preventDefault();
        com.run('leaveMessage','util','util.css','tab',function(){
            new com.leave_message({

            });
        });
    });

});