<template>
    <div id="message2" >
        <textarea  name="txt2" id="txt2" cols="100" rows="7" v-model="message_content" ></textarea>
        <input  type="button" value="提交评论" @click="get" id="btn2">
    </div>
    <div id="no-message">
        <h4 v-show="message_data.length==0">暂无留言</h4>
    </div>
    <div id="message3" v-for="item in message_data">
        <p id="message_content">{{item.message_content}}</p>
        <p id="message_time">{{item.message_time}}</p>
        <p id="message_id">{{item.message_id}}</p>
        <p><input type="button" value="删除评论" v-on:click="nowIndex=$index,deletMsg(nowIndex)"></p>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                message_data:[],
                message_content:"",
                message_time:"2017-4-26",
                message_id:"xxxxxx",
                nowIndex:-100
            }
        },
        methods: {
            get: function () {
                this.message_data.push({
                    message_content: this.message_content,
                    message_time: this.message_time,
                    message_id: this.message_id
                })
                this.message_content="";
            },
            deletMsg:function (n) {
                    this.message_data.splice(n,1)
            }
        }
    }
</script>
<style>
  #message2{
      margin-top: 50px;
  }
  #txt2{
    padding: 10px;
    display: block;
    resize: none;
    margin-left: 112px;
    -moz-margin-left: 80px;
    }
  #btn2{
      width: 100px;
      height: 50px;
      background: #5facd8;
      margin-top: 30px;
      margin-left: 720px;
  }
  #no-message{
      width: 800px;
      text-align: center;
      height: 50px;
  }
  #message3{
      width: 600px;
      height: 100px;
      border: 1px solid #404040;
      margin-left: 170px;
      position: relative;
    }
  #message3 input[type="button"]{
      display: block;
      position: absolute;
      height: 20px;
      width: 70px;
      right: 30px;
      bottom: 20px;
  }
  #message_time {
      position: absolute;
      left: 10px;
      bottom: 3px;
  }
  #message_content{
      position: absolute;
      left: 10px;
      top: 10px;
  }
  #message_id {
      position: absolute;
      right: 150px;
      bottom: 3px;
  }
</style>