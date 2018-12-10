//@flow

export const getIconCode = (category: String) => {
  // category names differs between stations and sortingdata
  switch (category) {
    case 'plast':
    case 'plastförpackning':
      return 'plastförpackning';
    case 'pappersförpackning':
    case 'papper':
      return 'pappersförpackning';
    case 'glasförpackningar':
    case 'glas':
      return 'glasförpackningar';
    case 'metall':
    case 'metallförpackning':
      return 'metallförpackning';
    case 'tidning_returpapper':
    case 'tidning/returpapper':
      return 'tidning_returpapper';
    default:
      return 'ovrigt';
  }
};
