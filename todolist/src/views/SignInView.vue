<template>
  <div class="container">
    <form>
      <h1>Sign In</h1>
      <br />
      <br />
      <label for="email"><b>Username</b></label>
      <br />
      <input type="text" placeholder="Nhập Username" name="email" required />
      <br />
      <label for="psw"><b>Password</b></label>
      <br />
      <input type="password" placeholder="Nhập Password" name="psw" required />
      <br />
      <div class="clearfix">
        <button type="submit" class="signupbtn">Sign In</button>
      </div>
      <label>
        You are not have account?
        <br />
        <router-link
          to="/signup"
          style="text-decoration-line: none; hover: blue"
          >Sign Up</router-link
        >
      </label>
    </form>
  </div>
</template>

<script setup></script>

<style scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.container {
  display: inline-block;
}
form {
  border-radius: 20px;
  border: 1px;
  padding: 0.15rem 3rem 1rem 3rem;
  background-color: rgb(227, 255, 255);
}
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap");
body {
  font-family: "Noto Sans JP", sans-serif;
}
h1,
label {
  color: DodgerBlue;
  display: inline-block;
}
input[type="text"],
input[type="password"] {
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  resize: vertical;
  padding: 15px;
  border-radius: 15px;
  border: 0;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
}
input[type="text"]:focus,
input[type="password"]:focus {
  outline: none;
}
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}
button {
  width: 30%;
  background-color: #36b0f1;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  opacity: 0.9;
  font-family: Pacifico;
}
button:hover {
  opacity: 1;
}
.cancelbtn {
  padding: 14px 20px;
  background-color: #f44336;
}
.signupbtn {
  display: inline-block;
  width: 100%;
  border-radius: 15px;
  border: 0;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
}
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
</style>
