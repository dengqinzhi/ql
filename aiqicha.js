1
/*
2
0 0 0/5 * * ? https://ghproxy.com/github.com/shiunke/Scripts/blob/unke/aiqicha.js 爱企查任务
3
 爱企查下载地址：https://aiqicha.baidu.com/m/usercenter/inviteCode?uid=xlTM-TogKuTwvdzTq9EFdGvdxrmJpAANFgmd
4
 手动抓取CK:https://passport.baidu.com/v2/?login
5
 一个BDUSS=xxxxx;就行了
6
 建议每5个小时执行一次 要不然跑不完 可能有一些任务跑不完 如:高级搜索 浏览监控日报 属正常现象 (百度抽风)
7
 多账号请用@分割Cookie  格式:ck1@ck2@ck2 青龙变量aqcCookies qx和v2p不可用
8
 批量查询任务暂时无法完成 
9
 感谢Wenmoux的爱妻查任务脚本 Wenmoux github地址:https://github.com/Wenmoux/checkbox 作者仅完善和修改
10
*/
11
const $ = new Env("爱企查日常任务");
12
const axios = require("axios");
13
const notify = $.isNode() ? require("./sendNotify") : "";
14
aqcookie = $.isNode() ? process.env.aqcCookies : "";
15
aqcookieArr = [];
16
​
17
var sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
18
let oo = {
19
  CX10002: "每日签到",
20
  CX10001: "每日登陆",
21
  CX11001: "查询企业",
22
  CX11002: "查询老板",
23
  CX11003: "查询老赖",
24
  CX11004: "查询商标",
25
  CX11005: "查询地图",
26
  CX11006: "浏览新闻",
27
  CX11007: "浏览监控日报",
28
  CX11009: "查询关系",
29
  CX11010: "批量查询",
30
  CX12001: "添加监控",
31
  CX12002: "添加关注",
32
  CX12005: "分享任务",
33
  CX12006: "邀请任务",
34
  CX12007: "高级搜索",
35
  CX12008: "高级筛选",
36
};
37
​
38
const headers = {
39
  "User-Agent":
40
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Safari/537.36",
41
  referer:
42
    "https://aiqicha.baidu.com/m/s?t=3&q=%E5%B0%8F%E7%B1%B3&VNK=e73b55ef",
43
  "X-Requested-With": "XMLHttpRequest",
44
  Host: "aiqicha.baidu.com",
45
  cookie: "",
46
};
47
​
48
function rand() {
 
