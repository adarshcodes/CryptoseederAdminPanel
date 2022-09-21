const kycBtn = document.querySelectorAll(".kyc-view-btn");

kycBtn.forEach(function (btn) {
	btn.addEventListener("click", function (e) {
		const kycRow =
			e.currentTarget.parentElement.parentElement.parentElement.querySelectorAll(
				".row-content"
			);

		console.log(kycRow);

		kycRow.forEach(function (br) {
			br.classList.toggle("row-activate");
			br.lastElementChild.lastElementChild.classList.toggle("kyc-activate");
		});
	});
});

// Sidebar toggle

const ham = document.querySelector(".ham-menu");
const sidebar = document.querySelector(".sidebar");

ham.addEventListener("click", function () {
	sidebar.classList.toggle("sidebar-slide");
});
