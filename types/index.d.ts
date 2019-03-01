import Vue, { Component, PluginFunction, PluginObject, VueConstructor, DirectiveFunction, DirectiveOptions } from 'vue'

declare const MyLib:MyLib
export default MyLib
export interface MyLib {
    install: PluginFunction<MyLibPluginOptions>
    version: string
}

export interface MyLibPluginOptions{

}
