import Vue from 'vue'
import Router from 'vue-router'
/* 首页 */
import Home from '@/views/home/index'
/* 拍卖公告 */
import BULLETIN from '@/views/bulletin/index'
/* 拍卖 */
import AUCTION from '@/views/auction/index'
import Notice from '@/views/auction/notice'
import Result from '@/views/auction/result'
/* 拍卖中心 */
import AUCTIONCENTER from '@/views/auctioncenter/index'
import Collection from '@/views/auctioncenter/collection'
import Assets from '@/views/auctioncenter/assets'
import Right from '@/views/auctioncenter/right'
/* 藏品详情 */
import Details from "@/views/collectiondetails/details"
/* 新闻中心 */
import NEWS from '@/views/news/index'
import Laws from '@/views/news/laws'
import Information from '@/views/news/information'
/* 拍卖指南 */
import GUIDE from '@/views/guide/index'
import Buyer from '@/views/guide/buyer'
import Seller from '@/views/guide/seller'
import Process from '@/views/guide/process'
import Rule from '@/views/guide/rule'
import Program from '@/views/guide/program'
/* 关于我们 */
import ABOUTUS from '@/views/aboutus/index'
import Introduction from '@/views/aboutus/introduction'
import Development from '@/views/aboutus/development'
import Certificate from '@/views/aboutus/certificate'
import Structure from '@/views/aboutus/structure'
import Cooperation from '@/views/aboutus/cooperation'
import Contactus from '@/views/aboutus/contactus'
import Solicitation from '@/views/aboutus/solicitation'
/* 拍卖预告详情 */
import Noticedetails from "@/views/auction/noticedetail"
/* 新闻详情 */
import Newsdetails from "@/views/news/newsdetails"

Vue.use(Router)

export default new Router({

  routes: [
    /* 首页 */
    {
      path: '/',
      name: 'home',
      component: Home
    },
    /* 拍卖公告 */
    {
      path: '/bulletin',
      name: 'bulletin',
      component: BULLETIN
    },
    /* 拍卖 */
    {
      path: '/auction',
      component: AUCTION,
      children: [
        /* 拍卖预告 */
        {
          path: '/auction',
          name: 'auction',
          component: Notice
        },
        /* 拍卖结果 */
        {
          path: 'result',
          name: 'result',
          component: Result
        }
      ]
    },
    /* 拍卖中心 */
    {
      path: '/auctioncenter',
      component: AUCTIONCENTER,
      children: [
        /* 藏品展示 */
        {
          path: '/auctioncenter',
          name: 'auctioncenter',
          component: Collection
        },
        /* 优秀资产展示 */
        {
          path: 'assets',
          name: 'assets',
          component: Assets
        },
        /* 优秀权利展示 */
        {
          path: 'right',
          name: 'right',
          component: Right
        },
      ]
    },
    /* 藏品详情 */
    {
      path: '/details',
      name: 'details',
      component: Details
    },
    /* 新闻中心 */
    {
      path: '/news',
      component: NEWS,
      children: [
        /* 行业咨询 */
        {
          path: '/news',
          name: 'news',
          component: Information
        },
        /* 法律法规 */
        {
          path: 'laws',
          name: 'laws',
          component: Laws
        }
      ]
    },
    /* 关于我们 */
    {
      path: '/aboutus',
      component: ABOUTUS,
      children: [
        /* 公司介绍 */
        {
          path: '/aboutus',
          name: 'aboutus',
          component: Introduction
        },
        /* 发展历程 */
        {
          path: 'development',
          name: 'development',
          component: Development
        },
        /* 荣誉证书 */
        {
          path: 'certificate',
          name: 'certificate',
          component: Certificate
        },
        /* 组织架构 */
        {
          path: 'structure',
          name: 'structure',
          component: Structure
        },
        /* 合作机构 */
        {
          path: 'cooperation',
          name: 'cooperation',
          component: Cooperation
        },
        /* 联系我们 */
        {
          path: 'contactus',
          name: 'contactus',
          component: Contactus
        },
        /* 拍品征集 */
        {
          path: 'solicitation',
          name: 'solicitation',
          component: Solicitation
        }
      ]
    },
    /* 指南 */
    {
      path: '/guide',
      component: GUIDE,
      children: [
        /* 拍卖流程 */
        {
          path: '/guide',
          name: 'guide',
          component: Process
        },
        /* 买家指南 */
        {
          path: 'buyer',
          name: 'buyer',
          component: Buyer
        },
        /* 卖家指南 */
        {
          path: 'seller',
          name: 'seller',
          component: Seller
        },
        /* 拍卖指南 */
        {
          path: 'program',
          name: 'program',
          component: Program
        },
        /* 拍卖规则 */
        {
          path: 'rule',
          name: 'rule',
          component: Rule
        }
      ]
    },
    /* 拍卖预告详情 */
    {
      path: '/noticedetails',
      name: 'noticedetails',
      component: Noticedetails
    },
    /* 新闻详情 */
    {
      path: '/newsdetails',
      name: 'newsdetails',
      component: Newsdetails
    }
  ]
})
