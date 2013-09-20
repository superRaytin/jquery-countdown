kTimer是一款简单小巧的倒计时插件。

# params && 参数
<table>
    <thead>
        <tr>
            <th>参 数</th>
            <th>描 述</th>
        </tr>
    </thead>
    <tbody>
        <tr class="">
            <td width="150">format</td>
            <td>格式化显示信息，支持HTML标签，如：还剩 dd 天 hh 时 mm 分 ss 秒</td>
        </tr>
        <tr class="">
            <td width="150">fromNowOn</td>
            <td>从当前时间起之后的时间段，单位分钟，默认无</td>
        </tr>
        <tr class="">
            <td>endTime</td>
            <td>结束时间，遵守时间格式如：2012/12/31 23:59:59</td>
        </tr>
        <tr class="">
            <td width="150">callback</td>
            <td>倒计时结束之后触发的回调</td>
        </tr>
    </tbody>
</table>

# example && 栗子
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


# changeLog && 更新日志
* 2013-05-06 倒计时增加可设置往后时间段
* 2013-05-06 增加时间结束时回调
* 2013-05-06 时间格式hh小时可不选

# License
本项目基于MIT协议发布

MIT: [http://rem.mit-license.org](http://rem.mit-license.org/) 详见 [LICENSE](/LICENSE) 文件