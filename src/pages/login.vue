<template>
  <div>登录</div>
  <button @click="test()">按钮</button>
</template>

<script lang="ts" setup>
  import { Test } from "@/apis/loginApis";
import { ElMessage } from 'element-plus'
  async function test (){
    Test("postData");
  }
</script>

<style lang="scss" scoped>
    
</style> 