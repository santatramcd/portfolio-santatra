<template>
    <div>
        <div class="container mt-5">
            <h1>ANDRIANJAKA SANTATRA</h1>
            <span>Développeur Web</span>
            <span class="span-hr"></span>
        </div>
    </div>
</template>
<script setup>

</script>
<style scoped lang="scss">
$colorblack: var(--token-d06c6878-f8de-4d7e-a60a-d0bb19103013, #141414);
$colorwhite: var(--token-585607e0-d916-446c-9a5c-fad6aacfe8e9, #ffffff);
$param: 20px;
h1{
    font-size: 10vw;
    font-family: "PP Right Grotesk Tight Bold", sans-serif;
    font-weight: bolder;
    color: $colorwhite;
    text-align: center;
}
span{
    color: $colorwhite;
    font-size: 20px;
    text-align: center;
    display: block;
    // background-color: red;
    font-weight: 600;
}
.span-hr{
    width: 155px;
    height: 2px;
    background-color: $colorwhite;
    margin: auto;
}
</style>