let notes = [ 
    {id: 1, text: "Buy milk and bread", category: "personal"},
    {id: 2, text: "Finish the Day 3 assignment", category: "study"},
    {id: 3, text: "Email the project report to Grace", category: "work"},
    {id: 4, text: "Revise JavaScript arrays", category: "study"},
    {id: 5, text: "Call mum", category: "personal"}
];

const validCategories = ["personal", "study", "work"];

console.log(notes); // returns the array of notes
console.log( notes.length); // returns the number of notes
console.log( notes[0].text); // returns the text of the first note

function searchNotes(word) {
    const searchWord = word.toLowerCase();

    return notes.filter(note => note.text.toLowerCase().includes(searchWord));
}
console.log(searchNotes("javascript")); // returns an array of notes that contain the word "javascript"
console.log(searchNotes("holiday")); // returns an empty array since no notes contain the word "holiday"

function longestNote() {

    if (notes.length === 0) {
        return null;
    }

    let longest = notes[0];

    for (const note of notes) {
        if (note.text.length > longest.text.length) {

            return longest = note;
        }
    }
    return longest;
}
console.log(longestNote()); // returns the note with the longest text

const savedNotes = notes;
notes = [];

console.log(longestNote()); // returns null since there are no notes 

notes = savedNotes;

 function countByCategory() {
    const counts= {
        personal: 0,
        study: 0,
        work: 0
    };

    for (const note of notes) {
            counts[note.category]++;
        }
    return counts;
}
console.log(countByCategory()); // returns an object with the count of notes in each category

const originalNotesForCount = notes;
notes = [];

console.log(countByCategory()); // returns an object with the count of notes in each category, all counts are 0 since there are no notes

notes = originalNotesForCount;

function getSummary() {
    const counts = countByCategory();
    const totalNotes = notes.length;
    const noteWord = totalNotes === 1 ? "note" : "notes";

    return `${totalNotes} ${noteWord} in total, ${counts.personal} personal, ${counts.study} study, ${counts.work} work.`;
}

console.log(getSummary()); // returns a summary of the notes in the format: "X notes in total, Y personal, Z study, W work."

const savedNotesForSummary = notes;
notes = [];

console.log(getSummary()); // returns a summary of the notes in the format: "0 notes in total, 0 personal, 0 study, 0 work." since there are no notes

notes = savedNotesForSummary;

function isDuplicate(text) {
    const cleanedText = text.trim().toLowerCase();

    return notes.some(note => note.text.trim().toLowerCase() === cleanedText);
}
console.log(isDuplicate("BUY MILK AND BREAD")); // returns true since there is a note with the same text (case-insensitive)
console.log(isDuplicate("Go to the library")); // returns false since there is no note with the same text

function addNote(text, category) {
    const cleanedText = text.trim();
    if (cleanedText.length < 1 || cleanedText.length > 200) {
        console.log("Note text must contain 1-200 characters."); // returns false since the note text is empty or exceeds 200 characters
        return false;
    }
    if (isDuplicate(text)) {
        console.log("A note with this text already exists."); //
        return false;
    }

    if (!validCategories.includes(category)) {
        console.log("Note rejected : Invalid catergory."); // returns false since the category is not valid
        return false;
    }
    const noteId = notes.length ===0
        ? 1
        : Math.max(...notes.map(note => note.id)) + 1;  

    notes.push({ id: noteId, text: cleanedText, category: category });
    console.log(`Note added successfully: "${cleanedText}"`); // returns true and logs a success message
    return true;
}

console.log(addNote("Attend JavaScript classes", "study")); // returns true and logs a success message 
console.log(addNote("Buy milk and bread", "personal")); // returns false and logs a message indicating that a note with the same text already exists
console.log(addNote("New note", "sports")); // returns false and logs a message indicating that the category is invalid
console.log(addNote("  ", "work")); // returns false and logs a message indicating that the note text is emptys