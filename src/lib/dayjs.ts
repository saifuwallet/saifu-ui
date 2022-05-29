import dayjs from 'dayjs';
import calendar from 'dayjs/plugin/calendar';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(calendar);
dayjs.extend(relativeTime);

export default dayjs;

export const displayDate = (blockTime: number | null | undefined) =>
  blockTime ? dayjs.unix(blockTime).fromNow(true) : '-';
