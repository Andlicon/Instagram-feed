function updateImageDisplay() {
    //Eliminar el contenido de preview
    let preview = document.querySelector('#preview');
    while (preview.firstChild) {
        preview.removeChild(preview.firstChild);
    }

    let input = document.querySelector('#pictureInput');
    const curFiles = input.files;
    if (curFiles.length == 0) {
        const contenido = document.createElement('p');
        contenido.textContent = 'Ninguna imagen ha sido seleccionada';
        preview.appendChild(contenido);
    }
    else {
        const list = document.createElement('ul');
        preview.appendChild(list);

        for (const file of curFiles) {
            const listItem = document.createElement('li');
            const image = document.createElement('img');
            image.src = URL.createObjectURL(file);

            listItem.appendChild(image);

            list.appendChild(listItem);
        }
    }
}

let input = document.querySelector('#pictureInput');
input.addEventListener('change', updateImageDisplay);