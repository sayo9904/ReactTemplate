## 開発の始め方

### 前提

- VSCode（Remote - Containers / DevContainers 機能）が利用できること

### 初回設定

1. リポジトリをクローン

```bash
git clone https://github.com/sayo9904/ReactTemplate.git
cd ReactTemplate
git init
```

2. VSCode でフォルダを開き、コマンドパレットから「DevContainers: Reopen in Container」を実行

   > [!Note]
   > コンテナ起動時に `yarn install` が自動実行され、依存関係がインストールされます。  
   > これは `.devcontainer/devcontainer.json` の `postStartCommand` に設定されています。

3. コンテナ内のターミナルで開発サーバを起動

```bash
yarn dev      # または: npm run dev
```

4. viteの実行中に `o : Enter` を押下、またはブラウザで http://localhost:4173 を開いてアプリを確認

### コンテナ内での他の操作

ビルド / プレビュー / Lint / Format はコンテナ内で次のように実行します。

```bash
yarn build     # 本番用ビルド
yarn preview   # ビルド成果物のローカルプレビュー
yarn lint      # ESLint を実行
yarn lint:fix  # 自動修正
yarn format    # Prettier で整形
```
