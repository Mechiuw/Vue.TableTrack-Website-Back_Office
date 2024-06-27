<script>
import { IconContainer, IconForms, IconPlus, IconSearch, IconUsersGroup } from '@tabler/icons-vue';

export default {
    name : 'NavBar',
    components : { IconContainer, IconForms, IconPlus, IconSearch, IconUsersGroup },
}
</script>

<template>
    <div class="navbar-viewport">
        <IconSearch size="28px"/>
        <IconForms size="28px"/>
        <IconContainer size="28px"/>
        <IconPlus size="28px"/>
        <IconUsersGroup size="28px"/>
    </div>
</template>

<style>
@import url('../navbar/NavBar.css');
</style>