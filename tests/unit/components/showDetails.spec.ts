import { mount, createLocalVue } from '@vue/test-utils'
import ShowDetails from '@/components/ShowDetails.vue'
import { BootstrapVue } from 'bootstrap-vue'

describe('SearchShowThum.vue', () => {
  it('renders SearchShowThum thumb', () => {
    const aShow = {
        "id": 3479,
        "url": "https://www.tvmaze.com/shows/3479/running-man",
        "name": "Running Man",
        "type": "Variety",
        "language": "Korean",
        "genres": [
            "Comedy"
        ],
        "status": "Running",
        "runtime": 90,
        "averageRuntime": 90,
        "premiered": "2010-07-11",
        "ended": null,
        "officialSite": "http://program.sbs.co.kr/builder/programMainList.do?pgm_id=00000330171",
        "schedule": {
            "time": "18:10",
            "days": [
                "Sunday"
            ]
        },
        "rating": {
            "average": 8.6
        },
        "weight": 92,
        "network": {
            "id": 127,
            "name": "SBS",
            "country": {
                "name": "Korea, Republic of",
                "code": "KR",
                "timezone": "Asia/Seoul"
            },
            "officialSite": null
        },
        "webChannel": null,
        "dvdCountry": null,
        "externals": {
            "tvrage": 29529,
            "thetvdb": 248870,
            "imdb": "tt2185037"
        },
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/18/46329.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/18/46329.jpg"
        },
        "summary": "<p><b>Running Man</b> is a South Korean variety show that first aired on July 11, 2010. This show is classified as an \"urban action variety\"; a never-before-seen new genre of variety shows. The MCs and guests complete missions in landmarks to win the race. It has garnered attention as being the come-back program for Yu Jae-suk, the main MC of the program, after leaving Good Sunday's <i>Family Outing</i> in February 2010.</p>",
        "updated": 1649106464,
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/shows/3479"
            },
            "previousepisode": {
                "href": "https://api.tvmaze.com/episodes/2258954"
            },
            "nextepisode": {
                "href": "https://api.tvmaze.com/episodes/2258955"
            }
        },
        "_embedded": {
            "cast": [
                {
                    "person": {
                        "id": 85254,
                        "url": "https://www.tvmaze.com/people/85254/song-joong-ki",
                        "name": "Song Joong Ki",
                        "country": {
                            "name": "Korea, Republic of",
                            "code": "KR",
                            "timezone": "Asia/Seoul"
                        },
                        "birthday": "1985-09-19",
                        "deathday": null,
                        "gender": "Male",
                        "image": {
                            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/67/167643.jpg",
                            "original": "https://static.tvmaze.com/uploads/images/original_untouched/67/167643.jpg"
                        },
                        "updated": 1537232105,
                        "_links": {
                            "self": {
                                "href": "https://api.tvmaze.com/people/85254"
                            }
                        }
                    },
                    "character": {
                        "id": 170439,
                        "url": "https://www.tvmaze.com/characters/170439/running-man-song-joong-ki",
                        "name": "Song Joong Ki",
                        "image": null,
                        "_links": {
                            "self": {
                                "href": "https://api.tvmaze.com/characters/170439"
                            }
                        }
                    },
                    "self": true,
                    "voice": false
                },
                {
                    "person": {
                        "id": 85902,
                        "url": "https://www.tvmaze.com/people/85902/yoo-jae-suk",
                        "name": "Yoo Jae Suk",
                        "country": {
                            "name": "Korea, Republic of",
                            "code": "KR",
                            "timezone": "Asia/Seoul"
                        },
                        "birthday": "1972-08-14",
                        "deathday": null,
                        "gender": "Male",
                        "image": {
                            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/19/48021.jpg",
                            "original": "https://static.tvmaze.com/uploads/images/original_untouched/19/48021.jpg"
                        },
                        "updated": 1542718547,
                        "_links": {
                            "self": {
                                "href": "https://api.tvmaze.com/people/85902"
                            }
                        }
                    },
                    "character": {
                        "id": 170431,
                        "url": "https://www.tvmaze.com/characters/170431/running-man-yoo-jae-suk",
                        "name": "Yoo Jae Suk",
                        "image": null,
                        "_links": {
                            "self": {
                                "href": "https://api.tvmaze.com/characters/170431"
                            }
                        }
                    },
                    "self": true,
                    "voice": false
                },
                {
                    "person": {
                        "id": 85908,
                        "url": "https://www.tvmaze.com/people/85908/gary",
                        "name": "Gary",
                        "country": {
                            "name": "Korea, Republic of",
                            "code": "KR",
                            "timezone": "Asia/Seoul"
                        },
                        "birthday": "1978-02-24",
                        "deathday": null,
                        "gender": "Male",
                        "image": {
                            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/19/48028.jpg",
                            "original": "https://static.tvmaze.com/uploads/images/original_untouched/19/48028.jpg"
                        },
                        "updated": 1496343222,
                        "_links": {
                            "self": {
                                "href": "https://api.tvmaze.com/people/85908"
                            }
                        }
                    },
                    "character": {
                        "id": 170432,
                        "url": "https://www.tvmaze.com/characters/170432/running-man-gary",
                        "name": "Gary",
                        "image": null,
                        "_links": {
                            "self": {
                                "href": "https://api.tvmaze.com/characters/170432"
                            }
                        }
                    },
                    "self": true,
                    "voice": false
                },
                {
                    "person": {
                        "id": 85906,
                        "url": "https://www.tvmaze.com/people/85906/haha",
                        "name": "Haha",
                        "country": {
                            "name": "Germany",
                            "code": "DE",
                            "timezone": "Europe/Busingen"
                        },
                        "birthday": "1979-08-20",
                        "deathday": null,
                        "gender": "Male",
                        "image": {
                            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/19/48025.jpg",
                            "original": "https://static.tvmaze.com/uploads/images/original_untouched/19/48025.jpg"
                        },
                        "updated": 1534600622,
                        "_links": {
                            "self": {
                                "href": "https://api.tvmaze.com/people/85906"
                            }
                        }
                    },
                    "character": {
                        "id": 170435,
                        "url": "https://www.tvmaze.com/characters/170435/running-man-haha",
                        "name": "Haha",
                        "image": null,
                        "_links": {
                            "self": {
                                "href": "https://api.tvmaze.com/characters/170435"
                            }
                        }
                    },
                    "self": true,
                    "voice": false
                },
                {
                    "person": {
                        "id": 85911,
                        "url": "https://www.tvmaze.com/people/85911/ji-suk-jin",
                        "name": "Ji Suk Jin",
                        "country": {
                            "name": "Korea, Republic of",
                            "code": "KR",
                            "timezone": "Asia/Seoul"
                        },
                        "birthday": "1966-02-10",
                        "deathday": null,
                        "gender": "Male",
                        "image": {
                            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/19/48029.jpg",
                            "original": "https://static.tvmaze.com/uploads/images/original_untouched/19/48029.jpg"
                        },
                        "updated": 1534115447,
                        "_links": {
                            "self": {
                                "href": "https://api.tvmaze.com/people/85911"
                            }
                        }
                    },
                    "character": {
                        "id": 170436,
                        "url": "https://www.tvmaze.com/characters/170436/running-man-ji-suk-jin",
                        "name": "Ji Suk Jin",
                        "image": null,
                        "_links": {
                            "self": {
                                "href": "https://api.tvmaze.com/characters/170436"
                            }
                        }
                    },
                    "self": true,
                    "voice": false
                },
                {
                    "person": {
                        "id": 85912,
                        "url": "https://www.tvmaze.com/people/85912/kim-jong-kook",
                        "name": "Kim Jong Kook",
                        "country": {
                            "name": "Korea, Republic of",
                            "code": "KR",
                            "timezone": "Asia/Seoul"
                        },
                        "birthday": "1976-04-25",
                        "deathday": null,
                        "gender": "Male",
                        "image": {
                            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/19/48033.jpg",
                            "original": "https://static.tvmaze.com/uploads/images/original_untouched/19/48033.jpg"
                        },
                        "updated": 1508345985,
                        "_links": {
                            "self": {
                                "href": "https://api.tvmaze.com/people/85912"
                            }
                        }
                    },
                    "character": {
                        "id": 170437,
                        "url": "https://www.tvmaze.com/characters/170437/running-man-kim-jong-kook",
                        "name": "Kim Jong Kook",
                        "image": null,
                        "_links": {
                            "self": {
                                "href": "https://api.tvmaze.com/characters/170437"
                            }
                        }
                    },
                    "self": true,
                    "voice": false
                },
                {
                    "person": {
                        "id": 85256,
                        "url": "https://www.tvmaze.com/people/85256/lee-kwang-soo",
                        "name": "Lee Kwang Soo",
                        "country": {
                            "name": "Korea, Republic of",
                            "code": "KR",
                            "timezone": "Asia/Seoul"
                        },
                        "birthday": "1985-07-14",
                        "deathday": null,
                        "gender": "Male",
                        "image": {
                            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/19/48034.jpg",
                            "original": "https://static.tvmaze.com/uploads/images/original_untouched/19/48034.jpg"
                        },
                        "updated": 1648510798,
                        "_links": {
                            "self": {
                                "href": "https://api.tvmaze.com/people/85256"
                            }
                        }
                    },
                    "character": {
                        "id": 170438,
                        "url": "https://www.tvmaze.com/characters/170438/running-man-lee-kwang-soo",
                        "name": "Lee Kwang Soo",
                        "image": null,
                        "_links": {
                            "self": {
                                "href": "https://api.tvmaze.com/characters/170438"
                            }
                        }
                    },
                    "self": true,
                    "voice": false
                },
                {
                    "person": {
                        "id": 85857,
                        "url": "https://www.tvmaze.com/people/85857/song-ji-hyo",
                        "name": "Song Ji Hyo",
                        "country": {
                            "name": "Korea, Republic of",
                            "code": "KR",
                            "timezone": "Asia/Seoul"
                        },
                        "birthday": "1981-08-15",
                        "deathday": null,
                        "gender": "Female",
                        "image": {
                            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/257/644855.jpg",
                            "original": "https://static.tvmaze.com/uploads/images/original_untouched/257/644855.jpg"
                        },
                        "updated": 1590171483,
                        "_links": {
                            "self": {
                                "href": "https://api.tvmaze.com/people/85857"
                            }
                        }
                    },
                    "character": {
                        "id": 170440,
                        "url": "https://www.tvmaze.com/characters/170440/running-man-song-ji-hyo",
                        "name": "Song Ji Hyo",
                        "image": null,
                        "_links": {
                            "self": {
                                "href": "https://api.tvmaze.com/characters/170440"
                            }
                        }
                    },
                    "self": true,
                    "voice": false
                },
                {
                    "person": {
                        "id": 85913,
                        "url": "https://www.tvmaze.com/people/85913/lizzy",
                        "name": "Lizzy",
                        "country": {
                            "name": "Korea, Republic of",
                            "code": "KR",
                            "timezone": "Asia/Seoul"
                        },
                        "birthday": "1992-07-31",
                        "deathday": null,
                        "gender": "Female",
                        "image": {
                            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/19/48036.jpg",
                            "original": "https://static.tvmaze.com/uploads/images/original_untouched/19/48036.jpg"
                        },
                        "updated": 1522261992,
                        "_links": {
                            "self": {
                                "href": "https://api.tvmaze.com/people/85913"
                            }
                        }
                    },
                    "character": {
                        "id": 170441,
                        "url": "https://www.tvmaze.com/characters/170441/running-man-lizzy",
                        "name": "Lizzy",
                        "image": null,
                        "_links": {
                            "self": {
                                "href": "https://api.tvmaze.com/characters/170441"
                            }
                        }
                    },
                    "self": true,
                    "voice": false
                },
                {
                    "person": {
                        "id": 84875,
                        "url": "https://www.tvmaze.com/people/84875/jun-so-min",
                        "name": "Jun So Min",
                        "country": {
                            "name": "Korea, Republic of",
                            "code": "KR",
                            "timezone": "Asia/Seoul"
                        },
                        "birthday": "1986-04-07",
                        "deathday": null,
                        "gender": "Female",
                        "image": {
                            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/138/345083.jpg",
                            "original": "https://static.tvmaze.com/uploads/images/original_untouched/138/345083.jpg"
                        },
                        "updated": 1636917687,
                        "_links": {
                            "self": {
                                "href": "https://api.tvmaze.com/people/84875"
                            }
                        }
                    },
                    "character": {
                        "id": 449893,
                        "url": "https://www.tvmaze.com/characters/449893/running-man-jun-so-min",
                        "name": "Jun So Min",
                        "image": null,
                        "_links": {
                            "self": {
                                "href": "https://api.tvmaze.com/characters/449893"
                            }
                        }
                    },
                    "self": true,
                    "voice": false
                },
                {
                    "person": {
                        "id": 184628,
                        "url": "https://www.tvmaze.com/people/184628/yang-se-chan",
                        "name": "Yang Se Chan",
                        "country": {
                            "name": "Korea, Republic of",
                            "code": "KR",
                            "timezone": "Asia/Seoul"
                        },
                        "birthday": "1986-12-08",
                        "deathday": null,
                        "gender": "Male",
                        "image": {
                            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/122/307107.jpg",
                            "original": "https://static.tvmaze.com/uploads/images/original_untouched/122/307107.jpg"
                        },
                        "updated": 1501581952,
                        "_links": {
                            "self": {
                                "href": "https://api.tvmaze.com/people/184628"
                            }
                        }
                    },
                    "character": {
                        "id": 449894,
                        "url": "https://www.tvmaze.com/characters/449894/running-man-yang-se-chan",
                        "name": "Yang Se Chan",
                        "image": null,
                        "_links": {
                            "self": {
                                "href": "https://api.tvmaze.com/characters/449894"
                            }
                        }
                    },
                    "self": true,
                    "voice": false
                }
            ]
        }
    }

    const localVue = createLocalVue()
    localVue.use(BootstrapVue)

    const wrapper = mount(ShowDetails, { propsData: { showDetails: aShow }, localVue })
    const showSummery = wrapper.find('p');
    const castTitle = wrapper.findAll('h5');

    expect(showSummery.exists()).toBe(true);
    expect(castTitle.length).toEqual(aShow._embedded.cast.length);
  })
})
