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
                y: Number(stats.five.U11.wins) + Number(stats.five.U10.wins) + Number(stats.five.U9.wins) + Number(stats.five.U8.wins),
                color: colors[1],
                drilldown: {
                    name: '勝',
                    categories: [
                        'U11',
                        'U10',
                        'U9',
                        'U8'
                    ],
                    data: [
                        Number(stats.five.U11.wins),
                        Number(stats.five.U10.wins),
                        Number(stats.five.U9.wins),
                        Number(stats.five.U8.wins)
                    ]
                }
            },
            {
                y: Number(stats.five.U11.draws) + Number(stats.five.U10.draws) + Number(stats.five.U9.draws) + Number(stats.five.U8.draws),
                color: colors[2],
                drilldown: {
                    name: '和',
                    categories: [
                        'U11',
                        'U10',
                        'U9',
                        'U8'
                    ],
                    data: [                        
                        Number(stats.five.U11.draws),
                        Number(stats.five.U10.draws),
                        Number(stats.five.U9.draws),
                        Number(stats.five.U8.draws)
                    ]
                }
            },
            {
                y: Number(stats.five.U11.loses) + Number(stats.five.U10.loses) + Number(stats.five.U9.loses) + Number(stats.five.U8.loses),
                color: colors[7],
                drilldown: {
                    name: '敗',
                    categories: [
                        'U11',
                        'U10',
                        'U9',
                        'U8'
                    ],
                    data: [
                        Number(stats.five.U11.loses),
                        Number(stats.five.U10.loses),
                        Number(stats.five.U9.loses),
                        Number(stats.five.U8.loses)
                    ]
                }
            }
        ],
        eightManData = [{
                y: Number(stats.eight.U10.wins) + Number(stats.eight.U9.wins) + Number(stats.eight.U8.wins),
                color: colors[1],
                drilldown: {
                    name: '勝',
                    categories: [
                        'U10',
                        'U9',
                        'U8'
                    ],
                    data: [
                        Number(stats.eight.U10.wins),
                        Number(stats.eight.U9.wins),
                        Number(stats.eight.U8.wins)
                    ]
                }
            },
            {
                y: Number(stats.eight.U10.draws) + Number(stats.eight.U9.draws) + Number(stats.eight.U8.draws),
                color: colors[2],
                drilldown: {
                    name: '和',
                    categories: [
                        'U10',
                        'U9',
                        'U8'
                    ],
                    data: [
                        Number(stats.eight.U10.draws),
                        Number(stats.eight.U9.draws),
                        Number(stats.eight.U8.draws)
                    ]
                }
            },
            {
                y: Number(stats.eight.U10.loses) + Number(stats.eight.U9.loses) + Number(stats.eight.U8.loses),
                color: colors[7],
                drilldown: {
                    name: '敗',
                    categories: [
                        'U10',
                        'U9',
                        'U8'
                    ],
                    data: [
                        Number(stats.eight.U10.loses),
                        Number(stats.eight.U9.loses),
                        Number(stats.eight.U8.loses)
                    ]
                }
            }
        ],
        sevenManData = [{
                y: Number(stats.seven.U10.wins) + Number(stats.seven.U9.wins) + Number(stats.seven.U8.wins),
                color: colors[1],
                drilldown: {
                    name: '勝',
                    categories: [
                        'U10',
                        'U9',
                        'U8'
                    ],
                    data: [
                        Number(stats.seven.U10.wins),
                        Number(stats.seven.U9.wins),
                        Number(stats.seven.U8.wins)
                    ]
                }
            },
            {
                y: Number(stats.seven.U10.draws) + Number(stats.seven.U9.draws) + Number(stats.seven.U8.draws),
                color: colors[2],
                drilldown: {
                    name: '和',
                    categories: [
                        'U10',
                        'U9',
                        'U8'
                    ],
                    data: [
                        Number(stats.seven.U10.draws),
                        Number(stats.seven.U9.draws),
                        Number(stats.seven.U8.draws)
                    ]
                }
            },
            {
                y: Number(stats.seven.U10.loses) + Number(stats.seven.U9.loses) + Number(stats.seven.U8.loses),
                color: colors[7],
                drilldown: {
                    name: '敗',
                    categories: [
                        'U10',
                        'U9',
                        'U8'
                    ],
                    data: [
                        Number(stats.seven.U10.loses),
                        Number(stats.seven.U9.loses),
                        Number(stats.seven.U8.loses)
                    ]
                }
            }
        ],
        pitchWinLoseData = [],
        fiveWinLoseData = [],
        eightWinLoseData = [],
        sevenWinLoseData = [],
        pitchWinLoseGradeData = [],
        fiveWinLoseGradeData = [],
        eightWinLoseGradeData = [],
        sevenWinLoseGradeData = [],
        i,
        j,
        pitchDataLen = pitchData.length,
        fiveManDataLen = fiveManData.length,
        eightManDataLen = eightManData.length,
        sevenManDataLen = sevenManData.length,
        pitchDrillDataLen,
        fiveDrillDataLen,
        eightDrillDataLen,
        sevenDrillDataLen,
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

    // Create the chart
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
            text: `${Number(stats.five.U11.wins)+Number(stats.five.U10.wins)+Number(stats.five.U9.wins)+Number(stats.five.U8.wins)} 勝 - ${Number(stats.five.U11.draws)+Number(stats.five.U10.draws)+Number(stats.five.U9.draws)+Number(stats.five.U8.draws)} 和 - ${Number(stats.five.U11.loses)+Number(stats.five.U10.loses)+Number(stats.five.U9.loses)+Number(stats.five.U8.loses)} 敗`,
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
            text: `${Number(stats.eight.U11.wins)+Number(stats.eight.U10.wins)+Number(stats.eight.U9.wins)+Number(stats.eight.U8.wins)} 勝 - ${Number(stats.eight.U11.draws)+Number(stats.eight.U10.draws)+Number(stats.eight.U9.draws)+Number(stats.eight.U8.draws)} 和 - ${Number(stats.eight.U11.loses)+Number(stats.eight.U10.loses)+Number(stats.eight.U9.loses)+Number(stats.eight.U8.loses)} 敗`,
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
            text: `${Number(stats.seven.U11.wins)+Number(stats.seven.U10.wins)+Number(stats.seven.U9.wins)+Number(stats.seven.U8.wins)} 勝 - ${Number(stats.seven.U11.draws)+Number(stats.seven.U10.draws)+Number(stats.seven.U9.draws)+Number(stats.seven.U8.draws)} 和 - ${Number(stats.seven.U11.loses)+Number(stats.seven.U10.loses)+Number(stats.seven.U9.loses)+Number(stats.seven.U8.loses)} 敗`,
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
        colors: [colors[5], colors[3], colors[2], colors[6]],
        series: [{
            name: 'U11',
            data: [
                Number(stats.five.U11.scores) + Number(stats.eight.U11.scores) + Number(stats.seven.U11.scores),
                -(Number(stats.five.U11.conc) + Number(stats.eight.U11.conc) + Number(stats.seven.U11.conc)),
                Number(stats.five.U11.scores) + Number(stats.eight.U11.scores) + Number(stats.seven.U11.scores) - Number(stats.five.U11.conc) - Number(stats.eight.U11.conc) - Number(stats.seven.U11.conc),
                Number(stats.five.U11.cs) + Number(stats.eight.U11.cs) + Number(stats.seven.U11.cs)
            ]
        }, {
            name: 'U10',
            data: [
                Number(stats.five.U10.scores) + Number(stats.eight.U10.scores) + Number(stats.seven.U10.scores),
                -(Number(stats.five.U10.conc) + Number(stats.eight.U10.conc) + Number(stats.seven.U10.conc)),
                Number(stats.five.U10.scores) + Number(stats.eight.U10.scores) + Number(stats.seven.U10.scores) - Number(stats.five.U10.conc) - Number(stats.eight.U10.conc) - Number(stats.seven.U10.conc),
                Number(stats.five.U10.cs) + Number(stats.eight.U10.cs) + Number(stats.seven.U10.cs)
            ]
        }, {
            name: 'U9',
            data: [
                Number(stats.five.U9.scores) + Number(stats.eight.U9.scores) + Number(stats.seven.U9.scores),
                -(Number(stats.five.U9.conc) + Number(stats.eight.U9.conc) + Number(stats.seven.U9.conc)),
                Number(stats.five.U9.scores) + Number(stats.eight.U9.scores) + Number(stats.seven.U9.scores) - Number(stats.five.U9.conc) - Number(stats.eight.U9.conc) - Number(stats.seven.U9.conc),
                Number(stats.five.U9.cs) + Number(stats.eight.U9.cs) + Number(stats.seven.U9.cs)
            ]
        }, {
            name: 'U8',
            data: [
                Number(stats.five.U8.scores) + Number(stats.eight.U8.scores) + Number(stats.seven.U8.scores),
                -(Number(stats.five.U8.conc) + Number(stats.eight.U8.conc) + Number(stats.seven.U8.conc)),
                Number(stats.five.U8.scores) + Number(stats.eight.U8.scores) + Number(stats.seven.U8.scores) - Number(stats.five.U8.conc) - Number(stats.eight.U8.conc) - Number(stats.seven.U8.conc),
                Number(stats.five.U8.cs) + Number(stats.eight.U8.cs) + Number(stats.seven.U8.cs)
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
        colors: [colors[5], colors[2], colors[1]],
        series: [{
            name: '五人制',
            data: [
                Number(stats.five.U11.scores) + Number(stats.five.U10.scores) + Number(stats.five.U9.scores) + Number(stats.five.U8.scores),
                -(Number(stats.five.U10.conc) + Number(stats.five.U9.conc) + Number(stats.five.U8.conc)),
                Number(stats.five.U11.scores) + Number(stats.five.U10.scores) + Number(stats.five.U9.scores) + Number(stats.five.U8.scores) - Number(stats.five.U11.conc) - Number(stats.five.U10.conc) - Number(stats.five.U9.conc) - Number(stats.five.U8.conc),
                Number(stats.five.U11.cs) + Number(stats.five.U10.cs) + Number(stats.five.U9.cs) + Number(stats.five.U8.cs)
            ]
        }, {
            name: '八人制',
            data: [
                Number(stats.eight.U11.scores) + Number(stats.eight.U10.scores) + Number(stats.eight.U9.scores) + Number(stats.eight.U8.scores),
                -(Number(stats.eight.U11.conc) + Number(stats.eight.U10.conc) + Number(stats.eight.U9.conc) + Number(stats.eight.U8.conc)),
                Number(stats.eight.U11.scores) + Number(stats.eight.U10.scores) + Number(stats.eight.U9.scores) + Number(stats.eight.U8.scores) - Number(stats.eight.U10.conc) - Number(stats.eight.U9.conc) - Number(stats.eight.U8.conc),
                Number(stats.eight.U11.cs) + Number(stats.eight.U10.cs) + Number(stats.eight.U9.cs) + Number(stats.eight.U8.cs)
            ]
        }, {
            name: '七人制',
            data: [
                Number(stats.seven.U11.scores) + Number(stats.seven.U10.scores) + Number(stats.seven.U9.scores) + Number(stats.seven.U8.scores),
                -(Number(stats.seven.U11.conc) + Number(stats.seven.U10.conc) + Number(stats.seven.U9.conc) + Number(stats.seven.U8.conc)),
                Number(stats.seven.U11.scores) + Number(stats.seven.U10.scores) + Number(stats.seven.U9.scores) + Number(stats.seven.U8.scores) - Number(stats.seven.U10.conc) - Number(stats.seven.U9.conc) - Number(stats.seven.U8.conc),
                Number(stats.seven.U11.cs) + Number(stats.seven.U10.cs) + Number(stats.seven.U9.cs) + Number(stats.seven.U8.cs)
            ]
        }]
    });

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
        colors: [colors[5], colors[5], colors[5], colors[3], colors[3], colors[3], colors[2], colors[2], colors[2], colors[6], colors[6], colors[6]],
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
            id: 2,
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
            id: 3,
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
            id: 4,
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
            categories: ['U8', 'U9', 'U10', 'U11']
        },
        colors: [colors[5], colors[2], colors[1], colors[6]],
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
            data: [Number(stats.five.U8.matches), Number(stats.five.U9.matches), Number(stats.five.U10.matches), Number(stats.five.U11.matches)]
        }, {
            name: '八人制',
            data: [Number(stats.eight.U8.matches), Number(stats.eight.U9.matches), Number(stats.eight.U10.matches), Number(stats.eight.U11.matches)]
        }, {
            name: '七人制',
            data: [Number(stats.seven.U8.matches), Number(stats.seven.U9.matches), Number(stats.seven.U10.matches), Number(stats.seven.U11.matches)]
        }]
    });
})