// 使用异步函数也是可以的
export default ({
    Vue, // VuePress 正在使用的 Vue 构造函数
    router
}) => {
    Vue.mixin({
        mounted() {
            // 判断某一个页面是否需要添加右边预览的右内边距，通过一个类名实现，
            // 此for-simulator-padding类名定义于/docs/.vuepress/styles/index.styl
            if (this.$page && this.$page.path) {
                let pageRoot = this.$page.path.split(".")[0];
                if (this.$themeConfig.simulatorUrl[pageRoot]) {
                    try {
                        document.getElementById('app').classList.add("for-simulator-padding");
                    } catch (e) {
                        //TODO handle the exception
                    }
                } else {
                    try {
                        document.getElementById('app').classList.remove("for-simulator-padding");
                    } catch (e) {
                        //TODO handle the exception
                    }
                }
            }
            // 锚点跳转
            router.onReady(() => {
                const { hash } = document.location;
                setTimeout(() => {
                    if (hash.length > 1) {
                        const id = decodeURIComponent(hash);
                        const el = document.querySelector(`.reco-side-${decodeURIComponent(id).substring(1)}`);
                        el.click();
                    }
                }, 500);
            });
        }
    })
}
