function setHasTouch() {
    hasTouch = !0,
    window.removeEventListener("touchstart", setHasTouch);
    var a = window
      , b = document
      , c = b.documentElement
      , d = b.getElementsByTagName("body")[0]
      , e = a.innerWidth || c.clientWidth || d.clientWidth;
    e > 799 && enableTouchDropdown()
}
function enableTouchDropdown() {
    var a = document.getElementsByClassName("menu-item-has-children");
    for (i = 0; i < a.length; i++)
        a[i].className = a[i].className + " closed",
        a[i].addEventListener("click", openDropdown)
}
function hasClass(a, b) {
    return (" " + a.className + " ").indexOf(" " + b + " ") > -1
}
function openDropdown(a) {
    hasClass(this, "closed") && (a.preventDefault(),
    this.className = this.className.replace("closed", ""))
}
!function(a) {
    "use strict";
    a.fn.fitVids = function(b) {
        var c = {
            customSelector: null,
            ignore: null
        };
        /*
        if (!document.getElementById("fit-vids-style")) {
            var d = document.head || document.getElementsByTagName("head")[0]
              , e = ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}"
              , f = document.createElement("div");
            f.innerHTML = '<p>x</p><style id="fit-vids-style">' + e + "</style>",
            d.appendChild(f.childNodes[1])
        }
        */
        return b && a.extend(c, b),
        this.each(function() {
            var b = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed"];
            c.customSelector && b.push(c.customSelector);
            var d = ".fitvidsignore";
            c.ignore && (d = d + ", " + c.ignore);
            var e = a(this).find(b.join(","));
            e = e.not("object object"),
            e = e.not(d),
            e.each(function() {
                var b = a(this);
                if (!(b.parents(d).length > 0 || "embed" === this.tagName.toLowerCase() && b.parent("object").length || b.parent(".fluid-width-video-wrapper").length)) {
                    b.css("height") || b.css("width") || !isNaN(b.attr("height")) && !isNaN(b.attr("width")) || (b.attr("height", 9),
                    b.attr("width", 16));
                    var c = "object" === this.tagName.toLowerCase() || b.attr("height") && !isNaN(parseInt(b.attr("height"), 10)) ? parseInt(b.attr("height"), 10) : b.height()
                      , e = isNaN(parseInt(b.attr("width"), 10)) ? b.width() : parseInt(b.attr("width"), 10)
                      , f = c / e;
                    if (!b.attr("name")) {
                        var g = "fitvid" + a.fn.fitVids._count;
                        b.attr("name", g),
                        a.fn.fitVids._count++
                    }
                    b.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * f + "%"),
                    b.removeAttr("height").removeAttr("width")
                }
            })
        })
    }
    ,
    a.fn.fitVids._count = 0
}(window.jQuery || window.Zepto),
jQuery(function(a) {
    function b() {
        var b = q.height();
        if (n.hasClass("toggled"))
            n.removeClass("toggled"),
            a(window).unbind("scroll"),
            setTimeout(function() {
                o.removeAttr("style"),
                t.removeAttr("style")
            }, 400);
        else {
            {
                o.width()
            }
            n.addClass("toggled"),
            t.css("min-height", b + 240),
            o.css("padding-top", u.height() + u.position().top),
            p.css("padding-top", a("#title-info").height() + 48),
            a(window).scroll(c)
        }
    }
    function c() {
        var c = q.offset().top + q.height()
          , d = a(window).scrollTop();
        d > c && (a(window).unbind("scroll"),
        b())
    }
    function d() {
        var b = 168
          , c = a(".entry-content").height()
          , d = a(".entry-categories a").length
          , e = a(".entry-tags a").length
          , f = b + 24 * d + 24 * e;
        if (c > f) {
            a(".entry-meta-bottom").addClass("float");
            var g = a(".entry-categories").height();
            a(".entry-tags").css("top", 72 + g)
        }
    }
    function e() {}
    /*
    function e() {
        if (r.hasClass("secondary-toggle"))
            r.removeClass("secondary-toggle"),
            a("#main, #title-info, #toggle-navigation, #site-footer").css("transform", "translateY(0)"),
            r.css("height", "auto");
        else {
            r.addClass("secondary-toggle");
            var b = a("#menu-secondary-items").height() + 48;
            a("#main, #title-info, #toggle-navigation, #site-footer").css("transform", "translateY(" + b + "px)"),
            r.css("height", r.outerHeight() + b + "px")
        }
    }
    */
    function f() {}
    /*
    function f() {
        if (r.hasClass("search-open"))
            r.removeClass("search-open"),
            a("#search-icon").css("left", 0);
        else {
            r.addClass("search-open");
            var b = .0555 * r.width()
              , c = n.find(".search-form").width();
            a("#search-icon").css("left", -c + b - 5)
        }
    }
    */
    function g() {
        a(".featured-image").width() < a(".featured-image-container").width() ? a(".featured-image-container").css("padding-bottom", 48) : a(".featured-image-container").css("padding-bottom", 0)
    }
    function h() {
        a("html").hasClass("ie9") && (r.hasClass("full-width-images") || r.hasClass("two-column-images")) && a(".excerpt-container").each(function() {
            var b = a(this)
              , c = a(this).find(".excerpt-header")
              , d = b.offset().top + b.height()
              , e = c.offset().top + c.height()
              , f = (d - e) / 2;
            c.css("top", f)
        })
    }
    function i() {
        a(".lazy").each(function() {
            var b = a(this).offset().top
              , c = a(window).scrollTop()
              , d = a(window).height()
              , e = d > b - c - 100;
            e && (a(this).hasClass("lazy-image") && a(this).attr("src", a(this).attr("data-src")).removeClass("lazy-image"),
            a(this).hasClass("lazy-bg-image") && a(this).css("background-image", 'url("' + a(this).attr("data-background") + '")').removeClass("lazy-bg-image"))
        })
    }
    /*
    function j() {
        var b = n.find(".logo");
        if (window.innerWidth > 799 && b.length) {
            var c = b.height();
            0 == c ? setTimeout(function() {
                a(".site-description").css("top", c - 25)
            }, 1e3) : a(".site-description").css("top", c - 25)
        }
    }

    function k() {
        window.innerWidth > 899 && r.hasClass("standard") && a(".excerpt.has-video").each(function() {
            var b = a(this).find(".fluid-width-video-wrapper").outerHeight();
            a(this).css("min-height", b);
            var c = a(this).find(".excerpt-container").outerHeight();
            if (b > c)
                var d = (b - c) / 2;
            else
                var d = 0;
            var e = d + "px 5.55%";
            a(this).find(".excerpt-container").css("padding", e)
        })
    }
    */
    function l() {
        var b = a("#site-footer").outerHeight();
        r.css("height", "calc(100% - " + b + "px)")
    }
    function m() {
        if (window.innerWidth > 899 && (r.hasClass("two-column") || r.hasClass("two-column-images"))) {
            a(".infinite-wrap").children(".excerpt").detach().appendTo(s),
            a(".infinite-wrap, .infinite-loader").remove();
            var b = s.find(".excerpt")
              , c = 1;
            b.each(function() {
                if (a(this).hasClass("sorted"))
                    return void c++;
                if (a(this).addClass("sorted"),
                2 == c && a(this).addClass("right"),
                c > 2) {
                    var b = a(this).prev()
                      , d = a(this).prev().prev()
                      , e = Math.ceil(b.offset().top + b.outerHeight())
                      , f = Math.ceil(d.offset().top + d.outerHeight());
                    if (b.hasClass("right"))
                        var g = "right"
                          , h = "left";
                    else
                        var g = "left"
                          , h = "right";
                    a(this).addClass(f > e ? g : h)
                }
                c++
            })
        }
    }
    var n = a("#site-header")
      , o = a("#menu-primary")
      , p = a("#menu-primary-tracks")
      , q = a(".menu-unset");
    a("#menu-primary-items").length && (q = a("#menu-primary-items"));
    var r = a("body")
      , s = (a("#main"),
    a("#loop-container"))
      , t = a("#overflow-container")
      , u = a("#title-info");
    d(),
    h(),
    i(),
    //j(),
    //k(),
    l(),
    a(window).load(function() {
        m(),
        g()
    }),
    /*
    a(window).on("resize", function() {
        g(),
        //k(),
        m(),
        window.innerWidth > 799 && a("#site-header").hasClass("toggled") && b()
    }),
    */
    /*
    a(".entry-content, .excerpt-content").fitVids({
        customSelector: 'iframe[src*="dailymotion.com"], iframe[src*="slideshare.net"], iframe[src*="animoto.com"], iframe[src*="blip.tv"], iframe[src*="funnyordie.com"], iframe[src*="hulu.com"], iframe[src*="ted.com"], iframe[src*="wordpress.tv"]'
    }),
    a(".featured-video").fitVids({
        customSelector: 'iframe[src*="dailymotion.com"], iframe[src*="slideshare.net"], iframe[src*="animoto.com"], iframe[src*="blip.tv"], iframe[src*="funnyordie.com"], iframe[src*="hulu.com"], iframe[src*="ted.com"], iframe[src*="vine.co"], iframe[src*="wordpress.tv"], iframe[src*="soundcloud.com"], iframe[src*="wistia.net"]'
    }),
    a(document.body).on("post-load", function() {
        a(".featured-video").fitVids({
            customSelector: 'iframe[src*="dailymotion.com"], iframe[src*="slideshare.net"], iframe[src*="animoto.com"], iframe[src*="blip.tv"], iframe[src*="funnyordie.com"], iframe[src*="hulu.com"], iframe[src*="ted.com"], iframe[src*="vine.co"], iframe[src*="wordpress.tv"], iframe[src*="soundcloud.com"], iframe[src*="wistia.net"]'
        }),
        m()
    }),
    */
    a("#toggle-navigation").bind("click", b),
    a(".menu-item a, .page_item a").focus(function() {
        a(this).parent("li").addClass("focused"),
        a(this).parents("ul").addClass("focused")
    }),
    a(".menu-item a, .page_item a").focusout(function() {
        a(this).parent("li").removeClass("focused"),
        a(this).parents("ul").removeClass("focused")
    }),
    a(window).scroll(function() {
        a(this).scrollTop() >= 600 ? a("#return-top").addClass("visible") : a("#return-top").removeClass("visible")
    }),
    a("#return-top").click(function() {
        a("body,html").animate({
            scrollTop: 0
        }, 800)
    }),
    a("#toggle-secondary-navigation").bind("click", e),
    a("#search-icon").bind("click", f);
    var v = {
        allow: !0,
        reallow: function() {
            v.allow = !0
        },
        delay: 100
    };
    a(window).scroll(function() {
        v.allow && (i(),
        v.allow = !1,
        setTimeout(v.reallow, v.delay))
    })
});
var hasTouch;
window.addEventListener("touchstart", setHasTouch, !1),
window.addEventListener("hashchange", function() {
    var a = document.getElementById(location.hash.substring(1));
    a && (/^(?:a|select|input|button|textarea)$/i.test(a.tagName) || (a.tabIndex = -1),
    a.focus())
}, !1),
function(a) {
    "use strict";
    function b(a, b, c) {
        return a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent ? a.attachEvent("on" + b, c) : void 0
    }
    function c(a, b) {
        var c, d;
        for (c = 0,
        d = a.length; d > c; c++)
            if (a[c] === b)
                return !0;
        return !1
    }
    function d(a, b) {
        var c;
        a.createTextRange ? (c = a.createTextRange(),
        c.move("character", b),
        c.select()) : a.selectionStart && (a.focus(),
        a.setSelectionRange(b, b))
    }
    function e(a, b) {
        try {
            return a.type = b,
            !0
        } catch (c) {
            return !1
        }
    }
    a.Placeholders = {
        Utils: {
            addEventListener: b,
            inArray: c,
            moveCaret: d,
            changeType: e
        }
    }
}(this),
function(a) {
    "use strict";
    function b() {}
    function c() {
        try {
            return document.activeElement
        } catch (a) {}
    }
    function d(a, b) {
        var c, d, e = !!b && a.value !== b, f = a.value === a.getAttribute(H);
        return (e || f) && "true" === a.getAttribute(I) ? (a.removeAttribute(I),
        a.value = a.value.replace(a.getAttribute(H), ""),
        a.className = a.className.replace(G, ""),
        d = a.getAttribute(O),
        parseInt(d, 10) >= 0 && (a.setAttribute("maxLength", d),
        a.removeAttribute(O)),
        c = a.getAttribute(J),
        c && (a.type = c),
        !0) : !1
    }
    function e(a) {
        var b, c, d = a.getAttribute(H);
        return "" === a.value && d ? (a.setAttribute(I, "true"),
        a.value = d,
        a.className += " " + F,
        c = a.getAttribute(O),
        c || (a.setAttribute(O, a.maxLength),
        a.removeAttribute("maxLength")),
        b = a.getAttribute(J),
        b ? a.type = "text" : "password" === a.type && T.changeType(a, "text") && a.setAttribute(J, "password"),
        !0) : !1
    }
    function f(a, b) {
        var c, d, e, f, g, h, i;
        if (a && a.getAttribute(H))
            b(a);
        else
            for (e = a ? a.getElementsByTagName("input") : p,
            f = a ? a.getElementsByTagName("textarea") : q,
            c = e ? e.length : 0,
            d = f ? f.length : 0,
            i = 0,
            h = c + d; h > i; i++)
                g = c > i ? e[i] : f[i - c],
                b(g)
    }
    function g(a) {
        f(a, d)
    }
    function h(a) {
        f(a, e)
    }
    function i(a) {
        return function() {
            r && a.value === a.getAttribute(H) && "true" === a.getAttribute(I) ? T.moveCaret(a, 0) : d(a)
        }
    }
    function j(a) {
        return function() {
            e(a)
        }
    }
    function k(a) {
        return function(b) {
            return t = a.value,
            "true" === a.getAttribute(I) && t === a.getAttribute(H) && T.inArray(D, b.keyCode) ? (b.preventDefault && b.preventDefault(),
            !1) : void 0
        }
    }
    function l(a) {
        return function() {
            d(a, t),
            "" === a.value && (a.blur(),
            T.moveCaret(a, 0))
        }
    }
    function m(a) {
        return function() {
            a === c() && a.value === a.getAttribute(H) && "true" === a.getAttribute(I) && T.moveCaret(a, 0)
        }
    }
    function n(a) {
        return function() {
            g(a)
        }
    }
    function o(a) {
        a.form && (y = a.form,
        "string" == typeof y && (y = document.getElementById(y)),
        y.getAttribute(K) || (T.addEventListener(y, "submit", n(y)),
        y.setAttribute(K, "true"))),
        T.addEventListener(a, "focus", i(a)),
        T.addEventListener(a, "blur", j(a)),
        r && (T.addEventListener(a, "keydown", k(a)),
        T.addEventListener(a, "keyup", l(a)),
        T.addEventListener(a, "click", m(a))),
        a.setAttribute(L, "true"),
        a.setAttribute(H, w),
        (r || a !== c()) && e(a)
    }
    var p, q, r, s, t, u, v, w, x, y, z, A, B, C = ["text", "search", "url", "tel", "email", "password", "number", "textarea"], D = [27, 33, 34, 35, 36, 37, 38, 39, 40, 8, 46], E = "#ccc", F = "placeholdersjs", G = new RegExp("(?:^|\\s)" + F + "(?!\\S)"), H = "data-placeholder-value", I = "data-placeholder-active", J = "data-placeholder-type", K = "data-placeholder-submit", L = "data-placeholder-bound", M = "data-placeholder-focus", N = "data-placeholder-live", O = "data-placeholder-maxlength", P = document.createElement("input"), Q = document.getElementsByTagName("head")[0], R = document.documentElement, S = a.Placeholders, T = S.Utils;
    if (S.nativeSupport = void 0 !== P.placeholder,
    !S.nativeSupport) {
        for (p = document.getElementsByTagName("input"),
        q = document.getElementsByTagName("textarea"),
        r = "false" === R.getAttribute(M),
        s = "false" !== R.getAttribute(N),
        u = document.createElement("style"),
        u.type = "text/css",
        v = document.createTextNode("." + F + " { color:" + E + "; }"),
        u.styleSheet ? u.styleSheet.cssText = v.nodeValue : u.appendChild(v),
        Q.insertBefore(u, Q.firstChild),
        B = 0,
        A = p.length + q.length; A > B; B++)
            z = B < p.length ? p[B] : q[B - p.length],
            w = z.attributes.placeholder,
            w && (w = w.nodeValue,
            w && T.inArray(C, z.type) && o(z));
        x = setInterval(function() {
            for (B = 0,
            A = p.length + q.length; A > B; B++)
                z = B < p.length ? p[B] : q[B - p.length],
                w = z.attributes.placeholder,
                w ? (w = w.nodeValue,
                w && T.inArray(C, z.type) && (z.getAttribute(L) || o(z),
                (w !== z.getAttribute(H) || "password" === z.type && !z.getAttribute(J)) && ("password" === z.type && !z.getAttribute(J) && T.changeType(z, "text") && z.setAttribute(J, "password"),
                z.value === z.getAttribute(H) && (z.value = w),
                z.setAttribute(H, w)))) : z.getAttribute(I) && (d(z),
                z.removeAttribute(H));
            s || clearInterval(x)
        }, 100)
    }
    T.addEventListener(a, "beforeunload", function() {
        S.disable()
    }),
    S.disable = S.nativeSupport ? b : g,
    S.enable = S.nativeSupport ? b : h
}(this);
