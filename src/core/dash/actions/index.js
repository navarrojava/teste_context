
export default {
    increment_dash() {
        return async dispatch => {
            const {data} = await mockPromise()

            dispatch({
                type: 'increment_dash',
                payload: {data},
            })
        }
    }
}



const mockPromise = () => {
    return new Promise(resolve => setTimeout(resolve(),3000))
}
