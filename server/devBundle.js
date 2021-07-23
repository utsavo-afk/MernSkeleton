import webpack from "webpack";
import WebpackDevMiddleware from "webpack-dev-middleware";
import WebpackHotMiddleware from "webpack-hot-middleware";
import webpackConfig from "./../webpack.config.client";

const compile = (app) => {
  if (process.env.NODE_ENV === "development") {
    const compiler = webpack(webpackConfig);
    const middleware = WebpackDevMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
    });
    app.use(middleware);
    app.use(WebpackHotMiddleware(compiler));
  }
};

export default {
  compile,
};
