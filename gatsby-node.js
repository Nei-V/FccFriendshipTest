/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it


const webpack = require('webpack');

exports.onCreateWebpackConfig = ({ actions, plugins }) => {
    actions.setWebpackConfig({

        plugins: [
            new webpack.DefinePlugin({ "global.GENTLY": false })
        ],

    })
}