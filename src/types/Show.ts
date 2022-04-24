export default interface Show {
    id: number,
    url: string,
    name: string,
    type: string,
    language: string,
    genres: string[],
    status: string,
    runtime: number,
    averageRuntime: number,
    premiered: string,
    ended: string,
    officialSite: string,
    schedule: {
        time: string,
        days: string[]
    },
    rating: {
        average: number
    },
    weight: number,
    network: {
        id: number,
        name: string,
        country: {
            name: string,
            code: string,
            timezone: string
        }
    },
    webChannel: string | any,
    externals: {
        tvrage: number,
        thetvdb: number,
        imdb: string
    },
    image: {
        medium: string,
        original: string
    },
    summary: string,
    updated: number,
    _links: Links,
    _embedded: Cast
}

export interface Links {
    self: {
        href: string
    },
    previousepisode: {
        href: string
    },
    nextepisode: {
        href: string
    }
}

export interface Cast {
    person: Person[],
    character: Character
}

export interface Character {
    id: number,
}

export interface Person {
    id: number,
    url: string,
    name: string,
    country: {
      name: string,
      code: string,
      timezone: string
    },
    birthday: string,
    deathday: string,
    gender: string,
    image: {
      medium: string,
      original: string
    },
    updated: number,
    _links: {
        self: {
            href: string
        }
    }
}