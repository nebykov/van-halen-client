import { IGlovalSearch } from "@/types/types"
import axios from "axios"

export async function globalSearch(value: string) {
    try {
      const response = await axios.get<IGlovalSearch>(`http://localhost:5000/search?value=${value}`);
      return response.data;
    } catch (error) {
      throw new Error('Search error')
    }
  }