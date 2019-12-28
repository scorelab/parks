
export function generateResult(data) {
    let result = []
    result.push(['map-marker', data.location.toString()])
    let time = new Date(data.time)
    time = time.toString().split(" ")
    time = time.splice(0, time.length - 1)
    time = time.toString().replace(/,/g, ' ')
    result.push(['clock', time.toString()])
    data.notes !== '' ? result.push(['note-text', data.notes]) : null
    if (data.isAlive === 1) {
        result.push(['cards-heart', "Alive"])

    }

    //console.log(result)
    return result
}

export function generateUUID() {
    let dt = new Date().getTime();
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    //console.log(uuid)
    return uuid
}
