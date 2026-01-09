import sample from './games-1-8-2026.json' assert { type: 'json' }

const appName = 'Grouvee'
const grouveeUrl = 'https://www.grouvee.com'
const profileUrl = grouveeUrl + '/user/21384-burgbits/shelves/'

const finishedApi = grouveeUrl + '/api/shelves/build_shelf_page/148221/?o=-latest_finish'
const finishedUrl = grouveeUrl + '/user/21384-burgbits/shelves/148221-finished/?o=-latest_finish'
const playingApi = grouveeUrl + '/api/shelves/build_shelf_page/113530'
const playingUrl = grouveeUrl + '/user/21384-burgbits/shelves/113530-playing/'

const parseGrouvee = async (api: string) => {
  const data: any = await $fetch<any>(api, {
      headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36'
      }
  })
  const games = data?.serialized_data?.ssgs
  let items = new Array
  games?.forEach((game: any) => {
    const formattedDate = getLatestPlaythrough(game?.dates)?.date_finished 
      ? new Date(getLatestPlaythrough(game.dates).date_finished).toLocaleDateString("en-US", { month: 'short', day: 'numeric', year: 'numeric' }) 
      : undefined
    items.push({
      completionLevel: getLatestPlaythrough(game?.dates)?.level_of_completion,
      coverSrc: game?.game?.thumbnail_147_220,
      dateFinished: formattedDate,
      firstTime: game?.dates?.length === 1,
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
    return date.date_finished !== null && date.date_finished !== undefined ? date : {}
  }).sort().at(-1)
}

export default defineCachedEventHandler(async () => {
  return sample
  // return {
  //   appName,
  //   profileUrl,
  //   fetched: new Date(),
  //   shelves: [
  //     { 
  //       title: 'Currently Playing',
  //       fetchedFrom: playingUrl,
  //       items: await parseGrouvee(playingApi),
  //     },
  //     { 
  //       title: 'Recently Finished',
  //       fetchedFrom: finishedUrl,
  //       items: await parseGrouvee(finishedApi),
  //     }
  //   ],
  // }
}, { maxAge: 60 /* seconds */ })