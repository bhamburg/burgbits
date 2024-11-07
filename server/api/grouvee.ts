const grouveeUrl = 'https://www.grouvee.com'
const finishedApi = grouveeUrl + '/api/shelves/build_shelf_page/148221/?search=&o=-latest_finish'
const playingApi = grouveeUrl + '/api/shelves/build_shelf_page/113530'

const parseGrouvee = async (api: string) => {
  const data: any = await $fetch<any>(api)
  const shelfUrl = data?.serialized_data?.selected_shelf?.url
  const games = data?.serialized_data?.ssgs
  let items = new Array
  games?.forEach((game: any) => {
    items.push({
      artSrc: grouveeUrl + game?.game?.thumbnail_147_220,
      dateFinished: getLatestPlaythrough(game?.dates),
      name: game?.game?.name,
      platforms: game?.metadata?.platforms?.map((platform: any) => platform.name),
      rating: game?.review?.rating,
      url: grouveeUrl + game?.game?.url,
    })
  })
  return {
    fetchedFrom: api,
    url: shelfUrl,
    items,
  }
}

const getLatestPlaythrough = (datesArray: any[]) => {
  return datesArray.map((date) => {
    return date.date_finished !== null && date.date_finished !== undefined ? date.date_finished : ''
  }).sort().at(-1)
}

export default defineEventHandler(async () => {
  return {
    fetched: new Date(),
    playing: await parseGrouvee(playingApi),
    finished: await parseGrouvee(finishedApi),
  }
})