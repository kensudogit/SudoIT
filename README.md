# 須藤技術士事務所 ポートフォリオサイト

Next.js + TypeScript + React で構築された現代的で魅力的なポートフォリオサイトです。

## 技術スタック

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Deployment**: Vercel推奨

## セットアップ

### 必要な環境

- Node.js 18以上
- npm または yarn

### インストール

```bash
npm install
```

### 開発サーバー起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

### ビルド

```bash
npm run build
```

### 本番環境での起動

```bash
npm start
```

## プロジェクト構造

```
SudoIT/
├── app/
│   ├── layout.tsx      # ルートレイアウト
│   ├── page.tsx         # メインページ
│   └── globals.css      # グローバルスタイル
├── components/
│   ├── Header.tsx       # ヘッダーコンポーネント
│   ├── Hero.tsx         # ヒーローセクション
│   ├── Services.tsx     # サービスセクション
│   ├── Works.tsx        # 実績セクション
│   ├── Profile.tsx      # プロフィールセクション
│   ├── Contact.tsx      # お問い合わせセクション
│   └── Footer.tsx       # フッターコンポーネント
├── package.json
├── tsconfig.json
└── next.config.js
```

## 特徴

- 🎨 モダンなデザイン（グラデーション、アニメーション、グラスモーフィズム）
- 📱 完全レスポンシブデザイン
- ⚡ 高速なパフォーマンス（Next.js App Router）
- 🎯 TypeScriptによる型安全性
- 🎭 スムーズなアニメーション効果

## カスタマイズ

各コンポーネントのスタイルは対応する `.module.css` ファイルで管理されています。
コンテンツの変更は各コンポーネントファイルを編集してください。

## ライセンス

個人事業主ポートフォリオサイト
