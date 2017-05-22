<template>
    <div id="form">
        <form  >
            <p>姓&nbsp;&nbsp;名：<input type="text" v-model="username"></p>
            <p>Email：<input type="email" v-model="email"></p>
            <p>密&nbsp;&nbsp;码：<input type="password" v-model="password"></p>
            <input type="button" value="注册" id="register" v-on:click="add">
            <input type="reset" value="重置" id="reset">
        </form>
        <div class="txt">
            <h3>用户信息表</h3>
        </div>
        <div id="userMessage">
            <table>
                <tr>
                    <th>序列号</th>
                    <th>姓名</th>
                    <th>邮箱</th>
                    <th>密码</th>
                    <th>操作</th>
                </tr>
                <tr v-for="item in userData">
                    <td>{{$index+1}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.email}}</td>
                    <td>{{item.password}}</td>
                    <td>
                        <!--获取序列号-->
                        <button    v-on:click="nowIndex=$index,deletMsg(nowIndex)">删除</button>
                    </td>
                </tr>
            </table>
            <input type="button" value="删除全部" id="deleteAll" v-show="userData.length!==0"
                   v-on:click="nowIndex=-2,deletMsg(nowIndex)">
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                userData:[],
                username:'',
                password:'',
                email:"",
                nowIndex:-100
            }
        },
        methods: {
            add: function () {
                this.userData.push({
                    name: this.username,
                    password: this.password,
                    email: this.email
                });
                this.username="",this.password="",this.email="";
            },
            deletMsg:function (n) {
                if(n==-2){
                    this.userData=[]
                }
                else {
                    this.userData.splice(n,1)
                }
            }
        }
    }
</script>
<style>
#form{
    width: 700px;
    position: absolute;
    right: 90px;
}
#inform p{
    margin-left: 160px;
}
input{
    margin-top: 20px;
    width: 400px;
    height: 30px;
}
#reset{
    display: inline-block;
    width: 80px;
    height: 30px;
    background: #ff7f7d;
    margin-left: 200px;
    cursor: pointer;
    outline: none;
 }
#register{
    display: inline-block;
    width: 80px;
    height: 30px;
    background: #7179d8;
    margin-left: 70px;
    cursor: pointer;
    outline: none;
}
#userMessage{
    border: 1px solid #ff814e;
    height: 400px;
    width: 500px;
}
table{
    border-collapse: collapse;
}
th{
    width: 120px;
    height: 30px;
    border: 1px solid #ff814e;
}
.txt{
    width: 503px;
    text-align: center;
}
td{
    text-align: center;
    width: 120px;
    height: 30px;
    border: 1px solid #ff814e;
}
#deleteAll{
    width: 80px;
    height: 30px;
    background: #ff7f7d;
    cursor: pointer;
}
</style>