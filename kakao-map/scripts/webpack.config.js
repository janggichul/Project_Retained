const path = require('path');
// Webpack으로 빌드 된 결과물을 html 파일에 script 부분에 삽입하도록 도와줌
const HtmlWebpackPlugin = require('html-webpack-plugin');
// CSS 파일을 별도 파일로 추출(extract)
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const dotenv = require('dotenv')
const webpack = require('webpack')

dotenv.config()

// process.env.KAKAO_MAP_KEY

const isProd = process.env.NODE_ENV === 'production';

console.log(isProd, process.env.NODE_ENV)

module.exports = {
  entry: './src/index.tsx', // 프로젝트 시작 포인트
  resolve: { // 모듈을 해석하는 방식을 변경
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'static/js/[name].[contenthash:8].js', // entry의 명칭을 따라가는데, 기본적 값은 main
    // chunkFilename: 'static/js/[name].[contenthash:8].chunk.js',
    // assetModuleFilename: 'static/media/[name].[hash:8].[ext]',
    clean: true, // 내보내기 전에 output 디렉터리를 정리합니다.
  },
  devtool: isProd ?  false : 'eval-source-map', // 고품질 소스맵을 포함한 개발 빌드를 위해 추천하는 옵션입니다.
  devServer: {
    port: 3000,
    hot: true,
    open: true,
    client: {
      overlay: true, // 파일러 오류 또는 경고가 있는 경우 브라우저에 전체 화면 오버레이를 표시합니다.
      progress: true, // 브라우저에서 컴파일 진행률을 백분율로 출력합니다.
    },
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
            },
          },
          {
            test: /\.css$/i,
            exclude: /node_modules/,
            use: [
              isProd ? MiniCssExtractPlugin.loader: 'style-loader', // css-loader를 이용해 웹팩 의존성 트리에 추가된 string 값들을 돔에 <style></style> 로 넣어준다
              'css-loader', // css 파일을 모듈(프로그래밍적으로) 읽어들이기 위해
            ],
          },
          // {
          //   test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
          //   type: 'asset',
          //   parser: {
          //     dataUrlCondition: {
          //       maxSize: 10000,
          //     },
          //   },
          // },
          // {
          //   type: 'asset/resource',
          //   exclude: [/\.(js|jsx)$/, /\.html$/, /\.json$/, /^$/],
          // },
        ],
      },
    ],
  },
  plugins: [isProd ? new HtmlWebpackPlugin({
      template: 'public/index.html',
      minify: true
    }) :
    new HtmlWebpackPlugin({ template: 'public/index.html' } ),
    isProd ? new MiniCssExtractPlugin({
      linkType: false,
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }) : undefined,
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env)
    })
  ].filter(Boolean)
};

