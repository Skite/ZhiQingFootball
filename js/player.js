new Vue({
    el: '#zhiqinfootball',
    data: {
        searchText: '',
        minNumber: '',
        maxNumber: '',
        selectedPosition: [],
        positions: ['GK', 'DF', 'MF', 'FW'],
        players: [{
                number: '2',
                name: '定 宸',
                position: ['DF'],
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
                    },
                    {
                        year: '2021',
                        cup: '春季大安盃',
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
                position: ['MF', 'FW'],
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
                    },
                    {
                        year: '2021',
                        cup: '春季大安盃',
                        g: '2',
                        goals: '0',
                        asts: '0',
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
                    },
                    {
                        year: '2021',
                        cup: '春季大安盃',
                        g: '3',
                        goals: '4',
                        asts: '3',
                        cs: '0'
                    }
                ]
            },
            {
                number: '8',
                name: '翊 愷',
                position: ['MF'],
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
                    },
                    {
                        year: '2021',
                        cup: '春季大安盃',
                        g: '2',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    },
                    {
                        year: '2021',
                        cup: '安聯小小世界盃',
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
                    },
                    {
                        year: '2021',
                        cup: '春季大安盃',
                        g: '3',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }
                ]
            },
            {
                number: '10',
                name: '善 捷',
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
                    },
                    {
                        year: '2021',
                        cup: '春季大安盃',
                        g: '3',
                        goals: '0',
                        asts: '0',
                        cs: '3'
                    },
                    {
                        year: '2021',
                        cup: '安聯小小世界盃',
                        g: '3',
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
                position: ['DF', 'MF', 'FW'],
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
                    },
                    {
                        year: '2021',
                        cup: '春季大安盃',
                        g: '3',
                        goals: '6',
                        asts: '4',
                        cs: '0'
                    },
                    {
                        year: '2021',
                        cup: '安聯小小世界盃',
                        g: '3',
                        goals: '5',
                        asts: '2',
                        cs: '0'
                    }
                ]
            },
            {
                number: '15',
                name: '凱 泰',
                position: ['GK', 'MF'],
                appearance: [{
                        year: '2020',
                        cup: '新北聯合盃',
                        g: '4',
                        goals: '0',
                        asts: '0',
                        cs: '1'
                    }, {
                        year: '2021',
                        cup: '扶輪社暨航源足球賽',
                        g: '3',
                        goals: '0',
                        asts: '0',
                        cs: '1'
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
                    },
                    {
                        year: '2021',
                        cup: '春季大安盃',
                        g: '2',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }
                ]
            },
            {
                number: '18',
                name: '維 恩（C）',
                position: ['GK', 'DF', 'MF'],
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
                    },
                    {
                        year: '2021',
                        cup: '春季大安盃',
                        g: '3',
                        goals: '2',
                        asts: '1',
                        cs: '1'
                    }
                ]
            },
            {
                number: '21',
                name: '亮 谷',
                position: ['MF', 'FW'],
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
                    },
                    {
                        year: '2021',
                        cup: '春季大安盃',
                        g: '3',
                        goals: '4',
                        asts: '2',
                        cs: '0'
                    }
                ]
            },
            {
                number: '22',
                name: '明 澤',
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
                    },
                    {
                        year: '2021',
                        cup: '春季大安盃',
                        g: '2',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    },
                    {
                        year: '2021',
                        cup: '安聯小小世界盃',
                        g: '2',
                        goals: '0',
                        asts: '1',
                        cs: '0'
                    }
                ]
            },
            {
                number: '23',
                name: '柏 燁',
                position: ['MF'],
                appearance: [{
                        year: '2021',
                        cup: '春季大安盃',
                        g: '2',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    },
                    {
                        year: '2021',
                        cup: '安聯小小世界盃',
                        g: '3',
                        goals: '1',
                        asts: '0',
                        cs: '0'
                    }
                ]
            },
            {
                number: '27',
                name: '定 謙',
                position: ['GK', 'MF', 'FW'],
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
                    },
                    {
                        year: '2021',
                        cup: '春季大安盃',
                        g: '2',
                        goals: '2',
                        asts: '0',
                        cs: '0'
                    },
                    {
                        year: '2021',
                        cup: '安聯小小世界盃',
                        g: '3',
                        goals: '2',
                        asts: '2',
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
                        cs: '1'
                    }, {
                        year: '2021',
                        cup: '扶輪社暨航源足球賽',
                        g: '5',
                        goals: '1',
                        asts: '0',
                        cs: '2'
                    }, {
                        year: '2021',
                        cup: '金牛賀歲盃',
                        g: '3',
                        goals: '1',
                        asts: '0',
                        cs: '0'
                    },
                    {
                        year: '2021',
                        cup: '春季大安盃',
                        g: '3',
                        goals: '3',
                        asts: '3',
                        cs: '2'
                    },
                    {
                        year: '2021',
                        cup: '安聯小小世界盃',
                        g: '3',
                        goals: '0',
                        asts: '1',
                        cs: '0'
                    }
                ]
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
                    },
                    {
                        year: '2021',
                        cup: '春季大安盃',
                        g: '2',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }
                ]
            },
            {
                number: '97',
                name: '宇 正',
                position: ['GK', 'MF', 'FW'],
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
                    },
                    {
                        year: '2021',
                        cup: '春季大安盃',
                        g: '3',
                        goals: '10',
                        asts: '4',
                        cs: '0'
                    },
                    {
                        year: '2021',
                        cup: '安聯小小世界盃',
                        g: '3',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }
                ]
            }
        ]
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