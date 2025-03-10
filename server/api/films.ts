import Parser from 'rss-parser'

const appName = 'Letterboxd'
const letterboxdUrl = 'https://letterboxd.com'
const feedUrl = letterboxdUrl + '/burgbits/rss'
const profileUrl = letterboxdUrl + '/burgbits'

// {
//   "creator": "Brian Hamburg",
//   "title": "Encanto, 2021 - ★★★★½",
//   "link": "https://letterboxd.com/burgbits/film/encanto/",
//   "pubDate": "Fri, 21 Jul 2023 06:47:44 +1200",
//   "dc:creator": "Brian Hamburg",
//   "content": " <p><img src=\"https://a.ltrbxd.com/resized/film-poster/4/9/6/5/9/2/496592-encanto-0-600-0-900-crop.jpg?v=3fbb07bf26\"/></p> <p>Watched on Sunday July 31, 2022.</p> ",
//   "contentSnippet": "Watched on Sunday July 31, 2022.",
//   "guid": "letterboxd-watch-416736316",
//   "isoDate": "2023-07-20T18:47:44.000Z"
// }

const parseLetterboxd = async (url: string) => {
  const parser = new Parser();
  const parsedData = await parser.parseURL(url);
  const films = parsedData.items
  let items = new Array
  films?.forEach((film: any) => {
    const trimmedTitle = film.title.split(' - ')[0]
    items.push({
      coverSrc: film.content.split('\"')[1],
      dateFinished: film.isoDate.slice(0,10),
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