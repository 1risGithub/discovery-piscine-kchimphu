$(document).ready(function () {
  const cookieName = "todo_list";
  const list = $("#ft_list");
  const emptyMsg = $("#empty");

  // get todos from cookie
  function getTodos() {
    try {
      return (
        JSON.parse(
          decodeURIComponent(
            document.cookie.replace(
              /(?:(?:^|.*;\s*)todo_list\s*=\s*([^;]*).*$)|^.*$/,
              "$1"
            )
          )
        ) || []
      );
    } catch (e) {
      return [];
    }
  }

  // save todos to cookie
  function saveTodos() {
    const items = $(".todo_item")
      .map(function () {
        return $(this).text();
      })
      .get();
    document.cookie =
      cookieName +
      "=" +
      encodeURIComponent(JSON.stringify(items)) +
      ";path=/;max-age=2592000";
  }

  // update empty message
  function updateEmptyMessage() {
    emptyMsg.toggle($(".todo_item").length === 0);
  }

  // add task
  function addTodo(text) {
    const div = $("<div></div>")
      .addClass("todo_item")
      .text(text)
      .click(function () {
        if (confirm("Delete this TO DO?")) {
          $(this).remove();
          saveTodos();
          updateEmptyMessage();
        }
      });
    list.prepend(div);
    saveTodos();
    updateEmptyMessage();
  }

  // load tasks
  getTodos().forEach(addTodo);

  // new button
  $("#new_btn").click(function () {
    const text = prompt("Enter a new TO DO:");
    if (text && text.trim()) addTodo(text.trim());
  });

  updateEmptyMessage();
});
