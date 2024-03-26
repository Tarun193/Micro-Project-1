/**
 * Asynchronous function to fetch and render TV shows from a local API.
 * The function fetches data from the API, parses it into JSON, and then creates a new div for each TV show.
 * Each div includes the title, year, genre, and description of the TV show.
 * These divs are then appended to the 'movie-container' element in the HTML.
 */
async function renderTVShows() {
    // Fetch data from the local API
    const res = await fetch("http://localhost:3000/api/TVShows");

    // Parse the response into JSON
    const movies = await res.json();

    // Get the 'movie-container' element from the HTML
    const container = document.getElementById('movie-container');

    // Clear the 'movie-container' element
    container.innerHTML = "";

    // For each movie in the JSON data
    movies.forEach(movie => {
        // Create a new div element
        const movieEl = document.createElement('div');

        // Add the 'movie' class to the div
        movieEl.classList.add('movie');

        // Set the inner HTML of the div to include the movie's title, year, genre, and description
        movieEl.innerHTML = `
                <h2>${movie.title} (${movie.year})</h2>
                <p><strong>Genre:</strong> ${movie.genre}</p>
                <p>${movie.description}</p>
            `;

        // Append the new div to the 'movie-container' element
        container.appendChild(movieEl);
    });
}

// Setting event Listener

document.getElementById("fetchTVShows").addEventListener("click", renderTVShows);