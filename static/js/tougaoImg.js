tinymce.PluginManager.add('TougaoImg', function(editor, url) {

    var $el = jQuery(editor.getElement()).parent();

    var input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');

    function img_post() {
        var fd = new FormData();
        fd.append( "upfile", input.files[0]);
        fd.append( "action", 'tougao_img_upload');      
        jQuery.ajax({
            type: 'POST',
            url: _MBT.admin_ajax,
            data: fd, 
            processData: false,
            contentType: false,
            dataType: 'json',
            success: function(data, textStatus, XMLHttpRequest) {
                layer.closeAll();
                if(data.result=='0'){
                    editor.insertContent( '<img src="'+data.image.url+'" alt="'+data.image.alt+'">' );
                }else{
                    layer.msg('图片上传出错，请稍后再试！');
                }
            },
            error: function(MLHttpRequest, textStatus, errorThrown) {
                layer.msg(errorThrown);
            }
        });
    }

    input.onchange = function() {
        var file = this.files[0];

        if(file){
            if(!/\.(gif|jpg|jpeg|png|GIF|JPG|JPEG|PNG)$/.test(file.name)){
                layer.msg('仅支持上传jpg、png、gif格式的图片文件');
                return false;
            }else if(file.size > 10 * 1024 * 1024){
                layer.msg('图片大小不能超过10M');
                return false;
            }else{
                img_post();
                layer.msg('正在上传...');
            }
        }
    };


    editor.addButton('TougaoImg', {
        text: '',
        icon: 'image',
        tooltip: "上传图片",
        classes: 'TougaoImg',
        onclick: function() {
            if( ! /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ) {
                input.click();
            }
        },
        onTouchEnd: function(){
            if( /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ) {
                input.click();
            }
        }
    });
});