/***********************************

> 应用名称：傲软抠图
> 软件版本：1.6.5
> 下载地址：https://apps.apple.com/cn/app/id1490054676
> 脚本作者：Cuttlefish
> 微信账号：墨鱼手记
> 更新时间：2023-03-19
> 通知频道：https://t.me/ddgksf2021
> 问题反馈：https://t.me/ddgksf2013_bot
> 特别说明：本脚本仅供学习交流使用，禁止转载售卖
 
[rewrite_local]

# ～ 傲软抠图解锁会员权限（2023-03-19）@ddgksf2013
https://motibang.com:8001/api/1/ url script-response-body apowersoft.js

[mitm] 

hostname=motibang.com

***********************************/

var ddgksf2013= {
  "pay_vip_user_enabled" : 1,
  "has_carousel" : 0,
  "business_ads" : [
    {
      "id" : "banner_qq",
      "type" : 4,
      "weight" : 10
    },
    {
      "id" : "banner_bu",
      "type" : 4,
      "weight" : 90
    },
    {
      "id" : "express_qq",
      "type" : 3,
      "weight" : 0
    },
    {
      "id" : "express_bu",
      "type" : 3,
      "weight" : 0
    },
    {
      "id" : "splash_qq",
      "type" : 0,
      "weight" : 90
    },
    {
      "id" : "splash_bu",
      "type" : 0,
      "weight" : 10
    },
    {
      "id" : "splash_bu_video",
      "type" : 0,
      "weight" : 0
    },
    {
      "id" : "reward_qq",
      "type" : 2,
      "weight" : 50
    },
    {
      "id" : "reward_bu",
      "type" : 2,
      "weight" : 50
    },
    {
      "id" : "inters_qq",
      "type" : 1,
      "weight" : 90
    },
    {
      "id" : "inters_bu",
      "type" : 1,
      "weight" : 10
    },
    {
      "id" : "banner_banner_qq",
      "type" : 14,
      "weight" : 0
    },
    {
      "id" : "banner_banner_bu",
      "type" : 14,
      "weight" : 0
    },
    {
      "id" : "banner_express_qq",
      "type" : 14,
      "weight" : 50
    },
    {
      "id" : "banner_express_bu",
      "type" : 14,
      "weight" : 50
    }
  ],
  "policy_update_note" : "感谢您信任并使用磨题帮，我们更新了《隐私条款》。\n<b>更新日期：2022年8月21日</b>\n<b>生效日期：2022年8月21日</b>\n修订内容：根据《互联网用户账号信息管理规定》的要求，注册企业账户需要补充提供<b>注册运营地址</b>、<b>内容生产类别</b>、<b>统一社会信用代码</b>及<b>对外联系方式</b>等信息，我们还将收集<b>IP属地信息</b>，这些企业信息将向本企业账号名下磨题帮用户展示；在您发布题库、建立群组、发布评论时我们将收集您的<b>IP属地信息</b>。\n\n在您使用磨题帮App之前，请务必认真阅读《使用条款》和《隐私条款》的全部内容，以便您了解我们如何向您提供服务、保障您的合法权益，如何收集、使用、存储、共享您的相关个人信息，以及我们对您提供的相关信息的保护方式等。",
  "notice_unread_count" : 0,
  "pay_alipay_enabled" : 1,
  "follow_count" : 0,
  "is_individual_vip" : 1,
  "is_paid" : 1,
  "vip_expired" : "2092-12-16T06:34:38.000Z",
  "watch_ad_promo_enabled" : 1,
  "policy_update_version" : "20220821",
  "had_been_paid" : 0,
  "carousels" : [

  ],
  "vip_days_left" : 9999,
  "total_badges" : 0,
  "follower_count" : 0,
  "has_ads" : 0,
  "ads" : [

  ]
}
$done({body: JSON.stringify(ddgksf2013)});
