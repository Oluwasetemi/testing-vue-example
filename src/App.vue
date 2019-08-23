<template>
  <div>
    <p>Times clicked: {{ count }}</p>
    <button @click="increment">increment</button>
    <div class="usingVmodel">
      <p>Hi, my name is {{ user }}</p>

      <label for="username">Username:</label>
      <input v-model="user" id="username" name="username" />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    count: 0,
    user: "Setemi"
  }),

  methods: {
    increment() {
      this.count++;
    }
  }
};
</script>