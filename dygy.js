
1
/**
2
 * 抖音果园 
3
 * cron 17,49 8,12,17,23 * * *  dygy.js
4
 * 
5
 * 抖音果园   入口：抖音点击"我"- "抖音商城" - "果园"   有的号可能没有 ，暂时不知道原因
6
 * 3-29    签到任务、新手彩蛋、每日免费领水滴、三餐礼包、宝箱、盒子领取  初步完成   脚本刚写完，难免有bug，请及时反馈  ；ck有效期测试中 
7
 * 3-29-2  更改签到逻辑 ， 修复每天免费水滴bug
8
 * 3-30    修改整体逻辑，简化通知
9
 * 3-30-2  修复时间判断bug,增加脚本版本号（一半功能）
10
 * 3-31    修复选择宝箱bug，默认开启debug模式，方便排错，不需要的自觉行关闭
11
 * 4-1     修复几个循环bug ，关闭默认debug模式了
12
 * 
13
 * 抓包记得先打开果园，然后再打开抓包软件，就能正常抓包了   关于抖音的任务都没网络，抓不到包
14
 * 
15
 * 感谢所有测试人员 
16
 * ========= 青龙 =========
17
 * 变量格式：  
18
 * 必填变量：export dygyCookies='账号1 ck @ 账号2 ck'  多个账号用 @分割 
19
 * 可选变量：export dygyUA='你的UA'
20
 * 
21
 * 抓 minigame.zijieapi.com  的包  浇一次水即可获取ck  
22
 * 
23
 */
24
const jsname = "抖音果园";
25
const $ = Env(jsname);
26
const notify = $.isNode() ? require('./sendNotify') : '';
27
const Notify = 1; //0为关闭通知，1为打开通知,默认为1
28
const debug = 0; //0为关闭调试，1为打开调试,默认为0
29
​
30
​
31
let dygyCookies = ($.isNode() ? process.env.dygyCookies : $.getdata('dygyCookies')) || "";
32
let UA = ($.isNode() ? process.env.dygyUA : $.getdata('dygyUA')) || 'User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148';
33
​
34
let dygyCookiesArr = [];
35
let msg = '';
36
let watering_unm = 1;
37
let challenge_num_max = 1;
38
let choose_gold_num = 1;
39
​
40
​
41
​
42
!(async () => {
43
​
44
    if (!(await Envs()))  //多账号分割 判断变量是否为空  初步处理多账号
45
        return;
46
    else {
47
​
48
        console.log(`本地脚本4-1 , 远程脚本xxxx(等我会写了加上，哈哈哈哈，自己根据本地判断吧！)`);
