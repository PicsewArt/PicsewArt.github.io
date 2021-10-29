/**
 * Created by Administrator on 14-6-10.
 */
var Corning=window.Corning||{};
(function(){

    function slide(){

        var form_handle=$("#slide_form");

        var code_template=$('#code_template');
        var add=form_handle.find('input.add').eq(0);
        var reduce=form_handle.find('input.reduce').eq(0);
        var images=form_handle.find('.images');

        add.click(function(e){
            e.preventDefault();
            var image_counter=images.find('input[name=image_counter]').eq(0);
            var num=parseInt(image_counter.val());
                num+=1;
            if(num>5){
                new com.Dialog({
                    isConfirm:false,
                    type:'warn',
                    title:'操作提示',
                    width:270,
                    isBgClose:false,
                    opacity:0.3,
                    info:'最多只能添加5张图片，太多的图片会严重影响页面的加载，令顾客等待太久...',
                    afterClose:function(){

                    }
                });
            }else{
                var clone=code_template.clone();
                var html=clone.html();
                    html=html.replace(/#HEADER/ig,'设置第'+num+'张图片');
                    html=html.replace(/#IMAGE/ig,'image'+num);
                    html=html.replace(/#LINK/ig,'link'+num);
                    images.append(html);
                image_counter.val(num);
            }
        });

        reduce.click(function(e){
            e.preventDefault();
            var image_counter=images.find('input[name=image_counter]').eq(0);
            var num=parseInt(image_counter.val());
                num-=1;
            if(num<2){
                new com.Dialog({
                    isConfirm:false,
                    type:'warn',
                    title:'操作提示',
                    width:270,
                    isBgClose:false,
                    opacity:0.3,
                    info:'最少也要2张图片...',
                    afterClose:function(){

                    }
                });
            }else{
                images.find('.fs:last').remove();
                image_counter.val(num);
            }
        });

        form_handle.validation({
            success:function(ex,form){
                ex.preventDefault();
                var image_counter=images.find('input[name=image_counter]').eq(0);
                var number=parseInt(image_counter.val());

                var flashType=form.find('select[name=flashtype]').eq(0).val();
                var flashSpring=form.find('select[name=flashspring]').eq(0).val();
                var duration=form.find('select[name=duration]').eq(0).val();
                var interval=form.find('select[name=interval]').eq(0).val();
                var autoplay=form.find('select[name=autoplay]').eq(0).val();
                var width=form.find('select[name=width]').eq(0).val();
                var height=form.find('input[name=height]').eq(0).val();
                var width_mx=parseInt(width*50/parseInt(height));
                var height_top=parseInt(height)-55;
                var target=form.find('select[name=target]').eq(0).val();
                var l_arrow=form.find('input[name=l_arrow]').eq(0).val();
                var r_arrow=form.find('input[name=r_arrow]').eq(0).val();

                var html_template='<div class="J_TWidget" data-widget-config="{$$contentCls$$:$$taobaoux$$}" data-widget-type="Tabs" style="height:#HEIGHTpx;overflow:hidden;">\n';
                    html_template+='    <div class="taobaoux" style="height:#HEIGHTpx;">\n';
                    html_template+='        <div class="footer-more-trigger sn-simple-logo" style="width:#WIDTHpx;height:#HEIGHTpx;top:auto;padding:0;border:0;left:50%;">\n';
                    html_template+='            <div class="footer-more-trigger sn-simple-logo" style="width:#WIDTHpx;height:#HEIGHTpx;padding:0;border:0;left:-50%;top:0;">\n';
                    html_template+='                <div data-widget-config="{$$contentCls$$: $$taobaoux-com$$,$$navCls$$:$$bbs-taobaoux-com$$,$$effect$$:$$#FLASHTYPE$$,$$easing$$:$$#FLASHSPRING$$,$$prevBtnCls$$:$$prev$$,$$nextBtnCls$$:$$next$$,$$autoplay$$:#AUTOPLAY,$$duration$$:#DURATION,$$interval$$:#INTERVAL,$$viewSize$$:[#WIDTH],$$circular$$:true}" data-widget-type="Carousel" class="J_TWidget">\n';

                    html_template+='                    <div class="J_TWidget" data-widget-config="{$$trigger$$:$$.uxux$$,$$align$$:{$$node$$:$$.uxux$$,$$offset$$:[-500,0],$$points$$:[$$cc$$,$$cc$$]}}" data-widget-type="Popup" style="display:none;">\n';
                    html_template+='                        <div class="prev" style="cursor:pointer;">\n';
                    html_template+='                            <img src="#LFET_ARROW" width="30" />\n';
                    html_template+='                        </div>\n';
                    html_template+='                    </div>\n';

                    html_template+='                    <div class="J_TWidget" data-widget-config="{$$trigger$$:$$.uxux$$,$$align$$:{$$node$$:$$.uxux$$,$$offset$$:[500,0],$$points$$:[$$cc$$,$$cc$$]}}" data-widget-type="Popup" style="display:none;">\n';
                    html_template+='                        <div class="next" style="cursor:pointer;">\n';
                    html_template+='                            <img src="#RIGHT_ARROW" width="30" />\n';
                    html_template+='                        </div>\n';
                    html_template+='                    </div>\n';

                    html_template+='                    <div style="height:#HEIGHTpx;width:#WIDTHpx;overflow:hidden;padding:0;margin:0;" class="uxux">\n';
                    html_template+='                        <ul class="taobaoux-com" style="height:#HEIGHTpx;width:#WIDTHpx;padding:0;margin:0;">\n';

                    var list1='                         <li style="width:#WIDTHpx;height:#HEIGHTpx;padding:0;margin:0;"><a target="#TARGET" href="#LINK" style="padding:0;margin:0;"><img src="#IMAGE" width="#WIDTHpx" height="#HEIGHTpx" border="0px"/></a></li>\n';

                     for(var i=0;i<number;i++){
                         var list=list1;
                             list=list.replace(/#IMAGE/ig,'#IX'+(i+1));
                             list=list.replace(/#LINK/ig,'#LX'+(i+1));
                         html_template+=list;
                     }

                    html_template+='                        </ul>\n';
                    html_template+='                    </div>\n';

                    html_template+='                    <div class="footer-more-trigger sn-simple-logo" style="width:#WIDTHpx;height:50px;padding:0;border:0;z-index:99;left:50%;">\n';
                    html_template+='                        <div class="footer-more-trigger sn-simple-logo" style="width:#WIDTHpx;height:50px;padding:0;border:0;left:-50%;top:#H_TOPpx;">\n';
                    html_template+='                            <ul class="bbs-taobaoux-com" style="width:950px;height:50px;margin:0 auto;text-align: center;">\n';

                    var list2='                             <li style="display: inline;margin: 0 5px;cursor:pointer;line-height: 50px;"><img src="#IMAGE" style="width:#W_MXpx; border: 0; height:50px;"/></li>\n';
                    for(var i=0;i<number;i++){
                        var list=list2;
                        list=list.replace(/#IMAGE/ig,'#IX'+(i+1));
                        html_template+=list;
                    }

                    html_template+='                            </ul>\n';
                    html_template+='                        </div>\n';
                    html_template+='                    </div>\n';

                    html_template+='                </div>\n';
                    html_template+='            </div>\n';
                    html_template+='        </div>\n';
                    html_template+='    </div>\n';
                    html_template+='    <ul class="ks-switchable-nav" style="display:none;"></ul>\n';
                    html_template+='</div>';

                    html_template=html_template.replace(/\$\$/ig,'\'');
                    html_template=html_template.replace(/#FLASHTYPE/ig,flashType);
                    html_template=html_template.replace(/#FLASHSPRING/ig,flashSpring);
                    html_template=html_template.replace(/#DURATION/ig,duration);
                    html_template=html_template.replace(/#INTERVAL/ig,interval);
                    html_template=html_template.replace(/#AUTOPLAY/ig,autoplay);
                    html_template=html_template.replace(/#WIDTH/ig,width);
                    html_template=html_template.replace(/#W_MX/ig,width_mx.toString());
                    html_template=html_template.replace(/#HEIGHT/ig,height);
                    html_template=html_template.replace(/#H_TOP/ig,height_top.toString());
                    html_template=html_template.replace(/#TARGET/ig,target);
                    html_template=html_template.replace(/#LFET_ARROW/ig,l_arrow);
                    html_template=html_template.replace(/#RIGHT_ARROW/ig,r_arrow);

                for(var i=0;i<number;i++){
                    var ix=form.find('input[name=image'+(i+1)+']').eq(0).val();
                    var il=form.find('input[name=link'+(i+1)+']').eq(0).val();
                    html_template=html_template.replace(new RegExp("#IX"+(i+1),'ig'),ix);
                    html_template=html_template.replace(new RegExp("#LX"+(i+1),'ig'),il);
                }

                var html='<textarea name="" style="width: 820px; height: 580px;">';
                    html+=html_template;
                    html+='</textarea>';

                new com.Dialog({
                    type:'form',
                    title:"获取淘宝代码",
                    isBgClose:false,
                    formId:com.generateId('poster_'),
                    formAction:'javascript:;',
                    width:845,
                    formHtml:html,
                    afterShow:function(dialog){

                    }
                });


            },
            failure:function(ex,form){
                ex.preventDefault();

            }
        });
    }

    Corning.tb_slide=slide;

})();
