<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <RouterLink to="/home">Home</RouterLink> |
  <RouterLink to="/about">About</RouterLink>
  <RouterView />
</template>