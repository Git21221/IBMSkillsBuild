const galleryData = [
  {
    title: "Black Hole",
    imageSrc:
      "https://media.istockphoto.com/id/1088863384/photo/abstract-space-wallpaper-black-hole-with-nebula-over-colorful-stars-and-cloud-fields-in-outer.jpg?s=612x612&w=0&k=20&c=XmFijIN5I6magyYQ5-CV1xfWhPMs0EyuJnVCLE8n1O8=",
    description:
      "Inescapable, dense celestial object with intense gravitational pull.",
    fileType: "JPG",
    status: "New",
  },
  {
    title: "Astroid belt",
    imageSrc:
      "https://media.istockphoto.com/id/182090715/photo/kuiper-belt.jpg?s=612x612&w=0&k=20&c=dr6Ds-sB0Ib6dUZXPvc_6Geui1cAoiYD8gdt1GEk71A=",
    description: "Astroid belt: Debris-filled region between Mars and Jupiter.",
    fileType: "PNG",
    status: "Trend",
  },
  {
    title: "Black Galaxy",
    imageSrc:
      "https://media.istockphoto.com/id/1088863384/photo/abstract-space-wallpaper-black-hole-with-nebula-over-colorful-stars-and-cloud-fields-in-outer.jpg?s=612x612&w=0&k=20&c=XmFijIN5I6magyYQ5-CV1xfWhPMs0EyuJnVCLE8n1O8=",
    description:
      "Inescapable, dense celestial object with intense gravitational pull.",
    fileType: "JPG",
    status: "New",
  },
  // Add more objects for other gallery items
];

const galleryContainer = document.querySelector(".row");

galleryData.forEach((item) => {
  const cardDiv = document.createElement("div");
  cardDiv.className = "col-xl-3 col-lg-4 col-md-6 mb-4";
  cardDiv.innerHTML = `
        <div class="bg-black rounded shadow-sm">
            <img src="${item.imageSrc}" alt="" class="img-fluid card-img-top">
            <div class="p-4 content">
                <div>
                    <h5> <a href="#" class="text-white">${item.title}</a></h5>
                    <p class="small text-muted mb-0">${'Read more'}</p>
                </div>
                <div class="d-flex align-items-center justify-content-start rounded-pill  py-2 mt-4">
                    <div class="badge badge-pill badge-dark ">
                        <p class="medium mb-0"><i class="fa fa-picture-o mr-2"></i>
                            <span class="font-weight-bold">${
                              item.fileType
                            }</span>
                        </p>
                    </div>
                    <div class="badge badge-${
                      item.status === "New" ? "danger" : "primary"
                    } px-3 badge-pill font-weight-normal ml-3 ">${
    item.status
  }</div>
                </div>
            </div>
        </div>
    `;

  // Add a click event listener to each card
  cardDiv.addEventListener("click", () => {
    openModal(
      item.title,
      item.imageSrc,
      item.description,
      item.fileType,
      item.status
    );
  });

  galleryContainer.appendChild(cardDiv);
});

function openModal(title, imageSrc, description, fileType, status) {
  const modalTitle = document.getElementById("modalTitle");
  const modalImage = document.getElementById("modalImage");
  const modalDescription = document.getElementById("modalDescription");
  const modalFileType = document.getElementById("modalFileType");
  const modalStatus = document.getElementById("modalStatus");

  modalTitle.textContent = title;
  modalImage.src = imageSrc;
  modalDescription.textContent = description;
  modalFileType.textContent = fileType;
  modalStatus.textContent = status;

  const modal = document.getElementById("myModal");
  modal.style.display = "block";
}

const closeModalButton = document.getElementById("closeModal");
const modal = document.getElementById("myModal");

closeModalButton.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
