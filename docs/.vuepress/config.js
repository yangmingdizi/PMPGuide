module.exports = {

 //站点基本信息
 title: 'Pmp basic knowledge.',
 description: '<PMPBOK> 6.0 basic knowledge.',
 head: [
    ['link',{rel:'icon',href: '/img/icon.png'}],
 ],
 host: '0.0.0.0',
 port: '8888',
 dest: '.vuepress/dist',
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
            ]
        }
     ],
     //侧边栏
     sidebar:'auto',
     //搜索框
     search:true,
     searchMaxSuggestions: 10,
     //最后更新时间
     lastUpdated:'Last Updated'
 }
}
