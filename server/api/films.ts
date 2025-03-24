import Parser from 'rss-parser'

const appName = 'Letterboxd'
const letterboxdUrl = 'https://letterboxd.com'
const feedUrl = letterboxdUrl + '/burgbits/rss'
const profileUrl = letterboxdUrl + '/burgbits'

const parseLetterboxd = async (url: string) => {
  const parser = new Parser();
  const parsedData = await parser.parseURL(url);
  const films = parsedData.items
  let items = new Array
  films?.forEach((film: any) => {
    const trimmedTitle = film.title.split(' - ')[0]
    const formattedDate = film.isoDate 
      ? new Date(film.isoDate).toLocaleDateString("en-GB", { month: 'short', day: 'numeric', year: 'numeric' }) 
      : undefined
    items.push({
      coverSrc: film.content.split('\"')[1],
      dateFinished: formattedDate,
      rating: film.title.split(' - ')[1],
      releaseYear: trimmedTitle.slice(trimmedTitle.length - 4,trimmedTitle.length),
      title: trimmedTitle.slice(0,trimmedTitle.length - 6),
      url: film.link
    })
  })
  return items
}

export default defineCachedEventHandler(async () => {
  return {
    appName,
    profileUrl,
    fetched: new Date(),
    shelves: [
      { 
        title: 'Recently Watched',
        fetchedFrom: feedUrl,
        items: await parseLetterboxd(feedUrl),
      }
    ]
  }
}, { maxAge: 60 /* seconds */ })