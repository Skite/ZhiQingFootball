new Vue({
    el: '#ZhiQingFootball',
    data: {
        videos: [{
            id: 1,
            cupName: '2020秋季大安盃',
            cover: '2020daancup',
            videos: [{
                date: '10/25',
                opponents: '炫風新尖兵、熱血足球 U8',
                url: 'Q2B33TAQ#15xClbnpLLSZydKeKy4nGj6mKLKc-vM-eXtCINLwig0'
            }, {
                date: '11/08',
                opponents: '磐石',
                url: '0mxEVBzK#Euv5443UIbmjBBD5uFCgK9TeqThwGnzVpAk_7IMGYY4'
            }, {
                date: '12/06',
                opponents: '銘傳之星 （準決賽）',
                url: 'cjxlTIoS#5pqbu-BDRpwikT4NCNwfAbgee-yZxSgF3FNeFBaDKw4'
            }],
            icon: 'far fa-futbol'
        }, {
            id: 2,
            cupName: '2020新北聯合盃',
            cover: '2020unitedcup',
            videos: [{
                date: '11/21',
                opponents: '航源FC',
                url: 'NjJmQYrD#INtTmZivgS628KBrFikzCdvhCYtTvUOHn6GAY05LQb8'
            }, {
                date: '11/22',
                opponents: '虎鯊HSFC',
                url: '86RUSIpY#xWFVqLV0_COEx0c4LRg22MkD7WTQRuhvjzyPbs4ze_4'
            }],
            icon: 'fas fa-link'
        }, {
            id: 3,
            cupName: '2021金牛賀歲盃',
            cover: '2021oxcup',
            videos: [{
                date: '1/30',
                opponents: '森巴小獵豹',
                url: 'QnARCJ7T#fwurQfONLYHQ77xEHdzJ4_uMixQmOFj-9ZlZCltZZwU'
            }, {
                date: '1/31',
                opponents: '新北銀河',
                url: '0nAmkBgY#olbSMsP3Rn4uOkJKwuVduCOwFdOIg7Fg3VsPzzO5Iyc'
            }, {
                date: '2/6',
                opponents: '虎鯊HSFC',
                url: 'hyYC1Z5a#wLzGBK1Ze90wC9BobZ1yWDiSlJLQYkkb098vRSrZCy8'
            }],
            icon: 'fal fa-skull-cow'
        }, {
            id: 4,
            cupName: '2021春季大安盃',
            cover: '2021daanspringcup',
            videos: [{
                date: '4/10',
                opponents: '熱血足球 U8',
                url: '96pn3LJC#aj9cByclKl1n-RUNI5CxEc91bmurkKsBDMC9COjoQ_E'
            }, {
                date: '5/8',
                opponents: '公館紅雷霆',
                url: 'Yv5FUZhY#SUOkCpuTdM9oRU0jNXIO-ytjBmgfcRKQYK9akPikBTU'
            }, {
                date: '5/8',
                opponents: '磐石U8',
                url: 'UnQ0xDaD#178MiVAB9pDsSUiCqdw9uy3_CPjQOWg1VfjKilYdlX8'
            }, {
                date: '10/2',
                opponents: '國北實小U8',
                url: 'xiQAiSJQ#rfK4ug60y4NeeD0zJdjECCrJgL4YoNcl_JH6hhOb_RA'
            }, {
                date: '11/13',
                opponents: '熱血踢豹',
                url: 'YzZh0LYT#IDbgqgWodZ2qPMIO-ecqOa5NgcIpByutXC3jJHbI8uA'
            }, {
                date: '11/13',
                opponents: '公館藍雷霆',
                url: '5m4lASCb#19bY2Gj4GEZtWLflJJ9_wVVPXyvG3PVjKPm3chGcYyU'
            }],
            icon: 'far fa-futbol'
        }, {
            id: 5,
            cupName: '2021安聯小小世界盃',
            cover: '2021allianzcup',
            videos: [{
                date: '5/02',
                opponents: 'Dreamers FC、鬥牛犬、LSFC',
                url: 'sy4CHBiD#uCFRbwTPbVC0Kq3gO-_-g7UtvQhuCo__V3hd1ero1A4'
            }],
            icon: 'fab fa-angular'
        }, {
            id: 6,
            cupName: '2021學童盃',
            cover: '2021studentcup',
            videos: [{
                date: '9/04',
                opponents: '航源FC-U9',
                url: 'IrR2kZoQ#_x1Ha6YxMYiQHahXo5ws316x9_CmW9pY-JmaibVgdpA'
            }, {
                date: '9/05',
                opponents: '台北Playone',
                url: 'NjZ1yRRL#ePlhmlJiVdXElkk1Fbb3Rv5tygkWFBBpzCVKtj5x6zw'
            }],
            icon: 'fas fa-user-graduate'
        }, {
            id: 7,
            cupName: '2021中正主委盃',
            cover: '2021chairmancup',
            videos: [{
                date: '10/31',
                opponents: '銘傳之星',
                url: 'o6B2AYhL#omoPlTX48THxcsSEdg2ot95_KGyRPaLFssBalb0cdxw'
            }],
            icon: 'far fa-gavel'
        }, {
            id: 8,
            cupName: '2021新北聯合盃',
            cover: '2021unitedcup',
            videos: [{
                date: '11/20',
                opponents: 'Unity',
                url: 'ZuZkESAR#Jes4cn5owitkDJ8YIkMI22G73P_XjG6SRinwWw2nnfY'
            }, {
                date: '12/18',
                opponents: '海山國小',
                url: '525AXIJK#5_9W9zWKrYj-XqyZjboxL_zjeTB1dWVmnrOaKTwFy_Q'
            }, {
                date: '12/25',
                opponents: '磐石U10',
                url: 'k7g2FLwY#qlLRYWnRdSKYJGjAzh-LiqlWgwW6lU9hETF6285nqnE'
            }, {
                date: '12/26',
                opponents: 'Lion',
                url: 'QrAW2IDa#xGz3ohCLy0lE_CljQoXlLsXgQLR1_dHawaoLLQHcuCo'
            }],
            icon: 'fas fa-link'
        }, {
            id: 9,
            cupName: '2022迎虎盃',
            cover: '2022tigercup',
            videos: [{
                date: '2/19',
                opponents: 'BT-Spirits、桃園自強衝鋒少年、Vikings',
                url: 'h2Y0AA6K#Q0SmmJbKcdWgWqe9W7x_eXUw6kwxfJE54Ub4U0Zr1iQ'
            }, {
                date: '2/19',
                opponents: '長庚國小',
                url: 'R3IHmLAZ#hkzr-CONL0CtZuvQ2UERp7OXQL6wVvnmtvbBZDBkPJo'
            }],
            icon: 'far fa-paw-claws'
        }, {
            id: 10,
            cupName: '2022新北市少年八人制春季聯賽',
            cover: '2022eightmanspring',
            videos: [{
                date: '3/5',
                opponents: '台北曄拓',
                url: 'tjpkiThS#qNDdm5q8w4fvRwU0jDXj1HkG51baD7KcA-brXQTyziA'
            }, {
                date: '3/6',
                opponents: '樂活鯊',
                url: 'cjZT3BQB#aW5oP0RO0G0zrbN66_3ELdTuei1MxsMY3DyBkSg7JwU'
            }, {
                date: '5/21',
                opponents: 'MFA-U10',
                url: 'BjwgjDIA#h-FEgcq9Y797IpX43lkHYRyOOTKQdQqNznCW6zl4NFI'
            }, {
                date: '6/26',
                opponents: 'Monster',
                url: '4jhk0ZyK#UKLk1DO8zPG623wTv25onDQ-Hj4yndhDgPHLny8odC8'
            }],
            icon: 'fas fa-running'
        }, {
            id: 11,
            cupName: '2022中華五人制錦標賽',
            cover: '2022chtfivemanchamp',
            videos: [{
                date: '4/3',
                opponents: '光復皇馬',
                url: '5zwwERiI#6LVygHd8gWUWtGdHGOfrYQb-pfmPP8AbqqU3vA5Gxis'
            }],
            icon: 'far fa-dice-five'
        }, {
            id: 12,
            cupName: '2022臺北市五人制足球聯賽',
            cover: '2022tpefivemanleague',
            videos: [{
                date: '7/17',
                opponents: 'BLES-U10',
                url: 'UrASRZDC#lMCH3b99CVxDyi0v8qvMc-ozblH5he_9aua3PVl95g4'
            }, {
                date: '7/17',
                opponents: '石牌國小',
                url: 'hrRjBBIT#mzaTzMUHZw5SuWMroGYJUqaEVuGAqwyiZspysAse9Y0'
            }],
            icon: 'fa fa-users'
        }, {
            id: 13,
            cupName: '2022春季大安盃',
            cover: '2022daanspringcup',
            videos: [{
                date: '7/23',
                opponents: '國北實小',
                url: 'cixShBpR#5R5wb_J-jpuoKAi_ACeb0nsDQ6wXIQ0gyW87L-roGhY'
            }],
            icon: 'far fa-futbol'
        }, {
            id: 14,
            cupName: '2022安聯小小世界盃',
            cover: '2022allianzcup',
            videos: [{
                date: '10/09',
                opponents: '天母白',
                url: 'drZgkQwQ#0ttXglvVGP0tjv9cgxQMqmD7qeAqQjVtWdoiyNLZxPY'
            }, {
                date: '10/09',
                opponents: '百齡國小',
                url: 'MqQiRDhY#lxFcPmUjMLDr0Eeyh1HedU33yA-doqZtat98Mo_A3Gk'
            }, {
                date: '10/09',
                opponents: '長庚綠',
                url: 'dy5jmDxB#i7S1UHG64Q0aVnDGQV4zW24ekLk7aLQocxtb0FrTSeg'
            }, {
                date: '10/09',
                opponents: '基隆雷鷹',
                url: 'wzIxBIIQ#YTDgis3Rc0lN6m0Anfk5LbpTzIs7m-AsDeMIOTc6Cjw'
            }, {
                date: '12/24',
                opponents: '進擊的矮人',
                url: 'Y34EAQrT#HRq0qpAsqVncIQfgCMyRPDH1gUCVwbDqngH1gwcZANA'
            }, {
                date: '12/24',
                opponents: 'AegonFC',
                url: 'FvBkUSqZ#zSjF267gQXH2GXJrQL56nEIf03KbJK70StbnEFyomQo'
            }, {
                date: '12/24',
                opponents: '北埔國小貝貝鷹',
                url: 'oqwSkBrB#ybeNqBVg9cOLE-5SbEROGFA3Bn3cZnsaemUg6QaO6Ms'
            }],
            icon: 'fab fa-angular'
        }, {
            id: 15,
            cupName: '2022新北市少年八人制秋季聯賽',
            cover: '2022eightmanfall',
            videos: [{
                date: '12/10',
                opponents: '百齡國小',
                url: 'Anx22bBL#BnnL_BIVz57iSvsqMDsm-JhYjcZqj_ezX96nFpojIcc'
            }, {
                date: '12/11',
                opponents: 'TCFA衝鋒少年',
                url: 'E6xQ2QRJ#NJ4vLHL1YPhrzM4t_EKcdC2a5HdpTPaxDBOKJiuHGyw'
            }, {
                date: '12/17',
                opponents: 'TCFA衝鋒少年',
                url: 'FzACCYjT#yQN5m2kPrBIpr1HvL-hYnozxtGn6S4nTgAhvjzRzX3k'
            }, {
                date: '12/17',
                opponents: '樂活鯊',
                url: 'lzJHzYiB#rb-pwawk9EbdgjY4afJEh-ipIxnx-lPhslTbygfQCFs'
            }, {
                date: '12/18',
                opponents: 'MFA-U9',
                url: '5uInkYDZ#HLGGQMJqjufUR3FfwU60sqBu6r_dUdUOiypnyn2swGk'
            }],
            icon: 'fas fa-running'
        }, {
            id: 16,
            cupName: '2022Yamaha盃',
            cover: '2022yamahacup',
            videos: [{
                date: '11/19',
                opponents: 'AC-Taipei-U12',
                url: 'InABUCAI#6tKHiOeZxd5ehlAmLaGuyvWl8r2KIIy5wTS4qlIN_pM'
            }, {
                date: '11/19',
                opponents: '新市國小',
                url: 'J2QDVLBb#YRFThbsl-v9N92dY8cgS5HMIM44hsUPAsP59ZWZLsLQ'
            }],
            icon: 'fab fa-y-combinator'
        }, {
            id: 17,
            cupName: '2023金兔賀歲盃',
            cover: '2023rabbitcup',
            videos: [{
                date: '1/14',
                opponents: 'AC-Taipei-U10',
                url: 'oyJ0mBRL#wBpZo74JnZz-OkoijWhcraRiMAgqqonTbZkOtICkgbA'
            }, {
                date: '1/28',
                opponents: '皇家野馬',
                url: '5rhiRZLZ#CG8ixx0rZGFhDK0c8xJZgBhuX4tWFeTHU0jkJMeg2rI'
            }, {
                date: '2/5',
                opponents: 'AC-Taipei-U10',
                url: 'lyowGBKb#Rg0iHJ2VYrEgeJJ8InbYJpRW2wMGvc0JOGoBpwASP28'
            }],
            icon: 'fas fa-rabbit-fast'
        }, {
            id: 18,
            cupName: '2023明道盃',
            cover: '2023mingdaocup',
            videos: [{
                date: '2/11',
                opponents: '銘傳國小、明道國小、建安國小',
                url: 'lvRAQb6D#5oioaCW_fUh_tS9KlsXDmyb7RrPzZaM_gYaRjxS9ZsY'
            }],
            icon: 'fab fa-medium'
        }, {
            id: 19,
            cupName: '2023Kappa盃',
            cover: '2023kappacup',
            videos: [{
                date: '2/26',
                opponents: '新竹足校-紅、Yoder、A-Star',
                url: 'RmpEXQKC#hhIFR7xbJccVl4FIC4Rqj3KqODb06q-4Y-NhURYU4Ss'
            }, {
                date: '2/26',
                opponents: '北新國小、MFA-U10',
                url: 'IuQSiA6J#deXnNMlYsc0ZBLgVwWfQmUuTIlckmcbl2b2UCyo3LJw'
            }],
            icon: 'fab fa-kickstarter'
        }, {
            id: 20,
            cupName: '2023新北市少年八人制春季聯賽',
            cover: '2023eightmanspring',
            videos: [{
                date: '3/4',
                opponents: 'AC-Taipei-U10',
                url: 'YyJ1UJJD#EcIMZWtsopQCe4Qhs92fScqpirtaRpPSzDdAz-2ZmAs'
            }, {
                date: '4/16',
                opponents: '三石訓練',
                url: 'R2oSFRbC#nasO1XBF-9k55-XpS8Bvs0UrkwWfzr3TY-XiLo_S9_o'
            }, {
                date: '5/13',
                opponents: '樂活鯊',
                url: 't6BVHCrS#bvHus4PfPusZC4YhjjyLLi3YRy8Y81F7UnLijlH4R7w'
            }],
            icon: 'fas fa-running'
        }, {
            id: 21,
            cupName: '2023臺北市教育盃',
            cover: '2023educationcup',
            videos: [{
                date: '3/9',
                opponents: '幸安國小',
                url: '5iYxTIzC#-Ui0zAYd6gAkFb3rovdCAyZ8RGsFfG_m1iBvLAEBEGk'
            }],
            icon: 'fas fa-book'
        }, {
            id: 22,
            cupName: '2023春季大安盃',
            cover: '2023daanspringcup',
            videos: [{
                date: '4/8',
                opponents: 'Lion',
                url: 'BvIRGDTZ#kqkw4_Yp8NzIx4EVKmi36bK2omqwR4lrppXZNtBz5kw'
            }],
            icon: 'far fa-futbol'
        }, {
            id: 23,
            cupName: '2023（上）黃蜂盃爭霸盃',
            cover: '2023bumblebeecup',
            videos: [{
                date: '6/18',
                opponents: '永士FC-U10藍、光復Fight、幸安閃電',
                url: 'x3AAHSZa#_F1NBlVqgJTBBHzqu2TCwJDyoBUQvbf4mbPDrZkwjE0'
            }, {
                date: '6/18',
                opponents: '熱血足球獵豹、永士FC-U10橘、新埔國小',
                url: '93gXVKzC#8wdkBZEOdKoyg1tZ9Ue3xcXhZCzoyYfYblLSnwkemxs'
            }],
            icon: 'fab fa-forumbee'
        }, {
            id: 24,
            cupName: '2023臺北市五人制足球聯賽',
            cover: '2023tpefivemanleague',
            videos: [{
                date: '4/9',
                opponents: 'SLFC',
                url: 'N7ATnSrR#74ZmuSfT09Kfic-7O3glY-O42n3xeyi14bu4Zzgu6gw'
            }, {
                date: '4/9',
                opponents: '立農戰將',
                url: 'c2ozDDaR#jzQnHD-7O_cRidUX9iWYD7O5heL4PdIHhtoDIa8k13c'
            }, {
                date: '4/23',
                opponents: 'BSC',
                url: 'oqIFhaba#qyR0LXE3ivRq9oSdmpp1843d78BCu4RPwHs0PYozsEo'
            }, {
                date: '4/23',
                opponents: '明道國小',
                url: 'MuQjBJ6B#VgILPNBTj9Y1F6TqYVaHVT3WSrUOKUCUmCvY_VcBpaE'
            }],
            icon: 'fa fa-users'
        }, {
            id: 25,
            cupName: '2023安聯小小世界盃',
            cover: '2023allianzcup',
            videos: [{
                date: '6/3',
                opponents: '小炫風U10、TFA皇馬、雙峰樂活',
                url: 'AypDQaTa#md38lwKunlIhx8Sf5e-gGEbH9ADCAXE3kaxObm9XImI'
            }],
            icon: 'fab fa-angular'
        }, {
            id: 26,
            cupName: '2023豐米全國少年盃',
            cover: '2023youthcup',
            videos: [{
                date: '6/22',
                opponents: '小不老FC',
                url: 'd6RynL4C#GTEbdsrxa-kMQqcaFtZ6awSI2Yt8msi3I9g3Cu9qDs8'
            }, {
                date: '6/23',
                opponents: '銀河射手',
                url: 'guYy1ZwK#ImAz_ZcqCTuo8x0GLq4Py2Q0XrP0okfxT0rIlDTQ0rs'
            }],
            icon: 'fas fa-child'
        }, {
            id: 27,
            cupName: '2023臺中港盃國際邀請賽',
            cover: '2023harborcup',
            videos: [{
                date: '7/1',
                opponents: '忠孝迅猛龍、越南BlueSky、惠文橘子、新北銀河',
                url: '56YhhQQK#9YWRh1aEMcq4Wu7MJ3wCqrORIC85wFC6JDRlz_ECywc'
            }],
            icon: 'fas fa-anchor'
        }, {
            id: 28,
            cupName: '2023新北市議長盃',
            cover: '2023speakercup',
            videos: [{
                date: '7/14',
                opponents: '桃園文山、銀河射手',
                url: 'YnIwiR5C#ATuKQmcJ_QvRUG665nmEPdhagNEo_Cq4-KCNJhb2b-A'
            }, {
                date: '7/15',
                opponents: '志清勇士內戰',
                url: 'E3QiRToD#bsIw7ktw5m_d0MygiDqocwIstVVBxGIvfhQ8oyB4nXY'
            }, {
                date: '7/16',
                opponents: '志義勇士',
                url: 'Er4QFAxT#23Jfm5TdCl67TY5t931XLKiEsHT16E9a6wm1iSLlK6M'
            }],
            icon: 'far fa-microphone-stand'
        }, {
            id: 29,
            cupName: '2023淡水盃',
            cover: '2023tamsuicup',
            videos: [{
                date: '8/11',
                opponents: '熱血希望、豐里國小',
                url: 'J7JGnZiS#L0RX1N28erZepQRHIZ_4HlDb9wCt-L0t2wqNoPcrFmQ'
            }, {
                date: '8/12',
                opponents: 'Yamaha、廣福國小',
                url: 'I3IQ0aKZ#aUChbxiIqcSngHEc8FrtF7NH48S31P8B0pO7eKbOCZU'
            }, {
                date: '8/13',
                opponents: 'Yamaha',
                url: 'guAD3bIB#TsTnY0fAkSQiLT7yuEr5cLBXx2RWVvIT0L07RIruOlE'
            }],
            icon: 'fas fa-ship'
        }, {
            id: 30,
            cupName: '2023（下）黃蜂盃',
            cover: '2023bumblebeecup2',
            videos: [{
                date: '9/10',
                opponents: 'SCSFC、新店FC',
                url: 'Ey4lXbjY#dj2VwiqcqQzY6Zs2kBuVZu6ze6kUWNbiMrWa7gaGI9E'
            }, {
                date: '9/10',
                opponents: '新北銀河、BSC',
                url: 'li513RrY#ZUzk-poToAGHEVmSj040BG93q3tQ7CQudSbYWtHTytc'
            }],
            icon: 'fab fa-forumbee'
        }, {
            id: 31,
            cupName: '2023新北市少年八人制秋季聯賽',
            cover: '2023eightmanfall',
            videos: [{
                date: '9/16',
                opponents: '莒光國小',
                url: 'NqQ3xLyK#YuqFDbxVroq5xOHKpjaE8DwUXfo1oEwMPJA48vyZNOs'
            }, {
                date: '9/24',
                opponents: '北新國小',
                url: 'ojIhGAIZ#TOY5M2N6ToTC5YUPOHCUVLNmlWQ-tgg_7XhVvXheIIQ'
            }],
            icon: 'fas fa-running'
        }, {
            id: 32,
            cupName: '2023臺北市中正盃',
            cover: '2023ckscup',
            videos: [{
                date: '9/28',
                opponents: '永樂國小',
                url: 'kyJkEIQK#wu8IlcVH7Kv95Z-kilIPwEtMAyR-8YFjspYVm7D7S6Q'
            }, {
                date: '10/3',
                opponents: '光復國小',
                url: 's2BW3ZzD#pADNrRnaUKc11XRhtrCbIGBU57vItiVsR4wIwb8PmJA'
            }, {
                date: '10/16',
                opponents: '中正國小',
                url: 'hzp10RhK#AxHRmw6vdFYv2kxQPUpA9f7wqXLEIb5fkjZDW5kTJBA'
            }],
            icon: 'fas fa-landmark'
        }, {
            id: 33,
            cupName: '2023勝利聯賽',
            cover: '2023victoryleague',
            videos: [{
                date: '10/15',
                opponents: 'EC DESAFIO',
                url: 'g3IAkTza#R_27ng7JHZkNin7qz0Glz7nSAnpNvi5x3kDdPtubMWY'
            }],
            icon: 'fab fa-vimeo-v'
        }],
        photos: [{
            id: 1,
            cupName: '2020秋季大安盃',
            cover: '20200920-cover',
            photos: [{
                date: '09/20',
                opponents: 'HePing踢豹',
                url: `<a target="_blank" href="https://photos.app.goo.gl/orpEqaYAWVcjQG2t6" target="_blank"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20200920-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }, {
                date: '10/25',
                opponents: '炫風新尖兵、熱血足球 U8',
                url: `<a target="_blank" href="https://photos.app.goo.gl/DtZb1piKzPZCBzDF6" target="_blank"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20201025-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }, {
                date: '11/08',
                opponents: '磐石',
                url: `<a target="_blank" href="https://photos.app.goo.gl/yRPBJbRBmE73rBAPA" target="_blank"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20201108-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
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
            id: 2,
            cupName: '2020新北聯合盃',
            cover: '20201122-cover',
            photos: [{
                date: '11/21',
                opponents: '航源FC',
                url: ``
            }, {
                date: '11/22',
                opponents: '虎鯊HSFC',
                url: `<a target="_blank" href="https://photos.app.goo.gl/HcFDZjg9PdoWczQw8"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20201122-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }, {
                date: '12/19',
                opponents: '新北銀河',
                url: `<a target="_blank" href="https://photos.app.goo.gl/bzZ7tfYXbHgoshoq8"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20201219-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }, {
                date: '12/26',
                opponents: '日新Yoyo',
                url: `<a target="_blank" href="https://photos.app.goo.gl/hj7Apba1PAuXJd2E7"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20201226-cov.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }],
            icon: 'fas fa-link'
        }, {
            id: 3,
            cupName: '2021扶輪社暨航源足球賽',
            cover: '20210124-cover',
            photos: [{
                date: '11/21',
                opponents: '熱血足球、北新國小、夢幻之星、TFA尤文圖斯、暴風',
                url: `<a target="_blank" href="https://photos.app.goo.gl/gZviaRjQX3MyX6Dy5"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20210124-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }],
            icon: 'fal fa-dharmachakra'
        }, {
            id: 4,
            cupName: '2021金牛賀歲盃',
            cover: '20210206-cover',
            photos: [{
                date: '2/6',
                opponents: '虎鯊HSFC',
                url: `<a target="_blank" href="https://photos.app.goo.gl/hmCsAS3rqi3K4UKb8"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20210206-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }],
            icon: 'fal fa-skull-cow'
        }, {
            id: 5,
            cupName: '2021萬歲盃',
            cover: '20210328-cover',
            photos: [{
                date: '3/27',
                opponents: '足球心想事成、吉利港宜大、大暴風足球、淡水小獵豹',
                url: `<a target="_blank" href="https://photos.app.goo.gl/GgvQnTeG8cNKMxEn9"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20210328-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }],
            icon: 'fab fa-vuejs'
        }, {
            id: 6,
            cupName: '2021春季大安盃',
            cover: '20210410-cover',
            photos: [{
                date: '4/10',
                opponents: '國北實小U8、熱血足球U8',
                url: `<a target="_blank" href="https://photos.app.goo.gl/SBGbfrbstgtJPvJS9"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20210410-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }, {
                date: '4/24',
                opponents: '炫風小尖兵',
                url: `<a target="_blank" href="https://photos.app.goo.gl/f6maDyxXj44Gg1DM9"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20210424-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }, {
                date: '5/8',
                opponents: '公館紅雷霆、磐石U8',
                url: `<a target="_blank" href="https://photos.app.goo.gl/tdDpWkEveKAiagJ76"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20210508-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }, {
                date: '10/2',
                opponents: '國北實小U8',
                url: `<a target="_blank" href="https://photos.app.goo.gl/3LgaqU2iWLru7PKG7"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20211002-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }, {
                date: '11/13',
                opponents: '熱血踢豹、公館藍雷霆',
                url: `<a target="_blank" href="https://photos.app.goo.gl/Q4eLkCoCtyPvYtDr7"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20211113-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }],
            icon: 'far fa-futbol'
        }, {
            id: 7,
            cupName: '2021安聯小小世界盃',
            cover: '20210502-cover',
            photos: [{
                date: '5/2',
                opponents: 'Dreamers FC、鬥牛犬、LSFC',
                url: `<a target="_blank" href="https://photos.app.goo.gl/3FyWZwPyt7oitWEK8"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20210502-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }],
            icon: 'fab fa-angular'
        }, {
            id: 8,
            cupName: '2021學童盃',
            cover: '20210904-cover',
            photos: [{
                date: '9/4',
                opponents: '航源FC-U9',
                url: `<a target="_blank" href="https://photos.app.goo.gl/teDJgEmf4dV9KtD4A"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20210904-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }, {
                date: '9/5',
                opponents: '台北Playone',
                url: `<a target="_blank" href="https://photos.app.goo.gl/QfcGdmS169MiyHHB7"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20210905-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }],
            icon: 'fas fa-user-graduate'
        }, {
            id: 9,
            cupName: '2021中正主委盃',
            cover: '20211030-cover',
            photos: [{
                date: '9/4',
                opponents: '台北Playone、銘傳之星、光復國小',
                url: `<a target="_blank" href="https://photos.app.goo.gl/h8rtmVqjEbALRrcm6"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20211030-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }],
            icon: 'far fa-gavel'
        }, {
            id: 10,
            cupName: '2021新北聯合盃',
            cover: '20211120-cover',
            photos: [{
                date: '11/20',
                opponents: 'Unity',
                url: `<a target="_blank" href="https://photos.app.goo.gl/c7jQ8k9JRVFd1mQ97"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20211120-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }, {
                date: '12/18',
                opponents: '海山國小',
                url: `<a target="_blank" href="https://photos.app.goo.gl/jBN2zJPnAkJ3AHrV6"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20211218-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }, {
                date: '12/25',
                opponents: '磐石U10',
                url: `<a target="_blank" href="https://photos.app.goo.gl/DczCUU9hctFqcJoe8"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20211225-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }, {
                date: '12/26',
                opponents: 'Lion',
                url: `<a target="_blank" href="https://photos.app.goo.gl/2yS1LC5cr1bejVXH8"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20211226-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }],
            icon: 'fas fa-link'
        }, {
            id: 11,
            cupName: '2021A-Star聖誕盃',
            cover: '20211219-cover',
            photos: [{
                date: '12/19',
                opponents: '台北曄拓、SLFC、CFT',
                url: `<a target="_blank" href="https://photos.app.goo.gl/BASK51ry3nYhdrYR8"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20211219-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }],
            icon: 'far fa-star'
        }, {
            id: 12,
            cupName: '2022迎虎盃',
            cover: '20220219-cover',
            photos: [{
                date: '2/19',
                opponents: 'BT-Spirits、桃園自強衝鋒少年、森巴獵豹U10、twfc-豹、Vikings、長庚國小',
                url: `<a target="_blank" href="https://photos.app.goo.gl/AwBDskj5a7yoU2Fc7"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20220219-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }],
            icon: 'far fa-paw-claws'
        }, {
            id: 13,
            cupName: '2022新北市少年八人制春季聯賽',
            cover: '20220306-cover',
            photos: [{
                date: '3/6',
                opponents: '樂活鯊',
                url: `<a target="_blank" href="https://photos.app.goo.gl/CuuvTG5cbXuiA9uk8"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20220306-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }, {
                date: '5/21',
                opponents: 'MFA-U10',
                url: `<a target="_blank" href="https://photos.app.goo.gl/FozTCY8FwgLUJ2rU6"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20220521-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }, {
                date: '6/25-26',
                opponents: 'BLES-U10、Monster',
                url: `<a target="_blank" href="https://photos.app.goo.gl/ZNEosocK7Nay1z3QA"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20220625-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }],
            icon: 'fas fa-running'
        }, {
            id: 14,
            cupName: '2022台北市教育盃',
            cover: '20220315-cover',
            photos: [{
                date: '3/14-15',
                opponents: '日新國小、永樂國小',
                url: `<a target="_blank" href="https://photos.app.goo.gl/7KnPZQw1txMyjC2aA"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20220315-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }, {
                date: '3/18',
                opponents: '成德國小',
                url: `<a target="_blank" href="https://photos.app.goo.gl/StJL89DsVcvbj5N7A"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20220318-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }],
            icon: 'fas fa-book'
        }, {
            id: 15,
            cupName: '2022中華五人制錦標賽',
            cover: '20220402-cover',
            photos: [{
                date: '4/2-3',
                opponents: 'twfc-豹、光復皇馬',
                url: `<a target="_blank" href="https://photos.app.goo.gl/KC1ycezmXgK3gxJt9"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20220402-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }],
            icon: 'far fa-dice-five'
        }, {
            id: 16,
            cupName: '2022包中盃',
            cover: '20220611-cover',
            photos: [{
                date: '6/11',
                opponents: '海山U10',
                url: `<a target="_blank" href="https://photos.app.goo.gl/RyrS2V4UGUaUS5Jx8"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20220611-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }, {
                date: '6/12',
                opponents: '樂活鯊、GSC',
                url: `<a target="_blank" href="https://photos.app.goo.gl/sd3cKTTa2ikfvSsk9"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20220612-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }],
            icon: 'fas fa-bullseye-arrow'
        }, {
            id: 17,
            cupName: '2022臺北市五人制足球聯賽',
            cover: '20220717-cover',
            photos: [{
                date: '7/17',
                opponents: 'BLES-U10、石牌國小',
                url: `<a target="_blank" href="https://photos.app.goo.gl/szpZ3eAATgHQ8NtBA"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20220717-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }],
            icon: 'fa fa-users'
        }, {
            id: 18,
            cupName: '2022春季大安盃',
            cover: '20220723-cover',
            photos: [{
                date: '7/23',
                opponents: '中正炫風、國北實小',
                url: `<a target="_blank" href="https://photos.app.goo.gl/3y8VYksUKzDaaYXn9"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20220723-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }, {
                date: '9/17',
                opponents: '大安雲豹',
                url: `<a target="_blank" href="https://photos.app.goo.gl/Ekxycxu755mpgdrL6"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20220917-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }],
            icon: 'fa fa-users'
        }, {
            id: 19,
            cupName: '2022新北市少年八人制秋季聯賽',
            cover: '20220903-cover',
            photos: [{
                date: '9/3',
                opponents: 'Monster',
                url: `<a target="_blank" href="https://photos.app.goo.gl/FLVzvAj2cjUCDBoK9"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20220903-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }, {
                date: '9/18',
                opponents: '樂活鯊',
                url: `<a target="_blank" href="https://photos.app.goo.gl/fFuvUGGZHgBs9trV8"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20220918-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }, {
                date: '12/10',
                opponents: '百齡國小',
                url: `<a target="_blank" href="https://photos.app.goo.gl/RNrHaSFT3UfLUT8P7"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20221210-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }, {
                date: '12/11',
                opponents: 'TCFA衝鋒少年',
                url: `<a target="_blank" href="https://photos.app.goo.gl/ttLWB6Cgzg6ECx2i9"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20221211-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }, {
                date: '12/17',
                opponents: 'TCFA衝鋒少年、樂活鯊',
                url: `<a target="_blank" href="https://photos.app.goo.gl/DjuZUBYkN5AR1W1i7"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20221217-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }, {
                date: '12/18',
                opponents: 'MFA-U9',
                url: `<a target="_blank" href="https://photos.app.goo.gl/EnyKgYrtBV268AZe7"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20221218-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }],
            icon: 'fas fa-running'
        }, {
            id: 20,
            cupName: '2022臺北市足球Ｕ聯賽',
            cover: '20220910-cover',
            photos: [{
                date: '9/10',
                opponents: '熱血希望',
                url: `<a target="_blank" href="https://photos.app.goo.gl/7ZRkZoBnxAAXxnFT7"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20220910-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }],
            icon: 'fas fa-underline'
        }, {
            id: 21,
            cupName: '2022學童盃',
            cover: '20220919-cover',
            photos: [{
                date: '9/19',
                opponents: '天母國小、石牌國小',
                url: `<a target="_blank" href="https://photos.app.goo.gl/3nz3GurLngSoRsqSA"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20220919-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }, {
                date: '9/21',
                opponents: '自強國小',
                url: `<a target="_blank" href="https://photos.app.goo.gl/3kwF5dVhcHVzerNq9"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20220921-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }],
            icon: 'fas fa-user-graduate'
        }, {
            id: 22,
            cupName: '2022新北聯合盃',
            cover: '20221002-cover',
            photos: [{
                date: '10/2',
                opponents: '新北銀河',
                url: `<a target="_blank" href="https://photos.app.goo.gl/iTq2fjXp1qH6W3qS7"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20221002-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }, {
                date: '10/15',
                opponents: '小炫風',
                url: `<a target="_blank" href="https://photos.app.goo.gl/jXskLBZoJEheEVDR9"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20221015-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }, {
                date: '10/16',
                opponents: '先鋒足球',
                url: `<a target="_blank" href="https://photos.app.goo.gl/ordyp4R2T68oNHE5A"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20221016-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }, {
                date: '10/22',
                opponents: '銘傳之星',
                url: `<a target="_blank" href="https://photos.app.goo.gl/E3B9d8GxPmaq62Av9"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20221022-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }],
            icon: 'fas fa-link'
        }, {
            id: 23,
            cupName: '2022安聯小小世界盃',
            cover: '20221224-cover',
            photos: [{
                date: '10/9',
                opponents: '天母白、百齡國小、長庚綠、基隆雷鷹',
                url: `<a target="_blank" href="https://photos.app.goo.gl/37BhyTrDHdAMD43b8"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20221009-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }, {
                date: '12/24',
                opponents: '進擊的矮人、AegonFC、北埔國小貝貝鷹',
                url: `<a target="_blank" href="https://photos.app.goo.gl/vaqcNFDEoGVGdbT29"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20221224-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }],
            icon: 'fab fa-angular'
        }, {
            id: 24,
            cupName: '2022Yamaha盃',
            cover: '20221119-cover',
            photos: [{
                date: '11/19',
                opponents: 'AC Taipei-U12、新市國小',
                url: `<a target="_blank" href="https://photos.app.goo.gl/J9Nz5ycYgmFdS9K17"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20221119-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }],
            icon: 'fab fa-y-combinator'
        }, {
            id: 25,
            cupName: '2023金兔賀歲盃',
            cover: '20230205-cover',
            photos: [{
                date: '1/14',
                opponents: 'AC Taipei-U10',
                url: `<a target="_blank" href="https://photos.app.goo.gl/G7aAxSJzCrv9ynDK7"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20230114-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }, {
                date: '1/28',
                opponents: '皇家野馬',
                url: `<a target="_blank" href="https://photos.app.goo.gl/vHzPmsAoLPTmc5uo9"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20230128-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }, {
                date: '2/5',
                opponents: 'AC Taipei-U10',
                url: `<a target="_blank" href="https://photos.app.goo.gl/e1ny2UZiHxbyNmVUA"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20230205-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }],
            icon: 'fas fa-rabbit-fast'
        }, {
            id: 26,
            cupName: '2023明道盃',
            cover: '20230211-cover',
            photos: [{
                date: '2/11',
                opponents: '銘傳國小、明道國小、建安國小',
                url: `<a target="_blank" href="https://photos.app.goo.gl/3qRhJwP9qeqhdUKU7"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20230211-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }],
            icon: 'fab fa-medium'
        }, {
            id: 27,
            cupName: '2023Kappa盃',
            cover: '20230226-cover',
            photos: [{
                date: '2/26',
                opponents: '新竹足球學校-紅、Yoder、A-Star、北新國小、MFA-U10',
                url: `<a target="_blank" href="https://photos.app.goo.gl/uJU3em7ZRxh7wDkS7"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20230226-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }],
            icon: 'fab fa-kickstarter'
        }, {
            id: 28,
            cupName: '2023新北市少年八人制春季聯賽',
            cover: '20230304-cover',
            photos: [{
                date: '3/4',
                opponents: 'AC-Taipei-U10',
                url: `<a target="_blank" href="https://photos.app.goo.gl/21eYmpzkp81x8roc8"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20230304-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }, {
                date: '4/16',
                opponents: '三石訓練',
                url: `<a target="_blank" href="https://photos.app.goo.gl/mCDeszGtCNYCjkXx8"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20230416-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }, {
                date: '5/13',
                opponents: '樂活鯊',
                url: `<a target="_blank" href="https://photos.app.goo.gl/b32JgGsBoTX2MneH8"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20230513-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }, {
                date: '5/14',
                opponents: 'SLFC',
                url: `<a target="_blank" href="https://photos.app.goo.gl/gx96DruhcT9KCFwd7"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20230514-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }, {
                date: '5/27',
                opponents: 'PLCFA',
                url: '<a target="_blank" href="https://photos.app.goo.gl/nbZXQd3npH52zpK49"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20230527-1-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>'
            }],
            icon: 'fas fa-running'
        }, {
            id: 29,
            cupName: '2023臺北市教育盃',
            cover: '20230314-cover',
            photos: [{
                date: '3/13',
                opponents: '五常國小',
                url: `<a target="_blank" href="https://photos.app.goo.gl/jkzpCHrKyKWwPBrb7"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20230314-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }],
            icon: 'fas fa-book'
        }, {
            id: 30,
            cupName: '2023（上）黃蜂爭霸盃',
            cover: '20230319-cover',
            photos: [{
                date: '3/19',
                opponents: 'Teroro、光復Fight',
                url: `<a target="_blank" href="https://photos.app.goo.gl/gahoxqw5hRARZ3P86"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20230319-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }, {
                date: '6/18',
                opponents: '永士FC-U10藍、光復Fight、幸安閃電、熱血足球獵豹、永士FC-U10橘、新埔國小',
                url: `<a target="_blank" href="https://photos.app.goo.gl/usm6ZXM7eZ56nVXc6"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20230618-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }],
            icon: 'fab fa-forumbee'
        }, {
            id: 31,
            cupName: '2023春季大安盃',
            cover: '20230408-cover',
            photos: [{
                date: '4/8',
                opponents: 'Lion',
                url: `<a target="_blank" href="https://photos.app.goo.gl/JiDqmjLvEVyszhKL9"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20230408-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }, {
                date: '4/29',
                opponents: '磐石U10',
                url: `<a target="_blank" href="https://photos.app.goo.gl/s6MBjTWr2wh92isY7"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20230429-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }, {
                date: '5/27',
                opponents: 'MJKids',
                url: '<a target="_blank" href="https://photos.app.goo.gl/jbdunRKwmRN9qE4Y9"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20230527-2-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>'
            }, {
                date: '6/3',
                opponents: '熱血足球Fighting、磐石U10',
                url: '<a target="_blank" href="https://photos.app.goo.gl/aWfgZpcygdqbJZaC9"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20230603-2-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>'
            }],
            icon: 'far fa-futbol'
        }, {
            id: 32,
            cupName: '2023臺北市五人制足球聯賽',
            cover: '20230409-cover',
            photos: [{
                date: '4/9',
                opponents: 'SLFC、立農戰將',
                url: `<a target="_blank" href="https://photos.app.goo.gl/Hz8z4FZ6xx9hbbtF9"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20230409-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }, {
                date: '4/23',
                opponents: 'BSC、明道國小',
                url: `<a target="_blank" href="https://photos.app.goo.gl/aP2BbW3DKgJCKV4w5"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20230423-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }],
            icon: 'fa fa-users'
        }, {
            id: 33,
            cupName: '2023安聯小小世界盃',
            cover: '20230603-1-cover',
            photos: [{
                date: '6/3',
                opponents: '小炫風U10、TFA皇馬、雙峰樂活',
                url: `<a target="_blank" href="https://photos.app.goo.gl/yfchxTbzut1J3Ajn7"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20230603-2-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }],
            icon: 'fab fa-angular'
        }, {
            id: 34,
            cupName: '2023豐米全國少年盃',
            cover: '20230622-cover',
            photos: [{
                date: '6/22',
                opponents: '小不老FC',
                url: `<a target="_blank" href="https://photos.app.goo.gl/8GacPFj7NjgT7t1YA"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20230622-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }, {
                date: '6/23',
                opponents: '銀河射手',
                url: `<a target="_blank" href="https://photos.app.goo.gl/rTFKfMLnFDDv7T6M7"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20230623-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }],
            icon: 'fas fa-child'
        }, {
            id: 35,
            cupName: '2023台中港國際足球邀請賽',
            cover: '20230701-cover',
            photos: [{
                date: '7/1',
                opponents: 'Day1',
                url: `<a target="_blank" href="https://photos.app.goo.gl/vqyC8gK1QG1YcrGY6"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20230701-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }, {
                date: '7/2',
                opponents: 'Day2',
                url: `<a target="_blank" href="https://photos.app.goo.gl/WGcHfUQVz7Ygemb98"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20230702-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }, {
                date: '7/3',
                opponents: 'Day3',
                url: `<a target="_blank" href="https://photos.app.goo.gl/e9ESwardJkCSDEnf8"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20230703-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }],
            icon: 'fas fa-anchor'
        }, {
            id: 36,
            cupName: '2023新北市議長盃',
            cover: '20230714-cover',
            photos: [{
                date: '7/14',
                opponents: 'Day1',
                url: `<a target="_blank" href="https://photos.app.goo.gl/14Qmh8VzivReJksK7"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20230714-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }, {
                date: '7/15',
                opponents: 'Day2',
                url: `<a target="_blank" href="https://photos.app.goo.gl/nvWaXwiV4bhhihUd8"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20230715-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }, {
                date: '7/16',
                opponents: 'Day3',
                url: `<a target="_blank" href="https://photos.app.goo.gl/Zt6DeSWWGKD2yg1h7"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20230716-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }],
            icon: 'far fa-microphone-stand'
        }, {
            id: 37,
            cupName: '2023格溫拜克盃',
            cover: '20230806-cover',
            photos: [{
                date: '8/6',
                opponents: '北新國小、磐石、星足twfc、TopFive、幸安',
                url: `<a target="_blank" href="https://photos.app.goo.gl/kiiR2Kd5Phd6nh9A9"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20230806-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }],
            icon: 'fas fa-tint'
        }, {
            id: 38,
            cupName: '2023淡水盃',
            cover: '20230813-cover',
            photos: [{
                date: '8/11',
                opponents: '熱血希望、豐里國小',
                url: `<a target="_blank" href="https://photos.app.goo.gl/8tMp2LYZT5asDEEC8"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20230811-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }, {
                date: '8/12',
                opponents: 'Yamaha、廣福國小',
                url: `<a target="_blank" href="https://photos.app.goo.gl/DFbvzeDB71S4fEo7A"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20230812-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }, {
                date: '8/13',
                opponents: 'Yamaha',
                url: `<a target="_blank" href="https://photos.app.goo.gl/i16hmrEXPKuM32ZL7"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20230813-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }],
            icon: 'fas fa-ship'
        }, {
            id: 39,
            cupName: '2023（下）黃蜂盃',
            cover: '20230910-cover',
            photos: [{
                date: '9/10',
                opponents: 'SCSFC、新店FC',
                url: `<a target="_blank" href="https://photos.app.goo.gl/mDSy7naZgAgtP9Z77"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20230910-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }, {
                date: '9/10',
                opponents: '新北銀河、BSC',
                url: `<a target="_blank" href="https://photos.app.goo.gl/2m8NKchRwwr6FAbm9"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20230910-cover2.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }],
            icon: 'fab fa-forumbee'
        }, {
            id: 40,
            cupName: '2023新北市少年八人制秋季聯賽',
            cover: '20230916-cover',
            photos: [{
                date: '9/16',
                opponents: '莒光國小',
                url: `<a target="_blank" href="https://photos.app.goo.gl/WoZQTzuYR4Yyz8CS6"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20230916-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }, {
                date: '9/24',
                opponents: '北新國小',
                url: `<a target="_blank" href="https://photos.app.goo.gl/7f9EEMhxXHbAw4xP6"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20230924-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }],
            icon: 'fas fa-running'
        }, {
            id: 41,
            cupName: '2023臺北市中正盃',
            cover: '20230928-cover',
            photos: [{
                date: '9/28',
                opponents: '永樂國小',
                url: `<a target="_blank" href="https://photos.app.goo.gl/JXeLGtARx62zTeT58"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20230928-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }],
            icon: 'fas fa-landmark'
        }, {
            id: 42,
            cupName: '2023勝利聯賽',
            cover: '20231015-cover',
            photos: [{
                date: '10/15',
                opponents: 'EC DESAFIO',
                url: `<a target="_blank" href="https://photos.app.goo.gl/ueehLYZCxM7iorMH9"><div class="img-wrap image-container m-3 px-5"><img src="img/media/20231015-cover.jpg" class="img-fluid image"><div class="middle"><div class="text">前往相簿</div></div></div></a>`
            }],
            icon: 'fab fa-vimeo-v'
        }]
    },
    methods: {},
    computed: {
        sortVideos: function() {
            return this.videos.concat().sort((a, b) => b.id - a.id)
        },
        sortAlbums: function() {
            return this.photos.concat().sort((a, b) => b.id - a.id)
        }
    },
    filters: {}
})