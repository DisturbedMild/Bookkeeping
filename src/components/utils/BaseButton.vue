<template>
 <button :type="mode"><slot></slot></button>
</template>

<script>
export default {
 props: ["mode"],
};
</script>

<style scoped>



button {
 width: 190px;
 height: 46px;
 display: inline-flex;
 justify-content: center;
 align-items: center;
 color: #2e2a2a;
 border-radius: 7px;
 border: none;
 background: #fff;
 font-size: 16px;
 line-height: 1;
 letter-spacing: 0.03em;
 font-weight: 700;
 font-family: Roboto, sans-serif;
 transition: all 0.3s ease;
}
button:hover {
    filter: brightness(90%);
}
</style>
