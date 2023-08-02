import { HOURS_IN_DAY, PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE } from './consts'

export function normolizePageHash() {
  const hash = window.location.hash.slice(1)

  if ([PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS].includes(hash)) {
    return hash
  }

  window.location.hash = PAGE_TIMELINE

  return PAGE_TIMELINE
}


export function generateTimeLineItems() {
  const timeLineItems = []

  for (let hour = 0; hour < HOURS_IN_DAY; hour++) {
    timeLineItems.push({ hour })
  }

  return timeLineItems
}