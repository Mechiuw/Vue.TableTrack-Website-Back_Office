<script>
import { IconContainer, IconForms, IconPlus, IconSearch, IconUsersGroup } from '@tabler/icons-vue';
import { RouterLink } from 'vue-router';

export default {
    name : 'NavBar',
    components : { IconContainer, IconForms, IconPlus, IconSearch, IconUsersGroup },
}
</script>

<template>
    <div class="navbar-viewport">
        <IconSearch size="28px"/>

        <RouterLink :to="{path:'/dashboard/content/orderform'}" >
            <IconForms size="28px"/>
        </RouterLink> 
        
        <IconContainer size="28px"/>
        
        <IconPlus size="28px"/>
        
        <IconUsersGroup size="28px"/>
    </div>
</template>

<style>
@import url('../navbar/NavBar.css');
</style>