<template>
    <el-row :gutter="10">
        <el-col :span="24">
            <video autoplay controls width="100" :muted="true" id="myVideo" />
        </el-col>
        <!-- <el-col :span="4">
            <el-row>
                <el-col :span="8" :xs="24">
                    <el-button @click="onLeftTopBtnClicked">
                        <el-icon class="el-icon-just-zuoshang"></el-icon>
                    </el-button>
                </el-col>
                <el-col :span="8" :xs="24">
                    <el-button @click="onTopBtnClicked">
                        <el-icon class="el-icon-just-xiangshang"></el-icon>
                    </el-button>
                </el-col>
                <el-col :span="8" :xs="24">
                    <el-button @click="onRightTopBtnClicked">
                        <el-icon class="el-icon-just-youshang"></el-icon>
                    </el-button>
                </el-col>
            </el-row>
            <el-row style="margin-top: 10px;">
                <el-col :span="8" :xs="24">
                    <el-button @click="onLeftBtnClicked">
                        <el-icon class="el-icon-just-xiangzuo"></el-icon>
                    </el-button>
                </el-col>
                <el-col :span="8" :xs="24">
                    <el-button @click="onAutoBtnClicked">
                        <el-icon class="el-icon-just-youxuzidonghua"></el-icon>
                    </el-button>
                </el-col>
                <el-col :span="8" :xs="24">
                    <el-button @click="onRightBtnClicked">
                        <el-icon class="el-icon-just-xiangyou"></el-icon>
                    </el-button>
                </el-col>
            </el-row>
            <el-row style="margin-top: 10px;">
                <el-col :span="8" :xs="24">
                    <el-button @click="onLeftBottomBtnClicked">
                        <el-icon class="el-icon-just-zuoxia"></el-icon>
                    </el-button>
                </el-col>
                <el-col :span="8" :xs="24">
                    <el-button @click="onBottomBtnClicked">
                        <el-icon class="el-icon-just-xiangxia"></el-icon>
                    </el-button>
                </el-col>
                <el-col :span="8" :xs="24">
                    <el-button @click="onRightBottomBtnClicked">
                        <el-icon class="el-icon-just-youxia"></el-icon>
                    </el-button>
                </el-col>
            </el-row>
            <el-row style="margin-top: 10px;">
                <el-col :span="12" :xs="24">
                    <el-button @click="onZoomInClicked">
                        <el-icon class="el-icon-just-suofangda"></el-icon>
                    </el-button>
                </el-col>
                <el-col :span="12" :xs="24">
                    <el-button @click="onZoomOutClicked">
                        <el-icon class="el-icon-just-suofangxiao"></el-icon>
                    </el-button>
                </el-col>
            </el-row>
        </el-col> -->
    </el-row>
</template>

<script>
import flvjs from 'flv.js/dist/flv.min.js'
export default {
    name: "video",
    data() {
        return {
            flvPlayer: null,
            url: "http://64broyjqi0.xuduan.vip:44832/0.flv"
        }
    },
    mounted() {
        this.videoFlvPlay()
    },
    beforeDestroy() {
        this.destroyVideo()
    },
    methods: {
        videoFlvPlay() {
            if (flvjs.isSupported()) {
                if (this.flvPlayer) {
                    this.flvPlayer.pause()
                    this.flvPlayer.unload()
                    this.flvPlayer.detachMediaElement()
                    this.flvPlayer.destroy()
                }
                this.flvPlayer = flvjs.createPlayer(
                {
                    type: 'flv',
                    url: this.url
                },
                {
                    cors: true,  //????????????
                    enableWorker: true,  //?????????????????????
                    anableStashBuffer: false,  //??????????????????
                    stashInitialSize: 384,  //????????????(kb) ??????384kb
                    autoCleanupSourceBuffer: true  //??????????????????
                }
                )
                this.flvPlayer.attachMediaElement(document.getElementById('myVideo'))
                this.flvPlayer.load()
                this.flvPlayer.play()
                //????????????
                this.flvPlayer.on(flvjs.Events.ERROR, (errType, errDetail) => {
                console.log('errType:', errType)
                console.log('errorDetail:', errDetail)
                if(this.flvPlayer){
                        this.destroyVideo()
                        this.videoFlvPlay()
                    }
                })
            }
        },
        destroyVideo() {
            if (this.flvPlayer) {
                this.flvPlayer.pause()
                this.flvPlayer.unload()
                this.flvPlayer.detachMediaElement()
                this.flvPlayer.destroy()
                this.flvPlayer = null
            }
        },
        videoPlayer() {
            if (flvjs.isSupported()) {
                var videoElement = document.getElementById('myVideo');
                var flvPlayer = flvjs.createPlayer({
                    type: 'flv',
                    url: 'url' //??????url??????
                });
                flvPlayer.attachMediaElement(videoElement);
                flvPlayer.load();
                flvPlayer.play();
            }
        },
        onPlayerPlay(player) {
            console.log('player play!', player) 
        },
        onLeftTopBtnClicked(){
            console.log("??????")
        },
        onTopBtnClicked(){
            console.log("???")
        },
        onRightTopBtnClicked(){
            console.log("??????")
        },
        onLeftBtnClicked(){
            console.log("???")
        },
        onAutoBtnClicked(){
            console.log("??????")
        },
        onRightBtnClicked(){
            console.log("???")
        },
        onLeftBottomBtnClicked(){
            console.log("??????")
        },
        onBottomBtnClicked(){
            console.log("???")
        },
        onRightBottomBtnClicked(){
            console.log("??????")
        },
        onZoomOutClicked(){
            console.log("????????????")
        },
        onZoomInClicked(){
            console.log("????????????")
        }
    }
}
</script>
<style>
    video{
        width:100%;
        height:auto;
    }
</style>