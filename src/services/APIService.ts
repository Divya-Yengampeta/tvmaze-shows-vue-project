import axios from "@/helpers/axios";
import Show from "../types/Show";
import ShowSearchResult from "../types/ShowSearchResult";

export default class APIService {
  private static _instance: APIService = new APIService();

  public static getInstance(): APIService {
    return APIService._instance;
  }

  constructor() {
    if (APIService._instance) {
      throw new Error("Use getInstance() instead of new.");
    }
    APIService._instance = this;
  }

  public async getShowDetails(showId: string): Promise<Show> {
    const response = await axios.get(`/shows/${showId}?embed=cast`);
    console.log(response.data, "results");
    return response.data;
  }

  public async getShows(): Promise<Show[]> {
    const response = await axios.get(`/shows`);
    return response.data;
  }

  public async getSearchResult(query?: string | any) : Promise<ShowSearchResult[]> {
    const response = await axios.get(`/search/shows?q=${query}`);
    return response.data;
  }
}
