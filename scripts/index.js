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
