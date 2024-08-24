async function searchFaculty() {
    const search = document.getElementById("search").value;

    try {
      const response = await fetch(`http://localhost:3000/search?keyword=${search}`, {
        method: 'GET',
        mode: 'cors',  // cors mode
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const faculty = await response.json();
      const results = document.getElementById("results");
      results.innerHTML = ""; // Clear search
  
      if (faculty.length > 0) {
        faculty.forEach((prof) => {
          const listItem = document.createElement("li");
          listItem.innerHTML = `<a href="${prof.link}" target="_blank">${prof.name}</a>: ${prof.research}`;
          results.appendChild(listItem);
        });
      } else {
        results.innerHTML = "<li>No Results Found</li>";
      }
    } catch (error) {
      console.error('Fetch error: ', error);
      document.getElementById("results").innerHTML = "<li>Error occurred while fetching results.</li>";
    }
  }
  