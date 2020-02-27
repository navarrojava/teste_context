import connect from '../../core/lib/connect'
import {Dash} from "../../components/dash";
import DashActions  from '../../core/dash/actions'

const mapDispatchToProps = dispatch => ({
    actions: {
        increment_dash: async () => {
            dispatch({type:'increment_dash'})
        },
        increment_home: async () => {
            dispatch({type:'increment_home'})
        },
    },

})

const mapStateToProps = state => ({
    ...state.home,
    ...state.dash,
})

export default connect(mapStateToProps, mapDispatchToProps)(Dash)
