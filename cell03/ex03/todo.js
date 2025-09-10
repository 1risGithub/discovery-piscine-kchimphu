// Helper: get and save cookie
const cookieName = 'todo_list';
const getTodos = () => {
  try { return JSON.parse(decodeURIComponent(document.cookie.replace(/(?:(?:^|.*;\s*)todo_list\s*=\s*([^;]*).*$)|^.*$/, "$1"))) || []; }
  catch(e){ return []; }
};
const saveTodos = () => {
  const items = [...document.querySelectorAll('.todo_item')].map(i=>i.textContent);
  document.cookie = cookieName+"="+encodeURIComponent(JSON.stringify(items))+";path=/;max-age=2592000"; // 30 days
};

// Create a new todo
const addTodo = text => {
  const div = document.createElement('div');
  div.className='todo_item';
  div.textContent=text;
  div.onclick = ()=>{ if(confirm('Delete this TO DO?')){ div.remove(); saveTodos(); } };
  document.getElementById('ft_list').prepend(div);
  saveTodos();
};

// Load existing todos
getTodos().forEach(addTodo);

// New button
document.getElementById('new_btn').onclick = ()=> {
  const text=prompt('Enter a new TO DO:');
  if(text?.trim()) addTodo(text.trim());
};
