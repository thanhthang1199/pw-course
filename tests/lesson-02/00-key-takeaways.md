# Key Takeaways - Lesson 02: Git & Javascript

## Version control system
- Hệ thống quản lý phiên bản
    + Xem lịch sử thay đổi (thời gian, thay đổi).
    + Quay về bản trước đó
- Local: lưu máy cá nhân
- Centralize: lưu ở 1 máy tập trung
- Distributed: lưu ở nhiều máy khác nhau => Phổ biến nhất

## 3 vùng trong Git

1. **Working Directory** - Nơi bạn làm việc trực tiếp với các file. Mọi thay đổi trên file đều xảy ra ở đây trước.
2. **Staging Area (Index)** - Vùng trung gian, chứa các file đã được "đánh dấu" để chuẩn bị commit bằng lệnh `git add`.
3. **Repository (.git)** - Nơi lưu trữ lịch sử commit. Sau khi `git commit`, snapshot được lưu vào đây.

## Quy ước về "vùng local"

- **Local** = thư mục chưa được khởi tạo git (chưa chạy `git init`)
- Sau `git init`, file chuyển từ local → working directory

## Cấu hình Git (chạy 1 lần khi cài Git lần đầu)

```bash
git config --global user.name 'thanhthang'
git config --global user.email 'nguyenthanh.thang1199@gmail.com'
```

- `--global`: áp dụng cho tất cả repo trên máy
- Mỗi commit sẽ được gắn tên và email này vào lịch sử

## Các lệnh Git cơ bản

| Lệnh | Chức năng |
|------|-----------|
| `git init` | Khởi tạo git repository trong thư mục hiện tại |
| `git add <file_name>` | Thêm một file cụ thể vào staging area |
| `git add .` | Thêm tất cả file thay đổi vào staging area |
| `git commit -m "message"` | Lưu snapshot từ staging area vào repository |
| `git status` | Xem trạng thái các file ở từng vùng |
| `gt log` | Kiểm tra danh sách commit


## Commit Convention

Convention = quy tắc đặt tên commit message để code gọn gàng, sạch sẽ, chuyên nghiệp.

**Cú pháp:**
```
<type>: <short_description>
```

| Type | Ý nghĩa |
|------|---------|
| `chore` | Sửa nhỏ lẻ, chính tả, xóa file không dùng |
| `feat` | Thêm tính năng mới, testcase mới |
| `fix` | Sửa lỗi 1 test/tính năng trước đó |

**Ví dụ:**
```
feat: add login test
fix: correct selector for submit button
chore: remove unused variable
```

## Git - Simple Workflow

**Không dùng global config** (máy chưa cấu hình lần nào):
```
init → config → add → commit → push
```

**Dùng global config** (máy đã cấu hình sẵn):
```
init → add → commit → push
```
