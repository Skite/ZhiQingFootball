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
                matches: '4',
                goals: '0',
                assists: '1',
                cleansheets: 'N/A',
                appearance: [{
                    year: '2020',
                    cup: '秋季大安盃',
                    g: '4',
                    goals: '0',
                    asts: '1',
                    cs: 'N/A'
                }]
            },
            {
                number: '3',
                name: '晉 丞',
                position: ['MF'],
                matches: '2',
                goals: '1',
                assists: '0',
                cleansheets: 'N/A',
                appearance: [{
                    year: '2020',
                    cup: '新北聯合盃',
                    g: '2',
                    goals: '1',
                    asts: '0',
                    cs: 'N/A'
                }]
            },
            {
                number: '7',
                name: '黃 衍',
                position: ['DF'],
                matches: '7',
                goals: '0',
                assists: '1',
                cleansheets: 'N/A',
                appearance: [{
                    year: '2020',
                    cup: '秋季大安盃',
                    g: '6',
                    goals: '0',
                    asts: '1',
                    cs: 'N/A'
                }, {
                    year: '2020',
                    cup: '新北聯合盃',
                    g: '1',
                    goals: '0',
                    asts: '0',
                    cs: 'N/A'
                }]
            },
            {
                number: '8',
                name: '翊 愷',
                position: 'N/A',
                matches: '0',
                goals: 'N/A',
                assists: 'N/A',
                cleansheets: 'N/A',
                appearance: []
            },
            {
                number: '9',
                name: '紘 豪',
                position: ['DF'],
                matches: '8',
                goals: '1',
                assists: '0',
                cleansheets: 'N/A',
                appearance: [{
                    year: '2020',
                    cup: '秋季大安盃',
                    g: '6',
                    goals: '0',
                    asts: '0',
                    cs: 'N/A'
                }, {
                    year: '2020',
                    cup: '新北聯合盃',
                    g: '2',
                    goals: '1',
                    asts: '0',
                    cs: 'N/A'
                }]
            },
            {
                number: '10',
                name: '善 捷',
                position: ['MF'],
                matches: '2',
                goals: '0',
                assists: '0',
                cleansheets: 'N/A',
                appearance: [{
                    year: '2020',
                    cup: '新北聯合盃',
                    g: '2',
                    goals: '0',
                    asts: '0',
                    cs: 'N/A'
                }]
            },
            {
                number: '11',
                name: '定 緯',
                position: ['N/A'],
                matches: '0',
                goals: 'N/A',
                assists: 'N/A',
                cleansheets: 'N/A',
                appearance: []
            },
            {
                number: '12',
                name: '皓 宇',
                position: ['MF', 'ST'],
                matches: '8',
                goals: '1',
                assists: '1',
                cleansheets: 'N/A',
                appearance: [{
                    year: '2020',
                    cup: '秋季大安盃',
                    g: '6',
                    goals: '1',
                    asts: '1',
                    cs: 'N/A'
                }, {
                    year: '2020',
                    cup: '新北聯合盃',
                    g: '2',
                    goals: '0',
                    asts: '0',
                    cs: 'N/A'
                }]
            },
            {
                number: '15',
                name: '凱 泰',
                position: ['GK', 'DF'],
                matches: '2',
                goals: '0',
                assists: '0',
                cleansheets: 'N/A',
                appearance: [{
                    year: '2020',
                    cup: '新北聯合盃',
                    g: '2',
                    goals: '0',
                    asts: '0',
                    cs: 'N/A'
                }]
            },
            {
                number: '18',
                name: '維 恩（C）',
                position: ['DF', 'MF', 'ST'],
                matches: '8',
                goals: '2',
                assists: '3',
                cleansheets: 'N/A',
                appearance: [{
                    year: '2020',
                    cup: '秋季大安盃',
                    g: '6',
                    goals: '1',
                    asts: '2',
                    cs: 'N/A'
                }, {
                    year: '2020',
                    cup: '新北聯合盃',
                    g: '2',
                    goals: '1',
                    asts: '1',
                    cs: 'N/A'
                }]
            },
            {
                number: '21',
                name: '亮 谷',
                position: ['MF', 'ST'],
                matches: '8',
                goals: '7',
                assists: '1',
                cleansheets: 'N/A',
                appearance: [{
                    year: '2020',
                    cup: '秋季大安盃',
                    g: '6',
                    goals: '5',
                    asts: '0',
                    cs: 'N/A'
                }, {
                    year: '2020',
                    cup: '新北聯合盃',
                    g: '2',
                    goals: '2',
                    asts: '1',
                    cs: 'N/A'
                }]
            },
            {
                number: '22',
                name: '明 澤',
                position: ['ST'],
                matches: '7',
                goals: '0',
                assists: '0',
                cleansheets: 'N/A',
                appearance: [{
                    year: '2020',
                    cup: '秋季大安盃',
                    g: '6',
                    goals: '0',
                    asts: '0',
                    cs: 'N/A'
                }, {
                    year: '2020',
                    cup: '新北聯合盃',
                    g: '1',
                    goals: '0',
                    asts: '0',
                    cs: 'N/A'
                }]
            },
            {
                number: '23',
                name: '柏 燁',
                position: ['N/A'],
                matches: '0',
                goals: 'N/A',
                assists: 'N/A',
                cleansheets: 'N/A',
                appearance: []
            },
            {
                number: '27',
                name: '定 謙',
                position: ['GK', 'DF'],
                matches: '7',
                goals: '1',
                assists: '0',
                cleansheets: '3',
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
                    g: '2',
                    goals: '0',
                    asts: '0',
                    cs: '2'
                }]
            },
            {
                number: '30',
                name: '品 叡',
                position: ['N/A'],
                matches: '0',
                goals: 'N/A',
                assists: 'N/A',
                cleansheets: 'N/A',
                appearance: []
            },
            {
                number: '55',
                name: '宥 融',
                position: ['GK', 'ST'],
                matches: '8',
                goals: '1',
                assists: '1',
                cleansheets: '1',
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
                    g: '2',
                    goals: '1',
                    asts: '0',
                    cs: 'N/A'
                }]
            },
            {
                number: '77',
                name: '昕 叡',
                position: ['ST'],
                matches: '2',
                goals: '0',
                assists: '0',
                cleansheets: 'N/A',
                appearance: [{
                    year: '2020',
                    cup: '新北聯合盃',
                    g: '2',
                    goals: '0',
                    asts: '0',
                    cs: 'N/A'
                }]
            },
            {
                number: '97',
                name: '宇 正',
                position: ['MF', 'ST'],
                matches: '8',
                goals: '3',
                assists: '1',
                cleansheets: 'N/A',
                appearance: [{
                    year: '2020',
                    cup: '秋季大安盃',
                    g: '6',
                    goals: '3',
                    asts: '0',
                    cs: 'N/A'
                }, {
                    year: '2020',
                    cup: '新北聯合盃',
                    g: '2',
                    goals: '0',
                    asts: '1',
                    cs: 'N/A'
                }]
            }
        ],
        videos: [{
            cupName: '秋季大安盃',
            videos: [{
                date: '10/25',
                opponents: '炫風新尖兵、熱血足球 U8',
                url: `<video width="85%" controls><source src="https://drive.google.com/uc?id=1s23y3EqhXcsJCS1coScLHcXAT7buq2xx&export=download&authuser=0" type="video/mp4"></video>`
            }, {
                date: '11/08',
                opponents: '磐石',
                url: `<video width="85%" controls><source src="https://drive.google.com/uc?id=1EcdAxtVYgD3wTJ6NdEGFkWo-RFw3YNKa&export=download&authuser=0" type="video/mp4"></video>`
            }, {
                date: '12/06',
                opponents: '銘傳之星 （準決賽）',
                url: `<video width="85%" controls><source src="https://drive.google.com/uc?id=1rzldKj3K7BL6qqfYehCRPaTXQQGy3Tz0&export=download&authuser=0" type="video/mp4"></video>`
            }, {
                date: '12/06',
                opponents: '公館小雷霆 （季軍戰）',
                url: `<video width="85%" controls><source src="https://drive.google.com/uc?id=1u6bHo5xwaBV19ucVLRm-LLGuw-71UGJI&export=download&authuser=0" type="video/mp4"></video>`
            }],
            icon: 'fas fa-futbol'
        }, {
            cupName: '新北聯合盃',
            videos: [{
                date: '11/21',
                opponents: '航源FC',
                url: `<video width="85%" controls><source src="https://drive.google.com/uc?id=1o83cpxGXXb0AuVD7DA6QZjkBA0lZwRGn&export=download&authuser=0" type="video/mp4"></video>`
            }, {
                date: '11/22',
                opponents: '虎鯊HSFC',
                url: `<video width="85%" controls><source src="https://drive.google.com/uc?id=1H7zY3OWRGLVpVr1t9K5SiBgCBEJPQNZH&export=download&authuser=0" type="video/mp4"></video>`
            }],
            icon: 'fab fa-unity'
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

    }
})