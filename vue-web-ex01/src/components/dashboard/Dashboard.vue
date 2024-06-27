<script>
import NavBar from '../navbar/NavBar.vue';
import TopBar from '../topbar/TopBar.vue';
export default {
    name : 'Dashboard',
    components : {
        NavBar : NavBar,
        TopBar : TopBar
    }
}
</script>

<template>
    <div class="viewport">
        <div class="container-topbar">
            <TopBar/>
        </div>
        <div class="container-content">
            <div class="container-navbar">
                <NavBar/>
            </div>
            <div class="main-content">
                
            </div>
        </div>
    </div>
</template>

<style>
</style>