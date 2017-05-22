<template>
  <div id="app">
    <div class="logo"></div>
    <div class="header">
      <p class="name">ABC袁的博客</p>
      <div class="nav">
      <ul>
        <li><a v-link="{path:'/Home'}">首页</a></li>
        <li><a v-link="{path:'/Essay'}">随笔</a></li>
        <li><a v-link="{path:'/Message'}">留言板</a></li>
        <li><a v-link="{path:'/Control'}">注册</a></li>
      </ul>
      </div>
    </div>
    <div id="body">
      <div class="l">
        <div class="t">
          <p>昵称:ABC袁</p>
          <p>园龄:2年</p>
          <p>粉丝人数:100</p>
          <p>关注人数:0</p>
          <p><a href="">加关注</a></p>
        </div>
        <div class="b">
            <input type="text" v-model="baidu" @keyup="get($event)" class="box2"
                   @keydown.down="changedown()" @keydown.up.prevent="changeup()">
          <input type="button" value="百度"  @click="search">
          <div id="list">
            <h4><a href="#">html(5)基础知识</a></h4>
            <h4><a href="#">css(3)</a></h4>
            <h4><a href="#">javascript基础知识</a></h4>
            <h4><a href="#">jquery基础知识</a></h4>
          </div>
        </div>
        </div>
      <div class="r">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
        mydata:[],
        baidu:"",
        now:-1,
    }
  },
  methods: {
      get: function (ev) {
          if (ev.keyCode == 38 || ev.keyCode == 40)return;
          if (ev.keyCode == 13) {
              window.open("https://www.baidu.com/s?wd=" + this.baidu);
              this.t1 = "", this.now = -1
          }
      },
      search:function () {
          {window.open("https://www.baidu.com/s?wd="+this.baidu);
              this.t1=""}
      },
  }
}
</script>

<style scope>
  body {
  margin: 0;
  font-family: Helvetica, sans-serif;
  background:url("../images/boke-header.jpg");
  }
  .logo{
    height: 120px;
    width: 100%;
  }
  .header{
    position: relative;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #606060;
    font-family: "微软雅黑","黑体";
  }
   .name{
    position: absolute;
    font-size: 35px;
    left: 50px;
    bottom: 20px;
    color: #6b6b6b;
  }
  .nav{
    position: absolute;
    height: 50px;
    width: 580px;
    background: #f8f8f8;
    right: 300px;
  }
  .nav a{
    text-decoration: none;
    color: #404040;
  }
   li{
    display: block;
    float: left;
    list-style: none;
     margin-left: 70px;
  }
   .l{
     float: left;
     height: 800px;
     width: 352px;
     position: relative;
   }
  .l .t{
    margin-top: 20px;
    width: 300px;
    height: 200px;
    font-size: 13px;
    padding: 5px 20px;
    margin-left: 20px;
  }
  .l .b{
    height: 300px;
    width: 300px;
    margin-left: 20px;
  }
  #list{
    margin-top: 40px;
    left: 40px;
    position: absolute;
  }
  #list a{
    text-decoration: none;
    color: #4372bf;
  }
  .l input[type="text"]{
    width: 210px;
    height: 30px;
  }
.l input[type="button"]{
  width: 55px;
  height: 35px;
}
  .r{
    float: right;
    width: 980px;
    height: 800px;
    border-left: 1px solid #6b6b6b;
    background: #f2f4f6;
  }
</style>
