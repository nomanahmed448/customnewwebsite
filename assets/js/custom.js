    AOS.init({
            disable: window.innerWidth < 1e3
        }),

        // menu
        document.addEventListener("DOMContentLoaded", function () {
            const sidebar = document.getElementById("sidebar");
            const submenu = document.getElementById("submenu");
            const overlay = document.getElementById("overlay");

            document.getElementById("menu-toggle").onclick = () => {
                sidebar.classList.add("open");
                overlay.classList.add("show");
            };

            document.getElementById("close-main").onclick =
                document.getElementById("overlay").onclick = () => {
                    sidebar.classList.remove("open");
                    submenu.classList.remove("open");
                    overlay.classList.remove("show");
                };

            // document.getElementById("services-toggle").onclick = (e) => {
            //     if (window.innerWidth <= 767) {
            //         e.preventDefault();
            //         submenu.classList.add("open");
            //     }
            // };

            document.getElementById("close-sub").onclick = () => {
                submenu.classList.remove("open");
            };
            let totalSeconds = (1 * 3600) + (58 * 60) + 0;

            function updateTimer() {
                if (totalSeconds < 0) return;

                const hours = Math.floor(totalSeconds / 3600);
                const minutes = Math.floor((totalSeconds % 3600) / 60);
                const seconds = totalSeconds % 60;
                document.getElementById("hours").innerText = hours;
                document.getElementById("minutes").innerText = minutes;
                document.getElementById("seconds").innerText = seconds;

                totalSeconds--;
            }

            updateTimer();
            setInterval(updateTimer, 2000);
        });
    // end menu


    // window.addEventListener("scroll", function () {
    //     const header = document.querySelector(".main-header");

    //     if (window.scrollY > 50) {
    //         header.classList.add("sticky");
    //     } else {
    //         header.classList.remove("sticky");
    //     }
    // });

    $(window).width() <= 577 &&
        0 != ".subject-slider".length &&
        ($(".subject-slider").addClass("owl-carousel owl-theme"),
            $(".subject-slider").owlCarousel({
                loop: true,
                margin: 30,
                nav: !1,
                dots: true,
                autoplay: true,
                autoplayHoverPause: true,
                mouseDrag: !0,
                autoplayTimeout: 1500, // 🕒 No delay between scrolls
                autoplaySpeed: 500, // 🚀 Fast scroll speed
                smartSpeed: 500,
                responsive: {
                    0: {
                        items: 3
                    },
                    320: {
                        items: 1
                    },
                    482: {
                        items: 2
                    },
                    577: {
                        items: 3
                    },
                    992: {
                        items: 3
                    }
                }
            }));

              $(window).width() <= 577 &&
        0 != ".gauranted-slider".length &&
        ($(".gauranted-slider").addClass("owl-carousel owl-theme"),
            $(".gauranted-slider").owlCarousel({
                loop: true,
                margin: 30,
                nav: !1,
                dots: true,
                autoplay: true,
                autoplayHoverPause: true,
                mouseDrag: !0,
                responsive: {
                    0: {
                        items: 1
                    },
                    320: {
                        items: 1
                    },
                    482: {
                        items: 1
                    },
                    577: {
                        items: 1
                    },
                    992: {
                        items: 1
                    }
                }
            }));


    $('.trustedlogsslider').owlCarousel({
        dots: false,
        margin: 100,
        nav: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 1000, // 🕒 No delay between scrolls
        autoplaySpeed: 1000, // 🚀 Fast scroll speed
        smartSpeed: 1000, // 👌 Consistent animation
        autoplayHoverPause: false,
        autoWidth: true,
        responsive: {
            0: {
                items: 5,
            },
            320: {
                items: 1,
            },
            414: {
                items: 1,
            },
            575: {
                items: 1,
            },
            767: {
                items: 2
            },
            992: {
                items: 3,
            },
            1920: {
                items: 5
            }
        }
    });
    $('.testimonials-slider').owlCarousel({
        loop: true,
        dots: false,
        responsiveClass: true,
        autoplay: true,
        margin: 15,
        autoplayHoverPause: true,
        autoplayTimeout: 2000,
        autoplaySpeed: 400,
        nav: false,
        responsive: {
            0: {
                items: 4,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            375: {
                items: 1,
            },
            481: {
                items: 1,
            },
            320: {
                items: 1,
            },
            360: {
                items: 1,
                
            },
            1200: {
                items: 4,
            },
            1600: {
                items: 4,
            }
        }
    });
    $(".counting1").each(function () {
        var e = $(this),
            o = e.attr("data-count");
        $({
            countNum: e.text()
        }).animate({
            countNum: o
        }, {
            duration: 3e3,
            easing: "linear",
            step: function () {
                e.text(Math.floor(this.countNum) + "%");
            },
            complete: function () {
                e.text(this.countNum + "%");
            },
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
        const popup = document.getElementById("customPopup");
        const openButtons = document.querySelectorAll(".open-popup");
        const closeButton = popup.querySelector(".close-popup");

        openButtons.forEach(button => {
            button.addEventListener("click", () => {
                popup.classList.remove("hidden");
            });
        });

        closeButton.addEventListener("click", () => {
            popup.classList.add("hidden");
        });

        // Optional: Close on clicking outside popup
        popup.addEventListener("click", (e) => {
            if (e.target === popup) {
                popup.classList.add("hidden");
            }
        });
    });