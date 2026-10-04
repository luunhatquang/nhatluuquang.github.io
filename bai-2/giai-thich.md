# Bài 2 — Tìm và sửa lỗi CSS

Mở `trang.html` để xem bài đã sửa. Trang sử dụng `style.css`; `style-loi.css` là bản gốc để đối chiếu.

## Ba lỗi thật

1. **Menu không dính khi cuộn:** `.page { overflow-x: hidden; }` khiến `overflow-y: visible` được tính thành `auto`, tạo tổ tiên có cơ chế cuộn. Header sticky bị ràng buộc vào tổ tiên này trong khi người dùng cuộn trang. Đổi thành `overflow-x: clip` để cắt phần tràn ngang mà không tạo scroll container (trên trình duyệt hiện đại).
2. **Thẻ bị rớt hàng:** `.card` ghi đè reset bằng `box-sizing: content-box`. Công thức flex-basis đã chia đủ chiều rộng cho ba thẻ và hai gap, nhưng padding 32px và border 2px của mỗi thẻ vẫn cộng thêm. Đổi về `border-box` để padding và border nằm trong chiều rộng đã tính.
3. **Ảnh che nhãn -20%:** ảnh có `position: relative; z-index: 2` trong khi badge không có z-index. Thêm `z-index: 3` cho `.badge` để nhãn nằm trên ảnh.

## Các đoạn đúng được giữ

- `transform: scale(1.08)` trên ảnh hero: hiệu ứng phóng ảnh có chủ ý.
- `overflow: hidden` trên `.hero`: cắt phần ảnh phóng vượt khung; không phải tổ tiên của header sticky.
- `position: relative` trên `.hero` và `.card`: tạo khung định vị cho chữ và nhãn absolute.
- `top: 50%; left: 50%; transform: translate(-50%, -50%)`: căn giữa chữ theo cả kích thước khung và chính khối chữ.
- `margin: -48px auto 48px`, `position: relative; z-index: 1` trên `.products`: tạo phần sản phẩm chồng lên đáy hero.
- `position: relative; z-index: 2` trên ảnh thẻ: giữ nguyên, sửa thứ tự lớp của badge.
- `min-height: 320px`: cho thẻ cao tối thiểu nhưng vẫn tăng chiều cao khi nội dung dài.
- Header sticky `top: 0; z-index: 100` và nút fixed `bottom: 24px; right: 24px; z-index: 200`: vốn đã đúng.

Bổ sung cho màn hình nhỏ: ≤640px dùng một cột, menu được xuống dòng và giảm cỡ tiêu đề hero; thêm `min-width: 0` cho thẻ flex. Đây là phần hỗ trợ màn hình nhỏ, tách biệt với ba lỗi chính.

Đã kiểm tra bằng Chromium ở 1280, 768 và 375px: không tràn ngang, ảnh tải đủ, chữ hero căn giữa, nội dung nằm trong thẻ, menu dính khi cuộn và nút ↑ đúng vị trí. Trên 640px, ba thẻ cùng một hàng. Ảnh chụp kiểm tra kèm theo cho thấy đủ ba nhãn giảm giá.

Lưu ý: CSS gốc nhắc `de-bai.md`, nhưng ZIP không chứa file này. Bài làm dựa trên HTML, CSS và mô tả có sẵn; không giả định yêu cầu trong file còn thiếu.
