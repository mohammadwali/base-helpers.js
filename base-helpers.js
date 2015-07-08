//fix console if not found yet
if (!(window.console && console.log)) {
    console = {
        log: function() {},
        debug: function() {},
        info: function() {},
        warn: function() {},
        error: function() {}
    };
}
/////////////// Validation functions  //////////////
/**
 * Determines if device is a mobile.
 *
 * @return {Bool}
 */
function isMobile() {
    var nav = (navigator.userAgent || navigator.vendor || window.opera);
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windowdows (ce|phone)|xda|xiino/i.test(nav) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(nav.substr(0, 4));
};
/**
 * Determines if a given value is int.
 *
 * @return {Bool}
 */
function isInt(n) {
    return (n % 1 === 0);
};

function isFunction(fun) {
    return (typeof fun == "function");
};

function isArray(object) {
    return (object.constructor === Array);
};

function isXMLDoc(elem) {
    var documentElement = elem && (elem.ownerDocument || elem).documentElement;
    return documentElement ? documentElement.nodeName !== "HTML" : false;
};

function isUndefiend(obj) {
    return (typeof obj == "undefined")
}

function isNull(obj) {
    return (obj === null);
}

function isEmail(email) {
    var emailrgx = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-zрф]{2,6})|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
    var capturergx = /<([^>].*)>$/;
    var address = capturergx.exec(rawAddress);
    return address && address[1] ? emailrgx.test(address[1]) : emailrgx.test(rawAddress);
}

function isEmptyObj(object) {
    if ('object' !== typeof object) {
        throw new Error('Object must be specified.');
    }
    if (null === object) {
        return true;
    }
    if ('undefined' !== Object.keys) {
        // Using ECMAScript 5 feature.
        return (0 === Object.keys(object).length);
    } else {
        // Using legacy compatibility mode.
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    }
};

function isInteger(str) {
    return (/^-?\d+$/.test(str));
}

function isPositiveDecimal(str) {
    return (!/\D/.test(str)) || (/^\d+\.\d+$/.test(str));
}

function isAlphanumeric(str) {
    return !(/\W/.test(str));
}



/////////////// Loop helpers  //////////////
function each(obj, callback) {
    var i = 0;
    if (obj == ("[object Array]" === Object.prototype.toString.apply(obj))) {
        for (; i < length; i++) {
            value = callback.call(obj[i], i, obj[i]);
            if (value === false) {
                break;
            }
        }
    } else {
        for (i in obj) {
            value = callback.call(obj[i], i, obj[i]);
            if (value === false) {
                break;
            }
        }
    }
    return obj;
};

function inArray(array, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) return true;
    }
    return false;
};

function arrayIntersect(a, b) {
    var data = [];
    each(a, function(i, v) {
        if (inArray(b, v)) data.push(v);
    });
    return data;
};

function deepCopy(obj) {
    if (typeof obj == 'object') {
        if (Array.isArray(obj)) {
            var l = obj.length;
            var r = new Array(l);
            for (var i = 0; i < l; i++) {
                r[i] = deepCopy(obj[i]);
            }
            return r;
        } else {
            var r = {};
            r.prototype = obj.prototype;
            for (var k in obj) {
                r[k] = deepCopy(obj[k]);
            }
            return r;
        }
    }
    return obj;
};

function arrayUnique(array) {
    var unique = [];
    each(array, function(i, c) {
        if (unique.indexOf(c) == -1) {
            unique.push(c);
        }
    });
    return unique;
};

function arrayValLowerCase(array) {
    return each(array, function(i, c) {
        c = c.toString().toLowerCase();
    });
};

function appendArray(arg, args) {
    var fArgs = Array.prototype.slice.call(arg);
    each(args, function(i, c) {
        fArgs.push(c)
    });
    return fArgs;
};

function prependArray(arg, args) {
    var fArgs = Array.prototype.slice.call(arg);
    each(args, function(i, c) {
        fArgs.unshift(c)
    });
    return fArgs;
};

/////////////// Sorting  //////////////

function sortObj(arr) {
    var sortedKeys = new Array();
    var sortedObj = {};
    for (var i in arr) {
        sortedKeys.push(i);
    }
    sortedKeys.sort();
    for (var i in sortedKeys) {
        if (arr[sortedKeys[i]]) {
            sortedObj[sortedKeys[i]] = arr[sortedKeys[i]];
        }
    }
    return sortedObj;
};

function ArrayUniqueSort(array) {
    return array.slice().sort(function(a, b) {
        return a - b
    }).reduce(function(a, b) {
        if (a.slice(-1)[0] !== b) a.push(b);
        return a;
    }, []);
};
/////////////// Date and time  //////////////
function dateToday(seprator) {
    var e = new Date,
        n = e.getDate(),
        r = e.getMonth() + 1,
        o = e.getFullYear();
    return 10 > n && (n = "0" + n), 10 > r && (r = "0" + r), r + seprator + n + seprator + o
};

function getOrdinal(n) {
    if ((parseFloat(n) == parseInt(n)) && !isNaN(n)) {
        var s = ["th", "st", "nd", "rd"],
            v = n % 100;
        return n + (s[(v - 20) % 10] || s[v] || s[0]);
    }
    return n;
};

function getOrdinalDate(string) {
    var Dte = new Date((string || new Date())),
        monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        date = Dte.getDate(),
        month = monthsArray[Dte.getMonth()];
    return getOrdinal(date) + " " + month + " " + Dte.getFullYear();
};
time12Hrs = (function() {
    function addZero(num) {
        return (num >= 0 && num < 10) ? "0" + num : num + "";
    }
    return function(dt) {
        var formatted = '';
        if (dt) {
            var hours24 = dt.getHours();
            var hours = ((hours24 + 11) % 12) + 1;
            formatted = [formatted, [addZero(hours), addZero(dt.getMinutes())].join(":"), hours24 > 11 ? "pm" : "am"].join(" ");
        }
        return $.trim(formatted);
    }
})();

/////////////// Utilities  //////////////
function dispatch(fn, args) {
    fn = (typeof fn == "function") ? fn : windowdow[fn];
    return fn.apply(this, args || []);
};

function escapeHtml(string) {
    var entityMap = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': '&quot;',
        "'": '&#39;',
        "/": '&#x2F;'
    };
    return String(string).replace(/[&<>"'\/]/g, function(s) {
        return entityMap[s];
    });
};

function deepEval(str) {
    var str = str.split("."),
        obj = window;
    for (var z = 0; z < str.length; z++) {
        if (typeof obj[str[z]] !== "undefined") {
            obj = obj[str[z]];
        }
    }
    return obj;
};


function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function stringReplace(string, find, replace) {
    var replaceString = string;
    for (var i = 0; i < find.length; i++) {
        replaceString = replaceString.replace(find[i], replace[i]);
    }
    return replaceString;
};

function strstr(string, search, before_search) {
    var pos = 0;
    string += "";
    pos = string.indexOf(search);
    if (pos == -1) {
        return false;
    } else {
        if (before_search) {
            return string.substr(0, pos);
        } else {
            return string.slice(pos);
        }
    }
};


function round(num, dec) {
    return Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
};

function maxInArray(array) {
    return Math.max.apply(null, array);
};

function minInArray(array) {
    return Math.min.apply(null, array);
};


function cloneArray(array) {
    return this.slice(0);
};

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
};


function getPosition(element) {
    var xPosition = 0;
    var yPosition = 0;
    while (element) {
        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }
    return {
        x: xPosition,
        y: yPosition
    };
};



function triggerEvent(elm, ename, data) {
    if (typeof elm == "string") {
        ename = elm;
        elm = document;
        data = {};
    }
    data = (typeof data == "undefined") ? {} : data;
    if (document.createEventObject) {
        var evt = document.createEventObject();
        return element.fireEvent('on' + event, evt)
    } else {
        var evt = document.createEvent("HTMLEvents");
        evt.initEvent(ename, true, true);
        evt.xyx = "wads";
        if (!this.isEmptyObj(data)) {
            this.forEach(data, function(i, c) {
                evt[i] = c;
            });
        }
        return elm.dispatchEvent(evt);
    }
};

function hasClass(elm, className) {
    return new RegExp('(\\s|^)' + className + '(\\s|$)').test(elm.getAttribute('class'));
};

function addClass(elm, className) {
    if (!hasClass(elm, className)) {
        elm.setAttribute('class', elm.getAttribute('class') + ' ' + className);
    }
};

function removeClass(elm, className) {
    var removedClass = elm.getAttribute('class').replace(new RegExp('(\\s|^)' + className + '(\\s|$)', 'g'), '$2');
    if (hasClass(elm, className)) {
        elm.setAttribute('class', removedClass);
    }
};

function toggleClass(elm, className) {
    if (hasClass(elm, className)) {
        removeClass(elm, className);
    } else {
        addClass(elm, className);
    }
};


/////////////// URL and Cookies  //////////////


function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    each(ca, function(i, c) {
        c = c.trim();
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    });
    return "";
};

function getUriHash(uri) {
    uri = (typeof uri == "undefined") ? windowdow.location.href : uri;
    return uri.slice(uri.lastIndexOf('#') + 1);
};

function loadScript(url, callback) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    if (typeof callback == "function") {
        script.onreadystatechange = callback;
        script.onload = callback;
    }
    head.appendChild(script);
};

function urlHelper() {
    var self = this;
    return {
        current: windowdow.location.href,
        get: function(q) {
            if (q == "query") {} else if (q == "hash") {
                return self.getUriHash(windowdow.location.href);
            } else if (q == "domain") {} else if (q == "path") {} else if (q == "pageName") {}
        },
        set: function(w, s) {
            if (w == "query") {} else if (w == "hash") {} else if (w == "domain") {} else if (w == "path") {} else if (w == "pageName") {}
        }
    };
};

/////////////// Encoding  //////////////
Base64: {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode = function(e) {
        var t = "";
        var n, r, i, s, o, u, a;
        var f = 0;
        e = Base64._utf8_encode(e);
        while (f < e.length) {
            n = e.charCodeAt(f++);
            r = e.charCodeAt(f++);
            i = e.charCodeAt(f++);
            s = n >> 2;
            o = (n & 3) << 4 | r >> 4;
            u = (r & 15) << 2 | i >> 6;
            a = i & 63;
            if (isNaN(r)) {
                u = a = 64
            } else if (isNaN(i)) {
                a = 64
            }
            t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a)
        }
        return t
    },
    decode = function(e) {
        var t = "";
        var n, r, i;
        var s, o, u, a;
        var f = 0;
        e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (f < e.length) {
            s = this._keyStr.indexOf(e.charAt(f++));
            o = this._keyStr.indexOf(e.charAt(f++));
            u = this._keyStr.indexOf(e.charAt(f++));
            a = this._keyStr.indexOf(e.charAt(f++));
            n = s << 2 | o >> 4;
            r = (o & 15) << 4 | u >> 2;
            i = (u & 3) << 6 | a;
            t = t + String.fromCharCode(n);
            if (u != 64) {
                t = t + String.fromCharCode(r)
            }
            if (a != 64) {
                t = t + String.fromCharCode(i)
            }
        }
        t = Base64._utf8_decode(t);
        return t
    },
    _utf8_encode = function(e) {
        e = e.replace(/\r\n/g, "\n");
        var t = "";
        for (var n = 0; n < e.length; n++) {
            var r = e.charCodeAt(n);
            if (r < 128) {
                t += String.fromCharCode(r)
            } else if (r > 127 && r < 2048) {
                t += String.fromCharCode(r >> 6 | 192);
                t += String.fromCharCode(r & 63 | 128)
            } else {
                t += String.fromCharCode(r >> 12 | 224);
                t += String.fromCharCode(r >> 6 & 63 | 128);
                t += String.fromCharCode(r & 63 | 128)
            }
        }
        return t
    },
    _utf8_decode = function(e) {
        var t = "";
        var n = 0;
        var r = c1 = c2 = 0;
        while (n < e.length) {
            r = e.charCodeAt(n);
            if (r < 128) {
                t += String.fromCharCode(r);
                n++
            } else if (r > 191 && r < 224) {
                c2 = e.charCodeAt(n + 1);
                t += String.fromCharCode((r & 31) << 6 | c2 & 63);
                n += 2
            } else {
                c2 = e.charCodeAt(n + 1);
                c3 = e.charCodeAt(n + 2);
                t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                n += 3
            }
        }
        return t
    }

};

/////////////// jQuery helpers  //////////////
if (typeof jQuery != "undefined") {
    var $ = window.jQuery || jQuery;
    var setAjax = function(type, url, success, error, data, isRawdata) {
        if (typeof data == "undefined") {
            data = {}
        } else if (typeof data == "boolean") {
            isRawdata = data;
            data = {}
        }
        if (typeof error == "undefined") {
            error = function() {}
        } else if (typeof error == "object") {
            data = error;
            error = function() {}
        }
        var options = {
            url: url,
            data: (isRawdata == true) ? JSON.stringify(data) : data,
            type: type,
            processData: (isRawdata == true) ? false : true,
            contentType: (isRawdata == true) ? 'application/json' : "application/x-www-form-urlencoded; charset=UTF-8",
            success: function() {
                this.ajaxSuccess();
                success(arguments);
            },
            error: function() {
                console.log("Got error in an ajax call sent to", url, arguments);
                this.ajaxError();
                if (typeof error == "function") {
                    error.call(this, arguments);
                }
            },
            "dataType": "json"
        }
        return $.ajax(options);
    }

    function ajaxSuccess() {}

    function ajaxError() {}

    function ajaxPost() {
        Array.prototype.unshift.call(arguments, "POST");
        return setAjax.apply(this, arguments);
    }

    function ajaxPut() {
        Array.prototype.unshift.call(arguments, "PUT");
        return setAjax.apply(this, arguments);
    }

    function ajaxGet() {
        Array.prototype.unshift.call(arguments, "GET");
        return setAjax.apply(this, arguments);
    }

    function ajaxDelete() {
        Array.prototype.unshift.call(arguments, "DELETE");
        return setAjax.apply(this, arguments);
    }

    function ajaxOptions() {
        Array.prototype.unshift.call(arguments, "OPTIONS");
        return setAjax.apply(this, arguments);
    }
}
console.log("Helpers.js Initialized! Thanks for using %c Helpers.js %c (https://mwa.li/helpersjs)", "background:#66BA9D;color:#fff", "");
