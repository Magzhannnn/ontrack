import { HOURS_IN_DAY, MIDNIGHT_HOUR, NAV_ITEMS } from './consts'

export function isPageValid(page) {
  return Object.keys(NAV_ITEMS).includes(page)
}

export function validateSelectOptions(options) {
  return options.every(isSelectOptionValid)
}
function isSelectOptionValid({ value, label }) {
  return typeof value === 'number' && typeof label === 'string'
}

export function validateTimelineItems(timelineItems) {
  return timelineItems.every(isTimeLineValid)
}
export function isTimeLineValid({ hour }) {
  return typeof hour === 'number' && hour >= MIDNIGHT_HOUR && hour < HOURS_IN_DAY
}
