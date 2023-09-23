/* --------------------------------------------------------------------------- */
var TAB_LINE_ADDED = 0;// 底线长度比菜单项单元长度额外增加一点点
/* --------------------------------------------------------------------------- */
/*
 * function: linkFocusLine(eid, order, time)
 * desc: 为指定 jQuery 元素下面的菜单（.item）提供滚动的亮线指示
 * author: jokechen
 * time: 2022-04-03 21:29:33
 * 
 */
function linkFocusLine(eid, order, time) {
    var navLinks = $(eid + " .item"),
        navLinksLine = $(eid + " .tabLine"),
        tabIndex, navLinksLength = navLinks.length,
        navLinksWidth = [],
        navLinksPosition = [],
        defaultPosition = order,
        currentLink = navLinks.eq(order),
        linkPaddingLeft = parseInt(currentLink.css("padding-left")),
        linkPaddingRight = parseInt(currentLink.css("padding-right"));
    for (var i = 0; i < navLinksLength; i++) {
        navLinksWidth[i] = navLinks.eq(i).width() + linkPaddingLeft + TAB_LINE_ADDED;
        navLinksPosition[i] = navLinks.eq(i).position().left - (TAB_LINE_ADDED - linkPaddingLeft) / 2.0;
    }
    navLinks.mouseover(function () {
        $(eid + " i:animated").stop();
        tabIndex = $(this).index();
        navLinksLine.animate({ width: navLinksWidth[tabIndex], left: navLinksPosition[tabIndex] }, time);
    });
    navLinks.mouseout(function () {
        $(eid + " i:animated").stop();
        //tabIndex = $(this).index();
        navLinksLine.animate({ width: [navLinksWidth[defaultPosition], 'swing'], left: navLinksPosition[defaultPosition] }, time);
    });
    if (currentLink.css("display") == "none")
    {
        navLinksLine.css("display", "none");
    };
    currentLink.addClass("active");
    //navLinks.eq(order).addClass(" active");
    //defaultPosition = order;
    navLinksLine.animate({ width: navLinksWidth[defaultPosition], left: navLinksPosition[defaultPosition] }, time);
}

/* --------------------------------------------------------------------------- */

/* --------------------------------------------------------------------------- */

/* --------------------------------------------------------------------------- */

/* --------------------------------------------------------------------------- */