#元素居中方法总结
##垂直居中
1、flex布局、grid布局
2、父元素display:table；子元素display:table-cell,vertacal-align:middle.
3、position；**为了避免自身高度的影响，要在子元素里设置tranform**
4、hight和linehight设置为一样的值
##水平居中
1、flex布局、grid布局
2、text-align:center；
3、margin:0 auto;
4、position **慎用**
##元素水平垂直都居中
一般使用flex布局即可满足需求，但是也可将上述方法结合起来。使用