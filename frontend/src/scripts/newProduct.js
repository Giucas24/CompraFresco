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
	if(image.size < 2000000) {
		const reader = new FileReader();
		reader.onload = ()=> {
			const allImg = imgArea.querySelectorAll('img');
			allImg.forEach(item=> item.remove());
			const imgUrl = reader.result;
			const img = document.createElement('img');
			img.src = imgUrl;
			imgArea.innerHTML = '';
			imgArea.appendChild(img);
			/* uploadImgContainer.style.width= '282.79px';
			uploadImgContainer.style.height= '325px';
			dataInput.style.width= '359px';
			//dataInput.style.height= '';
			imgArea.style.width = '282.79px';
			imgArea.style.height = '240px'; */
			imgArea.classList.add('active');
			imgArea.dataset.img = image.name;
			

		}
		reader.readAsDataURL(image);
	} else {
		alert("Image size more than 2MB");
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
			"Access-Control-Allow-Origin": "https://comprafresco.onrender.com/newProduct.html"
		},
		body: JSON.stringify(data)
	})
	.then(response => {
		if (response.status === 200) { window.location.href = "./index.html" }
		else console.log('errore');
	})

	if (response.ok) {
		window.location.href = "./index.html";
	}
})






/* document.getElementById("product-post").addEventListener("submit", async function(event) {
	event.preventDefault();

	// Raccogli i dati dal form
	const formData = new FormData(event.target);
	const data = Object.fromEntries(formData.entries());

	try {
		// URL dell'endpoint a cui inviare la richiesta
		const url = "https://comprafresco.onrender.com/newProduct";

		// Invia la richiesta POST
    	const response = await fetch(url, {
     	 method: "POST",
     	 headers: {
        	"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "https://comprafresco.onrender.com/newProduct.html"
      	},
      	body: JSON.stringify(data)
    });

		// Log dettagliato della risposta
		console.log('Response status:', response.status);
		console.log('Response status text:', response.statusText);
		const responseText = await response.text();
		console.log('Response body:', responseText);
	
		if (!response.ok) {
		  throw new Error(`Network response was not ok: ${response.statusText}`);
		}
	
		const responseData = await response.json();
		console.log("Success:", responseData); // Gestisce la risposta di successo
	  } catch (error) {
		console.error("There was a problem with the fetch operation:", error); // Gestisce eventuali errori
	  }
	});
*/