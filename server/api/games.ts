const appName = 'Grouvee'
const grouveeUrl = 'https://www.grouvee.com'
const profileUrl = grouveeUrl + '/user/21384-burgbits/shelves/'
const finishedApi = grouveeUrl + '/api/shelves/build_shelf_page/148221/?o=-latest_finish'
const playingApi = grouveeUrl + '/api/shelves/build_shelf_page/113530'
const fetchedDate = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})
const fetchedTime = new Date().toLocaleTimeString('en-us')

const parseGrouvee = async (api: string) => {
  const data: any = await $fetch<any>(api)
  const shelfUrl = data?.serialized_data?.selected_shelf?.url
  const games = data?.serialized_data?.ssgs
  let items = new Array
  games?.forEach((game: any) => {
    items.push({
      coverSrc: game?.game?.thumbnail_147_220,
      dateFinished: getLatestPlaythrough(game?.dates),
      platforms: game?.metadata?.platforms?.map((platform: any) => platform.name),
      rating: game?.review?.rating,
      title: game?.game?.name,
      url: grouveeUrl + game?.game?.url,
    })
  })
  return items
}

const getLatestPlaythrough = (datesArray: any[]) => {
  return datesArray.map((date) => {
    return date.date_finished !== null && date.date_finished !== undefined ? date.date_finished : ''
  }).sort().at(-1)
}

export default defineCachedEventHandler(async () => {
  return {
    appName,
    profileUrl,
    fetched: `${fetchedDate} at ${fetchedTime}`,
    shelves: [
      { 
        title: 'Currently Playing',
        fetchedFrom: playingApi,
        items: await parseGrouvee(playingApi),
      },
      { 
        title: 'Recently Finished',
        fetchedFrom: finishedApi,
        items: await parseGrouvee(finishedApi),
      }
    ],
  }
}, { maxAge: 60 /* seconds */ })