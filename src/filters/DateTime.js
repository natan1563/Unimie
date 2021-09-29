import moment from 'moment';

// Filtro para converter um objeto Date em uma string
// no formato Brasileiro de Data com horário
export default (date, displayDateTimeParam) => {
  moment.locale('pt-br');
  let displayDateTime = 'LL';

  if (!displayDateTime) {
    displayDateTime = displayDateTimeParam;
  }

  if (date) {
    if (moment.isMoment(date)) {
      return date.format(displayDateTime);
    }

    if (date instanceof Date) {
      return moment(date).format(displayDateTime);
    }
    return moment(String(date), 'DD-MM-YYYY HH:mm:ss').format(displayDateTime);
  }

  return null;
};
