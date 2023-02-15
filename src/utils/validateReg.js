/**
 * 用户名称正则 userNameReg 字母，数字，下划线，中划线，中文任意
 * 手机号正则   phoneReg
 * 固定电话正则 fixPhoneReg
 * 邮箱正则     emailReg
 * 身份证正则   IDCardReg(大陆-大陆 15位或者18位，香港-香港 C8816091，台湾-台湾 Y100900765，澳门-澳门82000019780318171X )
 * 输入的充值金额正则 rechargeNumReg
 * 是否含有汉字正则   isIncludesChineseReg
 * 包含一个以上的字母和数字正则 onlyLetterNumReg
 * 包含一个以上的字母、数字或下划线的字符串 
 */

const userNameReg = /^[a-z|A-Z|0-9|_||-|\\u4E00-\\u9FFF]+$/
const phoneReg = /1[2-9][0-9]{9}/
const fixPhoneReg = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/
const emailReg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

const mainLandIDCardReg = /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[xX])$/
const hongKongIDCardReg = /^((\s?[A-Za-z])|([A-Za-z]{2}))\d{6}(\([0−9aA]\)|[0-9aA])$/
const taiWanIDCardReg = /^[a-zA-Z][0-9]{9}$/
const macaoIDCardReg =  /^[1|5|7][0-9]{6}\([0-9Aa]\)/

const rechargeNumReg =  /((^[1-9]\d*)|^0)(.\d{0,2}){0,1}$/
const isIncludesChineseReg = /[\\u4E00-\\u9FFF]+/g
const onlyLetterNumReg = /^[0-9a-zA-Z]+$/
const onlyLetterNumUnderlineReg = /^[a-zA-Z0-9_]+$/

export default function (app) {
    app.config.globalProperties.$reg = {
        userNameReg,
        phoneReg,
        fixPhoneReg,
        emailReg,
        mainLandIDCardReg,
        hongKongIDCardReg,
        taiWanIDCardReg,
        macaoIDCardReg,
        rechargeNumReg,
        isIncludesChineseReg,
        onlyLetterNumReg,
        onlyLetterNumUnderlineReg
    }
  }