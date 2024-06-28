const selectImage = document.querySelector('.select-image');
const inputFile = document.querySelector('#imgSrc');
const imgArea = document.querySelector('.img-area');
const prodForm = document.querySelector('#product-post');
const sendDataButton = document.querySelector('.send-data-button');
const uploadImgContainer = document.querySelector('.upload-img-container');
const dataInput = document.querySelector('.data-input');

selectImage.addEventListener('click', function () {
	inputFile.click();
})

inputFile.addEventListener('change', function () {
	const image = this.files[0]
	if (image.size < 2000000) {
		const reader = new FileReader();
		reader.onload = () => {
			const allImg = imgArea.querySelectorAll('img');
			allImg.forEach(item => item.remove());
			const imgUrl = reader.result;
			const img = document.createElement('img');
			img.src = imgUrl;
			imgArea.innerHTML = '';
			imgArea.appendChild(img);
			imgArea.classList.add('active');
			imgArea.dataset.img = image.name;
		}
		reader.readAsDataURL(image);
	} else {
		alert("Dimensione immagine maggiore di 2MB");
	}
})

prodForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const formData = new FormData(e.target);
	const data = Object.fromEntries(formData.entries());

	fetch('./api/products/newProduct', {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			//"Access-Control-Allow-Origin": "https://comprafresco.onrender.com/newProduct.html"
		},
		body: JSON.stringify(data)
	})
		.then(response => {
			if (response.status === 200) {
				alert('Prodotto inserito con successo')
				window.location.href = "./index.html"
			}
			else console.log('errore');
		})

	if (response.ok) {

		window.location.href = "./index.html";

	}
})
