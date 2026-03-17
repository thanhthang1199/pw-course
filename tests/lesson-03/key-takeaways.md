# Key Takeaways - Lesson 03

## I. Git

### 1. Git: Un-commit
- Commit đầu tiên không thể reset
- Nếu muốn reset -> xóa thư mục `.git` đi rồi init lại

### 2. Git: Pull code
- Lấy code từ server về: `git pull origin main`
- Luôn pull code về trước khi tạo nhánh mới

### 3. Git: Branching
- Sử dụng nhánh (branch) để tạo ra các "version" riêng của code, tránh ảnh hưởng bản gốc
- Xem danh sách nhánh: `git branch`
- Tạo nhánh mới: `git branch <tên_branch>`
- Chuyển sang nhánh mới: `git checkout <tên_branch>`
- Vừa tạo, vừa chuyển sang nhánh mới: `git checkout -b <tên>`
- Xóa branch: `git branch -D <tên_nhánh>`

### 4. Git: Ignore file
- File `.gitignore` là 1 file cấu hình quan trọng trong Git
- Dùng để bỏ qua các file/folder không muốn commit lên repository

---

## II. Javascript Convention

- Convention giúp: Code theo format chung dễ nhìn, team dễ đọc
- Có nhiều loại convention: đặt tên file, đặt tên biến, đặt tên commit...

### Một số convention phổ biến:
| Convention | Mô tả | Ví dụ |
|------------|-------|-------|
| `snake_case` | Tất cả chữ thường, cách nhau dấu gạch dưới | `my_variable` |
| `kebab-case` | Tất cả chữ thường, cách nhau dấu gạch ngang | `my-variable` |
| `camelCase` | Chữ đầu thường, các chữ sau viết hoa chữ cái đầu | `myVariable` |
| `PascalCase` | Tất cả chữ cái đầu viết hoa | `MyVariable` |

### Sử dụng convention trong lớp học:
- `kebab-case`: đặt tên file và folder
- `camelCase`: đặt tên biến, hàm
- `PascalCase`: đặt tên class

---

## III. Console.log nâng cao
- Dùng để debug và theo dõi code
- Có thể in nhiều giá trị, object, hoặc dùng template string

---

## IV. Object
- Là 1 trong những kiểu dữ liệu quan trọng trong JS, dùng để lưu trữ key-value
- Syntax:
```js
const obj = {
  key: value,
};
```
- `<key>`: giống quy tắc đặt biến
- `<value>`: có kiểu giống biến hoặc 1 object khác
