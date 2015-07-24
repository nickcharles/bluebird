var objectTypes = {
        "function": !0,
        object: !0
    },
    context = objectTypes[typeof window] && window || this,
    reHostCtor = /^\[object .+?Constructor\]$/,
    Set = isNative(Set = context.Set) && Set,
    fnToString = Function.prototype.toString,
    objectProto = Object.prototype,
    toString = objectProto.toString,
    reRegExpChars = /[.*+?^${}()|[\]\/\\]/g,
    reNative = RegExp("^" + escapeRegExp(toString).replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
    nativeIsArray = isNative(nativeIsArray = Array.isArray) && nativeIsArray,
    createCache = Set && function(e) {
        var t = new Set,
            r = e ? e.length : 0;
        for (t.push = t.add; r--;) t.push(e[r]);
        return t
    },
    isArray = nativeIsArray || function(e) {
        return e && "object" == typeof e && "number" == typeof e.length && toString.call(e) == arrayClass || !1
    };

function escapeRegExp(e) {
    return e = null == e ? "" : String(e), reRegExpChars.lastIndex = 0, reRegExpChars.test(e) ? e.replace(reRegExpChars, "\\$&") : e
}

function isNative(e) {
    var t = typeof e;
    return "function" == t ? reNative.test(fnToString.call(e)) : e && "object" == t && reHostCtor.test(toString.call(e)) || !1
}

function difference() {
    for (var e = -1, t = arguments.length; ++e < t;) {
        var r = arguments[e];
        if (isArray(r) || isArguments(r)) break
    }
    return baseDifference(arguments[e], baseFlatten(arguments, !1, !0, ++e))
}

function baseFlatten(e, t, r, n) {
    for (var a = (n || 0) - 1, o = e.length, i = -1, f = []; ++a < o;) {
        var s = e[a];
        if (s && "object" == typeof s && "number" == typeof s.length && (isArray(s) || isArguments(s))) {
            t && (s = baseFlatten(s, t, r));
            var u = -1,
                c = s.length;
            for (f.length += c; ++u < c;) f[++i] = s[u]
        } else r || (f[++i] = s)
    }
    return f
}

function isArguments(e) {
    return e && "object" == typeof e && "number" == typeof e.length && toString.call(e) == argsClass || !1
}

function baseDifference(e, t) {
    var r = e ? e.length : 0;
    if (!r) return [];
    var n = -1,
        a = getIndexOf(),
        o = a == baseIndexOf,
        i = o && createCache && t && t.length >= 200,
        f = o && !i,
        s = [],
        u = t ? t.length : 0;
    i && (a = cacheIndexOf, t = createCache(t));
    e: for (; ++n < r;) {
        var c = e[n];
        if (f && c === c) {
            for (var g = u; g--;)
                if (t[g] === c) continue e;
            s.push(c)
        } else a(t, c) < 0 && s.push(c)
    }
    return s
}

function cacheIndexOf(e, t) {
    return e.has(t) ? 0 : -1
}

function getIndexOf(e, t, r) {
    var n = indexOf;
    return n = n === indexOf ? baseIndexOf : n, e ? n(e, t, r) : n
}

function indexOf(e, t, r) {
    var n = e ? e.length : 0;
    if ("number" == typeof r) r = 0 > r ? nativeMax(n + r, 0) : r || 0;
    else if (r) {
        var a = sortedIndex(e, t);
        return n && e[a] === t ? a : -1
    }
    return baseIndexOf(e, t, r)
}

function baseIndexOf(e, t, r) {
    for (var n = (r || 0) - 1, a = e ? e.length : 0, o = t === t; ++n < a;) {
        var i = e[n];
        if (o ? i === t : i !== i) return n
    }
    return -1
}

function result(e, t, r) {
    var n = null == e ? void 0 : e[t];
    return "undefined" == typeof n ? r : isFunction(n) ? e[t]() : n
}

function isFunction(e) {
    return "function" == typeof e || !1
}
