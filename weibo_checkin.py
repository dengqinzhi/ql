# 更新日期：2023.4.13
# 版本：1.0
import json
import requests
import re
import time
import random
import os
# 在脚本开始时等待 0 到 3600 秒 (0 到# 1 小时)
sleep_time = random.randint(5,60)
time.sleep(sleep_time)

weibo_cookie=os.getenv("weibo_cookie")
weibo_cookies = weibo_cookie.split('&')
weibo_chaohua_id = os.getenv("weibo_chaohua_id")
super_topic_active_ids = weibo_chaohua_id.split('&')

# 配置 headers 和 cookies
user_agents = [
    "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36 Edg/111.0.1661.54"
]

# 这里是选择Server酱的推送方式，填写Sendkey，不想使用的话直接忽略
#SCKEY = 'SCT11080TKytAWNgus1dau3OtCGiOy56W'
SCKEY = ''
# 推送PLUS的token
Token = 'f149797c8f0b47e09716489133c3a383'

def push(content):
    print(content)
    if SCKEY != '':
        url = "https://sctapi.ftqq.com/{}.send?title={}&desp={}".format(SCKEY, '微博超话签到', content)
        requests.post(url)
        print('推送完成')
    elif Token != '':
        headers = {'Content-Type': 'application/json'}
        json = {"token": Token, 'title': '微博超话签到', 'content': content, "template": "json"}
        resp = requests.post(f'http://www.pushplus.plus/send', json=json, headers=headers).json()
        print('push+推送成功' if resp['code'] == 200 else 'push+推送失败')
    else:
        print('未使用消息推送推送！')


def random_wait(min_wait=5, max_wait=20):
    wait_time = random.randint(min_wait, max_wait)
    time.sleep(wait_time)

def check_in(cookies, active_id):
    global content
    header = {'cookie': cookies,
        "User-Agent": random.choice(user_agents),
        "Referer": "https://weibo.com/"}
    header["User-Agent"] = random.choice(user_agents)
    url = 'https://weibo.com/p/{}/super_index'.format(active_id)
    session = requests.Session()
    random_wait()
    #response = session.get(url, headers=header)
    #print(f"找到 active_id: {active_id}")
    # 在这里处理 active_id
    checkin_url = f"https://weibo.com/p/aj/general/button?id={active_id}&api=http://i.huati.weibo.com/aj/super/checkin"
    checkin_response = session.get(checkin_url, headers=header)
    # 获取超话社区名字
    html_info = requests.get(url=url, headers=header).text
    info = "".join(re.findall('<title>(.*?)</title>', html_info, re.S))
    info = info.replace('—新浪微博超话社区', '')
    checkin_result = json.loads(checkin_response.text)
    #print(checkin_result)
    content = content +  info + '   ' + checkin_result['msg'] + '\n'

if __name__ == "__main__":
    print("开始运行微博超话签到程序...")
    
    random.shuffle(weibo_cookies)  # 随机化签到顺序
    content = ''
    for cookies in weibo_cookies:
        random_wait()
        try:
            random.shuffle(super_topic_active_ids)  # 随机化签到顺序
            for active_id in super_topic_active_ids:
                check_in(cookies, active_id)
                random_wait()  # 在签到之间添加随机等待时间

            header = {'cookie': cookies,
                      "User-Agent": random.choice(user_agents),
                      "Referer": "https://weibo.com/"}
            header["User-Agent"] = random.choice(user_agents)
            response1 = requests.get("https://security.weibo.com/account/security", headers=header).text
            response2 = "".join(re.findall('<p class="page S_txt2">(.*?)</p>', response1, re.S))
            response2 = response2.replace('<p class="page S_txt2">', '')
            response2 = response2.replace('</p>', '')
            response2 = response2.replace('&nbsp;1ä¸ªæªå¼å¯&nbsp;', '')
            random_wait()
            response1 = requests.get("https://account.weibo.com/set/index", headers=header).text
            response3 = "".join(re.findall("'nick':'(.*?)',", response1, re.S))
            response3 = response3.replace(':', '')
            response3 = response3.replace("'nick''", '')
            response3 = response3.replace("',", '')
            content = content + "登录名:{}，昵称:{}  完成超话签到。\n\n".format(response2,response3)


        except:
            content =content + '签到失败，可能是cookie失效,请及时更新cookie。\n\n'

    push(content)
print("已完成签到.")
