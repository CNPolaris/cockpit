<template>
    <div class="login-wrap">
        <div class="ms-login">
            <div class="ms-title">跨域异构系统</div>
            <el-form :model="form" :rules="rules" ref="login" label-width="0px" class="ms-content">
                <el-form-item prop="username">
                    <el-input v-model="form.username" placeholder="username">
                        <template #prepend>
                            <el-button icon="el-icon-user"></el-button>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="password" v-model="form.password"
                        @keyup.enter="submitForm()">
                        <template #prepend>
                            <el-button icon="el-icon-lock"></el-button>
                        </template>
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm()">登录</el-button>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
import { ref, reactive } from "vue";
import { useTagsStore } from '../../store/tags'
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import { login, getInfo } from "../../api/login";
export default {
    setup() {
        const router = useRouter();
        const form = reactive({
            username: "",
            password: "",
        });

        const rules = {
            username: [
                {
                    required: true,
                    message: "请输入用户名",
                    trigger: "blur",
                },
            ],
            password: [
                { required: true, message: "请输入密码", trigger: "blur" },
            ],
        };
        const submitForm = () => {
        //   login(form).then(re => {
        //     if(re.code === 2000){
        //       ElMessage.success("登录成功");
        //       localStorage.setItem("ms_username", form.username);
        //       localStorage.setItem("token", re.data.token);
        //       getInfo(re.data.token).then(re => {
        //         localStorage.setItem("ms_avatar", re.data.avatar)
        //       })
        //       router.push("/");
        //     } else {
        //       ElMessage.error("登录失败");
        //     }
        //   })
            if(form.username !== "admin" || form.password !== "admin"){
                ElMessage.error("用户名或密码错误")
            } else {
                ElMessage.success("登录成功")
                localStorage.setItem("ms_username", form.username)
                router.push("/");
            }
            // login.value.validate((valid) => {
            //     if (valid) {
            //         ElMessage.success("登录成功");
            //         localStorage.setItem("ms_username", param.username);
            //         router.push("/");
            //     } else {
            //         ElMessage.error("登录成功");
            //         return false;
            //     }
            // });
        };

        const tags = useTagsStore();
        tags.clearTags();

        return {
            form,
            rules,
            submitForm,
        };
    },
};
</script>

<style scoped>
.login-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(../../assets/img/login-bg.jpg);
    background-size: 100%;
}
.ms-title {
    width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    border-bottom: 1px solid #ddd;
}
.ms-login {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 350px;
    margin: -190px 0 0 -175px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.3);
    overflow: hidden;
}
.ms-content {
    padding: 30px 30px;
}
.login-btn {
    text-align: center;
}
.login-btn button {
    width: 100%;
    height: 36px;
    margin-bottom: 10px;
}
.login-tips {
    font-size: 12px;
    line-height: 30px;
    color: #fff;
}
</style>