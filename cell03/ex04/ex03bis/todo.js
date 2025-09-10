document.addEventListener("DOMContentLoaded", () => {
  const cookieName = 'todo_list';
  const list = document.getElementById('ft_list');
  const emptyMsg = document.getElementById('empty');

  // Get todos from cookie
  const getTodos = () => { 
    try { 
      return JSON.parse(
        decodeURIComponent(
          document.cookie.replace(/(?:(?:^|.*;\s*)todo_list\s*=\s*([^;]*).*$)|^.*$/, "$1")
        )
      ) || [];
    } catch(e) { 
      return []; 
    } 
  };

  // Save todos to cookie
  const saveTodos = () => { 
    const items = [...document.querySelectorAll('.todo_item')].map(i => i.textContent);
    document.cookie = cookieName + "=" + encodeURIComponent(JSON.stringify(items)) + ";path=/;max-age=2592000"; 
  };

  // Show/hide empty message
  const updateEmptyMessage = () => { 
    emptyMsg.hidden = list.querySelectorAll('.todo_item').length > 0; 
  };

  // Create new todo
  const addTodo = text => {
    const div = document.createElement('div');
    div.className = 'todo_item';
    div.textContent = text;
    div.onclick = () => {
      if (confirm('Delete this TO DO?')) {
        div.remove(); 
        saveTodos(); 
        updateEmptyMessage();
      }
    };
    list.prepend(div);
    saveTodos();
    updateEmptyMessage();
  };

  // Load todos
  getTodos().forEach(addTodo);

  // New button
  document.getElementById('new_btn').onclick = () => {
    const text = prompt('Enter a new TO DO:');
    if (text?.trim()) addTodo(text.trim());
  };

  // Initialize empty message
  updateEmptyMessage();
});
