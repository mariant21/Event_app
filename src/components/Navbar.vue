<template>
    <nav class="navbar navbar-expand navbar-light bg-info "> 
        <a href="/" class="navbar-brand">
            <img src="../assets/RM.png" width="120" height="50" alt="">
      </a>
      <div class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/home" class="nav-link">
            <font-awesome-icon icon="home" /> Home
          </router-link>
        </li>
      </div>

      <div  class="navbar-nav ms-auto">
        <li class="nav-item nav-right">
          <router-link to="/login" class="nav-link">
            <font-awesome-icon icon="sign-in-alt" /> Login
          </router-link>
        </li>
      </div>

    </nav>
</template>