let notes = [ 
    {id: 1, text: "Buy milk and bread", category: "personal"},
    {id: 2, text: "Finish the Day 3 assignment", category: "study"},
    {id: 3, text: "Email the project report to Grace", category: "work"},
    {id: 4, text: "Revise JavaScript arrays", category: "study"},
    {id: 5, text: "Call mum", category: "personal"}
];

const validCategories = ["personal", "study", "work"];

console.log(notes);
console.log( notes.length);
console.log( notes[0].text);
function searchNotes(word) {
    const searchWord = word.toLowerCase();

    return notes.filter(note => note.text.toLowerCase().includes(searchWord));
}
console.log(searchNotes("javascript"));
console.log(searchNotes("holiday"));

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
console.log(longestNote());

const savedNotes = notes;
notes = [];

console.log(longestNote());

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
console.log(countByCategory());

const originalNotesForCount = notes;
notes = [];

console.log(countByCategory());

notes = originalNotesForCount;

function getSummary() {
    const counts = countByCategory();
    const totalNotes = notes.length;
    const noteWord = totalNotes === 1 ? "note" : "notes";

    return `${totalNotes} ${noteWord} in total, ${counts.personal} personal, ${counts.study} study, ${counts.work} work.`;
}

console.log(getSummary());

const savedNotesForSummary = notes;
notes = [];

console.log(getSummary());

notes = savedNotesForSummary;

function isDuplicate(text) {
    const cleanedText = text.trim().toLowerCase();

    return notes.some(note => note.text.trim().toLowerCase() === cleanedText);
}
console.log(isDuplicate("BUY MILK AND BREAD"));
console.log(isDuplicate("Go to the library"));

function addNote(text, category) {
    const cleanedText = text.trim();
    if (cleanedText.length < 1 || cleanedText.length > 200) {
        console.log("Note text must contain 1-200 characters.");
        return false;
    }
    if (isDuplicate(text)) {
        console.log("A note with this text already exists.");
        return false;
    }

    if (!validCategories.includes(category)) {
        console.log("Note rejected : Invalid catergory."); 
        return false;
    }
    const noteId = notes.length ===0
        ? 1
        : Math.max(...notes.map(note => note.id)) + 1;  

    notes.push({ id: noteId, text: cleanedText, category: category });
    console.log(`Note added successfully: "${cleanedText}"`);
    return true;
}

console.log(addNote("Attend JavaScript classes", "study"));
console.log(addNote("Buy milk and bread", "personal"));
console.log(addNote("New note", "sports"));
console.log(addNote("  ", "work"));

