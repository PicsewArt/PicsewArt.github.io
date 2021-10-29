/**
 * Created by Administrator on 2014/12/7.
 */
var com=window.com||{};
(function(doc,win){

    var _isArray=function(e){return e.constructor===Array},
        _loaded = {},
        _loadingQueue = {},
        _config={
            autoLoad: true,
            coreLib: [],
            mods: {}
        },
        _jsFiles = doc.getElementsByTagName('script'),
        _jsSelf = _jsFiles[_jsFiles.length-1],
        _jsConfig,
        _readyList=[],
        _isReady = false,
        _globalList=[],
        _load=function(url, type, charset,cb, context){
            var refFile = _jsFiles[0];
            if (!url) {
                return;
            }
            if (_loaded[url]) {
                _loadingQueue[url]=false;
                if (cb) {
                    cb(url, context);
                }
                return;
            }

            if (_loadingQueue[url]) {
                setTimeout(function() {
                    _load(url, type, charset, cb, context);
                }, 1);
                return;
            }

            _loadingQueue[url] = true;
            var n,t=type||url.toLowerCase().substring(url.lastIndexOf('.') + 1);
            if (t === 'js') {
                n = doc.createElement('script');
                n.setAttribute('type', 'text/javascript');
                n.setAttribute('src', url);
                n.setAttribute('async', true);
            } else if (t === 'css') {
                n = doc.createElement('link');
                n.setAttribute('type', 'text/css');
                n.setAttribute('rel', 'stylesheet');
                n.setAttribute('href', url);
                _loaded[url] = true;
            }

            if (charset) {
                n.charset = charset;
            }

            if (t === 'css') {
                refFile.parentNode.insertBefore(n, refFile);
                if (cb) {
                    cb(url, context);
                }
                return;
            }

            n.onload = n.onreadystatechange = function() {
                if (!this.readyState||this.readyState === 'loaded'||this.readyState === 'complete') {
                    _loaded[this.getAttribute('src')] = true;
                    if (cb) {
                        cb(this.getAttribute('src'), context);
                    }
                    n.onload = n.onreadystatechange = null;
                }
            };
            refFile.parentNode.insertBefore(n, refFile);
        },
        _calculate=function(e) {
            if (!e || !_isArray(e)) {
                return;
            }

            var i = 0,
                item,
                result = [],
                mods = _config.mods,
                depList = [],
                hasAdded={},
                getDepList = function(e) {
                    var i = 0, m, reqs;
                    // break loop require.
                    if (hasAdded[e]) {
                        return depList;
                    }
                    hasAdded[e] = true;
                    if (mods[e].requires) {
                        reqs = mods[e].requires;
                        for (; typeof (m = reqs[i++]) !== 'undefined';) {
                            // is a module.
                            if (mods[m]) {
                                getDepList(m);
                                depList.push(m);
                            } else {
                                // is a file.
                                depList.push(m);
                            }
                        }
                        return depList;
                    }
                    return depList;
                };

            for (;typeof (item=e[i++]) !== 'undefined';) {
                if (mods[item] && mods[item].requires && mods[item].requires[0]) {
                    depList = [];
                    hasAdded = {};
                    result = result.concat(getDepList(item));
                }
                result.push(item);
            }

            return result;
        },
        _run,
        _ready = function() {
            _isReady = true;
            if (_readyList.length >0) {
                _run.apply(this,_readyList);
                _readyList = [];
            }
        },
        _onDOMContentLoaded = function() {
            if (doc.addEventListener) {
                doc.removeEventListener('DOMContentLoaded', _onDOMContentLoaded, false);
            } else if (doc.attachEvent) {
                doc.detachEvent('onreadystatechange', _onDOMContentLoaded);
            }
            _ready();
        },
        _doScrollCheck = function() {
            if (_isReady) {
                return;
            }
            try{
                doc.documentElement.doScroll('left');
            } catch (err) {
                return win.setTimeout(_doScrollCheck,1);
            }
            _ready();
        },
        _bindReady = function() {
            if (doc.readyState === 'complete') {
                return win.setTimeout(_ready, 1);
            }

            var topLevel = false;

            if (doc.addEventListener) {
                doc.addEventListener('DOMContentLoaded', _onDOMContentLoaded, false);
                win.addEventListener('load', _ready, false);
            } else if (doc.attachEvent) {
                doc.attachEvent('onreadystatechange', _onDOMContentLoaded);
                win.attachEvent('onload', _ready);
                try {
                    topLevel = (win.frameElement === null);
                } catch (err){

                }
                if (document.documentElement.doScroll && topLevel) {
                    _doScrollCheck();
                }
            }
        },
        _Queue = function(e) {
            if (!e || !_isArray(e)) {
                return;
            }
            this.queue=e;
            this.current = null;
        };

        _Queue.prototype={
            _interval: 10,
            start: function() {
                var o = this;
                this.current = this.next();
                if (!this.current) {
                    this.end = true;
                    return;
                }

                this.run();
            },

            run: function() {
                var o = this, mod, currentMod = this.current;
                if (typeof currentMod === 'function') {
                    currentMod();
                    this.start();
                }else if(typeof currentMod === 'string'){
                    if (_config.mods[currentMod]) {
                        mod = _config.mods[currentMod];
                        _load(mod.path, mod.type, mod.charset, function(e) {
                            o.start();
                        },o);
                    } else if (/\.js|\.css/i.test(currentMod)) {
                        // load a file.
                        _load(currentMod,'', '', function(e, o) {
                            o.start();
                        },o);
                    } else {
                        // no found module. skip to next
                        this.start();
                    }
                }
            },
            next: function() { return this.queue.shift(); }
        };

    // 初始配置
    _jsConfig = _jsSelf.getAttribute('data-cfg-autoload');
    if (typeof _jsConfig === 'string') {
        _config.autoLoad = (_jsConfig.toLowerCase() === 'true');
    }

    _jsConfig = _jsSelf.getAttribute('data-cfg-corelib');
    if (typeof _jsConfig === 'string') {
        _config.coreLib = _jsConfig.split(',');
    }

    _run = function() {
        var args = [].slice.call(arguments),thread,i;
        //add to lonely
        for(i=0;i<args.length;i++){
            if(typeof args[i]=='object'){
                _run.add(args[i].path,args[i]);
                args[i]=args[i].path;
            }
        }

        if (_globalList.length > 0) {
            args =_globalList.concat(args);
        }

        if (_config.autoLoad) {
            args = _config.coreLib.concat(args);
        }

        thread = new _Queue(_calculate(args));
        thread.start();
    };

    _run.add = function(sName, oConfig) {
        if (!sName || !oConfig || !oConfig.path) {
            return;
        }
        _config.mods[sName] = oConfig;
    };

    _run.delay = function() {
        var args = [].slice.call(arguments), delay = args.shift();
        win.setTimeout(function() {
            _run.apply(this, args);
        }, delay);
    };

    _run.global = function() {
        var args = [].slice.call(arguments);
        _globalList = _globalList.concat(args);
    };

    _run.ready = function() {
        var args = [].slice.call(arguments);
        if (_isReady) {
            return _run.apply(this, args);
        }
        _readyList = _readyList.concat(args);
    };

    _run.css = function(str) {
        var css = doc.getElementById('do-inline-css');
        if (!css) {
            css = doc.createElement('style');
            css.type = 'text/css';
            css.id = 'do-inline-css';
            _jsFiles[0].parentNode.insertBefore(css, _jsFiles[0]);
        }

        if (css.styleSheet) {
            css.styleSheet.cssText = css.styleSheet.cssText + str;
        } else {
            css.appendChild(doc.createTextNode(str));
        }
    };

    if (_config.autoLoad) {
        _run(_config.coreLib);
    }

    com.run=_run;

    _bindReady();

    /* 公共组件名称 */
    com.run.add('validation',{
        path:G_PATH_ARRAY['ASSETS_PATH']+'common/js/jquery.validate.js',
        type:'js'
    });

    com.run.add('button',{
        path:G_PATH_ARRAY['ASSETS_PATH']+'common/js/button.js',
        type:'js'
    });

    com.run.add('tab',{
        path:G_PATH_ARRAY['ASSETS_PATH']+'common/js/tab.js',
        type:'js'
    });

    com.run.add('json',{
        path:G_PATH_ARRAY['ASSETS_PATH']+'common/js/json2.js',
        type:'js'
    });

    com.run.add('ruler',{
        path:G_PATH_ARRAY['ASSETS_PATH']+'common/js/ruler.js',
        type:'js'
    });

    com.run.add('jquery.resize',{
        path:G_PATH_ARRAY['ASSETS_PATH']+'common/jquery.resize/jquery.ba-resize.min.js',
        type:'js'
    });

    com.run.add('jquery.nicescroll',{
        path:G_PATH_ARRAY['ASSETS_PATH']+'common/jquery.nicescroll/jquery.nicescroll.min.js',
        type:'js'
    });

})(document,window);