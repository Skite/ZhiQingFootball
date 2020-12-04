new Vue({
    el: '#zhiqinfootball',
    data: {
        searchText: '',
        minNumber: '',
        maxNumber: this.maxNumber < 10 ? this.maxNumber = '0' + this.maxNumber : this.maxNumber,
        selectedPosition: [],
        positions: ['All', 'GK', 'DF', 'MF', 'ST'],
        players: [{
                number: '2',
                name: '定 宸',
                position: 'DF、MF',
                matches: '2',
                goals: '0',
                assists: '0',
                cleansheets: 'N/A',
                appearance: '<ul><li>2020 大安盃 / 2 appearances</li></ul>'
            },
            {
                number: '3',
                name: '晉 丞',
                position: 'MF',
                matches: '2',
                goals: '1',
                assists: '0',
                cleansheets: 'N/A',
                appearance: '<ul><li>2020 新北聯合盃 / 2 appearances</li></ul>'
            },
            {
                number: '7',
                name: '黃 衍',
                position: 'DF',
                matches: '5',
                goals: '0',
                assists: '0',
                cleansheets: 'N/A',
                appearance: '<ul><li>2020 大安盃 / 4 appearances</li><li>2020 新北聯合盃 / 1 appearances</li></ul>'
            },
            {
                number: '8',
                name: '翊 愷',
                position: 'N/A',
                matches: '0',
                goals: 'N/A',
                assists: 'N/A',
                cleansheets: 'N/A',
                appearance: '<ul></ul>'
            },
            {
                number: '9',
                name: '紘 豪',
                position: 'DF',
                matches: '6',
                goals: '1',
                assists: '0',
                cleansheets: 'N/A',
                appearance: '<ul><li>2020 大安盃 / 4 appearances</li><li>2020 新北聯合盃 / 2 appearances</li></ul>'
            },
            {
                number: '10',
                name: '善 捷',
                position: 'MF',
                matches: '2',
                goals: '0',
                assists: '0',
                cleansheets: 'N/A',
                appearance: '<ul><li>2020 新北聯合盃 / 2 appearances</li></ul>'
            },
            {
                number: '11',
                name: '定 緯',
                position: 'N/A',
                matches: '2',
                goals: '0',
                assists: '0',
                cleansheets: 'N/A',
                appearance: '<ul><li>2020 大安盃 / 2 appearances</li></ul>'
            },
            {
                number: '12',
                name: '皓 宇',
                position: 'MF、ST',
                matches: '6',
                goals: '1',
                assists: '0',
                cleansheets: 'N/A',
                appearance: '<ul><li>2020 大安盃 / 4 appearances</li><li>2020 新北聯合盃 / 2 appearances</li></ul>'
            },
            {
                number: '15',
                name: '凱 泰',
                position: 'GK、DF',
                matches: '2',
                goals: '0',
                assists: '0',
                cleansheets: 'N/A',
                appearance: '<ul><li>2020 新北聯合盃 / 2 appearances</li></ul>'
            },
            {
                number: '18',
                name: '維 恩（C）',
                position: 'DF、MF、ST',
                matches: '6',
                goals: '1',
                assists: '3',
                cleansheets: 'N/A',
                appearance: '<ul><li>2020 大安盃 / 4 appearances</li><li>2020 新北聯合盃 / 2 appearances</li></ul>'
            },
            {
                number: '21',
                name: '亮 谷',
                position: 'MF、ST',
                matches: '6',
                goals: '5',
                assists: '1',
                cleansheets: 'N/A',
                appearance: '<ul><li>2020 大安盃 / 4 appearances</li><li>2020 新北聯合盃 / 2 appearances</li></ul>'
            },
            {
                number: '22',
                name: '明 澤',
                position: 'ST',
                matches: '5',
                goals: '0',
                assists: '0',
                cleansheets: 'N/A',
                appearance: '<ul><li>2020 大安盃 / 4 appearances</li><li>2020 新北聯合盃 / 1 appearances</li></ul>'
            },
            {
                number: '23',
                name: '柏 燁',
                position: 'N/A',
                matches: '0',
                goals: 'N/A',
                assists: 'N/A',
                cleansheets: 'N/A',
                appearance: '<ul></ul>'
            },
            {
                number: '27',
                name: '定 謙',
                position: 'GK、DF',
                matches: '5',
                goals: '0',
                assists: '0',
                cleansheets: '3',
                appearance: '<ul><li>2020 大安盃 / 3 appearances</li><li>2020 新北聯合盃 / 2 appearances</li></ul>'
            },
            {
                number: '30',
                name: '品 叡',
                position: 'N/A',
                matches: '0',
                goals: 'N/A',
                assists: 'N/A',
                cleansheets: 'N/A',
                appearance: '<ul></ul>'
            },
            {
                number: '55',
                name: '宥 融',
                position: 'GK、ST',
                matches: '6',
                goals: '1',
                assists: 'N/A',
                cleansheets: 'N/A',
                appearance: '<ul><li>2020 大安盃 / 4 appearances</li><li>2020 新北聯合盃 / 2 appearances</li></ul>'
            },
            {
                number: '77',
                name: '昕 叡',
                position: 'ST',
                matches: '2',
                goals: 'N/A',
                assists: 'N/A',
                cleansheets: 'N/A',
                appearance: '<ul><li>2020 新北聯合盃 / 2 appearances</li></ul>'
            },
            {
                number: '97',
                name: '宇 正',
                position: 'MF、ST',
                matches: '6',
                goals: '2',
                assists: '1',
                cleansheets: 'N/A',
                appearance: '<ul><li>2020 大安盃 / 4 appearances</li><li>2020 新北聯合盃 / 2 appearances</li></ul>'
            }
        ],
        videos: [{
            cupName: '大安盃',
            videos: [{
                date: 1025,
                opponents: '炫風新尖兵、熱血足球 U8',
                url: `<video width="85%" controls><source src="https://drive.google.com/uc?id=1s23y3EqhXcsJCS1coScLHcXAT7buq2xx&export=download&authuser=0" type="video/mp4"></video>`
            }, {
                date: 1108,
                opponents: '磐石',
                url: `<video width="85%" controls><source src="https://drive.google.com/uc?id=1EcdAxtVYgD3wTJ6NdEGFkWo-RFw3YNKa&export=download&authuser=0" type="video/mp4"></video>`
            }],
            icon: 'fas fa-futbol'
        }, {
            cupName: '新北聯合盃',
            videos: [{
                date: 1121,
                opponents: '航源FC',
                url: `<video width="85%" controls><source src="https://drive.google.com/uc?id=1o83cpxGXXb0AuVD7DA6QZjkBA0lZwRGn&export=download&authuser=0" type="video/mp4"></video>`
            }, {
                date: 1122,
                opponents: '虎鯊HSFC',
                url: `<video width="85%" controls><source src="https://drive.google.com/uc?id=1H7zY3OWRGLVpVr1t9K5SiBgCBEJPQNZH&export=download&authuser=0" type="video/mp4"></video>`
            }],
            icon: 'fab fa-unity'
        }]
    },
    methods: {
        nameFilter: function(players) {
            if (this.searchText) {
                return players.filter((player) => {
                    return player.name.includes(this.searchText);
                });
            } else {
                return this.players;
            }
        },
        positionFilter: function(players) {
            if (!!this.selectedPosition && this.selectedPosition !== 'All') {
                return players.filter((player) => {
                    return player.position.includes(this.selectedPosition);
                });
            } else {
                return this.players
            }
        },
        numberFilter: function(players) {
            var min = this.minNumber < 10 ? '0' + this.minNumber : this.minNumber;
            var max = this.maxNumber < 10 ? '0' + this.maxNumber : this.maxNumber;
            if (!!this.minNumber && !!this.maxNumber) {
                return players.filter((player) => {
                    var playerNum = player.number < 10 ? '0' + player.number : player.number
                    return playerNum >= min && playerNum <= max;
                })
            } else {
                return this.players;
            }
        }
    },
    computed: {
        playerFilter: function() {
            return this.positionFilter(this.numberFilter(this.nameFilter(this.players)));
            // return this.positionFilter(this.nameFilter(this.players));
        }
    }
})