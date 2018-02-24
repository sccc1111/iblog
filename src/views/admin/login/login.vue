<template>
    <div class="width: 100%;height: 100%;" @keydown.enter="handleSubmit">
        <Card style="margin:15% auto;width:320px;" >
            <p slot="title">
                <Icon type="log-in"></Icon>
                欢迎登录
            </p>
            <Form ref="loginForm" :model="loginForm" :label-width="60" :rules="rules">
                <FormItem label="账号:" prop="user">
                    <Input v-model="loginForm.user" placeholder="请输入账号"></Input>
                </FormItem>
                <FormItem label="密码:" prop="password">
                    <Input :type="passwordType" v-model="loginForm.password" placeholder="请输入密码">
                        <Icon  type="ios-eye" slot="append" @click.native="showPw"></Icon>
                    </Input>
                </FormItem>
            </Form>
            <Button type="primary" @click="handleSubmit" long>登录</Button>
        </Card>
    </div>
</template>
<script>
import Cookies from 'js-cookie' 
export default {
      data () {
          return {
              passwordType: 'password',
              errorMsg: '',
              loginForm: {
                 user: 'user',
                 password: '' 
              },
              rules: {
                  user: [
                    { required: true,message: '账号不能为空',trigger: 'blur' }
                  ],
                  password: [
                    { required: true,message: '密码不能为空',trigger: 'blur' }
                  ]
              }
          }
      },
      methods: {
          showPw: function(){
              if(this.passwordType == 'password'){
                  this.passwordType = 'text';
              }else {
                  this.passwordType = 'password';
              }
          },
          handleSubmit: function(){
              this.$refs.loginForm.validate((valid) => {
                  if(valid){
                    this.$post('/api/login',{user:this.loginForm.user,password:this.loginForm.password})
                     .then((data) =>{
                         if(data.code != '200'){
                           this.$Message.error(data.msg);
                         } else {
                            Cookies.set('TokenKey',data.obj);
                            this.$router.push('/home')
                         }
                     })  
                  }
              });
          }
      }
};
</script>