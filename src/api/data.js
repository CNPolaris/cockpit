import request from '../utils/request';

/**
 * GPS数据
 * @returns {JSON} data
 */
export function getGpsApi(){
    return request({
        url: "/cockpit/gps",
        method: "get"
    })
}
/**
 * 对地速度获取
 * @returns {JSON} data
 */
export function getSpeedApi(){
    return request({
        url: "/cockpit/speed",
        method: "get"
    })
}
/**
 * 艏向获取
 * @returns {JSON} data
 */
export function getHeadingApi(){
    return request({
        url: "/cockpit/heading",
        method: "get"
    })
}
/**
 * 转向率获取
 * @returns {JSON} data
 */
export function getRotRateApi(){
    return request({
        url: "/cockpit/rot_rate",
        method: "get"
    })
}
/**
 * 环境风数据
 * @returns {JSON} data
 */
export function getWindApi() {
    return request({
        url: "/cockpit/wind",
        method: "get"
    })
}
/**
 * 驾控台控制数据
 * @returns {JSON} data
 */
export function getControlApi(){
    return request({
        url:"/cockpit/control",
        method: "get"
    })
}