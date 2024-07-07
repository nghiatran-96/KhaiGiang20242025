$(document).ready(function() {
    var t = [{
        name: "2024 - 2025",
        m1: Date.parse("Sep 05 2024 07:00:00")
    }]
      , e = t.length;
    setInterval(function() {
        for (var n = (new Date).getTime(), a = 0; a < e; a++) {
            var o = t[a].m1 - 864e5
              , r = t[a].m1 + 864e5
              , m = t[a].m1 + 2592e5;
            if (n <= m) {
                var i = t[a].m1
                  , s = !1
                  , c = a + 2018
                  , g = t[a].name + " " + c
                  , p = "Đếm ngược đến Ngày Khai giảng " + g + " - Sắp Tết!"
                  , l = "Sắp đến Ngày Khai giảng rồi!!!      Chỉ còn..."
                  , h = "Chào"
                  , u = "Năm"
                  , x = "Học"
                  , T = "Mới"
                  , f = "Ngày"
                  , y = "Giờ"
                  , d = "Phút"
                  , C = "Giây";
                if (n >= t[a].m1 && (i = m,
                n >= r ? l = "" : (s = !0,
                l = "Ngày Khai giảng năm học mới 2024 - 2025",
                f = "",
                y = "",
                d = "",
                C = "")),
                !s) {
                    var b = i - n;
                    T = Math.floor(b / 1e3 % 60),
                    x = Math.floor(b / 1e3 / 60 % 60),
                    u = Math.floor(b / 36e5 % 24),
                    h = Math.floor(b / 864e5)
                }
                $("#tetornot").text(l),
                $("#days").text(h),
                $("#hours").text(u),
                $("#mins").text(x),
                $("#secs").text(T),
                $("#days-text").text(f),
                $("#hours-text").text(y),
                $("#mins-text").text(d),
                $("#secs-text").text(C),

                n >= o && ($("html").css({
                        background: "radial-gradient(ellipse at bottom, #efe81d 0%, #f80f1f 100%)"
                }),
                $(".clock").toggleClass("tet"),
                $(".clock .text").toggleClass("tet"));
                break
            }
        }
    }, 1e3)
});
