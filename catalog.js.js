fetch('data.json')
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById('productList');
    const search = document.getElementById('search');
    const sizeFilter = document.getElementById('sizeFilter');

    function renderItems(items) {
      list.innerHTML = '';
      items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <img src="${item.image}" alt="${item.name}" />
          <h3>${item.name}</h3>
          <p>${item.price} ₸</p>
        `;
        list.appendChild(card);
      });
    }

    function filterItems() {
      const searchText = search.value.toLowerCase();
      const size = sizeFilter.value;

      const filtered = data.filter(item => {
        return (
          item.name.toLowerCase().includes(searchText) &&
          (size === '' || item.size === size)
        );
      });

      renderItems(filtered);
    }

    search.addEventListener('input', filterItems);
    sizeFilter.addEventListener('change', filterItems);

    renderItems(data);
  });
