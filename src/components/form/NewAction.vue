<template>
 <section class="form-section">
  <div class="container">
   <base-wrapper>
    <form id="form" @submit.prevent="$emit('formSubmit', value, description, actionType)">
     <div class="form-group">
      <label for="sum">
       Value :
      </label>
      <input
       type="text"
       name="sum"
       placeholder="Enter used money in $"
       v-model="value"
       ref="value"
      />
     </div>
     <div class="form-group">
      <label for="description">
       Desctiption :
      </label>
      <input
       type="text"
       name="description"
       placeholder="Add action description"
       v-model="description"
       ref="description"
      />
     </div>
     <div class="form-group">
      <label for="action-type">
       Action Type :
      </label>
      <select name="action-type" v-model="actionType" ref="actionType">
       <option value="Expenses" :style="'color: tomato'">Expenses</option>
       <option value="Income" :style="'color: green'" default>Income</option>
      </select>
     </div>
     <div class="form-group btn">
      <base-button :mode="'submit'">Submit</base-button>
     </div>
    </form>
   </base-wrapper>
  </div>
 </section>
</template>

<script>
export default {
 data() {
  return {
   value: null,
   description: "",
   actionType: "Expenses",
  };
 }
};
</script>

<style scoped>
.base-wrapper {
 max-width: 400px;
 width: 100%;
 margin: 0 auto;
 border-radius: 13px;
 box-shadow: 0 0 4px 0px rgba(255, 255, 255, 1) !important;
}
#form {
 padding: 20px 15px;
 border-radius: 7px;
}
.form-group label {
 display: block;
 font-family: Arial, sans-serif;
 font-size: 16px;
 line-height: 18px;
 margin-bottom: 8px;
 font-weight: 600;
 color: #fff;
}

.form-group input { 
    color: #fff;
}
.form-group input,
.form-group select {
 box-sizing: border-box;
 width: 100%;
 height: 40px;
 border: none;
 border-bottom: 2px solid #fff;
 background-color: transparent;
 margin-bottom: 20px;
 padding: 5px;
}
.form-group input:focus {
 outline: none;
 box-shadow: 0px 7px 9px -8px rgb(255, 255, 255);
}
.form-group input::placeholder,
.form-group select {
 color: #fff;
 opacity: 1;
}
.form-group.btn {
 text-align: center;
}
</style>
