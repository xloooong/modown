(function() {

     tinymce.create('tinymce.plugins.MyButtons', {
          init : function(ed, url) {

               ed.addButton( 'button_player', {
                    text : '',
                    icon: 'wp-media-video dashicons-before dashicons-video-alt3 modown-editor-icon',
                    title : '插入视频播放器',
                    onclick : function() {
                         ed.windowManager.open( {
                              title: '在线播放视频',
                              body: [
                                   {
                                        type   : 'listbox',
                                        name   : 'player',
                                        label  : '播放器',
                                        values : [
                                             { text: 'dplayer', value: 'dplayer' },
                                             { text: 'ckplayer', value: 'ckplayer' },
                                             { text: 'fplayer', value: 'fplayer' }
                                        ],
                                        minWidth: 350
                                   },
                                   {
                                        type: 'textbox',
                                        name: 'videoSrc',
                                        label: 'MP4/M3U8等地址',
                                        value: '',
                                        multiline: true,
                                        minWidth: 350,
                                        minHeight: 100
                                   }
                              ],
                              onsubmit: function( e ) {
                                   ed.selection.setContent('['+e.data.player+']'+e.data.videoSrc+'[/'+e.data.player+']');
                              }
                         });
                    }
               });

               ed.addButton( 'button_player2', {
                    text : '',
                    icon: 'wp-media-video dashicons-before dashicons-format-video modown-editor-icon',
                    title : '嵌入外链视频',
                    onclick : function() {
                         ed.windowManager.open( {
                              title: '爱奇艺腾讯B站等视频',
                              body: [
                                   {
                                        type: 'textbox',
                                        name: 'videoSrc',
                                        label: '外链地址(代码iframe里src的值)',
                                        value: '',
                                        multiline: true,
                                        minWidth: 350,
                                        minHeight: 60
                                   },
                                   {
                                        type: 'textbox',
                                        name: 'videoWid',
                                        label: '宽(只填数字，不填默认自适应)',
                                        value: '',
                                        minWidth: 350
                                   },
                                   {
                                        type: 'textbox',
                                        name: 'videoHei',
                                        label: '高(只填数字，不填默认自适应)',
                                        value: '',
                                        minWidth: 350
                                   }
                              ],
                              onsubmit: function( e ) {
                                   ed.selection.setContent('[external_video'+(e.data.videoWid?' width="'+e.data.videoWid+'px"':'')+(e.data.videoHei?' height="'+e.data.videoHei+'px"':'')+']'+e.data.videoSrc+'[/external_video]');
                              }
                         });
                    }
               });

               ed.addButton( 'button_gallery', {
                    text : '',
                    icon: 'wp-media-preview dashicons-before dashicons-format-gallery modown-editor-icon',
                    title : '外链相册',
                    onclick : function() {
                         ed.windowManager.open( {
                              title: '插入外链相册',
                              body: [
                                   {
                                        type: 'textbox',
                                        name: 'urls',
                                        label: '图片(英文逗号,隔开)',
                                        value: '',
                                        multiline: true,
                                        minWidth: 300,
                                        minHeight: 300
                                   },
                                   {
                                        type   : 'listbox',
                                        name   : 'vip',
                                        label  : 'VIP查看全部',
                                        values : [
                                             { text: '不启用', value: '0' },
                                             { text: '启用', value: '1' }
                                        ],
                                        minWidth: 350
                                   },
                                   {
                                        type   : 'listbox',
                                        name   : 'hide',
                                        label  : '隐藏模式',
                                        values : [
                                             { text: '毛玻璃', value: '0' },
                                             { text: '完全隐藏', value: '1' }
                                        ],
                                        minWidth: 350
                                   },
                                   {
                                        type: 'textbox',
                                        name: 'preview',
                                        label: '预览数(留空则免费)',
                                        minWidth: 350
                                   },
                                   {
                                        type   : 'listbox',
                                        name   : 'columns',
                                        label  : '栏目列数',
                                        values : [
                                             { text: '4列', value: '4' },
                                             { text: '1列', value: '1' },
                                             { text: '2列', value: '2' },
                                             { text: '3列', value: '3' },
                                             { text: '5列', value: '5' },
                                             { text: '6列', value: '6' },
                                             { text: '7列', value: '7' },
                                             { text: '8列', value: '8' },
                                             { text: '9列', value: '9' }
                                        ],
                                        minWidth: 350
                                   },
                                   {
                                        type   : 'listbox',
                                        name   : 'crop',
                                        label  : '自动剪切',
                                        values : [
                                             { text: '启用', value: '1' },
                                             { text: '不启用', value: '0' }
                                        ],
                                        minWidth: 350
                                   },
                              ],
                              onsubmit: function( e ) {
                                   ed.selection.setContent('[gallery_modown'+(e.data.urls?' urls="'+e.data.urls+'"':'')+(e.data.vip?' vip="'+e.data.vip+'"':'')+(e.data.hide?' hide="'+e.data.hide+'"':'')+(e.data.preview?' preview="'+e.data.preview+'"':' preview=""')+(e.data.columns?' columns="'+e.data.columns+'"':'')+(e.data.crop?' crop="'+e.data.crop+'"':'')+']');
                              }
                         });
                    }
               });

               ed.addButton( 'button_erphpdown', {
                    text : '',
                    icon: 'wp-media-lock dashicons-before dashicons-admin-network modown-editor-icon',
                    title : '付费可见',
                    onclick : function() {
                         ed.windowManager.open( {
                              title: '收费查看隐藏内容',
                              body: [{
                                   type: 'textbox',
                                   name: 'erphpdownCon',
                                   label: false,
                                   value: '',
                                   multiline: true,
                                   minWidth: 300,
                                   minHeight: 100
                              }],
                              onsubmit: function( e ) {
                                   ed.selection.setContent('[erphpdown]'+e.data.erphpdownCon+'[/erphpdown]');
                              }
                         });
                    }
               });

               ed.addButton( 'button_vip', {
                    text : '',
                    icon: 'wp-media-lock dashicons-before dashicons-shield modown-editor-icon',
                    title : 'VIP可见',
                    onclick : function() {
                         ed.windowManager.open( {
                              title: '隐藏VIP内容',
                              body: [
                              {
                                   type   : 'listbox',
                                   name   : 'vipRole',
                                   label  : 'VIP权限',
                                   values : [
                                        { text: '所有VIP', value: '' },
                                        { text: '包月VIP', value: '7' },
                                        { text: '包季VIP', value: '8' },
                                        { text: '包年VIP', value: '9' },
                                        { text: '终身VIP', value: '10' }
                                   ],
                                   minWidth: 350
                              },{
                                   type: 'textbox',
                                   name: 'vipCon',
                                   label: false,
                                   value: '',
                                   multiline: true,
                                   minWidth: 300,
                                   minHeight: 100
                              }],
                              onsubmit: function( e ) {
                                   ed.selection.setContent('[vip'+(e.data.vipRole?' type="'+e.data.vipRole+'"':'')+']'+e.data.vipCon+'[/vip]');
                              }
                         });
                    }
               });

               ed.addButton( 'button_reply', {
                    text : '',
                    icon: 'wp-media-comment dashicons-before dashicons-admin-comments modown-editor-icon',
                    title : '回复可见',
                    onclick : function() {
                         ed.windowManager.open( {
                              title: '回复查看隐藏内容',
                              body: [{
                                   type: 'textbox',
                                   name: 'replyCon',
                                   label: false,
                                   value: '',
                                   multiline: true,
                                   minWidth: 300,
                                   minHeight: 100
                              }],
                              onsubmit: function( e ) {
                                   ed.selection.setContent('[reply]'+e.data.replyCon+'[/reply]');
                              }
                         });
                    }
               });

               ed.addButton( 'button_login', {
                    text : '',
                    icon: 'wp-media-preview dashicons-before dashicons-admin-users modown-editor-icon',
                    title : '登录可见',
                    onclick : function() {
                         ed.windowManager.open( {
                              title: '登录查看隐藏内容',
                              body: [{
                                   type: 'textbox',
                                   name: 'loginCon',
                                   label: false,
                                   value: '',
                                   multiline: true,
                                   minWidth: 300,
                                   minHeight: 100
                              }],
                              onsubmit: function( e ) {
                                   ed.selection.setContent('[login]'+e.data.loginCon+'[/login]');
                              }
                         });
                    }
               });

               ed.addButton( 'button_catag', {
                    text : '',
                    icon: 'wp-media-preview dashicons-before dashicons-admin-post modown-editor-icon',
                    title : '分类/标签模块 (用于首页模板)',
                    onclick : function() {
                         ed.windowManager.open( {
                              title: '插入分类/标签文章模块',
                              body: [
                                   {
                                        type   : 'listbox',
                                        name   : 'type',
                                        label  : '类型',
                                        values : [
                                             { text: '分类', value: 'mocat' },
                                             { text: '标签', value: 'motag' },
                                             { text: '专题', value: 'motopic' }
                                        ],
                                        minWidth: 350
                                   },
                                   {
                                        type   : 'checkbox',
                                        name   : 'new',
                                        label  : '最新（不填ID）',
                                        value  : '1',
                                        minWidth: 350
                                   },
                                   {
                                        type: 'textbox',
                                        name: 'id',
                                        label: '分类/标签ID',
                                        minWidth: 350
                                   },
                                   {
                                        type   : 'listbox',
                                        name   : 'child',
                                        label  : '子分类',
                                        values : [
                                             { text: '不显示', value: '' },
                                             { text: '显示（只显示有文章的子分类）', value: '1' },
                                        ],
                                        minWidth: 350
                                   },
                                   {
                                        type: 'textbox',
                                        name: 'num',
                                        label: '文章数',
                                        value: '8',
                                        minWidth: 350
                                   },
                                   {
                                        type: 'textbox',
                                        name: 'title',
                                        label: '标题（选填）',
                                        minWidth: 350
                                   },
                                   {
                                        type: 'textbox',
                                        name: 'link',
                                        label: '链接（选填）',
                                        minWidth: 350
                                   },
                                   {
                                        type   : 'listbox',
                                        name   : 'orderby',
                                        label  : '排序',
                                        values : [
                                             { text: '默认', value: '' },
                                             { text: '时间', value: 'date' },
                                             { text: '评论', value: 'comment' },
                                             { text: '浏览', value: 'views' },
                                             { text: '下载', value: 'downs' },
                                             { text: '随机', value: 'rand' }
                                        ],
                                        minWidth: 350
                                   },
                                   {
                                        type   : 'listbox',
                                        name   : 'style',
                                        label  : '显示样式',
                                        values : [
                                        	 { text: '默认（基于主题设置或分类设置）', value: '' },
                                             { text: 'Grid', value: 'grid' },
                                             { text: 'List', value: 'list' }
                                        ],
                                        minWidth: 350
                                   },
                                   {
                                        type   : 'listbox',
                                        name   : 'cols',
                                        label  : 'List列数',
                                        values : [
                                        	 { text: '默认（不是List列表样式不用选）', value: '' },
                                             { text: '2列', value: '2' },
                                             { text: '3列', value: '3' }
                                        ],
                                        minWidth: 350
                                   },
                              ],
                              onsubmit: function( e ) {
                                   ed.selection.setContent('['+e.data.type+(e.data.new?' new="'+e.data.new+'"':'')+(e.data.id?' id="'+e.data.id+'"':'')+(e.data.child?' child="'+e.data.child+'"':'')+(e.data.num?' num="'+e.data.num+'"':'')+(e.data.title?' title="'+e.data.title+'"':'')+(e.data.link?' link="'+e.data.link+'"':'')+(e.data.orderby?' orderby="'+e.data.orderby+'"':'')+(e.data.style?' style="'+e.data.style+'"':'')+(e.data.cols?' cols="'+e.data.cols+'"':'')+']');
                              }
                         });
                    }
               });
               ed.addButton( 'button_post', {
                    text : '',
                    icon: 'wp-media-preview dashicons-before dashicons-embed-post modown-editor-icon',
                    title : '文章卡片',
                    onclick : function() {
                         ed.windowManager.open( {
                              title: '文章卡片',
                              body: [
                                   {
                                        type: 'textbox',
                                        name: 'id',
                                        label: '文章ID',
                                        minWidth: 350
                                   },
                                   {
                                        type: 'textbox',
                                        name: 'title',
                                        label: '标题（选填）',
                                        value: '',
                                        multiline: true,
                                        minWidth: 300,
                                        minHeight: 100
                                   }
                              ],
                              onsubmit: function( e ) {
                                   ed.selection.setContent('[post id="'+e.data.id+'"]');
                              }
                         });
                    }
               });
          },
          createControl : function(n, cm) {
               return null;
          },
     });
     tinymce.PluginManager.add( 'mobantu_button_script', tinymce.plugins.MyButtons );
})();