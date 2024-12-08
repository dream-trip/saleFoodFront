<template>
  <div class="login-root">
    <div class="login-inner">
      <el-form
        ref="ruleFormRef"
        style="max-width: 600px"
        :model="ruleForm"
        :rules="rules"
        label-width="auto"
        class="demo-ruleForm"
        :size="formSize"
        status-icon
      >
        <el-form-item label="用户名" prop="name">
          <el-input v-model="ruleForm.name" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password" />
        </el-form-item>
        <el-form-item label="验证码" prop="verificationCode">
          <el-input v-model="ruleForm.verificationCode" />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)"> 登录 </el-button>
          <el-button @click="toRegistry">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { ComponentSize, FormInstance, FormRules } from 'element-plus'
import { useRouter } from 'vue-router'
const router = useRouter()
interface RuleForm {
  name: string
  password: string
  verificationCode: string
}

const formSize = ref<ComponentSize>('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  name: '',
  password: '',
  verificationCode: ''
})


const rules = reactive<FormRules<RuleForm>>({
  name: [
    { required: true, message: '请输入用户名', trigger: 'blur' }
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur'
    },
  ],
  verificationCode: [
    {
      required: true,
      message: '请输入验证码',
      trigger: 'blur'
    },
  ]
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
const toRegistry = ()=>{
  router.push({name: 'register'})
}
</script>
<style scoped lang="less">
.login-root {
  height: 100%;
  background: #7bc6dbbf;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-inner{
    width: 500px;
    height: 200px;
    padding: 10px;
    border-radius: 10px;
    background:#ffffffbf;
    box-shadow:0 0 5px #f8fcfdbf;
  }
}
</style>
