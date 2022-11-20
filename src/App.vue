<script setup>
import { useUserStore } from "./store/user";
import { ref } from "vue";

const user_store = useUserStore();

const user_input = ref({
  name: "",
  email: "",
});

const sort = ref(false);

const CreateUser = () => {
  if (!user_input.value.name || !user_input.value.email) {
    return alert("Please enter a name and email");
  }
  user_store.create(user_input.value);

  user_input.value = {
    name: "",
    email: "",
  };
};

const DeleteUser = (id) => {
  user_store.delete(id);
  alert("User Deleted with id: " + id);
};
</script>

<template>
  <main>
    <h1>Team manager</h1>

    <form @submit.prevent="CreateUser">
      <input type="text" placeholder="e.g Fat ass" v-model="user_input.name" />
      <input type="email" placeholder="e.g fat@fatass.com" v-model="user_input.email" />
      <input type="submit" value="Create User" />
    </form>
    </main>
    </template>
