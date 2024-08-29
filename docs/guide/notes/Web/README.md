---
date: 2024-08-16
category:
  - JavaScript
tag:
  - JavaScript
archive: true
---

# 右键菜单

* 点击鼠标右键显示对应菜单，通过`contextmenu`事件实现
* `contextmenu`事件默认行为是显示浏览器自带的右键菜单，可以通过`event.preventDefault()`阻止默认行为
* 自定义右键菜单，需要创建一个`div`元素，设置其`contextmenu`事件，在事件处理函数中，根据鼠标点击位置设置`div`元素的显示位置，并显示出来
* 在`div`元素中添加菜单项`ul`，`ul`设置其`click`事件，在事件处理函数中，执行对应的操作

``` js

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    html, body {
        padding: 0;
        margin: 0;
    }
    #menu_content {
        width: 100%;
        height: 100vh;
        background-color: #9b9595;
        position: relative;
    }

   .menu {
        width: 100px;
        height: 100px;
        background-color: #ffffff;
        position: absolute;
        border-radius: 5px;
        box-shadow: #eeeeee 0px 0px 10px;
        list-style-type: none;
        display: none;
    }

   .menu li {
        width: 100%;
        height: 30px;
        line-height: 30px;
        cursor: pointer;
    }
</style>

<body>
    <div id="menu_content" oncontextmenu="return false;">
        <ul class="menu">
            <li data-action="copy">复制</li>
            <li data-action="cut">粘贴</li>
            <li data-action="search">搜索</li>
        </ul>
    </div>
</body>
<script>
    let menu = document.querySelector('.menu');
    // 右键显示菜单
    document.getElementById("menu_content").addEventListener('contextmenu', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        const width = window.innerWidth;
        const height = window.innerHeight;
        menu.style.display = 'block';
        const menuWidth = menu.offsetWidth;
        const menuHeight = menu.offsetHeight;
        if (x + menuWidth > width) {
            menu.style.left = width - menuWidth + 'px';
        } else {
            menu.style.left = x + 'px';
        }
        if (y + menuHeight > height) {
            menu.style.top = y - menuHeight + 'px';
        } else {
            menu.style.top = y + 'px';
        }
        e.preventDefault();
    });
    // 点击其他地方隐藏菜单
    document.getElementById('menu_content').addEventListener('click', (e) => {
        menu.style.display = 'none';
        menu.style.top = 0 + 'px';
        menu.style.left = 0 + 'px';
    });
    // 点击菜单项
    menu.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            e.stopPropagation();
            const action = e.target.getAttribute('data-action');
            switch (action) {
                case 'copy':
                    console.log('copy');
                    break;
                case 'cut':
                    console.log('cut');
                    break;
                case 'search':
                    console.log('search');
                    break;
            }
        }
    });
</script>

</html>

```

---
