// Filtering and Sorting (products.html)
document.addEventListener("DOMContentLoaded", () => {
  const categoryFilter = document.getElementById("category");
  const sortFilter = document.getElementById("sort");
  const products = document.querySelectorAll(".product");

  categoryFilter.addEventListener("change", filterAndSort);
  sortFilter.addEventListener("change", filterAndSort);

  function filterAndSort() {
    const category = categoryFilter.value;
    const sortBy = sortFilter.value;

    let filteredProducts = [...products];
    if (category !== "all") {
      filteredProducts = filteredProducts.filter((product) =>
        product.getAttribute("data-category") === category
      );
    }

    filteredProducts.sort((a, b) => {
      const aVal = parseFloat(a.getAttribute(`data-${sortBy}`));
      const bVal = parseFloat(b.getAttribute(`data-${sortBy}`));
      return aVal - bVal;
    });

    document.querySelector(".product-list").innerHTML = "";
    filteredProducts.forEach((product) => {
      document.querySelector(".product-list").appendChild(product);
    });
  }
});

// To-Do List (todo.html)
document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("task-input");
  const addTaskButton = document.getElementById("add-task");
  const taskList = document.getElementById("task-list");

  const loadTasks = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    taskList.innerHTML = tasks.map((task) => `<li>${task}</li>`).join("");
  };

  addTaskButton.addEventListener("click", () => {
    const task = taskInput.value.trim();
    if (task) {
      const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      tasks.push(task);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      taskInput.value = "";
      loadTasks();
    }
  });

  loadTasks();
});
