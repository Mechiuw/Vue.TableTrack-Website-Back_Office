<script setup>

</script>

<template>
  <div class="container-banner">
    <div class="container-text-big">
      <div>
          <h1 class="banner-text-main">Welcome Back<br/>To TableTrack</h1>
      </div>
      <div>
        <h1 class="banner-text">돌아와서 반가워요 !</h1>
      </div>
    </div>
    <div>
      <h1 class="banner-text-small">TableTrack@2024</h1>
    </div>
  </div>
</template>

<style scoped>
.container-banner{
  text-align: center;
  align-content: center;
  justify-content: center;
    height: 100vh;
    width: 55%;
    padding: 20px; 
    background-color:#E73C3C;
    border-top-right-radius: 200px;
    display: flex;
    flex-direction: column;
  
}
.container-text-big{
  margin-bottom:10px ;
}
.banner-text{
  font-family: "Raleway", sans-serif;
  color: white;
  font-weight: bold;
  font-size: 200%; 
}
.banner-text-main{
  font-family: "Raleway", sans-serif;
  color: white;
  font-weight: bold;
  font-size: 400%;  
}
.banner-text-small{
  
  font-family: "Raleway", sans-serif;
  color: white;
  font-weight: 400;
  font-size: medium;
}

</style>
