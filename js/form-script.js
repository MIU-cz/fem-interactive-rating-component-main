const rateForm = document.forms.rateForm;
const rateInputs = rateForm.rateGroup;
const rateLabels = document.querySelectorAll("[name=rateLabel]");
// console.log(rateInputs);
// console.log(rateInputs.attributes);

// ### change label styles when checked
rateLabels.forEach(function (item) {
	item.addEventListener('click', function (event) {
		// event.preventDefault();
		rateLabels.forEach(function (item) {
			item.classList.remove('rate-active');
		});
		this.classList.add('rate-active');

		// console.log(rateInputs.checked.id + " " + rateInputs.checked.id);
		// console.log(rateForm.querySelector("[name=rateGroup]:checked").id);
	});
});

// ### Thank you state start
const modal = document.querySelector(".conteiner__modal");
let error = document.querySelector(".errors");

rateForm.addEventListener('submit', function (event) {
	event.preventDefault();
	let checkedInput = rateForm.querySelector("[name=rateGroup]:checked");
	// console.log(checkedInput.value);

	if (checkedInput) {
		modal.classList.remove("hidden");
		document.querySelector("#modal-result").innerHTML = `You selected ${checkedInput.value} out of 5`;
	}
	else {
		error.classList.remove("hidden");
		error.innerHTML = "error -> no inputs !!!";
	}
});

// ### reset form
document.addEventListener('click', function (event) {
	if (event.target === modal) {
		modal.classList.add("hidden");
		rateForm.reset();
		error.classList.add("hidden");
		rateLabels.forEach(function (item) {
			item.classList.remove('rate-active');
		});
	}
})







