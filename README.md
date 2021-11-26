# study
个人学习
此处记录一些学习记录、测试、错误等

## error

### git 443错误
- OpenSSL SSL_connect: Connection was reset in connection to github.com:443
> 解决：如果开启了VPN，则很可能是代理问题，一定要查看自己的VPN端口号，假如你的端口号是7890，在git bash命令行中输入以下命令即可：
```
git config --global http.proxy 120.0.0.1:7890
```
如果你之前git中已经设置过上述配置，则使用如下命令取消再进行配置即可

```
git config --unset http.proxy
```
> 因为我的代理是局部代理，只有浏览器设置会走代理，所以其余相关软件不会走代理，所以直接将clash设置为系统代理就解决了该问题。

## leetCode
- 排序
  冒泡排序

## vue相关


