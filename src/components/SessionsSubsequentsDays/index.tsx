import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import { getMoviesSessions } from '../../service';
import DateUtil, { DateAndWeekdays } from '../../utils/DateUtil';
// import { MovieSession } from '../../models/MovieSession';
// import AvailablesSessions from '../AvailablesSessions';
import ErrorContent from '../ErrorContent';
import Loading from '../Loading';

const styles = StyleSheet.create({
  segmentedControl: {
    marginTop: 15,
  },
});

type Props = {
  moveId: string;
};

const SessionsSubsequentsDays = ({ moveId }: Props) => {
  const [dateAndWeekdays, setDateAndWeekdays] = useState<DateAndWeekdays[]>([]);

  const [date, setDate] = useState('');
  // const [moviesSessions, setMoviesSessions] = useState<MovieSession[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null as any);

  const [selectedDayIndex, setSelectedDayIndex] = useState(0);

  useEffect(() => {
    setDateAndWeekdays(DateUtil.getDateAndWeekdays());
  }, []);

  useEffect(() => {
    console.log(dateAndWeekdays);
    setSelectedDayIndex(dateAndWeekdays[0].dayIndex);
  }, [dateAndWeekdays]);

  useEffect(() => {
    const getSessions = async () => {
      setLoading(true);

      try {
        const { data } = await getMoviesSessions(moveId, date);
        console.log(data);
        // setMoviesSessions(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getSessions();
  }, [moveId, date]);

  useEffect(() => {
    const dateAndWeekday = dateAndWeekdays.find(
      value => value.dayIndex === selectedDayIndex,
    );
    if (dateAndWeekday) {
      setDate(dateAndWeekday.date);
    }
  }, [dateAndWeekdays, selectedDayIndex]);

  return (
    <View>
      <SegmentedControl
        style={styles.segmentedControl}
        values={dateAndWeekdays.map(item => item.weekday)}
        selectedIndex={selectedDayIndex}
        onValueChange={value => {
          console.log(dateAndWeekdays);

          console.log('DayIndex - ', selectedDayIndex);
          console.log('Date - ', date);
          setSelectedDayIndex(DateUtil.getDayIndexByWeekday(value));
        }}
      />
      {/* // onChange={event => {
        //   setSelectedDayIndex(
        //     DateUtil.getDayIndexByWeekday(
        //       daysOfTheWeek[event.nativeEvent.selectedSegmentIndex],
        //     ),
        //   );
        //   console.log(event.nativeEvent.selectedSegmentIndex);
        // }} */}

      {
        loading ? (
          <Loading />
        ) : error ? (
          <ErrorContent message="Não há sessões disponíveis no momento" />
        ) : null
        // (
        //   <AvailablesSessions sessions={moviesSessions} />
        // )
      }
    </View>
  );
};

export default SessionsSubsequentsDays;
