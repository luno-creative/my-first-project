// =========================================================
// ポートフォリオサイト JavaScript
// ---------------------------------------------------------
// 1. スマホ用メニューの開閉
// 2. スクロールでヘッダーに背景を付ける
// 3. スクロールで要素をふわっと表示
// 4. お問い合わせフォームの入力チェック
// 5. フッターの年号を自動表示
// =========================================================

// ---------- 1. スマホ用メニューの開閉 ----------
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

function setMenu(open) {
  menuBtn.classList.toggle("is-open", open);
  nav.classList.toggle("is-open", open);
  menuBtn.setAttribute("aria-expanded", String(open));
  menuBtn.setAttribute("aria-label", open ? "メニューを閉じる" : "メニューを開く");
  document.body.style.overflow = open ? "hidden" : ""; // 開いている間は背景をスクロールさせない
}

menuBtn.addEventListener("click", () => {
  setMenu(!nav.classList.contains("is-open"));
});

// メニュー内のリンクを押したら閉じる
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

// ---------- 2. スクロールでヘッダーに背景を付ける ----------
const header = document.getElementById("header");

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 20);
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

// ---------- 3. スクロールで要素をふわっと表示 ----------
const fadeItems = document.querySelectorAll(".fade-in");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target); // 一度表示したら監視をやめる
        }
      });
    },
    { threshold: 0.15 }
  );
  fadeItems.forEach((item) => observer.observe(item));
} else {
  // 古いブラウザではすぐに表示
  fadeItems.forEach((item) => item.classList.add("is-visible"));
}

// ---------- 4. お問い合わせフォームの入力チェック ----------
const form = document.getElementById("contactForm");
const successMsg = document.getElementById("formSuccess");

// エラーメッセージ（文言はここで変更できます）
const messages = {
  name: "お名前を入力してください。",
  email: "メールアドレスを入力してください。",
  emailInvalid: "メールアドレスの形式が正しくありません。",
  message: "お問い合わせ内容を入力してください。",
};

function showError(input, text) {
  const group = input.closest(".form-group");
  group.classList.toggle("has-error", Boolean(text));
  group.querySelector(".error-msg").textContent = text;
}

function validate(input) {
  const value = input.value.trim();

  if (value === "") {
    showError(input, messages[input.name]);
    return false;
  }
  if (input.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    showError(input, messages.emailInvalid);
    return false;
  }
  showError(input, "");
  return true;
}

const fields = form.querySelectorAll("input, textarea");

// 入力中にエラーを消す
fields.forEach((field) => {
  field.addEventListener("input", () => {
    if (field.closest(".form-group").classList.contains("has-error")) {
      validate(field);
    }
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault(); // ページの再読み込みを止める

  let isValid = true;
  fields.forEach((field) => {
    if (!validate(field)) isValid = false;
  });
  if (!isValid) return;

  // ▼ 実際に送信する場合は、ここで Formspree などに送信処理を書きます
  successMsg.hidden = false;
  form.reset();
});

// ---------- 5. フッターの年号を自動表示 ----------
document.getElementById("year").textContent = new Date().getFullYear();
