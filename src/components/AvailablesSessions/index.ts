const AvailablesSessions = () => {};

export default AvailablesSessions;
// import React from 'react';
// import { SectionList, StyleSheet, Text, View } from 'react-native';
// import { MovieSession, Room } from '../../models/MovieSession';

// const styles = StyleSheet.create({
//   header: {
//     marginTop: 6,
//   },
//   item: {},
//   time: {},
//   labelContainer: {},
//   labelText: {},
// });

// type Props = {
//   sessions: MovieSession[];
// };

// const Label = (text: string) => (
//   <View style={styles.labelContainer}>
//     <Text style={styles.labelText}>{text}</Text>
//   </View>
// );

// const Item = (rooms: Room[]) => (
//     {
//         rooms.map(room => (
//           <View>
//             {
//             room.sessions.map(session => (
//               <Text>{session.times}: </Text>
//               <View>
//                 {
//                   room.session.types.map(type => <Label text={type.alias}>)
//                 }
//               </View>
//             )
//         }
//           </View>
//         );
//     }
// );

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
