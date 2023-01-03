<div align=center>
    <img src="https://s2.loli.net/2023/01/01/QqlxOoVwS9gjrLy.jpg" alt="Logo" width="400">
    <h1>跨域异构系统</h1>
</div>

### 🦆功能
- 远程数据
    - GPS数据
    - 对地速度数据
    - 船首方向数据
    - 转向率数据
    - 环境风数据
    - 驾控台控制数据
- 船载监控
    - 实时视频
    - 云台控制

### 🦐数据接口与格式说明
1. GPS数据
    ```json
    url: "/cockpit/gps",
    method: "get",
    data: {
        "time_stamp": 1145141919191,
        "longitude": 112.11111,
        "latitude": 12.11111,
        "longi_dir": "E",
        "lati_dir": "N"
    }
    ```
2. 对地速度获取
    ```json
    url: "/cockpit/speed",
    method: "get",
    data: {
        "time_stamp": 1145141919191,
        "ground_longi_speed": 12.02,
        "ground_trans_speed": 2.01,
    }
    ```
3. 艏向获取
    ```json
    url: "/cockpit/heading",
    method: "get",
    data: {
        "time_stamp": 1145141919191,
        "heading": 150.01
    }
    ```
4. 转向率获取
    ```json
    url: "/cockpit/rot_rate",
    method: "get",
    data: {
        "time_stamp": 1145141919191,
        "rot_rate": 1.01
    }
    ```
5. 环境风数据
    ```json
    url: "/cockpit/wind",
    method: "get",
    data: {
        "time_stamp": 1145141919191,
        "wind_speed": 0.04,
        "wind_dir": 130.0,
        "wind_ref": "R"
    }
    ```
6. 驾控台控制数据
    ```json
    url:"/cockpit/control",
    method: "get",
    data: {
        "time_stamp": 1145141919191,
        "etele": 50.0,
        "wheel": 12.0,
    }
    ```

### 🩺Git提交规范参考

- `feat`增加新的业务功能
- `fix`修复业务问题/BUG
- `perf`优化性能
- `style`更改代码风格，不影响运行结果
- `refactor`重构代码
- `revert`撤销更改
- `test`测试相关，不涉及业务代码的更改
- `docs`文档和注释相关
- `wip`开发中
- `types`类型定义文件更改