<template>
    <div id="textp">
        <p>{{logo}}</p>
    </div>
</template>

<script>

export default {
props:['logo']//子组件使用父组件的数据，我们需要通过子组件的props选项。
}
</script>
<style>
p{
    margin-bottom: 1rem;
    font-size: 0.7rem;
}
</style>
