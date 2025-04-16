<template>
    <div>
       
      <header>
            <nav>
              <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/about">About</router-link></li>
                
              </ul>
            </nav>
    </header>
      <main><router-view /></main>
      <footer>
          <p>&copy; 2025 All Rights Reserved.</p>
    </footer>
    </div>
  </template>
  <style scoped src="../assets/frontend.css">



</style>
  