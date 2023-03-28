/*

软件名: ios/番茄小说

作者: 执意Ariszy 修复@Origami Juvenile

#点击签到获取Cookie,点击右下角开宝箱看一个视频获取headers


#可以完成读书任务、广告视频、开宝箱、宝箱广告视频


#⚠️因人而异，并非所有人可以完成广告视频和宝箱视频⚠️


更新时间：2022.3.24
1.解决广告视频只能提交两次
2.新增开宝箱和宝箱广告视频


更新时间：2022.3.26
# 解决与宝箱任务频繁请求
1.修改签到任务只在早上运行
2.修改视频任务固定每小时只执行一次（宝箱视频不影响）


[mitm]
hostname = *.snssdk.com

#圈x
[rewrite local]
luckycat/novel/v1/task/sign_in/* url script-request-header fqxs.js

luckycat/novel/v1/task/done/excitation_ad_treasure_box/* url script-request-header fqxs.js





#获取当前日期时间及其它操作汇总
var myDate = new Date(); 
myDate.getYear();    //获取当前年份(2位) 
myDate.getFullYear();  //获取完整的年份(4位,1970-????) 
myDate.getMonth();    //获取当前月份(0-11,0代表1月) 
myDate.getDate();    //获取当前日(1-31) 
myDate.getDay();     //获取当前星期X(0-6,0代表星期天) 
myDate.getTime();    //获取当前时间(从1970.1.1开始的毫秒数) 
myDate.getHours();    //获取当前小时数(0-23) 
myDate.getMinutes();   //获取当前分钟数(0-59) 
myDate.getSeconds();   //获取当前秒数(0-59) 
myDate.getMilliseconds();  //获取当前毫秒数(0-999) 
myDate.toLocaleDateString();   //获取当前日期 
var mytime=myDate.toLocaleTimeString();   //获取当前时间 
myDate.toLocaleString( );    //获取日期与时间 




#日期时间脚本库方法列表
Date.prototype.isLeapYear 判断闰年 
Date.prototype.Format 日期格式化 
Date.prototype.DateAdd 日期计算 
Date.prototype.DateDiff 比较日期差 
Date.prototype.toString 日期转字符串 
Date.prototype.toArray 日期分割为数组 
Date.prototype.DatePart 取日期的部分信息 
Date.prototype.MaxDayOfDate 取日期所在月的最大天数 
Date.prototype.WeekNumOfYear 判断日期所在年的第几周 
StringToDate 字符串转日期型 
IsValidDate 验证日期有效性 
CheckDateTime 完整日期时间检查 
daysBetween 日期天数差 


*/
const $ = new Env('🍅番茄小说')
const notify = $.isNode() ?require('./sendNotify') : '';
let status,no;
status = (status = ($.getval("xfqxsstatus") || "1") ) > 1 ? `${status}` : ""; // 账号扩展字符
const fqxsurlArr = [],fqxsbxsphdArr=[],fqxsbodyArr = [],fqxsbxurlArr=[],fqxscookieArr=[],fqxstokenArr=[],fqxsuaArr=[],fqxsxsscookieArr=[]

//let fqxsbxsphd= $.getdata('fqxsbxsphd')
let fqxsurl = $.getdata('fqxsurl')
let fqxsbxurl = $.getdata('fqxsbxurl')
let xfqxs= $.getdata('xfqxs')
let host = $.getdata('host')
//let fqxsbody= $.getdata('fqxsbody')
let fqxscookie = $.getdata('fqxscookie')
let fqxstoken = $.getdata('fqxstoken')
let fqxsua = $.getdata('fqxsua')
let fqxsxsscookie = $.getdata('fqxsxsscookie')
let tz = ($.getval('tz') || '1');//0关闭通知，1默认开启
const logs =0;//0为关闭日志，1为开启
var hour=''
var minute=''
message = ''


if ($.isNode()) {
   hour = new Date( new Date().getTime() + 8 * 60 * 60 * 1000 ).getHours();
   minute = new Date( new Date().getTime() + 8 * 60 * 60 * 1000 ).getMinutes();
}else{
   hour = (new Date()).getHours();
   minute = (new Date()).getMinutes();
}
//CK运行
let isfqxsck = typeof $request !== 'undefined'
if (isfqxsck) {
   fqxsck();
   $.done()
}
if ($.isNode()) {
   if (process.env.FQXSURL && process.env.FQXSURL .indexOf('#') > -1) {
   fqxsurl = process.env.FQXSURL .split('#');
   console.log(`您选择的是用"#"隔开\n`)
  }
  else if (process.env.FQXSURL && process.env.FQXSURL .indexOf('\n') > -1) {
   fqxsurl = process.env.FQXSURL .split('\n');
   console.log(`您选择的是用换行隔开\n`)
  } else {
   fqxsurl = process.env.FQXSURL .split()
  };
  if (process.env.FQXS&& process.env.FQXS.indexOf('#') > -1) {
   fqxs= process.env.FQXS.split('#');
   console.log(`您选择的是用"#"隔开\n`)
  }
  else if (process.env.FQXS&& process.env.FQXS.indexOf('\n') > -1) {
   fqxs= process.env.FQXS.split('\n');
   console.log(`您选择的是用换行隔开\n`)
  } else {
   fqxs= process.env.FQXS.split()
  };
  if (process.env.FQXSBODY&& process.env.FQXSBODY.indexOf('#') > -1) {
   fqxsbody= process.env.FQXSBODY.split('#');
   console.log(`您选择的是用"#"隔开\n`)
  }
  else if (process.env.FQXSBODY&& process.env.FQXSBODY.indexOf('\n') > -1) {
   fqxsbody= process.env.FQXSBODY.split('\n');
   console.log(`您选择的是用换行隔开\n`)
  } else {
   fqxsbody= process.env.FQXSBODY.split()
  };
   if (process.env.FQXSBXURL && process.env.FQXSBXURL .indexOf('#') > -1) {
   fqxsbxurl = process.env.FQXSBXURL .split('#');
   console.log(`您选择的是用"#"隔开\n`)
  }
  else if (process.env.FQXSBXURL && process.env.FQXSBXURL .indexOf('\n') > -1) {
   fqxsbxurl = process.env.FQXSBXURL .split('\n');
   console.log(`您选择的是用换行隔开\n`)
  } else {
   fqxsbxurl = process.env.FQXSBXURL .split()
  };
   if (process.env.FQXSBXSPHD && process.env.FQXSBXSPHD .indexOf('#') > -1) {
   fqxsbxsphd = process.env.FQXSBXSPHD .split('#');
   console.log(`您选择的是用"#"隔开\n`)
  }
  else if (process.env.FQXSBXSPHD && process.env.FQXSBXSPHD .indexOf('\n') > -1) {
   fqxsbxsphd = process.env.FQXSBXSPHD .split('\n');
   console.log(`您选择的是用换行隔开\n`)
  } else {
   fqxsurl = process.env.FQXSBXSPHD .split()
  };
    console.log(`============ 脚本执行-国际标准时间(UTC)：${new Date().toLocaleString()}  =============\n`)
    console.log(`============ 脚本执行-北京时间(UTC+8)：${new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toLocaleString()}  =============\n`)
 } else {
   fqxsurlArr.push($.getdata('fqxsurl'))
   fqxsbxurlArr.push($.getdata('fqxsbxurl'))
    //xfqxsArr.push($.getdata('xfqxs'))
    //fqxsbodyArr.push($.getdata('fqxsbody'))
 //fqxsbxsphdArr.push($.getdata('fqxsbxsphd'))
fqxscookieArr.push($.getdata('fqxscookie'))
fqxstokenArr.push($.getdata('fqxstoken'))
fqxsuaArr.push($.getdata('fqxsua'))
fqxsxsscookieArr.push($.getdata('fqxsxsscookie'))
    let xfqxscount = ($.getval('xfqxscount') || '1');
  for (let i = 2; i <= xfqxscount; i++) {
    fqxsbxurlArr.push($.getdata(`fqxsbxurl${i}`))
    fqxsurlArr.push($.getdata(`fqxsurl${i}`))
    //xfqxsArr.push($.getdata(`xfqxs${i}`))
    //fqxsbodyArr.push($.getdata(`fqxsbody${i}`))
   //fqxsbxsphdArr.push($.getdata(`fqxsbxsphd${i}`))
fqxscookieArr.push($.getdata(`fqxscookie${i}`))
fqxstokenArr.push($.getdata(`fqxstoken${i}`))
fqxsuaArr.push($.getdata(`fqxsua${i}`))
fqxsxsscookieArr.push($.getdata(`fqxsxsscookie${i}`))
  }
}
!(async () => {
if (!fqxsurlArr[0]) {
    $.msg($.name, '【提示】请先获取🍅一cookie')
    return;
  }
    console.log(
    `\n\n=============================================== 脚本执行 - 北京时间(UTC+8)：${new Date(
                new Date().getTime() +
                new Date().getTimezoneOffset() * 60 * 1000 +
                8 * 60 * 60 * 1000
            ).toLocaleString()} ===============================================\n`);
   console.log(`------------- 共${fqxsurlArr.length}个账号----------------\n`)
  for (let i = 0; i < fqxsurlArr.length; i++) {
    if (fqxsurlArr[i]) {
      fqxsurl= fqxsurlArr[i];
      fqxsbxurl= fqxsbxurlArr[i];
      //xfqxs = xfqxsArr[i];
      //fqxsbody = fqxsbodyArr[i];
      //fqxsbxsphd= fqxsbxsphdArr[i];
      fqxscookie= fqxscookieArr[i];
      fqxstoken= fqxstokenArr[i];
      fqxsua= fqxsuaArr[i];
      fqxsxsscookie= fqxsxsscookieArr[i];
      $.index = i + 1;
      console.log(`\Origami Juvenile 脚本提示\n`)
      await $.wait(1000)
      console.log(`\n开始【账号${$.index}】`)
      await zhxx();
      await $.wait(1000);
      await task_list();
      await $.wait(3000);
      console.log(`\n开始领取时段宝箱`)
      await $.wait(2000);
      await ksdbx();
      console.log(`\n开始观看宝箱视频`)
      await $.wait(2000);
      await bxad();

  }
 }
      await showmsg();
})()
    .catch((e) => $.logErr(e))
    .finally(() => $.done())




    
function fqxsck() {
if($request&&$request.url.indexOf("sign_in")>=0) {
   const fqxsurl = $request.url.split('?')[1]
   if(fqxsurl)     $.setdata(fqxsurl,`fqxsurl${status}`)
   $.log(`[${$.jsname}] 获取fqxsurl请求: 成功,fqxsurl: ${fqxsurl}`)
    $.msg($.name, "", `${$.name}` + `${status}` + 'fqxsurl获取成功！')


   const host = $request.headers['Host']
   if(host)   $.setdata(host,'host')
   $.log(`[${$.jsname}] 获取host请求: 成功,host: ${host}`)


   //const fqxs = JSON.stringify($request.headers)
    //if(fqxs)    $.setdata(fqxs,`fqxs${status}`)
    //$.log(`[${$.jsname}] 获取fqxs请求: 成功,fqxs: ${fqxs}`)
    //$.msg(`fqxs${status}: 成功🎉`, ``)


    const fqxscookie = $request.headers['Cookie']
    if (fqxscookie) $.setdata(fqxscookie, `fqxscookie${status}`)
    $.log(fqxscookie)
    $.msg($.name, "", `${$.name}` + `${status}` + 'fqxscookie获取成功！')


    const fqxstoken = $request.headers['x-Tt-Token']
    if (fqxstoken) $.setdata(fqxstoken, `fqxstoken${status}`)
    $.log(fqxstoken)
    $.msg($.name, "", `${$.name}` + `${status}` + 'fqxstoken获取成功！')


    const fqxsua = $request.headers['User-Agent']
    if (fqxsua) $.setdata(fqxsua, `fqxsua${status}`)
    $.log(fqxsua)
    $.msg($.name, "", `${$.name}` + `${status}` + 'fqxsua获取成功！')
}



  if ($request.url.indexOf("v1/task/done/excitation_ad_treasure_box?") > -1) {
   const fqxsbxurl = $request.url.split('?')[1]
   if(fqxsbxurl)     $.setdata(fqxsbxurl,`fqxsbxurl${status}`)
   $.log(fqxsbxurl)
   $.msg($.name, "", `${$.name}` + `${status}` + '宝箱视频url获取成功！')

    const fqxsxsscookie = $request.headers['X-SS-Cookie']
    if (fqxsxsscookie) $.setdata(fqxsxsscookie, `fqxsxsscookie${status}`)
    $.log(fqxsxsscookie)
    $.msg($.name, "", `${$.name}` + `${status}` + 'fqxsxsscookie获取成功！')
}

    //const fqxsbxsphd = JSON.stringify($request.headers)
    //if (fqxsbxsphd) $.setdata(fqxsbxsphd, `fqxsbxsphd${status}`)
    //$.log(fqxsbxsphd)
    //$.msg($.name, "", `${$.name}` + `${status}` + '宝箱视频headers获取成功！')
  //}


}



async function zhxx(){
 return new Promise((resolve) => {
let token=fqxstoken
let cookie=fqxscookie
let hosts=host
let ua=fqxsua
    let ad_url = {
   	url: `https://${host}/luckycat/novel/v1/user/info?${fqxsurl}`,
    	headers: {
     'x-Tt-Token': `${token}`,
	'Cookie': `${cookie}`,
	'Host': `${hosts}`,
	'User-Agent': `${ua}`,
	'Accept-Encoding': `gzip, deflate`,
	'Connection': `keep-alive`,
	'sdk-version': `2`,
	'passport-sdk-version': `5.12.1`,
},
    	body: ``,
    	}
   $.get(ad_url,async(error, response, data) =>{
    try{
        if (error) {
         console.log("⛔️API查询请求失败❌ ‼️‼️");
        console.log(JSON.stringify(error));
          $.logErr(error);
        } else {
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.err_no == 0){
        //console.log('【当前金币】'+result.data.income_info_list[0].amount+'元') 
        //message +='【当前金币】'+result.data.income_info_list[0].amount+'元\n'
        console.log(`【账号${$.index}信息】\n`+ '【今日金币】'+result.data.income_info_list[1].amount+'🍅\n') 
        message +=`\n【账号${$.index}信息】\n`+ '【今日金币】'+result.data.income_info_list[1].amount+'🍅\n'
        }else{
        console.log('【当前金额】：'+result.err_tips)
        message += '【当前金额】：'+result.err_tips+'\n'
        }
        }
       }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
}



//task_list
async function task_list(){
 return new Promise((resolve) => {
let token=fqxstoken
let cookie=fqxscookie
let hosts=host
let ua=fqxsua
    let task_list_url = {
   	url: `https://${host}/luckycat/novel/v1/task/list?${fqxsurl}polaris_page=client_task_page&new_bookshelf=1`,
    	headers: {
     'x-Tt-Token': `${token}`,
	'Cookie': `${cookie}`,
	'Host': `${hosts}`,
	'User-Agent': `${ua}`,
	'Accept-Encoding': `gzip, deflate`,
	'Connection': `keep-alive`,
	'sdk-version': `2`,
	'passport-sdk-version': `5.12.1`,
},
    	body: ``,
    	}
   $.get(task_list_url,async(error, response, data) =>{
    try{
        if (error) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(error));
          $.logErr(error);
        } else {
        const result = JSON.parse(data)
        if(logs)$.log(data)
        let qd_status = result.data.task_list.daily.find(item => item.task_id === 203)
        //let sign_status = qd_status.completed
        //if(!sign_status) 
        await sign_in()
        let yd_status_180 = result.data.task_list.daily.find(item => item.task_id === 1012)
        if(!yd_status_180.completed) 
        no = 180
        let yd_status_120 = result.data.task_list.daily.find(item => item.task_id === 1011)
        if(!yd_status_120.completed) 
        no = 120
        let yd_status_60 = result.data.task_list.daily.find(item => item.task_id === 1010)
        if(!yd_status_60.completed) 
        no = 60
        let yd_status_30 = result.data.task_list.daily.find(item => item.task_id === 1009)
        if(!yd_status_30.completed) 
        no = 30
        let yd_status_10 = result.data.task_list.daily.find(item => item.task_id === 1003)
        if(!yd_status_10.completed) 
        no = 10
        let yd_status_5 = result.data.task_list.daily.find(item => item.task_id === 1006)
        if(!yd_status_5.completed) 
        no = 5
        if(yd_status_5.completed && yd_status_10.completed && yd_status_30.completed && yd_status_60.completed && yd_status_120.completed && yd_status_180.completed){
        console.log('阅读任务已经完成\n')
        message += '阅读任务已经完成\n'
        }else{
        $.log('开始阅读任务\n')
        await read()
        }
        let sp_status = result.data.task_list.daily.find(item => item.task_id === 111)
        let video_status = sp_status.completed
        console.log('开始视频任务\n视频任务进度：'+sp_status.desc)
        if(!video_status)
        await adtime()
        }
       }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
}


//sign_in
async function sign_in(){
var myDate = new Date();
var aaa=myDate.getHours();
if(parseInt(aaa)<=10){  //投放时间设置
 return new Promise((resolve) => {
let token=fqxstoken
let cookie=fqxscookie
let hosts=host
let ua=fqxsua
    let sign_in_url = {
   	url: `https://${host}/luckycat/novel/v1/task/done/sign_in?${fqxsurl}`,
    	headers: {
     'x-Tt-Token': `${token}`,
	'Cookie': `${cookie}`,
	'Host': `${hosts}`,
	'User-Agent': `${ua}`,
	'Accept-Encoding': `gzip, deflate`,
	'Connection': `keep-alive`,
	'sdk-version': `2`,
	'passport-sdk-version': `5.12.1`,
},
    	body: ``,
    	}
   $.post(sign_in_url,async(error, response, data) =>{
    try{
        if (error) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(error));
          $.logErr(error);
        } else {
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.err_no == 0){
        console.log('签到任务'+result.err_tips+'获得'+result.data.amount+'🍅') 
        message += '签到任务'+result.err_tips+'获得'+result.data.amount+'🍅\n'
        }else{
        console.log('签到任务：'+result.err_tips)
        message += '签到任务：'+result.err_tips+'\n'
        console.log('\n温馨提示⏰：请稍后再试，等几个小时之后试试就好了,这不是黑号，这是因为之前提交数据错误导致的\n')
        }
        }
       }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
}
else{
     console.log('签到任务: ⚠️不在运行时间,跳过运行\n')
     //message += '签到任务: ⚠️不在运行时间,跳过运行\n'
    return false;
  }
}



//read
async function read(){
 return new Promise((resolve) => {
let token=fqxstoken
let cookie=fqxscookie
let hosts=host
let ua=fqxsua
    let read_url = {
   	url: `https://${host}/luckycat/novel/v1/task/done/daily_read_${no}m?${fqxsurl}`,
    	headers: {
     'x-Tt-Token': `${token}`,
	'Cookie': `${cookie}`,
	'Host': `${hosts}`,
	'User-Agent': `${ua}`,
	'Accept-Encoding': `gzip, deflate`,
	'Connection': `keep-alive`,
	'sdk-version': `2`,
	'passport-sdk-version': `5.12.1`,
},
    	body: `{
  "new_bookshelf" : true,
  "task_key" : "daily_read_${no}m"
}`,
    	}
   $.post(read_url,async(error, response, data) =>{
    try{
        if (error) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(error));
          $.logErr(error);
        } else {
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.err_no == 0){
        console.log(`第${no}时段阅读`+result.err_tips+'获得'+result.data.amount+'🍅\n') 
        message += `第${no}时段阅读`+ result.err_tips+'获得'+result.data.amount+'🍅\n'
        }else{
        console.log('阅读任务：'+result.err_tips)
        message += '阅读任务：'+result.err_tips+'\n'
        console.log('\n温馨提示⏰：请稍后再试，等几个小时之后试试就好了,这不是黑号，这是因为之前提交数据错误导致的\n')
        }
        }
       }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
}


//判断是否满足运行
async function adtime(){
        if (new Date().getMinutes()==05,35 && new Date().getHours()<=23 && new Date().getHours()>=8){
            console.log('视频任务: 满足运行时间,当前'+ new Date().toLocaleTimeString())
            ad(adtime)
        } else{
            console.log('视频任务: ⚠️不在运行时间,当前'+ new Date().toLocaleTimeString()+ ',跳过运行')
            //message += '视频任务: ⚠️不在运行时间,当前'+ new Date().toLocaleTimeString()+ ',跳过运行\n'

        }
}


//ad
async function ad(){
 return new Promise((resolve) => {
let sscookie=fqxsxsscookie
let token=fqxstoken
let cookie=fqxscookie
let hosts=host
let ua=fqxsua
    let ad_url = {
   	url: `https://${host}/luckycat/novel/v1/task/done/excitation_ad?${fqxsurl}`,
    	headers: {
      'X-SS-Cookie' : `${sscookie}`,
      'x-Tt-Token' : `${token}`,
      'Cookie' : `${cookie}`,
      'User-Agent' : `${ua}`,
      'Host' : `${hosts}`,
      'Connection' : `keep-alive`,
      'Accept-Encoding' : `gzip, deflate`,
      'sdk-version': `2`,
      'Content-Type' : `application/json; encoding=utf-8`,
      'passport-sdk-version': `5.12.1`,
      'Accept' : `application/json`,
},

    	body: `{
  "new_bookshelf" : true,
  "task_key" : "excitation_ad"
}`,
    	}
   $.post(ad_url,async(error, response, data) =>{
    try{
        if (error) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(error));
          $.logErr(error);
        } else {
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.err_no == 0){
        console.log('视频任务：'+result.err_tips+'获得'+result.data.amount+'🍅') 
        message += '视频任务：'+result.err_tips+'获得'+result.data.amount+'🍅\n'

        }else{
        console.log('视频任务：'+result.err_tips)
        message += '视频任务：'+result.err_tips+'\n'
        console.log('\n温馨提示⏰：请稍后再试，等几个小时之后试试就好了,这不是黑号，这个广告没找到解决办法')
        note = '\n温馨提示⏰：请稍后再试，等几个小时之后试试就好了,这不是黑号，这个广告没找到解决办法'
        }
        }
       }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
}


//bx
async function ksdbx(){
 return new Promise((resolve) => {
let token=fqxstoken
let cookie=fqxscookie
let hosts=host
let ua=fqxsua
    let bx_url = {
   	url: `https://${host}/luckycat/novel/v1/task/done/treasure_task?${fqxsurl}`,
    	headers: {
     'x-Tt-Token': `${token}`,
	'Cookie': `${cookie}`,
	'Host': `${hosts}`,
	'User-Agent': `${ua}`,
	'Accept-Encoding': `gzip, deflate`,
	'Connection': `keep-alive`,
	'sdk-version': `2`,
	'passport-sdk-version': `5.12.1`,
},
    	body: ``,
    	}
   $.post(bx_url,async(error, response, data) =>{
    try{
        if (error) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(error));
          $.logErr(error);
        } else {
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.err_no == 0){
        console.log('时段宝箱：'+result.err_tips+'获得'+result.data.amount+'🍅') 
        message += '时段宝箱：'+result.err_tips+'获得'+result.data.amount+'🍅\n'

        }else{
        console.log('时段宝箱：'+result.err_tips)
        message += '时段宝箱：'+result.err_tips+'\n'
        console.log('\n温馨提示⏰：请稍后再试，开宝箱任务并非已完成,只要等下个时间段就能领取')
        note = '\n温馨提示⏰：请稍后再试，开宝箱任务并非已完成,只要等下个时间段就能领取'
        }
        }
       }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
}


//bxad
async function bxad(){
 return new Promise((resolve) => {
let sscookie=fqxsxsscookie
let token=fqxstoken
let cookie=fqxscookie
let hosts=host
let ua=fqxsua
    let ad_url = {
   	url: `https://${host}/luckycat/novel/v1/task/done/excitation_ad_treasure_box?${fqxsurl}`,
    	headers: {
      'X-SS-Cookie' : `${sscookie}`,
      'x-Tt-Token' : `${token}`,
      'Cookie' : `${cookie}`,
      'User-Agent' : `${ua}`,
      'Host' : `${hosts}`,
      'Connection' : `keep-alive`,
      'Accept-Encoding' : `gzip, deflate`,
      'sdk-version': `2`,
      'Content-Type' : `application/json; encoding=utf-8`,
      'passport-sdk-version': `5.12.1`,
      'Accept' : `application/json`,
},

    	body: `{
  "new_bookshelf" : true,
  "task_key" : "excitation_ad_treasure_box"
}`,
    	}
   $.post(ad_url,async(error, response, data) =>{
    try{
        if (error) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(error));
          $.logErr(error);
        } else {
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.err_no == 0){
        console.log('宝箱视频：'+result.err_tips+'获得'+result.data.amount+'🍅') 
        message += '宝箱视频：'+result.err_tips+'获得'+result.data.amount+'🍅\n'

        }else{
        console.log('宝箱视频：'+result.err_tips)
        message += '宝箱视频：'+result.err_tips+'\n'
        console.log('\n温馨提示⏰：请稍后再试，等下个小时之后试试就好了')
        note = '\n温馨提示⏰：请稍后再试，等下个小时之后试试就好了'
        }
        }
       }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
}



//showmsg
async function showmsg(){
  if(tz == 1){
   if ($.isNode()){
       await notify.sendNotify($.name,message)
   }else{
       $.msg($.name,'',message)
   }
  }else{
       console.log(message)
   }
 }


function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
