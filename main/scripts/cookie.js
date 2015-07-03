jQuery = jQuery || {}, 
jQuery.cookie = {
    getRaw: function(e) {
        var t = new RegExp("(^| )" + e + "=([^;]*)(;|$)"),
            n = t.exec(document.cookie);
        return n ? n[2] || null : null
    },
    get: function(e) {
        var t = jQuery.cookie.getRaw(e);
        return "string" == typeof t ? (t = decodeURIComponent(t), t) : null
    },
    setRaw: function(e, t, n) {
        n = n || {};
        var r = n.expires;
        "number" == typeof n.expires && (r = new Date, r.setTime(r.getTime() + n.expires)), document.cookie = e + "=" + t + (n.path ? "; path=" + n.path : "") + (r ? "; expires=" + r.toGMTString() : "") + (n.domain ? "; domain=" + n.domain : "") + (n.secure ? "; secure" : "")
    },
    set: function(e, t, n) {
        jQuery.cookie.setRaw(e, encodeURIComponent(t), n)
    },
    remove: function(e, t) {
        t = t || {}, t.expires = new Date(0), jQuery.cookie.setRaw(e, "", t)
    }
};