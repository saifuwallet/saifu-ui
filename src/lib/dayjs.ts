import dayjs from 'dayjs';
import calendar from 'dayjs/plugin/calendar';
import relativeTime from 'dayjs/plugin/relativeTime';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(calendar);
dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);

export default dayjs;

export const displayDate = (blockTime: number | null | undefined) =>
  blockTime ? dayjs.unix(blockTime).format('L') : '-';
