<script>
import logo from '../../assets/logoapp.png';
import profileImage from '../../assets/user.png';
export default {
    name : 'TopBar',
    data() {
        return {
            logo: logo,
            profileImage: profileImage,
            title: 'TableTrack BackOffice',
            maker: 'MC Software House',
        }
    }
}
</script>
<template>
    <div class="topbar-bg">
        <div class="option">
            <img :src="logo" width="100px">
            <h1 style="color: white;" class="topbar-title">{{title}}</h1>
            <h6 style="color: white;" class="topbar-title">{{maker}}</h6>
        </div>
        <div class="profile">
            <img :src="profileImage" width="70px">
        </div>
    </div>
</template>

<style>
@import url('../topbar/TopBar.css');
</style>