<template>
 <li>
  <div class="table-item__value">{{ value }}</div>
  <div class="table-item__description">{{ description }}</div>
  <div class="table-item__date">{{ date }}</div>
 </li>
</template>

<script>
export default {
 props: ["value", "description", "date"],
};
</script>

<style>
li {
 display: flex;
 justify-content: space-between;
 align-items: center;
 color: #fff;
 font-size: 24px;
 line-height: 28px;
 font-weight: 700;
 padding-bottom: 10px;
 border-bottom: 1px solid #fff;
}
li + li {
    margin-top: 10px;
}
</style>
