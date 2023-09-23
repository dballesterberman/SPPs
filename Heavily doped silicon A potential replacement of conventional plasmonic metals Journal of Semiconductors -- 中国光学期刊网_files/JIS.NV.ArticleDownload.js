$(document).ready(function () {

    // 下载论文的各类型文件
    $("#ASResultOK").click(function () {
        var ids = "";
        var type = $("#ASResultTo").val();
        $("input:checkbox[name='choose']:checked").each(function () {
            ids += $(this).val() + ";";
        });

        if (ids == "" || ids.replace(";", "") == "") {
            alert("请选择要导出的论文");
            return;
        }
        else {

            if (type == "ref") {
                window.open("/Articles/GetRefText/" + ids);
            }
            else if (type == "txt") {
                window.open("/Articles/GetText/" + ids);
            }
            else if (type == "xml") {
                window.open("/Articles/GetXML/" + ids);
            }
            else if (type == "enw") {
                window.open("/Articles/GetEndNote/" + ids);
            }
        }
    });
});

// 下载PDF
function getPdf(id) {
    window.open("/Articles/GetArticlePDF/" + id);
}

// 下载PDF - Early Posting
function getEPPdf(id) {
    window.open("/Articles/GetEarlyPostingArticlePDF/" + id);
}

// 下载勘误声明 - pdf/jpg
function getcorrigendum(id) {
    window.open("/Articles/GetCorrigendum/" + id);
}

// 下载引文格式文件 - TXT
function getRef(aid) {
    window.open("/Articles/GetRefText/" + aid);
}

// 下载引文格式文件 - EndNote
function getEndNote(aid) {
    window.open("/Articles/GetEndNote/" + aid);
}

// 下载论文图片
function DownloadArticleImage(url) {
    window.open("/Articles/GetArticleImage?url=" + url);
}