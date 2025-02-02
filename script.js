document.addEventListener("DOMContentLoaded", function () {
    // Fetch JSON file and display its content
    fetch('https://iamvyas.github.io/me/metadata/indexContent.json')
        .then(response => response.json())
        .then(data => {
            let contentDiv = document.getElementById('json-content');

            // Convert JSON into an HTML structure
            contentDiv.innerHTML = `
                <h2>Country Info</h2>
                <p><strong>Country:</strong> ${data.country}</p>
                <p><strong>Capital:</strong> ${data.capital}</p>
                <p><strong>Population:</strong> ${data.population}</p>
                <p><strong>Language:</strong> ${data.language}</p>
            `;
        })
        .catch(error => console.error('Error loading JSON:', error));
});