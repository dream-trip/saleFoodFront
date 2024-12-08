在nginx上部署：
修补nginx文件夹中的nginx.conf文件
server {
    listen 8088;//访问的端口号
    location / {
        root  html/dist;//打包后文件夹dist的位置
        index index.html index.htm;
        #解决404
        try_files $uri $uri/ /index.html;
    }
}
在windows系统上
配置完成后，cmd进入nginx文件目录，启动nginx
start nginx
重启nginx命令：nginx -s reload
关闭nginx命令：nginx -s stop









































