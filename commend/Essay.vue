<template>
    <div class="content">
    <h3>CSS</h3>
        <p>TML 标签被设计为用于定义文档内容，也就是文档结构，为了增强代码
            的可读性，实现网页结构与表现相分离的原则，万维网联盟（W3C），
            肩负起了 HTML 标准化的使命，并在 HTML4 之外创造出样式（Style）。
            CSS 目前最新版本是 CSS3，相对于传统 HTML 的表现而言，CSS 能够对
            网页中对象的位置排版进行像素级的精确控制，拥有对网页对象编辑的能力
            ，易于维护和改版，提高页面浏览速度，使用 CSS 布局页面更符合 W3C 标准，
            他是目前基于文本展示最优秀的表现设计语言。</p>
        <p>选择器就是需要改变样式的 HTML 元素。每条声明由一个属性和一个值组成，
            属性是设置的样式属性（style attribute），每个属性都有一个值，属性和
            值用冒号分隔。CSS 声明总是以分号 ; 结束，声明组以大括号 {...} 括起来。
            为了让 CSS 可读性更强，可以每行只描述一个属性。</p>
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
