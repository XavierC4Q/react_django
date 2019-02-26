export default ({ dispatch, getState }) => next => action => {
    const current = next(action)

    console.log(`THE ACTION: ${current.type}`)
    console.log(`THE PAYLOAD OF ${current.type} IS: ${current.payload}`)

    const state = getState()

    console.log('#### THE STORE ####')

    Object.keys(state).forEach(key => {
        console.log(`----- ${key.toUpperCase()}`)
        console.log(state[key])
    })
}