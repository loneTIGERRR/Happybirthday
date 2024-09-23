// Function to navigate to the next page
function goToPage(pageUrl) {
    window.location.href = pageUrl;
}

// Function to add love notes dynamically on the Love Notes page
function addLoveNote() {
    const noteInput = document.getElementById('noteInput');
    const loveNotesList = document.getElementById('loveNotesList');
    const newNote = noteInput.value;

    if (newNote) {
        const listItem = document.createElement('li');
        listItem.textContent = newNote + " 💖";  // Add heart emoji at the end
        loveNotesList.appendChild(listItem);
        noteInput.value = '';  // Clear the input field
    }
}
