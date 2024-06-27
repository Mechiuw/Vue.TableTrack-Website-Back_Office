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
.topbar-bg{
    display: flex;
}
.option{
    width: 90%;
    height: 9vh;
    background-color: #E74C3C;
    border-bottom-right-radius: 60px;
    display: flex;
    box-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.1),
    0 4px 8px rgba(0, 0, 0, 0.1),
    0 8px 16px rgba(0, 0, 0, 0.1),
    0 16px 32px rgba(0, 0, 0, 0.1),
    0 32px 64px rgba(0, 0, 0, 0.1);
}
.topbar-title{
    align-content: center;
    margin-left: 30px;
    font-family: "DM Sans",sans-serif;
}
.profile {
    height: 10vh;
    margin-left: 50px;
    border-bottom-left-radius : 50px;
    border-bottom-right-radius : 50px;
    padding: 10px;
    background-color: white;
    box-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.1),
    0 4px 8px rgba(0, 0, 0, 0.1),
    0 8px 16px rgba(0, 0, 0, 0.1),
    0 16px 32px rgba(0, 0, 0, 0.1),
    0 32px 64px rgba(0, 0, 0, 0.1);
}
</style>