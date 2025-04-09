// Define the URLs of the API
const allPersonsUrl = "http://127.0.0.1:5000/person/";
const personByIdUrl = "http://127.0.0.1:5000/person/123";

// Function to fetch and display all persons
async function fetchAllPersons() {
    try {
        const response = await fetch(allPersonsUrl);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        console.log("All Persons:", data);
        displayData("All Persons", data);
    } catch (error) {
        console.error("Failed to fetch all persons:", error);
    }
}



// Function to display data on the webpage
function displayData(title, data) {
    const container = document.getElementById("data-container");
    
    // Clear previous content
    container.innerHTML = "";

    // Create new section and append data
    const section = document.createElement("section");
    const heading = document.createElement("h2");
    heading.textContent = title;
    const pre = document.createElement("pre");
    pre.textContent = JSON.stringify(data, null, 2);
    
    section.appendChild(heading);
    section.appendChild(pre);
    container.appendChild(section);
}

// Call the functions to fetch and display data
fetchAllPersons();
