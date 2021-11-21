const colorPalette = {
  honey: '#E2B357',
  darkgrey: '#575454',
  white: '#FFFFFF', // EAEAEA
  fadedWhite: '#968E8E'
};

const componentColors = {
  SearchBarComponent: {
    backgroundColor: colorPalette.darkgrey
  },
  TodoComponent: {
    backgroundColor: colorPalette.darkgrey,
    titleColor: colorPalette.white,
    dateTextColor: colorPalette.fadedWhite,
    statusBackground: colorPalette.white
  }
};

const screenColors = {
  ScreenTodos: {
    backgroundColor: colorPalette.honey,
    textColor: colorPalette.white
  },
  ScreenTodoDetails: {
    backgroundColor: colorPalette.darkgrey,
    titleFieldBackgroundColor: colorPalette.honey,
    placeHolderColor: 'rgba(255, 255, 255, 0.65)',
    texts: colorPalette.white
  }
};

export default getColors = name => {
  return screenColors[name]
    ? screenColors[name]
    : componentColors[name]
    ? componentColors[name]
    : {};
};
