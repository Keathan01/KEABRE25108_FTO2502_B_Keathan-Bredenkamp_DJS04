

function filterByGenres(podcasts, selectedGenres) {
  if (selectedGenres.length === 0) return podcasts;
  return podcasts.filter((podcast) =>
    podcast.genres.some((id) => selectedGenres.includes(id))
  );
}

export function filterAndSort(podcasts, searchTerm, selectedGenres, sortOrder) {
  let result = [...podcasts];
  if (searchTerm)
    result = result.filter((p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  result = filterByGenres(result, selectedGenres);
  if (sortOrder === "newest")
    result.sort((a, b) => new Date(b.updated) - new Date(a.updated));
  else if (sortOrder === "title-asc")
    result.sort((a, b) => a.title.localeCompare(b.title));
  else if (sortOrder === "title-desc")
    result.sort((a, b) => b.title.localeCompare(a.title));
  return result;
}
