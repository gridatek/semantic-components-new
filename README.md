# Semantic Components

when i try to navigate to tag-input i have this error:

Angular is running in development mode.
\_untracked-chunk.mjs:2593 ERROR ɵNotFound: NG0201: No provider found for `InjectionToken SC_TAG_INPUT`. Source: Environment Injector. Find more at https://v21.angular.dev/errors/NG0201
at createRuntimeError (\_untracked-chunk.mjs:600:17)
at NullInjector.get (\_untracked-chunk.mjs:881:21)
at R3Injector.get (\_untracked-chunk.mjs:1206:27)
at R3Injector.get (\_untracked-chunk.mjs:1206:27)
at ChainedInjector.get (\_debug_node-chunk.mjs:7493:32)
at lookupTokenUsingModuleInjector (\_debug_node-chunk.mjs:890:31)
at getOrCreateInjectable (\_debug_node-chunk.mjs:913:10)
at ɵɵdirectiveInject (\_debug_node-chunk.mjs:7527:17)
at ɵɵinject (\_untracked-chunk.mjs:682:40)
at inject2 (\_untracked-chunk.mjs:691:10)
handleError @ \_untracked-chunk.mjs:2593
(anonymous) @ \_untracked-chunk.mjs:2609
runOutsideAngular @ \_untracked-chunk.mjs:2568
(anonymous) @ \_untracked-chunk.mjs:2602
(anonymous) @ \_router_module-chunk.mjs:123
Promise.catch
onClick @ \_router_module-chunk.mjs:122
RouterLink_click_HostBindingHandler @ \_router_module-chunk.mjs:167
executeListenerWithErrorHandling @ \_debug_node-chunk.mjs:7959
wrapListenerIn_markDirtyAndPreventDefault @ \_debug_node-chunk.mjs:7946
(anonymous) @ \_dom_renderer-chunk.mjs:566
