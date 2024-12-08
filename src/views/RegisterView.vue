<template>
  <div class="register">
    <div class="register-inner">
      <h3>用户注册页面</h3>
      <div class="form-region">
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
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="ruleForm.email" />
          </el-form-item>
          <el-form-item label="手机号" prop="phone">
            <el-input v-model="ruleForm.phone" />
          </el-form-item>
          <el-form-item label="真实姓名" prop="realName">
            <el-input v-model="ruleForm.realName" />
          </el-form-item>
          <el-form-item label="出生日期" prop="birthday">
            <el-input v-model="ruleForm.birthday" />
          </el-form-item>
          <el-form-item label="验证码" prop="verificationCode">
            <el-input v-model="ruleForm.verificationCode" />
          </el-form-item>

          <el-form-item>
            <el-button @click="resetForm(ruleFormRef)">注册</el-button>
          </el-form-item>
        </el-form>
        <!-- <UpLoadImage class="upload-image" /> -->
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { ComponentSize, FormInstance, FormRules } from 'element-plus'
import UpLoadImage from '@/components/UpLoadImage.vue'

interface RuleForm {
  name: string
  password: string
  email: string
  phone: string
  realName: string
  birthday: string
  verificationCode: string
}

const formSize = ref<ComponentSize>('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  name: '',
  password: '',
  email: '',
  phone: '',
  realName: '',
  birthday: '',
  verificationCode: '',
})

const validateEmail = (rule: any, value: any, callback: any) => {
  const emailRegExp = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/
  const emailRegExp1 = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
  if ((!emailRegExp.test(value) && value != '') || (!emailRegExp1.test(value) && value != '')) {
    callback(new Error('请输入有效邮箱格式！'))
  } else {
    callback()
  }
}
const validatePhone = (rule: any, value: any, callback: any) => {
  const phoneRegExp = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
  if (!phoneRegExp.test(value) && value != '') {
    callback(new Error('请输入有效手机号格式'))
  } else {
    callback()
  }
}
const validateBirthday = (rule: any, value: any, callback: any) => {
  const birthdayRegExp = /^\\d{4}-\\d{2}-\\d{2}$/
  if (!birthdayRegExp.test(value) && value != '') {
    callback(new Error('请按照 1990年01月01日 格式输入'))
  } else {
    callback()
  }
}
const rules = reactive<FormRules<RuleForm>>({
  name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur',
    },
  ],
  email: [
    { required: true, message: '请输入邮箱号', trigger: 'blur' },
    { validator: validateEmail, trigger: 'blur' },
  ],
  phone: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
    { validator: validatePhone, trigger: 'blur' },
  ],
  realName: [{ required: true, message: '请输入真实姓名', trigger: 'blur' }],
  birthday: [
    { required: true, message: '请输入出生日期', trigger: 'blur' },
    { validator: validateBirthday, trigger: 'blur' },
  ],
  verificationCode: [
    {
      required: true,
      message: '请输入验证码',
      trigger: 'blur',
    },
  ],
})
</script>
<style lang="less" scoped>
.register {
  height: 100%;
  background-color: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
  .register-inner {
    width: 600px;
    height: 500px;
    h3 {
      text-align: center;
      margin-bottom: 10px;
    }
    .form-region {
      display: flex;
      .demo-ruleForm {
        width: 400px;
      }
      .upload-image {
        width: 180px;
        margin-left: 30px;
      }
    }
  }
  ::v-deep(.el-form-item--default) {
    margin-bottom: 22px !important;
  }
  ::v-deep(.el-form-item__content) {
    justify-content: flex-end;
  }
}
</style>
