module.exports = {
    base:'/vuepress_h5simulator_reco_template/',
    title: 'Hello VuePress',
    description: 'Just playing around',
    theme: 'reco',
    themeConfig: {
        /* vuepress默认主题配置 */
        logo: '/logo.png',
        lastUpdated: '最后更新时间',
        smoothScroll: true,
        nav: [
            {text: '指南', link:  '/pages/guide/start'},
            {text: 'components', link: '/pages/components/button'},
            {text: 'bar', link: '/pages/bar/'},
            {
                text: '相关链接',
                items: [
                    {text: 'uview组件库', link: 'https://www.uviewui.com/'},
                    {text: 'vuepress主题reco', link: 'https://vuepress-theme-reco.recoluan.com/'},
                    {text: 'vuepress官方文档', link: 'https://v1.vuepress.vuejs.org/zh/'}
                ]
            },
            { text: 'github', link: 'https://github.com/leonProj/vuepress_h5simulator_reco_template', icon: 'reco-github' },
            { text: 'gitee', link: 'https://gitee.com/tttleon/vuepress_h5simulator_reco_template', icon: 'reco-mayun' }

        ],
        sidebar: {
            '/pages/guide/': [
                'start',
                'simulator'
            ],

            '/pages/components/': [
                'button'
            ],

            '/pages/bar/': [
                '',
                'one',
                'two'
            ]
        },
        /* reco配置  */
        modePicker: true,
        noFoundPageByTencent: false,
        author: 'tttleon',
        startYear: '2022',
        subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
        /*自定义的配置*/
        simulatorUrl: {
            '/pages/components/button':true,
        }
    }
}
