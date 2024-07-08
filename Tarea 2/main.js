document.addEventListener('DOMContentLoaded', () => {
    const noteInput = document.getElementById('new-note');
    const addNoteBtn = document.getElementById('add-note');
    const noteList = document.getElementById('note-list');
  
    // Cargar notas desde localStorage
    const loadNotes = () => {
      const notes = JSON.parse(localStorage.getItem('notes')) || [];
      notes.forEach(note => addNoteToDOM(note));
    };
  
    // Guardar notas en localStorage
    const saveNotes = (notes) => {
      localStorage.setItem('notes', JSON.stringify(notes));
    };
  
    // Obtener notas de localStorage
    const getNotes = () => {
      return JSON.parse(localStorage.getItem('notes')) || [];
    };
  
    // Añadir nota al DOM
    const addNoteToDOM = (note) => {
      const li = document.createElement('li');
      
      const noteText = document.createElement('span');
      noteText.textContent = note.text;
      noteText.classList.add('note-text');
      li.appendChild(noteText);
  
      if (note.important) {
        li.classList.add('important');
        const importantLabel = document.createElement('span');
        importantLabel.textContent = 'Important!';
        importantLabel.classList.add('important-label');
        noteText.appendChild(importantLabel);
      }
  
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        deleteNote(note, li);
      });
  
      const editBtn = document.createElement('button');
      editBtn.textContent = 'Edit';
      editBtn.classList.add('edit-btn');
      editBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        editNote(note, li);
      });
  
      const importantBtn = document.createElement('button');
      importantBtn.textContent = 'Important';
      importantBtn.classList.add('important-btn');
      importantBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleNoteImportant(note, li, noteText);
      });
  
      li.appendChild(deleteBtn);
      li.appendChild(editBtn);
      li.appendChild(importantBtn);
      noteList.appendChild(li);
    };
  
    // Añadir nueva nota
    const addNote = () => {
      const noteText = noteInput.value.trim();
      if (noteText === '') {
        alert('Note cannot be empty!');
        return;
      }
  
      const note = {
        text: noteText,
        important: false
      };
  
      const notes = getNotes();
      notes.push(note);
      saveNotes(notes);
      addNoteToDOM(note);
      noteInput.value = '';
    };
  
    // Eliminar nota
    const deleteNote = (note, li) => {
      let notes = getNotes();
      notes = notes.filter(n => n.text !== note.text);
      saveNotes(notes);
      noteList.removeChild(li);
    };
  
    // Editar nota
    const editNote = (note, li) => {
      const newText = prompt('Edit note:', note.text);
      if (newText) {
        note.text = newText;
        let notes = getNotes();
        notes = notes.map(n => n.text === note.text ? note : n);
        saveNotes(notes);
        li.querySelector('.note-text').childNodes[0].textContent = newText;
      }
    };
  
    // Alternar importancia de la nota
    const toggleNoteImportant = (note, li, noteText) => {
      note.important = !note.important;
      let notes = getNotes();
      notes = notes.map(n => n.text === note.text ? note : n);
      saveNotes(notes);
  
      if (note.important) {
        li.classList.add('important');
        const importantLabel = document.createElement('span');
        importantLabel.textContent = 'Important!';
        importantLabel.classList.add('important-label');
        noteText.appendChild(importantLabel);
      } else {
        li.classList.remove('important');
        const importantLabel = li.querySelector('.important-label');
        if (importantLabel) {
          noteText.removeChild(importantLabel);
        }
      }
    };
  
    addNoteBtn.addEventListener('click', addNote);
    noteInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        addNote();
      }
    });
  
    loadNotes();
  });