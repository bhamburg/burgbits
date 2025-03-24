import { parse } from 'node-html-parser'

const appName = 'Goodreads'
const goodreadsUrl = 'https://www.goodreads.com'
const profileUrl = goodreadsUrl + '/user/show/4284038-brian-hamburg'

const currentlyUrl = goodreadsUrl + '/review/list/4284038-brian-hamburg?shelf=currently-reading&sort=date_added&view=covers';
const readUrl = goodreadsUrl + '/review/list/4284038-brian-hamburg?shelf=read&sort=date_read&view=covers&per_page=100';

const parseGoodreads = async (url: string) => {
  const data = await $fetch<string>(url)
  const parsedData = parse(data)
  const rows = parsedData?.querySelectorAll('.bookalike') || []
  let items = new Array
  rows?.forEach((row) => {
    // dates are not uniform, so we need to parse them out
    const parsedDate = row.querySelector('.field.date_read')?.querySelectorAll('.date_row')?.at(0)?.querySelector('.date_read_value')?.text || ''
    const formattedDate = parsedDate 
      ? new Date(parsedDate).toLocaleDateString("en-GB", { day: 'numeric', month: 'short', year: 'numeric' }) 
      : undefined
    items.push({
      // author
      author: row.querySelector('.field.author')?.getElementsByTagName('a')?.at(0)?.text,
      // strip out substrings that render the lower res images
      coverSrc: row.getElementsByTagName('img')?.at(0)?.getAttribute('src')?.replace('._SX98_','').replace('SY160_',''),
      // formatted date
      dateFinished: formattedDate,
      // get the title and url from the link
      title: row.querySelector('.field.title')?.getElementsByTagName('a')?.at(0)?.getAttribute('title'),
      url: goodreadsUrl + row.querySelector('.title')?.getElementsByTagName('a').at(0)?.getAttribute('href'),
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
        title: 'Currently Reading',
        fetchedFrom: currentlyUrl,
        items: await parseGoodreads(currentlyUrl),
      },
      { 
        title: 'Recently Read',
        fetchedFrom: readUrl,
        items: await parseGoodreads(readUrl),
      }
    ]
  }
}, { maxAge: 60 /* seconds */ })
