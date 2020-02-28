import connect from '../../core/lib/connect'
import {Dash} from "../../components/dash";
import {DashActions} from '../../core/dash'
import {HomeActions} from '../../core/home'

const mapDispatchToProps = dispatch => ({
    actions: {
        ...DashActions(dispatch),
        ...HomeActions(dispatch)
    },
    dispatch

})

const mapStateToProps = state => ({
    ...state.home,
    ...state.dash,
})

export default connect(mapStateToProps, mapDispatchToProps)(Dash)
