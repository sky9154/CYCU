fetch('assets/data/drinks.json')
  .then((response) => response.json())
  .then((data) => {
    const container = document.querySelector('.container');
    const drinks = data.drinks;

    const drinksHTML = drinks
      .slice(0, 3)
      .map(({ url, title, description }) => `
        <div class="card">
          <div class="cover">
            <img src="${url}" alt="${title}">
          </div>
          <div class="content">
            <h3>${title}</h3>
            <p>${description}</p>
          </div>
        </div>
      `)
      .join('');

    container.innerHTML += drinksHTML;
  });