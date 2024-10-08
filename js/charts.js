$.getJSON("https://skite.github.io/ZhiQingFootball/data/stats.json", function(stats) {
    var colors = Highcharts.getOptions().colors,
        categories = [
            '勝',
            '和',
            '敗'
        ],
        pitchData = [{
                y: Number(stats.hard.wins) + Number(stats.grass.wins),
                color: colors[1],
                drilldown: {
                    name: '勝',
                    categories: [
                        '硬地',
                        '草地'
                    ],
                    data: [
                        Number(stats.hard.wins),
                        Number(stats.grass.wins)
                    ]
                }
            },
            {
                y: Number(stats.hard.draws) + Number(stats.grass.draws),
                color: colors[2],
                drilldown: {
                    name: '和',
                    categories: [
                        '硬地',
                        '草地'
                    ],
                    data: [
                        Number(stats.hard.draws),
                        Number(stats.grass.draws)
                    ]
                }
            },
            {
                y: Number(stats.hard.loses) + Number(stats.grass.loses),
                color: colors[7],
                drilldown: {
                    name: '敗',
                    categories: [
                        '硬地',
                        '草地'
                    ],
                    data: [
                        Number(stats.hard.loses),
                        Number(stats.grass.loses)
                    ]
                }
            }
        ],
        fiveManData = [{
                y: Number(stats.five.U12.wins) + Number(stats.five.U11.wins) + Number(stats.five.U10.wins) + Number(stats.five.U9.wins) + Number(stats.five.U8.wins),
                color: colors[1],
                drilldown: {
                    name: '勝',
                    categories: [
                        'U12',
                        'U11',
                        'U10',
                        'U9',
                        'U8'
                    ],
                    data: [
                        Number(stats.five.U12.wins),
                        Number(stats.five.U11.wins),
                        Number(stats.five.U10.wins),
                        Number(stats.five.U9.wins),
                        Number(stats.five.U8.wins)
                    ]
                }
            },
            {
                y: Number(stats.five.U12.draws) + Number(stats.five.U11.draws) + Number(stats.five.U10.draws) + Number(stats.five.U9.draws) + Number(stats.five.U8.draws),
                color: colors[2],
                drilldown: {
                    name: '和',
                    categories: [
                        'U12',
                        'U11',
                        'U10',
                        'U9',
                        'U8'
                    ],
                    data: [
                        Number(stats.five.U12.draws),
                        Number(stats.five.U11.draws),
                        Number(stats.five.U10.draws),
                        Number(stats.five.U9.draws),
                        Number(stats.five.U8.draws)
                    ]
                }
            },
            {
                y: Number(stats.five.U12.loses) + Number(stats.five.U11.loses) + Number(stats.five.U10.loses) + Number(stats.five.U9.loses) + Number(stats.five.U8.loses),
                color: colors[7],
                drilldown: {
                    name: '敗',
                    categories: [
                        'U12',
                        'U11',
                        'U10',
                        'U9',
                        'U8'
                    ],
                    data: [
                        Number(stats.five.U12.loses),
                        Number(stats.five.U11.loses),
                        Number(stats.five.U10.loses),
                        Number(stats.five.U9.loses),
                        Number(stats.five.U8.loses)
                    ]
                }
            }
        ],
        eightManData = [{
                y: Number(stats.eight.U12.wins) + Number(stats.eight.U11.wins) + Number(stats.eight.U10.wins) + Number(stats.eight.U9.wins) + Number(stats.eight.U8.wins),
                color: colors[1],
                drilldown: {
                    name: '勝',
                    categories: [
                        'U12',
                        'U11',
                        'U10',
                        'U9',
                        'U8'
                    ],
                    data: [
                        Number(stats.eight.U12.wins),
                        Number(stats.eight.U11.wins),
                        Number(stats.eight.U10.wins),
                        Number(stats.eight.U9.wins),
                        Number(stats.eight.U8.wins)
                    ]
                }
            },
            {
                y: Number(stats.eight.U12.draws) + Number(stats.eight.U11.draws) + Number(stats.eight.U10.draws) + Number(stats.eight.U9.draws) + Number(stats.eight.U8.draws),
                color: colors[2],
                drilldown: {
                    name: '和',
                    categories: [
                        'U12',
                        'U11',
                        'U10',
                        'U9',
                        'U8'
                    ],
                    data: [
                        Number(stats.eight.U12.draws),
                        Number(stats.eight.U11.draws),
                        Number(stats.eight.U10.draws),
                        Number(stats.eight.U9.draws),
                        Number(stats.eight.U8.draws)
                    ]
                }
            },
            {
                y: Number(stats.eight.U12.loses) + Number(stats.eight.U11.loses) + Number(stats.eight.U10.loses) + Number(stats.eight.U9.loses) + Number(stats.eight.U8.loses),
                color: colors[7],
                drilldown: {
                    name: '敗',
                    categories: [
                        'U12',
                        'U11',
                        'U10',
                        'U9',
                        'U8'
                    ],
                    data: [
                        Number(stats.eight.U12.loses),
                        Number(stats.eight.U11.loses),
                        Number(stats.eight.U10.loses),
                        Number(stats.eight.U9.loses),
                        Number(stats.eight.U8.loses)
                    ]
                }
            }
        ],
        sevenManData = [{
                y: Number(stats.seven.U12.wins) + Number(stats.seven.U11.wins) + Number(stats.seven.U10.wins) + Number(stats.seven.U9.wins) + Number(stats.seven.U8.wins),
                color: colors[1],
                drilldown: {
                    name: '勝',
                    categories: [
                        'U12',
                        'U11',
                        'U10',
                        'U9',
                        'U8'
                    ],
                    data: [
                        Number(stats.seven.U12.wins),
                        Number(stats.seven.U11.wins),
                        Number(stats.seven.U10.wins),
                        Number(stats.seven.U9.wins),
                        Number(stats.seven.U8.wins)
                    ]
                }
            },
            {
                y: Number(stats.seven.U12.draws) + Number(stats.seven.U11.draws) + Number(stats.seven.U10.draws) + Number(stats.seven.U9.draws) + Number(stats.seven.U8.draws),
                color: colors[2],
                drilldown: {
                    name: '和',
                    categories: [
                        'U12',
                        'U11',
                        'U10',
                        'U9',
                        'U8'
                    ],
                    data: [
                        Number(stats.seven.U12.draws),
                        Number(stats.seven.U11.draws),
                        Number(stats.seven.U10.draws),
                        Number(stats.seven.U9.draws),
                        Number(stats.seven.U8.draws)
                    ]
                }
            },
            {
                y: Number(stats.seven.U12.loses) + Number(stats.seven.U11.loses) + Number(stats.seven.U10.loses) + Number(stats.seven.U9.loses) + Number(stats.seven.U8.loses),
                color: colors[7],
                drilldown: {
                    name: '敗',
                    categories: [
                        'U12',
                        'U11',
                        'U10',
                        'U9',
                        'U8'
                    ],
                    data: [
                        Number(stats.seven.U12.loses),
                        Number(stats.seven.U11.loses),
                        Number(stats.seven.U10.loses),
                        Number(stats.seven.U9.loses),
                        Number(stats.seven.U8.loses)
                    ]
                }
            }
        ],
        threeManData = [{
                y: Number(stats.three.U12.wins),
                color: colors[1],
                drilldown: {
                    name: '勝',
                    categories: [
                        'U12'
                    ],
                    data: [
                        Number(stats.three.U12.wins)
                    ]
                }
            },
            {
                y: Number(stats.three.U12.draws),
                color: colors[2],
                drilldown: {
                    name: '和',
                    categories: [
                        'U12'
                    ],
                    data: [
                        Number(stats.three.U12.draws)
                    ]
                }
            },
            {
                y: Number(stats.three.U12.loses),
                color: colors[7],
                drilldown: {
                    name: '敗',
                    categories: [
                        'U12'
                    ],
                    data: [
                        Number(stats.three.U12.loses)
                    ]
                }
            }
        ],
        pitchWinLoseData = [],
        fiveWinLoseData = [],
        eightWinLoseData = [],
        sevenWinLoseData = [],
        threeWinLoseData = [],
        pitchWinLoseGradeData = [],
        fiveWinLoseGradeData = [],
        eightWinLoseGradeData = [],
        sevenWinLoseGradeData = [],
        threeWinLoseGradeData = [],
        i,
        j,
        pitchDataLen = pitchData.length,
        fiveManDataLen = fiveManData.length,
        eightManDataLen = eightManData.length,
        sevenManDataLen = sevenManData.length,
        threeManDataLen = threeManData.length,
        pitchDrillDataLen,
        fiveDrillDataLen,
        eightDrillDataLen,
        sevenDrillDataLen,
        threeDrillDataLen,
        brightness;


    // Build the data arrays
    for (i = 0; i < pitchDataLen; i += 1) {

        // add browser data
        pitchWinLoseData.push({
            name: categories[i],
            y: pitchData[i].y,
            color: pitchData[i].color
        });

        // add version data
        pitchDrillDataLen = pitchData[i].drilldown.data.length;
        for (j = 0; j < pitchDrillDataLen; j += 1) {
            brightness = 0.2 - (j / pitchDrillDataLen) / 5;
            pitchWinLoseGradeData.push({
                name: pitchData[i].drilldown.categories[j],
                y: pitchData[i].drilldown.data[j],
                color: Highcharts.color(pitchData[i].color).brighten(brightness).get()
            });
        }
    }

    for (i = 0; i < fiveManDataLen; i += 1) {

        // add browser data
        fiveWinLoseData.push({
            name: categories[i],
            y: fiveManData[i].y,
            color: fiveManData[i].color
        });

        // add version data
        fiveDrillDataLen = fiveManData[i].drilldown.data.length;
        for (j = 0; j < fiveDrillDataLen; j += 1) {
            brightness = 0.2 - (j / fiveDrillDataLen) / 5;
            fiveWinLoseGradeData.push({
                name: fiveManData[i].drilldown.categories[j],
                y: fiveManData[i].drilldown.data[j],
                color: Highcharts.color(fiveManData[i].color).brighten(brightness).get()
            });
        }
    }

    for (i = 0; i < eightManDataLen; i += 1) {

        // add browser data
        eightWinLoseData.push({
            name: categories[i],
            y: eightManData[i].y,
            color: eightManData[i].color
        });

        // add version data
        eightDrillDataLen = eightManData[i].drilldown.data.length;
        for (j = 0; j < eightDrillDataLen; j += 1) {
            brightness = 0.2 - (j / eightDrillDataLen) / 5;
            eightWinLoseGradeData.push({
                name: eightManData[i].drilldown.categories[j],
                y: eightManData[i].drilldown.data[j],
                color: Highcharts.color(eightManData[i].color).brighten(brightness).get()
            });
        }
    }

    for (i = 0; i < sevenManDataLen; i += 1) {

        // add browser data
        sevenWinLoseData.push({
            name: categories[i],
            y: sevenManData[i].y,
            color: sevenManData[i].color
        });

        // add version data
        sevenDrillDataLen = sevenManData[i].drilldown.data.length;
        for (j = 0; j < sevenDrillDataLen; j += 1) {
            brightness = 0.2 - (j / sevenDrillDataLen) / 5;
            sevenWinLoseGradeData.push({
                name: sevenManData[i].drilldown.categories[j],
                y: sevenManData[i].drilldown.data[j],
                color: Highcharts.color(sevenManData[i].color).brighten(brightness).get()
            });
        }
    }

    for (i = 0; i < threeManDataLen; i += 1) {

        // add browser data
        threeWinLoseData.push({
            name: categories[i],
            y: threeManData[i].y,
            color: threeManData[i].color
        });

        // add version data
        threeDrillDataLen = threeManData[i].drilldown.data.length;
        for (j = 0; j < threeDrillDataLen; j += 1) {
            brightness = 0.2 - (j / threeDrillDataLen) / 5;
            threeWinLoseGradeData.push({
                name: threeManData[i].drilldown.categories[j],
                y: threeManData[i].drilldown.data[j],
                color: Highcharts.color(threeManData[i].color).brighten(brightness).get()
            });
        }
    }

    function drawSummaryChart() {
        Highcharts.chart('throphies', {
            chart: {
                type: 'bar'
            },
            title: {
                text: '獎盃'
            },
            xAxis: {
                categories: ['冠軍', '亞軍', '季軍']
            },
            yAxis: {
                min: 0,
                title: {
                    text: '次'
                }
            },
            colors: [colors[1], colors[1], colors[1], colors[1], colors[5], colors[5], colors[5], colors[3], colors[3], colors[3], colors[2], colors[2], colors[2], colors[6], colors[6], colors[6]],
            plotOptions: {
                series: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            tooltip: {
                formatter: function() {
                    return this.series.name + '  ' + this.series.userOptions.stack;
                }
            },
            series: [{
                id: 1,
                name: 'U12',
                data: [Number(stats.five.U12.gold), Number(stats.five.U12.silver), Number(stats.five.U12.bronze)],
                stack: '五人制',
                dataLabels: {
                    formatter: function() {
                        return this.y > 0 ? this.y : null;
                    }
                }
            }, {
                linkedTo: ':previous',
                name: 'U12',
                data: [Number(stats.eight.U12.gold), Number(stats.eight.U12.silver), Number(stats.eight.U12.bronze)],
                stack: '八人制',
                dataLabels: {
                    formatter: function() {
                        return this.y > 0 ? this.y : null;
                    }
                }
            }, {
                linkedTo: ':previous',
                name: 'U12',
                data: [Number(stats.seven.U12.gold), Number(stats.seven.U12.silver), Number(stats.seven.U12.bronze)],
                stack: '七人制',
                dataLabels: {
                    formatter: function() {
                        return this.y > 0 ? this.y : null;
                    }
                }
            }, {
                linkedTo: ':previous',
                name: 'U12',
                data: [Number(stats.three.U12.gold), Number(stats.three.U12.silver), Number(stats.three.U12.bronze)],
                stack: '三人制',
                dataLabels: {
                    formatter: function() {
                        return this.y > 0 ? this.y : null;
                    }
                }
            }, {
                id: 2,
                name: 'U11',
                data: [Number(stats.five.U11.gold), Number(stats.five.U11.silver), Number(stats.five.U11.bronze)],
                stack: '五人制',
                dataLabels: {
                    formatter: function() {
                        return this.y > 0 ? this.y : null;
                    }
                }
            }, {
                linkedTo: ':previous',
                name: 'U11',
                data: [Number(stats.eight.U11.gold), Number(stats.eight.U11.silver), Number(stats.eight.U11.bronze)],
                stack: '八人制',
                dataLabels: {
                    formatter: function() {
                        return this.y > 0 ? this.y : null;
                    }
                }
            }, {
                linkedTo: ':previous',
                name: 'U11',
                data: [Number(stats.seven.U11.gold), Number(stats.seven.U11.silver), Number(stats.seven.U11.bronze)],
                stack: '七人制',
                dataLabels: {
                    formatter: function() {
                        return this.y > 0 ? this.y : null;
                    }
                }
            }, {
                id: 3,
                name: 'U10',
                data: [Number(stats.five.U10.gold), Number(stats.five.U10.silver), Number(stats.five.U10.bronze)],
                stack: '五人制',
                dataLabels: {
                    formatter: function() {
                        return this.y > 0 ? this.y : null;
                    }
                }
            }, {
                linkedTo: ':previous',
                name: 'U10',
                data: [Number(stats.eight.U10.gold), Number(stats.eight.U10.silver), Number(stats.eight.U10.bronze)],
                stack: '八人制',
                dataLabels: {
                    formatter: function() {
                        return this.y > 0 ? this.y : null;
                    }
                }
            }, {
                linkedTo: ':previous',
                name: 'U10',
                data: [Number(stats.seven.U10.gold), Number(stats.seven.U10.silver), Number(stats.seven.U10.bronze)],
                stack: '七人制',
                dataLabels: {
                    formatter: function() {
                        return this.y > 0 ? this.y : null;
                    }
                }
            }, {
                id: 4,
                name: 'U9',
                data: [Number(stats.five.U9.gold), Number(stats.five.U9.silver), Number(stats.five.U9.bronze)],
                stack: '五人制',
                dataLabels: {
                    formatter: function() {
                        return this.y > 0 ? this.y : null;
                    }
                }
            }, {
                linkedTo: ':previous',
                name: 'U9',
                data: [Number(stats.eight.U9.gold), Number(stats.eight.U9.silver), Number(stats.eight.U9.bronze)],
                stack: '八人制',
                dataLabels: {
                    formatter: function() {
                        return this.y > 0 ? this.y : null;
                    }
                }
            }, {
                linkedTo: ':previous',
                name: 'U9',
                data: [Number(stats.seven.U9.gold), Number(stats.seven.U9.silver), Number(stats.seven.U9.bronze)],
                stack: '七人制',
                dataLabels: {
                    formatter: function() {
                        return this.y > 0 ? this.y : null;
                    }
                }
            }, {
                id: 5,
                name: 'U8',
                data: [Number(stats.five.U8.gold), Number(stats.five.U8.silver), Number(stats.five.U8.bronze)],
                stack: '五人制',
                dataLabels: {
                    formatter: function() {
                        return this.y > 0 ? this.y : null;
                    }
                }
            }, {
                linkedTo: ':previous',
                name: 'U8',
                data: [Number(stats.eight.U8.gold), Number(stats.eight.U8.silver), Number(stats.eight.U8.bronze)],
                stack: '八人制',
                dataLabels: {
                    formatter: function() {
                        return this.y > 0 ? this.y : null;
                    }
                }
            }, {
                linkedTo: ':previous',
                name: 'U8',
                data: [Number(stats.seven.U8.gold), Number(stats.seven.U8.silver), Number(stats.seven.U8.bronze)],
                stack: '七人制',
                dataLabels: {
                    formatter: function() {
                        return this.y > 0 ? this.y : null;
                    }
                }
            }]
        });

        Highcharts.chart('matches', {
            title: {
                text: '賽事統計',
                align: 'center'
            },
            subtitle: {
                text: '',
                align: 'center'
            },
            yAxis: {
                title: {
                    text: '場次'
                }
            },
            xAxis: {
                categories: ['U8', 'U9', 'U10', 'U11', 'U12']
            },
            colors: [colors[5], colors[2], colors[1], colors[6], colors[3]],
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: true
                    },
                    enableMouseTracking: false
                }
            },
            series: [{
                name: '五人制',
                data: [Number(stats.five.U8.matches), Number(stats.five.U9.matches), Number(stats.five.U10.matches), Number(stats.five.U11.matches), Number(stats.five.U12.matches)]
            }, {
                name: '八人制',
                data: [Number(stats.eight.U8.matches), Number(stats.eight.U9.matches), Number(stats.eight.U10.matches), Number(stats.eight.U11.matches), Number(stats.eight.U12.matches)]
            }, {
                name: '七人制',
                data: [Number(stats.seven.U8.matches), Number(stats.seven.U9.matches), Number(stats.seven.U10.matches), Number(stats.seven.U11.matches), Number(stats.seven.U12.matches)]
            }, {
                name: '三人制',
                data: [0, 0, 0, 0, Number(stats.three.U12.matches)]
            }]
        });

    }

    function drawWinLoseChart() {
        Highcharts.chart('winlosepitch', {
            chart: {
                type: 'pie'
            },
            title: {
                text: '總覽',
                align: 'center'
            },
            subtitle: {
                text: `${Number(stats.hard.wins)+Number(stats.grass.wins)} 勝 - ${Number(stats.hard.draws)+Number(stats.grass.draws)} 和 - ${Number(stats.hard.loses)+Number(stats.grass.loses)} 敗`,
                align: 'center',
                style: {
                    color: '#4287f5',
                    fontSize: '1rem'
                }
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        allowOverlap: true,
                        enabled: true
                    },
                    shadow: false,
                    center: ['50%', '50%']
                }
            },
            tooltip: {
                valueSuffix: '場'
            },
            series: [{
                name: '合計',
                data: pitchWinLoseData,
                size: '60%',
                dataLabels: {
                    formatter: function() {
                        return this.y > 0 ? this.point.name : null;
                    },
                    color: '#ffffff',
                    distance: -50
                }
            }, {
                name: '',
                data: pitchWinLoseGradeData,
                showInLegend: false,
                size: '80%',
                innerSize: '60%',
                dataLabels: {
                    formatter: function() {
                        // display only if larger than 0
                        return this.y > 0 ? '<b>' + this.point.name + ':</b> ' +
                            this.y + '場' : null;
                    }
                }
            }]
        });

        Highcharts.chart('winlosefive', {
            chart: {
                type: 'pie'
            },
            title: {
                text: '五人制',
                align: 'center'
            },
            subtitle: {
                text: `${Number(stats.five.U12.wins)+Number(stats.five.U11.wins)+Number(stats.five.U10.wins)+Number(stats.five.U9.wins)+Number(stats.five.U8.wins)} 勝 - ${Number(stats.five.U12.draws)+Number(stats.five.U11.draws)+Number(stats.five.U10.draws)+Number(stats.five.U9.draws)+Number(stats.five.U8.draws)} 和 - ${Number(stats.five.U12.loses)+Number(stats.five.U11.loses)+Number(stats.five.U10.loses)+Number(stats.five.U9.loses)+Number(stats.five.U8.loses)} 敗`,
                align: 'center',
                style: {
                    color: '#4287f5',
                    fontSize: '1rem'
                }
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        allowOverlap: true,
                        enabled: true
                    },
                    shadow: false,
                    center: ['50%', '50%']
                }
            },
            tooltip: {
                valueSuffix: '場'
            },
            series: [{
                name: '五人制',
                data: fiveWinLoseData,
                size: '60%',
                dataLabels: {
                    formatter: function() {
                        return this.y > 0 ? this.point.name : null;
                    },
                    color: '#ffffff',
                    distance: -50
                }
            }, {
                name: '',
                data: fiveWinLoseGradeData,
                size: '80%',
                innerSize: '60%',
                dataLabels: {
                    formatter: function() {
                        // display only if larger than 0
                        return this.y > 0 ? '<b>' + this.point.name + ':</b> ' +
                            this.y + '場' : null;
                    }
                }
            }]
        });

        Highcharts.chart('winloseeight', {
            chart: {
                type: 'pie'
            },
            title: {
                text: '八人制',
                align: 'center'
            },
            subtitle: {
                text: `${Number(stats.eight.U12.wins)+Number(stats.eight.U11.wins)+Number(stats.eight.U10.wins)+Number(stats.eight.U9.wins)+Number(stats.eight.U8.wins)} 勝 - ${Number(stats.eight.U12.draws)+Number(stats.eight.U11.draws)+Number(stats.eight.U10.draws)+Number(stats.eight.U9.draws)+Number(stats.eight.U8.draws)} 和 - ${Number(stats.eight.U12.loses)+Number(stats.eight.U11.loses)+Number(stats.eight.U10.loses)+Number(stats.eight.U9.loses)+Number(stats.eight.U8.loses)} 敗`,
                align: 'center',
                style: {
                    color: '#4287f5',
                    fontSize: '1rem'
                }
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        allowOverlap: true,
                        padding: 0,
                        overflow: 'allow',
                        enabled: true
                    },
                    shadow: false,
                    center: ['50%', '50%']
                }
            },
            tooltip: {
                valueSuffix: '場'
            },
            series: [{
                name: '八人制',
                data: eightWinLoseData,
                size: '60%',
                dataLabels: {
                    formatter: function() {
                        return this.y > 0 ? this.point.name : null;
                    },
                    color: '#ffffff',
                    distance: -50
                }
            }, {
                name: '',
                data: eightWinLoseGradeData,
                size: '80%',
                innerSize: '60%',
                dataLabels: {
                    formatter: function() {
                        // display only if larger than 0
                        return this.y > 0 ? '<b>' + this.point.name + ':</b> ' +
                            this.y + '場' : null;
                    }
                }
            }]
        });

        Highcharts.chart('winloseseven', {
            chart: {
                type: 'pie'
            },
            title: {
                text: '七人制',
                align: 'center'
            },
            subtitle: {
                text: `${Number(stats.seven.U12.wins)+Number(stats.seven.U11.wins)+Number(stats.seven.U10.wins)+Number(stats.seven.U9.wins)+Number(stats.seven.U8.wins)} 勝 - ${Number(stats.seven.U12.draws)+Number(stats.seven.U11.draws)+Number(stats.seven.U10.draws)+Number(stats.seven.U9.draws)+Number(stats.seven.U8.draws)} 和 - ${Number(stats.seven.U12.loses)+Number(stats.seven.U11.loses)+Number(stats.seven.U10.loses)+Number(stats.seven.U9.loses)+Number(stats.seven.U8.loses)} 敗`,
                align: 'center',
                style: {
                    color: '#4287f5',
                    fontSize: '1rem'
                }
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        allowOverlap: true,
                        padding: 0,
                        overflow: 'allow',
                        enabled: true
                    },
                    shadow: false,
                    center: ['50%', '50%']
                }
            },
            tooltip: {
                valueSuffix: '場'
            },
            series: [{
                name: '七人制',
                data: sevenWinLoseData,
                size: '60%',
                dataLabels: {
                    formatter: function() {
                        return this.y > 0 ? this.point.name : null;
                    },
                    color: '#ffffff',
                    distance: -50
                }
            }, {
                name: '',
                data: sevenWinLoseGradeData,
                size: '80%',
                innerSize: '60%',
                dataLabels: {
                    formatter: function() {
                        // display only if larger than 0
                        return this.y > 0 ? '<b>' + this.point.name + ':</b> ' +
                            this.y + '場' : null;
                    }
                }
            }]
        });
    }

    const U12Goals = Number(stats.five.U12.scores) + Number(stats.eight.U12.scores) + Number(stats.seven.U12.scores) + Number(stats.three.U12.scores)
    const U11Goals = Number(stats.five.U11.scores) + Number(stats.eight.U11.scores) + Number(stats.seven.U11.scores)
    const U10Goals = Number(stats.five.U10.scores) + Number(stats.eight.U10.scores) + Number(stats.seven.U10.scores)
    const U9Goals = Number(stats.five.U9.scores) + Number(stats.eight.U9.scores) + Number(stats.seven.U9.scores)
    const U8Goals = Number(stats.five.U8.scores) + Number(stats.eight.U8.scores) + Number(stats.seven.U8.scores)

    const U12Concs = Number(stats.five.U12.conc) + Number(stats.eight.U12.conc) + Number(stats.seven.U12.conc) + Number(stats.three.U12.conc)
    const U11Concs = Number(stats.five.U11.conc) + Number(stats.eight.U11.conc) + Number(stats.seven.U11.conc)
    const U10Concs = Number(stats.five.U10.conc) + Number(stats.eight.U10.conc) + Number(stats.seven.U10.conc)
    const U9Concs = Number(stats.five.U9.conc) + Number(stats.eight.U9.conc) + Number(stats.seven.U9.conc)
    const U8Concs = Number(stats.five.U8.conc) + Number(stats.eight.U8.conc) + Number(stats.seven.U8.conc)

    const U12CSs = Number(stats.five.U12.cs) + Number(stats.eight.U12.cs) + Number(stats.seven.U12.cs) + Number(stats.three.U12.cs)
    const U11CSs = Number(stats.five.U11.cs) + Number(stats.eight.U11.cs) + Number(stats.seven.U11.cs)
    const U10CSs = Number(stats.five.U10.cs) + Number(stats.eight.U10.cs) + Number(stats.seven.U10.cs)
    const U9CSs = Number(stats.five.U9.cs) + Number(stats.eight.U9.cs) + Number(stats.seven.U9.cs)
    const U8CSs = Number(stats.five.U8.cs) + Number(stats.eight.U8.cs) + Number(stats.seven.U8.cs)

    function drawStatChart() {
        Highcharts.chart('totalGoals', {
            chart: {
                type: 'column'
            },
            title: {
                text: '比賽內容'
            },
            subtitle: {
                text: `總覽`,
                align: 'center',
                style: {
                    color: '#4287f5'
                }
            },
            xAxis: {
                categories: ['']
            },
            plotOptions: {
                column: {
                    dataLabels: {
                        allowOverlap: true,
                        enabled: true
                    },
                    borderRadius: '5%'
                }
            },
            colors: [colors[1], colors[5], colors[3], colors[2]],
            series: [{
                name: '進球',
                data: [
                    U12Goals + U11Goals + U10Goals + U9Goals + U8Goals
                ]
            }, {
                name: '失球',
                data: [
                    -(U12Concs + U11Concs + U10Concs + U9Concs + U8Concs)
                ]
            }, {
                name: '得失球差',
                data: [
                    U12Goals + U11Goals + U10Goals + U9Goals + U8Goals - (U12Concs + U11Concs + U10Concs + U9Concs + U8Concs)
                ]
            }, {
                name: '零封',
                data: [
                    U12CSs + U11CSs + U10CSs + U9CSs + U8CSs
                ]
            }]
        });


        Highcharts.chart('goalsByGrade', {
            chart: {
                type: 'column'
            },
            title: {
                text: '比賽內容'
            },
            subtitle: {
                text: `by 層級`,
                align: 'center',
                style: {
                    color: '#4287f5'
                }
            },
            xAxis: {
                categories: ['進球', '失球', '得失球差', '零封']
            },
            plotOptions: {
                column: {
                    dataLabels: {
                        allowOverlap: true,
                        enabled: true
                    },
                    borderRadius: '25%'
                }
            },
            colors: [colors[1], colors[5], colors[3], colors[2], colors[6]],
            series: [{
                name: 'U12',
                data: [
                    U12Goals,
                    -U12Concs,
                    U12Goals - U12Concs,
                    U12CSs
                ]
            }, {
                name: 'U11',
                data: [
                    U11Goals,
                    -U11Concs,
                    U11Goals - U11Concs,
                    U11CSs
                ]
            }, {
                name: 'U10',
                data: [
                    U10Goals,
                    -U10Concs,
                    U10Goals - U10Concs,
                    U10CSs
                ]
            }, {
                name: 'U9',
                data: [
                    U9Goals,
                    -U9Concs,
                    U9Goals - U9Concs,
                    U9CSs
                ]
            }, {
                name: 'U8',
                data: [
                    U8Goals,
                    -U8Concs,
                    U8Goals - U8Concs,
                    U8CSs
                ]
            }]
        });

        Highcharts.chart('goalsByType', {
            chart: {
                type: 'column'
            },
            title: {
                text: '比賽內容'
            },
            subtitle: {
                text: `by 比賽類型`,
                align: 'center',
                style: {
                    color: '#4287f5'
                }
            },
            xAxis: {
                categories: ['進球', '失球', '得失球差', '零封']
            },
            plotOptions: {
                column: {
                    dataLabels: {
                        allowOverlap: true,
                        enabled: true
                    },
                    borderRadius: '25%'
                }
            },
            colors: [colors[5], colors[2], colors[1], colors[7]],
            series: [{
                name: '五人制',
                data: [
                    Number(stats.five.U12.scores) + Number(stats.five.U11.scores) + Number(stats.five.U10.scores) + Number(stats.five.U9.scores) + Number(stats.five.U8.scores),
                    -(Number(stats.five.U12.conc) + Number(stats.five.U11.conc) + Number(stats.five.U10.conc) + Number(stats.five.U9.conc) + Number(stats.five.U8.conc)),
                    Number(stats.five.U12.scores) + Number(stats.five.U11.scores) + Number(stats.five.U10.scores) + Number(stats.five.U9.scores) + Number(stats.five.U8.scores) - Number(stats.five.U12.conc) - Number(stats.five.U11.conc) - Number(stats.five.U10.conc) - Number(stats.five.U9.conc) - Number(stats.five.U8.conc),
                    Number(stats.five.U12.cs) + Number(stats.five.U11.cs) + Number(stats.five.U10.cs) + Number(stats.five.U9.cs) + Number(stats.five.U8.cs)
                ]
            }, {
                name: '八人制',
                data: [
                    Number(stats.eight.U12.scores) + Number(stats.eight.U11.scores) + Number(stats.eight.U10.scores) + Number(stats.eight.U9.scores) + Number(stats.eight.U8.scores),
                    -(Number(stats.eight.U12.conc) + Number(stats.eight.U11.conc) + Number(stats.eight.U10.conc) + Number(stats.eight.U9.conc) + Number(stats.eight.U8.conc)),
                    Number(stats.eight.U12.scores) + Number(stats.eight.U11.scores) + Number(stats.eight.U10.scores) + Number(stats.eight.U9.scores) + Number(stats.eight.U8.scores) - Number(stats.eight.U12.conc) - Number(stats.eight.U11.conc) - Number(stats.eight.U10.conc) - Number(stats.eight.U9.conc) - Number(stats.eight.U8.conc),
                    Number(stats.eight.U12.cs) + Number(stats.eight.U11.cs) + Number(stats.eight.U10.cs) + Number(stats.eight.U9.cs) + Number(stats.eight.U8.cs)
                ]
            }, {
                name: '七人制',
                data: [
                    Number(stats.seven.U12.scores) + Number(stats.seven.U11.scores) + Number(stats.seven.U10.scores) + Number(stats.seven.U9.scores) + Number(stats.seven.U8.scores),
                    -(Number(stats.seven.U12.conc) + Number(stats.seven.U11.conc) + Number(stats.seven.U10.conc) + Number(stats.seven.U9.conc) + Number(stats.seven.U8.conc)),
                    Number(stats.seven.U12.scores) + Number(stats.seven.U11.scores) + Number(stats.seven.U10.scores) + Number(stats.seven.U9.scores) + Number(stats.seven.U8.scores) - Number(stats.seven.U12.scores) - Number(stats.seven.U11.conc) - Number(stats.seven.U10.conc) - Number(stats.seven.U9.conc) - Number(stats.seven.U8.conc),
                    Number(stats.seven.U12.cs) + Number(stats.seven.U11.cs) + Number(stats.seven.U10.cs) + Number(stats.seven.U9.cs) + Number(stats.seven.U8.cs)
                ]
            }, {
                name: '三人制',
                data: [
                    Number(stats.three.U12.scores),
                    -Number(stats.three.U12.conc),
                    Number(stats.three.U12.scores) - Number(stats.three.U12.conc),
                    Number(stats.three.U12.cs)
                ]
            }]
        });
    }

    drawSummaryChart()
    drawStatChart()

    $('a[data-toggle="pill"]').on('shown.bs.tab', function(evt) {
        var anchor = $(evt.target).attr('href');
        if (anchor === '#v-pills-summary') {
            drawSummaryChart()
        }
        if (anchor === '#v-pills-winlose') {
            drawWinLoseChart()
        }
        if (anchor === '#v-pills-stats') {
            drawStatChart()
        }
    });
})