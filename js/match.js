new Vue({
    el: '#zhiqinfootball',
    data: {
        cups: [{
            id: 1,
            year: '2020',
            cupName: '秋季大安盃',
            system: '5人制',
            cover: '2020daancup',
            trophy: '季軍',
            team: [{
                name: '種子',
                members: '定宸、黃衍、紘豪、皓宇、維恩、亮谷、明澤、定謙、宥融、宇正'
            }],
            note: '',
            matches: [{
                date: '20200920',
                pitch: '華中五人制足球場',
                opponent: 'HePing踢豹',
                formation: 'Square（2-0-2）',
                starters: ['GK-宥融', 'RB-維恩', 'LB-紘豪', 'RF-黃衍', 'LF-亮谷'],
                subs: [{
                    number: 2,
                    name: '定宸'
                }, {
                    number: 3,
                    name: '宇正'
                }, {
                    number: 12,
                    name: '皓宇'
                }, {
                    number: 22,
                    name: '明澤'
                }, {
                    number: 27,
                    name: '定謙'
                }],
                subTeam: '種子',
                final_score: '2 : 0',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '亮谷',
                    assist: ''
                }, {
                    name: '宇正',
                    assist: ''
                }],
                goalkeepers: ['宥融'],
                isCleanSheet: true,
                instructors: ['柏豪'],
                note: ''
            }, {
                date: '20201025',
                pitch: '華中五人制足球場',
                opponent: '炫風新尖兵',
                formation: 'Square（2-0-2）',
                starters: ['GK-宥融', 'RB-維恩', 'LB-皓宇', 'RF-黃衍', 'LF-亮谷'],
                subs: [{
                    number: 1,
                    name: '宇正'
                }, {
                    number: 2,
                    name: '定宸'
                }, {
                    number: 9,
                    name: '紘豪'
                }, {
                    number: 22,
                    name: '明澤'
                }, {
                    number: 27,
                    name: '定謙'
                }],
                subTeam: '種子',
                final_score: '4 : 1',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '皓宇',
                    assist: ''
                }, {
                    name: '宇正',
                    assist: '維恩'
                }, {
                    name: '亮谷',
                    assist: ''
                }, {
                    name: '紘豪',
                    assist: ''
                }],
                goalkeepers: ['宥融'],
                isCleanSheet: false,
                instructors: ['怡萍'],
                note: ''
            }, {
                date: '20201025',
                pitch: '華中五人制足球場',
                opponent: '熱血足球U8',
                formation: 'Square（2-0-2）',
                starters: ['GK-宥融', 'RB-維恩', 'LB-黃衍', 'RF-宇正', 'LF-亮谷'],
                subs: [{
                    number: 2,
                    name: '定宸'
                }, {
                    number: 9,
                    name: '紘豪'
                }, {
                    number: 12,
                    name: '皓宇'
                }, {
                    number: 22,
                    name: '明澤'
                }, {
                    number: 27,
                    name: '定謙'
                }],
                subTeam: '種子',
                final_score: '1 : 6',
                pso: '',
                wdl: 'L',
                scorers: [{
                    name: '維恩',
                    assist: ''
                }],
                goalkeepers: ['宥融'],
                instructors: ['怡萍'],
                note: ''
            }, {
                date: '20201108',
                pitch: '華中五人制足球場',
                opponent: '磐石U8',
                formation: 'Square（2-0-2）',
                starters: ['GK-宥融', 'RB-黃衍', 'LB-維恩', 'RF-宇正', 'LF-亮谷'],
                subs: [{
                    number: 2,
                    name: '定宸'
                }, {
                    number: 9,
                    name: '紘豪'
                }, {
                    number: 12,
                    name: '皓宇'
                }, {
                    number: 22,
                    name: '明澤'
                }, {
                    number: 27,
                    name: '定謙'
                }],
                subTeam: '種子',
                final_score: '1 : 1',
                pso: '4 : 1',
                wdl: 'W',
                scorers: [{
                    name: '亮谷',
                    assist: '維恩'
                }],
                goalkeepers: ['宥融'],
                isCleanSheet: false,
                instructors: ['芳儀'],
                note: ''
            }, {
                date: '20201206',
                pitch: '華中五人制足球場',
                opponent: '銘傳之星',
                formation: 'Square（2-0-2）',
                starters: ['GK-定謙', 'RB-黃衍', 'LB-維恩', 'RF-宥融', 'LF-亮谷'],
                subs: [{
                    number: 2,
                    name: '定宸'
                }, {
                    number: 3,
                    name: '晉丞'
                }, {
                    number: 9,
                    name: '紘豪'
                }, {
                    number: 12,
                    name: '皓宇'
                }, {
                    number: 22,
                    name: '明澤'
                }, {
                    number: 97,
                    name: '宇正'
                }],
                subTeam: '種子',
                final_score: '1 : 1',
                pso: '1 : 3',
                wdl: 'L',
                scorers: [{
                    name: '亮谷',
                    assist: '宥融'
                }],
                goalkeepers: ['定謙', '宥融'],
                isCleanSheet: false,
                instructors: ['怡萍'],
                note: ''
            }, {
                date: '20201206',
                pitch: '華中五人制足球場',
                opponent: '公館小雷霆',
                formation: 'Square（2-0-2）',
                starters: ['GK-宥融', 'RB-定宸', 'LB-明澤', 'RF-皓宇', 'LF-宇正'],
                subs: [{
                    number: 3,
                    name: '晉丞'
                }, {
                    number: 7,
                    name: '黃衍'
                }, {
                    number: 9,
                    name: '紘豪'
                }, {
                    number: 18,
                    name: '維恩'
                }, {
                    number: 21,
                    name: '亮谷'
                }, {
                    number: 27,
                    name: '定謙'
                }],
                subTeam: '種子',
                final_score: '3 : 0',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '亮谷',
                    assist: '皓宇'
                }, {
                    name: '定謙',
                    assist: '黃衍'
                }, {
                    name: '宇正',
                    assist: '定宸'
                }],
                goalkeepers: ['宥融'],
                isCleanSheet: true,
                instructors: ['怡萍'],
                note: ''
            }]
        }, {
            id: 2,
            year: '2020',
            cupName: '新北聯合盃',
            system: '8人制',
            cover: '2020unitedcup',
            trophy: '亞軍',
            team: [{
                name: '種子',
                members: '定宸、晉丞、黃衍、紘豪、善捷、皓宇、凱泰、維恩、亮谷、明澤、定謙、品叡、宥融、昕叡、宇正'
            }],
            note: '',
            matches: [{
                date: '20201121',
                pitch: '新莊體育場',
                opponent: '航源FC-U7',
                formation: '3-3-1',
                starters: ['GK-定謙', 'RB-善捷', 'CB-維恩', 'LB-紘豪', 'RM-宇正', 'CM-亮谷', 'LM-宥融', 'CF-皓宇'],
                subs: [{
                    number: 3,
                    name: '晉丞'
                }, {
                    number: 22,
                    name: '明澤'
                }, {
                    number: 77,
                    name: '昕叡'
                }],
                subTeam: '種子',
                final_score: '2 : 0',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '維恩',
                    assist: '宇正'
                }, {
                    name: '晉丞',
                    assist: ''
                }],
                goalkeepers: ['定謙'],
                isCleanSheet: true,
                instructors: ['怡萍'],
                note: ''
            }, {
                date: '20201122',
                pitch: '新莊體育場',
                opponent: '虎鯊HSFC',
                formation: '3-3-1',
                starters: ['GK-定謙', 'RB-善捷', 'CB-維恩', 'LB-紘豪', 'RM-宥融', 'CM-亮谷', 'LM-黃衍', 'CF-宇正'],
                subs: [{
                    number: 3,
                    name: '晉丞'
                }, {
                    number: 12,
                    name: '皓宇'
                }, {
                    number: 15,
                    name: '凱泰'
                }, {
                    number: 77,
                    name: '昕叡'
                }],
                subTeam: '種子',
                final_score: '3 : 0',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '亮谷',
                    assist: '維恩'
                }, {
                    name: '宥融',
                    assist: '亮谷'
                }, {
                    name: '亮谷',
                    assist: ''
                }],
                goalkeepers: ['定謙'],
                isCleanSheet: true,
                instructors: ['怡萍'],
                note: ''
            }, {
                date: '20201219',
                pitch: '錦和運動公園',
                opponent: '新北銀河',
                formation: '3-3-1',
                starters: ['GK-定謙', 'RB-善捷', 'CB-維恩', 'LB-紘豪', 'RM-宥融', 'CM-亮谷', 'LM-黃衍', 'CF-晉丞'],
                subs: [{
                    number: 2,
                    name: '定宸'
                }, {
                    number: 12,
                    name: '皓宇'
                }, {
                    number: 15,
                    name: '凱泰'
                }, {
                    number: 30,
                    name: '品叡'
                }, {
                    number: 33,
                    name: '翊愷'
                }, {
                    number: 77,
                    name: '昕叡'
                }, {
                    number: 97,
                    name: '宇正'
                }],
                subTeam: '種子',
                final_score: '1 : 2',
                pso: '',
                wdl: 'L',
                scorers: [{
                    name: '維恩',
                    assist: '亮谷'
                }],
                goalkeepers: ['定謙'],
                isCleanSheet: false,
                instructors: ['怡萍'],
                note: ''
            }, {
                date: '20201226',
                pitch: '錦和運動公園',
                opponent: '日新Yoyo',
                formation: '3-3-1',
                starters: ['GK-宥融', 'RB-善捷', 'CB-定宸', 'LB-皓宇', 'RM-晉丞', 'CM-維恩', 'LM-凱泰', 'CF-宇正'],
                subs: [{
                    number: 7,
                    name: '黃衍'
                }, {
                    number: 9,
                    name: '紘豪'
                }, {
                    number: 21,
                    name: '亮谷'
                }, {
                    number: 22,
                    name: '明澤'
                }, {
                    number: 27,
                    name: '定謙'
                }, {
                    number: 30,
                    name: '品叡'
                }, {
                    number: 77,
                    name: '昕叡'
                }],
                subTeam: '種子',
                final_score: '7 : 0',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '亮谷',
                    assist: '品叡'
                }, {
                    name: '維恩',
                    assist: ''
                }, {
                    name: '亮谷',
                    assist: '明澤'
                }, {
                    name: '定謙',
                    assist: '定宸'
                }, {
                    name: '晉丞',
                    assist: ''
                }, {
                    name: '定謙',
                    assist: ''
                }, {
                    name: '宇正',
                    assist: '紘豪'
                }],
                goalkeepers: ['宥融', '凱泰'],
                isCleanSheet: true,
                instructors: ['怡萍'],
                note: ''
            }]
        }, {
            id: 3,
            year: '2021',
            cupName: '扶輪社暨航源足球賽',
            system: '5人制',
            cover: '2021hunyuancup',
            trophy: '季軍',
            team: [{
                name: '種子',
                members: '晉丞、黃衍、紘豪、善捷、皓宇、凱泰、維恩、亮谷、定謙、宥融、宇正'
            }],
            note: '',
            matches: [{
                date: '20210124',
                pitch: '輔仁大學足球場',
                opponent: '熱血足球U8',
                formation: 'Square（2-0-2）',
                starters: ['GK-宥融', 'RB-善捷', 'LB-維恩', 'RF-黃衍', 'LF-亮谷'],
                subs: [{
                    number: 9,
                    name: '紘豪'
                }, {
                    number: 12,
                    name: '皓宇'
                }, {
                    number: 27,
                    name: '定謙'
                }, {
                    number: 97,
                    name: '宇正'
                }],
                subTeam: '種子',
                final_score: '2 : 1',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '宇正',
                    assist: '亮谷'
                }, {
                    name: '黃衍',
                    assist: ''
                }],
                goalkeepers: ['宥融'],
                isCleanSheet: false,
                instructors: ['芳儀'],
                note: ''
            }, {
                date: '20210124',
                pitch: '輔仁大學足球場',
                opponent: '北新國小',
                formation: 'Square（2-0-2）',
                starters: ['GK-宥融', 'RB-善捷', 'LB-維恩', 'RF-黃衍', 'LF-亮谷'],
                subs: [{
                    number: 3,
                    name: '晉丞'
                }, {
                    number: 12,
                    name: '皓宇'
                }, {
                    number: 15,
                    name: '凱泰'
                }, {
                    number: 97,
                    name: '宇正'
                }],
                subTeam: '種子',
                final_score: '2 : 0',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '維恩',
                    assist: 'P'
                }, {
                    name: '黃衍',
                    assist: '善捷'
                }],
                goalkeepers: ['宥融', '凱泰'],
                isCleanSheet: true,
                instructors: ['芳儀'],
                note: ''
            }, {
                date: '20210124',
                pitch: '輔仁大學足球場',
                opponent: '夢幻聚星',
                formation: 'Square（2-0-2）',
                starters: ['GK-宥融', 'RB-善捷', 'LB-維恩', 'RF-黃衍', 'LF-亮谷'],
                subs: [{
                    number: 3,
                    name: '晉丞'
                }, {
                    number: 9,
                    name: '紘豪'
                }, {
                    number: 12,
                    name: '皓宇'
                }, {
                    number: 15,
                    name: '凱泰'
                }, {
                    number: 27,
                    name: '定謙'
                }, {
                    number: 97,
                    name: '宇正'
                }],
                subTeam: '種子',
                final_score: '1 : 5',
                pso: '',
                wdl: 'L',
                scorers: [{
                    name: '宥融',
                    assist: '亮谷'
                }],
                goalkeepers: ['宥融', '凱泰'],
                isCleanSheet: false,
                instructors: ['芳儀'],
                note: ''
            }, {
                date: '20210124',
                pitch: '輔仁大學足球場',
                opponent: 'TFA尤文圖斯',
                formation: 'Square（2-0-2）',
                starters: ['GK-定謙', 'RB-黃衍', 'LB-維恩', 'RF-宥融', 'LF-亮谷'],
                subs: [{
                    number: 3,
                    name: '晉丞'
                }, {
                    number: 9,
                    name: '紘豪'
                }, {
                    number: 10,
                    name: '善捷'
                }, {
                    number: 12,
                    name: '皓宇'
                }, {
                    number: 15,
                    name: '凱泰'
                }, {
                    number: 97,
                    name: '宇正'
                }],
                subTeam: '種子',
                final_score: '0 : 9',
                pso: '',
                wdl: 'L',
                scorers: [],
                goalkeepers: ['定謙', '凱泰'],
                isCleanSheet: false,
                instructors: ['芳儀'],
                note: ''
            }, {
                date: '20210124',
                pitch: '輔仁大學足球場',
                opponent: '暴風足球',
                formation: 'Square（2-0-2）',
                starters: ['GK-宥融', 'RB-善捷', 'LB-維恩', 'RF-黃衍', 'LF-亮谷'],
                subs: [{
                    number: 3,
                    name: '晉丞'
                }, {
                    number: 12,
                    name: '皓宇'
                }, {
                    number: 97,
                    name: '宇正'
                }],
                subTeam: '種子',
                final_score: '1 : 0',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '亮谷',
                    assist: '宇正'
                }],
                goalkeepers: ['宥融'],
                isCleanSheet: true,
                instructors: ['芳儀'],
                note: ''
            }]
        }, {
            id: 4,
            year: '2021',
            cupName: '金牛賀歲盃',
            system: '8人制',
            cover: '2021oxcup',
            trophy: '冠軍',
            team: [{
                name: '種子',
                members: '晉丞、黃衍、翊凱、紘豪、善捷、定緯、皓宇、凱泰、維恩、亮谷、明澤、柏燁、定謙、宥融、昕叡、宇正'
            }],
            note: '',
            matches: [{
                date: '20210130',
                pitch: '新莊體育場',
                opponent: '森巴小獵豹',
                formation: '3-3-1',
                starters: ['GK-凱泰', 'RB-紘豪', 'CB-維恩', 'LB-明澤', 'RM-宥融', 'CM-亮谷', 'LM-黃衍', 'CF-宇正'],
                subs: [{
                    number: 3,
                    name: '晉丞'
                }, {
                    number: 9,
                    name: '紘豪'
                }, {
                    number: 12,
                    name: '皓宇'
                }, {
                    number: 27,
                    name: '定謙'
                }, {
                    number: 77,
                    name: '昕叡'
                }],
                subTeam: '種子',
                final_score: '1 : 0',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '宥融',
                    assist: '紘豪'
                }],
                goalkeepers: ['凱泰'],
                isCleanSheet: true,
                instructors: ['柏豪'],
                note: ''
            }, {
                date: '20210124',
                pitch: '新莊體育場',
                opponent: '新北銀河',
                formation: '3-3-1',
                starters: ['GK-凱泰', 'RB-紘豪', 'CB-維恩', 'LB-明澤', 'RM-宥融', 'CM-亮谷', 'LM-黃衍', 'CF-宇正'],
                subs: [{
                    number: 3,
                    name: '晉丞'
                }, {
                    number: 9,
                    name: '紘豪'
                }, {
                    number: 12,
                    name: '皓宇'
                }, {
                    number: 27,
                    name: '定謙'
                }, {
                    number: 77,
                    name: '昕叡'
                }],
                subTeam: '種子',
                final_score: '2 : 1',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '宇正',
                    assist: ''
                }, {
                    name: '宇正',
                    assist: '皓宇'
                }],
                goalkeepers: ['凱泰'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: ''
            }, {
                date: '20210206',
                pitch: '錦和運動公園',
                opponent: '虎鯊HSFC',
                formation: '3-3-1',
                starters: ['GK-凱泰', 'RB-善捷', 'CB-維恩', 'LB-昕叡', 'RM-宥融', 'CM-亮谷', 'LM-黃衍', 'CF-宇正'],
                subs: [{
                    number: 3,
                    name: '晉丞'
                }, {
                    number: 9,
                    name: '紘豪'
                }, {
                    number: 12,
                    name: '皓宇'
                }, {
                    number: 22,
                    name: '明澤'
                }, {
                    number: 27,
                    name: '定謙'
                }],
                subTeam: '種子',
                final_score: '1 : 0',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: 'Own Goal',
                    assist: '黃衍'
                }],
                goalkeepers: ['凱泰'],
                isCleanSheet: true,
                instructors: ['柏豪'],
                note: ''
            }]
        }, {
            id: 5,
            year: '2021',
            cupName: '萬歲盃',
            system: '5人制',
            cover: '2021vivacup',
            trophy: '',
            team: [{
                name: '種子-藍',
                members: '黃衍、定緯、皓宇、維恩、柏燁、宥融、昕叡'
            }, {
                name: '種子-紅',
                members: '定宸、晉丞、翊凱、善捷、紘豪、亮谷、定謙、宇正'
            }, {
                name: '種子-閃電',
                members: '凱泰、明澤、學弟們'
            }],
            note: '',
            matches: [{
                date: '20210327',
                pitch: '',
                opponent: '大安足球U8綠',
                formation: 'Square（2-0-2）',
                starters: [''],
                subs: [''],
                subTeam: '種子-藍',
                final_score: '0 : 2*',
                pso: '',
                wdl: 'L',
                scorers: [],
                goalkeepers: [],
                isCleanSheet: false,
                instructors: [],
                note: '* 因主辦單位賽程安排失當且對手拒絕調整比賽時間，迫使【志清種子-藍】無奈棄賽並依大會規定裁定為 0:2 輸球'
            }, {
                date: '20210327',
                pitch: '',
                opponent: '博克多武士岸',
                formation: 'Square（2-0-2）',
                starters: [''],
                subs: [''],
                subTeam: '種子-藍',
                final_score: '0 : 2*',
                pso: '',
                wdl: 'L',
                scorers: [],
                goalkeepers: [],
                isCleanSheet: false,
                instructors: [],
                note: '* 因主辦單位賽程安排失當且對手拒絕調整比賽時間，迫使【志清種子-藍】無奈棄賽並依大會規定裁定為 0:2 輸球'
            }, {
                date: '20210328',
                pitch: '北市大天母校區田徑場',
                opponent: '吉利港宜大',
                formation: 'Square（2-0-2）',
                starters: ['GK-定謙', 'RB-亮谷', 'LB-善捷', 'RF-晉丞', 'LF-宇正'],
                subs: [{
                    number: 2,
                    name: '定宸'
                }, {
                    number: 8,
                    name: '翊愷'
                }, {
                    number: 9,
                    name: '紘豪'
                }],
                subTeam: '種子-紅',
                final_score: '3 : 1',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '宇正',
                    assist: '晉丞'
                }, {
                    name: '宇正',
                    assist: ''
                }, {
                    name: '宇正',
                    assist: '紘豪'
                }],
                goalkeepers: ['定謙', '宇正'],
                isCleanSheet: false,
                instructors: ['怡萍'],
                note: ''
            }, {
                date: '20210328',
                pitch: '北市大天母校區田徑場',
                opponent: '大暴風足球',
                formation: 'Square（2-0-2）',
                starters: ['GK-定謙', 'RB-亮谷', 'LB-善捷', 'RF-晉丞', 'LF-宇正'],
                subs: [{
                    number: 2,
                    name: '定宸'
                }, {
                    number: 8,
                    name: '翊愷'
                }, {
                    number: 9,
                    name: '紘豪'
                }],
                subTeam: '種子-紅',
                final_score: '0 : 6',
                pso: '',
                wdl: 'L',
                scorers: [],
                goalkeepers: ['定謙'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: ''
            }, {
                date: '20210328',
                pitch: '北市大天母校區田徑場',
                opponent: '足球心想事成',
                formation: 'Square（2-0-2）',
                starters: ['GK-凱泰', 'RB-', 'LB-', 'RF-明澤', 'LF-'],
                subs: [''],
                subTeam: '種子-閃電',
                final_score: '0 : 1',
                pso: '',
                wdl: 'L',
                scorers: [],
                goalkeepers: ['凱泰'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: ''
            }, {
                date: '20210328',
                pitch: '北市大天母校區田徑場',
                opponent: '淡水小獵豹',
                formation: 'Square（2-0-2）',
                starters: ['GK-凱泰', 'RB-', 'LB-', 'RF-明澤', 'LF-'],
                subs: [''],
                subTeam: '種子-閃電',
                final_score: '1 : 4',
                pso: '',
                wdl: 'L',
                scorers: [{
                    name: '凱泰',
                    assist: ''
                }],
                goalkeepers: ['凱泰', '東允*'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: '* 學弟'
            }]
        }, {
            id: 6,
            year: '2021',
            cupName: '春季大安盃',
            system: '5人制',
            cover: '2021daanspringcup',
            trophy: '冠軍',
            team: [{
                name: '種子-藍',
                members: '定宸、晉丞、翊凱、凱泰、明澤、柏燁、定謙、昕叡'
            }, {
                name: '種子-紅',
                members: '黃衍、紘豪、善捷、皓宇、維恩、亮谷、宥融、宇正'
            }],
            note: '',
            matches: [{
                date: '20210410',
                pitch: '華中五人制足球場',
                opponent: '國北實小',
                formation: 'Square（2-0-2）',
                starters: ['GK-凱泰', 'RB-昕叡', 'LB-定宸', 'RF-晉丞', 'LF-定謙'],
                subs: [{
                    number: 8,
                    name: '翊愷'
                }, {
                    number: 22,
                    name: '明澤'
                }, {
                    number: 23,
                    name: '柏燁'
                }],
                subTeam: '種子-藍',
                final_score: '1 : 3',
                pso: '',
                wdl: 'L',
                scorers: [{
                    name: '定謙',
                    assist: ''
                }],
                goalkeepers: ['凱泰'],
                isCleanSheet: false,
                instructors: ['怡萍'],
                note: ''
            }, {
                date: '20210410',
                pitch: '華中五人制足球場',
                opponent: '熱血足球U8',
                formation: 'Square（2-0-2）',
                starters: ['GK-宥融', 'RB-維恩', 'LB-善捷', 'RF-黃衍', 'LF-亮谷'],
                subs: [{
                    number: 9,
                    name: '紘豪'
                }, {
                    number: 12,
                    name: '皓宇'
                }, {
                    number: 97,
                    name: '宇正'
                }],
                subTeam: '種子-紅',
                final_score: '8 : 0',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '維恩',
                    assist: ''
                }, {
                    name: '宇正',
                    assist: '維恩'
                }, {
                    name: '亮谷',
                    assist: ''
                }, {
                    name: '宇正',
                    assist: '黃衍'
                }, {
                    name: '宇正',
                    assist: ''
                }, {
                    name: '宇正',
                    assist: '黃衍'
                }, {
                    name: '宥融',
                    assist: '皓宇'
                }, {
                    name: '宥融',
                    assist: '黃衍'
                }],
                goalkeepers: ['宥融', '善捷'],
                isCleanSheet: true,
                instructors: ['柏豪', '怡萍'],
                note: ''
            }, {
                date: '20210424',
                pitch: '華中五人制足球場',
                opponent: '炫風小尖兵',
                formation: 'Square（2-0-2）',
                starters: ['GK-凱泰', 'RB-昕叡', 'LB-定宸', 'RF-晉丞', 'LF-定謙'],
                subs: [{
                    number: 8,
                    name: '翊愷'
                }, {
                    number: 22,
                    name: '明澤'
                }, {
                    number: 23,
                    name: '柏燁'
                }],
                subTeam: '種子-藍',
                final_score: '1 : 7',
                pso: '',
                wdl: 'L',
                scorers: [{
                    name: '定謙',
                    assist: ''
                }],
                goalkeepers: ['凱泰', '定謙'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: ''
            }, {
                date: '20210508',
                pitch: '華中五人制足球場',
                opponent: '公館紅雷霆',
                formation: 'Diamond（1-2-1）',
                starters: ['GK-善捷', 'CB-維恩', 'LM-黃衍', 'RM-宥融', 'CF-亮谷'],
                subs: [{
                    number: 9,
                    name: '紘豪'
                }, {
                    number: 12,
                    name: '皓宇'
                }, {
                    number: 97,
                    name: '宇正'
                }],
                subTeam: '種子-紅',
                final_score: '17 : 0',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '亮谷',
                    assist: ''
                }, {
                    name: '維恩',
                    assist: ''
                }, {
                    name: '亮谷',
                    assist: ''
                }, {
                    name: '宥融',
                    assist: '維恩'
                }, {
                    name: '宇正',
                    assist: '皓宇'
                }, {
                    name: '皓宇',
                    assist: '宇正'
                }, {
                    name: '宇正',
                    assist: ''
                }, {
                    name: '皓宇',
                    assist: '宇正'
                }, {
                    name: '宇正',
                    assist: '皓宇'
                }, {
                    name: '宇正',
                    assist: '皓宇'
                }, {
                    name: '黃衍',
                    assist: '亮谷'
                }, {
                    name: '黃衍',
                    assist: ''
                }, {
                    name: '皓宇',
                    assist: '亮谷'
                }, {
                    name: '皓宇',
                    assist: '亮谷'
                }, {
                    name: '皓宇',
                    assist: ''
                }, {
                    name: 'Own Goal',
                    assist: '亮谷'
                }, {
                    name: '宇正',
                    assist: ''
                }],
                goalkeepers: ['善捷', '維恩'],
                isCleanSheet: true,
                instructors: ['柏豪'],
                note: ''
            }, {
                date: '20210508',
                pitch: '華中五人制足球場',
                opponent: '磐石U8',
                formation: 'Diamond（1-2-1）',
                starters: ['GK-善捷', 'CB-維恩', 'LM-黃衍', 'RM-宥融', 'CF-亮谷'],
                subs: [{
                    number: 9,
                    name: '紘豪'
                }, {
                    number: 12,
                    name: '皓宇'
                }, {
                    number: 97,
                    name: '宇正'
                }],
                subTeam: '種子-紅',
                final_score: '6 : 0',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '亮谷',
                    assist: '宥融'
                }, {
                    name: '黃衍',
                    assist: '宥融'
                }, {
                    name: '黃衍',
                    assist: '宥融'
                }, {
                    name: '皓宇',
                    assist: '宇正'
                }, {
                    name: '維恩',
                    assist: ''
                }, {
                    name: '宇正',
                    assist: ''
                }],
                goalkeepers: ['善捷', '宥融'],
                isCleanSheet: true,
                instructors: ['柏豪'],
                note: ''
            }, {
                date: '20211002',
                pitch: '華中五人制足球場',
                opponent: '國北實小',
                formation: 'Square（2-0-2）',
                starters: ['GK-宥融', 'RB-維恩', 'LB-宇正', 'RF-皓宇', 'LF-亮谷'],
                subs: [{
                    number: 7,
                    name: '黃衍'
                }, {
                    number: 9,
                    name: '紘豪'
                }, {
                    number: 10,
                    name: '善捷'
                }],
                subTeam: '種子-紅',
                final_score: '6 : 0',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '亮谷',
                    assist: '皓宇'
                }, {
                    name: '宇正',
                    assist: '紘豪'
                }, {
                    name: '維恩',
                    assist: ''
                }, {
                    name: '亮谷',
                    assist: ''
                }, {
                    name: 'Own Goal',
                    assist: '宇正'
                }, {
                    name: '宥融',
                    assist: '宇正'
                }],
                goalkeepers: ['宥融', '善捷', '維恩'],
                isCleanSheet: true,
                instructors: ['柏豪'],
                note: ''
            }, {
                date: '20211113',
                pitch: '華中五人制足球場',
                opponent: '熱血踢豹',
                formation: 'Diamond（1-2-1）',
                starters: ['GK-宥融', 'CB-維恩', 'RM-亮谷', 'LM-宇正', 'CF-黃衍'],
                subs: [{
                    number: 9,
                    name: '紘豪'
                }, {
                    number: 10,
                    name: '善捷'
                }, {
                    number: 12,
                    name: '皓宇'
                }],
                subTeam: '種子-紅',
                final_score: '7 : 3',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '亮谷',
                    assist: '黃衍'
                }, {
                    name: '宇正',
                    assist: '亮谷'
                }, {
                    name: '皓宇',
                    assist: '宇正'
                }, {
                    name: '維恩',
                    assist: ''
                }, {
                    name: '維恩',
                    assist: ''
                }, {
                    name: '皓宇',
                    assist: '亮谷'
                }, {
                    name: '皓宇',
                    assist: '亮谷'
                }],
                goalkeepers: ['宥融', '善捷'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: ''
            }, {
                date: '20211113',
                pitch: '華中五人制足球場',
                opponent: '公館藍雷霆',
                formation: 'Diamond（1-2-1）',
                starters: ['GK-宥融', 'CB-維恩', 'RM-宇正', 'LM-亮谷', 'CF-黃衍'],
                subs: [{
                    number: 9,
                    name: '紘豪'
                }, {
                    number: 10,
                    name: '善捷'
                }, {
                    number: 12,
                    name: '皓宇'
                }],
                subTeam: '種子-紅',
                final_score: '3 : 0',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '宇正',
                    assist: ''
                }, {
                    name: '亮谷',
                    assist: '皓宇'
                }, {
                    name: '宇正',
                    assist: '維恩'
                }],
                goalkeepers: ['宥融', '善捷', '維恩'],
                isCleanSheet: true,
                instructors: ['柏豪'],
                note: ''
            }]
        }, {
            id: 7,
            year: '2021',
            cupName: '安聯小小世界盃',
            system: '5人制',
            cover: '2021allianzcup',
            trophy: '',
            team: [{
                name: '種子-B',
                members: '翊愷、善捷、皓宇、明澤、柏燁、定謙、宥融、宇正、禹豪*'
            }],
            note: '',
            matches: [{
                date: '20210502',
                pitch: '北市大天母校區田徑場',
                opponent: 'Dreamers-FC',
                formation: 'Square（2-0-2）',
                starters: ['GK-宥融', 'RB-宇正', 'LB-善捷', 'RF-定謙', 'LF-皓宇'],
                subs: [{
                    number: 23,
                    name: '柏燁'
                }],
                subTeam: '種子-B',
                final_score: '4 : 3',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '皓宇',
                    assist: ''
                }, {
                    name: '皓宇',
                    assist: '定謙'
                }, {
                    name: '皓宇',
                    assist: '宥融'
                }, {
                    name: '皓宇',
                    assist: ''
                }],
                goalkeepers: ['宥融'],
                isCleanSheet: false,
                instructors: ['怡萍'],
                note: '* 學弟'
            }, {
                date: '20210502',
                pitch: '北市大天母校區田徑場',
                opponent: '鬥牛犬U8',
                formation: 'Square（2-0-2）',
                starters: ['GK-宥融', 'RB-宇正', 'LB-善捷', 'RF-定謙', 'LF-皓宇'],
                subs: [{
                    number: 1,
                    name: '禹豪*'
                }, {
                    number: 8,
                    name: '翊愷'
                }, {
                    number: 22,
                    name: '明澤'
                }, {
                    number: 23,
                    name: '柏燁'
                }],
                subTeam: '種子-B',
                final_score: '4 : 1',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '皓宇',
                    assist: '定謙'
                }, {
                    name: '定謙',
                    assist: '皓宇'
                }, {
                    name: 'Own Goal',
                    assist: '宇正'
                }, {
                    name: '定謙',
                    assist: ''
                }],
                goalkeepers: ['宥融'],
                isCleanSheet: false,
                instructors: ['怡萍'],
                note: '* 學弟'
            }, {
                date: '20210502',
                pitch: '北市大天母校區田徑場',
                opponent: 'SLFC-U8',
                formation: 'Square（2-0-2）',
                starters: ['GK-宥融', 'RB-宇正', 'LB-善捷', 'RF-定謙', 'LF-皓宇'],
                subs: [{
                    number: 1,
                    name: '禹豪*'
                }, {
                    number: 8,
                    name: '翊愷'
                }, {
                    number: 22,
                    name: '明澤'
                }, {
                    number: 23,
                    name: '柏燁'
                }],
                subTeam: '種子-B',
                final_score: '1 : 6',
                pso: '',
                wdl: 'L',
                scorers: [{
                    name: '柏燁',
                    assist: '明澤'
                }],
                goalkeepers: ['宥融'],
                isCleanSheet: false,
                instructors: ['怡萍', '阿祥'],
                note: '* 學弟'
            }]
        }, {
            id: 8,
            year: '2021',
            cupName: '學童盃',
            system: '8人制',
            cover: '2021studentcup',
            trophy: '',
            team: [{
                name: '勇士',
                members: '晉丞、黃衍、紘豪、善捷、皓宇、凱泰、維恩、亮谷、柏燁、定謙、宥融、昕叡、宇正、子珩*、宇晨*、稟巖*'
            }],
            note: '',
            matches: [{
                date: '20210904',
                pitch: '新莊體育場',
                opponent: '航源FC-U9',
                formation: '3-3-1',
                starters: ['GK-子珩*', 'RB-宇正', 'CB-維恩', 'LB-昕叡', 'RM-宥融', 'CM-亮谷', 'LM-黃衍', 'CF-稟巖*'],
                subs: [{
                    number: 12,
                    name: '皓宇'
                }, {
                    number: 17,
                    name: '宇晨*'
                }, {
                    number: 27,
                    name: '定謙'
                }],
                subTeam: '勇士',
                final_score: '1 : 3',
                pso: '',
                wdl: 'L',
                scorers: [{
                    name: '維恩',
                    assist: ''
                }],
                goalkeepers: ['子珩'],
                isCleanSheet: false,
                instructors: ['柏豪', '怡萍'],
                note: '* 學長／姐'
            }, {
                date: '20210905',
                pitch: '新莊體育場',
                opponent: '台北Playone',
                formation: '3-3-1',
                starters: ['GK-子珩*', 'RB-宇正', 'CB-維恩', 'LB-黃衍', 'RM-昕叡', 'CM-皓宇', 'LM-定謙', 'CF-稟巖*'],
                subs: [{
                    number: 3,
                    name: '晉丞'
                }, {
                    number: 9,
                    name: '紘豪'
                }, {
                    number: 10,
                    name: '善捷'
                }, {
                    number: 15,
                    name: '凱泰'
                }, {
                    number: 17,
                    name: '宇晨*'
                }, {
                    number: 21,
                    name: '亮谷'
                }, {
                    number: 23,
                    name: '柏燁'
                }, {
                    number: 55,
                    name: '宥融'
                }],
                subTeam: '勇士',
                final_score: '0 : 6',
                pso: '',
                wdl: 'L',
                scorers: [],
                goalkeepers: ['子珩', '凱泰'],
                isCleanSheet: false,
                instructors: ['柏豪', '怡萍'],
                note: '* 學長／姐'
            }]
        }, {
            id: 9,
            year: '2021',
            cupName: '中正主委盃',
            system: '8人制',
            cover: '2021chairmancup',
            trophy: '亞軍',
            team: [{
                name: '勇士',
                members: '晉丞、黃衍、善捷、皓宇、凱泰、維恩、亮谷、柏燁、定謙、宥融、昕叡、宇正、子珩*、宇晨*、振綸*、稟巖*'
            }],
            note: '',
            matches: [{
                date: '20211030',
                pitch: '台北田徑場',
                opponent: '台北Playone',
                formation: '3-3-1',
                starters: ['GK-凱泰', 'RB-宇正', 'CB-維恩', 'LB-子珩*', 'RM-亮谷', 'CM-振綸*', 'LM-黃衍', 'CF-稟巖*'],
                subs: [{
                    number: 3,
                    name: '晉丞'
                }, {
                    number: 12,
                    name: '皓宇'
                }, {
                    number: 15,
                    name: '凱泰'
                }, {
                    number: 17,
                    name: '宇晨*'
                }, {
                    number: 23,
                    name: '柏燁'
                }, {
                    number: 27,
                    name: '定謙'
                }, {
                    number: 77,
                    name: '昕叡'
                }],
                subTeam: '勇士',
                final_score: '0 : 4',
                pso: '',
                wdl: 'L',
                scorers: [{}],
                goalkeepers: ['凱泰', '定謙'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: '* 學長／姐'
            }, {
                date: '20211031',
                pitch: '台北田徑場',
                opponent: '銘傳之星',
                formation: '3-3-1',
                starters: ['GK-凱泰', 'RB-稟巖', 'CB-維恩', 'LB-子珩*', 'RM-黃衍', 'CM-振綸*', 'LM-亮谷', 'CF-宇正'],
                subs: [{
                    number: 3,
                    name: '晉丞'
                }, {
                    number: 10,
                    name: '善捷'
                }, {
                    number: 12,
                    name: '皓宇'
                }, {
                    number: 27,
                    name: '定謙'
                }, {
                    number: 77,
                    name: '昕叡'
                }],
                subTeam: '勇士',
                final_score: '2 : 0',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '定謙',
                    assist: '亮谷'
                }, {
                    name: '宇正',
                    assist: '皓宇'
                }],
                goalkeepers: ['凱泰'],
                isCleanSheet: true,
                instructors: ['柏豪'],
                note: '* 學長／姐'
            }, {
                date: '20211031',
                pitch: '台北田徑場',
                opponent: '光復國小',
                formation: '3-3-1',
                starters: ['GK-昕叡', 'RB-柏燁', 'CB-振綸*', 'LB-善捷', 'RM-宇晨*', 'CM-維恩', 'LM-皓宇', 'CF-凱泰'],
                subs: [{
                    number: 3,
                    name: '晉丞'
                }, {
                    number: 6,
                    name: '子珩*'
                }, {
                    number: 7,
                    name: '黃衍'
                }, {
                    number: 26,
                    name: '定謙'
                }, {
                    number: 33,
                    name: '稟巖'
                }, {
                    number: 97,
                    name: '宇正'
                }],
                subTeam: '勇士',
                final_score: '6 : 1',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '維恩',
                    assist: ''
                }, {
                    name: '維恩',
                    assist: '皓宇'
                }, {
                    name: '振綸*',
                    assist: ''
                }, {
                    name: '宇正',
                    assist: ''
                }, {
                    name: '稟巖*',
                    assist: ''
                }, {
                    name: '晉丞',
                    assist: '宇晨*'
                }],
                goalkeepers: ['昕叡', '黃衍'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: '* 學長／姐'
            }]
        }, {
            id: 10,
            year: '2021',
            cupName: '新北聯合盃',
            system: '8人制',
            cover: '2021unitedcup',
            trophy: '',
            team: [{
                name: '勇士',
                members: '晉丞、黃衍、皓宇、凱泰、維恩、亮谷、柏燁、定謙、宥融、昕叡、宇正、子珩*、宇晨*、振綸*、駿毅*'
            }],
            note: '',
            matches: [{
                date: '20211120',
                pitch: '新莊體育場',
                opponent: 'Unity',
                formation: '3-3-1',
                starters: ['GK-子珩*', 'RB-宇正', 'CB-維恩', 'LB-昕叡', 'RM-黃衍', 'CM-皓宇', 'LM-亮谷', 'CF-宥融'],
                subs: [{
                    number: 3,
                    name: '晉丞'
                }, {
                    number: 15,
                    name: '凱泰'
                }, {
                    number: 16,
                    name: '駿毅*'
                }, {
                    number: 17,
                    name: '宇晨*'
                }, {
                    number: 23,
                    name: '柏燁'
                }, {
                    number: 27,
                    name: '定謙'
                }],
                subTeam: '勇士',
                final_score: '0 : 12',
                pso: '',
                wdl: 'L',
                scorers: [{}],
                goalkeepers: ['子珩*', '凱泰'],
                isCleanSheet: false,
                instructors: ['怡萍'],
                note: '* 學長／姐'
            }, {
                date: '20211218',
                pitch: '新莊體育場',
                opponent: '海山國小',
                formation: '3-3-1',
                starters: ['GK-子珩*', 'RB-宇正', 'CB-維恩', 'LB-善捷', 'RM-宥融', 'CM-振綸*', 'LM-亮谷', 'CF-皓宇'],
                subs: [{
                    number: 3,
                    name: '晉丞'
                }, {
                    number: 7,
                    name: '黃衍'
                }, {
                    number: 27,
                    name: '定謙'
                }],
                subTeam: '勇士',
                final_score: '1 : 3',
                pso: '',
                wdl: 'L',
                scorers: [{
                    name: '黃衍',
                    assist: '振綸*'
                }],
                goalkeepers: ['子珩*'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: '* 學長／姐'
            }, {
                date: '20211225',
                pitch: '錦和運動公園',
                opponent: '磐石U10',
                formation: '3-3-1',
                starters: ['GK-凱泰', 'RB-宥融', 'CB-振綸*', 'LB-子珩*', 'RM-宇正', 'CM-亮谷', 'LM-黃衍', 'CF-定謙'],
                subs: [{
                    number: 3,
                    name: '晉丞'
                }, {
                    number: 10,
                    name: '善捷'
                }, {
                    number: 17,
                    name: '宇晨*'
                }, {
                    number: 18,
                    name: '維恩'
                }, {
                    number: 33,
                    name: '駿毅*'
                }, {
                    number: 77,
                    name: '昕叡'
                }],
                subTeam: '勇士',
                final_score: '0 : 3',
                pso: '',
                wdl: 'L',
                scorers: [{}],
                goalkeepers: ['凱泰', '子珩*'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: '* 學長／姐'
            }, {
                date: '20211226',
                pitch: '錦和運動公園',
                opponent: 'Lion',
                formation: '3-3-1',
                starters: ['GK-凱泰', 'RB-宇正', 'CB-振綸*', 'LB-子珩*', 'RM-亮谷', 'CM-維恩', 'LM-黃衍', 'CF-定謙'],
                subs: [{
                    number: 12,
                    name: '皓宇'
                }, {
                    number: 17,
                    name: '宇晨*'
                }],
                subTeam: '勇士',
                final_score: '0 : 2',
                pso: '',
                wdl: 'L',
                scorers: [{}],
                goalkeepers: ['凱泰', '宥融'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: '* 學長／姐'
            }]
        }, {
            id: 11,
            year: '2021',
            cupName: 'A-Star聖誕盃',
            system: '7人制',
            cover: '2021astarcup',
            trophy: '',
            team: [{
                name: '勇士',
                members: '晉丞、黃衍、紘豪、善捷、定緯、皓宇、凱泰、維恩、亮谷、柏燁、定謙、宥融、昕叡、宇正'
            }],
            note: '',
            matches: [{
                date: '20211219',
                pitch: '環河足球場',
                opponent: '台北曄拓',
                formation: '3-3-0',
                starters: ['GK-宥融', 'RB-黃衍', 'CB-維恩', 'LB-善捷', 'RM-亮谷', 'CM-皓宇', 'LM-宇正'],
                subs: [{
                    number: 3,
                    name: '晉丞'
                }, {
                    number: 9,
                    name: '紘豪'
                }, {
                    number: 11,
                    name: '定緯'
                }, {
                    number: 15,
                    name: '凱泰'
                }, {
                    number: 27,
                    name: '定謙'
                }],
                subTeam: '小勇士',
                final_score: '0 : 2',
                pso: '',
                wdl: 'L',
                scorers: [{}],
                goalkeepers: ['宥融', '凱泰'],
                isCleanSheet: false,
                instructors: ['怡萍'],
                note: ''
            }, {
                date: '20211219',
                pitch: '環河足球場',
                opponent: 'SLFC',
                formation: '3-3-0',
                starters: ['GK-宥融', 'RB-宇正', 'CB-亮谷', 'LB-黃衍', 'RM-皓宇', 'CM-維恩', 'LM-定謙'],
                subs: [{
                    number: 7,
                    name: '黃衍'
                }, {
                    number: 10,
                    name: '善捷'
                }, {
                    number: 77,
                    name: '昕叡'
                }],
                subTeam: '小勇士',
                final_score: '1 : 0',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '亮谷',
                    assist: ''
                }],
                goalkeepers: ['宥融'],
                isCleanSheet: true,
                instructors: ['怡萍'],
                note: ''
            }, {
                date: '20211219',
                pitch: '環河足球場',
                opponent: 'CFT',
                formation: '3-3-0',
                starters: ['GK-宥融', 'RB-宇正', 'CB-亮谷', 'LB-皓宇', 'RM-紘豪', 'CM-維恩', 'LM-晉丞'],
                subs: [{
                    number: 7,
                    name: '黃衍'
                }, {
                    number: 10,
                    name: '善捷'
                }, {
                    number: 11,
                    name: '定緯'
                }, {
                    number: 15,
                    name: '凱泰'
                }, {
                    number: 27,
                    name: '定謙'
                }, {
                    number: 77,
                    name: '昕叡'
                }],
                subTeam: '小勇士',
                final_score: '1 : 3',
                pso: '',
                wdl: 'L',
                scorers: [{
                    name: '定謙',
                    assist: '宥融'
                }],
                goalkeepers: ['宥融', '凱泰'],
                isCleanSheet: false,
                instructors: ['怡萍'],
                note: ''
            }]
        }, {
            id: 12,
            year: '2022',
            cupName: '迎虎盃',
            system: '5人制',
            cover: '2022tigercup',
            trophy: '亞軍',
            team: [{
                name: '超能勇士',
                members: '晉丞、紘豪、凱泰、亮谷、宥融、昕叡、宇正'
            }, {
                name: '無敵勇士',
                members: '黃衍、善捷、定緯、皓宇、維恩、柏燁、定謙'
            }],
            note: '',
            matches: [{
                date: '20220219',
                pitch: '浮洲足球場',
                opponent: 'BT-Spirits',
                formation: '1-2-1',
                starters: ['GK-宥融', 'CB-亮谷', 'RM-昕叡', 'LM-宇正', 'CF-晉丞'],
                subs: [{
                    number: 9,
                    name: '紘豪'
                }],
                subTeam: '超能勇士',
                final_score: '1 : 1',
                pso: '0 : 1',
                wdl: 'D*',
                scorers: [{
                    name: '宇正',
                    assist: ''
                }],
                goalkeepers: ['宥融'],
                isCleanSheet: false,
                instructors: ['怡萍'],
                note: '依賽事規定本場比賽正規時間結束1：1應為和局，唯裁判因失職誤認賽制並要求雙方加踢PK，PK結果為BT Spirits勝出'
            }, {
                date: '20220219',
                pitch: '浮洲足球場',
                opponent: '桃園自強衝鋒少年',
                formation: '1-2-1',
                starters: ['GK-宇正', 'CB-亮谷', 'RM-宥融', 'LM-紘豪', 'CF-昕叡'],
                subs: [{
                    number: 3,
                    name: '晉丞'
                }],
                subTeam: '超能勇士',
                final_score: '0 : 7',
                pso: '',
                wdl: 'L',
                scorers: [{
                    name: '',
                    assist: ''
                }],
                goalkeepers: ['宇正'],
                isCleanSheet: false,
                instructors: ['怡萍'],
                note: ''
            }, {
                date: '20220219',
                pitch: '浮洲足球場',
                opponent: '森巴獵豹U10',
                formation: '2-0-2',
                starters: ['GK-善捷', 'RB-維恩', 'LB-黃衍', 'RF-皓宇', 'LF-定謙'],
                subs: [{
                    number: 23,
                    name: '柏燁'
                }],
                subTeam: '無敵勇士',
                final_score: '1 : 2',
                pso: '',
                wdl: 'L',
                scorers: [{
                    name: '定謙',
                    assist: ''
                }],
                goalkeepers: ['善捷'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: ''
            }, {
                date: '20220219',
                pitch: '浮洲足球場',
                opponent: 'twfc-豹',
                formation: '2-0-2',
                starters: ['GK-柏燁', 'CB-維恩', 'RM-善捷', 'LM-黃衍', 'CF-定謙'],
                subs: [{
                    number: 12,
                    name: '皓宇'
                }],
                subTeam: '無敵勇士',
                final_score: '0 : 7',
                pso: '',
                wdl: 'L',
                scorers: [{
                    name: '',
                    assist: ''
                }],
                goalkeepers: ['柏燁'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: ''
            }, {
                date: '20220219',
                pitch: '浮洲足球場',
                opponent: 'Vikings',
                formation: '1-2-1',
                starters: ['GK-宇正', 'CB-亮谷', 'RM-宥融', 'LM-紘豪', 'CF-晉丞'],
                subs: [{
                    number: 77,
                    name: '昕叡'
                }],
                subTeam: '超能勇士',
                final_score: '14 : 1',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '宥融（P）',
                    assist: ''
                }, {
                    name: '宥融',
                    assist: ''
                }, {
                    name: '宥融',
                    assist: '紘豪'
                }, {
                    name: '晉丞',
                    assist: ''
                }, {
                    name: '紘豪',
                    assist: '昕叡'
                }, {
                    name: 'Own Goal',
                    assist: '亮谷'
                }, {
                    name: '晉丞',
                    assist: ''
                }, {
                    name: '宥融',
                    assist: ''
                }, {
                    name: '晉丞',
                    assist: '宇正'
                }, {
                    name: '亮谷',
                    assist: ''
                }, {
                    name: '亮谷',
                    assist: '宥融'
                }, {
                    name: '宥融',
                    assist: ''
                }, {
                    name: '亮谷',
                    assist: '昕叡'
                }, {
                    name: '紘豪',
                    assist: ''
                }],
                goalkeepers: ['宇正'],
                isCleanSheet: false,
                instructors: ['怡萍'],
                note: ''
            }, {
                date: '20220219',
                pitch: '浮洲足球場',
                opponent: '長庚國小',
                formation: '2-0-2',
                starters: ['GK-善捷', 'RB-維恩', 'LB-柏燁', 'RF-黃衍', 'LF-定謙'],
                subs: [{
                    number: 12,
                    name: '皓宇'
                }],
                subTeam: '無敵勇士',
                final_score: '3 : 4',
                pso: '',
                wdl: 'L',
                scorers: [{
                    name: '黃衍',
                    assist: '善捷'
                }, {
                    name: '維恩',
                    assist: ''
                }, {
                    name: '柏燁',
                    assist: ''
                }],
                goalkeepers: ['善捷'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: ''
            }]
        }, {
            id: 13,
            year: '2022',
            cupName: '新北市少年八人制足球聯賽',
            system: '8人制',
            cover: '2022eightmanleague',
            trophy: '',
            team: [{
                name: '小勇士',
                members: '晉丞、黃衍、紘豪、善捷、定緯、皓宇、凱泰、維恩、亮谷、柏燁、定謙、宥融、昕叡、宇正'
            }],
            note: `<a class="text-warning" target="_blank" href="./img/table/2022.jpg"><i class="fa fa-table text-warning" aria-hidden="true"></i> League Table</a>`,
            matches: [{
                date: '20220305',
                pitch: '新莊體育場',
                opponent: '台北曄拓',
                formation: '3-3-1',
                starters: ['GK-凱泰', 'RB-宇正', 'CB-維恩', 'LB-紘豪', 'RM-昕叡', 'CM-亮谷', 'LM-黃衍', 'CF-定謙'],
                subs: [{
                    number: 3,
                    name: '晉丞'
                }, {
                    number: 23,
                    name: '柏燁'
                }, {
                    number: 55,
                    name: '宥融'
                }],
                subTeam: '小勇士',
                final_score: '2 : 0',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '亮谷',
                    assist: ''
                }, {
                    name: '晉丞',
                    assist: '亮谷'
                }],
                goalkeepers: ['凱泰'],
                isCleanSheet: true,
                instructors: ['柏豪'],
                note: ''
            }, {
                date: '20220306',
                pitch: '新莊體育場',
                opponent: '樂活鯊',
                formation: '3-3-1',
                starters: ['GK-凱泰', 'RB-宇正', 'CB-維恩', 'LB-昕叡', 'RM-宥融', 'CM-黃衍', 'LM-善捷', 'CF-定謙'],
                subs: [{
                    number: 3,
                    name: '晉丞'
                }, {
                    number: 10,
                    name: '善捷'
                }, {
                    number: 23,
                    name: '柏燁'
                }],
                subTeam: '小勇士',
                final_score: '0 : 5',
                pso: '',
                wdl: 'L',
                scorers: [{}],
                goalkeepers: ['凱泰', '柏燁'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: ''
            }, {
                date: '20220521',
                pitch: '新莊體育場',
                opponent: 'MFA-U10',
                formation: '3-3-1',
                starters: ['GK-宥融', 'RB-宇正', 'CB-亮谷', 'LB-黃衍', 'RM-柏燁', 'CM-維恩', 'LM-昕叡', 'CF-定謙'],
                subs: [{
                    number: 3,
                    name: '晉丞'
                }, {
                    number: 15,
                    name: '凱泰'
                }],
                subTeam: '小勇士',
                final_score: '0 : 6',
                pso: '',
                wdl: 'L',
                scorers: [{}],
                goalkeepers: ['宥融', '凱泰'],
                isCleanSheet: false,
                instructors: ['怡萍'],
                note: ''
            }, {
                date: '20220605',
                pitch: '錦和運動公園',
                opponent: 'Torero',
                formation: '3-3-1',
                starters: ['GK-宥融', 'RB-昕叡', 'CB-維恩', 'LB-紘豪', 'RM-晉丞', 'CM-亮谷', 'LM-黃衍', 'CF-定謙'],
                subs: [{
                    number: 23,
                    name: '柏燁'
                }],
                subTeam: '小勇士',
                final_score: '0 : 8',
                pso: '',
                wdl: 'L',
                scorers: [{}],
                goalkeepers: ['宥融', '定謙'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: ''
            }, {
                date: '20220625',
                pitch: '新莊體育場',
                opponent: 'BLES-U10',
                formation: '3-3-1',
                starters: ['GK-定謙', 'RB-宥融', 'CB-維恩', 'LB-宇正', 'RM-黃衍', 'CM-亮谷', 'LM-昕叡', 'CF-晉丞'],
                subs: [{
                    number: 23,
                    name: '柏燁'
                }],
                subTeam: '小勇士',
                final_score: '1 : 0',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '亮谷',
                    assist: ''
                }],
                goalkeepers: ['定謙'],
                isCleanSheet: true,
                instructors: ['柏豪'],
                note: ''
            }, {
                date: '20220626',
                pitch: '新莊體育場',
                opponent: 'Monster',
                formation: '3-3-1',
                starters: ['GK-定謙', 'RB-宥融', 'CB-維恩', 'LB-宇正', 'RM-黃衍', 'CM-亮谷', 'LM-昕叡', 'CF-柏燁'],
                subs: [{
                    number: 3,
                    name: '晉丞'
                }, {
                    number: 9,
                    name: '紘豪'
                }],
                subTeam: '小勇士',
                final_score: '4 : 0',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '亮谷',
                    assist: '晉丞'
                }, {
                    name: '黃衍',
                    assist: '昕叡'
                }, {
                    name: '維恩',
                    assist: ''
                }, {
                    name: '昕叡',
                    assist: '維恩'
                }],
                goalkeepers: ['定謙', '柏燁'],
                isCleanSheet: true,
                instructors: ['柏豪'],
                note: ''
            }]
        }, {
            id: 14,
            year: '2022',
            cupName: '臺北市教育盃',
            system: '5人制',
            cover: '2022educationcup',
            trophy: '',
            team: [{
                name: '勇士',
                members: '晉丞、黃衍、善捷、皓宇、維恩、亮谷、柏燁、定謙、宥融、昕叡、宇正、子珩*、宇晨*、振綸*、秉俊*'
            }],
            note: '',
            matches: [{
                date: '20220314',
                pitch: '成德國小',
                opponent: '日新國小',
                formation: '2-0-2（Square）',
                starters: ['GK-子珩*', 'RB-亮谷', 'LB-振綸*', 'RF-維恩', 'LF-黃衍'],
                subs: [{
                    number: 10,
                    name: '善捷'
                }, {
                    number: 12,
                    name: '皓宇'
                }, {
                    number: 17,
                    name: '宇晨*'
                }, {
                    number: 55,
                    name: '宥融'
                }, {
                    number: 77,
                    name: '昕叡'
                }, {
                    number: 97,
                    name: '宇正'
                }, {
                    number: 99,
                    name: '秉俊*'
                }],
                subTeam: '勇士',
                final_score: '7 : 2',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '維恩',
                    assist: '振綸*'
                }, {
                    name: '維恩',
                    assist: ''
                }, {
                    name: '振綸*',
                    assist: '亮谷'
                }, {
                    name: '維恩',
                    assist: '黃衍'
                }, {
                    name: '昕叡',
                    assist: ''
                }, {
                    name: '振綸*',
                    assist: ''
                }, {
                    name: '宇正',
                    assist: '昕叡'
                }],
                goalkeepers: ['子珩*'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: '* 學長／姐'
            }, {
                date: '20220315',
                pitch: '成德國小',
                opponent: '永樂國小',
                formation: '2-0-2（Square）',
                starters: ['GK-子珩', 'RB-振綸*', 'LB-維恩', 'RF-宇正', 'LF-亮谷'],
                subs: [{
                    number: 7,
                    name: '黃衍'
                }, {
                    number: 10,
                    name: '善捷'
                }, {
                    number: 12,
                    name: '皓宇'
                }, {
                    number: 17,
                    name: '宇晨*'
                }, {
                    number: 55,
                    name: '宥融'
                }, {
                    number: 77,
                    name: '昕叡'
                }, {
                    number: 99,
                    name: '秉俊*'
                }],
                subTeam: '勇士',
                final_score: '6 : 0',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '黃衍',
                    assist: ''
                }, {
                    name: '振綸*',
                    assist: ''
                }, {
                    name: '振綸*',
                    assist: '亮谷'
                }, {
                    name: '宇正',
                    assist: '振綸*'
                }, {
                    name: '宥融',
                    assist: ''
                }, {
                    name: '宇晨*',
                    assist: '宇正'
                }],
                goalkeepers: ['子珩*'],
                isCleanSheet: true,
                instructors: ['柏豪'],
                note: '* 學長／姐'
            }, {
                date: '20220318',
                pitch: '成德國小',
                opponent: '成德國小',
                formation: '2-0-2（Square）',
                starters: ['GK-子珩', 'RB-維恩', 'LB-振綸*', 'RF-黃衍', 'LF-亮谷'],
                subs: [{
                    number: 12,
                    name: '皓宇'
                }, {
                    number: 55,
                    name: '宥融'
                }, {
                    number: 97,
                    name: '宇正'
                }, {
                    number: 99,
                    name: '秉俊*'
                }],
                subTeam: '勇士',
                final_score: '3 : 4',
                pso: '',
                wdl: 'L',
                scorers: [{
                    name: '宇正',
                    assist: ''
                }, {
                    name: '黃衍',
                    assist: ''
                }, {
                    name: '維恩',
                    assist: ''
                }],
                goalkeepers: ['子珩*', '秉俊*'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: '* 學長／姐'
            }]
        }, {
            id: 15,
            year: '2022',
            cupName: '中華五人制足球錦標賽',
            system: '5人制',
            cover: '2022chtfivemanchamp',
            trophy: '',
            team: [{
                name: '勇士',
                members: '黃衍、皓宇、維恩、亮谷、宥融、宇正、子珩*、振綸*、稟巖*、秉俊*'
            }],
            note: '',
            matches: [{
                date: '20220402',
                pitch: '海洋科技大學淡水校區',
                opponent: 'twfc-豹',
                formation: '2-0-2',
                starters: ['GK-子珩*', 'RB-振綸*', 'LB-維恩', 'RF-稟巖*', 'LF-宇正'],
                subs: [{
                    number: 12,
                    name: '皓宇'
                }, {
                    number: 55,
                    name: '宥融'
                }],
                subTeam: '勇士',
                final_score: '1 : 10',
                pso: '',
                wdl: 'L',
                scorers: [{
                    name: 'Own Goal',
                    assist: '振綸*'
                }],
                goalkeepers: ['子珩*'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: ''
            }, {
                date: '20220403',
                pitch: '海洋科技大學淡水校區',
                opponent: '光復皇馬',
                formation: '3-0-1',
                starters: ['GK-子珩*', 'RB-稟巖*', 'CB-振綸*', 'LB-維恩', 'CF-宇正'],
                subs: [{
                    number: 12,
                    name: '皓宇'
                }, {
                    number: 55,
                    name: '宥融'
                }],
                subTeam: '勇士',
                final_score: '0 : 6',
                pso: '',
                wdl: 'L',
                scorers: [{}],
                goalkeepers: ['子珩*', '秉俊*'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: ''
            }]
        }, {
            id: 16,
            year: '2022',
            cupName: '包中盃',
            system: '8人制',
            cover: '2022ricedumplingcup',
            trophy: '',
            team: [{
                name: '勇士',
                members: '晉丞、黃衍、紘豪、善捷、維恩、亮谷、柏燁、定謙、宥融、昕叡、宇正'
            }],
            note: '',
            matches: [{
                date: '20220611',
                pitch: '新莊體育場',
                opponent: '海山U10',
                formation: '3-3-1',
                starters: ['GK-宥融', 'RB-宇正', 'CB-維恩', 'LB-善捷', 'RM-昕叡', 'CM-亮谷', 'LM-黃衍', 'CF-定謙'],
                subs: [{
                    number: 3,
                    name: '晉丞'
                }, {
                    number: 9,
                    name: '紘豪'
                }],
                subTeam: '小勇士',
                final_score: '0 : 1',
                pso: '',
                wdl: 'L',
                scorers: [],
                goalkeepers: ['宥融', '善捷'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: ''
            }, {
                date: '20220612',
                pitch: '新莊體育場',
                opponent: '樂活鯊',
                formation: '3-3-1',
                starters: ['GK-善捷', 'RB-宥融', 'CB-亮谷', 'LB-昕叡', 'RM-定謙', 'CM-維恩', 'LM-宇正', 'CF-黃衍'],
                subs: [{
                    number: 3,
                    name: '晉丞'
                }, {
                    number: 9,
                    name: '紘豪'
                }, {
                    number: 23,
                    name: '柏燁'
                }],
                subTeam: '小勇士',
                final_score: '0 : 3',
                pso: '',
                wdl: 'L',
                scorers: [],
                goalkeepers: ['善捷'],
                isCleanSheet: false,
                instructors: ['怡萍'],
                note: ''
            }, {
                date: '20220612',
                pitch: '新莊體育場',
                opponent: 'GSC',
                formation: '3-3-1',
                starters: ['GK-宥融', 'RB-晉丞', 'CB-維恩', 'LB-善捷', 'RM-黃衍', 'CM-亮谷', 'LM-紘豪', 'CF-柏燁'],
                subs: [{
                    number: 9,
                    name: '紘豪'
                }, {
                    number: 27,
                    name: '定謙'
                }, {
                    number: 97,
                    name: '宇正'
                }],
                subTeam: '小勇士',
                final_score: '0 : 1',
                pso: '',
                wdl: 'L',
                scorers: [],
                goalkeepers: ['宥融'],
                isCleanSheet: false,
                instructors: ['怡萍'],
                note: ''
            }]
        }, {
            id: 17,
            year: '2022',
            cupName: '臺北市五人制足球聯賽',
            system: '5人制',
            cover: '2022tpefivemanleague',
            trophy: '',
            team: [{
                name: '勇士',
                members: '黃衍、皓宇、維恩、亮谷、宥融、宇正、子珩*、振編*、稟巖*、秉俊*'
            }],
            note: '',
            matches: [{
                date: '20220717',
                pitch: '南港高中',
                opponent: 'BLES-U10',
                formation: '2-2',
                starters: ['GK-子珩*', 'RB-稟巖*', 'LB-宇正', 'RF-維恩', 'LF-振綸*'],
                subs: [{
                    number: 7,
                    name: '黃衍'
                }, {
                    number: 12,
                    name: '皓宇'
                }, {
                    number: 21,
                    name: '亮谷'
                }],
                subTeam: '',
                final_score: '3 : 3',
                pso: '3-4',
                wdl: 'L',
                scorers: [{
                    name: '亮谷',
                    assist: ''
                }, {
                    name: '宥融',
                    assist: '亮谷'
                }, {
                    name: '宇正',
                    assist: ''
                }],
                goalkeepers: ['子珩*'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: '* 學長'
            }, {
                date: '20220717',
                pitch: '南港高中',
                opponent: '石牌國小',
                formation: '2-2',
                starters: ['GK-子珩*', 'RB-稟巖*', 'LB-振綸*', 'RF-維恩', 'LF-亮谷'],
                subs: [{
                    number: 7,
                    name: '黃衍'
                }, {
                    number: 12,
                    name: '皓宇'
                }, {
                    number: 97,
                    name: '宇正'
                }],
                subTeam: '',
                final_score: '2 : 5',
                pso: '',
                wdl: 'L',
                scorers: [{
                    name: '維恩',
                    assist: '振綸*'
                }, {
                    name: '宥融',
                    assist: ''
                }],
                goalkeepers: ['子珩*'],
                isCleanSheet: false,
                instructors: ['怡萍'],
                note: '* 學長'
            }]
        }, {
            id: 18,
            year: '2022',
            cupName: '春季大安盃',
            system: '5人制',
            cover: '2022daanspringcup',
            trophy: '',
            team: [{
                name: '勇士',
                members: '晉丞、紘豪、善捷、凱泰、柏燁、定謙、定煒、昕叡、駿毅*、宇晨*、仲謙*'
            }],
            note: '',
            matches: [{
                date: '20220723',
                pitch: '華中五人制足球場',
                opponent: '中正炫風',
                formation: '2-2',
                starters: ['GK-仲謙*', 'RB-紘豪', 'LB-柏燁', 'RF-昕叡', 'LF-宇晨*'],
                subs: [{
                    number: 10,
                    name: '善捷'
                }, {
                    number: 15,
                    name: '凱泰'
                }, {
                    number: 27,
                    name: '定謙'
                }, {
                    number: 16,
                    name: '駿毅*'
                }],
                subTeam: '',
                final_score: '0 : 9',
                pso: '',
                wdl: 'L',
                scorers: [],
                goalkeepers: ['仲謙*', '凱泰'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: '* 學長／姐'
            }, {
                date: '20220723',
                pitch: '華中五人制足球場',
                opponent: '國北實小',
                formation: '2-2',
                starters: ['GK-仲謙*', 'RB-善捷', 'LB-紘豪', 'RF-宇晨', 'LF-昕叡'],
                subs: [{
                    number: 23,
                    name: '柏燁'
                }, {
                    number: 27,
                    name: '定謙'
                }],
                subTeam: '',
                final_score: '2 : 1',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '定謙',
                    assist: '仲謙*'
                }, {
                    name: '宇晨*',
                    assist: '定謙'
                }],
                goalkeepers: ['仲謙*'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: '* 學長／姐'
            }]
        }, {
            id: 19,
            year: '2022',
            cupName: '新北市夏季主委盃草地五人制',
            system: '5人制',
            cover: '2022grassfiveman',
            trophy: '亞軍',
            team: [{
                name: '勇士',
                members: '黃衍、善捷、皓宇、凱泰、維恩、亮谷、柏燁、定謙、宥融、昕叡'
            }],
            note: '',
            matches: [{
                date: '20220820',
                pitch: '陽光足球場',
                opponent: 'BT-Spirits雷羊',
                formation: '2-2',
                starters: ['GK-定謙', 'RB-亮谷', 'LB-維恩', 'RF-宥融', 'LF-皓宇'],
                subs: [{
                    number: 10,
                    name: '善捷'
                }, {
                    number: 15,
                    name: '凱泰'
                }, {
                    number: 77,
                    name: '昕叡'
                }],
                subTeam: '',
                final_score: '2 : 5',
                pso: '',
                wdl: 'L',
                scorers: [{
                    name: '昕叡',
                    assist: '亮谷'
                }, {
                    name: '亮谷',
                    assist: ''
                }],
                goalkeepers: ['定謙', '凱泰'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: ''
            }, {
                date: '20220821',
                pitch: '陽光足球場',
                opponent: '暴風足球',
                formation: '2-2',
                starters: ['GK-善捷', 'RB-黃衍', 'LB-亮谷', 'RF-宥融', 'LF-皓宇'],
                subs: [{
                    number: 15,
                    name: '凱泰'
                }, {
                    number: 18,
                    name: '維恩'
                }, {
                    number: 27,
                    name: '定謙'
                }, {
                    number: 77,
                    name: '昕叡'
                }],
                subTeam: '',
                final_score: '3 : 0',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '宥融',
                    assist: '黃衍'
                }, {
                    name: '亮谷',
                    assist: ''
                }, {
                    name: '亮谷',
                    assist: ''
                }],
                goalkeepers: ['善捷', '黃衍'],
                isCleanSheet: true,
                instructors: ['怡萍'],
                note: ''
            }, {
                date: '20220821',
                pitch: '陽光足球場',
                opponent: '永士FC',
                formation: '2-2',
                starters: ['GK-善捷', 'RB-宥融', 'LB-維恩', 'RF-黃衍', 'LF-皓宇'],
                subs: [{
                    number: 15,
                    name: '凱泰'
                }, {
                    number: 23,
                    name: '柏燁'
                }, {
                    number: 27,
                    name: '定謙'
                }, {
                    number: 77,
                    name: '昕叡'
                }],
                subTeam: '',
                final_score: '0 : 5',
                pso: '',
                wdl: 'L',
                scorers: [],
                goalkeepers: ['善捷'],
                isCleanSheet: false,
                instructors: ['怡萍'],
                note: ''
            }]
        }]
    },
    methods: {},
    computed: {
        sortMatches: function() {
            return _.orderBy(this.cups, 'id', 'desc')
        }
    },
    filters: {}
})