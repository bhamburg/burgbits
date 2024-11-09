import { parse } from 'node-html-parser'

const appName = 'Goodreads'
const fetchedDate = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})
const fetchedTime = new Date().toLocaleTimeString('en-us')
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
    items.push({
      author: row.querySelector('.field.author')?.getElementsByTagName('a')?.at(0)?.text,
      coverSrc: row.getElementsByTagName('img')?.at(0)?.getAttribute('src'),
      dateFinished: row.querySelector('.field.date_read')?.querySelectorAll('.date_row')?.at(0)?.querySelector('.date_read_value')?.text,
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
    fetched: `${fetchedDate} at ${fetchedTime}`,
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
