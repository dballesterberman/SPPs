/*
 * file: JIS.NV.CopyCitation.js
 * author: jokechen
 * time: 2022-09-08 10:11:38
 * desc:拷贝参考文献引用文本
 */

(function ()
{
    // copy ref this article
    var clipboard = new ClipboardJS('.btncopy');
    clipboard.on('success', function (e) {
        var msg = e.trigger.getAttribute("aria-label");
        alert(msg);
        e.clearSelection();
    });
})();