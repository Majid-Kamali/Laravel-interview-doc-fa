// ============================================================
// داده‌های کارت‌ها (لیست مستندات)
// ============================================================
const cards = [
  {
    href: "php-oop-solid-guide-p1.html",
    title: "📘 راهنمای PHP OOP و SOLID",
    description:
      "مفاهیم پایهٔ شی‌گرایی، اینترفیس، ترایت، namespace، exception، اصول SOLID با مثال‌های عملی و پاسخ‌های مصاحبه‌ای.",
    badge: "PHP · OOP · SOLID",
  },
  {
    href: "Laravel_Internals- p2.html",
    title: "⚙️ مستندات داخلی لاراول",
    description:
      "چرخهٔ حیات درخواست، Service Container، Dependency Injection، Service Providers، Facades، Middleware، Validation، امنیت، Policies و الگوهای Repository/Service.",
    badge: "Laravel · Container · Patterns",
  },
  {
    href: "laravel-relations-guide-p3.html",
    title: "🔗 راهنمای جامع روابط لاراول",
    description:
      "انواع روابط Eloquent شامل hasOne، hasMany، belongsToMany، hasManyThrough و Polymorphic Relations به همراه مثال‌های عملی و سؤالات مصاحبه.",
    badge: "Relations · Eloquent · Polymorphic",
  },
  // کارت‌های جدید را اینجا اضافه کنید
];

// ============================================================
// تابع تولید کارت‌ها و افزودن به DOM
// ============================================================
function renderCards() {
  const grid = document.getElementById("cardGrid");
  if (!grid) return;

  grid.innerHTML = "";

  cards.forEach((card) => {
    const link = document.createElement("a");
    link.href = card.href;
    link.className = "card";

    const title = document.createElement("h2");
    title.textContent = card.title;

    const desc = document.createElement("p");
    desc.textContent = card.description;

    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = card.badge;

    link.appendChild(title);
    link.appendChild(desc);
    link.appendChild(badge);

    grid.appendChild(link);
  });
}

// ============================================================
// اجرا بعد از بارگذاری کامل DOM
// ============================================================
document.addEventListener("DOMContentLoaded", renderCards);
