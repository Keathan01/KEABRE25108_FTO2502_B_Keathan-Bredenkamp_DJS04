import { genres } from "../data/genres";
export function mapGenreIdsToTitles(genreIds) {
  return genreIds.map(
    (id) => genres.find((g) => g.id === id)?.title || "Unknown"
  );
}
