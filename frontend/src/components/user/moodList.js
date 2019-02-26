import React from 'react'

const header = (owner, currentUser, id) => {
    if (owner && currentUser && Number(id) !== currentUser.pk) {
        return (<h1>{owner.username} 's Moods</h1>)
    } else if (owner && currentUser && Number(id) === currentUser.pk) {
        return (<h1>Your Moods</h1>)
    } else if (owner) {
        return (<h1>{owner.username} 's Moods</h1>)
    } else {
        return ''
    }
}

const moodEntries = (moods, owner, currentUser) => {
    return moods.map(mood => (
        <div>
            <h3>{mood.title}</h3>
            <p>Primary Emotion: {mood.primary_mood}</p>
            <p>Secondary Emotion: {mood.secondary_mood}</p>
        </div>
    ))
}

const MoodList = ({ id, moods, currentUser, owner }) => {
    return (<div>
        {header(owner, currentUser, id)}
        {moods.length !== 0 && moodEntries(moods, owner, currentUser)}
    </div>);
}
 
export default MoodList;