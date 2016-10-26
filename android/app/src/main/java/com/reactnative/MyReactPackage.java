package com.reactnative;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * Created by Administrator on 2016/10/18.
 */

public class MyReactPackage implements ReactPackage {

  @Override
  public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {

    List<NativeModule> modules=new ArrayList<>();
    modules.add(new MyNativeModule(reactContext));
    return modules;
  }


  @Override
  public List<Class<? extends JavaScriptModule>> createJSModules() {

    return Collections.emptyList();
  }


  @Override
  public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {

    return Collections.emptyList();
  }
}
