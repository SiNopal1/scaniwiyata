function displayTanaman(filteredTanaman) {
  mainTaman.innerHTML = ''; // Clear previous results

  filteredTanaman.forEach(tanaman => {
    // Create the necessary elements
    const tamanDiv = document.createElement('div');
    tamanDiv.classList.add('taman');

    const img = document.createElement('img');
    img.src = tanaman.nama_gambar;
    img.alt = tanaman.nama_umum;
    img.width = 252;
    img.height = 142;
    img.classList.add('cover');

    // Add the loading="lazy" attribute
    img.loading = 'lazy'; 

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('medium', 'poppins-medium');

    const namaUmum = document.createElement('span');
    namaUmum.textContent = tanaman.nama_umum;
    const namaLatin = document.createElement('i');
    namaLatin.classList.add('small');
    namaLatin.textContent = tanaman.nama_latin;

    const smallDivider = document.createElement('div');
    smallDivider.classList.add('small-divider');

    const link = document.createElement('a');
    link.href = tanaman.eksplorasi;

    const button = document.createElement('div');
    button.classList.add('button-rounded', 'button-columns');
    button.textContent = 'Spesies  ';

    // Add SVG icon to the button (you can replace this with your actual icon)
    const svgIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgIcon.setAttribute('width', '24px');
    svgIcon.setAttribute('height', '24px');
    svgIcon.setAttribute('viewBox', '0 0 48 48');

    const g1 = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g1.setAttribute('id', 'Layer_2');
    g1.setAttribute('data-name', 'Layer 2');

    const g2 = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g2.setAttribute('id', 'invisible_box');
    g2.setAttribute('data-name', 'invisible box');

    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('width', '48');
    rect.setAttribute('height', '48');
    rect.setAttribute('fill', 'none');
    g2.appendChild(rect);

    const g3 = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g3.setAttribute('id', 'icons_Q2');
    g3.setAttribute('data-name', 'icons Q2');

    const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path1.setAttribute('d', 'M24,6A18,18,0,1,1,6,24,18.1,18.1,0,0,1,24,6m0-4A22,22,0,1,0,46,24,21.9,21.9,0,0,0,24,2Z');
    path1.setAttribute('fill', 'white');

    const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path2.setAttribute('d', 'M33.3,13.3,20,20,13.3,33.3a1.1,1.1,0,0,0,1.4,1.4L28,28l6.7-13.3A1.1,1.1,0,0,0,33.3,13.3ZM24,26a2,2,0,1,1,2-2A2,2,0,0,1,24,26Z');
    path2.setAttribute('fill', 'white');

    g3.appendChild(path1);
    g3.appendChild(path2);

    g1.appendChild(g2);
    g1.appendChild(g3);

    svgIcon.appendChild(g1);

    button.appendChild(svgIcon);

    // Assemble the structure
    contentDiv.appendChild(namaUmum);
    contentDiv.appendChild(document.createElement('br'));
    contentDiv.appendChild(namaLatin);
    contentDiv.appendChild(smallDivider);
    link.appendChild(button);
    contentDiv.appendChild(link);

    tamanDiv.appendChild(img);
    tamanDiv.appendChild(contentDiv);

    // Append the new plant div to the main container
    mainTaman.appendChild(tamanDiv);
    mainTaman.appendChild(smallDivider.cloneNode()); // Add small divider after each plant
  });
}
