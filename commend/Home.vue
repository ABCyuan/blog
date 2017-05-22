<template>
    <div class="content">
        <h3>HTML</h3>
        <p>语义化：说的通俗点就是：明白每个标签的用途（在什么情况下我可以使用这
            个标签才合理）比如，网页上的文章的标题就得用标题标签，网页上的各个栏目
            的栏目名称也可以使用标题标签</p>
        <p>在浏览器上显示的样式为斜体，如果不喜欢斜体，当然可以，可以在后面的课程
            中使用css样式来修改它标签的默认样式</p>
        <p>CSS 样式表极大地提高了工作效率：样式通常保存在外部的 .css 文件中，
            通过仅仅编辑一个简单的 CSS 文档，外部样式表有能力同时改变站点中所有
            页面的布局和外观。</p>
        <p>CSS 指层叠样式表 (Cascading Style Sheets)，是一种用来表现 HTML 文档样
            式的语言，样式定义如何显示 HTML 元素，是能够真正做到网页表现与结构分离
            的一种样式设计语言。样式通常存储在样式表中，外部样式表通常存储在 CSS
            文件中，多个样式定义可层叠为一</p>
    </div>
</template>
<script>

</script>
<style>
    .content{
        position: absolute;
        right: 150px;
        width: 600px;
        height: 500px;
        padding: 5px 30px;
    }
    .content p{
        padding-top: 3px;
        letter-spacing: 2px;
        font-size: 14px;
    }
</style>
