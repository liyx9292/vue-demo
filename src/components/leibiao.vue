<template>
    <div id="leibiao">
      	<!-- <img src="../assets/hrtt.png"> -->
        <img :src="imgs">
      	<div class="titles">
      		<p class="title">{{logo}}</p>
      		<p class="price"> {{time}}</p>
      	</div>
    </div>
</template>

<script>

export default {
props:['logo',"time","imgs"],//子组件使用父组件的数据，我们需要通过子组件的props选项。
}
</script>
<style>
#leibiao{
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid #f1f1f1;
	padding: 0.1rem 0;
  margin-top: 1rem;
}
img{
	width: 5rem;
	height: 5rem;
}
.titles{
	width: 70%;
}
.title{
	overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 1rem;
    color: #444;
}
.price{
  font-size: 0.5rem;
  text-align: right;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    color: #fea985;
}
</style>
