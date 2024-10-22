## 構成
```
public
├── assets
src
├── components
│   ├── Footer.astro
│   └── Header.astro
├── env.d.ts
├── layouts
│   └── Layout.astro
├── lib
│   └── microcms.ts
├── pages
│   └── index.astro
├── scss
│   ├── _variables.scss
│   └── styles.scs
astro.config.mjs
│
package.json
│
package-lock.json
│
tailwind.config.mjs
│
tsconfig.json
```
ディレクトリ構成は以上のようになっています。``/src/pages/index.astro``がサイトのTOPページに相当します。
フレームワークはAstro.js、CSSフレームワークはTailwind CSSを使用しています。TypeScriptを使用できるようにしています。CMSにはmicroCMSを使う想定です。<br />

### コーディングの仕方
#### 1. セットアップ
VSCodeでフォルダを開きターミナルで、``npm install``を実行し、node_modulesをインストールする。このコマンドを実行することで、package.jsonの記述をもとに必要なnode_modulesがインストールされ、AstroやTailwindが利用可能になる。package.jsonファイルにこのプロジェクトで使うパッケージが記述されているので、見てみると良い。
#### 2. 開発を始める
Astroで開発する際はローカルサーバーを立ち上げて実行画面を見ながら作業する。
VSCodeでフォルダを開きターミナルで、``npm run dev``を実行し、ブラウザのURLバーでlocalhost:4321にアクセスすると実行画面が開ける。まだ何も書かれていないので、最初は空白のはずである。
#### 3. TOPページのコーディングをする
``/src/pages/index.astro``がTOPページに相当するファイルです。
#### 4. 下層ページを作る
下層ページを作るときは``/src/pages/``配下に新しいディレクトリを作り、その中にindex.astroファイルを作って書くようにしてください。以下の例はaboutページを作る際の例です。
```
├── pages
│   └── index.astro
│   └── about
│       └── index.astro
``` 
#### 5. cssの書き方
SASSを使えるようにしています。``/src/scss/styles.scss``に基本的に書くようにしてください。SASSはCSSのように書くことができますが、SASSの記法を覚えるとより効率的に書けるので、使ったことがない人も[このドキュメント](https://zenn.dev/hinoshin/articles/b13c8181df9a93)を見て、活用してみてください。

## その他
* コーディングの際は、[Webチームのコーディングルール](https://quartz-broker-36d.notion.site/Web-HTML-CSS-4cbfbb521256476b80e6aea309cb4920?pvs=4)に従うようにしてください。PMはコーダーにルールを遵守させることを徹底してください。コーディングルールを守ることでソースコードの品質を保つことができます。
* Astroの記法については[公式ドキュメント](https://docs.astro.build/ja/getting-started/)を参照してください。Astroの公式ドキュメントは非常にわかりやすいです。
