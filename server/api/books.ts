import { parse } from 'node-html-parser'

const goodreadsUrl = 'https://www.goodreads.com'
const currentlyUrl = goodreadsUrl + '/review/list/4284038-brian-hamburg?shelf=currently-reading&sort=date_added&view=covers&per_page=20';
const readUrl = goodreadsUrl + '/review/list/4284038-brian-hamburg?shelf=read&sort=date_read&view=covers&per_page=20';

const parseGoodreads = async (url: string) => {
  const data = await $fetch<string>(url)
  const parsedData = parse(data)
  const rows = parsedData?.querySelectorAll('.bookalike') || []
  let items = new Array
  rows?.forEach((row) => {
    items.push({
      title: row.querySelector('.field.title')?.getElementsByTagName('a')?.at(0)?.getAttribute('title'),
      authors: row.querySelector('.field.author')?.getElementsByTagName('a')?.at(0)?.text,
      rating: row.querySelector('.field.rating .stars')?.getAttribute('data-rating'),
      dateRead: row.querySelector('.field.date_read')?.querySelectorAll('.date_row')?.at(0)?.querySelector('.date_read_value')?.text,
      url: goodreadsUrl + row.querySelector('.title')?.getElementsByTagName('a').at(0)?.getAttribute('href'),
      coverSrc: row.getElementsByTagName('img')?.at(0)?.getAttribute('src')
    })
  })
  return {
    url,
    items
  }
}

export default defineCachedEventHandler(async () => {
  return {
    fetched: new Date(),
    currently: await parseGoodreads(currentlyUrl),
    read: await parseGoodreads(readUrl),
  }
}, { maxAge: 60 /* seconds */ })
