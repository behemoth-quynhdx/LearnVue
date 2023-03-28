<template>
  <div class="body">
    <div class="container">
      <h1>Todo List</h1>
      <div id="app" class="app">
        <div class="crlf" :itemEdit="newTask">
          <h3>New Task</h3>

          <input type="text" name="task" id="task" v-model="newTask.task" />

          <input type="date" id="date" name="date" v-model="newTask.ngay" />

          <button @click="onCreate()" class="create">Create</button>
        </div>
        <div class="crri">
          <button @click="onFillTask" class="filltask">Fill Task</button>

          <button @click="onFillDate" class="filldate">Fill Date</button>
        </div>
      </div>
      <div v-for="todo in todoList" :key="todo.id" class="css">
        <div class="lf">
          <input type="checkbox" v-model="todo.checked" />
          <span :class="{ checked: todo.checked }"> {{ todo.task }}</span>
        </div>
        <div class="ri">
          <button @click="onEdit()" class="edit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-pencil-square"
              viewBox="0 0 16 16"
            >
              <path
                d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
              />
              <path
                fill-rule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
              />
            </svg>
          </button>
          <button @click="onDelete(todo)" class="delete">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2h4a1 1 0 1 1 0 2h-1.069l-.867 12.142A2 2 0 0 1 17.069 22H6.93a2 2 0 0 1-1.995-1.858L4.07 8H3a1 1 0 0 1 0-2h4V4zm2 2h6V4H9v2zM6.074 8l.857 12H17.07l.857-12H6.074z"
                fill="#0D0D0D"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    todo: {
      type: Object,
      default: null,
    },
  },
  watch: {
    todo() {
      if (this.todo) {
        this.todoList = Object.assign({}, this.todo);
      } else {
        this.todoList = {};
      }
    },
  },
  data() {
    return {
      newTask: {
        id: Math.floor(Math.random() * 10000),
        task: "",
        ngay: "",
        checked: false,
      },
      todoList: [
        {
          id: 1,
          task: "đi học về",
          ngay: "21/03/2023",
          checked: true,
        },
        {
          id: 2,
          task: "đi chơi về",
          ngay: "21/03/2023",
          checked: true,
        },
        {
          id: 3,
          task: "đi ăn về",
          ngay: "21/03/2023",
          checked: false,
        },
      ],
    };
  },
  methods: {
    onCreate: function () {
      this.todoList.push({
        id: this.newTask.id,
        task: this.newTask.task,
        ngay: this.newTask.ngay,
        checked: false,
      });
      this.newTask = {
        task: "",
        id: Math.floor(Math.random() * 10000),
        ngay: "",
      };
    },
    onDelete: function (todo) {
      for (let i = 0; i < this.todoList.length; i++) {
        if (todo.id === this.todoList[i].id) {
          this.todoList.splice(i, 1);
        }
      }
    },
    // onEdit: function (newtask) {
    //   this.newTask = newtask;
    // },
  },
};
</script>
<style scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.app {
  display: flex;
  justify-content: space-between;
  margin: 0px 20% 10px 20%;
  padding: 10px;
  border-radius: 10px;
}
.crlf {
  display: flex;
}
.crri {
  display: flex;
}
input[type="text"],
[type="date"] {
  margin: 0px 10px 0px 10px;
  display: inline-block;
  resize: vertical;
  padding: 10px;
  border-radius: 15px;
  border: 0.5px solid rgb(193, 193, 193);
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
}
label {
  margin: 0 5rem 0 5rem;
}
span {
  margin-top: 2.5px;
  margin-left: 10px;
}
.checked {
  text-decoration: line-through;
}
.css {
  background-color: rgb(188, 255, 255);
  display: flex;
  justify-content: space-between;
  margin: 0px 20% 10px 20%;
  padding: 10px;
  border-radius: 10px;
}
.lf {
  padding-top: 5px;
  display: flex;
}
.ri {
  display: flex;
}
button {
  width: 70px;
  padding: 10px 5px 5px 5px;
  margin-left: 10px;
  color: rgb(255, 255, 255);
  border: none;
  cursor: pointer;
  opacity: 0.9;
  border: 0.5px solid rgb(193, 193, 193);
  border-radius: 10px;
  font-family: Pacifico;
}
.create {
  background-color: rgb(0, 100, 213);
}
.delete {
  width: 50%;
  background-color: rgb(238, 52, 52);
}
.edit {
  color: black;
  width: 50%;
  background-color: yellow;
}
.filltask,
.filldate {
  background-color: rgb(40, 148, 40);
}
</style>
