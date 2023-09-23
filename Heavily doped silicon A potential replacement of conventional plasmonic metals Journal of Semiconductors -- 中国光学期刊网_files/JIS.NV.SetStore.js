// 收藏 - 资讯详情页
function setStore(rid, sType) {
    $.post("/Account/SetStore", { rid: rid, sType: sType }, function (data) {
        if (data == 1) {
            alert("收藏成功！");
        }
        else if (data == -1) {
            if (confirm("收藏需要登陆账号")) {
                location.href = "/Account/Logon";
            }
        }
        else if (data == 0) {
            alert("取消收藏成功！");
        }
        else if (data == 2) {
            alert("收藏失败！");
        }
        else {
            alert("取消收藏失败！");
        }
    });
}

// 收藏 - 中文期刊
function setJournalStore(rid, sType) {
    // 将点击的元素存储在变量中
    var activeElement = document.activeElement;
    $.post("/Account/SetStore", { rid: rid, sType: sType }, function (data) {
        if (data == 1) {
            alert("收藏成功！");
            activeElement.querySelector(".collect1").style.opacity = 0; // 隐藏img-con图片
            activeElement.querySelector(".collect2").style.opacity = 1; // 显示img-con-hover图片
        }
        else if (data == -1) {
            if (confirm("收藏需要登陆账号")) {
                location.href = "/Account/Logon";
            }
        }
        else if (data == 0) {
            alert("取消收藏成功！");
            activeElement.querySelector(".collect1").style.opacity = 0; // 显示img-con图片
            activeElement.querySelector(".collect2").style.opacity = 1; // 隐藏img-con-hover图片
        }
        else if (data == 2) {
            alert("收藏失败！");
        }
        else {
            alert("取消收藏失败！");
        }
    });
}

// 收藏 - 英文期刊
function setJournalENStore(rid, sType) {
    $.post("/Account/SetStore", { rid: rid, sType: sType }, function (data) {
        if (data == 1) {
            alert("收藏成功！");
            $(".coll-text").html("取消收藏");
        }
        else if (data == -1) {
            if (confirm("收藏需要登陆账号")) {
                location.href = "/Account/Logon";
            }
        }
        else if (data == 0) {
            alert("取消收藏成功！");
            $(".coll-text").html("收藏");
        }
        else if (data == 2) {
            alert("收藏失败！");
        }
        else {
            alert("取消收藏失败！");
        }
    });
}

// 收藏 - 论文
function setArticleStore(rid, sType) {
    // 将点击的元素存储在变量中
    var activeElement = document.activeElement;
    $.post("/Account/SetStore", { rid: rid, sType: sType }, function (data) {
        if (data == 1) {
            alert("收藏成功！");
            activeElement.querySelector(".img-con").style.display = "none"; // 隐藏img-con图片
            activeElement.querySelector(".img-con-hover").style.display = "block"; // 显示img-con-hover图片
        }
        else if (data == -1) {
            if (confirm("收藏需要登陆账号")) {
                location.href = "/Account/Logon";
            }
        }
        else if (data == 0) {
            alert("取消收藏成功！");
            activeElement.querySelector(".img-con").style.display = "block"; // 显示img-con图片
            activeElement.querySelector(".img-con-hover").style.display = "none"; // 隐藏img-con-hover图片
        }
        else if (data == 2) {
            alert("收藏失败！");
        }
        else {
            alert("取消收藏失败！");
        }
    });
}

// 收藏 - 资讯
function setNewsStore(rid, sType) {
    // 将点击的元素存储在变量中
    var activeElement = document.activeElement;
    $.post("/Account/SetStore", { rid: rid, sType: sType }, function (data) {
        if (data == 1) {
            alert("收藏成功！");
            activeElement.querySelector(".img-con").style.display = "none"; // 隐藏img-con图片
            activeElement.querySelector(".img-con-hover").style.display = "block"; // 显示img-con-hover图片
        }
        else if (data == -1) {
            if (confirm("收藏需要登陆账号")) {
                location.href = "/Account/Logon";
            }
        }
        else if (data == 0) {
            alert("取消收藏成功！");
            activeElement.querySelector(".img-con").style.display = "block"; // 显示img-con图片
            activeElement.querySelector(".img-con-hover").style.display = "none"; // 隐藏img-con-hover图片
        }
        else if (data == 2) {
            alert("收藏失败！");
        }
        else {
            alert("取消收藏失败！");
        }
    });
}

// 关注 - 专家
function setStoreExpert(rid, sType) {
    $.post("/Account/SetStore", { rid: rid, sType: sType }, function (data) {
        if (data == 1) {
            alert("关注成功！");
            $(".coll-text").html("取消关注");
        }
        else if (data == -1) {
            if (confirm("关注需要登陆账号")) {
                location.href = "/Account/Logon";
            }
        }
        else if (data == 0) {
            alert("取消关注成功！");
            $(".coll-text").html("关注");
        }
        else if (data == 2) {
            alert("关注失败！");
        }
        else {
            alert("取消关注失败！");
        }
    });
}

// 关注 - 实验室
function setStoreLaboratory(rid, sType) {
    $.post("/Account/SetStore", { rid: rid, sType: sType }, function (data) {
        if (data == 1) {
            alert("关注成功！");
            $(".coll-text").html("取消关注");
        }
        else if (data == -1) {
            if (confirm("关注需要登陆账号")) {
                location.href = "/Account/Logon";
            }
        }
        else if (data == 0) {
            alert("取消关注成功！");
            $(".coll-text").html("关注");
        }
        else if (data == 2) {
            alert("关注失败！");
        }
        else {
            alert("取消关注失败！");
        }
    });
}
