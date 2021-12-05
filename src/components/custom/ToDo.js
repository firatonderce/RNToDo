import React, {useState} from 'react';
import {
  Animated,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  PanGestureHandler
} from '../main';
import {SvgIconDoneLight} from '../../core/icons';
import {statuses} from '../../model/todo';
import getColors from '../../core/colors';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const heightOfToDoItem = Dimensions.get('window').height / 9;
const fontSizeOfTitle = 12 + Dimensions.get('window').height / 100;
const fontSizeOfDate = fontSizeOfTitle - 5;
const openValue = Dimensions.get('window').width / 5;

const {DONE, TODO} = statuses;

const AnimatedContainer = props => {
  const [lastPosition, setLastPosition] = useState(0);
  const toDoCardPosition = useState(new Animated.Value(lastPosition))[0];
  const buttonOpacity = new Animated.Value(1);

  const swipe = ({nativeEvent: {translationX}}) => {
    if (lastPosition == 0 && translationX > 0) {
      return;
    }

    let finalValue = translationX < openValue ? translationX : openValue;
    return toDoCardPosition.setValue(finalValue + lastPosition);
  };

  const finalize = ({nativeEvent: {translationX}}) => {
    let toValueForAnimation = translationX > 0 ? 0 : -openValue;
    animateSwipe(toValueForAnimation);
  };

  const animateSwipe = toValue => {
    Animated.spring(toDoCardPosition, {
      toValue,
      useNativeDriver: true
    }).start();
    setLastPosition(toValue);
  };

  const handleOnPress = () => {
    let duration = 100;

    if (lastPosition == 0) {
      return Animated.sequence([
        Animated.timing(buttonOpacity, {
          toValue: 0.5,
          useNativeDriver: true,
          duration: duration
        }),
        Animated.timing(buttonOpacity, {
          toValue: 1,
          useNativeDriver: true,
          duration: duration * 1.5
        })
      ]).start(() => props.onPressItem());
    }
    animateSwipe(0);
  };

  const ToDo = () => {
    const {toDo, changeToDoStatus} = props;
    const {id, title, date, status} = toDo;
    return (
      <View key={id} onStartShouldSetResponder={() => true} style={styles.toDo}>
        <TouchableWithoutFeedback
          containerStyle={{flex: 7}}
          style={styles.firstRow}
          onPress={handleOnPress}>
          <Text style={styles.titleBox} text={title ? title : 'Untitled'} />
          <Text style={styles.dateBox} text={date} />
        </TouchableWithoutFeedback>
        <View style={styles.secondRow}>
          <TouchableOpacity
            onPress={() => changeToDoStatus(status == DONE ? TODO : DONE)}
            style={styles.statusBox}>
            {status == DONE && <SvgIconDoneLight />}
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <PanGestureHandler
      activeOffsetX={[-1, 1]}
      onEnded={finalize}
      onGestureEvent={swipe}>
      <Animated.View
        onStartShouldSetResponder={() => true}
        style={{
          transform: [
            {
              translateX: toDoCardPosition
            }
          ],
          opacity: buttonOpacity
        }}>
        <ToDo />
      </Animated.View>
    </PanGestureHandler>
  );
};

const colors = getColors('ToDoComponent');

const styles = StyleSheet.create({
  toDo: {
    backgroundColor: colors.backgroundColor,
    borderRadius: 20,
    height: heightOfToDoItem,
    width: '90%',
    marginTop: '2.75%',
    flexDirection: 'row'
  },
  firstRow: {
    flex: 1,
    justifyContent: 'center'
  },
  titleBox: {
    color: colors.titleColor,
    flex: 1,
    padding: '3.5%',
    marginLeft: '5%',
    fontSize: fontSizeOfTitle
  },
  dateBox: {
    color: colors.dateTextColor,
    flex: 1,
    padding: '3.5%',
    paddingTop: 0,
    marginLeft: '5%',
    fontSize: fontSizeOfDate
  },
  secondRow: {
    flex: 1.5,
    justifyContent: 'center'
  },
  statusBox: {
    backgroundColor: colors.statusBackground,
    borderRadius: 15,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  }
});

export default AnimatedContainer;
