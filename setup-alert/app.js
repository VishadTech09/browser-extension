let alarm_id = 'reminder';

document.getElementById("btnSet").onclick = () => {
    //  let dt = new Date();
    let reminderTimeText = document.getElementById('reminderDateTime').value;
    // dt.setSeconds(dt.getSeconds() + parseInt(sec));
    let reminderDateTime = new Date(reminderTimeText); 
    chrome.alarms.create(alarm_id, { when: reminderDateTime.getTime() })
}
document.getElementById("btnClear").onclick = () => {
    chrome.alarms.clear(alarm_id);
}