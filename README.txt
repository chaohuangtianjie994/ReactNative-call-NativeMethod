本程序功能：React-Native调用原生方法。


说明如下：本程序以复用原生Toast方法为例来展示如何复用原生方法。

详细步骤：

1、用Android Studio打开一个已经存在的RN项目，即用AS打开 项目文件夹/android/build.gradle文件。
 
2、在Android原生这边创建一个类继承ReactContextBaseJavaModule，这个类里边放我们需要被RN调用的方法，将其封装成一个原生模块。
 
3、在Android原生这边创建一个类实现接口ReactPackage包管理器，并把第二步创建的类加到原生模块（NativeModule）列表里。
 
4、将第三步创建的包管理器添加到ReactPackage列表里（getPackage方法里）
 
5、在RN中去调用原生模块，必须import  NativeModule模块。




关于本程序的详细的说明，请见中文博客，博客详细阐述了如何调用更加复杂的原生方法，并且实现了数据的回调，更加具有参考价值。

http://blog.csdn.net/qq_25827845/article/details/52862892



author：ywq


email：956283501@qq.com