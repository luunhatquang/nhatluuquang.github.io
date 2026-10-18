/* BÀI B — VIẾT CODE: Lọc tin và đăng tin nhanh (news.html)
   Viết code theo đặc tả.
   Không sửa news.html, không sửa css; chỉ viết JavaScript trong file này. */

// ---------- ĐÃ CHO SẴN (không sửa) ----------
// Chặn việc gửi form tìm kiếm khi nhấn Enter, để trang không bị tải lại.
document.querySelector("#searchbar form").addEventListener("submit", (e) => e.preventDefault());

// ---------- PHẦN BẠN VIẾT ----------

// F1. Bộ đếm "Đang hiển thị x/y tin" trong #bo-dem.

// F2 + F3. Lọc tin khi gõ vào #o-tim-kiem (sự kiện keyup) và thông báo #khong-thay.

// F4. Nút "Read more >>" / "Thu gọn <<" — MỘT trình lắng nghe đặt trên #list.

// F5. Nút #nut-dang: kiểm tra dữ liệu, tạo <li> mới, chèn vào đầu #list.

const dsTin = document.getElementById("list");
const oTim = document.getElementById("o-tim-kiem");
const boDem = document.getElementById("bo-dem");
const khongThay = document.getElementById("khong-thay");

// F1 + F2 + F3: áp dụng bộ lọc hiện tại cho mọi tin rồi cập nhật bộ đếm và thông báo.
function capNhat() {
	const tuKhoa = oTim.value;
	const khoaThuong = tuKhoa.toLowerCase();
	const dsMuc = dsTin.querySelectorAll(":scope > li");
	let dangHien = 0;
	for (const muc of dsMuc) {
		const tieuDe = muc.querySelector("h3").textContent.toLowerCase();
		const noiDung = muc.querySelector("p").textContent.toLowerCase();
		const khop = tieuDe.includes(khoaThuong) || noiDung.includes(khoaThuong);
		muc.classList.toggle("an", !khop);
		if (khop) {
			dangHien++;
		}
	}
	boDem.textContent = `Đang hiển thị ${dangHien}/${dsMuc.length} tin`;
	if (dangHien === 0) {
		khongThay.textContent = `Không tìm thấy tin nào cho "${tuKhoa}"`;
		khongThay.classList.remove("an");
	} else {
		khongThay.classList.add("an");
	}
}
oTim.addEventListener("keyup", capNhat);
capNhat();

// F4: một trình lắng nghe duy nhất trên #list (uỷ quyền sự kiện).
dsTin.addEventListener("click", (e) => {
	if (!e.target.classList.contains("more")) {
		return;
	}
	const doan = e.target.parentNode.querySelector("p");
	const moRong = doan.classList.toggle("day-du");
	e.target.textContent = moRong ? "Thu gọn <<" : "Read more >>";
});

// F5: đăng tin nhanh.
document.getElementById("nut-dang").addEventListener("click", () => {
	const oTieuDe = document.getElementById("tin-tieu-de");
	const oNoiDung = document.getElementById("tin-noi-dung");
	const baoLoi = document.getElementById("bao-loi");
	if (oTieuDe.value === "" || oNoiDung.value === "") {
		baoLoi.textContent = "Vui lòng nhập đủ tiêu đề và nội dung.";
		return;
	}
	const muc = document.createElement("li");
	const ngay = document.createElement("span");
	const tieuDe = document.createElement("h3");
	const noiDung = document.createElement("p");
	const nut = document.createElement("button");
	ngay.className = "time";
	ngay.textContent = homNay();
	tieuDe.textContent = oTieuDe.value;
	noiDung.textContent = oNoiDung.value;
	nut.type = "button";
	nut.className = "more";
	nut.textContent = "Read more >>";
	muc.append(ngay, tieuDe, noiDung, nut);
	dsTin.prepend(muc);
	oTieuDe.value = "";
	oNoiDung.value = "";
	baoLoi.textContent = "";
	capNhat();
});
