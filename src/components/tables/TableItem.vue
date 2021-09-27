<template>
    <li>
        <div class="table-item__value"> { value } </div>
        <div class="table-item__description"> { description } </div>
        <div class="table-item__date"> { date } </div>
    </li>
</template>

<script>
export default {
    props: ['value', 'desctiption', 'date']
}
</script>