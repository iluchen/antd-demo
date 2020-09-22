const CracoLessPlugin = require('craco-less')

module.exports = {
    plugins:[{
        plugin: CracoLessPlugin,
        options: {
            lessLoaderOptions:{
                lessOptions: {
                    modifyVars: {
                        // '@primary-color': '#1DA57A'
                    }, // 这里就写要修改的主题变量
                    javascriptEnabled: true
                }
            }
        }
    }]
}