import type {Movie} from './types';

export function filterMoviesList(list: Movie[], query: string) {
  if (!list.length) return [];
  return list.filter((item) => {
    if (!item.title) return false;
    return item.title.toLowerCase().includes(query.toLowerCase());
  });
}
