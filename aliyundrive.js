
1
/*
2
cron "0 9 * * *" autoSignin.js, tag=阿里云盘签到
3
*/
4
​
5
const axios = require('axios')
6
const { initInstance, getEnv, updateCkEnv } = require('./qlApi.js')
7
const notify = require('./sendNotify')
8
​
9
const updateAccesssTokenURL = 'https://auth.aliyundrive.com/v2/account/token'
10
const signinURL = 'https://member.aliyundrive.com/v1/activity/sign_in_list'
11
​
12
// 使用 refresh_token 更新 access_token
13
function updateAccesssToken(queryBody, remarks) {
14
  const errorMessage = [remarks, '更新 access_token 失败']
15
  return axios(updateAccesssTokenURL, {
16
    method: 'POST',
17
    data: queryBody,
18
    headers: { 'Content-Type': 'application/json' }
19
  })
20
    .then(d => d.data)
21
    .then(d => {
22
      const { code, message, nick_name, refresh_token, access_token } = d
23
      if (code) {
24
        if (
25
          code === 'RefreshTokenExpired' ||
26
          code === 'InvalidParameter.RefreshToken'
27
        )
28
          errorMessage.push('refresh_token 已过期或无效')
29
        else errorMessage.push(message)
30
        return Promise.reject(errorMessage.join(', '))
31
      }
32
      return { nick_name, refresh_token, access_token }
33
    })
34
    .catch(e => {
35
      errorMessage.push(e.message)
36
      return Promise.reject(errorMessage.join(', '))
37
    })
38
}
39
​
40
//签到
41
function sign_in(queryBody, access_token, remarks) {
42
  const sendMessage = [remarks]
43
  return axios(signinURL, {
44
    method: 'POST',
45
    data: queryBody,
46
    headers: {
47
      Authorization: 'Bearer ' + access_token,
48
      'Content-Type': 'application/json'
49
    }
50
  })
51
    .then(d => d.data)
52
    .then(json => {
53
      if (!json.success) {
54
        sendMessage.push('签到失败')
55
        return Promise.reject(sendMessage.join(', '))
56
      }
57
​
58
      sendMessage.push('签到成功')
