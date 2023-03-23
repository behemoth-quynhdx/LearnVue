<template>
  <div class="body">
    <div class="container">
      <h1>Todo List</h1>
      <table>
        <tr>
          <td><h3>New Task</h3></td>
          <td><input type="text" name="" id="" /></td>
          <td><input type="date" id="birthday" name="birthday" /></td>
          <td><button class="create">Create</button></td>
        </tr>
        <tr>
          <td>Task</td>
          <td>Date</td>
          <td>Mark As Done</td>
          <td>Action</td>
        </tr>
        <tr>
          <td>Làm bài tập</td>
          <td>12/22/2023</td>
          <td>
            <button class="done">Done</button>
          </td>
          <td>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
* {
  margin: 0;
  box-sizing: border-box;
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
button {
  width: 70px;
  padding: 5px;
  margin-left: 10px;
  color: rgb(0, 0, 0);
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
  width: 70px;
  background-color: rgb(238, 52, 52);
}
.edit {
  width: 70px;
  background-color: yellow;
}
.done {
  width: 50%;
  background-color: rgb(69, 204, 69);
}
table {
  display: inline-block;
  padding: 20px;
}
</style>
