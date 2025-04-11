//your JS code here. If required.
document.getElementById('submit').addEventListener('click', addBook);

function addBook(e) {
  e.preventDefault();

  const title = document.getElementById('title').value.trim();
  const author = document.getElementById('author').value.trim();
  const isbn = document.getElementById('isbn').value.trim();

  if (title === '' || author === '' || isbn === '') {
    alert('Please fill in all fields');
    return;
  }

  const list = document.getElementById('book-list');
  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td><button class="delete">X</button></td>
  `;

  list.appendChild(row);

  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

document.getElementById('book-list').addEventListener('click', removeBook);

function removeBook(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are you sure you want to delete this book?')) {
      const row = e.target.parentElement.parentElement;
      row.remove();
    }
  }
}
