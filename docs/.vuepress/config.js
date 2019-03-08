module.exports = {
 base:'/PMPGuide/',
 //站点基本信息
 title: 'Pmp basic knowledge.',
 description: '<PMPBOK> 6.0 basic knowledge.',
 head: [
    ['link',{rel:'icon',href: '/img/icon.png'}],
    //引入fancybox
+    ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min.js' }],
+    ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.js' }],
+    ['link', { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.css' }]
 ],
 host: '0.0.0.0',
 port: '8888',
 ga: undefined,
 locales:undefined,
 
 //默认主题配置
 themeConfig:{
     //导航栏
     navbar:true,//禁用导航栏
     nav: [
         { text:'主页',link:'/'},
         { text:'目录',
            items:[
                { text:'引论' , link:'/ch1-引论.md'},
                { text:'项目运行环境' , link:'/ch2-项目运行环境.md'},
                { text:'项目经理的角色' , link:'/ch3-项目经理的角色.md'},
                { text:'项目整合管理' , link:'/ch4-项目整合管理.md'},
                { text:'项目范围管理' , link:'/ch5-项目范围管理.md'},
            ]
        }
     ],
     //侧边栏
     sidebar:'auto',
     //搜索框
     search:true,
     searchMaxSuggestions: 10,
     //最后更新时间
     lastUpdated:'Last Updated',
     serviceWorker: {
        updatePopup: true // Boolean | Object, 默认值是 undefined.
        // 如果设置为 true, 默认的文本配置将是: 
        // updatePopup: { 
        //    message: "New content is available.", 
        //    buttonText: "Refresh" 
        // }
      },
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'YXGuang/PMPGuide',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: '查看源码',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
 },

 //markdown 配置
 markdown:{
     lineNumbers: true
 }
}
