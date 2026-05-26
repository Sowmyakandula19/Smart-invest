document.addEventListener('DOMContentLoaded', async () => {
  const newsContainer = document.getElementById('news-container');

  try {
    const response = await fetch('https://newsbacken.onrender.com/api/stock-news');
    if (!response.ok) {
      throw new Error('Failed to fetch news');
    }

    const articles = await response.json();

    if (articles.length === 0) {
      newsContainer.innerHTML = '<p>No news articles available.</p>';
      return;
    }

    articles.forEach(article => {
      const articleElement = document.createElement('div');
      articleElement.classList.add('article');
      articleElement.innerHTML = `
        <h2>${article.title}</h2>
        <p>${article.description || 'No description available.'}</p>
        <a href="${article.url}" target="_blank">Read more</a>
      `;
      newsContainer.appendChild(articleElement);
    });
  } catch (error) {
    console.error('Error fetching news:', error.message);
    newsContainer.innerHTML = '<p>Failed to load news. Please try again later.</p>';
  }
});
