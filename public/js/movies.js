// Function to render movies
/**
 * Asynchronous function to fetch and render movie data from an API.
 * The function fetches data from a local server, parses the JSON response,
 * and then creates and appends a new div element for each movie to a container element.
 * Each div includes the movie's title, year, genre, and description.
 * 
 * @async
 * @function renderMovies
 * @returns {Promise<void>} A Promise that resolves when the function has completed.
 */

async function renderMovies() {
    // Fetch movie data from local server
    const res = await fetch("http://localhost:3000/api/movies");

    // Parse JSON response
    const movies = await res.json();

    // Get the container element
    const container = document.getElementById('movie-container');

    // Clear the container's current content
    container.innerHTML = "";

    // For each movie in the data
    movies.forEach(movie => {
        // Create a new div element
        const movieEl = document.createElement('div');

        // Add the 'movie' class to the div
        movieEl.classList.add('movie');

        // Set the div's inner HTML to include the movie's title, year, genre, and description
        movieEl.innerHTML = `
                <h2>${movie.title} (${movie.year})</h2>
                <p><strong>Genre:</strong> ${movie.genre}</p>
                <p>${movie.description}</p>
            `;

        // Append the div to the container
        container.appendChild(movieEl);
    });
}


// Setting Event Listener on the button.
document.getElementById("fetchMovies").addEventListener("click", renderMovies);