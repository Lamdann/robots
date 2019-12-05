export const apiCall = (link) =>
  fetch(link).then(response => response.json())
//e27a95f28dbafd9b112fef713a5684f40f9255f3