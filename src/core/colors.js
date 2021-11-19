const colorPalette = {
  honey: '#E2B357',
  darkgrey: '#575454',
  white: '#FFFFFF', // EAEAEA
  fadedWhite: '#968E8E'
};

const componentColors = {
  NoteComponent: {
    backgroundColor: colorPalette.darkgrey,
    textColor: colorPalette.white,
    dateTextColor: colorPalette.fadedWhite
  }
};

const screenColors = {
  ScreenNotes: {
    backgroundColor: colorPalette.honey,
    textColor: colorPalette.white
  },
  ScreenNoteDetails: {
    backgroundColor: colorPalette.darkgrey,
    titleFieldBackgroundColor: colorPalette.honey,
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
