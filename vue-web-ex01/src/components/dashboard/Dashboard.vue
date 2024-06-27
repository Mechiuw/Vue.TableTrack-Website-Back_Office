<script>
import NavBar from '../navbar/NavBar.vue';
import TopBar from '../topbar/TopBar.vue';
import Content from './Content.vue';
export default {
    name : 'Dashboard',
    components : {
        NavBar : NavBar,
        TopBar : TopBar,
        Content : Content
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
                <Content/>
            </div>
        </div>
    </div>
</template>

<style>
.container-content{
    margin-top: 40px;
}
</style>