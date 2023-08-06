import { HOURS_IN_DAY, PAGE_TIMELINE, MIDNIGHT_HOUR } from './consts'
import { isPageValid } from './validators'

export function normolizePageHash() {
  const page = window.location.hash.slice(1)

  if (isPageValid(page)) {
    return page
  }

  window.location.hash = PAGE_TIMELINE

  return PAGE_TIMELINE
}

export function generateTimeLineItems() {
  const timeLineItems = []

  for (let hour =  MIDNIGHT_HOUR; hour < HOURS_IN_DAY; hour++) {
    timeLineItems.push({ hour })
  }

  return timeLineItems
}
