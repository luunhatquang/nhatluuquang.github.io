# Bài 1 — Tìm và sửa lỗi CSS

Mở `trang.html` để xem bài đã sửa. Trang sử dụng `style.css`; `style-loi.css` là bản gốc để đối chiếu.

| Vị trí | Lỗi và nguyên nhân | Cách sửa |
|---|---|---|
| `*` | Mặc định `content-box` khiến padding và border cộng thêm vào chiều rộng thẻ, làm tổng ba thẻ vượt hàng. | Thêm `box-sizing: border-box`. |
| `.site-header` | Sticky thiếu mốc `top`; header có thể bị lớp hero che. | Thêm `top: 0` và `z-index: 100`. |
| `.hero` | Chữ absolute không có khung hero làm containing block, nên được căn theo tổ tiên khác. | Thêm `position: relative`. |
| `.hero-bg` | Ép cả chiều rộng và chiều cao làm ảnh méo. | Thêm `object-fit: cover` và `display: block`. |
| `.card` | Nhãn absolute chưa được định vị theo từng thẻ; chiều cao cố định 300px không đủ chứa ảnh và nội dung. | Thêm `position: relative`; đổi thành `min-height: 300px`, để chiều cao tự tăng. |
| `.card img` | Ảnh không được giới hạn trong phần nội dung thẻ. | Đặt `width: 100%`, `height: 180px`, `object-fit: cover`; bo góc 4px. |
| `.back-to-top` | `top: 24px` đặt nút ở góc trên. | Đổi thành `bottom: 24px`; giữ `right: 24px`, thêm `z-index: 200`. |

Bổ sung cho màn hình nhỏ: ở độ rộng ≤640px, thẻ chuyển sang một cột, menu được xuống dòng và tiêu đề hero giảm cỡ chữ. `min-width: 0` cho phép thẻ flex thu hẹp theo khung.

Đã kiểm tra bằng Chromium ở 1280, 768 và 375px: ảnh tải đủ, không tràn ngang, chữ hero căn giữa, thẻ chứa đủ nội dung, menu sticky khi cuộn và nút ↑ cách đáy 24px. Trên 640px, ba thẻ cùng một hàng.
