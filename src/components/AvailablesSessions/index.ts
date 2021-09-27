const AvailablesSessions = () => {};

export default AvailablesSessions;
// import React from 'react';
// import { SectionList, StyleSheet, Text, View } from 'react-native';
// import { MovieSession } from '../../models/MovieSession';

// const styles = StyleSheet.create({
//   header: {
//     marginTop: 6,
//   },
//   item: {},
//   time: {},
// });

// type Props = {
//   sessions: MovieSession[];
// };

// const Label = (text: string) => (
//   <View style={styles.item}>
//     <Text style={styles.item}>{text}</Text>
//     </View>
// );

// // const Item = (session: MovieSession) => (
// //     {{session.rooms.map(room => (
// //       <View>
// //         <Text>{room.session.times}</Text>
// //         {room.session.types.map(type => <Label text={type.alias}>
// //           )}
// //       </View>}
// //     ))
// // );

// const AvailablesSessions = ({sessions}: Props) => {
//   return (
//     <SectionList
//       // sections={sessions}
//       sections={data}
//       keyExtractor={(item, index) => item + index}
//       renderItem={({ item }) => <Item session={item} />}
//       renderSectionHeader={({ section: { name } }) => (
//         <Text style={styles.header}>{name}</Text>
//       )}
//     />
//   );
// };

// export default AvailablesSessions;
