new Vue({
    el: '#zhiqinfootball',
    data: {
        videos: [{
            cupName: '秋季大安盃',
            cover: '2020daancup',
            videos: [{
                date: '10/25',
                opponents: '炫風新尖兵、熱血足球 U8',
                url: '1s23y3EqhXcsJCS1coScLHcXAT7buq2xx'
            }, {
                date: '11/08',
                opponents: '磐石',
                url: '1EcdAxtVYgD3wTJ6NdEGFkWo-RFw3YNKa'
            }, {
                date: '12/06',
                opponents: '銘傳之星 （準決賽）',
                url: '1rzldKj3K7BL6qqfYehCRPaTXQQGy3Tz0'
            }, {
                date: '12/06',
                opponents: '公館小雷霆 （季軍戰）',
                url: '1u6bHo5xwaBV19ucVLRm-LLGuw-71UGJI'
            }],
            icon: 'far fa-futbol'
        }, {
            cupName: '新北聯合盃',
            cover: '2020unitedcup',
            videos: [{
                date: '11/21',
                opponents: '航源FC',
                url: '1o83cpxGXXb0AuVD7DA6QZjkBA0lZwRGn'
            }, {
                date: '11/22',
                opponents: '虎鯊HSFC',
                url: '1H7zY3OWRGLVpVr1t9K5SiBgCBEJPQNZH'
                // }, {
                //     date: '12/19',
                //     opponents: '新北銀河',
                //     url: '1TdzOUOWPdgV9P2hQL3-XMKaWpg_RXv9V'
                // }, {
                //     date: '12/26',
                //     opponents: '日新Yoyo',
                //     url: '1mhcWWPTujXKlo9cohGoSEFiInU0S32FF'
            }],
            icon: 'fas fa-link'
        }, {
            cupName: '金牛賀歲盃',
            cover: '2021oxcup',
            videos: [{
                date: '1/30',
                opponents: '森巴小獵豹',
                url: '1FhO3YI1jHC7E6Cr41tjhtXmUhE8fVmiV'
            }, {
                date: '1/31',
                opponents: '新北銀河',
                url: '1T06Ab76fOFMXllJyCpM3uP0pTgIozULu'
            }, {
                date: '2/6',
                opponents: '虎鯊HSFC',
                url: '1yqiEb9wltIXa6SZDJu2eov9tIXh3N-hO'
            }],
            icon: 'fal fa-skull-cow'
        }, {
            cupName: '春季大安盃',
            cover: '2021daanspringcup',
            videos: [{
                date: '4/10',
                opponents: '熱血足球 U8',
                url: '1oUKoqHtp_A-RtVroe_x3u3hFCcjSMDVG'
            }, {
                date: '5/8',
                opponents: '公館紅雷霆',
                url: '1m6rNl5uJeju9WX_u3m5n_0fOafO1tc74'
            }, {
                date: '5/8',
                opponents: '磐石U8',
                url: '1ZiESQqGS1dJW_uy67OAz3c13ZREMXfKs'
            }],
            icon: 'far fa-futbol'
        }, {
            cupName: '安聯小小世界盃',
            cover: '2021allianzcup',
            videos: [{
                date: '5/02',
                opponents: 'Dreamers FC、鬥牛犬、LSFC',
                url: '1BK6RGXQS9hPrm0FPGE-SL-hHMk4lrFKC'
            }],
            icon: 'fab fa-angular'
        }],
        photos: [{
            cupName: '秋季大安盃',
            cover: '20200920-cover',
            photos: [{
                date: '09/20',
                opponents: 'HePing踢豹',
                url: `<a href="https://photos.app.goo.gl/uYKVkaoPvcHqT652A" target="_blank"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20200920-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }, {
                date: '10/25',
                opponents: '炫風新尖兵、熱血足球 U8',
                url: `<a href="https://photos.app.goo.gl/UoqhNEpAVytZ6ERb6" target="_blank"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20201025-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }, {
                date: '11/08',
                opponents: '磐石',
                url: `<a href="https://photos.app.goo.gl/nT9d2yqqEdJvdsN66" target="_blank"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20201108-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }, {
                date: '12/06',
                opponents: '銘傳之星 （準決賽）',
                url: ``
            }, {
                date: '12/06',
                opponents: '公館小雷霆 （季軍戰）',
                url: ``
            }],
            icon: 'far fa-futbol'
        }, {
            cupName: '新北聯合盃',
            cover: '20201122-cover',
            photos: [{
                date: '11/21',
                opponents: '航源FC',
                url: ``
            }, {
                date: '11/22',
                opponents: '虎鯊HSFC',
                url: `<a href="https://photos.app.goo.gl/SZD1ZL6a9atX1Ejd7"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20201122-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }, {
                date: '12/19',
                opponents: '新北銀河',
                url: `<a href="https://photos.google.com/share/AF1QipNFgbMOXRzo-Le7uUcLqIPHQNfwFPXNF0zUxca57vSldDus2GLchiGgrvD2iAJL8A?key=UlV4a3BHZVFBWjVEa1d6Rk1CdG1GYms4M2xqM2FB"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20201219-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }, {
                date: '12/26',
                opponents: '日新Yoyo',
                url: `<a href="https://photos.google.com/share/AF1QipM4L5XkFPoPmWFiZy6pkdpZQnhxDTg8DmERQoy8VYgwuktqpYqKKututuLhXu0FzA?key=cy1KMUFpb0Fra2ZiencwR0RlTnBUdE1rSjlJWGVR"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20201226-cov.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }],
            icon: 'fas fa-link'
        }, {
            cupName: '扶輪社暨航源足球賽',
            cover: '20210124-cover',
            photos: [{
                date: '11/21',
                opponents: '熱血足球、北新國小、夢幻之星、TFA尤文圖斯、暴風',
                url: `<a href="https://photos.google.com/share/AF1QipO6pB9bAp1BADIemkkXvLcoOHdkDY8_fbqC0wcNDRYbTmJqDNsHhvFEIz0XKWKJBg?key=cW9LOTdWWldtWGJiYXBYR0M1N2d4d1B2c0x1Yldn"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20210124-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }],
            icon: 'fa fa-plane'
        }, {
            cupName: '金牛賀歲盃',
            cover: '20210206-cover',
            photos: [{
                date: '2/6',
                opponents: '虎鯊HSFC',
                url: `<a href="https://photos.google.com/share/AF1QipN50AycoRelF-DIqFYhG6Q0I16gFcQDr7uuCEgdWZt2FWzgf_GqcGS1OlDTLiAlgg?key=TTRWRFVoSE96OEI1cEJsRllWNVFHbVphS3llYnd3"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20210206-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }],
            icon: 'fal fa-skull-cow'
        }, {
            cupName: '萬歲盃',
            cover: '20210328-cover',
            photos: [{
                date: '3/27',
                opponents: '足球心想事成、吉利港宜大、大暴風足球、淡水小獵豹',
                url: `<a href="https://photos.app.goo.gl/8KdgXhpSsxgCHvYd7"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20210328-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }],
            icon: 'fab fa-vuejs'
        }, {
            cupName: '春季大安盃',
            cover: '20210410-cover',
            photos: [{
                date: '4/10',
                opponents: '國北實小-U8、熱血足球U8',
                url: `<a href="https://photos.app.goo.gl/8eXh7Tb2eURyhuhm8"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20210410-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }, {
                date: '4/24',
                opponents: '炫風小尖兵',
                url: `<a href="https://photos.app.goo.gl/YttUBD5T1YsTBSao8"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20210424-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }, {
                date: '5/8',
                opponents: '公館紅雷霆、磐石U8',
                url: `<a href="https://photos.app.goo.gl/M9usrPcX69wa246f8"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20210508-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }],
            icon: 'far fa-futbol'
        }, {
            cupName: '安聯小小世界盃',
            cover: '20210502-cover',
            photos: [{
                date: '5/2',
                opponents: 'Dreamers FC、鬥牛犬、LSFC',
                url: `<a href="https://photos.app.goo.gl/KJYq8ddTvxRo5WXR7"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20210502-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }],
            icon: 'fab fa-angular'
        }]
    },
    methods: {},
    computed: {},
    filters: {}
})