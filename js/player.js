new Vue({
    el: '#zhiqinfootball',
    data: {
        sortType: 'number',
        searchText: '',
        minNumber: '',
        maxNumber: '',
        selectedPosition: [],
        positions: ['GK', 'DF', 'MF', 'FW'],
        players: [{
                number: '3',
                name: '晉 丞',
                active: true,
                position: ['MF', 'FW'],
                appearance: [{
                        year: '2022',
                        cup: '新北聯合盃',
                        g: '1',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2022',
                        cup: '全國學童盃',
                        g: '4',
                        goals: '3',
                        asts: '1',
                        cs: '0'
                    }, {
                        year: '2022',
                        cup: '臺北市足球Ｕ聯賽',
                        g: '1',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2022',
                        cup: '新北市少年八人制秋季聯賽',
                        g: '2',
                        goals: '4',
                        asts: '1',
                        cs: '0'
                    }, {
                        year: '2022',
                        cup: '春季大安盃',
                        g: '1',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2022',
                        cup: '包中盃',
                        g: '3',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2022',
                        cup: '新北市少年八人制春季聯賽',
                        g: '6',
                        goals: '1',
                        asts: '1',
                        cs: '0'
                    }, {
                        year: '2022',
                        cup: '迎虎盃',
                        g: '3',
                        goals: '3',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2021',
                        cup: 'A-Star聖誕盃',
                        g: '2',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2021',
                        cup: '新北聯合盃',
                        g: '3',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2021',
                        cup: '中正主委盃',
                        g: '3',
                        goals: '1',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2021',
                        cup: '學童盃',
                        g: '1',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2021',
                        cup: '春季大安盃',
                        g: '2',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2021',
                        cup: '萬歲盃',
                        g: '2',
                        goals: '0',
                        asts: '1',
                        cs: '0'
                    }, {
                        year: '2021',
                        cup: '金牛賀歲盃',
                        g: '1',
                        goals: '0',
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
                        year: '2020',
                        cup: '新北聯合盃',
                        g: '4',
                        goals: '2',
                        asts: '0',
                        cs: '0'
                    }
                ]
            },
            {
                number: '7',
                name: '黃 衍',
                active: true,
                position: ['GK', 'DF', 'MF'],
                appearance: [{
                        year: '2022',
                        cup: '新北聯合盃',
                        g: '1',
                        goals: '1',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2022',
                        cup: '全國學童盃',
                        g: '4',
                        goals: '2',
                        asts: '0',
                        cs: '1'
                    }, {
                        year: '2022',
                        cup: '新北市少年八人制秋季聯賽',
                        g: '2',
                        goals: '2',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2022',
                        cup: '新北市夏季主委盃草地五人制',
                        g: '2',
                        goals: '0',
                        asts: '1',
                        cs: '1'
                    }, {
                        year: '2022',
                        cup: '臺北市五人制足球聯賽',
                        g: '2',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2022',
                        cup: '包中盃',
                        g: '3',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2022',
                        cup: '臺北市教育盃',
                        g: '3',
                        goals: '2',
                        asts: '1',
                        cs: '0'
                    }, {
                        year: '2022',
                        cup: '新北市少年八人制春季聯賽',
                        g: '6',
                        goals: '1',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2022',
                        cup: '迎虎盃',
                        g: '3',
                        goals: '1',
                        asts: '1',
                        cs: '0'
                    }, {
                        year: '2021',
                        cup: 'A-Star聖誕盃',
                        g: '3',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2021',
                        cup: '新北聯合盃',
                        g: '4',
                        goals: '1',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2021',
                        cup: '中正主委盃',
                        g: '3',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2021',
                        cup: '學童盃',
                        g: '2',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2021',
                        cup: '春季大安盃',
                        g: '6',
                        goals: '4',
                        asts: '4',
                        cs: '0'
                    }, {
                        year: '2021',
                        cup: '金牛賀歲盃',
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
                        year: '2020',
                        cup: '新北聯合盃',
                        g: '3',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2020',
                        cup: '秋季大安盃',
                        g: '6',
                        goals: '0',
                        asts: '1',
                        cs: '0'
                    }              
                ]
            },
            {
                number: '9',
                name: '紘 豪',
                active: true,
                position: ['DF', 'MF'],
                appearance: [{
                        year: '2022',
                        cup: '新北聯合盃',
                        g: '1',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2022',
                        cup: '全國學童盃',
                        g: '2',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2022',
                        cup: '臺北市足球Ｕ聯賽',
                        g: '1',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2022',
                        cup: '新北市少年八人制秋季聯賽',
                        g: '2',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2022',
                        cup: '春季大安盃',
                        g: '3',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2022',
                        cup: '包中盃',
                        g: '3',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2022',
                        cup: '新北市少年八人制春季聯賽',
                        g: '4',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2022',
                        cup: '迎虎盃',
                        g: '3',
                        goals: '2',
                        asts: '1',
                        cs: '0'
                    }, {
                        year: '2021',
                        cup: 'A-Star聖誕盃',
                        g: '2',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2021',
                        cup: '學童盃',
                        g: '1',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2021',
                        cup: '春季大安盃',
                        g: '6',
                        goals: '0',
                        asts: '1',
                        cs: '0'
                    }, {
                        year: '2021',
                        cup: '萬歲盃',
                        g: '2',
                        goals: '0',
                        asts: '1',
                        cs: '0'
                    }, {
                        year: '2021',
                        cup: '金牛賀歲盃',
                        g: '2',
                        goals: '0',
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
                        year: '2020',
                        cup: '新北聯合盃',
                        g: '4',
                        goals: '1',
                        asts: '1',
                        cs: '0'
                    }, {
                        year: '2020',
                        cup: '秋季大安盃',
                        g: '6',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }
                ]
            },
            {
                number: '10',
                name: '善 捷',
                active: true,
                position: ['GK', 'DF'],
                appearance: [{
                        year: '2022',
                        cup: '全國學童盃',
                        g: '3',
                        goals: '0',
                        asts: '0',
                        cs: '1'
                    }, {
                        year: '2022',
                        cup: '新北市夏季主委盃草地五人制',
                        g: '3',
                        goals: '0',
                        asts: '0',
                        cs: '1'
                    }, {
                        year: '2022',
                        cup: '春季大安盃',
                        g: '4',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2022',
                        cup: '包中盃',
                        g: '3',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2022',
                        cup: '臺北市教育盃',
                        g: '2',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2022',
                        cup: '新北市少年八人制春季聯賽',
                        g: '1',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2022',
                        cup: '迎虎盃',
                        g: '3',
                        goals: '0',
                        asts: '1',
                        cs: '0'
                    }, {
                        year: '2021',
                        cup: 'A-Star聖誕盃',
                        g: '3',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2021',
                        cup: '中正主委盃',
                        g: '3',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2021',
                        cup: '學童盃',
                        g: '1',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2021',
                        cup: '安聯小小世界盃',
                        g: '3',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2021',
                        cup: '春季大安盃',
                        g: '6',
                        goals: '0',
                        asts: '0',
                        cs: '5'
                    }, {
                        year: '2021',
                        cup: '萬歲盃',
                        g: '2',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2021',
                        cup: '金牛賀歲盃',
                        g: '3',
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
                        year: '2020',
                        cup: '新北聯合盃',
                        g: '4',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }
                ]
            },
            {
                number: '11',
                name: '定 緯',
                active: true,
                position: ['MF'],
                appearance: [{
                    year: '2021',
                    cup: 'A-Star聖誕盃',
                    g: '2',
                    goals: '0',
                    asts: '0',
                    cs: '0'
                }]
            },
            {
                number: '12',
                name: '皓 宇',
                active: true,
                position: ['MF', 'FW'],
                appearance: [{
                        year: '2022',
                        cup: '新北聯合盃',
                        g: '1',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2022',
                        cup: '全國學童盃',
                        g: '4',
                        goals: '0',
                        asts: '1',
                        cs: '0'
                    }, {
                        year: '2022',
                        cup: '臺北市足球Ｕ聯賽',
                        g: '1',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2022',
                        cup: '新北市少年八人制秋季聯賽',
                        g: '2',
                        goals: '1',
                        asts: '1',
                        cs: '0'
                    }, {
                        year: '2022',
                        cup: '新北市夏季主委盃草地五人制',
                        g: '3',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2022',
                        cup: '臺北市五人制足球聯賽',
                        g: '2',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2022',
                        cup: '中華五人制足球錦標賽',
                        g: '2',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2022',
                        cup: '臺北市教育盃',
                        g: '3',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2021',
                        cup: 'A-Star聖誕盃',
                        g: '3',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2021',
                        cup: '新北聯合盃',
                        g: '3',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2021',
                        cup: '中正主委盃',
                        g: '3',
                        goals: '0',
                        asts: '2',
                        cs: '0'
                    }, {
                        year: '2021',
                        cup: '學童盃',
                        g: '2',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2021',
                        cup: '安聯小小世界盃',
                        g: '3',
                        goals: '5',
                        asts: '2',
                        cs: '0'
                    }, {
                        year: '2021',
                        cup: '春季大安盃',
                        g: '6',
                        goals: '9',
                        asts: '6',
                        cs: '0'
                    }, {
                        year: '2021',
                        cup: '金牛賀歲盃',
                        g: '3',
                        goals: '0',
                        asts: '1',
                        cs: '0'
                    }, {
                        year: '2021',
                        cup: '扶輪社暨航源足球賽',
                        g: '5',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2020',
                        cup: '新北聯合盃',
                        g: '4',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2020',
                        cup: '秋季大安盃',
                        g: '6',
                        goals: '1',
                        asts: '1',
                        cs: '0'
                    }
                    
                ]
            },
            {
                number: '15',
                name: '凱 泰',
                active: true,
                position: ['GK', 'FW'],
                appearance: [{
                        year: '2022',
                        cup: '新北聯合盃',
                        g: '1',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2022',
                        cup: '全國學童盃',
                        g: '2',
                        goals: '0',
                        asts: '0',
                        cs: '1'
                    }, {
                        year: "2022",
                        cup: "臺北市足球Ｕ聯賽",
                        g: "1",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    }, {
                        year: "2022",
                        cup: "新北市少年八人制秋季聯賽",
                        g: "2",
                        goals: "0",
                        asts: "0",
                        cs: "2"
                    }, {
                        year: "2022",
                        cup: "新北市夏季主委盃草地五人制",
                        g: "3",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    }, {
                        year: "2022",
                        cup: "春季大安盃",
                        g: "3",
                        goals: "0",
                        asts: "1",
                        cs: "0"
                    }, {
                        year: "2022",
                        cup: "新北市少年八人制春季聯賽",
                        g: "3",
                        goals: "0",
                        asts: "0",
                        cs: "1"
                    }, {
                        year: "2021",
                        cup: "A-Star聖誕盃",
                        g: "3",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    }, {
                        year: "2021",
                        cup: "新北聯合盃",
                        g: "3",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    }, {
                        year: "2021",
                        cup: "中正主委盃",
                        g: "3",
                        goals: "0",
                        asts: "0",
                        cs: "1"
                    }, {
                        year: "2021",
                        cup: "學童盃",
                        g: "1",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    }, {
                        year: "2021",
                        cup: "春季大安盃",
                        g: "2",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    }, {
                        year: "2021",
                        cup: "萬歲盃",
                        g: "2",
                        goals: "1",
                        asts: "0",
                        cs: "0"
                    }, {
                        year: "2021",
                        cup: "金牛賀歲盃",
                        g: "3",
                        goals: "0",
                        asts: "0",
                        cs: "2"
                    }, {
                        year: "2021",
                        cup: "扶輪社暨航源足球賽",
                        g: "3",
                        goals: "0",
                        asts: "0",
                        cs: "1"
                    }, {
                        year: "2020",
                        cup: "新北聯合盃",
                        g: "4",
                        goals: "0",
                        asts: "0",
                        cs: "1"
                    }
                ]
            },
            {
                number: '18',
                name: '維 恩（C）',
                active: true,
                position: ['DF', 'MF'],
                appearance: [{
                        year: '2022',
                        cup: '新北聯合盃',
                        g: '1',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2022',
                        cup: '全國學童盃',
                        g: '4',
                        goals: '1',
                        asts: '1',
                        cs: '0'
                    }, {
                        year: "2022",
                        cup: "臺北市足球Ｕ聯賽",
                        g: "1",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    }, {
                        year: "2022",
                        cup: "新北市少年八人制秋季聯賽",
                        g: "2",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    }, {
                        year: "2022",
                        cup: "新北市夏季主委盃草地五人制",
                        g: "3",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    }, {
                        year: "2022",
                        cup: "臺北市五人制足球聯賽",
                        g: "2",
                        goals: "1",
                        asts: "0",
                        cs: "0"
                    }, {
                        year: "2022",
                        cup: "包中盃",
                        g: "3",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    }, {
                        year: "2022",
                        cup: "中華五人制足球錦標賽",
                        g: "2",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    }, {
                        year: "2022",
                        cup: "臺北市教育盃",
                        g: "3",
                        goals: "4",
                        asts: "0",
                        cs: "0"
                    }, {
                        year: "2022",
                        cup: "新北市少年八人制春季聯賽",
                        g: "6",
                        goals: "1",
                        asts: "1",
                        cs: "0"
                    }, {
                        year: "2022",
                        cup: "迎虎盃",
                        g: "3",
                        goals: "1",
                        asts: "0",
                        cs: "0"
                    }, {
                        year: "2021",
                        cup: "A-Star聖誕盃",
                        g: "3",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    }, {
                        year: "2021",
                        cup: "新北聯合盃",
                        g: "4",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    }, {
                        year: "2021",
                        cup: "中正主委盃",
                        g: "3",
                        goals: "2",
                        asts: "0",
                        cs: "0"
                    }, {
                        year: "2021",
                        cup: "學童盃",
                        g: "2",
                        goals: "1",
                        asts: "0",
                        cs: "0"
                    }, {
                        year: "2021",
                        cup: "春季大安盃",
                        g: "6",
                        goals: "5",
                        asts: "2",
                        cs: "3"
                    }, {
                        year: "2021",
                        cup: "金牛賀歲盃",
                        g: "3",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    }, {
                        year: "2021",
                        cup: "扶輪社暨航源足球賽",
                        g: "5",
                        goals: "1",
                        asts: "0",
                        cs: "0"
                    }, {
                        year: "2020",
                        cup: "新北聯合盃",
                        g: "4",
                        goals: "3",
                        asts: "1",
                        cs: "0"
                    }, {
                        year: "2020",
                        cup: "秋季大安盃",
                        g: "6",
                        goals: "1",
                        asts: "2",
                        cs: "0"
                    }
                ]
            },
            {
                number: '21',
                name: '亮 谷（VC）',
                active: true,
                position: ['DF', 'MF'],
                appearance: [{
                        year: '2022',
                        cup: '新北聯合盃',
                        g: '1',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2022',
                        cup: '全國學童盃',
                        g: '4',
                        goals: '0',
                        asts: '1',
                        cs: '0'
                    }, {
                        year: "2022",
                        cup: "臺北市足球Ｕ聯賽",
                        g: "1",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    }, {
                        year: "2022",
                        cup: "新北市少年八人制秋季聯賽",
                        g: "2",
                        goals: "2",
                        asts: "1",
                        cs: "0"
                    }, {
                        year: "2022",
                        cup: "新北市夏季主委盃草地五人制",
                        g: "2",
                        goals: "3",
                        asts: "1",
                        cs: "0"
                    }, {
                        year: "2022",
                        cup: "臺北市五人制足球聯賽",
                        g: "2",
                        goals: "1",
                        asts: "1",
                        cs: "0"
                    }, {
                        year: "2022",
                        cup: "包中盃",
                        g: "3",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    }, {
                        year: "2022",
                        cup: "臺北市教育盃",
                        g: "3",
                        goals: "0",
                        asts: "2",
                        cs: "0"
                    }, {
                        year: "2022",
                        cup: "新北市少年八人制春季聯賽",
                        g: "6",
                        goals: "3",
                        asts: "1",
                        cs: "0"
                    }, {
                        year: "2022",
                        cup: "迎虎盃",
                        g: "3",
                        goals: "3",
                        asts: "1",
                        cs: "0"
                    }, {
                        year: "2021",
                        cup: "A-Star聖誕盃",
                        g: "3",
                        goals: "1",
                        asts: "0",
                        cs: "0"
                    }, {
                        year: "2021",
                        cup: "新北聯合盃",
                        g: "4",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    }, {
                        year: "2021",
                        cup: "中正主委盃",
                        g: "2",
                        goals: "0",
                        asts: "1",
                        cs: "0"
                    }, {
                        year: "2021",
                        cup: "學童盃",
                        g: "2",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    }, {
                        year: "2021",
                        cup: "春季大安盃",
                        g: "6",
                        goals: "8",
                        asts: "5",
                        cs: "0"
                    }, {
                        year: "2021",
                        cup: "萬歲盃",
                        g: "2",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    }, {
                        year: "2021",
                        cup: "金牛賀歲盃",
                        g: "3",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    }, {
                        year: "2021",
                        cup: "扶輪社暨航源足球賽",
                        g: "5",
                        goals: "1",
                        asts: "2",
                        cs: "0"
                    }, {
                        year: "2020",
                        cup: "新北聯合盃",
                        g: "4",
                        goals: "4",
                        asts: "2",
                        cs: "0"
                    }, {
                        year: "2020",
                        cup: "秋季大安盃",
                        g: "6",
                        goals: "5",
                        asts: "0",
                        cs: "0"
                    }
                ]
            },
            {
                number: '23',
                name: '柏 燁',
                active: true,
                position: ['GK', 'MF', 'FW'],
                appearance: [
                    {
                        year: '2022',
                        cup: '全國學童盃',
                        g: '2',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: "2022",
                        cup: "新北市少年八人制秋季聯賽",
                        g: "1",
                        goals: "0",
                        asts: "2",
                        cs: "0"
                    }, {
                        year: "2022",
                        cup: "新北市夏季主委盃草地五人制",
                        g: "1",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    }, {
                        year: "2022",
                        cup: "春季大安盃",
                        g: "3",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    }, {
                        year: "2022",
                        cup: "包中盃",
                        g: "2",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    }, {
                        year: "2022",
                        cup: "新北市少年八人制春季聯賽",
                        g: "6",
                        goals: "0",
                        asts: "0",
                        cs: "1"
                    }, {
                        year: "2022",
                        cup: "迎虎盃",
                        g: "3",
                        goals: "1",
                        asts: "0",
                        cs: "0"
                    }, {
                        year: "2021",
                        cup: "新北聯合盃",
                        g: "2",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    }, {
                        year: "2021",
                        cup: "中正主委盃",
                        g: "3",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    }, {
                        year: "2021",
                        cup: "學童盃",
                        g: "1",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    }, {
                        year: "2021",
                        cup: "安聯小小世界盃",
                        g: "3",
                        goals: "1",
                        asts: "0",
                        cs: "0"
                    }, {
                        year: "2021",
                        cup: "春季大安盃",
                        g: "2",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    }
                ]
            },
            {
                number: '27',
                name: '定 謙',
                active: true,
                position: ['GK', 'FW'],
                appearance: [
                    {
                        year: '2022',
                        cup: '全國學童盃',
                        g: '2',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: "2022",
                        cup: "臺北市足球Ｕ聯賽",
                        g: "1",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    }, {
                        year: "2022",
                        cup: "新北市少年八人制秋季聯賽",
                        g: "2",
                        goals: "0",
                        asts: "1",
                        cs: "0"
                    }, {
                        year: "2022",
                        cup: "新北市夏季主委盃草地五人制",
                        g: "3",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    }, {
                        year: "2022",
                        cup: "春季大安盃",
                        g: "4",
                        goals: "1",
                        asts: "2",
                        cs: "0"
                    }, {
                        year: "2022",
                        cup: "包中盃",
                        g: "3",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    }, {
                        year: "2022",
                        cup: "新北市少年八人制春季聯賽",
                        g: "6",
                        goals: "0",
                        asts: "0",
                        cs: "2"
                    }, {
                        year: "2022",
                        cup: "迎虎盃",
                        g: "3",
                        goals: "1",
                        asts: "0",
                        cs: "0"
                    }, {
                        year: "2021",
                        cup: "A-Star聖誕盃",
                        g: "3",
                        goals: "1",
                        asts: "0",
                        cs: "0"
                    }, {
                        year: "2021",
                        cup: "新北聯合盃",
                        g: "4",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    }, {
                        year: "2021",
                        cup: "中正主委盃",
                        g: "3",
                        goals: "1",
                        asts: "0",
                        cs: "0"
                    }, {
                        year: "2021",
                        cup: "學童盃",
                        g: "2",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    }, {
                        year: "2021",
                        cup: "安聯小小世界盃",
                        g: "3",
                        goals: "2",
                        asts: "2",
                        cs: "0"
                    }, {
                        year: "2021",
                        cup: "春季大安盃",
                        g: "2",
                        goals: "2",
                        asts: "0",
                        cs: "0"
                    }, {
                        year: "2021",
                        cup: "萬歲盃",
                        g: "2",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    }, {
                        year: "2021",
                        cup: "金牛賀歲盃",
                        g: "1",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    }, {
                        year: "2021",
                        cup: "扶輪社暨航源足球賽",
                        g: "3",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    }, {
                        year: "2020",
                        cup: "新北聯合盃",
                        g: "4",
                        goals: "2",
                        asts: "0",
                        cs: "2"
                    }, {
                        year: "2020",
                        cup: "秋季大安盃",
                        g: "5",
                        goals: "1",
                        asts: "0",
                        cs: "0"
                    }
                ]
            },
            {
                number: '55',
                name: '宥 融',
                active: true,
                position: ['GK', 'DF', 'MF'],
                appearance: [{
                        year: '2022',
                        cup: '新北聯合盃',
                        g: '1',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2022',
                        cup: '全國學童盃',
                        g: '4',
                        goals: '1',
                        asts: '1',
                        cs: '0'
                    }, {
                        year: "2022",
                        cup: "臺北市足球Ｕ聯賽",
                        g: "1",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    }, {
                        year: "2022",
                        cup: "新北市少年八人制秋季聯賽",
                        g: "2",
                        goals: "1",
                        asts: "1",
                        cs: "1"
                    }, {
                        year: "2022",
                        cup: "新北市夏季主委盃草地五人制",
                        g: "3",
                        goals: "1",
                        asts: "0",
                        cs: "0"
                    }, {
                        year: "2022",
                        cup: "臺北市五人制足球聯賽",
                        g: "2",
                        goals: "2",
                        asts: "0",
                        cs: "0"
                    }, {
                        year: "2022",
                        cup: "包中盃",
                        g: "3",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    }, {
                        year: "2022",
                        cup: "中華五人制足球錦標賽",
                        g: "2",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    }, {
                        year: "2022",
                        cup: "臺北市教育盃",
                        g: "3",
                        goals: "1",
                        asts: "0",
                        cs: "0"
                    }, {
                        year: "2022",
                        cup: "新北市少年八人制春季聯賽",
                        g: "6",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    }, {
                        year: "2022",
                        cup: "迎虎盃",
                        g: "3",
                        goals: "5",
                        asts: "1",
                        cs: "0"
                    }, {
                        year: "2021",
                        cup: "A-Star聖誕盃",
                        g: "3",
                        goals: "0",
                        asts: "1",
                        cs: "1"
                    }, {
                        year: "2021",
                        cup: "新北聯合盃",
                        g: "4",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    }, {
                        year: "2021",
                        cup: "學童盃",
                        g: "2",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    }, {
                        year: "2021",
                        cup: "安聯小小世界盃",
                        g: "3",
                        goals: "0",
                        asts: "1",
                        cs: "0"
                    },　{
                        year: "2021",
                        cup: "春季大安盃",
                        g: "6",
                        goals: "4",
                        asts: "3",
                        cs: "4"
                    },　{
                        year: "2021",
                        cup: "金牛賀歲盃",
                        g: "3",
                        goals: "1",
                        asts: "0",
                        cs: "0"
                    },　{
                        year: "2021",
                        cup: "扶輪社暨航源足球賽",
                        g: "5",
                        goals: "1",
                        asts: "0",
                        cs: "2"
                    },　{
                        year: "2020",
                        cup: "新北聯合盃",
                        g: "4",
                        goals: "1",
                        asts: "0",
                        cs: "1"
                    },　{                
                        year: "2020",
                        cup: "秋季大安盃",
                        g: "6",
                        goals: "0",
                        asts: "1",
                        cs: "2"
                    }
                ]
            },
            {
                number: '77',
                name: '昕 叡',
                active: true,
                position: ['DF', 'MF'],
                appearance: [{
                        year: '2022',
                        cup: '新北聯合盃',
                        g: '1',
                        goals: '1',
                        asts: '1',
                        cs: '0'
                    },　{
                        year: '2022',
                        cup: '全國學童盃',
                        g: '4',
                        goals: '2',
                        asts: '1',
                        cs: '0'
                    },　{
                        year: "2022",
                        cup: "臺北市足球Ｕ聯賽",
                        g: "1",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    },　{
                        year: "2022",
                        cup: "新北市少年八人制秋季聯賽",
                        g: "2",
                        goals: "1",
                        asts: "0",
                        cs: "0"
                    },　{
                        year: "2022",
                        cup: "新北市夏季主委盃草地五人制",
                        g: "3",
                        goals: "1",
                        asts: "0",
                        cs: "0"
                    },　{
                        year: "2022",
                        cup: "春季大安盃",
                        g: "4",
                        goals: "2",
                        asts: "0",
                        cs: "0"
                    },　{
                        year: "2022",
                        cup: "包中盃",
                        g: "3",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    },　{
                        year: "2022",
                        cup: "臺北市教育盃",
                        g: "2",
                        goals: "1",
                        asts: "1",
                        cs: "0"
                    },　{
                        year: "2022",
                        cup: "新北市少年八人制春季聯賽",
                        g: "6",
                        goals: "1",
                        asts: "1",
                        cs: "0"
                    },　{
                        year: "2022",
                        cup: "迎虎盃",
                        g: "3",
                        goals: "0",
                        asts: "2",
                        cs: "0"
                    },　{
                        year: "2021",
                        cup: "A-Star聖誕盃",
                        g: "2",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    },　{
                        year: "2021",
                        cup: "新北聯合盃",
                        g: "2",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    },　{
                        year: "2021",
                        cup: "中正主委盃",
                        g: "3",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    },　{
                        year: "2021",
                        cup: "學童盃",
                        g: "2",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    },　{
                        year: "2021",
                        cup: "春季大安盃",
                        g: "2",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    },　{
                        year: "2021",
                        cup: "金牛賀歲盃",
                        g: "2",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    },　{
                        year: "2020",
                        cup: "新北聯合盃",
                        g: "3",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    }
                ]
            },
            {
                number: '97',
                name: '宇 正',
                active: true,
                position: ['GK', 'DF', 'MF', 'FW'],
                appearance: [{
                        year: '2022',
                        cup: '新北聯合盃',
                        g: '1',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    },　{
                        year: '2022',
                        cup: '全國學童盃',
                        g: '4',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    },　{
                        year: "2022",
                        cup: "臺北市足球Ｕ聯賽",
                        g: "1",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    },　{
                        year: "2022",
                        cup: "新北市少年八人制秋季聯賽",
                        g: "2",
                        goals: "1",
                        asts: "0",
                        cs: "0"
                    },　{
                        year: "2022",
                        cup: "臺北市五人制足球聯賽",
                        g: "2",
                        goals: "1",
                        asts: "0",
                        cs: "0"
                    },　{
                        year: "2022",
                        cup: "包中盃",
                        g: "3",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    },　{
                        year: "2022",
                        cup: "中華五人制足球錦標賽",
                        g: "2",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    },　{
                        year: "2022",
                        cup: "臺北市教育盃",
                        g: "3",
                        goals: "3",
                        asts: "1",
                        cs: "0"
                    },　{
                        year: "2022",
                        cup: "新北市少年八人制春季聯賽",
                        g: "5",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    },　{
                        year: "2022",
                        cup: "迎虎盃",
                        g: "3",
                        goals: "1",
                        asts: "1",
                        cs: "0"
                    },　{
                        year: "2021",
                        cup: "A-Star聖誕盃",
                        g: "3",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    },　{
                        year: "2021",
                        cup: "新北聯合盃",
                        g: "4",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    },　{
                        year: "2021",
                        cup: "中正主委盃",
                        g: "3",
                        goals: "2",
                        asts: "0",
                        cs: "0"
                    },　{
                        year: "2021",
                        cup: "學童盃",
                        g: "2",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    },　{
                        year: "2021",
                        cup: "安聯小小世界盃",
                        g: "3",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    },　{
                        year: "2021",
                        cup: "春季大安盃",
                        g: "6",
                        goals: "14",
                        asts: "6",
                        cs: "0"
                    },　{
                        year: "2021",
                        cup: "萬歲盃",
                        g: "2",
                        goals: "3",
                        asts: "0",
                        cs: "0"
                    },　{
                        year: "2021",
                        cup: "金牛賀歲盃",
                        g: "3",
                        goals: "2",
                        asts: "0",
                        cs: "0"
                    },　{
                        year: "2021",
                        cup: "扶輪社暨航源足球賽",
                        g: "5",
                        goals: "1",
                        asts: "1",
                        cs: "0"
                    },　{
                        year: "2020",
                        cup: "新北聯合盃",
                        g: "4",
                        goals: "1",
                        asts: "1",
                        cs: "0"
                    },　{
                        year: "2020",
                        cup: "秋季大安盃",
                        g: "6",
                        goals: "3",
                        asts: "0",
                        cs: "0"
                    }
                ]
            },
            {
                number: '2',
                name: '定 宸',
                active: false,
                position: ['DF'],
                appearance: [{
                        year: '2021',
                        cup: '春季大安盃',
                        g: '2',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }, {
                        year: '2021',
                        cup: '萬歲盃',
                        g: '2',
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
                        year: '2020',
                        cup: '秋季大安盃',
                        g: '4',
                        goals: '0',
                        asts: '1',
                        cs: '0'
                    }
                    
                ]
            },
            {
                number: '8',
                name: '翊 愷',
                active: false,
                position: ['MF'],
                appearance: [{
                        year: '2021',
                        cup: '安聯小小世界盃',
                        g: '2',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    },　{
                        year: '2021',
                        cup: '春季大安盃',
                        g: '2',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    },　{
                        year: '2021',
                        cup: '萬歲盃',
                        g: '2',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    },　{
                        year: '2020',
                        cup: '新北聯合盃',
                        g: '1',
                        goals: '0',
                        asts: '0',
                        cs: '0'
                    }
                ]
            },
            {
                number: '22',
                name: '明 澤',
                active: false,
                position: ['DF'],
                appearance: [
                    {
                        year: "2021",
                        cup: "安聯小小世界盃",
                        g: "2",
                        goals: "0",
                        asts: "1",
                        cs: "0"
                    },　{
                        year: "2021",
                        cup: "春季大安盃",
                        g: "2",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    },　{
                        year: "2021",
                        cup: "萬歲盃",
                        g: "2",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    },　{
                        year: "2021",
                        cup: "金牛賀歲盃",
                        g: "3",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    },　{
                        year: "2020",
                        cup: "新北聯合盃",
                        g: "2",
                        goals: "0",
                        asts: "1",
                        cs: "0"
                    },　{
                        year: "2020",
                        cup: "秋季大安盃",
                        g: "6",
                        goals: "0",
                        asts: "0",
                        cs: "0"
                    }
                ]
            },
            {
                number: '30',
                name: '品 叡',
                active: false,
                position: ['MF'],
                appearance: [{
                    year: '2020',
                    cup: '新北聯合盃',
                    g: '2',
                    goals: '0',
                    asts: '1',
                    cs: '0'
                }]
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
            this.sortType = 'number'
        },
        setSortType: function(val) {
            this.sortType = val
        }
    },
    computed: {
        playerFilter: function(type) {
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

            function sumStat(o, type) {
                let sum = _.sumBy(o.appearance, app => {
                    return parseInt(app[type])
                })
                return sum
            }

            filteredResult = filteredResult.map(v => ({ ...v,
                totalMatches: sumStat(v, 'g'),
                totalGoals: sumStat(v, 'goals'),
                totalAsts: sumStat(v, 'asts'),
                totalCS: sumStat(v, 'cs')
            }))

            type = this.sortType

            if (type === 'number') {
                filteredResult = _.orderBy(filteredResult, function(obj) {
                    return parseInt(obj[type], 10);
                })
            } else {
                filteredResult = _.orderBy(filteredResult, function(obj) {
                    return parseInt(obj[type], 10)
                }, 'desc')
            }

            // console.log(filteredResult)

            return {
                active: _.filter(filteredResult, ['active', true]),
                retire: _.filter(filteredResult, ['active', false])
            }
        },
        yearFilter: function(app, val) {
            let appYear = app
            return function(appYear) {
                return appYear
            }
        }
    }
})