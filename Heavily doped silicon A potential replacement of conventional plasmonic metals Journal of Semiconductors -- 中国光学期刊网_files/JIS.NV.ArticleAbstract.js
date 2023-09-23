/*
 * 加载相关论文数据
 */
function LoadRelatedArticleData(aid, keys) {
    //加载数据
    $.ajax({
        type: "GET",
        cache: false,
        async: false,
        contentType: "application/json",
        url: "/Articles/GetRelatedArticle",
        data: {
            aid: aid
        },
        dataType: 'json',
        success: function (result) {
            var realResult = eval(result);
            var html = '';
            //console.log("TotalCount: " + realResult.Data.length);
            if (realResult.Data != null && realResult.Data.length != 0) {
                var resultList = realResult.Data; //搜索结果List  

                for (var i = 0; i < resultList.length; i++) {
                    var item = resultList[i];

                    html += '<div class="item clearfix">';
                    html += '<a class="img fl" href="' + item.URL + '" target="_blank">';
                    //html += '<img class="img" src="../../../../../VX/images/abstract4.jpg" lay-src="' + item.Image + '" alt="' + item.Title + '" />';
                    html += '<img class="img img-thumb img-thumbnail" src="' + item.Image + '" alt="' + item.Title + '" />';
                    html += '</a>';
                    html += '<div class="text fr">';
                    html += item.Msg;
                    html += '<a class="link" href="' + item.URL + '" target="_blank">' + item.Title + '</a>';
                    html += '</div>';
                    html += '</div>';
                }
            }
            else {
                html += '<div class="list no-img">加载中...</div>';
            }

            $(".related-article").html(html);
        },
        error: function (err) {
            console.log("加载相关论文失败!【" + err + "】");
            return;
        }
    });
}

/*
 * 加载相关资讯数据
 */
function LoadRelatedNewsData(aid, keys) {
    //加载数据
    $.ajax({
        type: "GET",
        cache: false,
        async: false,
        contentType: "application/json",
        url: "/Articles/GetRelatedNews",
        data: {
            aid: aid
        },
        dataType: 'json',
        success: function (result) {
            var realResult = eval(result);
            var html = '';
            //console.log("TotalCount: " + realResult.Data.length);
            if (realResult.Data != null && realResult.Data.length != 0) {
                var resultList = realResult.Data; //搜索结果List  

                for (var i = 0; i < resultList.length; i++) {
                    var item = resultList[i];

                    html += '<div class="item clearfix">';
                    html += '<a class="img fl" href="' + item.URL + '" target="_blank">';
                    //html += '<img class="img" src="../../../../../VX/images/abstract4.jpg" lay-src="' + item.Image + '" alt="' + item.Title + '" />';
                    html += '<img class="img img-thumb img-thumbnail" src="' + item.Image + '" alt="' + item.Title + '" />';
                    html += '</a>';
                    html += '<div class="text fr">';
                    html += item.Msg;
                    html += '<a class="link" href="' + item.URL + '" target="_blank">' + item.Title + '</a>';
                    html += '</div>';
                    html += '</div>';
                }
            }
            else {
                html += '<div class="list no-img">加载中...</div>';
            }

            $(".related-news").html(html);
        },
        error: function (err) {
            console.log("加载相关资讯失败!【" + err+"】");
            return;
        }
    });
}