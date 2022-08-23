module.exports = {
    base:'/vuepress_test/',
    title: 'Hello VuePress',
    description: 'Just playing around',
    theme: 'reco',
    themeConfig: {
        /* vuepress默认主题配置 */
        logo: '/logo.png',
        lastUpdated: '最后更新时间',
        smoothScroll: true,
        nav: [
            {text: '指南', link:  '/pages/guide/'},
            {text: 'foo', link: '/pages/foo/'},
            {text: 'bar', link: '/pages/bar/'},
            {
                text: '组1',
                ariaLabel: 'Language Menu',
                items: [
                    {text: 'Chinese', link: '/language/chinese/'},
                    {text: 'Japanese', link: '/language/japanese/'}
                ]
            },
            {
                text: '组2',
                items: [
                    {
                        text: 'Group1', items: [
                            {text: 'Chinese', link: '/language/chinese/'},
                            {text: 'Japanese', link: '/language/japanese/'}
                        ]
                    },
                    {
                        text: 'Group2', items: [
                            {text: 'Chinese', link: '/language/chinese/'},
                            {text: 'Japanese', link: '/language/japanese/'}
                        ]
                    }
                ]
            }
        ],
        sidebar: {
            '/pages/guide/': [
                '',
                'one',
                'two'
            ],

            '/pages/foo/': [
                '',
                'one',
                'two'
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
            '/pages/guide/one':true,
        }
    }
}
