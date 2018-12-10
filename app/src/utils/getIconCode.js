//@flow

export const getIconCode = (category: String) => {
  switch (category) {
    case 'plast':
      return 'plastförpackning';
    case 'papper':
      return 'pappersförpackning';
    case 'glas':
      return 'glasförpackningar';
    case 'metall':
      return 'metallförpackning';
    case 'tidningar/returpapper':
      return 'tidning_returpapper';
    default:
      return 'ovrigt';
  }
};
