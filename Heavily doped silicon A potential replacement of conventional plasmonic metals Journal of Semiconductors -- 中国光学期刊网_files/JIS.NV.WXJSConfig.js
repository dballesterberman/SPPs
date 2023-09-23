/* --------------------------------------------------------------------------- */
/*
 * function: WXJSConfig(appId, timestamp, nonceStr, signature, title, link, imgUrl, desc)
 * desc: 整合微信 JSSDK 自定义链接分享
 * author: jokechen
 * time: 2022-07-03 19:16:33
 * 
 */
function WXJSConfig(appId, timestamp, nonceStr, signature, title, link, imgUrl, desc) {
    // 微信分享 STD
    //console.log("--- wx std ---");
    console.log(signature);
    console.log(imgUrl);
    // 微信 JSBridge 配置
    wx.config({
        debug: false,// true调试模式, 调用的所有 api 的返回值会在客户端 alert, pc 端 log?
        appId: appId,//必填，公众号唯一标识
        timestamp: timestamp,// 必填，生成签名的时间戳
        nonceStr: nonceStr,//必填，生成签名的随机串
        signature: signature,// 必填，签名
        jsApiList://需要使用的 JS 接口列表 
            [
                'updateTimelineShareData',// 分享到朋友圈（新）
                'updateAppMessageShareData',// 分享给朋友（新）
                'onMenuShareTimeline',// 分享到朋友圈（旧）
                'onMenuShareAppMessage',// 分享给朋友（旧）
                'onMenuShareQQ',// 分享到 QQ（旧）
                'onMenuShareWeibo',// 分享到腾讯微博（旧）
                'onMenuShareQZone'// 分享到 QQ Zone（旧）
            ]
    });
    // 测试接口存在与否
    /*
    wx.checkJsApi({
        jsApiList: ['updateTimelineShareData', 'updateAppMessageShareData', 'chooseImage'], // 需要检测的 JS 接口列表，所有 JS 接口列表见附录2,
        success: function (res) {
            // 以键值对的形式返回，可用的 api 值true，不可用为false
            // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
            console.log("checkJsApi:" + res);
        }
    });
    */
    // config信息验证后会执行 ready 方法，所有接口调用都必须在 config 接口获得结果之后，
    // config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，
    // 则须把相关接口放在 ready 函数中调用来确保正确执行。对于用户触发时才调用的接口，
    // 则可以直接调用，不需要放在 ready 函数中。
    wx.ready(function () {
        // 分享到朋友圈（新）
        wx.updateTimelineShareData({
            title: title, // 分享标题
            desc: desc, // 分享描述
            link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号 JS 安全域名一致
            imgUrl: imgUrl, // 分享图标
            success: function () {
                // 设置成功
                console.log("⭐⭐⭐成功设置分享到朋友圈（新）⭐⭐⭐");
            }
        });
        // 分享到朋友圈（旧）
        wx.onMenuShareTimeline({
            title: title, // 分享标题
            desc: desc, // 分享描述
            link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号 JS 安全域名一致
            imgUrl: imgUrl, // 分享图标
            success: function () {
                console.log("⭐⭐⭐成功设置分享到朋友圈（旧）⭐⭐⭐");
            }
        });
        // 分享给朋友（新）
        wx.updateAppMessageShareData(
            {
                title: title, // 分享标题
                desc: desc, // 分享描述
                link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号 JS 安全域名一致
                imgUrl: imgUrl, // 分享图标
                success: function () {
                    // 设置成功
                    console.log("⭐⭐⭐成功设置分享给朋友（新）⭐⭐⭐");
                }
            });
        // 分享给朋友（旧）
        wx.onMenuShareAppMessage({
            title: title, // 分享标题
            desc: desc, // 分享描述
            link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号 JS 安全域名一致
            imgUrl: imgUrl, // 分享图标
            type: 'link', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果 type 是music或video，则要提供数据链接，默认为空
            success: function () {
                // 设置成功
                console.log("⭐⭐⭐成功设置分享给朋友（旧）⭐⭐⭐");
            }
        });
        // 分享到 QQ（旧）
        wx.onMenuShareQQ({
            title: title, // 分享标题
            desc: desc, // 分享描述
            link: link, // 分享链接
            imgUrl: imgUrl, // 分享图标
            success: function () {
                // 用户确认分享后执行的回调函数
                console.log("⭐⭐⭐成功设置分享到 QQ（旧）⭐⭐⭐");
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });
        // 分享到腾讯微博（旧）
        wx.onMenuShareWeibo({
            title: title, // 分享标题
            desc: desc, // 分享描述
            link: link, // 分享链接
            imgUrl: imgUrl, // 分享图标
            success: function () {
                // 用户确认分享后执行的回调函数
                console.log("⭐⭐⭐成功设置分享到腾讯微博（旧）⭐⭐⭐");
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });
        // 分享到 QQ Zone（旧）
        wx.onMenuShareQZone({
            title: title, // 分享标题
            desc: desc, // 分享描述
            link: link, // 分享链接
            imgUrl: imgUrl, // 分享图标
            success: function () {
                // 用户确认分享后执行的回调函数
                console.log("⭐⭐⭐成功设置分享到 QQ Zone（旧）⭐⭐⭐");
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });

    });
    // config信息验证失败会执行 error 函数，如签名过期导致验证失败，
    // 具体错误信息可以打开 config 的debug模式查看，也可以在返回的 res 参数中查看，
    // 对于 SPA 可以在这里更新签名。
    wx.error(function (res) {
        console.log(res);
    });
    //console.log("--- wx end ---");
    // 微信分享 END
}