const imagesGallery = document.querySelectorAll(".gallery");
if (imagesGallery.length > 0) {
	console.log(imagesGallery)
	imagesGallery.forEach((el) => {
		lightGallery(el, {
               licenseKey: "7EC452A9-0CFD441C-BD984C7C-17C8456E",
               speed: 500,
          });
     });
}
     