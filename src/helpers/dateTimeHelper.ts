import moment from 'moment';

export const formatAppDate = (date: Date) => {
    return moment(date).format('MMM DD, YYYY | hh:mm A');
};
