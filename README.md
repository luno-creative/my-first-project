# my-first-project
AI development project

HTML / CSS / JavaScript で作ったシンプルなポートフォリオサイトです。

## ファイル構成

```
my-first-project/
├── index.html     … ページの内容（文章・実績・フォーム）
├── css/style.css  … デザイン（色・余白・スマホ対応）
└── js/main.js     … 動き（メニュー開閉・アニメーション・フォームチェック）
```

## サイトの見方

- **いちばん簡単な方法**：`index.html` をダブルクリックしてブラウザで開きます。
- **VS Code の場合**：拡張機能「Live Server」を入れ、`index.html` を右クリックして「Open with Live Server」を選びます。保存すると画面が自動で更新されます。
- **Python がある場合**：このフォルダで `python -m http.server 8000` を実行し、ブラウザで http://localhost:8000 を開きます。

## 編集のしかた

| 変えたいもの | 編集する場所 |
|---|---|
| 名前・自己紹介文 | `index.html` の「自己紹介」部分 |
| 実績の追加 | `index.html` の `<article class="work-card">` を1つコピーして貼り付けます |
| サイトの色 | `css/style.css` の先頭にある `:root` の `--color-main` |
| プロフィール写真 | `images/` フォルダを作って写真を入れ、`index.html` のコメントのとおりに置き換えます |

## お問い合わせフォームについて

今のフォームでできるのは入力チェックと完了メッセージの表示だけで、メールは届きません。
実際に受け取りたい場合は [Formspree](https://formspree.io) などのサービスに登録し、
`<form>` タグに `action="https://formspree.io/f/あなたのID" method="POST"` を追加してください（`js/main.js` の送信処理も合わせて変更します）。
