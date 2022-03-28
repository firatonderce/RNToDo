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
import {SvgIconDoneLight, SvgIconTrashLight} from '../../core/icons';
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
    let toValueForAnimation = translationX >= 0 ? 0 : -openValue;
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
    const duration = 100;
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
      <View key={id} style={styles.toDoContentContainer}>
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

  const animateStyle = StyleSheet.create({
    container: {
      width: '90%',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '2.75%'
    },
    toDo: {
      backgroundColor: colors.backgroundColor,
      borderRadius: 20,
      height: heightOfToDoItem,
      width: '100%',
      flexDirection: 'row',
      zIndex: 1
    },
    trashIconContainer: {
      position: 'absolute',
      alignItems: 'center',
      alignContent: 'center',
      right: 0,
      height: heightOfToDoItem,
      justifyContent: 'center',
      opacity: buttonOpacity.interpolate({
        inputRange: [0.5, 0.9, 1],
        outputRange: [0, 0, 1]
      })
    },
    trashIconButton: {
      width: heightOfToDoItem / 1.5,
      height: heightOfToDoItem / 1.5,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      backgroundColor: colors.backgroundColor
    }
  });

  return (
    <View style={animateStyle.container}>
      <PanGestureHandler
        activeOffsetX={[-1, 1]}
        onEnded={finalize}
        onGestureEvent={swipe}>
        <Animated.View
          style={{
            ...animateStyle.toDo,
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
      <Animated.View style={animateStyle.trashIconContainer}>
        <TouchableOpacity
          style={animateStyle.trashIconButton}
          onPress={props.deleteToDo}>
          <SvgIconTrashLight />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const colors = getColors('ToDoComponent');

const styles = StyleSheet.create({
  toDoContentContainer: {flex: 1, flexDirection: 'row'},
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
