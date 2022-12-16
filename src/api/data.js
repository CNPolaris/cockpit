import request from '../utils/request';

export function getGpsApi(){
    return request({
        url: "/cockpit/gps",
        method: "get"
    })
}

export function getSpeedApi(){
    return request({
        url: "/cockpit/speed",
        method: "get"
    })
}

export function getHeadingApi(){
    return request({
        url: "/cockpit/heading",
        method: "get"
    })
}

export function getRotRateApi(){
    return request({
        url: "/cockpit/rot_rate",
        method: "get"
    })
}

export function getWindApi() {
    return request({
        url: "/cockpit/wind",
        method: "get"
    })
}

export function getControlApi(){
    return request({
        url:"/cockpit/control",
        method: "get"
    })
}