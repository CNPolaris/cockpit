<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="24">
                <el-row :gutter="20" class="mgb20">
                    <el-col :span="12">
                        <el-card shadow="hover" :body-style="{ padding: '0px' }">
                            <div class="grid-content grid-con-1">
                                <!-- <i class="grid-con-icon"></i> -->
                                <div class="grid-cont-right">
                                    <div class="grid-num">{{ longitude }}{{ longi_dir }}</div>
                                    <div>经度</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="12">
                        <el-card shadow="hover" :body-style="{ padding: '0px' }">
                            <div class="grid-content grid-con-1">
                                <!-- <i class="grid-con-icon"></i> -->
                                <div class="grid-cont-right">
                                    <div class="grid-num">{{ latitude }}{{ lati_dir }}</div>
                                    <div>纬度</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
                <el-row :gutter="20" class="mgb20">
                    <el-col :span="6">
                        <el-card shadow="hover" :body-style="{ padding: '0px' }">
                            <div class="grid-content grid-con-2">
                                <!-- <i class="grid-con-icon"></i> -->
                                <div class="grid-cont-right">
                                    <div class="grid-num">{{ ground_longi_speed }}</div>
                                    <div>对地纵向速度</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="6">
                        <el-card shadow="hover" :body-style="{ padding: '0px' }">
                            <div class="grid-content grid-con-2">
                                <!-- <i class="grid-con-icon"></i> -->
                                <div class="grid-cont-right">
                                    <div class="grid-num">{{ ground_trans_speed }}</div>
                                    <div>对地横向速度</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="6">
                        <el-card shadow="hover" :body-style="{ padding: '0px' }">
                            <div class="grid-content grid-con-2">
                                <!-- <i class="grid-con-icon"></i> -->
                                <div class="grid-cont-right">
                                    <div class="grid-num">{{ heading }}</div>
                                    <div>艏向</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="6">
                        <el-card shadow="hover" :body-style="{ padding: '0px' }">
                            <div class="grid-content grid-con-2">
                                <!-- <i class="grid-con-icon"></i> -->
                                <div class="grid-cont-right">
                                    <div class="grid-num">{{ rot_rate }}</div>
                                    <div>转向率</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
                <el-row :gutter="20" class="mgb20">
                    <el-col :span="6">
                        <el-card shadow="hover" :body-style="{ padding: '0px' }">
                            <div class="grid-content grid-con-2">
                                <!-- <i class="grid-con-icon">
                                    <img src="../../assets/img/windSpeed.png"  style="height:100px; width:100px" />
                                </i> -->
                                <div class="grid-cont-right">
                                    <div class="grid-num">{{ windSpeed }}</div>
                                    <div>风速</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>    
                    <el-col :span="6">
                        <el-card shadow="hover" :body-style="{ padding: '0px' }">
                            <div class="grid-content grid-con-2">
                                <!-- <i class="grid-con-icon">
                                    <img src="../../assets/img/windDirect.png"  style="height:100px; width:100px" />
                                </i> -->
                                <div class="grid-cont-right">
                                    <div class="grid-num">{{ windDirect }}{{windRefer}}</div>
                                    <div>风向</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col> 
                    <el-col :span="6">
                        <el-card shadow="hover" :body-style="{ padding: '0px' }">
                            <div class="grid-content grid-con-2">
                                <!-- <i class="grid-con-icon">
                                    <img src="../../assets/img/carClock.png" style="height:100px; width:100px" />
                                </i> -->
                                <div class="grid-cont-right">
                                    <div class="grid-num">{{ etele }}</div>
                                    <div>车钟</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="6">
                        <el-card shadow="hover" :body-style="{ padding: '0px' }">
                            <div class="grid-content grid-con-2">
                                <!-- <i class="grid-con-icon">
                                    <img src="../../assets/img/06-rudder.png" style="height:100px; width:100px" />
                                </i> -->
                                <div class="grid-cont-right">
                                    <div class="grid-num">{{ wheel }}</div>
                                    <div>舵盘</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import { getGpsApi, getSpeedApi, getHeadingApi, getWindApi, getControlApi, getRotRateApi } from "../../api/data"
export default {
    name: "dashboard",
    data() {
        return {
            ws: null,
            lockReconnect : false,
            timeout: 30*1000,
            timeoutObj: null,
            serverTimeoutObj: null,
            timeoutNum: null,

            longitude: 119,
            latitude: 32,
            longi_dir: 'E',
            lati_dir: 'N',
            ground_longi_speed: 0,
            ground_trans_speed: -0.1,
            heading: 308.1,
            rot_rate: -1,
            windSpeed: 1.6,
            windDirect: 54,
            windRefer: 'R',
            carClock: -75,
            rudder: 41.2,
            etele: 0,
            wheel: 0,
            timer: null
        }
    },
    mounted(){
        // this.initWebSocket()
        // getGpsApi().then(res=>{
        //     console.log(res.data)
        // })
        this.$nextTick(()=>{
            this.getGpsData()
            this.getSpeedData()
            this.getHeadingData()
            this.getRotRateData()
            this.getWindData()
            this.getControlData()
        })
        this.timer = setInterval(()=>{
            setTimeout(this.getGpsData(), 0)
            setTimeout(this.getSpeedData(), 1)
            setTimeout(this.getHeadingData(), 2)
            setTimeout(this.getRotRateData(), 3)
            setTimeout(this.getWindData(), 4)
            setTimeout(this.getControlData(), 5)
        }, 1000)
    },
    beforeUnmount() {
        // this.ws.close()
        // clearTimeout(this.timeoutObj)
        // clearTimeout(this.serverTimeoutObj)
        clearInterval(this.timer)
        this.timer = null
    },
    methods: {
        getGpsData(){
            getGpsApi().then(res=>{
                const data = res
                this.longitude = data.longitude
                this.latitude = data.latitude
                this.longi_dir = data.longi_dir
                this.lati_dir = data.lati_dir
            })
        },
        getSpeedData(){
            getSpeedApi().then(res=>{
                this.ground_longi_speed = res.ground_longi_speed
                this.ground_trans_speed = res.ground_trans_speed
            })
        },
        getHeadingData(){
            getHeadingApi().then(res=>{
                this.heading = res.heading
            })
        },
        getRotRateData(){
            getRotRateApi().then(res=>{
                this.rot_rate = res.rot_rate
            })
        },
        getWindData(){
            getWindApi().then(res=>{
                this.windSpeed = res.wind_speed
                this.windDirect = res.wind_dir
                this.windRefer = res.wind_ref
            })
        },
        getControlData(){
            getControlApi().then(res=>{
                this.etele = res.etele
                this.wheel = res.wheel
            })
        },
        initWebSocket(){
            const url = "ws://127.0.0.1:8000/ship/data/1/"
            if(typeof(WebSocket) === undefined){
                console.log("浏览器不支持WebSocket")
            } else {
                this.ws = new WebSocket(url)
                this.ws.onopen = this.onopen
                this.ws.onmessage = this.onmessage
                this.ws.onclose = this.onclose
                this.ws.onerror = this.onerror
            }
        },
        reconnect(){
            // console.log("重连")
            const _this = this
            if(_this.lockReconnect){
                return
            }
            _this.lockReconnect = true
            _this.timeoutNum && clearTimeout(_this.timeoutNum)
            _this.timeoutNum = setTimeout(function(){
                _this.initWebSocket()
                _this.lockReconnect = false
            }, 5000)
        },
        reset(){
            // console.log("重置心跳")
            const _this = this
            clearTimeout(_this.timeoutObj)
            clearTimeout(_this.serverTimeoutObj)
            _this.start()
        },
        start(){
            // console.log("开启心跳")
            const _this = this
            _this.timeoutObj && clearTimeout(_this.timeoutObj)
            _this.serverTimeoutObj && clearTimeout(_this.serverTimeoutObj)
            _this.timeoutObj = setTimeout(function(){
                if (_this.ws.readyState === 1){
                    _this.ws.send("test head")
                } else {
                    // if (_this.$route.path = '/dashboard'){
                    //     _this.reconnect()
                    // }
                    _this.reconnect()
                }
                _this.serverTimeoutObj = setTimeout(function(){
                    _this.ws.close()
                }, _this.timeout)
            }, _this.timeout)
        },
        onopen(){
            // console.log("连接成功")
            this.start()
        },
        onmessage(e){
            // console.log("收到",e.data)
            let data = JSON.parse(e.data)
            this.lng = data.lng
            this.lat = data.lat
            this.speedCol = data.speedCol
            this.speedRow = data.speedRow
            this.direct = data.direct
            this.turnRate = data.turnRate
            this.windSpeed = data.windSpeed
            this.windDirect = data.windDirect
            this.carClock = data.carClock
            this.rudder = data.rudder
            this.reset()
        },
        onclose(e){
            console.log("连接关闭")
            this.reconnect()
        },
        onerror(e){
            console.log("出现错误", e)
            this.reconnect()
        }
    }

};
</script>

<style scoped>
.el-row {
    margin-bottom: 20px;
}

.grid-content {
    display: flex;
    align-items: center;
    height: 100px;
}

.grid-cont-right {
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: #999;
}

.grid-num {
    font-size: 30px;
    font-weight: bold;
}

.grid-con-icon {
    font-size: 50px;
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    color: #fff;
}

.grid-con-1 .grid-con-icon {
    background: rgb(45, 140, 240);
}

.grid-con-1 .grid-num {
    color: rgb(45, 140, 240);
}

.grid-con-2 .grid-con-icon {
    background: rgb(100, 213, 114);
}

.grid-con-2 .grid-num {
    color: rgb(45, 140, 240);
}

.grid-con-3 .grid-con-icon {
    background: rgb(242, 94, 67);
}

.grid-con-3 .grid-num {
    color: rgb(242, 94, 67);
}

.user-info {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 2px solid #ccc;
    margin-bottom: 20px;
}

.user-avator {
    width: 120px;
    height: 120px;
    border-radius: 50%;
}

.user-info-cont {
    padding-left: 50px;
    flex: 1;
    font-size: 14px;
    color: #999;
}

.user-info-cont div:first-child {
    font-size: 30px;
    color: #222;
}

.user-info-list {
    font-size: 14px;
    color: #999;
    line-height: 25px;
}

.user-info-list span {
    margin-left: 70px;
}

.mgb20 {
    margin-bottom: 20px;
}

.todo-item {
    font-size: 14px;
}

.todo-item-del {
    text-decoration: line-through;
    color: #999;
}

.schart {
    width: 100%;
    height: 300px;
}
</style>
