module.exports = async(client) => {
    let status_liste = [
        "SlowBOT",
        `uwu`
      ]
    client.user.setActivity()
    setInterval(() => {
    let st = Math.floor(Math.random() * (status_liste.length - 1) + 1)
    client.user.setActivity(status_liste[st], { type: 'PLAYING', activity: 'DND' })
  
    }, 50000)
};