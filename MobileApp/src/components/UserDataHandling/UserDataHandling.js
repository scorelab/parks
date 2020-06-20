export function generateResult(data) {
  let result = [];
  result.push(['map-marker', data.location.toString()]);
  let time = new Date(data.time);
  time = time.toString().split(' ');
  time = time.splice(0, time.length - 1);
  time = time.toString().replace(/,/g, ' ');
  result.push(['clock', time.toString()]);
  if (data.isAlive === 1) {
    result.push(['cards-heart', 'Alive']);

    if (data.sex === 0) {
      result.push(['gender-male-female', 'Male']);
    } else if (data.sex === 1) {
      result.push(['gender-male-female', 'Female']);
    } else if (data.sex === 2) {
      result.push(['gender-male-female', 'Both male and female']);
    } else {
      result.push(['gender-male-female', "Don't know the gender"]);
    }
  } else {
    result.push(['cards-heart', 'Died']);
  }
  if (data.type !== '') {
    result.push(['elephant', data.type]);
  } else {
    result.push(['elephant', 'Un-Identified']);
  }
  result.push(['shield-check', data.verified]);
  if (data.notes !== '') {
    result.push(['note-text', data.notes]);
  } else {
    result.push(['note-text', 'Notes unavailable']);
  }
  return result;
}

export function generateUUID() {
  let dt = new Date().getTime();
  let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(
    c,
  ) {
    let r = (dt +  window.Crypto.getRandomValues(new Uint32Array(1)) * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
  //console.log(uuid)
  return uuid;
}
