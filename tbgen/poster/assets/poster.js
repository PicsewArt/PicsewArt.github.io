/**
 * Created by Administrator on 14-6-10.
 */
var Corning=window.Corning||{};
(function(){

    function poster(){
        var form_handle=$("#poster_form");

        form_handle.validation({
            success:function(ex,form){
                ex.preventDefault();
                var version=form.find('select[name=version]').eq(0).val();
                var width=form.find('select[name=width]').eq(0).val();
                var width_a=parseInt(width)/2;
                var height=form.find('input[name=height]').eq(0).val();
                var target=form.find('select[name=target]').eq(0).val();
                var image=form.find('input[name=image]').eq(0).val();
                var url=form.find('input[name=url]').eq(0).val();

                var html_template='<div style="height:#HEIGHTpx;">\n';
                    html_template+='    <div class="#VERSION" style="left:50%;top:auto;border:0;padding:0;">\n';
                    html_template+='        <div class="#VERSION" style="left:-#WIDTH_Apx;top:auto;border:0;padding:0;">\n';
                    html_template+='            <a href="#URL" target="#TARGET" style="width:#WIDTH_Bpx;height:#HEIGHTpx;display:block;">\n';
                    html_template+='                <img src="#IMAGE" width="#WIDTH_Bpx" height="#HEIGHTpx" border="0" />\n';
                    html_template+='            </a>\n';
                    html_template+='        </div>\n';
                    html_template+='    </div>\n';
                    html_template+='</div>';

                    html_template=html_template.replace(/#HEIGHT/ig,height);
                    html_template=html_template.replace(/#VERSION/ig,version);
                    html_template=html_template.replace(/#WIDTH_A/ig,width_a.toString());
                    html_template=html_template.replace(/#WIDTH_B/ig,width);
                    html_template=html_template.replace(/#IMAGE/ig,image);
                    html_template=html_template.replace(/#TARGET/ig,target);
                    html_template=html_template.replace(/#URL/ig,url);

                var html='<textarea name="" style="width: 720px; height: 180px;">';
                    html+=html_template;
                    html+='</textarea>';
                new com.Dialog({
                    type:'form',
                    title:"获取淘宝代码",
                    isBgClose:false,
                    formId:com.generateId('poster_'),
                    formAction:'javascript:;',
                    width:745,
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

    Corning.poster=poster;

})();
