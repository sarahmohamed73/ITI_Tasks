// Question 1
$("div>span").css("color","blue");
// Question 2
$("div>.myclass").css("color","blue");
// Question 3
$("div.myclass").css("color","blue");
// Question 4
$("ul:has(ul):eq(0) ul>li:eq(0)").css("color","tomato");
$("ul:eq(0) ul>li:eq(3)").css("color","dodgerblue");
$("ul:eq(0) ul>li:eq(4)").css("color","orange");
// Question 5
$("ul:has(ul):eq(1) ul>li:eq(0), ul:has(ul):eq(1) ul>li:eq(3), ul:has(ul):eq(1) ul>li:eq(4)").css("color","tomato");