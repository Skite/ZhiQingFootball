new Vue({
    el: '#zhiqinfootball',
    data: {
        searchText: '',
        minNumber: '',
        maxNumber: '',
        selectedPosition: [],
        positions: ['GK', 'DF', 'MF', 'ST'],
        players: [{
                number: '2',
                name: '定 宸',
                position: ['DF', 'MF'],
                appearance: [{
                        year: '2020',
                        cup: '秋季大安盃',
                        g: '4',
                        goals: '0',
                        asts: '1',
                        cs: '0'
                    },
                    {
                        year: '2020',
                        cup: '新北聯合盃',
                        g: '2',
                        goals: '0',
                        asts: '1',
                        cs: '0'
                    },
                    {
                        year: '2021',
                        cup: '萬歲盃',
                        g: '2',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }
                ]
            },
            {
                number: '3',
                name: '晉 丞',
                position: ['MF', 'ST'],
                appearance: [{
                        year: '2020',
                        cup: '新北聯合盃',
                        g: '4',
                        goals: '2',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2021',
                        cup: '扶輪社暨航源足球賽',
                        g: '4',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2021',
                        cup: '金牛賀歲盃',
                        g: '1',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    },
                    {
                        year: '2021',
                        cup: '萬歲盃',
                        g: '2',
                        goals: '0',
                        asts: '1',
                        cs: '0'
                    }
                ]
            },
            {
                number: '7',
                name: '黃 衍',
                position: ['DF', 'MF'],
                appearance: [{
                    year: '2020',
                    cup: '秋季大安盃',
                    g: '6',
                    goals: '0',
                    asts: '1',
                    cs: '0'
                }, {
                    year: '2020',
                    cup: '新北聯合盃',
                    g: '3',
                    goals: '0',
                    asts: '0',
                    cs: '0'
                }, {
                    year: '2021',
                    cup: '扶輪社暨航源足球賽',
                    g: '5',
                    goals: '2',
                    asts: '0',
                    cs: '0'
                }, {
                    year: '2021',
                    cup: '金牛賀歲盃',
                    g: '3',
                    goals: '0',
                    asts: '0',
                    cs: '0'
                }]
            },
            {
                number: '8',
                name: '翊 愷',
                position: 'MF',
                appearance: [{
                        year: '2020',
                        cup: '新北聯合盃',
                        g: '1',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    },
                    {
                        year: '2021',
                        cup: '萬歲盃',
                        g: '2',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }
                ]
            },
            {
                number: '9',
                name: '紘 豪',
                position: ['DF'],
                appearance: [{
                        year: '2020',
                        cup: '秋季大安盃',
                        g: '6',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2020',
                        cup: '新北聯合盃',
                        g: '4',
                        goals: '1',
                        asts: '1',
                        cs: '0'
                    }, {
                        year: '2021',
                        cup: '扶輪社暨航源足球賽',
                        g: '3',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2021',
                        cup: '金牛賀歲盃',
                        g: '2',
                        goals: '0',
                        asts: '1',
                        cs: '0'
                    },
                    {
                        year: '2021',
                        cup: '萬歲盃',
                        g: '2',
                        goals: '0',
                        asts: '1',
                        cs: '0'
                    }
                ]
            },
            {
                number: '10',
                name: '善 捷',
                position: ['DF'],
                appearance: [{
                        year: '2020',
                        cup: '新北聯合盃',
                        g: '4',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2021',
                        cup: '扶輪社暨航源足球賽',
                        g: '5',
                        goals: '0',
                        asts: '1',
                        cs: '0'
                    }, {
                        year: '2021',
                        cup: '金牛賀歲盃',
                        g: '3',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    },
                    {
                        year: '2021',
                        cup: '萬歲盃',
                        g: '2',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }
                ]
            },
            {
                number: '11',
                name: '定 緯',
                position: ['N/A'],
                appearance: []
            },
            {
                number: '12',
                name: '皓 宇',
                position: ['MF', 'ST'],
                appearance: [{
                    year: '2020',
                    cup: '秋季大安盃',
                    g: '6',
                    goals: '1',
                    asts: '1',
                    cs: '0'
                }, {
                    year: '2020',
                    cup: '新北聯合盃',
                    g: '4',
                    goals: '0',
                    asts: '0',
                    cs: '0'
                }, {
                    year: '2021',
                    cup: '扶輪社暨航源足球賽',
                    g: '5',
                    goals: '0',
                    asts: '0',
                    cs: '0'
                }, {
                    year: '2021',
                    cup: '金牛賀歲盃',
                    g: '3',
                    goals: '0',
                    asts: '1',
                    cs: '0'
                }]
            },
            {
                number: '15',
                name: '凱 泰',
                position: ['GK', 'DF'],
                appearance: [{
                        year: '2020',
                        cup: '新北聯合盃',
                        g: '4',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2021',
                        cup: '扶輪社暨航源足球賽',
                        g: '3',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2021',
                        cup: '金牛賀歲盃',
                        g: '3',
                        goals: '0',
                        asts: '0',
                        cs: '2'
                    },
                    {
                        year: '2021',
                        cup: '萬歲盃',
                        g: '2',
                        goals: '1',
                        asts: '0',
                        cs: '0'
                    }
                ]
            },
            {
                number: '18',
                name: '維 恩（C）',
                position: ['DF', 'MF'],
                appearance: [{
                    year: '2020',
                    cup: '秋季大安盃',
                    g: '6',
                    goals: '1',
                    asts: '2',
                    cs: '0'
                }, {
                    year: '2020',
                    cup: '新北聯合盃',
                    g: '4',
                    goals: '3',
                    asts: '1',
                    cs: '0'
                }, {
                    year: '2021',
                    cup: '扶輪社暨航源足球賽',
                    g: '5',
                    goals: '1',
                    asts: '0',
                    cs: '0'
                }, {
                    year: '2021',
                    cup: '金牛賀歲盃',
                    g: '3',
                    goals: '0',
                    asts: '0',
                    cs: '0'
                }]
            },
            {
                number: '21',
                name: '亮 谷',
                position: ['MF'],
                appearance: [{
                        year: '2020',
                        cup: '秋季大安盃',
                        g: '6',
                        goals: '5',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2020',
                        cup: '新北聯合盃',
                        g: '4',
                        goals: '4',
                        asts: '2',
                        cs: '0'
                    }, {
                        year: '2021',
                        cup: '扶輪社暨航源足球賽',
                        g: '5',
                        goals: '1',
                        asts: '2',
                        cs: '0'
                    }, {
                        year: '2021',
                        cup: '金牛賀歲盃',
                        g: '3',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    },
                    {
                        year: '2021',
                        cup: '萬歲盃',
                        g: '2',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }
                ]
            },
            {
                number: '22',
                name: '明 澤',
                position: ['DF', 'MF'],
                appearance: [{
                        year: '2020',
                        cup: '秋季大安盃',
                        g: '6',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2020',
                        cup: '新北聯合盃',
                        g: '2',
                        goals: '0',
                        asts: '1',
                        cs: '0'
                    }, {
                        year: '2021',
                        cup: '金牛賀歲盃',
                        g: '3',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    },
                    {
                        year: '2021',
                        cup: '萬歲盃',
                        g: '2',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }
                ]
            },
            {
                number: '23',
                name: '柏 燁',
                position: ['N/A'],
                appearance: []
            },
            {
                number: '27',
                name: '定 謙',
                position: ['GK', 'MF'],
                appearance: [{
                        year: '2020',
                        cup: '秋季大安盃',
                        g: '5',
                        goals: '1',
                        asts: '0',
                        cs: '1'
                    }, {
                        year: '2020',
                        cup: '新北聯合盃',
                        g: '4',
                        goals: '2',
                        asts: '0',
                        cs: '2'
                    }, {
                        year: '2021',
                        cup: '扶輪社暨航源足球賽',
                        g: '3',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2021',
                        cup: '金牛賀歲盃',
                        g: '1',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    },
                    {
                        year: '2021',
                        cup: '萬歲盃',
                        g: '2',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }
                ]
            },
            {
                number: '30',
                name: '品 叡',
                position: ['MF'],
                appearance: [{
                    year: '2020',
                    cup: '新北聯合盃',
                    g: '2',
                    goals: '0',
                    asts: '1',
                    cs: '0'
                }]
            },
            {
                number: '55',
                name: '宥 融',
                position: ['GK', 'DF', 'MF'],
                appearance: [{
                    year: '2020',
                    cup: '秋季大安盃',
                    g: '6',
                    goals: '0',
                    asts: '1',
                    cs: '1'
                }, {
                    year: '2020',
                    cup: '新北聯合盃',
                    g: '4',
                    goals: '1',
                    asts: '0',
                    cs: '0'
                }, {
                    year: '2021',
                    cup: '扶輪社暨航源足球賽',
                    g: '5',
                    goals: '1',
                    asts: '0',
                    cs: '1'
                }, {
                    year: '2021',
                    cup: '金牛賀歲盃',
                    g: '3',
                    goals: '1',
                    asts: '0',
                    cs: '0'
                }]
            },
            {
                number: '77',
                name: '昕 叡',
                position: ['DF', 'MF'],
                appearance: [{
                    year: '2020',
                    cup: '新北聯合盃',
                    g: '3',
                    goals: '0',
                    asts: '0',
                    cs: '0'
                }, {
                    year: '2021',
                    cup: '金牛賀歲盃',
                    g: '2',
                    goals: '0',
                    asts: '0',
                    cs: '0'
                }]
            },
            {
                number: '97',
                name: '宇 正',
                position: ['GK', 'MF', 'ST'],
                appearance: [{
                        year: '2020',
                        cup: '秋季大安盃',
                        g: '6',
                        goals: '3',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2020',
                        cup: '新北聯合盃',
                        g: '4',
                        goals: '1',
                        asts: '1',
                        cs: '0'
                    }, {
                        year: '2021',
                        cup: '扶輪社暨航源足球賽',
                        g: '5',
                        goals: '1',
                        asts: '1',
                        cs: '0'
                    }, {
                        year: '2021',
                        cup: '金牛賀歲盃',
                        g: '3',
                        goals: '2',
                        asts: '0',
                        cs: '0'
                    },
                    {
                        year: '2021',
                        cup: '萬歲盃',
                        g: '2',
                        goals: '3',
                        asts: '0',
                        cs: '0'
                    }
                ]
            }
        ],
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
            icon: 'fad fa-futbol'
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
            }, {
                date: '12/19',
                opponents: '新北銀河',
                url: '18pp8I_47K6RgkLcSa6o-2-4LQiV1f80L'
            }, {
                date: '12/26',
                opponents: '日新Yoyo',
                url: '1kKhGm47FFqZW093JTl7nHIxLrN623dle'
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
            }],
            icon: 'fal fa-skull-cow'
        }],
        photos: [{
            cupName: '秋季大安盃',
            cover: '20200920-cover',
            photos: [{
                date: '09/20',
                opponents: 'HePing踢豹',
                url: `<a href="https://photos.app.goo.gl/uYKVkaoPvcHqT652A"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20200920-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }, {
                date: '10/25',
                opponents: '炫風新尖兵、熱血足球 U8',
                url: `<a href="https://photos.app.goo.gl/UoqhNEpAVytZ6ERb6"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20201025-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }, {
                date: '11/08',
                opponents: '磐石',
                url: `<a href="https://photos.app.goo.gl/nT9d2yqqEdJvdsN66"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20201108-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }, {
                date: '12/06',
                opponents: '銘傳之星 （準決賽）',
                url: ``
            }, {
                date: '12/06',
                opponents: '公館小雷霆 （季軍戰）',
                url: ``
            }],
            icon: 'fad fa-futbol'
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
        }]
    },
    methods: {
        numberFilter: function(players) {
            var min = this.minNumber < 10 ? '0' + this.minNumber : this.minNumber;
            var max = this.maxNumber < 10 ? '0' + this.maxNumber : this.maxNumber;

            if (!!this.minNumber && !!this.maxNumber) {
                return players.filter((player) => {
                    var playerNum = player.number < 10 ? '0' + player.number : player.number
                    return playerNum >= min && playerNum <= max;
                })
            } else {
                return this.players
            }

        },
        positionFilter: function(players) {

            if (this.selectedPosition.length > 0) {
                return players.filter((player) => {
                    return player.position.indexOf(this.selectedPosition) !== -1;
                });
            } else {
                return this.players
            }


        },
        nameFilter: function(players) {

            if (!!this.searchText) {
                return players.filter((player) => {
                    return player.name.includes(this.searchText);
                });
            } else {
                return this.players
            }


        },
        resetFilter: function() {
            this.searchText = null;
            this.minNumber = null;
            this.maxNumber = null;
            this.selectedPosition = [];
        }
    },
    computed: {
        playerFilter: function() {
            let nameFilteredArray = this.nameFilter(this.players)
            let positionFilteredArray = this.positionFilter(this.players)
            let numberFilteredArray = this.numberFilter(this.players)
            let allFilteredArray = nameFilteredArray.concat(positionFilteredArray).concat(numberFilteredArray)
            // console.log(nameFilteredArray, positionFilteredArray, numberFilteredArray, allFilteredArray)

            var counts = {}

            for (var i = 0; i < allFilteredArray.length; i++) {
                var num = allFilteredArray[i].number
                counts[num] = counts[num] ? counts[num] + 1 : 1
            }

            var result = []
            for (var key in counts) {
                if (Object.prototype.hasOwnProperty.call(counts, key) && counts[key] > 2) {
                    for (var i = 0; i < allFilteredArray.length; i++) {
                        if (allFilteredArray[i].number === key) {
                            result.push(allFilteredArray[i])
                        }
                    }
                }
            }

            filteredResult = _.uniq(result, 'number')

            return filteredResult
        }
    },
    filters: {
        totalMatches: function(matches) {
            return matches.map((appearance) => appearance.g).reduce(function(total, appearance) {
                return parseInt(total) + parseInt(appearance)
            }, 0);
        },
        totalGoals: function(matches) {
            return matches.map((appearance) => appearance.goals).reduce(function(total, appearance) {
                return parseInt(total) + parseInt(appearance)
            }, 0);
        },
        totalAssists: function(matches) {
            return matches.map((appearance) => appearance.asts).reduce(function(total, appearance) {
                return parseInt(total) + parseInt(appearance)
            }, 0);
        },
        totalCS: function(matches) {
            return matches.map((appearance) => appearance.cs).reduce(function(total, appearance) {
                return parseInt(total) + parseInt(appearance)
            }, 0);
        },
        total: function(matches, type) {
            console.log(this.filteredResult, matches)
            return matches.map((appearance) => appearance.type).reduce(function(total, appearance) {
                return parseInt(total) + parseInt(appearance)
            }, 0);
        }
    }
})