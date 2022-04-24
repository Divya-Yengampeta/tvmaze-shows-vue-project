import { mount, createLocalVue } from '@vue/test-utils'
import SearchShowThum from '@/components/SearchShowThum.vue'
import { BootstrapVue } from 'bootstrap-vue'

describe('SearchShowThum.vue', () => {
  it('renders SearchShowThum thumb', () => {
    const aShow = {
        "id": 3022,
        "url": "https://www.tvmaze.com/shows/3022/future-man",
        "name": "Future Man",
        "type": "Scripted",
        "language": "English",
        "genres": [
            "Comedy",
            "Action",
            "Science-Fiction"
        ],
        "status": "Ended",
        "runtime": null,
        "averageRuntime": 30,
        "premiered": "2017-11-14",
        "ended": "2020-04-03",
        "officialSite": "https://www.hulu.com/future-man",
        "schedule": {
            "time": "",
            "days": []
        },
        "rating": {
            "average": 7
        },
        "weight": 96,
        "network": null,
        "webChannel": {
            "id": 2,
            "name": "Hulu",
            "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
            },
            "officialSite": "https://www.hulu.com/"
        },
        "dvdCountry": null,
        "externals": {
            "tvrage": 50458,
            "thetvdb": 330997,
            "imdb": "tt4975856"
        },
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/250/625130.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/250/625130.jpg"
        },
        "summary": "<p><b>Future Man</b> chronicles a janitor by day, world-ranked gamer by night who is tasked with preventing the extinction of humans after mysterious visitors from the future declare him to be the key to defeating the imminent super-race invasion.</p>",
        "updated": 1633454437,
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/shows/3022"
            },
            "previousepisode": {
                "href": "https://api.tvmaze.com/episodes/1825173"
            }
        }
    }

    const localVue = createLocalVue()
    localVue.use(BootstrapVue)

    const wrapper = mount(SearchShowThum, {propsData: { show: aShow }, localVue})
    const cardTitle = wrapper.find('h5');
    expect(cardTitle.text()).toMatch(aShow.name);
  })
})
