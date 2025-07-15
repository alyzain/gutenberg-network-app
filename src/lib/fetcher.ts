export async function fetchBookText(bookId: string): Promise<string> {
  const url = `https://www.gutenberg.org/files/${bookId}/${bookId}-0.txt`
  const res = await fetch(url)

  if (!res.ok) throw new Error(`Failed to fetch book: ${bookId}`)
  const raw = await res.text()

  // Clean up the text to remove Gutenberg headers/footers
  const lines = raw.split('\n')
  const start = lines.findIndex(line => line.includes('*** START OF THE PROJECT GUTENBERG'))
  const end = lines.findIndex(line => line.includes('*** END OF THE PROJECT GUTENBERG'))
  const core = (start >= 0 && end > start) ? lines.slice(start + 1, end) : lines
  const final = core.join('\n');

  return final.trim()
}

