new Vue({
    el: '#ZhiQingFootball',
    data: {
        cups: [{
            id: 1,
            year: '2020',
            cupName: '秋季大安盃',
            system: '5人制',
            grade: 'U8',
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
                opponent: { name: 'HePing踢豹', logo: '和平實小' },
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
                opponent: { name: '炫風新尖兵', logo: '炫風' },
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
                opponent: { name: '熱血足球U8', logo: '熱血足球' },
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
                opponent: { name: '磐石U8', logo: '磐石' },
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
                note: 'PSO：維恩○、亮谷○、黃衍○、紘豪○'
            }, {
                date: '20201206',
                pitch: '華中五人制足球場',
                opponent: { name: '銘傳之星', logo: '銘傳之星' },
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
                note: 'PSO：亮谷×、維恩×、宇正○、黃衍×'
            }, {
                date: '20201206',
                pitch: '華中五人制足球場',
                opponent: { name: '公館小雷霆', logo: '公館國小' },
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
            grade: 'U8',
            cover: '2020unitedcup',
            trophy: '分組亞軍',
            team: [{
                name: '種子',
                members: '定宸、晉丞、黃衍、紘豪、善捷、皓宇、凱泰、維恩、亮谷、明澤、定謙、品叡、宥融、昕叡、宇正'
            }],
            note: '',
            matches: [{
                date: '20201121',
                pitch: '新莊田徑場',
                opponent: { name: '航源FC-U7', logo: '航源FC' },
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
                pitch: '新莊田徑場',
                opponent: { name: '虎鯊HSFC', logo: '虎鯊HSFC' },
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
                opponent: { name: '新北銀河', logo: '新北銀河' },
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
                opponent: { name: '日新Yoyo', logo: '日新國小' },
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
            grade: 'U8',
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
                opponent: { name: '熱血足球U8', logo: '熱血足球' },
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
                opponent: { name: '北新國小', logo: '北新國小' },
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
                opponent: { name: '夢幻聚星', logo: 'default' },
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
                opponent: { name: 'TFA尤文圖斯', logo: 'TFA' },
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
                opponent: { name: '暴風足球', logo: 'default' },
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
            grade: 'U8',
            cover: '2021oxcup',
            trophy: '分組冠軍',
            team: [{
                name: '種子',
                members: '晉丞、黃衍、翊凱、紘豪、善捷、定緯、皓宇、凱泰、維恩、亮谷、明澤、柏燁、定謙、宥融、昕叡、宇正'
            }],
            note: '',
            matches: [{
                date: '20210130',
                pitch: '新莊田徑場',
                opponent: { name: '森巴小獵豹', logo: '森巴獵豹' },
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
                pitch: '新莊田徑場',
                opponent: { name: '新北銀河', logo: '新北銀河' },
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
                opponent: { name: '虎鯊HSFC', logo: '虎鯊HSFC' },
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
            grade: 'U8',
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
                opponent: { name: '大安足球U8綠', logo: '大安足球' },
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
                opponent: { name: '博克多武士岸', logo: '武士岸' },
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
                opponent: { name: '宜大吉利港', logo: 'default' },
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
                opponent: { name: '大暴風足球', logo: 'default' },
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
            }]
        }, {
            id: 6,
            year: '2021',
            cupName: '春季大安盃',
            system: '5人制',
            grade: 'U8',
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
                opponent: { name: '國北實小', logo: '國北實小' },
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
                opponent: { name: '熱血足球U8', logo: '熱血足球' },
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
                opponent: { name: '炫風小尖兵', logo: '中正炫風' },
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
                opponent: { name: '公館紅雷霆', logo: '公館國小' },
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
                opponent: { name: '磐石U8', logo: '磐石' },
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
                opponent: { name: '國北實小', logo: '國北實小' },
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
                opponent: { name: '熱血踢豹', logo: '熱血足球' },
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
                opponent: { name: '公館藍雷霆', logo: '公館國小' },
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
            grade: 'U8',
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
                opponent: { name: 'Dreamers-FC', logo: 'DreamersFC' },
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
                opponent: { name: '鬥牛犬U8', logo: 'default' },
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
                opponent: { name: 'SLFC-U8', logo: 'SLFC' },
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
            grade: 'U9',
            cover: '2021studentcup',
            trophy: '',
            team: [{
                name: '勇士',
                members: '晉丞、黃衍、紘豪、善捷、皓宇、凱泰、維恩、亮谷、柏燁、定謙、宥融、昕叡、宇正、子珩*、宇晨*、稟巖*'
            }],
            note: '',
            matches: [{
                date: '20210904',
                pitch: '新莊田徑場',
                opponent: { name: '航源FC-U9', logo: '航源FC' },
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
                pitch: '新莊田徑場',
                opponent: { name: '台北Playone', logo: '台北Playone' },
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
            grade: 'U9',
            cover: '2021chairmancup',
            trophy: '亞軍',
            team: [{
                name: 'SC',
                members: '晉丞、黃衍、善捷、皓宇、凱泰、維恩、亮谷、柏燁、定謙、宥融、昕叡、宇正、子珩*、宇晨*、振綸*、稟巖*'
            }],
            note: '',
            matches: [{
                date: '20211030',
                pitch: '台北田徑場',
                opponent: { name: '台北Playone', logo: '台北Playone' },
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
                subTeam: 'SC',
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
                opponent: { name: '銘傳之星U10', logo: '銘傳之星' },
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
                subTeam: 'SC',
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
                opponent: { name: '光復國小', logo: '光復國小' },
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
                subTeam: 'SC',
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
            grade: 'U9',
            cover: '2021unitedcup',
            trophy: '',
            team: [{
                name: '勇士',
                members: '晉丞、黃衍、善捷、皓宇、凱泰、維恩、亮谷、柏燁、定謙、宥融、昕叡、宇正、子珩*、宇晨*、振綸*、駿毅*'
            }],
            note: '',
            matches: [{
                date: '20211120',
                pitch: '新莊田徑場',
                opponent: { name: 'Unity', logo: 'Unity' },
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
                pitch: '新莊田徑場',
                opponent: { name: '海山國小', logo: '海山國小' },
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
                opponent: { name: '磐石U10', logo: '磐石' },
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
                opponent: { name: 'Lion', logo: 'Lion' },
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
            grade: 'U9',
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
                opponent: { name: '台北曄拓', logo: '台北曄拓' },
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
                opponent: { name: 'SLFC', logo: 'SLFC' },
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
                opponent: { name: 'CFT', logo: 'CFT' },
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
            grade: 'U9',
            cover: '2022tigercup',
            trophy: '分組亞軍',
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
                opponent: { name: 'BT-Spirits', logo: 'BT-Spirits' },
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
                note: 'PSO：亮谷×。依賽事規定本場比賽正規時間結束1：1應為和局，唯裁判因失職誤認賽制並要求雙方加踢PSO，PSO結果為BT Spirits勝出'
            }, {
                date: '20220219',
                pitch: '浮洲足球場',
                opponent: { name: '桃園自強衝鋒少年', logo: '桃園自強' },
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
                opponent: { name: '森巴獵豹U10', logo: '森巴獵豹U10' },
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
                opponent: { name: 'twfc-豹', logo: 'twfc' },
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
                opponent: { name: 'Vikings', logo: 'Vikings' },
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
                opponent: { name: '長庚國小', logo: '長庚國小' },
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
            cupName: '新北市少年八人制春季聯賽',
            system: '8人制',
            grade: 'U9',
            cover: '2022eightmanspring',
            trophy: '',
            team: [{
                name: '小勇士',
                members: '晉丞、黃衍、紘豪、善捷、定緯、皓宇、凱泰、維恩、亮谷、柏燁、定謙、宥融、昕叡、宇正'
            }],
            note: `<a class="text-success" target="_blank" href="./img/table/2022eightmanspring.jpg"><i class="fa fa-table text-success" aria-hidden="true"></i> League Table</a>`,
            matches: [{
                date: '20220305',
                pitch: '新莊田徑場',
                opponent: { name: '台北曄拓', logo: '台北曄拓' },
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
                pitch: '新莊田徑場',
                opponent: { name: '樂活鯊', logo: '樂活' },
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
                pitch: '新莊田徑場',
                opponent: { name: 'MFA-U10', logo: 'MFA' },
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
                opponent: { name: 'Torero', logo: 'Torero' },
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
                pitch: '新莊田徑場',
                opponent: { name: 'BLES-U10', logo: 'BLES' },
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
                pitch: '新莊田徑場',
                opponent: { name: 'Monster', logo: 'Monster' },
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
            grade: 'U9',
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
                opponent: { name: '日新國小', logo: '日新國小' },
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
                opponent: { name: '永樂國小', logo: '永樂國小' },
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
                opponent: { name: '成德國小', logo: '成德國小' },
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
            grade: 'U9',
            cover: '2022chtfivemanchamp',
            trophy: '',
            team: [{
                name: '勇士-A',
                members: '黃衍、皓宇、維恩、亮谷、宥融、宇正、子珩*、振綸*、稟巖*、秉俊*'
            }],
            note: '',
            matches: [{
                date: '20220402',
                pitch: '海洋科技大學淡水校區',
                opponent: { name: 'twfc-豹', logo: 'twfc' },
                formation: '2-0-2',
                starters: ['GK-子珩*', 'RB-振綸*', 'LB-維恩', 'RF-稟巖*', 'LF-宇正'],
                subs: [{
                    number: 12,
                    name: '皓宇'
                }, {
                    number: 55,
                    name: '宥融'
                }],
                subTeam: '勇士-A',
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
                opponent: { name: '光復皇馬', logo: '光復國小' },
                formation: '3-0-1',
                starters: ['GK-子珩*', 'RB-稟巖*', 'CB-振綸*', 'LB-維恩', 'CF-宇正'],
                subs: [{
                    number: 12,
                    name: '皓宇'
                }, {
                    number: 55,
                    name: '宥融'
                }],
                subTeam: '勇士-A',
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
            grade: 'U9',
            cover: '2022ricedumplingcup',
            trophy: '',
            team: [{
                name: '小勇士',
                members: '晉丞、黃衍、紘豪、善捷、維恩、亮谷、柏燁、定謙、宥融、昕叡、宇正'
            }],
            note: '',
            matches: [{
                date: '20220611',
                pitch: '新莊田徑場',
                opponent: { name: '海山U10', logo: '海山國小' },
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
                pitch: '新莊田徑場',
                opponent: { name: '樂活鯊', logo: '樂活' },
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
                pitch: '新莊田徑場',
                opponent: { name: 'GSC', logo: 'default' },
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
            grade: 'U9',
            cover: '2022tpefivemanleague',
            trophy: '',
            team: [{
                name: '勇士-A',
                members: '黃衍、皓宇、維恩、亮谷、宥融、宇正、子珩*、振編*、稟巖*、秉俊*'
            }],
            note: '',
            matches: [{
                date: '20220717',
                pitch: '南港高中',
                opponent: { name: 'BLES-U10', logo: 'BLES' },
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
                subTeam: '勇士-A',
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
                note: 'PSO：稟巖*○、振綸*○、宇正○、維恩× | * 學長'
            }, {
                date: '20220717',
                pitch: '南港高中',
                opponent: { name: '石牌國小', logo: '石牌國小' },
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
                subTeam: '勇士-A',
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
            grade: 'U9',
            cover: '2022daanspringcup',
            trophy: '',
            team: [{
                name: '勇士-B',
                members: '晉丞、紘豪、善捷、凱泰、柏燁、定謙、定煒、昕叡、駿毅*、宇晨*、仲謙*'
            }],
            note: '',
            matches: [{
                date: '20220723',
                pitch: '華中五人制足球場',
                opponent: { name: '中正炫風', logo: '中正炫風' },
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
                subTeam: '勇士-B',
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
                opponent: { name: '國北實小', logo: '國北實小' },
                formation: '2-2',
                starters: ['GK-仲謙*', 'RB-善捷', 'LB-紘豪', 'RF-宇晨*', 'LF-昕叡'],
                subs: [{
                    number: 23,
                    name: '柏燁'
                }, {
                    number: 27,
                    name: '定謙'
                }],
                subTeam: '勇士-B',
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
            }, {
                date: '20220827',
                pitch: '華中五人制足球場',
                opponent: { name: '熱血JMES', logo: '集美國小' },
                formation: '2-2',
                starters: ['GK-仲謙*', 'RB-善捷', 'LB-昕叡', 'RF-駿毅*', 'LF-宇晨*'],
                subs: [{
                    number: 15,
                    name: '凱泰'
                }, {
                    number: 27,
                    name: '定謙'
                }],
                subTeam: '勇士-B',
                final_score: '4 : 1',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '昕叡',
                    assist: '宇晨*'
                }, {
                    name: '駿毅*',
                    assist: ''
                }, {
                    name: '昕叡',
                    assist: '定謙*'
                }, {
                    name: '宇晨*',
                    assist: '凱泰'
                }],
                goalkeepers: ['仲謙*'],
                isCleanSheet: false,
                instructors: ['怡萍'],
                note: '* 學長／姐'
            }, {
                date: '20220917',
                pitch: '華中五人制足球場',
                opponent: { name: '大安雲豹', logo: '大安國小' },
                formation: '2-2',
                starters: ['GK-柏燁*', 'RB-定謙', 'LB-善捷', 'RF-晉丞', 'LF-昕叡'],
                subs: [{
                    number: 9,
                    name: '紘豪'
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
                    number: 38,
                    name: '仲謙*'
                }],
                subTeam: '勇士-B',
                final_score: '0 : 12',
                pso: '',
                wdl: 'L',
                scorers: [],
                goalkeepers: ['柏燁', '凱泰'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: '* 學長／姐'
            }]
        }, {
            id: 19,
            year: '2022',
            cupName: '新北市夏季主委盃草地五人制',
            system: '5人制',
            grade: 'U9',
            cover: '2022grassfiveman',
            trophy: '分組亞軍',
            team: [{
                name: '大勇士',
                members: '黃衍、善捷、皓宇、凱泰、維恩、亮谷、柏燁、定謙、宥融、昕叡'
            }],
            note: '',
            matches: [{
                date: '20220820',
                pitch: '陽光足球場',
                opponent: { name: 'BT-Spirits雷羊', logo: 'BT-Spirits' },
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
                subTeam: '大勇士',
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
                opponent: { name: '暴風足球', logo: 'default' },
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
                subTeam: '大勇士',
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
                opponent: { name: '永士FC', logo: '永士FC' },
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
                subTeam: '大勇士',
                final_score: '0 : 5',
                pso: '',
                wdl: 'L',
                scorers: [],
                goalkeepers: ['善捷'],
                isCleanSheet: false,
                instructors: ['怡萍'],
                note: ''
            }]
        }, {
            id: 20,
            year: '2022',
            cupName: '新北市少年八人制秋季聯賽',
            system: '8人制',
            grade: 'U9',
            cover: '2022eightmanfall',
            trophy: '',
            team: [{
                name: '大勇士',
                members: '晉丞、黃衍、紘豪、善捷、皓宇、凱泰、維恩、亮谷、柏燁、定謙、宥融、昕叡、宇正'
            }],
            note: `<a class="text-success" target="_blank" href="img/table/2022eightmanfall.jpg"><i class="fa fa-table text-success" aria-hidden="true"></i> League Table</a>`,
            matches: [{
                date: '20220903',
                pitch: '新莊田徑場',
                opponent: { name: 'Monster', logo: 'Monster' },
                formation: '3-3-1',
                starters: ['GK-定謙', 'RB-宇正', 'CB-維恩', 'LB-宥融', 'RM-昕叡', 'CM-亮谷', 'LM-黃衍', 'CF-晉丞'],
                subs: [{
                    number: 9,
                    name: '紘豪'
                }, {
                    number: 12,
                    name: '皓宇'
                }, {
                    number: 15,
                    name: '凱泰'
                }, {
                    number: 23,
                    name: '柏燁'
                }],
                subTeam: '大勇士',
                final_score: '9 : 0',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '晉丞',
                    assist: ''
                }, {
                    name: '昕叡',
                    assist: ''
                }, {
                    name: '晉丞',
                    assist: '皓宇'
                }, {
                    name: '皓宇',
                    assist: ''
                }, {
                    name: '亮谷',
                    assist: '柏燁'
                }, {
                    name: '亮谷',
                    assist: ''
                }, {
                    name: '晉丞',
                    assist: '定謙'
                }, {
                    name: '晉丞',
                    assist: ''
                }, {
                    name: '宇正',
                    assist: '柏燁'
                }],
                goalkeepers: ['定謙', '凱泰'],
                isCleanSheet: true,
                instructors: ['柏豪'],
                note: ''
            }, {
                date: '20220918',
                pitch: '新莊田徑場',
                opponent: { name: '樂活鯊', logo: '樂活' },
                formation: '3-3-1',
                starters: ['GK-凱泰', 'RB-宥融', 'CB-宇正', 'LB-晉丞', 'RM-昕叡', 'CM-黃衍', 'LM-亮谷', 'CF-皓宇'],
                subs: [{
                    number: 9,
                    name: '紘豪'
                }, {
                    number: 18,
                    name: '維恩'
                }, {
                    number: 27,
                    name: '定謙'
                }],
                subTeam: '大勇士',
                final_score: '3 : 0',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '黃衍',
                    assist: '宥融'
                }, {
                    name: '黃衍',
                    assist: '晉丞'
                }, {
                    name: '宥融',
                    assist: '亮谷'
                }],
                goalkeepers: ['凱泰', '宥融'],
                isCleanSheet: true,
                instructors: ['家緯'],
                note: ''
            }, {
                date: '20221210',
                pitch: '新莊田徑場',
                opponent: { name: '百齡國小', logo: 'BLES' },
                formation: '3-3-1',
                starters: ['GK-凱泰', 'RB-宥融', 'CB-亮谷', 'LB-善捷', 'RM-黃衍', 'CM-維恩', 'LM-皓宇', 'CF-晉丞'],
                subs: [{
                    number: 9,
                    name: '紘豪'
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
                subTeam: '大勇士',
                final_score: '2 : 0',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '維恩',
                    assist: ''
                }, {
                    name: '維恩',
                    assist: '柏燁'
                }],
                goalkeepers: ['凱泰'],
                isCleanSheet: true,
                instructors: ['怡萍'],
                note: ''
            }, {
                date: '20221211',
                pitch: '新莊田徑場',
                opponent: { name: 'TCFA衝鋒少年', logo: '桃園自強' },
                formation: '3-3-1',
                starters: ['GK-善捷', 'RB-宥融', 'CB-維恩', 'LB-定謙', 'RM-昕叡', 'CM-亮谷', 'LM-黃衍', 'CF-晉丞'],
                subs: [{
                    number: 9,
                    name: '紘豪'
                }, {
                    number: 12,
                    name: '皓宇'
                }, {
                    number: 23,
                    name: '柏燁'
                }],
                subTeam: '大勇士',
                final_score: '1 : 1*',
                pso: '',
                wdl: 'D',
                scorers: [{
                    name: '黃衍',
                    assist: '晉丞'
                }],
                goalkeepers: ['善捷'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: '本場比賽依大會規定列為友誼賽，不採計積分與球員成績'
            }, {
                date: '20221217',
                pitch: '新莊田徑場',
                opponent: { name: 'TCFA衝鋒少年', logo: '桃園自強' },
                formation: '3-3-1',
                starters: ['GK-善捷', 'RB-宇正', 'CB-維恩', 'LB-宥融', 'RM-昕叡', 'CM-亮谷', 'LM-黃衍', 'CF-晉丞'],
                subs: [{
                    number: 9,
                    name: '紘豪'
                }, {
                    number: 12,
                    name: '皓宇'
                }, {
                    number: 27,
                    name: '定謙'
                }],
                subTeam: '大勇士',
                final_score: '1 : 1',
                pso: '',
                wdl: 'D',
                scorers: [{
                    name: '維恩',
                    assist: ''
                }],
                goalkeepers: ['善捷'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: ''
            }, {
                date: '20221217',
                pitch: '新莊田徑場',
                opponent: { name: '樂活鯊', logo: '樂活' },
                formation: '3-3-1',
                starters: ['GK-善捷', 'RB-定謙', 'CB-維恩', 'LB-晉丞', 'RM-宥融', 'CM-亮谷', 'LM-黃衍', 'CF-昕叡'],
                subs: [{
                    number: 9,
                    name: '紘豪'
                }, {
                    number: 12,
                    name: '皓宇'
                }, {
                    number: 15,
                    name: '凱泰'
                }, {
                    number: 23,
                    name: '柏燁'
                }],
                subTeam: '大勇士',
                final_score: '4 : 4*',
                pso: '',
                wdl: 'D',
                scorers: [{
                    name: '黃衍',
                    assist: ''
                }, {
                    name: '黃衍',
                    assist: '宥融'
                }, {
                    name: '定謙',
                    assist: '宥融'
                }, {
                    name: '黃衍',
                    assist: '亮谷'
                }],
                goalkeepers: ['善捷', '凱泰'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: '本場比賽依大會規定列為友誼賽，不採計積分與球員成績'
            }, {
                date: '20221218',
                pitch: '新莊田徑場',
                opponent: { name: 'MFA-U9', logo: 'MFA' },
                formation: '3-3-1',
                starters: ['GK-善捷', 'RB-宇正', 'CB-晉丞', 'LB-宥融', 'RM-昕叡', 'CM-維恩', 'LM-黃衍', 'CF-定謙'],
                subs: [{
                    number: 9,
                    name: '紘豪'
                }, {
                    number: 12,
                    name: '皓宇'
                }, {
                    number: 15,
                    name: '凱泰'
                }, {
                    number: 23,
                    name: '柏燁'
                }],
                subTeam: '大勇士',
                final_score: '4 : 1',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '黃衍',
                    assist: '宇正'
                }, {
                    name: '維恩',
                    assist: '黃衍'
                }, {
                    name: '黃衍',
                    assist: '維恩'
                }, {
                    name: '維恩',
                    assist: '黃衍'
                }],
                goalkeepers: ['善捷', '凱泰'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: '本場比賽為升級附加賽'
            }]
        }, {
            id: 21,
            year: '2022',
            cupName: '臺北市足球Ｕ聯賽',
            system: '8人制',
            grade: 'U10',
            cover: '2022uleague',
            trophy: '',
            team: [{
                name: '大勇士',
                members: '晉丞、黃衍、紘豪、善捷、皓宇、凱泰、維恩、亮谷、柏燁、定謙、宥融、昕叡、宇正'
            }],
            note: '',
            matches: [{
                date: '20220910',
                pitch: '迎風足球場',
                opponent: { name: '北新國小', logo: '北新國小' },
                formation: 'N/A',
                starters: [''],
                subs: [],
                subTeam: '',
                final_score: '2 : 0*',
                pso: '',
                wdl: 'W',
                scorers: [],
                goalkeepers: [],
                isCleanSheet: false,
                instructors: [],
                note: '對手北新國小因疫情影響參賽人賽不足棄賽，依大會規定裁決 2 : 0 志清勝'
            }, {
                date: '20220910',
                pitch: '迎風足球場',
                opponent: { name: '熱血希望', logo: '熱血足球' },
                formation: '3-3-1',
                starters: ['GK-定謙', 'RB-宇正', 'CB-維恩', 'LB-紘豪', 'RM-宥融', 'CM-亮谷', 'LM-昕叡', 'CF-晉丞'],
                subs: [{
                    number: 12,
                    name: '皓宇'
                }, {
                    number: 15,
                    name: '凱泰'
                }],
                subTeam: '大勇士',
                final_score: '0 : 7',
                pso: '',
                wdl: 'L',
                scorers: [],
                goalkeepers: ['定謙', '凱泰'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: ''
            }]
        }, {
            id: 22,
            year: '2022',
            cupName: '全國學童盃',
            system: '8人制',
            grade: 'U10',
            cover: '2022studentcup',
            trophy: '',
            team: [{
                name: '大勇士',
                members: '晉丞、黃衍、紘豪、善捷、皓宇、凱泰、維恩、亮谷、柏燁、定謙、宥融、昕叡、宇正'
            }],
            note: '',
            matches: [{
                date: '20220919',
                pitch: '青埔足球場',
                opponent: { name: '天母國小', logo: '天母國小' },
                formation: '3-3-1',
                starters: ['GK-黃衍', 'RB-善捷', 'CB-維恩', 'LB-宇正', 'RM-宥融', 'CM-亮谷', 'LM-皓宇', 'CF-晉丞'],
                subs: [{
                    number: 9,
                    name: '紘豪'
                }, {
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
                subTeam: '大勇士',
                final_score: '5 : 0',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '晉丞',
                    assist: '皓宇'
                }, {
                    name: '晉丞',
                    assist: '亮谷'
                }, {
                    name: '宥融',
                    assist: ''
                }, {
                    name: '黃衍',
                    assist: '晉丞'
                }, {
                    name: '昕叡',
                    assist: '維恩'
                }],
                goalkeepers: ['黃衍', '善捷', '凱泰'],
                isCleanSheet: true,
                instructors: ['怡萍'],
                note: ''
            }, {
                date: '20220919',
                pitch: '青埔足球場',
                opponent: { name: '石牌國小', logo: '石牌國小' },
                formation: '3-3-1',
                starters: ['GK-黃衍', 'RB-善捷', 'CB-亮谷', 'LB-宇正', 'RM-宥融', 'CM-維恩', 'LM-皓宇', 'CF-晉丞'],
                subs: [{
                    number: 9,
                    name: '紘豪'
                }, {
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
                subTeam: '大勇士',
                final_score: '0 : 8',
                pso: '',
                wdl: 'L',
                scorers: [],
                goalkeepers: ['黃衍', '凱泰'],
                isCleanSheet: false,
                instructors: ['怡萍'],
                note: ''
            }, {
                date: '20220921',
                pitch: '青埔足球場',
                opponent: { name: '安和國小', logo: '安和國小' },
                formation: '3-3-1',
                starters: ['GK-善捷', 'RB-宇正', 'CB-亮谷', 'LB-宥融', 'RM-昕叡', 'CM-維恩', 'LM-黃衍', 'CF-晉丞'],
                subs: [{
                    number: 12,
                    name: '皓宇'
                }],
                subTeam: '大勇士',
                final_score: '2 : 2',
                pso: '4 : 3',
                wdl: 'W',
                scorers: [{
                    name: '昕叡',
                    assist: ''
                }, {
                    name: '黃衍',
                    assist: '昕叡'
                }],
                goalkeepers: ['善捷', '黃衍'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: 'PSO：維恩×、亮谷○、宇正○、黃衍○、昕叡○'
            }, {
                date: '20220921',
                pitch: '青埔足球場',
                opponent: { name: '自強國小', logo: '自強國小' },
                formation: '1-3-2-1',
                starters: ['GK-善捷', 'SW-維恩', 'RB-宥融', 'CB-亮谷', 'LB-宇正', 'RCM-昕叡', 'LCM-黃衍', 'CF-晉丞'],
                subs: [{
                    number: 12,
                    name: '皓宇'
                }],
                subTeam: '大勇士',
                final_score: '2 : 2',
                pso: '3 : 4',
                wdl: 'L',
                scorers: [{
                    name: '晉丞',
                    assist: '宥融'
                }, {
                    name: '維恩',
                    assist: ''
                }],
                goalkeepers: ['善捷', '宇正'],
                isCleanSheet: false,
                instructors: ['怡萍', '柏豪'],
                note: 'PSO：亮谷○、維恩×、宥融×、晉丞○、宇正○'
            }]
        }, {
            id: 23,
            year: '2022',
            cupName: '新北聯合盃',
            system: '8人制',
            grade: 'U10',
            cover: '2022unitedcup',
            trophy: '分組冠軍',
            team: [{
                name: '大勇士',
                members: '晉丞、黃衍、紘豪、善捷、皓宇、凱泰、維恩、亮谷、柏燁、定謙、宥融、昕叡、宇正'
            }],
            note: '<span class="text-success">金靴獎：①昕叡(9球) | ③黃衍(4球)</span>',
            matches: [{
                date: '20221002',
                pitch: '新莊田徑場',
                opponent: { name: '新北銀河', logo: '新北銀河' },
                formation: '3-3-1',
                starters: ['GK-凱泰', 'RB-宇正', 'CB-維恩', 'LB-宥融', 'RM-昕叡', 'CM-亮谷', 'LM-黃衍', 'CF-皓宇'],
                subs: [{
                    number: 3,
                    name: '晉丞'
                }, {
                    number: 9,
                    name: '紘豪'
                }],
                subTeam: '大勇士',
                final_score: '2 : 2',
                pso: '',
                wdl: 'D',
                scorers: [{
                    name: '昕叡',
                    assist: ''
                }, {
                    name: '黃衍',
                    assist: '昕叡'
                }],
                goalkeepers: ['凱泰'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: ''
            }, {
                date: '20221015',
                pitch: '新莊田徑場',
                opponent: { name: '小炫風', logo: '中正炫風' },
                formation: '3-3-1',
                starters: ['GK-凱泰', 'RB-宇正', 'CB-維恩', 'LB-紘豪', 'RM-昕叡', 'CM-亮谷', 'LM-黃衍', 'CF-晉丞'],
                subs: [{
                    number: 10,
                    name: '善捷'
                }, {
                    number: 12,
                    name: '皓宇'
                }, {
                    number: 23,
                    name: '柏燁'
                }, {
                    number: 27,
                    name: '定謙'
                }],
                subTeam: '大勇士',
                final_score: '7 : 0',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '黃衍',
                    assist: '亮谷'
                }, {
                    name: '昕叡',
                    assist: '黃衍'
                }, {
                    name: '昕叡',
                    assist: '亮谷'
                }, {
                    name: '昕叡',
                    assist: '晉丞'
                }, {
                    name: '定謙',
                    assist: ''
                }, {
                    name: '昕叡',
                    assist: ''
                }, {
                    name: '黃衍',
                    assist: '善捷'
                }],
                goalkeepers: ['凱泰'],
                isCleanSheet: true,
                instructors: ['柏豪'],
                note: ''
            }, {
                date: '20221016',
                pitch: '新莊田徑場',
                opponent: { name: '先鋒足球', logo: '先鋒足球' },
                formation: '3-3-1',
                starters: ['GK-善捷', 'RB-皓宇', 'CB-維恩', 'LB-宇正', 'RM-黃衍', 'CM-亮谷', 'LM-昕叡', 'CF-晉丞'],
                subs: [{
                    number: 9,
                    name: '紘豪'
                }, {
                    number: 15,
                    name: '凱泰'
                }, {
                    number: 23,
                    name: '柏燁'
                }],
                subTeam: '大勇士',
                final_score: '10 : 0',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '晉丞',
                    assist: ''
                }, {
                    name: '昕叡',
                    assist: '晉丞'
                }, {
                    name: '昕叡',
                    assist: ''
                }, {
                    name: '宇正',
                    assist: ''
                }, {
                    name: '黃衍',
                    assist: '維恩'
                }, {
                    name: '亮谷',
                    assist: ''
                }, {
                    name: '昕叡',
                    assist: '維恩'
                }, {
                    name: '維恩',
                    assist: 'P'
                }, {
                    name: '昕叡',
                    assist: '亮谷'
                }, {
                    name: '紘豪',
                    assist: '昕叡'
                }],
                goalkeepers: ['善捷', '凱泰'],
                isCleanSheet: true,
                instructors: ['怡萍'],
                note: ''
            }, {
                date: '20221022',
                pitch: '新莊田徑場',
                opponent: { name: '銘傳之星', logo: '銘傳之星' },
                formation: '3-3-1',
                starters: ['GK-善捷', 'RB-晉丞', 'CB-維恩', 'LB-宥融', 'RM-昕叡', 'CM-亮谷', 'LM-黃衍', 'CF-定謙'],
                subs: [{
                    number: 9,
                    name: '紘豪'
                }, {
                    number: 12,
                    name: '皓宇'
                }, {
                    number: 23,
                    name: '柏燁'
                }],
                subTeam: '大勇士',
                final_score: '1 : 0',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '亮谷',
                    assist: ''
                }],
                goalkeepers: ['善捷'],
                isCleanSheet: true,
                instructors: ['家瑋', '柏豪'],
                note: ''
            }]
        }, {
            id: 24,
            year: '2022',
            cupName: '安聯小小世界盃',
            system: '5人制',
            grade: 'U10',
            cover: '2022allianzcup',
            trophy: '臺北區冠軍',
            team: [{
                name: '大勇士',
                members: '晉丞、黃衍、紘豪、皓宇、維恩、亮谷、定謙、宥融、昕叡、宇正'
            }],
            note: '',
            matches: [{
                date: '20221009',
                pitch: '北市大天母校區田徑場',
                opponent: { name: '天母白', logo: '天母國小' },
                formation: '2-0-2',
                starters: ['GK-宥融', 'RB-維恩', 'LB-宇正', 'RF-亮谷', 'LF-黃衍'],
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
                subTeam: '大勇士',
                final_score: '5 : 1',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '維恩',
                    assist: '黃衍'
                }, {
                    name: '晉丞',
                    assist: ''
                }, {
                    name: '宇正',
                    assist: '昕叡'
                }, {
                    name: '宇正',
                    assist: '昕叡'
                }, {
                    name: '定謙',
                    assist: '宇正'
                }],
                goalkeepers: ['宥融'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: ''
            }, {
                date: '20221009',
                pitch: '北市大天母校區田徑場',
                opponent: { name: '百齡國小', logo: 'BLES' },
                formation: '2-0-2',
                starters: ['GK-宥融', 'RB-維恩', 'LB-宇正', 'RF-亮谷', 'LF-黃衍'],
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
                subTeam: '大勇士',
                final_score: '4 : 1',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: 'Own Goal',
                    assist: '維恩'
                }, {
                    name: '晉丞',
                    assist: ''
                }, {
                    name: '定謙',
                    assist: '維恩'
                }, {
                    name: '定謙',
                    assist: '晉丞'
                }],
                goalkeepers: ['宥融', '黃衍'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: ''
            }, {
                date: '20221009',
                pitch: '北市大天母校區田徑場',
                opponent: { name: '長庚綠', logo: '長庚國小' },
                formation: '2-0-2',
                starters: ['GK-宥融', 'RB-維恩', 'LB-宇正', 'RF-亮谷', 'LF-黃衍'],
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
                subTeam: '大勇士',
                final_score: '3 : 0',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '亮谷',
                    assist: '宇正'
                }, {
                    name: '宇正',
                    assist: '定謙'
                }, {
                    name: '維恩',
                    assist: ''
                }],
                goalkeepers: ['宥融', '維恩'],
                isCleanSheet: true,
                instructors: ['柏豪'],
                note: ''
            }, {
                date: '20221009',
                pitch: '北市大天母校區田徑場',
                opponent: { name: '基隆雷鷹', logo: '基隆雷鷹' },
                formation: '2-0-2',
                starters: ['GK-宥融', 'RB-維恩', 'LB-宇正', 'RF-亮谷', 'LF-黃衍'],
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
                subTeam: '大勇士',
                final_score: '4 : 0',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '維恩',
                    assist: ''
                }, {
                    name: '亮谷',
                    assist: '宇正'
                }, {
                    name: '皓宇',
                    assist: '維恩'
                }, {
                    name: '皓宇',
                    assist: '維恩'
                }],
                goalkeepers: ['宥融', '黃衍'],
                isCleanSheet: true,
                instructors: ['柏豪'],
                note: ''
            }, {
                date: '20221224',
                pitch: '臺北田徑場',
                opponent: { name: '進擊的矮人', logo: '協和國小' },
                formation: '2-0-2',
                starters: ['GK-宥融', 'RB-維恩', 'LB-宇正', 'RF-亮谷', 'LF-黃衍'],
                subs: [{
                    number: 3,
                    name: '晉丞'
                }, {
                    number: 27,
                    name: '定謙'
                }, {
                    number: 77,
                    name: '昕叡'
                }],
                subTeam: '大勇士',
                final_score: '2 : 5',
                pso: '',
                wdl: 'L',
                scorers: [{
                    name: '維恩',
                    assist: '黃衍'
                }, {
                    name: '宇正',
                    assist: ''
                }],
                goalkeepers: ['宥融'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: ''
            }, {
                date: '20221224',
                pitch: '臺北田徑場',
                opponent: { name: 'AegonFC', logo: 'AegonFC' },
                formation: '2-0-2',
                starters: ['GK-定謙', 'RB-維恩', 'LB-晉丞', 'RF-宥融', 'LF-黃衍'],
                subs: [{
                    number: 9,
                    name: '紘豪'
                }, {
                    number: 12,
                    name: '皓宇'
                }, {
                    number: 21,
                    name: '亮谷'
                }, {
                    number: 77,
                    name: '昕叡'
                }, {
                    number: 97,
                    name: '宇正'
                }],
                subTeam: '大勇士',
                final_score: '4 : 0',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '黃衍',
                    assist: '宥融'
                }, {
                    name: '維恩',
                    assist: ''
                }, {
                    name: '亮谷',
                    assist: '昕叡'
                }, {
                    name: '宇正',
                    assist: '昕叡'
                }],
                goalkeepers: ['定謙'],
                isCleanSheet: true,
                instructors: ['柏豪'],
                note: ''
            }, {
                date: '20221224',
                pitch: '臺北田徑場',
                opponent: { name: '北埔國小貝貝鷹', logo: '北埔國小' },
                formation: '2-0-2',
                starters: ['GK-宥融', 'RB-維恩', 'LB-宇正', 'RF-亮谷', 'LF-黃衍'],
                subs: [{
                    number: 3,
                    name: '晉丞'
                }, {
                    number: 27,
                    name: '定謙'
                }, {
                    number: 77,
                    name: '昕叡'
                }],
                subTeam: '大勇士',
                final_score: '2 : 2',
                pso: '1 : 0',
                wdl: 'D*',
                scorers: [{
                    name: '宇正',
                    assist: '昕叡'
                }, {
                    name: '維恩',
                    assist: '昕叡'
                }],
                goalkeepers: ['宥融', '定謙'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: 'PSO：維恩○ | 依大會規定加踢 PSO 僅為若需要時決定晉級資格之判斷依據，不影響比賽勝負'
            }]
        }, {
            id: 25,
            year: '2022',
            cupName: 'Yamana 盃',
            system: '8人制',
            grade: 'U10',
            cover: '2022yamahacup',
            trophy: '',
            team: [{
                name: '大勇士',
                members: '晉丞、黃衍、紘豪、善捷、皓宇、凱泰、維恩、亮谷、柏燁、定謙、宥融、昕叡、宇正'
            }],
            note: '',
            matches: [{
                date: '20221119',
                pitch: '迎風足球場',
                opponent: { name: 'ACTaipei-U12', logo: 'ACTaipei' },
                formation: '3-3-1',
                starters: ['GK-宥融', 'RB-宇正', 'CB-維恩', 'LB-紘豪', 'RM-皓宇', 'CM-亮谷', 'LM-黃衍', 'CF-定謙'],
                subs: [{
                    number: 3,
                    name: '晉丞'
                }],
                subTeam: '大勇士',
                final_score: '0 : 0',
                pso: '',
                wdl: 'D',
                scorers: [],
                goalkeepers: ['宥融'],
                isCleanSheet: true,
                instructors: ['柏豪'],
                note: 'MVP-維恩'
            }, {
                date: '20221119',
                pitch: '迎風足球場',
                opponent: { name: '新市國小', logo: '新市國小' },
                formation: '3-3-1',
                starters: ['GK-凱泰', 'RB-宇正', 'CB-維恩', 'LB-宥融', 'RM-皓宇', 'CM-亮谷', 'LM-黃衍', 'CF-定謙'],
                subs: [{
                    number: 3,
                    name: '晉丞'
                }, {
                    number: 23,
                    name: '柏燁'
                }],
                subTeam: '大勇士',
                final_score: '0 : 1',
                pso: '',
                wdl: 'L',
                scorers: [],
                goalkeepers: ['凱泰'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: 'MVP-凱泰'
            }]
        }, {
            id: 26,
            year: '2023',
            cupName: '金兔賀歲盃',
            system: '8人制',
            grade: 'U10',
            cover: '2023rabbitcup',
            trophy: '分組冠軍',
            team: [{
                name: '大勇士',
                members: '晉丞、黃衍、紘豪、善捷、皓宇、邁可、凱泰、維恩、亮谷、柏燁、定謙、宥融、昕叡、宇正'
            }],
            note: '',
            matches: [{
                date: '20230114',
                pitch: '新莊田徑場',
                opponent: { name: 'ACTaipei-U10', logo: 'ACTaipei' },
                formation: '3-3-1',
                starters: ['GK-宥融', 'RB-紘豪', 'CB-維恩', 'LB-宇正', 'RM-定謙', 'CM-皓宇', 'LM-黃衍', 'CF-晉丞'],
                subs: [{
                    number: 77,
                    name: '昕叡'
                }],
                subTeam: '大勇士',
                final_score: '8 : 1',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '晉丞',
                    assist: '維恩'
                }, {
                    name: '定謙',
                    assist: '昕叡'
                }, {
                    name: '維恩',
                    assist: '宇正'
                }, {
                    name: 'Own Goal',
                    assist: '宥融'
                }, {
                    name: '宇正',
                    assist: '宥融'
                }, {
                    name: '維恩',
                    assist: '宥融'
                }, {
                    name: '黃衍',
                    assist: '晉丞'
                }, {
                    name: '黃衍',
                    assist: '宥融'
                }],
                goalkeepers: ['宥融', '定謙'],
                isCleanSheet: false,
                instructors: ['怡萍'],
                note: ''
            }, {
                date: '20230128',
                pitch: '新莊田徑場',
                opponent: { name: '皇家野馬', logo: '皇家野馬' },
                formation: '3-3-1',
                starters: ['GK-凱泰', 'RB-宇正', 'CB-晉丞', 'LB-宥融', 'RM-皓宇', 'CM-亮谷', 'LM-黃衍', 'CF-定謙'],
                subs: [{
                    number: 9,
                    name: '紘豪'
                }, {
                    number: 13,
                    name: '邁可'
                }, {
                    number: 77,
                    name: '昕叡'
                }],
                subTeam: '大勇士',
                final_score: '8 : 0',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '黃衍',
                    assist: ''
                }, {
                    name: '黃衍',
                    assist: '皓宇'
                }, {
                    name: '定謙',
                    assist: '宇正'
                }, {
                    name: '宇正',
                    assist: '皓宇'
                }, {
                    name: '宇正',
                    assist: '邁可'
                }, {
                    name: '宥融',
                    assist: '邁可'
                }, {
                    name: '宇正',
                    assist: ''
                }, {
                    name: '邁可',
                    assist: '黃衍'
                }],
                goalkeepers: ['凱泰', '宥融'],
                isCleanSheet: true,
                instructors: ['柏豪', '家緯'],
                note: ''
            }, {
                date: '20230129',
                pitch: '新莊田徑場',
                opponent: { name: '皇家野馬', logo: '皇家野馬' },
                formation: 'N/A',
                starters: [''],
                subs: [''],
                subTeam: '大勇士',
                final_score: '3 : 0*',
                pso: '',
                wdl: 'W',
                scorers: [],
                goalkeepers: [],
                isCleanSheet: true,
                instructors: [],
                note: '對手皇家野馬因出賽人數不足棄賽，依大會規定裁決志清勇士 3 : 0 勝。'
            }, {
                date: '20230205',
                pitch: '新莊田徑場',
                opponent: { name: 'ACTaipei-U10', logo: 'ACTaipei' },
                formation: '3-3-1',
                starters: ['GK-凱泰', 'RB-紘豪', 'CB-維恩', 'LB-善捷', 'RM-宥融', 'CM-皓宇', 'LM-柏燁', 'CF-定謙'],
                subs: [{
                    number: 3,
                    name: '晉丞'
                }, {
                    number: 7,
                    name: '黃衍'
                }, {
                    number: 13,
                    name: '邁可'
                }, {
                    number: 21,
                    name: '亮谷'
                }, {
                    number: 77,
                    name: '昕叡'
                }, {
                    number: 97,
                    name: '宇正'
                }],
                subTeam: '大勇士',
                final_score: '4 : 2',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '晉丞',
                    assist: ''
                }, {
                    name: '晉丞',
                    assist: '宇正'
                }, {
                    name: '宥融',
                    assist: ''
                }, {
                    name: '宇正',
                    assist: ''
                }],
                goalkeepers: ['凱泰', '宥融'],
                isCleanSheet: false,
                instructors: ['怡萍'],
                note: ''
            }]
        }, {
            id: 27,
            year: '2023',
            cupName: '明道盃',
            system: '5人制',
            grade: 'U10',
            cover: '2023mingdaocup',
            trophy: '',
            team: [{
                name: '大勇士',
                members: '晉丞、黃衍、紘豪、善捷、皓宇、邁可、凱泰、維恩、亮谷、柏燁、定謙、宥融、昕叡、宇正'
            }],
            note: '',
            matches: [{
                date: '20230211',
                pitch: '明道國小體育館',
                opponent: { name: '銘傳國小', logo: '銘傳國小' },
                formation: '2-0-2',
                starters: ['GK-宥融', 'RB-宇正', 'LB-維恩', 'RF-皓宇', 'LF-亮谷'],
                subs: [{
                    number: 7,
                    name: '黃衍'
                }, {
                    number: 9,
                    name: '紘豪'
                }, {
                    number: 10,
                    name: '善捷'
                }, {
                    number: 13,
                    name: '邁可'
                }, {
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
                subTeam: '大勇士',
                final_score: '5 : 2',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '黃衍',
                    assist: '維恩'
                }, {
                    name: '昕叡',
                    assist: '宇正'
                }, {
                    name: '黃衍',
                    assist: ''
                }, {
                    name: '定謙',
                    assist: ''
                }, {
                    name: '柏燁',
                    assist: '定謙'
                }],
                goalkeepers: ['宥融', '凱泰'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: ''
            }, {
                date: '20230211',
                pitch: '明道國小體育館',
                opponent: { name: '明道國小', logo: '明道國小' },
                formation: '2-0-2',
                starters: ['GK-宥融', 'RB-宇正', 'LB-維恩', 'RF-亮谷', 'LF-定謙'],
                subs: [],
                subTeam: '大勇士',
                final_score: '0 : 6',
                pso: '',
                wdl: 'L',
                scorers: [],
                goalkeepers: ['宥融', '定謙'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: ''
            }, {
                date: '20230211',
                pitch: '明道國小體育館',
                opponent: { name: '建安國小', logo: '建安國小' },
                formation: '2-0-2',
                starters: ['GK-宥融', 'RB-宇正', 'LB-維恩', 'RF-皓宇', 'LF-亮谷'],
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
                    number: 13,
                    name: '邁可'
                }, {
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
                subTeam: '大勇士',
                final_score: '4 : 1',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '亮谷',
                    assist: 'p'
                }, {
                    name: '亮谷',
                    assist: '黃衍'
                }, {
                    name: '黃衍',
                    assist: '維恩'
                }, {
                    name: '晉丞',
                    assist: '亮谷'
                }],
                goalkeepers: ['宥融'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: ''
            }, {
                date: '20230212',
                pitch: '明道國小體育館',
                opponent: { name: '銘傳國小', logo: '銘傳國小' },
                formation: '2-0-2',
                starters: ['GK-定謙', 'RB-宇正', 'LB-維恩', 'RF-昕叡', 'LF-亮谷'],
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
                    number: 55,
                    name: '宥融'
                }],
                subTeam: '大勇士',
                final_score: '3 : 4',
                pso: '',
                wdl: 'L',
                scorers: [{
                    name: '皓宇',
                    assist: ''
                }, {
                    name: '皓宇',
                    assist: '維恩'
                }, {
                    name: '宇正',
                    assist: ''
                }],
                goalkeepers: ['定謙', '宥融'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: ''
            }, {
                date: '20230212',
                pitch: '明道國小體育館',
                opponent: { name: '建安國小', logo: '建安國小' },
                formation: '2-0-2',
                starters: ['GK-宥融', 'RB-亮谷', 'LB-維恩', 'RF-皓宇', 'LF-宇正'],
                subs: [{
                    number: 3,
                    name: '晉丞'
                }, {
                    number: 7,
                    name: '黃衍'
                }, {
                    number: 27,
                    name: '定謙'
                }, {
                    number: 77,
                    name: '昕叡'
                }],
                subTeam: '大勇士',
                final_score: '0 : 0',
                pso: '3 : 4',
                wdl: 'L',
                scorers: [],
                goalkeepers: ['宥融'],
                isCleanSheet: true,
                instructors: ['柏豪'],
                note: 'PSO：亮谷○、宇正×、維恩○、黃衍○、宥融×、皓宇×、定謙×'
            }]
        }, {
            id: 28,
            year: '2023',
            cupName: 'Kappa 盃',
            system: '7人制',
            grade: 'U10',
            cover: '2023kappacup',
            trophy: '亞軍',
            team: [{
                name: '大勇士',
                members: '黃衍、紘豪、善捷、皓宇、凱泰、維恩、亮谷、定謙、宥融、宇正'
            }],
            note: '',
            matches: [{
                date: '20230226',
                pitch: '台北田徑場',
                opponent: { name: '新竹足校-紅', logo: '新竹足校' },
                formation: '2-3-1',
                starters: ['GK-凱泰', 'RCB-宇正', 'LCB-維恩', 'RM-宥融', 'CM-亮谷', 'LM-皓宇', 'CF-黃衍'],
                subs: [],
                subTeam: '大勇士',
                final_score: '3 : 0',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '皓宇',
                    assist: ''
                }, {
                    name: '黃衍',
                    assist: ''
                }, {
                    name: '宇正',
                    assist: ''
                }],
                goalkeepers: ['凱泰'],
                isCleanSheet: true,
                instructors: ['冠岳'],
                note: ''
            }, {
                date: '20230226',
                pitch: '台北田徑場',
                opponent: { name: 'Yoder', logo: '有得雙語' },
                formation: '2-3-1',
                starters: ['GK-凱泰', 'RCB-宇正', 'LCB-維恩', 'RM-宥融', 'CM-亮谷', 'LM-皓宇', 'CF-黃衍'],
                subs: [{
                    number: 27,
                    name: '定謙'
                }],
                subTeam: '大勇士',
                final_score: '1 : 1',
                pso: '',
                wdl: 'D',
                scorers: [{
                    name: '黃衍',
                    assist: '宥融'
                }],
                goalkeepers: ['凱泰'],
                isCleanSheet: false,
                instructors: ['冠岳'],
                note: ''
            }, {
                date: '20230226',
                pitch: '台北田徑場',
                opponent: { name: 'A-Star', logo: 'A-Star' },
                formation: '2-3-1',
                starters: ['GK-凱泰', 'RCB-宇正', 'LCB-維恩', 'RM-宥融', 'CM-亮谷', 'LM-皓宇', 'CF-黃衍'],
                subs: [],
                subTeam: '大勇士',
                final_score: '5 : 0',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '宥融',
                    assist: ''
                }, {
                    name: '亮谷',
                    assist: 'P'
                }, {
                    name: '黃衍',
                    assist: '宥融'
                }, {
                    name: 'Own Goal',
                    assist: ''
                }, {
                    name: '黃衍',
                    assist: ''
                }],
                goalkeepers: ['凱泰'],
                isCleanSheet: true,
                instructors: ['冠岳'],
                note: ''
            }, {
                date: '20230226',
                pitch: '台北田徑場',
                opponent: { name: '北新國小', logo: '北新國小' },
                formation: '2-3-1',
                starters: ['GK-凱泰', 'RCB-亮谷', 'LCB-維恩', 'RM-宥融', 'CM-宇正', 'LM-皓宇', 'CF-黃衍'],
                subs: [],
                subTeam: '大勇士',
                final_score: '4 : 0',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '宥融',
                    assist: ''
                }, {
                    name: '皓宇',
                    assist: ''
                }, {
                    name: '宥融',
                    assist: '維恩'
                }, {
                    name: '定謙',
                    assist: '維恩'
                }],
                goalkeepers: ['凱泰', '善捷'],
                isCleanSheet: true,
                instructors: ['冠岳'],
                note: ''
            }, {
                date: '20230226',
                pitch: '台北田徑場',
                opponent: { name: 'MFA-U10', logo: 'MFA' },
                formation: '2-3-1',
                starters: ['GK-凱泰', 'RCB-宇正', 'LCB-維恩', 'RM-宥融', 'CM-亮谷', 'LM-皓宇', 'CF-黃衍'],
                subs: [],
                subTeam: '大勇士',
                final_score: '2 : 2',
                pso: '0 : 2',
                wdl: 'L',
                scorers: [{
                    name: '宥融',
                    assist: '黃衍'
                }, {
                    name: '黃衍',
                    assist: ''
                }],
                goalkeepers: ['凱泰'],
                isCleanSheet: false,
                instructors: ['冠岳'],
                note: 'PSO：維恩×、亮谷×'
            }]
        }, {
            id: 29,
            year: '2023',
            cupName: '新北市少年八人制春季聯賽',
            system: '8人制',
            grade: 'U10',
            cover: '2023eightmanspring',
            trophy: '',
            team: [{
                name: '大勇士',
                members: '晉丞、黃衍、紘豪、善捷、皓宇、邁可、凱泰、維恩、瑀東、亮谷、柏燁、定謙、宥融、昕叡、宇正'
            }],
            note: `<a class="text-success" target="_blank" href="./img/table/2023eightmanspring.jpg"><i class="fa fa-table text-success" aria-hidden="true"></i> League Table</a>`,
            matches: [{
                date: '20230304',
                pitch: '新莊田徑場',
                opponent: { name: 'ACTaipei-U10', logo: 'ACTaipei' },
                formation: '3-3-1',
                starters: ['GK-善捷', 'RB-宇正', 'CB-維恩', 'LB-晉丞', 'RM-宥融', 'CM-皓宇', 'LM-黃衍', 'CF-定謙'],
                subs: [{
                    number: 13,
                    name: '邁可'
                }, {
                    number: 20,
                    name: '瑀東'
                }, {
                    number: 23,
                    name: '柏燁'
                }, {
                    number: 77,
                    name: '昕叡'
                }],
                subTeam: '大勇士',
                final_score: '5 : 1',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '黃衍',
                    assist: ''
                }, {
                    name: '黃衍',
                    assist: '宇正'
                }, {
                    name: '宥融',
                    assist: ''
                }, {
                    name: '黃衍',
                    assist: '定謙'
                }, {
                    name: '宇正',
                    assist: ''
                }],
                goalkeepers: ['善捷'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: ''
            }, {
                date: '20230416',
                pitch: '新莊田徑場',
                opponent: { name: '三石訓練', logo: '三石訓練' },
                formation: '3-3-1',
                starters: ['GK-凱泰', 'RB-善捷', 'CB-亮谷', 'LB-宇正', 'RM-宥融', 'CM-維恩', 'LM-黃衍', 'CF-皓宇'],
                subs: [{
                    number: 3,
                    name: '晉丞'
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
                subTeam: '大勇士',
                final_score: '1 : 5',
                pso: '',
                wdl: 'L',
                scorers: [{
                    name: '宇正',
                    assist: '善捷'
                }],
                goalkeepers: ['凱泰', '宥融'],
                isCleanSheet: false,
                instructors: ['怡萍'],
                note: '',
                bestSubs: ''
            }, {
                date: '20230513',
                pitch: '新莊田徑場',
                opponent: { name: '樂活鯊', logo: '樂活' },
                formation: '3-3-1',
                starters: ['GK-宥融', 'RB-紘豪', 'CB-宇正', 'LB-晉丞', 'RM-維恩', 'CM-亮谷', 'LM-黃衍', 'CF-定謙'],
                subs: [{
                    number: 10,
                    name: '善捷'
                }, {
                    number: 13,
                    name: '邁可'
                }, {
                    number: 15,
                    name: '凱泰'
                }, {
                    number: 23,
                    name: '柏燁'
                }, {
                    number: 77,
                    name: '昕叡'
                }],
                subTeam: '大勇士',
                final_score: '5 : 0',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '維恩',
                    assist: '定謙'
                }, {
                    name: '維恩',
                    assist: ''
                }, {
                    name: '維恩',
                    assist: '定謙'
                }, {
                    name: '維恩',
                    assist: '黃衍'
                }, {
                    name: '維恩',
                    assist: '黃衍'
                }],
                goalkeepers: ['宥融', '凱泰'],
                isCleanSheet: true,
                instructors: ['柏豪'],
                note: '',
                bestSubs: '善捷'
            }, {
                date: '20230514',
                pitch: '新莊田徑場',
                opponent: { name: 'SLFC', logo: 'SLFC' },
                formation: '3-3-1',
                starters: ['GK-定謙', 'RB-宥融', 'CB-維恩', 'LB-宇正', 'RM-黃衍', 'CM-亮谷', 'LM-皓宇', 'CF-晉丞'],
                subs: [{
                    number: 9,
                    name: '紘豪'
                }, {
                    number: 10,
                    name: '善捷'
                }, {
                    number: 13,
                    name: '邁可'
                }, {
                    number: 15,
                    name: '凱泰'
                }, {
                    number: 23,
                    name: '柏燁'
                }, {
                    number: 77,
                    name: '昕叡'
                }],
                subTeam: '大勇士',
                final_score: '0 : 8',
                pso: '',
                wdl: 'L',
                scorers: [],
                goalkeepers: ['定謙', '凱泰'],
                isCleanSheet: false,
                instructors: ['怡萍'],
                note: ''
            }, {
                date: '20230527',
                pitch: '新莊田徑場',
                opponent: { name: 'PLCFA', logo: 'PLCFA' },
                formation: '3-3-1',
                starters: ['GK-昕叡', 'RB-宥融', 'CB-維恩', 'LB-宇正', 'RM-定謙', 'CM-亮谷', 'LM-皓宇', 'CF-晉丞'],
                subs: [{
                    number: 7,
                    name: '黃衍'
                }, {
                    number: 9,
                    name: '紘豪'
                }, {
                    number: 10,
                    name: '善捷'
                }, {
                    number: 13,
                    name: '邁可'
                }, {
                    number: 20,
                    name: '瑀東'
                }, {
                    number: 23,
                    name: '柏燁'
                }],
                subTeam: '大勇士',
                final_score: '2 : 2',
                pso: '',
                wdl: 'D',
                scorers: [{
                    name: '定謙',
                    assist: '晉丞'
                }, {
                    name: '宥融',
                    assist: '亮谷'
                }],
                goalkeepers: ['昕叡'],
                isCleanSheet: false,
                instructors: ['冠岳'],
                note: '',
                bestSubs: '紘豪'
            }]
        }, {
            id: 30,
            year: '2023',
            cupName: '臺北市教育盃',
            system: '5人制',
            grade: 'U10',
            cover: '2023educationcup',
            trophy: '',
            team: [{
                name: '勇士',
                members: '晉丞、黃衍、紘豪、善捷、皓宇、凱泰、維恩、亮谷、柏燁、定謙、宥融、昕叡、宇正、宸瑜*'
            }],
            note: '',
            matches: [{
                date: '20230309',
                pitch: '成德國小',
                opponent: { name: '幸安國小', logo: '幸安國小' },
                formation: '2-0-2',
                starters: ['GK-宥融', 'RB-維恩', 'LB-宇正', 'RF-皓宇', 'LF-亮谷'],
                subs: [{
                    number: 7,
                    name: '黃衍'
                }],
                subTeam: '國小',
                final_score: '2 : 2',
                pso: '1 : 2',
                wdl: 'L',
                scorers: [{
                    name: '黃衍',
                    assist: '維恩'
                }, {
                    name: '宇正',
                    assist: ''
                }],
                goalkeepers: ['宥融'],
                isCleanSheet: false,
                instructors: ['怡萍'],
                note: 'PSO： 維恩○、 宇正×'
            }, {
                date: '20230313',
                pitch: '成德國小',
                opponent: { name: '五常國小', logo: '五常國小' },
                formation: '1-2-1',
                starters: ['GK-凱泰', 'CB-晉丞', 'RM-昕叡', 'LM-善捷', 'CF-定謙'],
                subs: [{
                    number: 7,
                    name: '黃衍'
                }, {
                    number: 9,
                    name: '紘豪'
                }, {
                    number: 12,
                    name: '皓宇'
                }, {
                    number: 18,
                    name: '維恩'
                }, {
                    number: 21,
                    name: '亮谷'
                }, {
                    number: 23,
                    name: '柏燁'
                }, {
                    number: 55,
                    name: '宥融'
                }, {
                    number: 97,
                    name: '宇正'
                }, {
                    number: 6,
                    name: '宸瑜*'
                }],
                subTeam: '國小',
                final_score: '4 : 0',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '昕叡',
                    assist: '宸瑜*'
                }, {
                    name: '昕叡',
                    assist: ''
                }, {
                    name: '亮谷',
                    assist: ''
                }, {
                    name: '宥融',
                    assist: 'P'
                }],
                goalkeepers: ['凱泰'],
                isCleanSheet: true,
                instructors: ['柏豪'],
                note: '*學弟'
            }]
        }, {
            id: 31,
            year: '2023',
            cupName: '黃蜂爭霸盃（上）',
            system: '5人制',
            grade: 'U10',
            cover: '2023bumblebeecup',
            trophy: '2023（上）總冠軍',
            team: [{
                name: '大勇士',
                members: '晉丞、黃衍、紘豪、皓宇、凱泰、維恩、宥融、昕叡、宇正'
            }],
            note: '',
            matches: [{
                date: '20230319',
                pitch: '蘆堤足球場',
                opponent: { name: 'Torero', logo: 'Torero' },
                formation: '2-0-2',
                starters: ['GK-凱泰', 'RB-維恩', 'LB-宇正', 'RF-宥融', 'LF-皓宇'],
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
                    number: 77,
                    name: '昕叡'
                }],
                subTeam: '勇士',
                final_score: '3 : 0',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '皓宇',
                    assist: '維恩'
                }, {
                    name: '維恩',
                    assist: ''
                }, {
                    name: '黃衍',
                    assist: '皓宇'
                }],
                goalkeepers: ['凱泰'],
                isCleanSheet: true,
                instructors: ['冠岳'],
                note: '',
                bestSubs: ''
            }, {
                date: '20230319',
                pitch: '蘆堤足球場',
                opponent: { name: '光復Fight', logo: '光復國小' },
                formation: '1-2-1',
                starters: ['GK-凱泰', 'CB-維恩', 'RM-皓宇', 'LM-宇正', 'CF-黃衍'],
                subs: [{
                    number: 3,
                    name: '晉丞'
                }, {
                    number: 55,
                    name: '宥融'
                }, {
                    number: 77,
                    name: '昕叡'
                }],
                subTeam: '勇士',
                final_score: '2 : 1',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '皓宇',
                    assist: '黃衍'
                }, {
                    name: 'Own Goal',
                    assist: '維恩'
                }],
                goalkeepers: ['凱泰', '宥融'],
                isCleanSheet: false,
                instructors: ['冠岳'],
                note: '',
                bestSubs: ''
            }, {
                date: '20230618',
                pitch: '汐止運動公園',
                opponent: { name: '永士FC-U10藍', logo: '永士FC' },
                formation: '1-2-1',
                starters: ['GK-凱泰', 'CB-維恩', 'RM-皓宇', 'LM-宇正', 'CF-黃衍'],
                subs: [{
                    number: 3,
                    name: '晉丞'
                }, {
                    number: 9,
                    name: '紘豪'
                }, {
                    number: 55,
                    name: '宥融'
                }, {
                    number: 77,
                    name: '昕叡'
                }],
                subTeam: '勇士',
                final_score: '4 : 0',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '宇正',
                    assist: ''
                }, {
                    name: '皓宇',
                    assist: ''
                }, {
                    name: '宇正',
                    assist: '皓宇'
                }, {
                    name: '維恩',
                    assist: ''
                }],
                goalkeepers: ['凱泰'],
                isCleanSheet: true,
                instructors: ['冠岳'],
                note: '',
                bestSubs: '紘豪'
            }, {
                date: '20230618',
                pitch: '汐止運動公園',
                opponent: { name: '光復Fight', logo: '光復國小' },
                formation: '1-2-1',
                starters: ['GK-凱泰', 'CB-維恩', 'RM-宥融', 'LM-宇正', 'CF-晉丞'],
                subs: [{
                    number: 7,
                    name: '黃衍'
                }, {
                    number: 12,
                    name: '皓宇'
                }],
                subTeam: '勇士',
                final_score: '0 : 0',
                pso: '',
                wdl: 'D',
                scorers: [],
                goalkeepers: ['凱泰'],
                isCleanSheet: true,
                instructors: ['冠岳'],
                note: '',
                bestSubs: '黃衍'
            }, {
                date: '20230618',
                pitch: '汐止運動公園',
                opponent: { name: '幸安閃電', logo: '幸安國小' },
                formation: '1-2-1',
                starters: ['GK-凱泰', 'CB-維恩', 'RM-皓宇', 'LM-宇正', 'CF-黃衍'],
                subs: [{
                    number: 3,
                    name: '晉丞'
                }, {
                    number: 9,
                    name: '紘豪'
                }, {
                    number: 55,
                    name: '宥融'
                }, {
                    number: 77,
                    name: '昕叡'
                }],
                subTeam: '勇士',
                final_score: '5 : 0',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '宇正',
                    assist: ''
                }, {
                    name: '宇正',
                    assist: ''
                }, {
                    name: '宇正',
                    assist: '維恩'
                }, {
                    name: '宇正',
                    assist: '維恩'
                }, {
                    name: '皓宇',
                    assist: '宇正'
                }],
                goalkeepers: ['凱泰'],
                isCleanSheet: false,
                instructors: ['冠岳'],
                note: '',
                bestSubs: '宥融'
            }, {
                date: '20230618',
                pitch: '汐止運動公園',
                opponent: { name: '熱血足球獵豹', logo: '熱血足球' },
                formation: '1-2-1',
                starters: ['GK-凱泰', 'CB-維恩', 'RM-皓宇', 'LM-宇正', 'CF-黃衍'],
                subs: [{
                    number: 3,
                    name: '晉丞'
                }, {
                    number: 55,
                    name: '宥融'
                }],
                subTeam: '勇士',
                final_score: '2 : 1',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '維恩',
                    assist: ''
                }, {
                    name: '維恩',
                    assist: 'p'
                }],
                goalkeepers: ['凱泰'],
                isCleanSheet: false,
                instructors: ['冠岳'],
                note: '',
                bestSubs: '晉丞'
            }, {
                date: '20230618',
                pitch: '汐止運動公園',
                opponent: { name: '永士FC-U10橘', logo: '永士FC' },
                formation: '2-0-2',
                starters: ['GK-凱泰', 'RB-晉丞', 'LB-維恩', 'RF-黃衍', 'LF-宇正'],
                subs: [{
                    number: 12,
                    name: '皓宇'
                }, {
                    number: 55,
                    name: '宥融'
                }],
                subTeam: '勇士',
                final_score: '1 : 1',
                pso: '5 : 3',
                wdl: 'W',
                scorers: [{
                    name: '晉丞',
                    assist: ''
                }],
                goalkeepers: ['凱泰'],
                isCleanSheet: false,
                instructors: ['冠岳'],
                note: 'PSO：維恩○、宇正○、黃衍○、晉丞○、宥融○',
                bestSubs: '皓宇'
            }, {
                date: '20230618',
                pitch: '汐止運動公園',
                opponent: { name: '新埔國小', logo: '新埔國小' },
                formation: '2-0-2',
                starters: ['GK-凱泰', 'RB-維恩', 'LB-晉丞', 'RF-黃衍', 'LF-宇正'],
                subs: [{
                    number: 12,
                    name: '皓宇'
                }, {
                    number: 55,
                    name: '宥融'
                }],
                subTeam: '勇士',
                final_score: '2 : 1',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '維恩',
                    assist: '黃衍'
                }, {
                    name: '宥融',
                    assist: ''
                }],
                goalkeepers: ['凱泰'],
                isCleanSheet: false,
                instructors: ['冠岳'],
                note: '',
                bestSubs: '皓宇'
            }]
        }, {
            id: 32,
            year: '2023',
            cupName: '春季大安盃',
            system: '5人制',
            grade: 'U10',
            cover: '2023daanspringcup',
            trophy: '季軍',
            team: [{
                name: '小勇士',
                members: '紘豪、邁可、凱泰、瑀東、凱碩*、宸瑜*、安璞*、浚恩*、宸宇*、昀宸*、羿翔*'
            }],
            note: '',
            matches: [{
                date: '20230408',
                pitch: '華中足球場',
                opponent: { name: 'Lion', logo: 'Lion' },
                formation: '3-0-1',
                starters: ['GK-瑀東', 'RB-昀宸*', 'CB-邁可', 'LB-羿翔*', 'CF-宸瑜*'],
                subs: [{
                    number: 5,
                    name: '凱碩*'
                }, {
                    number: 14,
                    name: '浚恩*'
                }],
                subTeam: '小勇士',
                final_score: '3 : 1',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '昀宸*',
                    assist: '邁可'
                }, {
                    name: '昀宸*',
                    assist: '邁可'
                }, {
                    name: '宸瑜*',
                    assist: ''
                }],
                goalkeepers: ['瑀東', '羿翔*'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: '* 學弟'
            }, {
                date: '20230429',
                pitch: '華中足球場',
                opponent: { name: '磐石U10', logo: '磐石' },
                formation: '2-0-2',
                starters: ['GK-凱泰', 'RB-紘豪', 'LB-邁可', 'RF-昀宸*', 'LF-宸瑜*'],
                subs: [{
                    number: 14,
                    name: '浚恩*'
                }, {
                    number: 20,
                    name: '瑀東'
                }, {
                    number: 25,
                    name: '宸宇*'
                }, {
                    number: 28,
                    name: '羿翔*'
                }],
                subTeam: '小勇士',
                final_score: '1 : 4',
                pso: '',
                wdl: 'L',
                scorers: [{
                    name: '昀宸*',
                    assist: '宸瑜*'
                }],
                goalkeepers: ['凱泰'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: '* 學弟'
            }, {
                date: '20230527',
                pitch: '華中足球場',
                opponent: { name: 'MJKids', logo: '木柵國小' },
                formation: '3-0-1',
                starters: ['GK-凱泰', 'RB-昀宸*', 'CB-紘豪', 'LB-邁可', 'CF-宸瑜*'],
                subs: [{
                    number: 20,
                    name: '瑀東'
                }, {
                    number: 28,
                    name: '羿翔*'
                }],
                subTeam: '小勇士',
                final_score: '4 : 2',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '邁可',
                    assist: ''
                }, {
                    name: '宸瑜*',
                    assist: '邁可'
                }, {
                    name: '宸瑜*',
                    assist: ''
                }, {
                    name: '昀宸*',
                    assist: ''
                }],
                goalkeepers: ['凱泰'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: '* 學弟'
            }, {
                date: '20230603',
                pitch: '華中足球場',
                opponent: { name: '熱血足球Fighting', logo: '熱血足球' },
                formation: '2-0-2',
                starters: ['GK-凱泰', 'RB-紘豪', 'LB-邁可', 'RF-昀宸*', 'LF-宸瑜*'],
                subs: [{
                    number: 14,
                    name: '浚恩*'
                }, {
                    number: 20,
                    name: '瑀東'
                }, {
                    number: 28,
                    name: '羿翔*'
                }],
                subTeam: '小勇士',
                final_score: '0 : 2',
                pso: '',
                wdl: 'L',
                scorers: [],
                goalkeepers: ['凱泰'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: '* 學弟'
            }, {
                date: '20230603',
                pitch: '華中足球場',
                opponent: { name: '磐石U10', logo: '磐石' },
                formation: '2-0-2',
                starters: ['GK-凱泰', 'RB-紘豪', 'LB-邁可', 'RF-羿翔*', 'LF-宸瑜*'],
                subs: [{
                    number: 20,
                    name: '瑀東'
                }, {
                    number: 26,
                    name: '昀宸*'
                }],
                subTeam: '小勇士',
                final_score: '2 : 1',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '邁可',
                    assist: ''
                }, {
                    name: '宸瑜*',
                    assist: ''
                }],
                goalkeepers: ['凱泰'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: '* 學弟'
            }]
        }, {
            id: 33,
            year: '2023',
            cupName: '臺北市五人制足球聯賽',
            system: '5人制',
            grade: 'U10',
            cover: '2023tpefivemanleague',
            trophy: '',
            team: [{
                name: '勇士',
                members: '晉丞、黃衍、善捷、皓宇、維恩、亮谷、柏燁、定謙、宥融、昕叡、宇正'
            }],
            note: '',
            matches: [{
                date: '20230409',
                pitch: '明道國小',
                opponent: { name: 'SLFC', logo: 'SLFC' },
                formation: '1-2-1',
                starters: ['GK-定謙', 'CB-維恩*', 'RM-宇正', 'LM-亮谷', 'CF-黃衍'],
                subs: [{
                    number: 12,
                    name: '皓宇'
                }, {
                    number: 55,
                    name: '宥融'
                }, {
                    number: 77,
                    name: '昕叡'
                }],
                subTeam: '勇士',
                final_score: '6 : 5',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '宇正',
                    assist: ''
                }, {
                    name: '亮谷',
                    assist: '皓宇'
                }, {
                    name: '亮谷',
                    assist: ''
                }, {
                    name: '黃衍',
                    assist: '亮谷'
                }, {
                    name: '維恩',
                    assist: '宇正'
                }, {
                    name: '宇正',
                    assist: '宥融'
                }],
                goalkeepers: ['定謙'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: '',
                bestSubs: '昕叡'
            }, {
                date: '20230409',
                pitch: '明道國小',
                opponent: { name: '立農戰將', logo: '立農戰將' },
                formation: '1-2-1',
                starters: ['GK-定謙', 'CB-維恩*', 'RM-宥融', 'LM-亮谷', 'CF-宇正'],
                subs: [{
                    number: 3,
                    name: '晉丞'
                }, {
                    number: 7,
                    name: '黃衍'
                }, {
                    number: 10,
                    name: '善捷'
                }, {
                    number: 12,
                    name: '皓宇'
                }, {
                    number: 23,
                    name: '柏燁'
                }, {
                    number: 77,
                    name: '昕叡'
                }],
                subTeam: '勇士',
                final_score: '11 : 1',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '宥融',
                    assist: '宇正'
                }, {
                    name: '維恩',
                    assist: '宥融'
                }, {
                    name: '昕叡',
                    assist: '宇正'
                }, {
                    name: '維恩',
                    assist: '亮谷'
                }, {
                    name: '維恩',
                    assist: '黃衍'
                }, {
                    name: '善捷',
                    assist: '晉丞'
                }, {
                    name: '宥融',
                    assist: '亮谷'
                }, {
                    name: '亮谷',
                    assist: ''
                }, {
                    name: '定謙',
                    assist: ''
                }, {
                    name: '宇正',
                    assist: '黃衍'
                }, {
                    name: '宇正',
                    assist: ''
                }],
                goalkeepers: ['定謙', '昕叡'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: '',
                bestSubs: '善捷'
            }, {
                date: '20230423',
                pitch: '明道國小',
                opponent: { name: 'BSC', logo: 'default' },
                formation: '1-2-1',
                starters: ['GK-定謙', 'CB-維恩*', 'RM-宥融', 'LM-亮谷', 'CF-宇正'],
                subs: [{
                    number: 3,
                    name: '晉丞'
                }, {
                    number: 7,
                    name: '黃衍'
                }, {
                    number: 12,
                    name: '皓宇'
                }, {
                    number: 23,
                    name: '柏燁'
                }, {
                    number: 77,
                    name: '昕叡'
                }],
                subTeam: '勇士',
                final_score: '13 : 2',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '宥融',
                    assist: '黃衍'
                }, {
                    name: '宇正',
                    assist: ''
                }, {
                    name: '黃衍',
                    assist: ''
                }, {
                    name: '黃衍',
                    assist: ''
                }, {
                    name: '宇正',
                    assist: '黃衍'
                }, {
                    name: '皓宇',
                    assist: ''
                }, {
                    name: 'Own Goal',
                    assist: '皓宇'
                }, {
                    name: '皓宇',
                    assist: ''
                }, {
                    name: '亮谷',
                    assist: ''
                }, {
                    name: '晉丞',
                    assist: ''
                }, {
                    name: '昕叡',
                    assist: ''
                }, {
                    name: '定謙',
                    assist: '晉丞'
                }, {
                    name: '昕叡',
                    assist: ''
                }],
                goalkeepers: ['定謙', '宥融'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: '',
                bestSubs: '晉丞'
            }, {
                date: '20230423',
                pitch: '明道國小',
                opponent: { name: '明道國小', logo: '明道國小' },
                formation: '1-2-1',
                starters: ['GK-定謙', 'CB-維恩*', 'RM-宇正', 'LM-宥融', 'CF-黃衍'],
                subs: [{
                    number: 12,
                    name: '皓宇'
                }, {
                    number: 21,
                    name: '亮谷'
                }],
                subTeam: '勇士',
                final_score: '2 : 6',
                pso: '',
                wdl: 'L',
                scorers: [{
                    name: '黃衍',
                    assist: ''
                }, {
                    name: '維恩',
                    assist: ''
                }],
                goalkeepers: ['定謙', '宥融'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: '',
                bestSubs: '昕叡'
            }]
        }, {
            id: 34,
            year: '2023',
            cupName: '安聯小小世界盃',
            system: '5人制',
            grade: 'U10',
            cover: '2023allianzcup',
            trophy: '',
            team: [{
                name: '大勇士',
                members: '晉丞、黃衍、善捷、皓宇、維恩、亮谷、柏燁、定謙、宥融、昕叡、宇正'
            }],
            note: '',
            matches: [{
                date: '20230603',
                pitch: '華僑高中',
                opponent: { name: '小炫風U10', logo: '中正炫風' },
                formation: 'Square（2-0-2）',
                starters: ['GK-善捷', 'RB-維恩', 'LB-亮谷', 'RF-皓宇', 'LF-宇正'],
                subs: [{
                    number: 3,
                    name: '晉丞'
                }, {
                    number: 7,
                    name: '黃衍'
                }, {
                    number: 23,
                    name: '柏燁'
                }, {
                    number: 27,
                    name: '定謙'
                }, {
                    number: 55,
                    name: '宥融'
                }, {
                    number: 77,
                    name: '昕叡'
                }],
                subTeam: '大勇士',
                final_score: '4 : 0',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '晉丞',
                    assist: '亮谷'
                }, {
                    name: '宇正',
                    assist: '亮谷'
                }, {
                    name: '宇正',
                    assist: ''
                }, {
                    name: '定謙',
                    assist: '宥融'
                }],
                goalkeepers: ['善捷', '宇正'],
                isCleanSheet: true,
                instructors: ['怡萍'],
                note: '',
                bestSubs: '晉丞'
            }, {
                date: '20230603',
                pitch: '華僑高中',
                opponent: { name: 'TFA皇馬', logo: 'TFA' },
                formation: 'Square（2-0-2）',
                starters: ['GK-定謙', 'RB-維恩', 'LB-亮谷', 'RF-黃衍', 'LF-宇正'],
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
                    number: 55,
                    name: '宥融'
                }, {
                    number: 77,
                    name: '昕叡'
                }],
                subTeam: '大勇士',
                final_score: '2 : 7',
                pso: '',
                wdl: 'L',
                scorers: [{
                    name: '宇正',
                    assist: ''
                }, {
                    name: '昕叡',
                    assist: '維恩'
                }],
                goalkeepers: ['定謙'],
                isCleanSheet: false,
                instructors: ['怡萍'],
                note: '',
                bestSubs: '昕叡'
            }, {
                date: '20230603',
                pitch: '華僑高中',
                opponent: { name: '雙峰樂活', logo: '雙峰國小' },
                formation: 'Square（2-0-2）',
                starters: ['GK-昕叡', 'RB-宥融', 'LB-柏燁', 'RF-定謙', 'LF-善捷'],
                subs: [{
                    number: 3,
                    name: '晉丞'
                }, {
                    number: 7,
                    name: '黃衍'
                }, {
                    number: 12,
                    name: '皓宇'
                }, {
                    number: 18,
                    name: '維恩'
                }, {
                    number: 21,
                    name: '亮谷'
                }, {
                    number: 97,
                    name: '宇正'
                }],
                subTeam: '大勇士',
                final_score: '3 : 2',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '晉丞',
                    assist: ''
                }, {
                    name: '宇正',
                    assist: '維恩'
                }, {
                    name: '宇正',
                    assist: ''
                }],
                goalkeepers: ['昕叡'],
                isCleanSheet: false,
                instructors: ['怡萍'],
                note: '',
                bestSubs: '宇正'
            }]
        }, {
            id: 35,
            year: '2023',
            cupName: '豐米全國少年盃',
            system: '8人制',
            grade: 'U10',
            cover: '2023youthcup',
            trophy: '',
            team: [{
                name: '勇士',
                members: '晉丞、黃衍、紘豪、善捷、皓宇、邁可、凱泰、維恩、亮谷、柏燁、定謙、宥融、昕叡、宇正'
            }],
            note: '',
            matches: [{
                date: '20230622',
                pitch: '臺灣大學竹北校區足球場',
                opponent: { name: '小不老FC', logo: '小不老FC' },
                formation: '3-3-1',
                starters: ['GK-宥融', 'RB-宇正', 'CB-維恩', 'LB-紘豪', 'RM-皓宇', 'CM-亮谷', 'LM-黃衍', 'CF-晉丞'],
                subs: [{
                    number: 13,
                    name: '邁可'
                }, {
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
                subTeam: '勇士',
                final_score: '4 : 1',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '宇正',
                    assist: ''
                }, {
                    name: '維恩',
                    assist: ''
                }, {
                    name: '晉丞',
                    assist: '宥融'
                }, {
                    name: '黃衍',
                    assist: '亮谷'
                }],
                goalkeepers: ['宥融', '定謙', '凱泰'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: '',
                bestSubs: '柏燁'
            }, {
                date: '20230623',
                pitch: '新竹縣第二運動場',
                opponent: { name: '銀河射手', logo: '銀河射手' },
                formation: '3-3-1',
                starters: ['GK-宥融', 'RB-宇正', 'CB-維恩', 'LB-晉丞', 'RM-皓宇', 'CM-亮谷', 'LM-黃衍', 'CF-定謙'],
                subs: [{
                    number: 9,
                    name: '紘豪'
                }],
                subTeam: '勇士',
                final_score: '1 : 4',
                pso: '',
                wdl: 'L',
                scorers: [{
                    name: '宥融',
                    assist: '黃衍'
                }],
                goalkeepers: ['宥融', '定謙', '凱泰'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: '',
                bestSubs: '紘豪'
            }]
        }, {
            id: 36,
            year: '2023',
            cupName: '臺中港盃國際足球邀請賽',
            system: '8人制',
            grade: 'U10',
            cover: '2023harborcup',
            trophy: '',
            team: [{
                name: '勇士',
                members: '晉丞、黃衍、紘豪、善捷、皓宇、邁可、凱泰、維恩、瑀東、亮谷、柏燁、定謙、宥融、昕叡、宇正'
            }],
            note: '',
            matches: [{
                date: '20230701',
                pitch: '梧棲中正田徑場',
                opponent: { name: '忠孝迅猛龍', logo: '台中忠孝' },
                formation: '3-3-1',
                starters: ['GK-凱泰', 'RB-宇正', 'CB-維恩', 'LB-晉丞', 'RM-宥融', 'CM-亮谷', 'LM-黃衍', 'CF-皓宇'],
                subs: [{
                    number: 9,
                    name: '紘豪'
                }, {
                    number: 27,
                    name: '定謙'
                }, {
                    number: 77,
                    name: '昕叡'
                }],
                subTeam: '勇士',
                final_score: '0 : 2',
                pso: '',
                wdl: 'L',
                scorers: [],
                goalkeepers: ['凱泰'],
                isCleanSheet: false,
                instructors: ['凱迪'],
                note: '',
                bestSubs: '紘豪'
            }, {
                date: '20230701',
                pitch: '梧棲中正田徑場',
                opponent: { name: '越南BlueSky', logo: '越南BlueSky' },
                formation: '3-3-1',
                starters: ['GK-宥融', 'RB-宇正', 'CB-維恩', 'LB-晉丞', 'RM-昕叡', 'CM-皓宇', 'LM-黃衍', 'CF-定謙'],
                subs: [{
                    number: 10,
                    name: '善捷'
                }, {
                    number: 13,
                    name: '邁可'
                }, {
                    number: 20,
                    name: '瑀東'
                }],
                subTeam: '勇士',
                final_score: '0 : 3',
                pso: '',
                wdl: 'L',
                scorers: [],
                goalkeepers: ['宥融', '黃衍'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: '',
                bestSubs: ''
            }, {
                date: '20230701',
                pitch: '梧棲中正田徑場',
                opponent: { name: '惠文橘子', logo: '惠文國小' },
                formation: '3-3-1',
                starters: ['GK-凱泰', 'RB-宇正', 'CB-維恩', 'LB-紘豪', 'RM-宥融', 'CM-黃衍', 'LM-昕叡', 'CF-晉丞'],
                subs: [{
                    number: 10,
                    name: '善捷'
                }, {
                    number: 13,
                    name: '邁可'
                }, {
                    number: 15,
                    name: '凱泰'
                }, {
                    number: 20,
                    name: '瑀東'
                }, {
                    number: 23,
                    name: '柏燁'
                }, {
                    number: 27,
                    name: '定謙'
                }],
                subTeam: '勇士',
                final_score: '6 : 1',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '昕叡',
                    assist: '宥融'
                }, {
                    name: '宥融',
                    assist: '維恩'
                }, {
                    name: '宥融',
                    assist: '維恩'
                }, {
                    name: '宥融',
                    assist: '宇正'
                }, {
                    name: '維恩',
                    assist: ''
                }, {
                    name: '宇正',
                    assist: ''
                }],
                goalkeepers: ['凱泰', '昕叡'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: '',
                bestSubs: '邁可'
            }, {
                date: '20230701',
                pitch: '梧棲中正田徑場',
                opponent: { name: '新北銀河', logo: '新北銀河' },
                formation: '3-3-1',
                starters: ['GK-凱泰', 'RB-宇正', 'CB-維恩', 'LB-紘豪', 'RM-宥融', 'CM-黃衍', 'LM-昕叡', 'CF-晉丞'],
                subs: [{
                    number: 10,
                    name: '善捷'
                }, {
                    number: 12,
                    name: '皓宇'
                }, {
                    number: 13,
                    name: '邁可'
                }, {
                    number: 20,
                    name: '瑀東'
                }, {
                    number: 23,
                    name: '柏燁'
                }, {
                    number: 27,
                    name: '定謙'
                }],
                subTeam: '勇士',
                final_score: '4 : 0',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '昕叡',
                    assist: '宥融'
                }, {
                    name: '宥融',
                    assist: '維恩'
                }],
                goalkeepers: ['凱泰'],
                isCleanSheet: true,
                instructors: ['柏豪'],
                note: '',
                bestSubs: '皓宇'
            }, {
                date: '20230702',
                pitch: '梧棲中正田徑場',
                opponent: { name: 'Hikari光之足球', logo: 'Hikari光之足球' },
                formation: '3-3-1',
                starters: ['GK-凱泰', 'RB-紘豪', 'CB-維恩', 'LB-宇正', 'RM-皓宇', 'CM-晉丞', 'LM-宥融', 'CF-黃衍'],
                subs: [{
                    number: 10,
                    name: '善捷'
                }, {
                    number: 20,
                    name: '瑀東'
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
                final_score: '0 : 3',
                pso: '',
                wdl: 'L',
                scorers: [],
                goalkeepers: ['凱泰'],
                isCleanSheet: false,
                instructors: ['怡萍'],
                note: '',
                bestSubs: '昕叡'
            }, {
                date: '20230702',
                pitch: '梧棲中正田徑場',
                opponent: { name: 'Playone-U9', logo: '台北Playone' },
                formation: '3-3-1',
                starters: ['GK-善捷', 'RB-宥融', 'CB-維恩', 'LB-宇正', 'RM-皓宇', 'CM-晉丞', 'LM-定謙', 'CF-黃衍'],
                subs: [{
                    number: 9,
                    name: '紘豪'
                }, {
                    number: 15,
                    name: '凱泰'
                }, {
                    number: 77,
                    name: '昕叡'
                }],
                subTeam: '勇士',
                final_score: '0 : 2',
                pso: '',
                wdl: 'L',
                scorers: [],
                goalkeepers: ['善捷', '凱泰'],
                isCleanSheet: false,
                instructors: ['凱迪'],
                note: '',
                bestSubs: '昕叡'
            }, {
                date: '20230702',
                pitch: '梧棲中正田徑場',
                opponent: { name: '埔里小獅王', logo: '埔里國小' },
                formation: '2-3-2',
                starters: ['GK-凱泰', 'RCB-宥融', 'LCB-宇正', 'RM-黃衍', 'CM-維恩', 'LM-皓宇', 'RF-定謙', 'LF-晉丞'],
                subs: [{
                    number: 9,
                    name: '紘豪'
                }, {
                    number: 10,
                    name: '善捷'
                }, {
                    number: 20,
                    name: '瑀東'
                }, {
                    number: 23,
                    name: '柏燁'
                }, {
                    number: 77,
                    name: '昕叡'
                }],
                subTeam: '勇士',
                final_score: '1 : 1',
                pso: '1 : 0',
                wdl: 'D*',
                scorers: [{
                    name: '定謙',
                    assist: '黃衍'
                }],
                goalkeepers: ['凱泰'],
                isCleanSheet: false,
                instructors: ['怡萍'],
                note: 'PSO：維恩○ | 依大會規定加踢 PSO 僅為若需要時決定排名之判斷依據，不影響比賽勝負',
                bestSubs: ''
            }, {
                date: '20230702',
                pitch: '梧棲中正田徑場',
                opponent: { name: 'Faith-U10', logo: 'Faith' },
                formation: '3-3-1',
                starters: ['GK-凱泰', 'RB-宇正', 'CB-維恩', 'LB-紘豪', 'RM-皓宇', 'CM-黃衍', 'LM-宥融', 'CF-晉丞'],
                subs: [{
                    number: 10,
                    name: '善捷'
                }, {
                    number: 20,
                    name: '瑀東'
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
                final_score: '0 : 5',
                pso: '',
                wdl: 'L',
                scorers: [],
                goalkeepers: ['凱泰'],
                isCleanSheet: false,
                instructors: ['阿祥'],
                note: '',
                bestSubs: '善捷'
            }, {
                date: '20230703',
                pitch: '梧棲中正田徑場',
                opponent: { name: 'PLCFA', logo: 'PLCFA' },
                formation: '3-3-1',
                starters: ['GK-凱泰', 'RB-宥融', 'CB-維恩', 'LB-紘豪', 'RM-柏燁', 'CM-宇正', 'LM-善捷', 'CF-昕叡'],
                subs: [{
                    number: 3,
                    name: '晉丞'
                }, {
                    number: 7,
                    name: '黃衍'
                }, {
                    number: 12,
                    name: '皓宇'
                }, {
                    number: 13,
                    name: '邁可'
                }, {
                    number: 20,
                    name: '瑀東'
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
                goalkeepers: ['凱泰'],
                isCleanSheet: false,
                instructors: ['怡萍'],
                note: '',
                bestSubs: ''
            }, {
                date: '20230703',
                pitch: '梧棲中正田徑場',
                opponent: { name: '北新國小', logo: '北新國小' },
                formation: '3-3-1',
                starters: ['GK-凱泰', 'RB-宥融', 'CB-維恩', 'LB-紘豪', 'RM-皓宇', 'CM-宇正', 'LM-定謙', 'CF-晉丞'],
                subs: [{
                    number: 77,
                    name: '昕叡'
                }],
                subTeam: '勇士',
                final_score: '0 : 1',
                pso: '',
                wdl: 'L',
                scorers: [],
                goalkeepers: ['凱泰'],
                isCleanSheet: false,
                instructors: ['阿祥'],
                note: '',
                bestSubs: ''
            }, {
                date: '20230703',
                pitch: '梧棲中正田徑場',
                opponent: { name: '銀河射手', logo: '銀河射手' },
                formation: '3-3-1',
                starters: ['GK-凱泰', 'RB-宥融', 'CB-維恩', 'LB-紘豪', 'RM-皓宇', 'CM-宇正', 'LM-定謙', 'CF-晉丞'],
                subs: [{
                    number: 13,
                    name: '邁可'
                }, {
                    number: 20,
                    name: '瑀東'
                }, {
                    number: 23,
                    name: '柏燁'
                }, {
                    number: 77,
                    name: '昕叡'
                }],
                subTeam: '勇士',
                final_score: '0 : 2',
                pso: '',
                wdl: 'L',
                scorers: [],
                goalkeepers: ['凱泰'],
                isCleanSheet: false,
                instructors: ['阿祥'],
                note: '',
                bestSubs: '昕叡'
            }]
        }, {
            id: 37,
            year: '2023',
            cupName: '新北市議長盃',
            system: '5人制',
            grade: 'U11',
            cover: '2023speakercup',
            trophy: '分組亞軍',
            team: [{
                name: 'ZQ無敵勇士',
                members: '晉丞、黃衍、皓宇、邁可、維恩、柏燁、定謙'
            }, {
                name: 'ZQ超能勇士',
                members: '紘豪、善捷、凱泰、瑀東、亮谷、宥融、昕叡、宇正'
            }],
            note: '',
            matches: [{
                date: '20230714',
                pitch: '輔仁大學足球場',
                opponent: { name: '虎鯊HSFC', logo: '虎鯊HSFC' },
                formation: '2-0-2',
                starters: ['GK-定謙', 'RB-晉丞', 'LB-維恩', 'RF-皓宇', 'LF-黃衍'],
                subs: [{
                    number: 13,
                    name: '邁可'
                }, {
                    number: 23,
                    name: '柏燁'
                }],
                subTeam: 'ZQ無敵勇士',
                final_score: '3 : 0',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '維恩',
                    assist: ''
                }, {
                    name: '黃衍',
                    assist: '皓宇'
                }, {
                    name: '皓宇',
                    assist: '黃衍'
                }],
                goalkeepers: ['定謙'],
                isCleanSheet: true,
                instructors: ['柏豪'],
                note: '',
                bestSubs: '邁可'
            }, {
                date: '20230714',
                pitch: '輔仁大學足球場',
                opponent: { name: '桃園文山', logo: '桃園文山' },
                formation: '3-0-1',
                starters: ['GK-凱泰', 'RB-宥融', 'CB-宇正', 'LB-紘豪', 'CF-亮谷'],
                subs: [{
                    number: 10,
                    name: '善捷'
                }, {
                    number: 77,
                    name: '昕叡'
                }],
                subTeam: 'ZQ超能勇士',
                final_score: '1 : 1',
                pso: '0 : 1',
                wdl: 'D',
                scorers: [{
                    name: '宥融',
                    assist: '亮谷'
                }],
                goalkeepers: ['凱泰'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: 'PSO：宇正× | 依大會規定加踢 PSO 僅為若需要時決定晉級資格之判斷依據，不影響比賽勝負',
                bestSubs: '昕叡'
            }, {
                date: '20230714',
                pitch: '輔仁大學足球場',
                opponent: { name: 'Faith', logo: 'Faith' },
                formation: '2-0-2',
                starters: ['GK-定謙', 'RB-晉丞', 'LB-維恩', 'RF-皓宇', 'LF-黃衍'],
                subs: [{
                    number: 13,
                    name: '邁可'
                }, {
                    number: 23,
                    name: '柏燁'
                }],
                subTeam: 'ZQ無敵勇士',
                final_score: '0 : 4',
                pso: '',
                wdl: 'L',
                scorers: [],
                goalkeepers: ['定謙'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: '',
                bestSubs: '柏燁'
            }, {
                date: '20230714',
                pitch: '輔仁大學足球場',
                opponent: { name: '銀河射手', logo: '銀河射手' },
                formation: '2-0-2',
                starters: ['GK-凱泰', 'RB-宇正', 'LB-宥融', 'RF-昕叡', 'RF-亮谷'],
                subs: [{
                    number: 9,
                    name: '紘豪'
                }, {
                    number: 10,
                    name: '善捷'
                }, {
                    number: 20,
                    name: '瑀東'
                }],
                subTeam: 'ZQ超能勇士',
                final_score: '1 : 4',
                pso: '',
                wdl: 'L',
                scorers: [{
                    name: '宥融',
                    assist: '宇正'
                }],
                goalkeepers: ['凱泰'],
                isCleanSheet: false,
                instructors: ['怡萍'],
                note: '',
                bestSubs: '紘豪'
            }, {
                date: '20230715',
                pitch: '輔仁大學足球場',
                opponent: { name: '永士FC', logo: '永士FC' },
                formation: '2-0-2',
                starters: ['GK-定謙', 'RB-晉丞', 'LB-維恩', 'RF-皓宇', 'LF-黃衍'],
                subs: [{
                    number: 13,
                    name: '邁可'
                }, {
                    number: 23,
                    name: '柏燁'
                }],
                subTeam: 'ZQ無敵勇士',
                final_score: '1 : 2',
                pso: '',
                wdl: 'L',
                scorers: [{
                    name: '維恩',
                    assist: '柏燁'
                }],
                goalkeepers: ['定謙'],
                isCleanSheet: false,
                instructors: ['怡萍'],
                note: '',
                bestSubs: ''
            }, {
                date: '20230715',
                pitch: '輔仁大學足球場',
                opponent: { name: '麒麟足球俱樂部', logo: '麒麟足球' },
                formation: '2-1-1',
                starters: ['GK-凱泰', 'RB-紘豪', 'LB-善捷', 'CM-宇正', 'CF-宥融'],
                subs: [{
                    number: 20,
                    name: '瑀東'
                }, {
                    number: 77,
                    name: '昕叡'
                }],
                subTeam: 'ZQ超能勇士',
                final_score: '5 : 0',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '宇正',
                    assist: '宥融'
                }, {
                    name: '宥融',
                    assist: '宇正'
                }, {
                    name: '宥融',
                    assist: ''
                }, {
                    name: '宇正',
                    assist: '宥融'
                }, {
                    name: '昕叡',
                    assist: ''
                }],
                goalkeepers: ['凱泰'],
                isCleanSheet: true,
                instructors: ['怡萍'],
                note: '',
                bestSubs: '昕叡'
            }, {
                date: '20230715',
                pitch: '輔仁大學足球場',
                opponent: { name: 'ZQ超能勇士', logo: '志清' },
                formation: '2-0-2',
                starters: ['GK-定謙', 'RB-維恩', 'LB-晉丞', 'RF-皓宇', 'LF-黃衍'],
                subs: [{
                    number: 13,
                    name: '邁可'
                }, {
                    number: 23,
                    name: '柏燁'
                }],
                subTeam: 'ZQ無敵勇士',
                final_score: '2 : 0',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '黃衍',
                    assist: ''
                }, {
                    name: '晉丞',
                    assist: ''
                }],
                goalkeepers: ['定謙', '黃衍'],
                isCleanSheet: true,
                instructors: ['柏豪'],
                note: '',
                bestSubs: '柏燁'
            }, {
                date: '20230715',
                pitch: '輔仁大學足球場',
                opponent: { name: 'ZQ無敵勇士', logo: '志清' },
                formation: '2-1-1',
                starters: ['GK-凱泰', 'RB-紘豪', 'LB-宥融', 'CM-宇正', 'CF-昕叡'],
                subs: [{
                    number: 10,
                    name: '善捷'
                }, {
                    number: 20,
                    name: '瑀東'
                }],
                subTeam: 'ZQ超能勇士',
                final_score: '0 : 2',
                pso: '',
                wdl: 'L',
                scorers: [],
                goalkeepers: ['凱泰', '善捷'],
                isCleanSheet: false,
                instructors: ['怡萍'],
                note: '',
                bestSubs: '善捷、瑀東'
            }, {
                date: '20230716',
                pitch: '輔仁大學足球場',
                opponent: { name: '忠義勇士', logo: '忠義國小' },
                formation: '2-0-2',
                starters: ['GK-定謙', 'RB-黃衍', 'LB-維恩', 'RF-晉丞', 'LF-皓宇'],
                subs: [{
                    number: 13,
                    name: '邁可'
                }, {
                    number: 23,
                    name: '柏燁'
                }],
                subTeam: 'ZQ無敵勇士',
                final_score: '2 : 2',
                pso: '1 : 0',
                wdl: 'D',
                scorers: [{
                    name: '皓宇',
                    assist: '黃衍'
                }, {
                    name: '皓宇',
                    assist: ''
                }],
                goalkeepers: ['定謙'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: 'PSO：維恩○ | 依大會規定加踢 PSO 僅為若需要時決定晉級資格之判斷依據，不影響比賽勝負',
                bestSubs: '柏燁'
            }, {
                date: '20230716',
                pitch: '輔仁大學足球場',
                opponent: { name: '忠義勇士_', logo: '忠義國小' },
                formation: '2-0-2',
                starters: ['GK-凱泰', 'RB-紘豪', 'LB-宇正', 'RF-宥融', 'LF-瑀東'],
                subs: [{
                    number: 10,
                    name: '善捷'
                }, {
                    number: 77,
                    name: '昕叡'
                }],
                subTeam: 'ZQ超能勇士',
                final_score: '2 : 2',
                pso: '3 : 2',
                wdl: 'D',
                scorers: [{
                    name: '宇正',
                    assist: ''
                }, {
                    name: '宥融',
                    assist: '昕叡'
                }],
                goalkeepers: ['凱泰'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: 'PSO：宥融○、昕叡○、善捷○ | 依大會規定加踢 PSO 僅為若需要時決定晉級資格之判斷依據，不影響比賽勝負',
                bestSubs: '昕叡'
            }, {
                date: '20230716',
                pitch: '輔仁大學足球場',
                opponent: { name: '桃園文山', logo: '桃園文山' },
                formation: '2-0-2',
                starters: ['GK-定謙', 'RB-晉丞', 'LB-維恩', 'RF-皓宇', 'LF-黃衍'],
                subs: [{
                    number: 13,
                    name: '邁可'
                }, {
                    number: 23,
                    name: '柏燁'
                }],
                subTeam: 'ZQ無敵勇士',
                final_score: '0 : 3',
                pso: '',
                wdl: 'L',
                scorers: [],
                goalkeepers: ['定謙'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: '',
                bestSubs: '邁可'
            }, {
                date: '20230716',
                pitch: '輔仁大學足球場',
                opponent: { name: '麒麟足球俱樂部', logo: '麒麟足球' },
                formation: '2-0-2',
                starters: ['GK-凱泰', 'RB-紘豪', 'LB-善捷', 'RF-宥融', 'LF-宇正'],
                subs: [{
                    number: 20,
                    name: '瑀東'
                }, {
                    number: 77,
                    name: '昕叡'
                }],
                subTeam: 'ZQ超能勇士',
                final_score: '5 : 0',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '宇正',
                    assist: ''
                }, {
                    name: '宇正',
                    assist: '宥融'
                }, {
                    name: '宇正',
                    assist: '宥融'
                }, {
                    name: 'Own Goal',
                    assist: '昕叡'
                }, {
                    name: '昕叡',
                    assist: ''
                }],
                goalkeepers: ['凱泰'],
                isCleanSheet: true,
                instructors: ['柏豪'],
                note: '',
                bestSubs: '昕叡'
            }]
        }, {
            id: 38,
            year: '2023',
            cupName: '格溫拜克盃',
            system: '5人制',
            grade: 'U10',
            cover: '2023grunbeckcup',
            trophy: '',
            team: [{
                name: '勇士',
                members: '晉丞、紘豪、善捷、皓宇、邁可、凱泰、維恩、瑀東、亮谷、柏燁、昕叡、宇正'
            }],
            note: '',
            matches: [{
                date: '20230806',
                pitch: '迎風B足球場',
                opponent: { name: '北新國小', logo: '北新國小' },
                formation: '2-0-2',
                starters: ['GK-凱泰', 'RB-邁可', 'LB-維恩', 'RF-瑀東', 'LF-柏燁'],
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
                    number: 21,
                    name: '亮谷'
                }, {
                    number: 77,
                    name: '昕叡'
                }, {
                    number: 97,
                    name: '宇正'
                }],
                subTeam: '勇士',
                final_score: '4 : 0',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '昕叡',
                    assist: ''
                }, {
                    name: '宇正',
                    assist: ''
                }, {
                    name: '昕叡',
                    assist: ''
                }, {
                    name: '皓宇',
                    assist: '柏燁'
                }],
                goalkeepers: ['凱泰'],
                isCleanSheet: true,
                instructors: ['柏豪'],
                note: '',
                bestSubs: '紘豪'
            }, {
                date: '20230806',
                pitch: '迎風B足球場',
                opponent: { name: '磐石', logo: '磐石' },
                formation: '2-0-2',
                starters: ['GK-凱泰', 'RB-皓宇', 'LB-紘豪', 'RF-柏燁', 'LF-昕叡'],
                subs: [{
                    number: 3,
                    name: '晉丞'
                }, {
                    number: 10,
                    name: '善捷'
                }, {
                    number: 13,
                    name: '邁可'
                }, {
                    number: 18,
                    name: '維恩'
                }, {
                    number: 20,
                    name: '瑀東'
                }, {
                    number: 21,
                    name: '亮谷'
                }, {
                    number: 97,
                    name: '宇正'
                }],
                subTeam: '勇士',
                final_score: '4 : 2',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '柏燁',
                    assist: '皓宇'
                }, {
                    name: '亮谷',
                    assist: '瑀東'
                }, {
                    name: '紘豪',
                    assist: '晉丞'
                }, {
                    name: '瑀東',
                    assist: '晉丞'
                }],
                goalkeepers: ['凱泰'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: '',
                bestSubs: '晉丞'
            }, {
                date: '20230806',
                pitch: '迎風B足球場',
                opponent: { name: '星足twfc', logo: 'twfc' },
                formation: '2-0-2',
                starters: ['GK-凱泰', 'RB-紘豪', 'LB-維恩', 'RF-晉丞', 'LF-柏燁'],
                subs: [{
                    number: 10,
                    name: '善捷'
                }, {
                    number: 12,
                    name: '皓宇'
                }, {
                    number: 13,
                    name: '邁可'
                }, {
                    number: 20,
                    name: '瑀東'
                }, {
                    number: 21,
                    name: '亮谷'
                }, {
                    number: 77,
                    name: '昕叡'
                }, {
                    number: 97,
                    name: '宇正'
                }],
                subTeam: '勇士',
                final_score: '2 : 0',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '皓宇',
                    assist: ''
                }, {
                    name: 'Own Goal',
                    assist: '宇正'
                }],
                goalkeepers: ['凱泰'],
                isCleanSheet: true,
                instructors: ['柏豪'],
                note: '',
                bestSubs: '宇正'
            }, {
                date: '20230806',
                pitch: '迎風B足球場',
                opponent: { name: 'TopFive', logo: 'TopFive' },
                formation: '2-0-2',
                starters: ['GK-凱泰', 'RB-宇正', 'LB-紘豪', 'RF-晉丞', 'LF-柏燁'],
                subs: [{
                    number: 10,
                    name: '善捷'
                }, {
                    number: 12,
                    name: '皓宇'
                }, {
                    number: 13,
                    name: '邁可'
                }, {
                    number: 18,
                    name: '維恩'
                }, {
                    number: 20,
                    name: '瑀東'
                }, {
                    number: 21,
                    name: '亮谷'
                }, {
                    number: 77,
                    name: '昕叡'
                }],
                subTeam: '勇士',
                final_score: '1 : 2',
                pso: '',
                wdl: 'L',
                scorers: [{
                    name: '宇正',
                    assist: '皓宇'
                }],
                goalkeepers: ['凱泰'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: '',
                bestSubs: '亮谷'
            }, {
                date: '20230806',
                pitch: '迎風B足球場',
                opponent: { name: '幸安國小', logo: '幸安國小' },
                formation: '2-0-2',
                starters: ['GK-凱泰', 'RB-宇正', 'LB-紘豪', 'RF-瑀東', 'LF-柏燁'],
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
                    number: 13,
                    name: '邁可'
                }, {
                    number: 18,
                    name: '維恩'
                }, {
                    number: 21,
                    name: '亮谷'
                }, {
                    number: 77,
                    name: '昕叡'
                }],
                subTeam: '勇士',
                final_score: '2 : 5',
                pso: '',
                wdl: 'L',
                scorers: [{
                    name: '宇正',
                    assist: ''
                }, {
                    name: '維恩',
                    assist: ''
                }],
                goalkeepers: ['凱泰'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: '',
                bestSubs: '昕叡'
            }]
        }, {
            id: 39,
            year: '2023',
            cupName: '淡水盃',
            system: '8人制',
            grade: 'U10',
            cover: '2023tamsuicup',
            trophy: '分組冠軍',
            team: [{
                name: '勇士',
                members: '晉丞、黃衍、紘豪、皓宇、凱泰、維恩、亮谷、柏燁、宥融、昕叡、宇正'
            }],
            note: '',
            matches: [{
                date: '20230811',
                pitch: '淡水工商',
                opponent: { name: '熱血希望', logo: '熱血足球' },
                formation: '3-3-1',
                starters: ['GK-宥融', 'RB-宇正', 'CB-維恩', 'LB-紘豪', 'RM-皓宇', 'CM-黃衍', 'LM-昕叡', 'CF-晉丞'],
                subs: [{
                    number: 23,
                    name: '柏燁'
                }],
                subTeam: '勇士',
                final_score: '1 : 1',
                pso: '4 : 5',
                wdl: 'D',
                scorers: [{
                    name: '維恩',
                    assist: '黃衍'
                }],
                goalkeepers: ['宥融', '黃衍'],
                isCleanSheet: false,
                instructors: ['豪偉'],
                note: 'PSO：維恩○、宇正○、宥融○、皓宇○、黃衍× | 依大會規定加踢 PSO 僅為若需要時決定晉級資格之判斷依據，不影響比賽勝負',
                bestSubs: '柏燁'
            }, {
                date: '20230811',
                pitch: '淡水工商',
                opponent: { name: '豐里國小', logo: '豐里國小' },
                formation: '3-3-1',
                starters: ['GK-宥融', 'RB-宇正', 'CB-維恩', 'LB-紘豪', 'RM-皓宇', 'CM-亮谷', 'LM-黃衍', 'CF-晉丞'],
                subs: [{
                    number: 15,
                    name: '凱泰'
                }, {
                    number: 23,
                    name: '柏燁'
                }, {
                    number: 77,
                    name: '昕叡'
                }],
                subTeam: '勇士',
                final_score: '0 : 3',
                pso: '',
                wdl: 'L',
                scorers: [],
                goalkeepers: ['宥融', '凱泰'],
                isCleanSheet: false,
                instructors: ['豪偉'],
                note: '',
                bestSubs: '凱泰'
            }, {
                date: '20230812',
                pitch: '淡水工商',
                opponent: { name: 'Yamaha', logo: '桃園中原' },
                formation: '3-3-1',
                starters: ['GK-宥融', 'RB-宇正', 'CB-維恩', 'LB-紘豪', 'RM-皓宇', 'CM-亮谷', 'LM-黃衍', 'CF-晉丞'],
                subs: [{
                    number: 15,
                    name: '凱泰'
                }, {
                    number: 23,
                    name: '柏燁'
                }, {
                    number: 77,
                    name: '昕叡'
                }],
                subTeam: '勇士',
                final_score: '1 : 1',
                pso: '1 : 2',
                wdl: 'D',
                scorers: [{
                    name: '宇正',
                    assist: ''
                }],
                goalkeepers: ['宥融', '凱泰'],
                isCleanSheet: false,
                instructors: ['豪偉'],
                note: 'PSO：維恩○、宇正× | 依大會規定加踢 PSO 僅為若需要時決定晉級資格之判斷依據，不影響比賽勝負',
                bestSubs: '昕叡'
            }, {
                date: '20230812',
                pitch: '淡水工商',
                opponent: { name: '廣福國小', logo: '新北廣福' },
                formation: '3-3-1',
                starters: ['GK-宥融', 'RB-柏燁', 'CB-維恩', 'LB-紘豪', 'RM-宥融', 'CM-亮谷', 'LM-黃衍', 'CF-晉丞'],
                subs: [{
                    number: 12,
                    name: '皓宇'
                }, {
                    number: 77,
                    name: '昕叡'
                }, {
                    number: 97,
                    name: '宇正'
                }],
                subTeam: '勇士',
                final_score: '6 : 0',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '晉丞',
                    assist: '宥融'
                }, {
                    name: '晉丞',
                    assist: ''
                }, {
                    name: '亮谷',
                    assist: '宥融'
                }, {
                    name: '皓宇',
                    assist: '維恩'
                }, {
                    name: '維恩',
                    assist: ''
                }, {
                    name: '宥融',
                    assist: ''
                }],
                goalkeepers: ['凱泰'],
                isCleanSheet: true,
                instructors: ['豪偉'],
                note: '',
                bestSubs: ''
            }, {
                date: '20230813',
                pitch: '淡水工商',
                opponent: { name: 'Yamaha', logo: '桃園中原' },
                formation: '3-3-1',
                starters: ['GK-宥融', 'RB-宇正', 'CB-維恩', 'LB-紘豪', 'RM-皓宇', 'CM-亮谷', 'LM-黃衍', 'CF-晉丞'],
                subs: [{
                    number: 15,
                    name: '凱泰'
                }, {
                    number: 23,
                    name: '柏燁'
                }, {
                    number: 77,
                    name: '昕叡'
                }],
                subTeam: '勇士',
                final_score: '0 : 0',
                pso: '4 : 3',
                wdl: 'W',
                scorers: [],
                goalkeepers: ['宥融', '凱泰', '黃衍'],
                isCleanSheet: true,
                instructors: ['豪偉'],
                note: '',
                bestSubs: '柏燁'
            }]
        }, {
            id: 40,
            year: '2023',
            cupName: '黃蜂爭霸盃（下）',
            system: '5人制',
            grade: 'U10',
            cover: '2023bumblebeecup2',
            trophy: '分組冠軍／分組季軍',
            team: [{
                name: 'ZQ無敵悍將',
                members: '晉丞、黃衍、皓宇、維恩、宥融、宇正'
            }, {
                name: 'ZQ超能悍將',
                members: '紘豪、邁可、凱泰、瑀東、柏燁、昕叡'
            }],
            note: '',
            matches: [{
                date: '20230910',
                pitch: '浮洲足球場',
                opponent: { name: 'SCSFC', logo: 'SCSFC' },
                formation: '2-0-2',
                starters: ['GK-宥融', 'RB-宇正', 'LB-維恩', 'RF-晉丞', 'LF-黃衍'],
                subs: [{
                    number: 12,
                    name: '皓宇'
                }],
                subTeam: 'ZQ無敵悍將',
                final_score: '3 : 2',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '黃衍',
                    assist: '宇正'
                }, {
                    name: '皓宇',
                    assist: '宇正'
                }, {
                    name: '晉丞',
                    assist: '維恩'
                }],
                goalkeepers: ['宥融'],
                isCleanSheet: false,
                instructors: ['怡萍'],
                note: '',
                bestSubs: '皓宇'
            }, {
                date: '20230910',
                pitch: '浮洲足球場',
                opponent: { name: '新店FC', logo: '新店國小' },
                formation: '2-0-2',
                starters: ['GK-宥融', 'RB-宇正', 'LB-維恩', 'RF-黃衍', 'LF-皓宇'],
                subs: [{
                    number: 3,
                    name: '晉丞'
                }],
                subTeam: 'ZQ無敵悍將',
                final_score: '11 : 0',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '黃衍',
                    assist: ''
                }, {
                    name: '晉丞',
                    assist: '皓宇'
                }, {
                    name: '維恩',
                    assist: '晉丞'
                }, {
                    name: '晉丞',
                    assist: '黃衍'
                }, {
                    name: '皓宇',
                    assist: '宇正'
                }, {
                    name: '宇正',
                    assist: '皓宇'
                }, {
                    name: '黃衍',
                    assist: '宥融'
                }, {
                    name: '宥融',
                    assist: '維恩'
                }, {
                    name: '晉丞',
                    assist: '皓宇'
                }, {
                    name: '維恩',
                    assist: '宥融'
                }, {
                    name: '晉丞',
                    assist: '維恩'
                }],
                goalkeepers: ['宥融', '維恩', '宇正'],
                isCleanSheet: true,
                instructors: ['怡萍'],
                note: '',
                bestSubs: '丞晉'
            }, {
                date: '20230910',
                pitch: '浮洲足球場',
                opponent: { name: '新北銀河', logo: '新北銀河' },
                formation: '2-0-2',
                starters: ['GK-凱泰', 'RB-柏燁', 'LB-邁可', 'RF-瑀東', 'LF-昕叡'],
                subs: [],
                subTeam: 'ZQ超能悍將',
                final_score: '0 : 3',
                pso: '',
                wdl: 'L',
                scorers: [],
                goalkeepers: ['凱泰'],
                isCleanSheet: false,
                instructors: ['怡萍'],
                note: '',
                bestSubs: ''
            }, {
                date: '20230910',
                pitch: '浮洲足球場',
                opponent: { name: 'BSC', logo: 'default' },
                formation: '2-0-2',
                starters: ['GK-凱泰', 'RB-柏燁', 'LB-邁可', 'RF-瑀東', 'LF-昕叡'],
                subs: [],
                subTeam: 'ZQ超能悍將',
                final_score: '0 : 8',
                pso: '',
                wdl: 'L',
                scorers: [],
                goalkeepers: ['宥融'],
                isCleanSheet: false,
                instructors: ['怡萍'],
                note: '',
                bestSubs: ''
            }]
        }, {
            id: 41,
            year: '2023',
            cupName: '新北市少年八人制秋季聯賽',
            system: '8人制',
            grade: 'U11',
            cover: '2023eightmanfall',
            trophy: '',
            team: [{
                name: '小悍將',
                members: '晉丞、黃衍、紘豪、皓宇、邁可、凱泰、維恩、瑀東、亮谷、柏燁、定謙、宥融、昕叡、宇正'
            }],
            // note: `<a class="text-success" target="_blank" href="./img/table/2023eightmanfall.jpg"><i class="fa fa-table text-success" aria-hidden="true"></i> League Table</a>`,
            matches: [{
                date: '20230916',
                pitch: '新莊田徑場',
                opponent: { name: '莒光國小', logo: '莒光國小' },
                formation: '3-3-1',
                starters: ['GK-宥融', 'RB-宇正', 'CB-維恩', 'LB-柏燁', 'RM-皓宇', 'CM-亮谷', 'LM-黃衍', 'CF-晉丞'],
                subs: [{
                    number: 9,
                    name: '紘豪'
                }, {
                    number: 13,
                    name: '邁可'
                }, {
                    number: 27,
                    name: '定謙'
                }, {
                    number: 77,
                    name: '昕叡'
                }],
                subTeam: '小悍將',
                final_score: '4 : 1',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '黃衍',
                    assist: '宇正'
                }, {
                    name: '亮谷',
                    assist: ''
                }, {
                    name: '黃衍',
                    assist: '宇正'
                }, {
                    name: '宥融',
                    assist: ''
                }],
                goalkeepers: ['宥融', '定謙'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: '',
                bestSubs: '定謙'
            }, {
                date: '20230924',
                pitch: '新莊田徑場',
                opponent: { name: '北新國小', logo: '北新國小' },
                formation: '3-3-1',
                starters: ['GK-宥融', 'RB-宇正', 'CB-維恩', 'LB-紘豪', 'RM-皓宇', 'CM-亮谷', 'LM-黃衍', 'CF-晉丞'],
                subs: [{
                    number: 13,
                    name: '邁可'
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
                subTeam: '小悍將',
                final_score: '2 : 3',
                pso: '',
                wdl: 'L',
                scorers: [{
                    name: '宥融',
                    assist: '宇正'
                }, {
                    name: '維恩',
                    assist: '亮谷'
                }],
                goalkeepers: ['宥融', '定謙'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: '',
                bestSubs: '柏燁'
            }]
        }, {
            id: 42,
            year: '2023',
            cupName: '臺北市中正盃',
            system: '8人制',
            grade: 'U11',
            cover: '2023ckscup',
            trophy: '',
            team: [{
                name: '悍將',
                members: '晉丞、黃衍、紘豪、皓宇、維恩、亮谷、柏燁、定謙、宥融、昕叡、宇正、子珩*、駿毅*、宇晨*、昀陞*、振綸*、稟巖*'
            }],
            note: ``,
            matches: [{
                date: '20230928',
                pitch: '迎風足球場A',
                opponent: { name: '永樂國小', logo: '永樂國小' },
                formation: '3-3-1',
                starters: ['GK-宥融', 'RB-駿毅*', 'CB-振綸*', 'LB-子珩*', 'RM-昕叡', 'CM-亮谷', 'LM-宇晨*', 'CF-稟巖*'],
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
                    number: 12,
                    name: '皓宇'
                }, {
                    number: 18,
                    name: '維恩'
                }, {
                    number: 25,
                    name: '昀陞*'
                }, {
                    number: 23,
                    name: '柏燁'
                }, {
                    number: 27,
                    name: '定謙'
                }, {
                    number: 97,
                    name: '宇正'
                }],
                subTeam: '悍將',
                final_score: '10 : 0',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '宇晨*',
                    assist: '稟巖*'
                }, {
                    name: '亮谷',
                    assist: '子珩*'
                }, {
                    name: '稟巖*',
                    assist: '昕叡'
                }, {
                    name: '稟巖*',
                    assist: '亮谷'
                }, {
                    name: '黃衍',
                    assist: '宥融'
                }, {
                    name: '宥融',
                    assist: ''
                }, {
                    name: '維恩',
                    assist: '皓宇'
                }, {
                    name: '皓宇',
                    assist: '柏燁'
                }, {
                    name: '皓宇',
                    assist: '宥融'
                }, {
                    name: '晉丞',
                    assist: '柏燁'
                }],
                goalkeepers: ['宥融', '子珩*'],
                isCleanSheet: true,
                instructors: ['柏豪'],
                note: '* 學長／姐',
                bestSubs: ''
            }, {
                date: '20231003',
                pitch: '迎風足球場A',
                opponent: { name: '光復國小', logo: '光復國小' },
                formation: '3-3-1',
                starters: ['GK-宥融', 'RB-稟巖*', 'CB-維恩', 'LB-宇正', 'RM-亮谷', 'CM-振綸*', 'LM-黃衍', 'CF-皓宇'],
                subs: [{
                    number: 3,
                    name: '晉丞'
                }, {
                    number: 27,
                    name: '定謙'
                }, {
                    number: 77,
                    name: '昕叡'
                }],
                subTeam: '悍將',
                final_score: '2 : 1',
                pso: '',
                wdl: 'W',
                scorers: [{
                    name: '黃衍',
                    assist: ''
                }, {
                    name: '振綸*',
                    assist: '黃衍'
                }],
                goalkeepers: ['宥融'],
                isCleanSheet: false,
                instructors: ['柏豪'],
                note: '* 學長／姐',
                bestSubs: ''
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