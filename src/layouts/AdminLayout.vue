<template>
    <div>
      <aside>
        <ul>
        <li><router-link to="/admin">Dashboard</router-link></li>
        <li><router-link to="/admin/settings">Settings</router-link></li>
      </ul>
      </aside>
      
      <main><router-view /></main>
    </div>
  </template>



<style scoped src="../assets/admin.css"></style>
  