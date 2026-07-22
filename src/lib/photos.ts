export type Photo = {
  src: string;
  alt: string;
  caption?: string;
  year?: number;
};

// Drop image files into /public/photography/ and add an entry below.
// Order here = order on the page. Every 7th entry is rendered as a large
// "feature" tile (col-span-2 row-span-2), so put a hero shot at 1, 8, 15…
export const photos: Photo[] = [];
