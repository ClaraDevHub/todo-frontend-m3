const API_URL = "http://localhost:3000/tasks";

const form = document.getElementById("taskForm");
const input = document.getElementById("title");
const list = document.getElementById("taskList");

// Buscar tarefas
async function getTasks() {
  const res = await fetch(API_URL);
  const tasks = await res.json();
  renderTasks(tasks);
}

function renderTasks(tasks) {
  list.innerHTML = "";
  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task.title;
    list.appendChild(li);
  });
}

// Criar tarefa
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: input.value,
      done: false
    })
  });

  input.value = "";
  getTasks();
});

getTasks();
