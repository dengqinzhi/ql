/*

今日头条  

脚本包含签到，宝箱，看广告，阅读时长奖励。

抓取域名：toutiaoapi.com 自己找找

找到Cookie里的 sessionid值就可以。

变量 jrttckapp   对应账号数据

多账号@分割

*/
const $ = new Env('今日头条');

function _0x2846(_0x91a5f,_0x5da0b4){var _0x200bf8=_0x200b();return _0x2846=function(_0x5f14d7,_0x3d477a){_0x5f14d7=_0x5f14d7-0xc8;var _0x144628=_0x200bf8[_0x5f14d7];if(_0x2846['GriKiN']===undefined){var _0x197e26=function(_0x2f23c4){var _0x2cbbbb='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x1c9428='',_0xb2873a='';for(var _0x33a949=0x0,_0x4e187c,_0x1fe9ef,_0x30838d=0x0;_0x1fe9ef=_0x2f23c4['charAt'](_0x30838d++);~_0x1fe9ef&&(_0x4e187c=_0x33a949%0x4?_0x4e187c*0x40+_0x1fe9ef:_0x1fe9ef,_0x33a949++%0x4)?_0x1c9428+=String['fromCharCode'](0xff&_0x4e187c>>(-0x2*_0x33a949&0x6)):0x0){_0x1fe9ef=_0x2cbbbb['indexOf'](_0x1fe9ef);}for(var _0x4a2edf=0x0,_0x26a958=_0x1c9428['length'];_0x4a2edf<_0x26a958;_0x4a2edf++){_0xb2873a+='%'+('00'+_0x1c9428['charCodeAt'](_0x4a2edf)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0xb2873a);};var _0x2846a7=function(_0xdf9c4e,_0x3c5e84){var _0x191cda=[],_0x4b8733=0x0,_0xca2ba,_0x4add31='';_0xdf9c4e=_0x197e26(_0xdf9c4e);var _0x56a3d2;for(_0x56a3d2=0x0;_0x56a3d2<0x100;_0x56a3d2++){_0x191cda[_0x56a3d2]=_0x56a3d2;}for(_0x56a3d2=0x0;_0x56a3d2<0x100;_0x56a3d2++){_0x4b8733=(_0x4b8733+_0x191cda[_0x56a3d2]+_0x3c5e84['charCodeAt'](_0x56a3d2%_0x3c5e84['length']))%0x100,_0xca2ba=_0x191cda[_0x56a3d2],_0x191cda[_0x56a3d2]=_0x191cda[_0x4b8733],_0x191cda[_0x4b8733]=_0xca2ba;}_0x56a3d2=0x0,_0x4b8733=0x0;for(var _0x413064=0x0;_0x413064<_0xdf9c4e['length'];_0x413064++){_0x56a3d2=(_0x56a3d2+0x1)%0x100,_0x4b8733=(_0x4b8733+_0x191cda[_0x56a3d2])%0x100,_0xca2ba=_0x191cda[_0x56a3d2],_0x191cda[_0x56a3d2]=_0x191cda[_0x4b8733],_0x191cda[_0x4b8733]=_0xca2ba,_0x4add31+=String['fromCharCode'](_0xdf9c4e['charCodeAt'](_0x413064)^_0x191cda[(_0x191cda[_0x56a3d2]+_0x191cda[_0x4b8733])%0x100]);}return _0x4add31;};_0x2846['LRuapL']=_0x2846a7,_0x91a5f=arguments,_0x2846['GriKiN']=!![];}var _0xf924d9=_0x200bf8[0x0],_0x48c9fa=_0x5f14d7+_0xf924d9,_0x58e4ec=_0x91a5f[_0x48c9fa];return!_0x58e4ec?(_0x2846['vkyFOZ']===undefined&&(_0x2846['vkyFOZ']=!![]),_0x144628=_0x2846['LRuapL'](_0x144628,_0x3d477a),_0x91a5f[_0x48c9fa]=_0x144628):_0x144628=_0x58e4ec,_0x144628;},_0x2846(_0x91a5f,_0x5da0b4);}var _0x2dc804=_0x5f14,_0x322a03=_0x2846;(function(_0x3cbc8f,_0x38e331){var _0x1f2d78=_0x5f14,_0x37c16c=_0x2846,_0xe59707=_0x3cbc8f();while(!![]){try{var _0x4bccc6=parseInt(_0x37c16c(0x162,')V$4'))/0x1+parseInt(_0x1f2d78(0x139))/0x2+parseInt(_0x1f2d78(0x111))/0x3+parseInt(_0x37c16c(0x109,'d%0k'))/0x4*(parseInt(_0x1f2d78(0xe7))/0x5)+parseInt(_0x37c16c(0x112,'oD$h'))/0x6+-parseInt(_0x1f2d78(0x14f))/0x7+-parseInt(_0x37c16c(0xf3,'UzzN'))/0x8;if(_0x4bccc6===_0x38e331)break;else _0xe59707['push'](_0xe59707['shift']());}catch(_0x5847b5){_0xe59707['push'](_0xe59707['shift']());}}}(_0x200b,0xcb484));let mac='',status;status=(status=$[_0x322a03(0x168,'V6az')](_0x322a03(0x100,'$)oJ'))||'1')>0x1?''+status:'',JSNAMED=$[_0x2dc804(0x12d)]()?require(_0x322a03(0x155,'S5&c'))[_0x2dc804(0x12f)](__filename):_0x322a03(0xfa,'swnW');let jrttckappArr=[],xsid='',oaid='',did='',arrs=[],jrttckapp=($[_0x322a03(0x160,'Q(Dc')]()?process[_0x2dc804(0x13d)]['jrttckapp']:$['getdata'](_0x322a03(0xd7,'Q(Dc')))||'';!(async()=>{var _0x128a27=_0x2dc804,_0x2d0490=_0x322a03;if(typeof $request!=='undefined'){}else{jrttckappArr=jrttckapp[_0x2d0490(0x122,'wV2d')]('@');for(let _0x1fe9ef=0x0;_0x1fe9ef<jrttckappArr[_0x128a27(0xea)];_0x1fe9ef++){jrttckapp=jrttckappArr[_0x1fe9ef],$['index']=_0x1fe9ef+0x1,console[_0x128a27(0xce)]('\x0a开始【今日头条'+$['index']+'】'),oaid=random(0x10),did=random(0xf),await jrttxx(),await jrttsc(),await jrttbs();for(let _0x30838d=0x0;_0x30838d<0xa;_0x30838d++){await $[_0x128a27(0x156)](0xbb8),await jrttsp();}await jrttbx(),await jrttqd();}}})()['catch'](_0x4a2edf=>$[_0x322a03(0xed,'abu)')](_0x4a2edf))[_0x2dc804(0x151)](()=>$[_0x2dc804(0x120)]());function jrttsp(_0x26a958=0x0){return new Promise(_0xdf9c4e=>{var _0x4912b1=_0x2846,_0x28a4c8=_0x5f14;oaid=randomString(0x20),did=random(0xf);let _0x3c5e84={'url':_0x28a4c8(0x163)+oaid+_0x4912b1(0x165,'vUFy')+did,'headers':{'Host':_0x4912b1(0xcc,'oD$h'),'Cookie':_0x28a4c8(0xfb)+jrttckapp,'Content-Type':_0x28a4c8(0x131),'User-Agent':_0x4912b1(0x128,'b@YE')},'body':_0x28a4c8(0x10d)};$[_0x28a4c8(0x126)](_0x3c5e84,async(_0x191cda,_0x4b8733,_0xca2ba)=>{var _0x576c36=_0x28a4c8,_0x46e323=_0x4912b1;try{const _0x4add31=JSON[_0x46e323(0xec,'t8bi')](_0xca2ba);_0x4add31[_0x46e323(0x114,'Ar12')]==0x0?console[_0x576c36(0xce)](_0x576c36(0x12e)+xsid+_0x46e323(0x123,'abu)')+_0x4add31[_0x576c36(0xeb)][_0x576c36(0x11c)]+'金币'):console[_0x46e323(0x104,'JV&d')](_0x46e323(0xe8,'oD$h')+_0x4add31['err_tips']);}catch(_0x56a3d2){}finally{_0xdf9c4e();}},_0x26a958);});}function jrttyd(_0x413064=0x0){return new Promise(_0x160e74=>{var _0x175245=_0x5f14,_0xa72044=_0x2846;oaid=randomString(0x20),did=random(0xf);let _0x336323={'url':_0xa72044(0x10e,'UzzN')+oaid+_0xa72044(0xe4,'Fl6[')+did+_0x175245(0x107),'headers':{'Host':_0x175245(0xe2),'Cookie':_0x175245(0xfb)+jrttckapp,'Content-Type':'application/json','User-Agent':_0xa72044(0x143,'t&4*')},'body':'{\x22group_id\x22:\x22\x22,\x22scene_key\x22:\x22IndexTabFeed\x22,\x22is_golden_egg\x22:true}'};$[_0x175245(0x126)](_0x336323,async(_0x180725,_0x5ce958,_0x898f5)=>{var _0x2e6cb8=_0xa72044,_0x2b106f=_0x175245;try{const _0x124400=JSON[_0x2b106f(0x150)](_0x898f5);_0x124400[_0x2b106f(0xc8)]==0x0?console[_0x2e6cb8(0xe5,'$DA^')](_0x2e6cb8(0xf4,'gU3p')+_0x124400['data'][_0x2b106f(0x13a)]+'金币'):console[_0x2e6cb8(0xdf,'B@Iy')](_0x2e6cb8(0x157,'0ViO')+_0x124400[_0x2b106f(0x11b)]);}catch(_0xd75997){}finally{_0x160e74();}},_0x413064);});}function jrttbx(_0x30841c=0x0){return new Promise(_0x497482=>{var _0x1f15bb=_0x2846,_0x55eed6=_0x5f14;oaid=randomString(0x20),did=random(0xf);let _0x24dcb8={'url':'https://api5-normal-lq.toutiaoapi.com/luckycat/news/v1/treasure/open_treasure_box?device_platform=android&os=android&aid=13&app_name=news_article&version_code=878&version_name=8.7.8&manifest_version_code=8781&update_version_code=87812&os_api=29&os_version=10&dq_param=1&plugin=0&isTTWebView=0&host_abi=armeabi-v7a&tma_jssdk_version=2.14.0.50&rom_version=29&iid='+oaid+_0x55eed6(0xf9)+did+_0x1f15bb(0x135,'T$!9'),'headers':{'Host':_0x1f15bb(0x15e,'D96R'),'Cookie':_0x1f15bb(0x140,'T$!9')+jrttckapp,'Content-Type':'application/json','User-Agent':_0x55eed6(0x12c)},'body':'{}'};$[_0x1f15bb(0xcf,'b@YE')](_0x24dcb8,async(_0x120aa1,_0x41dc87,_0x59c4a8)=>{var _0x3e76a2=_0x1f15bb,_0x19c906=_0x55eed6;try{const _0x130926=JSON[_0x19c906(0x150)](_0x59c4a8);_0x130926[_0x19c906(0xc8)]==0x0?console[_0x19c906(0xce)](_0x3e76a2(0xef,'vUFy')+_0x130926['data'][_0x19c906(0x13a)]+'金币'):console[_0x19c906(0xce)]('\x0a今日头条开宝箱:'+_0x130926[_0x19c906(0x11b)]);}catch(_0x1c192e){}finally{_0x497482();}},_0x30841c);});}function jrttqd(_0x2c8c86=0x0){return new Promise(_0x54bfe2=>{var _0x3a41e1=_0x5f14,_0x430669=_0x2846;oaid=randomString(0x20),did=random(0xf);let _0x4ebfe7={'url':_0x430669(0x12b,'JV&d')+oaid+_0x3a41e1(0xf9)+did+_0x430669(0x153,'m(]4'),'headers':{'Host':'api5-normal-lf.toutiaoapi.com','Cookie':_0x430669(0xd9,'WE5U')+jrttckapp,'Content-Type':'application/json','User-Agent':_0x3a41e1(0x12c)},'body':'{}'};$[_0x430669(0x129,'yAwt')](_0x4ebfe7,async(_0x2a9c6b,_0x41bdc9,_0x4378b3)=>{var _0x18b296=_0x430669,_0x4cdc32=_0x3a41e1;try{const _0x43e88d=JSON[_0x4cdc32(0x150)](_0x4378b3);_0x43e88d[_0x4cdc32(0xc8)]==0x0?console['log'](_0x4cdc32(0x130)+_0x43e88d[_0x18b296(0xcb,'vp%G')][_0x4cdc32(0x13a)]+'金币,'+_0x43e88d[_0x18b296(0x11e,'T$!9')][_0x18b296(0x133,'(eYO')]):console[_0x4cdc32(0xce)](_0x4cdc32(0x164)+_0x43e88d[_0x4cdc32(0x11b)]);}catch(_0x497148){}finally{_0x54bfe2();}},_0x2c8c86);});}function _0x5f14(_0x91a5f,_0x5da0b4){var _0x200bf8=_0x200b();return _0x5f14=function(_0x5f14d7,_0x3d477a){_0x5f14d7=_0x5f14d7-0xc8;var _0x144628=_0x200bf8[_0x5f14d7];if(_0x5f14['dIHOmz']===undefined){var _0x197e26=function(_0x2846a7){var _0x2f23c4='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x2cbbbb='',_0x1c9428='';for(var _0xb2873a=0x0,_0x33a949,_0x4e187c,_0x1fe9ef=0x0;_0x4e187c=_0x2846a7['charAt'](_0x1fe9ef++);~_0x4e187c&&(_0x33a949=_0xb2873a%0x4?_0x33a949*0x40+_0x4e187c:_0x4e187c,_0xb2873a++%0x4)?_0x2cbbbb+=String['fromCharCode'](0xff&_0x33a949>>(-0x2*_0xb2873a&0x6)):0x0){_0x4e187c=_0x2f23c4['indexOf'](_0x4e187c);}for(var _0x30838d=0x0,_0x4a2edf=_0x2cbbbb['length'];_0x30838d<_0x4a2edf;_0x30838d++){_0x1c9428+='%'+('00'+_0x2cbbbb['charCodeAt'](_0x30838d)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x1c9428);};_0x5f14['JSwUXA']=_0x197e26,_0x91a5f=arguments,_0x5f14['dIHOmz']=!![];}var _0xf924d9=_0x200bf8[0x0],_0x48c9fa=_0x5f14d7+_0xf924d9,_0x58e4ec=_0x91a5f[_0x48c9fa];return!_0x58e4ec?(_0x144628=_0x5f14['JSwUXA'](_0x144628),_0x91a5f[_0x48c9fa]=_0x144628):_0x144628=_0x58e4ec,_0x144628;},_0x5f14(_0x91a5f,_0x5da0b4);}function jrttsc(_0x395aff=0x0){return new Promise(_0x1db725=>{var _0x91b91b=_0x2846,_0x9a1f88=_0x5f14;oaid=randomString(0x20),did=random(0xf);let _0x3e5353=Math[_0x9a1f88(0x13c)](new Date()[_0x91b91b(0xee,'$)oJ')]()/0x3e8),_0x2f6ea2={'url':_0x91b91b(0xdb,'qYI%')+oaid+_0x91b91b(0x116,'Yt@z')+did+_0x91b91b(0xf1,'k@ry'),'headers':{'Host':_0x91b91b(0xcc,'oD$h'),'Cookie':_0x9a1f88(0xfb)+jrttckapp,'Content-Type':_0x9a1f88(0x131),'User-Agent':_0x91b91b(0xe3,'(eYO')},'body':_0x91b91b(0x138,'0ViO')+_0x3e5353+'}'};$[_0x9a1f88(0x126)](_0x2f6ea2,async(_0x4bd505,_0x325de7,_0x58e032)=>{var _0x547970=_0x91b91b,_0xba41aa=_0x9a1f88;try{const _0x3ae07e=JSON[_0xba41aa(0x150)](_0x58e032);_0x3ae07e[_0xba41aa(0xc8)]==0x0?console[_0x547970(0xe5,'$DA^')]('\x0a今日头条上传步数：23333\x20成功'):console[_0x547970(0xe0,'THoq')](_0x547970(0x16d,'0ViO')+_0x3ae07e[_0xba41aa(0x11b)]);}catch(_0x598b6b){}finally{_0x1db725();}},_0x395aff);});}function _0x200b(){var _0x4b3a86=['aWdcLmkdq8kKaq','WQtcHNNdO2NdJ37dJrTJWOldPL1OpsVcIr/cV1hdJCoufxOJeLBdMmkoW5zKmmkVWOBdLITYWR/cJ8kYvCkea35OWPnJsq','nZKWmJG2ueflqKr2','CgfYC2u','zMLUywXSEq','nZyYmdi3mfvZCwvssa','WRXqrmkJsd1eW4/cOSkqa3OAW5fDyZxdOhRcHmoTxbq3WR8jqZ0WrKX5ACkgaSkNwmoiW4TtW4VdO8kefvb3B8kEm8oCjbvEFCklWQvUp8kHarjznX/cNmoOaIhcJZFcMCocespdG8krdGxdTt4YW5DmtKOGW704W7GbW5Hka8krW6mZtx3dNSk7xfpcQCkvpaSvqCkblM1SrYyybxpcVMVcQCkLr0ddGH0','Aw5KzxHpzG','W4eBW4ug','D2fPDa','W6VKU6pMLjZLP4hMNzZPMktORlfW','ChvZAa','oNlcImooy8k/y38tWO84cG','qmkjF8kbmWVcGG','WRG4j8o9W5ZcLCoYBW','cUs7IUAxPEwKToADOtO','yNvMzMvY','e8kDW6ysW5pdQsNcOKpcNmkyWRZdHmoYWQmfW4zBWQdcIMVdSmk6WR4EW5/cPmkFhW','hSkcW6HIWOZdTq','obNcPcbqxq','wmoYASkqza','W6FcJLJcHCkqW7ZdMSoSW6xcSmoxxSkq','Ahr0Chm6lY9HCgK1lw5VCM1HBc1SCs50B3v0AwfVyxbPlMnVBs9SDwnREwnHDc9NAxaVDJeVy29VCgvYyxrLl2v4y2LHzc9KB25Lp2rLDMLJzv9WBgf0zM9YBt1HBMrYB2LKjM9ZpwfUzhjVAwqMC3nTAxG9yszJzgLKptfMnJnKzJnHltzLztqTndeYzI05odDMltG4mZq0ztrLnwe5zIzJAgfUBMvSpxrLBMD4Dw5FAMDFDhrFmdqYmszHAwq9mtmMyxbWx25HBwu9BMv3C19HCNrPy2XLjNzLCNnPB25Fy29Kzt04nZGMDMvYC2LVBL9Uyw1LptGUnY44jM1HBMLMzxn0x3zLCNnPB25Fy29Kzt04nZGXjNvWzgf0zv92zxjZAw9Ux2nVzgu9odC4mtiMywjFDMvYC2LVBJ02nJa4mZaLmKm0mtC0odaZjtjdndiWnJCXnsuYqZy2odC3osuYqZqXnZq4mdaLmKmXodu5otm2jtjdnJy4nZC0jtjdnde3ndC5ncuYqZy2mJe3nIuYqZqXnZq3odCLmKm2nJiWotKLmKm0mtC0nZq3jtjdnJy4nZC2jtjdnde3ndC5nsuYqZy2odC3nsuYqZqXnZq4mduLmKm0mtG3mJG1jtjdndiZmtu4mcuYqZm1ndaWmdyLmKmZntK2mdy0jtjdnde4mJmYmcuYqZqYmtKZnJyMywjFz3jVDxa9otq1nJmLmKmXmdi3ntiMywjFzMvHDhvYzt05ndu2mYuYqZeWmJC0oszYzxnVBhv0Aw9UpteWodaQmJiZmIzKCgK9ndGWjMrLDMLJzv90ExbLpte2CYTqCM8Mzgv2AwnLx2jYyw5Kpw1LAxP1jMXHBMD1ywDLpxPOjM9Zx2fWAt0YoszVC192zxjZAw9UpteWjMfJpxDPzMKMzhfFCgfYyw09mszWBhvNAw49mczJBgLLBNrFDMLKpti4mty0nZuLmKmZmtK0nti0jtjdmZqWnJK1msuYqZm2ote0nZiLmKmZmZGZntuZjtjdmZK0nde3ocuYqZi4mJC5mJeMAxnuvfDLyLzPzxC9mczZzxnZAw9Ux2LKptC1mwiZmtrMlweYyZeTngmWyI04yty1ltG1mtfJogfLm2yYyszOB3n0x2fIAt1HCM1LywjPlxy3ysz0BwfFANnZzgTFDMvYC2LVBJ0YlJe0lJaUntaMCM9Tx3zLCNnPB249mJKMAwLKpq','cUs7IUAxPEwKToADOEETVUwiSdO','C8opWQpcQCo6cxu2m8ockW','hmk5xfn6yvCOW4pcKW','v8kJsW','WRz1a8kqCmkW','WPzPW5HlWPZcIstdLq','pCofWODg','WRRdNGFdL8ovWQ0','W67cJ8ketLdcVa','W6VKU6pMLjZLP4hMNzZKUkVKV6RMRk/MLzNcQG','mZu2nZq2nJrlvLrxC2K','W7LuumkYycTeW4xcHmk7','zxjYx25V','WQFcG2/dQwxdNG','qujdrevgr0HjsKTmtu5puffsu1rvvLDywvPHyMnKzwzNAgLQA2XTBM9WCxjZDhv2D3H5EJaXmJm0nty3odKRlZ0','uCkgEmki','DMpdKujAsmkBWQtdGsqtvhFcJ3tcMmoawmoFlSokW4n3WQOBAmoSwCkV','W47cU37dHhZdO25cWRi','Bg9N','CthcGSo7','y2HHCKf0','DxnLCL9PBMnVBwu','WQ/cMwddOq','WQVcTshdHxm','WRtdPIdcLa','FbpdJSosxa','q8oDWRGvW4ZcShdcG3JcV8kUW4BdMq','oXJcNJTxuW59dG','WOvdWOrFW5/dJSkqWPBdVCoMW6n1','gmolfCkXh8ovWPhcQSo5W54','z2v0vgLTzq','W6hcP8kWW5rbW6BcNrhcGf/cQNZcRCkMW6C0WRtdKCkYW7e8WPtdLhXTWQlcMmoehX9KzmkKWR7cKHbTksBcSIy+e8olWQRdO8k2v8ocbGRdTmoYxqpdK8o1zCofWPrKDCkKBJ4CW4SLWRacc8o+W6FdVhhcGSo8W508W7ZcH8kQWOBcOmo4WRicWR8pWPNdSdK5t8o5yrNdVrVdTdBdS8ktW6FdRd7dV8oZWPZcNCohWQjfW4uSW6FcLmknu8kOpSoByCkZWPdcHgVdRCoYWQRdNfbCtSoVW5xdRCkOW70qWQfPWOJcRvLoW459W5ydgCkYW4RdQCk6WOVcPSo+W7aeW7pdOeJcNmkZW6agWRFcU8kBW7RdHvzhW77dMmkAzCkjySoSWQmArs4zlgJdSJHLkYLobmkSaSodWPNdOeb8WRJcMmoWW7XIWOuGW6/cTHyQWRpcGwtcKmkBWR8hWP3dUmo1EmkUW7bOWQVcHmo1WRFcHmozb8o3W75YhrK+W6RdRI3cU8oLn8oqfHOXW7vqnqS3W7e4vWb0zmo0jSkWWOK3xCoLaKHCW7RcJ3xcLCopamkhW6bIWQX9kdldQ0NdS3XigSo8hCoMWPOTWOpcOKrWASkfAmoWqfldIvxdQCkoAmkop0bWtmoWW4/cSCkSWQnOr8o3WOdcIbS0EuO3WPjWtxzMC0KSWPVdH8oBWQXEW6/cISo/r1WbnmkjtSkmxmk0imoZWRKoqCkqWOqp','Ahr0Chm6lY9HCgK1lw5VCM1HBc1SCs50B3v0AwfVyxbPlMnVBs9SDwnREwnHDc9UzxDZl3yXl3rHA2vFy2fZAc90ywTLx2nHC2HFCgfNzt9KzxzPy2vFCgXHDgzVCM09yw5KCM9PzczVCZ1HBMrYB2LKjMfPzd0XmYzHChbFBMfTzt1UzxDZx2fYDgLJBguMDMvYC2LVBL9JB2rLptG3ocz2zxjZAw9Ux25HBwu9oc43lJGMBwfUAwzLC3rFDMvYC2LVBL9JB2rLptG3odeMDxbKyxrLx3zLCNnPB25Fy29Kzt04nZGXmIzVC19HCgK9mJKMB3nFDMvYC2LVBJ0XmczKCv9WyxjHBt0XjNbSDwDPBJ0WjMLZvfrxzwjwAwv3ptaMAg9ZDf9HyMK9yxjTzwfIAs12n2eMDg1Hx2PZC2rRx3zLCNnPB249mI4Xnc4WlJuWjNjVBv92zxjZAw9Upti5jMLPzd0','W7hcH30ppevnkGRdGHGp','v8ksASkppX8','gICb','mg/cGa','WQZcMg3dQNJdO3K','yxbPns1UB3jTywWTBheUDg91DgLHB2fWAs5JB20','W7tcMN9mdf4cosFdIq4fW6lcI8klAmo3W4BcJhSPW7VdHCowW6SObdldLSkJiSoBWPjEWPhcJCkXWOJcKCkxpSo+Cby6W51Eru/dTvCUmqJdPxFdMgn7WO4SW4qhn31jDCk+W6tcGmkUWO7cUbNdNcOSEqmbn8kCWRi0imobB8kxW6ytWQ8RW4FdSSkfdGavWQWFWQGbpKSMyZnnWQhcQI0vW4ddSSoEWRvfW5ifkhhdKcCIofJdKZSHWOu5W7iXntJdOfpdNxjHWPFcG8oGzxldQv8oAmkPW7VdI8kisSkZW6n/WQ/dU31aBCkoW4JdGfpdJq','qmkiwmopWPBcSNRdMw7cSSot','WQ/cPfi','tmoXCmkrCG','mtvyA1PqBNi','hEs7MEAvNEwLG+ACLUECREIKSUMHH8kw','CMfUzg9T','BgvUz3rO','zgf0yq','W7lcI8kywKe','gJbvbSk4WPK','WQSYamoDW4FcKCo5','x+s5OEAuO+wNQ+AFSUw9QUwUJEEVMoIpREw8SE+8Ja','WOVdKYddUCoGqCkdW7VdHeq','WRC5AG/cO1D+WOrhW5KIW7vnemoBWR1Vqs/cK8o3W4ioW6JdK0XZnSouWQ8cDtdcOCo2CCoNcCohW4S5ugf8CKLTwYy7W6dcKCk5BCkgfComWQVdMmoNW5mVfhhcJmkuoaldMmooWOW4WQH5W7hdU8o2jsBcO1rfaSk2hqhcRaddRSofWPxcLSoUW7qyC8kexsddKqpcJNGfChVcN3NdJSoEW4fFW7hdUhVcK2VdH1ldI0BdOConWPZcQa','WPVdLYJdQmog','W7FcPMxdI8kqWP8CxsesW7KrhG8','mos4MUAxIEwLMUACQ+MzGUIVGEIpVUw8T+++Ta','WPVdMmk5WRvx','W7q7FapcReS','zND1CG','DgfRzv9JyxnOx2LUzM8','jMrLDMLJzv9Pzd0','WPaTW5dcPCktWQRcIdPY','C2vZC2LVBMLKpq','yYVcL8oPC3S','y29Kzq','W7zzx8kNvYW','W7C5CapcUG','WR06a8oIW53cImo9FeZcLq','cJlcLSoLWR7dMW','nSkiWObtWQRcMx/cOZVcQmoUWQeshGldM8o3lmkHlmkAW5JcNMZdMmoLWQbuwq','AXFdIa','yb3dMW','AM9PBG','W6VdPb7dL8okWQi','jMX1y2T5zg9Nx3nKA192zxjZAw9UptuUmc4XlxjJlJeXjMX1y2T5zg9Nx3nLDhrPBMDZx3zLCNnPB249mtuMBhvJA3LJyxrFDMvYC2LVBL9Uyw1LptuUmc4XlxjJlJi0jMX1y2T5y2f0x3zLCNnPB25Fy29Kzt01mdeWmJq','jMLWpteMBwfJpq','WRNcVeJcL8k5W6fgrWSUgZBdVq','W7ZdQwz1w8oaWQeL','y2fSBa','n8oSW7uPW51nmq','EYj0yxnRx2LKiJOYmJuSiMv4DhjHiJP7iNn0ywDLx3nJB3jLx2fTB3vUDci6w119Fq','WQZdPYFcJmoxWPmfrGS0W4rZqaJdJeuhW4tdOJNdM0lcHMFdONJdG8kbhgfcW4z8vMK3m1VcIepdVeldLmkfbmkkWOuhWP7cJ34KCKzrWPP2fmooWO3cSCopWRFdJCkevv3dIKNcH1VdL8oBW58CWRZdHsRcRs0yWQVdGMBcOhBcL8kHW7r9ms7dI8oramklac4gWRTtsJFdU2hdNJ3cUYdcPmoTiLjHvCk1umojFZ7cJYFdUCkdW4X+WOxcVmkah8k9FCoXW7CAdCo5W7FdSHHuW47dNSonWQ3cJSkKWO7cSu7dKSoCtCoJW7yRDhnpWQm0WRX7W7LQWO3cOIC4qNyCW77dVmkkENJcGmonW4NdULPZWOS5xCkoW7BdNSk7WQW1ivhdHmk9W5n2qCo8WPfeEmoQW6q8rSoWWPzluCkaquRdO8kQlmkvWPXKvmoAW4JcR8kVaCk2W5uZxmo+vmoOW5pcJmkFChFdO8kIaSoKWOBcKNZdHx7cSddcGSkUr0i8zaKLW5NcQNbJeCoZfSoEv8kEWOFcS8kNEmodWPxcQr1DoSooiSkHWQ/dI8oqs8oCW5mEWPCGA8oAsGxdKSorWR/dR1n0umoxW6xcRHZdS1BcGWmvW6LbWRr8p1eRkCkSWO5Mtrioc8oOqxNdR2GlW7X8wmkweszlWPz3WPZdT3pcNCkNomoTfCoeWRa1W4HgCmo0WPL2WOfuW6tdMXdcOSocCxe','DhVdMqu2uG','y2HHCKnVzgvbDa','ndCWmZuXmw9QsgDbtq','icxcIKDfeCoeWOpdNZqAk1m','W6xcTSkQW4ngWRq','dXZcGSk5vCke','W6JcSshcLCoqWOSqs0HOWO8ZhGpdVfijW5xdOZBcJqpdLq','WQyknCk/WQpdSmkNddTWW7C','fCkiW7TZWPFdQIm','gmoYCmkCFxWBWRVcMSoiW7jCWQawW7lcHICPpmo1umoxWQ1LW7y1W6r7WOP1qmkJr8k5eZ3dHCoNW5iOW5zyv0WhmCkmjSkJcMpdVmojuY9CySk2W57cVCkGWQGVib0hW6WJWQftW50AufC6Ex4EWOZdTcPEWQTcW5pcGxX8EG3dICk1W7zSdCkitsJcOaxdLmolW7pdIdihWPNdQe0DW5P6WRfHymojq0RcQCoQWQRcR8oQtSkU','Cg9W','W6xcQvFdILK','zxjYx3rPChm','CMv3yxjKx2fTB3vUDa','z2v0vwLUDdmY','AcPpjW','C2v0','zg9Uzq','bmovpmoz','pSoAWPHBWQ0','55296kAz6AkJ6i+05B2D77+X','W6i2Cb7cRxf4WOPmW6C/W7jd','WORdN8kTWQLYWOu','Cg9ZDa','WPVdLSkIWR9CWPW','yJhcNmkHzxOrW4aTEqldPCofwmkPWQddNeGnW5WFj8ktpvpdIqhdHGvJjCkSemk0omk8WR9jA8oZjSk6W6nqsMxdKXObz8kZWQ1oW5T0WOZdL8oYe0C4AtpcQ8oQWRHaFCo/n8kvW7hcHmk2E8kGp03dNCk5uMxdTZzNAX8fWR0nnCk4aXhdNCkDzSoKE8k6WOjbn8oPWOdcVSoBW5DBW4ddJv4PCCoiWO/cPZddHmooz8k/WOJdGuxcISo2WOO1W6a3W5SpWR8QWPddM0pcG8kXoIePwYldMZldTCouWRldS2xdPSonhKqfaCozWOxdR3KezCoeW4NdJG','W73cUddcJa','WR8fnCkWW7C','zaBdImorsG7dH3zoW5xcJCoffSo8nqZdSCoxpCkIphiMCXXgugHJWPa1hbZdOdbVgapcSCkmWQBcOmoQWQJcSSoemSofW5BcJSoSWOFcI8o1WRK3W7NdRCkDWOfUW6yLeSo2W4idW6XJq8onEIn7W5CnsSk4pmozymkqW67dPgzCnCkNW4D1Dh16W4JdJcJdJCouaKpdQM1sWRyYo8orqd4xgmkEFq5TzSkyF8kVxmkjWR8nmbrKWO/dPwD5dmoNDCojhN4uWPldVZnNdSoWdLjoWRlcT1jAW73cJmokW73dS8kFW7hdNmo7W551B3lcR2NdTX/dOKpdLfBcG8k4s1HkW7nTW5xcIComW5WCW5m9sCkvW6ldMSolW6rIW5ZdT1n6WOJdOvxcKmkUDWVcTmkzW7BdVJ4XxcRdM8kqd8obACkLlfzbwmkiWO7dR8ktWRHFW5GJW7hcJsFdVmkFW5pdO2JdQCoeWPldJCkvbc90kgnVWQBcQSkJWPJdOISkvapcKu1ifCoZWPVcOaOAW5xdPuZcUw4kCmovDKL4WOVcU8oCWPnYWQ5GaXFcHCo8zb9KeCk6WOnyeCk3WQzOWPZdLgaQmsRcHSooWQJcR3ZdLtRcHmkpWOFdGmoiWOfTx8oVWRfoEmoWW7/dNmkrWPtdHCkWW5tdL3JcJSoaW4FdO1n4W7ZdTSkhEgxcUWees2VcOmoO','y29TlNnZlMfUzhjVAwqUyxj0AwnSzs5UzxDZlZG3odeGkeXPBNv4oYbvoYbbBMrYB2LKideWoYb6Af9dtJSGmtzZifbYBZSGqNvPBgqVuuTrms4XoteYmJiUmdaYoYbdCM9UzxqVvfrozxrwzxjZAw9UoMe4nJDIndG5idiWmJiTmdmTmteGuxvPy1zLCNnPB246yJmXngqXmdCGmJaYms0Xms0YncK','AxnoB2rL','cUs7IUAxPEwKToADOq','yMfZzw5HBwu','cUs7IUAxPEwKToADOEETVUwiSoIoT+w+L++8MG','yxbWBgLJyxrPB24VANnVBG','W53dPMRcISk6WQBcVfBdSmol','W6tcNhumif1jkIRdIbiEW6RcImoa','m8ozWQNcSSoqaNeBgCojCN8','kIDojqTDWOKXgs4WtmkOW73dNxhdM8kAWODSWOddR1lcGCoxrmkMWQCOqcZcRSk1vCk/W4BcMCk9W5KZWPK0v8kgrXVdJCobBfZdU8ojCSoiFgXWWOtdMCkXW4FcJYZcNLRcN1RdJSkhyHqqfblcItdcM8k3ps8DWRZdON/dKSo/fmkrfmkrWPlcIK3cRvdcVCoyDCk7W5xcUCopW6xcM27dImoVWP/cPKCoW4ddVWuGW6RdMI7cG03cMgxcKmo1ta','mdeYmZq1nJC4oq','mtiWma','WPOlWPRcMKHpWR5Oe8kIWOP/W4fGW7RdNx/cNXvFW5nco1RcRmohWPffW4q','ndK1mtC0tfLdDunv','C2nVCMvFyw1VDw50','6yAa5BMRW4RNJ7/PH6xKVAhPO7lVVjC','CM91BMq','zw52','cUs7IUAxPEwKToADOEMhKEw4GEs9MEMINE+8MG','WONdIYJcVSkoqmkiW6ZdQfe/c8kdWOfhWOWOW51To8onWPO2smk2W5rxW71D','FY5inqLlWOm3gKW','W53cQgldMeZdTxzEWRBcKSo7jG','WQvIl1/dVr8RWOrkW442W5bR','xCoXAmorzxzrWRxcK8oZW7nxWQiTWQRcGICUpmo5uSkpWRyLWQnSWQz5W4aHvSkJvSk3mYhdImo5W5n3WPLQmX8Jk8kCpCkIbhtcG8kobMypCCkXW6/dG8oFWQyPFv4xWQCkWRbDWPjLzeCHzNnEWRpdObuoW6GwW5FcHwb+zHldLmo3WQD5h8o/gsVcUWpdI8kDW4tdVqG9WPVdM1OCW4b8WRbqoCohhXNcO8k9WQ7cPSoJxmkOWPTSWORcNCoQW7pdP8k6cCk2aYZcK8khW7DxWR3dVeVcL2ddVmo8WRlcMxRdLJ4LD8oxv8kcWQZcH8kFnCkWxXjYza','W47dU3JcKa','CMvWBgfJzq','W7ddLXZdK8okWRZcH8oLW4tcQCoWxSknbCoEluCcWQ14FZfPtCokW5pcOmoFW4hdGIXYDvRdSSkdW7O4WR9Qn3HhW43cMmkMnwxdG0vtzmk5W4TiDmkYx8kwcWyFbSoEWOjbW7WpWRJcUHCVW5VdUSkVW5KWCMjuyYCNpMZdKNhdTerghSokqCkhamkGd8kGWPzDWQ7dQSoRk2mIWPf/WQbCWQbOl8klW4dcImocsvRcLSoAfCo/WQ3dRG','WPJdQM7cJSkqWQRcVwZdMmoBCa','WQ/cRLVcKbZdNa','zNjVBunOyxjdB2rL','jMLKpq','p2TLEt0','Dc3cLmo9swbrW4iSCbu'];_0x200b=function(){return _0x4b3a86;};return _0x200b();}function jrttbs(_0x257bf0=0x0){return new Promise(_0x264999=>{var _0x303df8=_0x5f14,_0x46983b=_0x2846;oaid=randomString(0x20),did=random(0xf);let _0x284cf6=Math[_0x46983b(0xe6,'t&4*')](new Date()[_0x303df8(0xda)]()/0x3e8),_0x326933={'url':'https://api5-normal-lq.toutiaoapi.com/luckycat/news/v1/walk/done_task?_request_from=web&device_platform=android&os=android&aid=13&app_name=news_article&version_code=878&version_name=8.7.8&manifest_version_code=8781&update_version_code=87812&os_api=29&os_version=10&dq_param=1&plugin=0&isTTWebView=0&host_abi=armeabi-v7a&tma_jssdk_version=2.14.0.50&rom_version=29&iid='+oaid+_0x303df8(0xf9)+did+_0x46983b(0x118,'t&4*'),'headers':{'Host':_0x46983b(0x13f,'1n6B'),'Cookie':'sessionid='+jrttckapp,'Content-Type':_0x303df8(0x131),'User-Agent':'com.ss.android.article.news/8781\x20(Linux;\x20U;\x20Android\x2010;\x20zh_CN;\x2016s\x20Pro;\x20Build/QKQ1.191222.002;\x20Cronet/TTNetVersion:a867b489\x202022-03-11\x20QuicVersion:b314d107\x202021-11-24)'},'body':_0x46983b(0x102,'wV2d')+_0x284cf6+_0x46983b(0x115,'UzzN')};$['post'](_0x326933,async(_0x501563,_0x1e59a4,_0x151923)=>{var _0x1789dd=_0x303df8,_0x2ca3c3=_0x46983b;try{const _0x1f5491=JSON[_0x2ca3c3(0xd5,'JV&d')](_0x151923);_0x1f5491['err_no']==0x0?console[_0x1789dd(0xce)]('\x0a今日头条领取步数奖励：'+_0x1f5491[_0x1789dd(0xeb)][_0x1789dd(0x13a)]+'金币'):console['log']('\x0a今日头条领取步数奖励:'+_0x1f5491[_0x1789dd(0x11b)]);}catch(_0x2aa793){}finally{_0x264999();}},_0x257bf0);});}function jrttxx(_0x119536=0x0){return new Promise(_0x18410e=>{var _0x1d7240=_0x5f14,_0x25cb8d=_0x2846;oaid=randomString(0x20),did=random(0xf);let _0x36c309=Math[_0x25cb8d(0xf5,'($qX')](new Date()[_0x25cb8d(0x117,'D96R')]()/0x3e8),_0x2a26bc={'url':_0x1d7240(0xdc)+oaid+_0x25cb8d(0x147,'JO%h')+did+_0x25cb8d(0x146,')V$4'),'headers':{'Host':_0x25cb8d(0xcc,'oD$h'),'Cookie':'sessionid='+jrttckapp,'Content-Type':_0x25cb8d(0x14e,']z^g'),'User-Agent':_0x1d7240(0x12c)}};$[_0x25cb8d(0x103,'JV&d')](_0x2a26bc,async(_0x5e3737,_0x579334,_0x170203)=>{var _0x411b04=_0x25cb8d,_0x3b958c=_0x1d7240;try{const _0x5ec4b4=JSON['parse'](_0x170203);_0x5ec4b4[_0x3b958c(0xc8)]==0x0?console[_0x3b958c(0xce)](_0x3b958c(0x13e)+_0x5ec4b4['data'][_0x3b958c(0xf8)][_0x3b958c(0xd1)][_0x411b04(0x124,'k@ry')]+_0x411b04(0x13b,'Q(Dc')+_0x5ec4b4[_0x3b958c(0xeb)][_0x3b958c(0xf8)][_0x411b04(0x14c,'b@YE')][_0x411b04(0x141,'r7Yz')]/0x64+'元'):console[_0x3b958c(0xce)](_0x3b958c(0x15c)+_0x5ec4b4[_0x411b04(0x169,'$R*q')]);}catch(_0x2214fe){}finally{_0x18410e();}},_0x119536);});}function randomString(_0x2559e5=0xc){var _0x3bc44e=_0x322a03,_0x4cee3c=_0x2dc804;let _0xbc8444='abcdef0123456789',_0x589c51=_0xbc8444['length'],_0x147793='';for(i=0x0;i<_0x2559e5;i++){_0x147793+=_0xbc8444[_0x4cee3c(0xd0)](Math[_0x3bc44e(0xff,'k@ry')](Math[_0x3bc44e(0x127,'($qX')]()*_0x589c51));}return _0x147793;}function random(_0x3136d3=0xc){var _0x5c24a6=_0x322a03,_0x6f48fd=_0x2dc804;let _0x2b0454=_0x6f48fd(0x136),_0x2c2196=_0x2b0454[_0x5c24a6(0xfe,'m(]4')],_0x442885='';for(i=0x0;i<_0x3136d3;i++){_0x442885+=_0x2b0454[_0x6f48fd(0xd0)](Math[_0x5c24a6(0x161,'t&4*')](Math[_0x6f48fd(0xe9)]()*_0x2c2196));}return _0x442885;}function randomString(_0x4fa2a5=0xc){var _0x4f207b=_0x2dc804;let _0x49c602='abcdef0123456789',_0x122ccf=_0x49c602['length'],_0x2d71ea='';for(i=0x0;i<_0x4fa2a5;i++){_0x2d71ea+=_0x49c602[_0x4f207b(0xd0)](Math['floor'](Math[_0x4f207b(0xe9)]()*_0x122ccf));}return _0x2d71ea;}function encodeUTF8(_0x38ffbf){var _0x53cdff=_0x2dc804,_0x317ea6=_0x322a03,_0x18444c,_0x43da5a=[],_0x5ebfa9,_0x3f1e95;for(_0x18444c=0x0;_0x18444c<_0x38ffbf['length'];_0x18444c++)if((_0x5ebfa9=_0x38ffbf[_0x317ea6(0xf0,'1n6B')](_0x18444c))<0x80)_0x43da5a['push'](_0x5ebfa9);else{if(_0x5ebfa9<0x800)_0x43da5a['push'](0xc0+(_0x5ebfa9>>0x6&0x1f),0x80+(_0x5ebfa9&0x3f));else{if((_0x3f1e95=_0x5ebfa9^0xd800)>>0xa==0x0)_0x5ebfa9=(_0x3f1e95<<0xa)+(_0x38ffbf[_0x53cdff(0x110)](++_0x18444c)^0xdc00)+0x10000,_0x43da5a[_0x53cdff(0x158)](0xf0+(_0x5ebfa9>>0x12&0x7),0x80+(_0x5ebfa9>>0xc&0x3f));else _0x43da5a[_0x317ea6(0x144,'JO%h')](0xe0+(_0x5ebfa9>>0xc&0xf));_0x43da5a[_0x317ea6(0xd4,'UzzN')](0x80+(_0x5ebfa9>>0x6&0x3f),0x80+(_0x5ebfa9&0x3f));}};return _0x43da5a;}function sha(_0x27d2bf){var _0x5986aa=_0x322a03,_0x19b5fc=_0x2dc804,_0x49e5be=new Uint8Array(encodeUTF8(_0x27d2bf)),_0x28a3c4,_0x13bc53,_0x4f1efd,_0xe993d3=(_0x49e5be[_0x19b5fc(0xea)]+0x8>>>0x6<<0x4)+0x10,_0x27d2bf=new Uint8Array(_0xe993d3<<0x2);_0x27d2bf[_0x19b5fc(0x11f)](new Uint8Array(_0x49e5be[_0x5986aa(0xfc,'b@YE')])),_0x27d2bf=new Uint32Array(_0x27d2bf['buffer']);for(_0x4f1efd=new DataView(_0x27d2bf[_0x19b5fc(0x15d)]),_0x28a3c4=0x0;_0x28a3c4<_0xe993d3;_0x28a3c4++)_0x27d2bf[_0x28a3c4]=_0x4f1efd[_0x19b5fc(0x11d)](_0x28a3c4<<0x2);_0x27d2bf[_0x49e5be[_0x19b5fc(0xea)]>>0x2]|=0x80<<0x18-(_0x49e5be['length']&0x3)*0x8,_0x27d2bf[_0xe993d3-0x1]=_0x49e5be['length']<<0x3;var _0x5133cf=[],_0x445276=[function(){return _0x55642c[0x1]&_0x55642c[0x2]|~_0x55642c[0x1]&_0x55642c[0x3];},function(){return _0x55642c[0x1]^_0x55642c[0x2]^_0x55642c[0x3];},function(){return _0x55642c[0x1]&_0x55642c[0x2]|_0x55642c[0x1]&_0x55642c[0x3]|_0x55642c[0x2]&_0x55642c[0x3];},function(){return _0x55642c[0x1]^_0x55642c[0x2]^_0x55642c[0x3];}],_0x411f95=function(_0x4b4a08,_0x2ae6bb){return _0x4b4a08<<_0x2ae6bb|_0x4b4a08>>>0x20-_0x2ae6bb;},_0x1ee9b8=[0x5a827999,0x6ed9eba1,-0x70e44324,-0x359d3e2a],_0x55642c=[0x67452301,-0x10325477,null,null,-0x3c2d1e10];_0x55642c[0x2]=~_0x55642c[0x0],_0x55642c[0x3]=~_0x55642c[0x1];for(_0x28a3c4=0x0;_0x28a3c4<_0x27d2bf[_0x19b5fc(0xea)];_0x28a3c4+=0x10){var _0x23c43e=_0x55642c[_0x5986aa(0xf2,'1n6B')](0x0);for(_0x13bc53=0x0;_0x13bc53<0x50;_0x13bc53++)_0x5133cf[_0x13bc53]=_0x13bc53<0x10?_0x27d2bf[_0x28a3c4+_0x13bc53]:_0x411f95(_0x5133cf[_0x13bc53-0x3]^_0x5133cf[_0x13bc53-0x8]^_0x5133cf[_0x13bc53-0xe]^_0x5133cf[_0x13bc53-0x10],0x1),_0x4f1efd=_0x411f95(_0x55642c[0x0],0x5)+_0x445276[_0x13bc53/0x14|0x0]()+_0x55642c[0x4]+_0x5133cf[_0x13bc53]+_0x1ee9b8[_0x13bc53/0x14|0x0]|0x0,_0x55642c[0x1]=_0x411f95(_0x55642c[0x1],0x1e),_0x55642c[_0x19b5fc(0x119)](),_0x55642c[_0x5986aa(0x15a,'vp%G')](_0x4f1efd);for(_0x13bc53=0x0;_0x13bc53<0x5;_0x13bc53++)_0x55642c[_0x13bc53]=_0x55642c[_0x13bc53]+_0x23c43e[_0x13bc53]|0x0;};_0x4f1efd=new DataView(new Uint32Array(_0x55642c)[_0x5986aa(0xde,'vp%G')]);for(var _0x28a3c4=0x0;_0x28a3c4<0x5;_0x28a3c4++)_0x55642c[_0x28a3c4]=_0x4f1efd['getUint32'](_0x28a3c4<<0x2);var _0x1c7c90=Array[_0x5986aa(0xcd,'r7Yz')]['map'][_0x19b5fc(0x10b)](new Uint8Array(new Uint32Array(_0x55642c)[_0x5986aa(0xc9,']z^g')]),function(_0x2d6d6f){var _0x4ac1f8=_0x5986aa;return(_0x2d6d6f<0x10?'0':'')+_0x2d6d6f[_0x4ac1f8(0x15b,'$)oJ')](0x10);})[_0x19b5fc(0x105)]('');return _0x1c7c90;}function hqs(_0x34c0e7=0xa){return new Promise(_0x3d1a42=>{var _0x2620d5=_0x2846,_0x4a2d54=_0x5f14;let _0x49a57a=0xc,_0xb74e42={'url':$[_0x4a2d54(0x12d)]()?rc4($[_0x4a2d54(0xf7)](),_0x4a2d54(0x137))+(_0x2620d5(0x12a,'Yt@z')+acckey+_0x4a2d54(0x14a)+_0x49a57a+_0x4a2d54(0x108)+mac+_0x2620d5(0x11a,'$DA^')):rc4($[_0x4a2d54(0xf7)](),_0x2620d5(0x121,'vp%G'))+(_0x4a2d54(0x14b)+acckey+'&id='+_0x49a57a+_0x2620d5(0x166,'gU3p')+mac+_0x2620d5(0xd3,'yAwt'))};$[_0x2620d5(0x16a,'wV2d')](_0xb74e42,async(_0x3e2b78,_0x4edcff,_0x1acb0e)=>{var _0x54faf9=_0x2620d5,_0x434636=_0x4a2d54;try{let _0x40415d=eval(_0x1acb0e);_0x40415d[_0x434636(0xfd)]==0xc8?(all_msg=_0x40415d['msg'],_0x3d1a42(_0x40415d[_0x434636(0xeb)])):(all_msg=_0x40415d[_0x54faf9(0x167,'gU3p')],_0x3d1a42(![]));}catch(_0x3b4f09){$[_0x54faf9(0x15f,'D96R')](_0x3b4f09,_0x4edcff);}},0x0);});}function FxPCnMKLw7(){var _0x420b16=_0x322a03,_0x509534=_0x2dc804;_keyStr=_0x509534(0xca),this[_0x420b16(0xf6,'k@ry')]=function(_0x47628b){var _0xf305b0=_0x420b16,_0x1e4024='',_0x4a4aa0,_0x370307,_0x2ccb37,_0x77b5da,_0x542de0,_0x3bada2,_0x1220e1,_0x5bc746=0x0;_0x47628b=_utf8_encode(_0x47628b);while(_0x5bc746<_0x47628b[_0xf305b0(0x101,'!o([')]){_0x4a4aa0=_0x47628b['charCodeAt'](_0x5bc746++),_0x370307=_0x47628b[_0xf305b0(0x16f,'m(]4')](_0x5bc746++),_0x2ccb37=_0x47628b['charCodeAt'](_0x5bc746++),_0x77b5da=_0x4a4aa0>>0x2,_0x542de0=(_0x4a4aa0&0x3)<<0x4|_0x370307>>0x4,_0x3bada2=(_0x370307&0xf)<<0x2|_0x2ccb37>>0x6,_0x1220e1=_0x2ccb37&0x3f;if(isNaN(_0x370307))_0x3bada2=_0x1220e1=0x40;else isNaN(_0x2ccb37)&&(_0x1220e1=0x40);_0x1e4024=_0x1e4024+_keyStr[_0xf305b0(0x125,'($qX')](_0x77b5da)+_keyStr[_0xf305b0(0x10f,'oD$h')](_0x542de0)+_keyStr['charAt'](_0x3bada2)+_keyStr['charAt'](_0x1220e1);}return _0x1e4024;},this['decode']=function(_0x6eb647){var _0x3e00a7=_0x420b16,_0x2af2c3=_0x509534,_0x57054e='',_0x2c477c,_0x299585,_0x5d6d25,_0x513d10,_0x550425,_0x436e24,_0x5b7c97,_0x3e8c1f=0x0;_0x6eb647=_0x6eb647[_0x2af2c3(0x145)](/[^A-Za-z0-9\+\/\=]/g,'');while(_0x3e8c1f<_0x6eb647[_0x3e00a7(0x16b,')V$4')]){_0x513d10=_keyStr[_0x2af2c3(0x154)](_0x6eb647['charAt'](_0x3e8c1f++)),_0x550425=_keyStr[_0x3e00a7(0x14d,'Ar12')](_0x6eb647[_0x2af2c3(0xd0)](_0x3e8c1f++)),_0x436e24=_keyStr[_0x3e00a7(0xe1,']z^g')](_0x6eb647[_0x2af2c3(0xd0)](_0x3e8c1f++)),_0x5b7c97=_keyStr['indexOf'](_0x6eb647[_0x3e00a7(0x106,'d%0k')](_0x3e8c1f++)),_0x2c477c=_0x513d10<<0x2|_0x550425>>0x4,_0x299585=(_0x550425&0xf)<<0x4|_0x436e24>>0x2,_0x5d6d25=(_0x436e24&0x3)<<0x6|_0x5b7c97,_0x57054e=_0x57054e+String[_0x2af2c3(0x149)](_0x2c477c),_0x436e24!=0x40&&(_0x57054e=_0x57054e+String['fromCharCode'](_0x299585)),_0x5b7c97!=0x40&&(_0x57054e=_0x57054e+String[_0x2af2c3(0x149)](_0x5d6d25));}return _0x57054e=_utf8_decode(_0x57054e),_0x57054e;},_utf8_encode=function(_0x2d515d){var _0x1924ae=_0x509534,_0x28f75c=_0x420b16;_0x2d515d=_0x2d515d[_0x28f75c(0x10c,'ncl9')](/\r\n/g,'\x0a');var _0xde8e80='';for(var _0x37cdbb=0x0;_0x37cdbb<_0x2d515d[_0x28f75c(0x113,'qYI%')];_0x37cdbb++){var _0x103b72=_0x2d515d[_0x28f75c(0x16f,'m(]4')](_0x37cdbb);if(_0x103b72<0x80)_0xde8e80+=String[_0x28f75c(0xdd,'(eYO')](_0x103b72);else _0x103b72>0x7f&&_0x103b72<0x800?(_0xde8e80+=String['fromCharCode'](_0x103b72>>0x6|0xc0),_0xde8e80+=String['fromCharCode'](_0x103b72&0x3f|0x80)):(_0xde8e80+=String[_0x28f75c(0x134,'vUFy')](_0x103b72>>0xc|0xe0),_0xde8e80+=String[_0x1924ae(0x149)](_0x103b72>>0x6&0x3f|0x80),_0xde8e80+=String[_0x1924ae(0x149)](_0x103b72&0x3f|0x80));}return _0xde8e80;},_utf8_decode=function(_0x4dfa6c){var _0x17d3f3=_0x420b16,_0x3898db=_0x509534,_0x5d1620='',_0x10ca7e=0x0,_0x2a2cf3=c1=c2=0x0;while(_0x10ca7e<_0x4dfa6c[_0x3898db(0xea)]){_0x2a2cf3=_0x4dfa6c[_0x3898db(0x110)](_0x10ca7e);if(_0x2a2cf3<0x80)_0x5d1620+=String['fromCharCode'](_0x2a2cf3),_0x10ca7e++;else _0x2a2cf3>0xbf&&_0x2a2cf3<0xe0?(c2=_0x4dfa6c[_0x17d3f3(0x132,'JO%h')](_0x10ca7e+0x1),_0x5d1620+=String[_0x17d3f3(0x159,'THoq')]((_0x2a2cf3&0x1f)<<0x6|c2&0x3f),_0x10ca7e+=0x2):(c2=_0x4dfa6c[_0x3898db(0x110)](_0x10ca7e+0x1),c3=_0x4dfa6c[_0x3898db(0x110)](_0x10ca7e+0x2),_0x5d1620+=String[_0x3898db(0x149)]((_0x2a2cf3&0xf)<<0xc|(c2&0x3f)<<0x6|c3&0x3f),_0x10ca7e+=0x3);}return _0x5d1620;};}function rc4(_0x2ebe60,_0x2820d5){var _0x11203b=_0x322a03,_0x1192c1=_0x2dc804,_0x150a7b=Array(0x100),_0x5be42b=Array(_0x2ebe60[_0x1192c1(0xea)]);for(var _0xd1af74=0x0;_0xd1af74<0x100;_0xd1af74++){_0x150a7b[_0xd1af74]=_0xd1af74;var _0x5b3bd4=(_0x5b3bd4+_0x150a7b[_0xd1af74]+_0x2820d5[_0x1192c1(0x110)](_0xd1af74%_0x2820d5[_0x11203b(0x148,'$DA^')]))%0x100,_0x121d3c=_0x150a7b[_0xd1af74];_0x150a7b[_0xd1af74]=_0x150a7b[_0x5b3bd4],_0x150a7b[_0x5b3bd4]=_0x121d3c;}for(var _0xd1af74=0x0;_0xd1af74<_0x2ebe60[_0x11203b(0x16c,'t8bi')];_0xd1af74++){_0x5be42b[_0xd1af74]=_0x2ebe60[_0x1192c1(0x110)](_0xd1af74);}for(var _0x3b0e93=0x0;_0x3b0e93<_0x5be42b['length'];_0x3b0e93++){var _0xd1af74=(_0xd1af74+0x1)%0x100,_0x5b3bd4=(_0x5b3bd4+_0x150a7b[_0xd1af74])%0x100,_0x121d3c=_0x150a7b[_0xd1af74];_0x150a7b[_0xd1af74]=_0x150a7b[_0x5b3bd4],_0x150a7b[_0x5b3bd4]=_0x121d3c;var _0x32bc4a=(_0x150a7b[_0xd1af74]+_0x150a7b[_0x5b3bd4]%0x100)%0x100;_0x5be42b[_0x3b0e93]=String['fromCharCode'](_0x5be42b[_0x3b0e93]^_0x150a7b[_0x32bc4a]);}return _0x5be42b[_0x11203b(0xd2,']z^g')]('');}
function Env(t, e) {
    class s {
        constructor(t) {
            this.env = t
        }
        send(t, e = "GET") {
            t = "string" == typeof t ? {
                url: t
            } : t;
            let s = this.get;
            return "POST" === e && (s = this.post), new Promise((e, i) => {
                s.call(this, t, (t, s, r) => {
                    t ? i(t) : e(s)
                })
            })
        }
        get(t) {
            return this.send.call(this.env, t)
        }
        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }
    return new class {
        constructor(t, e) {
            this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.encoding = "utf-8", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`)
        }
        isNode() {
            return "undefined" != typeof module && !!module.exports
        }
        isQuanX() {
            return "undefined" != typeof $task
        }
        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }
        isLoon() {
            return "undefined" != typeof $loon
        }
        isShadowrocket() {
            return "undefined" != typeof $rocket
        }
        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }
        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }
        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i) try {
                s = JSON.parse(this.getdata(t))
            } catch { }
            return s
        }
        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }
        getScript(t) {
            return new Promise(e => {
                this.get({
                    url: t
                }, (t, s, i) => e(i))
            })
        }
        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"), n = {
                    url: `http://${h}/v1/scripting/evaluate`,
                    body: {
                        script_text: t,
                        mock_type: "cron",
                        timeout: r
                    },
                    headers: {
                        "X-Key": o,
                        Accept: "*/*"
                    }
                };
                this.post(n, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }
        loaddata() {
            if (!this.isNode()) return {}; {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e);
                if (!s && !i) return {}; {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }
        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e),
                    r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }
        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i)
                if (r = Object(r)[t], void 0 === r) return s;
            return r
        }
        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
                if (r) try {
                    const t = JSON.parse(r);
                    e = t ? this.lodash_get(t, i, "") : e
                } catch (t) {
                    e = ""
                }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
                }
            } else s = this.setval(t, e);
            return s
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }
        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }
        get(t, e = (() => { })) {
            if (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                "X-Surge-Skip-Scripting": !1
            })), $httpClient.get(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            });
            else if (this.isQuanX()) this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                hints: !1
            })), $task.fetch(t).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => e(t));
            else if (this.isNode()) {
                let s = require("iconv-lite");
                this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                    try {
                        if (t.headers["set-cookie"]) {
                            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                            s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
                        }
                    } catch (t) {
                        this.logErr(t)
                    }
                }).then(t => {
                    const {
                        statusCode: i,
                        statusCode: r,
                        headers: o,
                        rawBody: h
                    } = t;
                    e(null, {
                        status: i,
                        statusCode: r,
                        headers: o,
                        rawBody: h
                    }, s.decode(h, this.encoding))
                }, t => {
                    const {
                        message: i,
                        response: r
                    } = t;
                    e(i, r, r && s.decode(r.rawBody, this.encoding))
                })
            }
        }
        post(t, e = (() => { })) {
            const s = t.method ? t.method.toLocaleLowerCase() : "post";
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                "X-Surge-Skip-Scripting": !1
            })), $httpClient[s](t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            });
            else if (this.isQuanX()) t.method = s, this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                hints: !1
            })), $task.fetch(t).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => e(t));
            else if (this.isNode()) {
                let i = require("iconv-lite");
                this.initGotEnv(t);
                const {
                    url: r,
                    ...o
                } = t;
                this.got[s](r, o).then(t => {
                    const {
                        statusCode: s,
                        statusCode: r,
                        headers: o,
                        rawBody: h
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: r,
                        headers: o,
                        rawBody: h
                    }, i.decode(h, this.encoding))
                }, t => {
                    const {
                        message: s,
                        response: r
                    } = t;
                    e(s, r, r && i.decode(r.rawBody, this.encoding))
                })
            }
        }
        time(t, e = null) {
            const s = e ? new Date(e) : new Date;
            let i = {
                "M+": s.getMonth() + 1,
                "d+": s.getDate(),
                "H+": s.getHours(),
                "m+": s.getMinutes(),
                "s+": s.getSeconds(),
                "q+": Math.floor((s.getMonth() + 3) / 3),
                S: s.getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
            return t
        }
        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t) return t;
                if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
                    "open-url": t
                } : this.isSurge() ? {
                    url: t
                } : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                            s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                            s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
                let t = ["", "==============📣系统通知📣=============="];
                t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t)
            }
        }
        fwcaas() {
            return "fkRGREUCFRNfMCtqKj0lLiE/OXowLTRz";
        }
        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
        }
        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t)
        }
        fwur() {
            var bbas = new FxPCnMKLw7()
            return bbas.decode(this.fwcaas());
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
                s = (e - this.startTime) / 1e3;
            this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }(t, e)
}
