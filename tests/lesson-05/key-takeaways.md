# Lesson 05 — DOM Terminology & Playwright Basics

---

## 1. Advanced Functions

JavaScript có 3 cách định nghĩa function chính:

### 1.1 Function Declaration

```js
function add(a, b) {
    return a + b;
}
```

### 1.2 Function Expression

```js
const add = function(a, b) {
    return a + b;
};
```

> **Lưu ý:** Cả hai cách trên đều được gọi giống nhau:
> ```js
> console.log(add(2, 3)); // 5
> ```

### 1.3 Arrow Function (Lambda)

Cú pháp ngắn hơn, sử dụng `=>`.

| Trường hợp | Cú pháp |
|---|---|
| Đầy đủ | `const add = (a, b) => { return a + b; };` |
| Implicit return | `const add = (a, b) => a + b;` |
| Không có tham số | `const greet = () => console.log("Hello!");` |
| Một tham số | `const double = x => x * 2;` |

```js
// Implicit return (ngắn gọn nhất)
const add = (a, b) => a + b;

// Không tham số — bắt buộc có ()
const getRandom = () => Math.random();

// Một tham số — có thể bỏ ()
const double = x => x * 2;
```

### 1.4 Anonymous Function

Function **không có tên**, thường dùng làm callback hoặc dùng một lần.

```js
setTimeout(function() {
    console.log("I'm anonymous!");
}, 1000);

// Dạng arrow
setTimeout(() => console.log("Also anonymous!"), 1000);
```

---

## 2. DOM (Document Object Model)
**DOM (Document Object Model)** là cấu trúc dạng cây đại diện cho tất cả các phần tử HTML trên trang web.
### DOM là gì?

Khi trình duyệt tải một trang HTML, nó **parse HTML thành một cây các node (nút)** — đây gọi là **DOM**.

> Xem DOM: `F12` → tab **Elements**

```
html
├── head
│   └── title
└── body
    ├── div#app
    │   ├── h1  "Hello"
    │   └── button  "Click me"
    └── footer
```

> Mỗi thẻ HTML = 1 node trong cây DOM.

### Các thẻ tiêu chuẩn thường gặp

**Thẻ cấu trúc cơ bản**
```
- <html> thẻ gốc của trang
- <head> Chứa metadata: tiêu đề website, hiển thị google
- <body> Nội dung của website hiển thị
- <div> khối/container chung
- <span> Inline container
- <header>, <footer>, <nav>, <section> Thẻ ngữ nghĩa
```
**Demo tất tần tật các thẻ: https://material.playwrightvn.com/035-DOM-elements.html**
### Tương tác với DOM trong Playwright

**Tìm phần tử:**

```js
page.locator('button')        // theo tag
page.locator('#submit')       // theo ID
page.locator('.btn-primary')  // theo class
page.getByText('Click me')    // theo text
page.getByRole('button')      // theo ARIA role
```

**Thao tác với phần tử:**

```js
await page.locator('button').click()
await page.locator('input').fill('hello')
await page.locator('h1').textContent()
await page.locator('div').isVisible()
```

**Truy cập DOM trực tiếp qua JavaScript:**

```js
const text = await page.evaluate(() => {
    return document.querySelector('h1').textContent;
});
```
## 3. Selector
**Automation = tương tác** với các phần tử trên trang web
- Input
- Fill
- Click
Để tương tác được, ta cần **tìm** được phần tử này
Selector là công cụ giúp ta **tìm**

**Có 3 loại selector thường dùng**
- XPath
    - Dùng được trong hầu hết các trường hợp (99.99%)
    - Đa dạng, có khả năng tìm các phần tử khó
    - Hơi dài
    - VD: //button[normalize-space() = 'Add to cart']
- CSS selector
    - Ngắn gọn, performance cao
    - Dugnf cho các trường hợp dễ tìm
    - Không linh hoạt bằng XPath
    - VD: **.add-to-cart**
- Playwright selector
    - Chỉ dùng riêng cho Playwright
    - Cú pháp ngắn gọn, không phụ thuộc vào DOM
    - Hướng tới "giống người dùng đang nhìn thấy gì"
    - VD: page.getByText("Add to cart");

**XPath selector**
- XPath = XML Path
- Có 2 loại:
    - **Tuyệt đối:** đi dọc theo cây DOM
        - bắt đầu bởi 1 /
    - **Tương đối:** tìm dựa vào đặc tính
        - bắt đầu bởi 2 //
        - //tenthe[@thuoctinh="giatri"] -> //form[@id = 'registrationForm']
- Nên dùng XPath tương đối

## 4. Playwright basic syntax
**test**: Đơn vị cơ bản để khai báo một test
**step**: Đơn vị nhỏ hơn test, để khai báo từng step của testcase
    - **Lưu ý**: Step nên được map 1-1 với testcase manual để dễ dàng maintain
**Navigate**: VD: await page.goto("gotit.vn");
**Locate**: Sử dụng page.locator("<selector>") để chọn phần tử trên trang
    - **VD**: page.locator("//input[@id='email']")
**Click**:
    - **Single click**
        await page.locator("//button").click();
    - **Double click**
        await page.locator("//button").dblclick();
    - **Click chuột phải**
        page.locator ("//button").click({
            button: 'right'
        })
    - **Click chuột kèm bấm phím khác**
        page.locator("").click({
            modifiers: ['Shift'],
        })
**Input**:
    - **Fill**
    - Giống việc bạn paste content vào một ô input
    page.locator("//input").fill('Playwright Viet Nam');
    - **pressSequentially**
    - Giống việc bạn gõ từng chữ cái vào ô input
    page.locator("//input").pressSequentially('Playwright Viet Nam',
    {
        delay: 100,
    });
**Radio/checkbox**
    - **Lấy giá trị hiện tại đang là check hay không**
    const isChecked =
    page.locator("//input").isChecked();
    - **Check/ uncheck**
    page.locator("//input").check();
    page.locator("//input").setChecked(false);
**Select**
    - await page.locator('//select[@id="country"]')
        .selectOption({ label: 'USA' })
**Upload file**
    - await page.locator("//input[@id='profile']")
        .setInputFiles("<file-path>");    
```js
import { test } form '@playwright/test';

test ('Basic actions', async ({ page }) => {
    await test.step ('Step 1', async () => {
       await page.goto("gotit.vn");
    });
    await test.step ('Step 2', async () => {
       page.locator("//a[text() = 'Bài học 1']");
    });
    await test.step ('Step 3', async () => {
       // Code test
    });
});
```

## 5. Handle confirmation dialog
```js
page.on('dialog', async dialog => dialog.accept())
```
