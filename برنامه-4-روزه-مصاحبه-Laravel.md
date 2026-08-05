# برنامه ۴ روزه آمادگی مصاحبه Laravel Backend
**مجید کمالی**

> این نسخه، برنامه اولیه را با موارد تکمیلی (امنیت، Auth/Authorization، API Design، جزئیات Queue، Migration/Seeder) ادغام کرده و یک **سیستم ارزیابی روزانه** به انتهای هر روز اضافه شده تا مشخص شود چقدر یادگیری اتفاق افتاده و چه چیزی باید مرور شود.

---

## نحوه استفاده از سیستم ارزیابی

در پایان هر روز، جدول «خودارزیابی» را کامل کن:
- به هر مبحث از **۱ تا ۵** امتیاز بده (۱ = هیچ‌چیز یادم نیست، ۵ = می‌توانم بدون فکر توضیح دهم و کد بزنم)
- هر چیزی که امتیاز **۳ یا کمتر** گرفت، خودکار وارد لیست «موارد نیازمند مرور» در انتهای برنامه می‌شود
- در پایان روز چهارم، یک **جمع‌بندی نهایی** بساز از تمام موارد ضعیف چهار روز

---

## روز اول: PHP، OOP، Laravel Internals، امنیت پایه

### PHP
- OOP / Interface / Abstract Class / Trait / Namespace
- Composer Autoload
- Exceptions / Type Hinting / Union Types / Enums / Closures

### SOLID
- SRP, OCP, LSP, ISP, DIP

### Laravel Internals
- Service Container / Dependency Injection / Service Providers / Facades
- Request Lifecycle / Middleware / Validation / Form Request
- Config / Environment

### 🔒 امنیت پایه (اضافه‌شده)
- SQL Injection و نقش Eloquent/Query Builder در پیشگیری
- Mass Assignment — `$fillable` / `$guarded`
- CSRF / XSS / CORS
- Password Hashing (bcrypt / argon2)
- Rate Limiting (`throttle` middleware)

### 🔑 Authentication & Authorization (اضافه‌شده)
- Sanctum vs Passport vs JWT
- Gates & Policies (با جزئیات، نه فقط اسم)
- API Token-based vs Session-based auth

### Design Patterns (بخش اول)
- Dependency Injection / Repository / Service Layer / Factory

> توجه: Singleton را به روز سوم منتقل کردیم تا با بخش دوم Design Patterns تکراری نباشد.

### تمرین عملی روز اول
طراحی Payment Module با Interface + Service Container + یک Policy برای کنترل دسترسی به پرداخت.

### 📋 خودارزیابی روز اول

| مبحث | امتیاز (۱-۵) | نکته برای مرور |
|---|---|---|
| OOP و مفاهیم پایه PHP | | |
| SOLID | | |
| Service Container / DI | | |
| Service Providers / Facades | | |
| Request Lifecycle / Middleware | | |
| Validation / Form Request | | |
| امنیت (SQLi, Mass Assignment, CSRF/XSS) | | |
| Auth (Sanctum/Passport/JWT) | | |
| Gates & Policies | | |
| Design Patterns (DI, Repository, Service, Factory) | | |
| تمرین Payment Module | | |

---

## روز دوم: Eloquent Relations + MySQL + Migration/Seeder

### Laravel Relations
- hasOne / hasMany / belongsTo / belongsToMany / hasManyThrough
- morphOne / morphMany / morphTo / morphToMany

### Pivot
- attach / detach / sync / syncWithoutDetaching / withPivot / pivot attributes

### Query Relationships
- whereHas / withWhereHas / withCount / withSum
- load / loadMissing / nested eager loading

### N+1
- تشخیص / رفع / Debugbar / eager loading

### 🗂 Migration & Seeder (اضافه‌شده)
- ساختار Migration، `up()` / `down()`
- انواع column type و modifier ها
- Seeder + Factory (پیوند با DatabaseTesting روز سوم)
- Rollback strategy در پروژه واقعی

### MySQL (عمیق)
**DDL** — CREATE/ALTER/DROP/TRUNCATE/RENAME (مرور سریع، تمرکز کم)

**DML** — INSERT/UPDATE/DELETE/SELECT/REPLACE/`ON DUPLICATE KEY UPDATE`

**Joins** — INNER / LEFT / RIGHT / SELF JOIN

**Grouping** — GROUP BY / HAVING / Aggregate Functions

**Subquery** — IN / EXISTS / correlated subquery

**Indexes (بسیار مهم — تمرکز اصلی روز)**
- PRIMARY / UNIQUE / INDEX / COMPOSITE INDEX / FOREIGN KEY INDEX / COVERING INDEX
- دستورات: CREATE INDEX / DROP INDEX / SHOW INDEX
- **EXPLAIN / EXPLAIN ANALYZE / ANALYZE TABLE** ← اینجا زمان بیشتری بگذار

**Query Optimization**
- WHERE / ORDER BY / LIMIT / OFFSET
- JOIN optimization / composite index order / cardinality

**Transactions**
- BEGIN / COMMIT / ROLLBACK / SAVEPOINT

**Locks** (مرور سطحی کافی است مگر پوزیشن سینیور باشد)
- row lock / table lock / deadlock

### 📋 خودارزیابی روز دوم

| مبحث | امتیاز (۱-۵) | نکته برای مرور |
|---|---|---|
| Relations (hasOne...morphToMany) | | |
| Pivot (attach/sync/...) | | |
| whereHas / withCount / eager loading | | |
| تشخیص و رفع N+1 | | |
| Migration / Seeder / Factory | | |
| DDL/DML پایه | | |
| Joins | | |
| GROUP BY / HAVING / Subquery | | |
| Index انواع | | |
| EXPLAIN / EXPLAIN ANALYZE | | |
| Query Optimization | | |
| Transactions | | |
| Locks / Deadlock | | |

---

## روز سوم: Testing + Architecture + Design Patterns + API + Performance

### Laravel Testing
**Unit Test** — PHPUnit / Pest / Assertions / Mock / Stub

**Feature Test** — HTTP Tests / JSON Tests / Authentication / Authorization / Validation / Database Assertions

**Database Testing** — RefreshDatabase / DatabaseTransactions / Factories / Seeders

**Mocking** — Mockery / partial mock / facade fake

**Laravel Fakes** — Mail::fake / Queue::fake / Event::fake / Notification::fake / Storage::fake

### Design Patterns (بخش دوم)
**Creational** — Singleton (منتقل‌شده از روز اول)

**Structural** — Adapter / Decorator / Facade

**Behavioral** — Strategy / Observer / Command
> Template Method حذف شد (کاربرد کم در پروژه‌های عملی Laravel)؛ در صورت تمایل فقط تعریف یک‌خطی را بلد باش.

**Laravel Examples** — Observer / Events / Jobs / Notifications / Policies

### Architecture
- Repository Pattern / Service Pattern / DTO / Action Classes / Domain Services / Dependency Inversion

### 🌐 API Design (اضافه‌شده)
- RESTful conventions، Resource Controllers
- API Resources (`JsonResource` / `ResourceCollection`)
- Versioning (v1, v2, ...)
- Pagination (`paginate`, `cursorPaginate`)
- استاندارد Error Handling (Exception Handler، Custom Exceptions، فرمت پاسخ خطا)

### Performance
- Cache / Redis / Chunk / Cursor / Lazy Collections

### ⚙️ Queue جزئیات عملیاتی (اضافه‌شده)
- Job retry / `failed()` / backoff strategy
- Queue drivers: Redis, database, SQS
- Horizon (آشنایی سطحی حداقل)

### 📋 خودارزیابی روز سوم

| مبحث | امتیاز (۱-۵) | نکته برای مرور |
|---|---|---|
| Unit Test (PHPUnit/Pest) | | |
| Feature Test | | |
| Database Testing (RefreshDatabase...) | | |
| Mocking (Mockery) | | |
| Laravel Fakes | | |
| Singleton / Adapter / Decorator / Facade | | |
| Strategy / Observer / Command | | |
| Laravel Examples (Observer/Events/Jobs) | | |
| Repository / Service / DTO / Action Classes | | |
| API Resources / Versioning / Pagination | | |
| Error Handling استاندارد | | |
| Cache / Redis / Chunk / Cursor | | |
| Queue (retry, failed, drivers, Horizon) | | |

---

## روز چهارم: Mock Interview (۹۰ دقیقه) + جمع‌بندی نهایی

### ساختار مصاحبه شبیه‌سازی‌شده
۱. معرفی
۲. Laravel Internals
۳. Relations
۴. MySQL + EXPLAIN
۵. Design Patterns
۶. Testing
۷. Coding:
   - طراحی یک API کامل (Resource Controller + API Resource)
   - یک Relation واقعی با eager loading درست
   - یک Query که نیاز به Optimization دارد (تشخیص و اصلاح با Index/EXPLAIN)
   - Refactoring یک کلاس شکسته به Repository/Service Pattern

### 📋 خودارزیابی روز چهارم (Mock Interview)

| بخش مصاحبه | امتیاز (۱-۵) | نکته برای مرور |
|---|---|---|
| معرفی و ارتباط کلامی | | |
| پاسخ به سوالات Laravel Internals | | |
| پاسخ به سوالات Relations | | |
| پاسخ به سوالات MySQL/EXPLAIN | | |
| پاسخ به سوالات Design Patterns | | |
| پاسخ به سوالات Testing | | |
| کدنویسی زنده (API) | | |
| کدنویسی زنده (Optimization/Refactor) | | |

---

## 📊 جمع‌بندی نهایی چهار روز

بعد از تکمیل جدول‌های بالا، این بخش را پر کن:

### موارد نیازمند مرور (امتیاز ≤ ۳)
از هر روز، مبحث‌هایی که امتیاز ۳ یا کمتر گرفتند را اینجا کپی کن:

| روز | مبحث | امتیاز | اولویت مرور |
|---|---|---|---|
| | | | بالا / متوسط / پایین |

### آمار کلی یادگیری
- تعداد کل مباحث ارزیابی‌شده: ____
- تعداد مباحث با امتیاز ۴-۵ (مسلط): ____
- تعداد مباحث با امتیاز ۳ یا کمتر (نیاز به مرور): ____
- درصد آمادگی کلی: ____٪

### برنامه مرور پیشنهادی (قبل از مصاحبه واقعی)
بر اساس لیست بالا، یک یا دو روز قبل از مصاحبه، فقط روی موارد اولویت «بالا» تمرکز کن — نه کل برنامه را دوباره مرور کن.
