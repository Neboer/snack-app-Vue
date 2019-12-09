<template>
  <div style="text-align: center;margin-top: 100px">
    <img src="../assets/logo-bg.png" alt="snack-logo">
    <a-form class="login-form"
            id="components-form-demo-normal-login"
            :form="form"
            @submit="handleSubmit"
    >
      <a-form-item>
        <a-input v-decorator="[
          'username',
          { rules: [{ required: true, message: 'Please input your username!' }] }
        ]"
                 placeholder="Username"
        >
          <a-icon
                  slot="prefix"
                  type="user"
                  style="color: rgba(0,0,0,.25)"
          />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
                v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] }
        ]"
                type="password"
                placeholder="Password"
        >
          <a-icon
                  slot="prefix"
                  type="lock"
                  style="color: rgba(0,0,0,.25)"
          />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-checkbox
                v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true
          }
        ]"
        >
          Remember me
        </a-checkbox>
        <a
                class="login-form-forgot"
                href=""
        >
          Forgot password
        </a>
        <a-button
                type="primary"
                html-type="submit"
                class="login-form-button"
        >
          Log in
        </a-button>
        Or <a href="">
        register now!
      </a>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>

    export default {
        beforeCreate() {
            this.form = this.$form.createForm(this);
        },
        props: {
            isHidden: {
                type: Boolean
            }
        },
        methods: {
            handleSubmit: function (e) {
                e.preventDefault();
                this.form.validateFields((err, values) => {
                    if (!err) {
                        // console.log('Received values of form: ', values);
                        this.$emit('login', {username: values.username, password: values.password});
                        // this.experinment()
                    }
                });
            }
        }
    };
</script>
<style>
  .login-form {
    max-width: 300px;
    text-align: center;
    margin: auto;
  }

  .login-form-forgot {
    float: right;
  }

  .login-form-button {
    width: 100%;
  }
</style>
