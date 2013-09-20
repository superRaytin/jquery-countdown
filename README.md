kTimer - jQuery倒计时插件
======

# 参数
* format : 'hh : mm : ss', // 时间显示格式，支持HTML标签
* endTime : '2012/12/31 23:59:59', // 结束时间
* fromNowOn : 0, // 从当前时间起之后的时间段，单位分钟
* callback: function(){} // 回调

# 栗子
15分钟倒计时：

```javascript
<script type='text/javascript'>
    $('#box').kTimer({
        format: '剩余时间：dd天 hh小时 mm分钟 ss秒',
        endTime: '2013/12/30 23:59:59',
        fromNowOn: 15,
        callback: function(){
            alert('时间到了！');
        }
    });
</script>
```


# 更新日志
* 2013-05-06 倒计时增加可设置往后时间段
* 2013-05-06 增加时间结束时回调
* 2013-05-06 时间格式hh小时可不选

# License
本项目基于MIT协议发布

MIT: [http://rem.mit-license.org](http://rem.mit-license.org/) 详见 [LICENSE](/LICENSE) 文件