import type { CollectionEntry } from "astro:content";

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).format(date);
}

type Note = CollectionEntry<"posts">;

export function splitNotesByYear(notes: Note[]): Record<number, Note[]> {
  return notes.reduce((acc: Record<number, Note[]>, note) => {
    const year = note.data.published_date.getFullYear();
    if (!acc[year]) acc[year] = [];
    acc[year].push(note);
    return acc;
  }, {});
}

export function notesInYearOrder(
  notes: Note[],
  order: "asc" | "desc" = "desc",
) {
  const notesByYear = splitNotesByYear(notes);
  return Object.keys(notesByYear)
    .map((year) => parseInt(year))
    .sort((a, b) => (order === "desc" ? b - a : a - b))
    .map((year) => ({
      year,
      notes: notesByYear[year],
    }));
}
