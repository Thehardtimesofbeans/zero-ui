const sidebar = {
    '/': [
        { text: '快速开始', link: '/' },
        {
            text: '通用',
            children: [
                { text: 'Button 按钮', link: '/components/button/' },
            ]
        },
        { text: '导航' },
        { text: '反馈' },
        { text: '数据录入' },
        { text: '数据展示' },
        { text: '布局' },
    ]
}
const config = {
    title: "🔨 zero101-ui",
    description: "测试vue的组件库",
    themeConfig: {
        sidebar,
    },
    markdown: {
        config: (md) => {
            // 这里可以使用 markdown-it 插件，vitepress-theme-demoblock就是基于此开发的
            const { demoBlockPlugin } = require("vitepress-theme-demoblock");
            md.use(demoBlockPlugin);
        }
    }
}
export default config