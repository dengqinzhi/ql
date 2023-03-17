
1
/**
2
 * @ 临渊
3
 * 功能：小米运动刷步数
4
 * 日期：6-6
5
 * 变量格式：export xmbs='小米运动&密码&步数@xxx '  多个账号用@分割 
6
 * 定时一天一次
7
 * 更新成换行登录
8
 */
9
​
10
 const $ = new Env('小米步数');
11
 const notify = $.isNode() ? require('./sendNotify') : '';
12
 const Notify = 1; //0为关闭通知，1为打开通知,默认为1
13
 const debug = 0; //0为关闭调试，1为打开调试,默认为0
14
 //////////////////////
15
 let xmbs = ($.isNode() ? process.env.xmbs : $.getdata("xmbs")) || "";
16
 let xmbsArr = [];
17
 let data = ''; 
18
 let msg = '';
19
 let back = 0;
20
 
21
 
22
 !(async () => {
23
 
24
     if (!(await Envs()))
25
         return;
26
     else {
27
 
28
​
29
 
30
         console.log(`\n\n=========================================    \n脚本执行 - 北京时间(UTC+8)：${new Date(
31
             new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 +
32
             8 * 60 * 60 * 1000).toLocaleString()} \n=========================================\n`);
33
​
34
 
35
         console.log(`\n=================== 共找到 ${xmbsArr.length} 个账号 ===================`)
36
 
37
         if (debug) {
38
             console.log(`【debug】 这是你的全部账号数组:\n ${xmbsArr}`);
39
         }
40
 
41
 
42
         for (let index = 0; index < xmbsArr.length; index++) {
43
 
44
 
45
             let num = index + 1
46
             console.log(`\n========= 开始【第 ${num} 个账号】=========\n`)
47
 
48
             bs = xmbsArr[index].split('&');
