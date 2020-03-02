import {connect} from '../../core/_root'
import {Dash} from "../../components/dash";
import {DashActions} from '../../core/modules/dash'
import {HomeActions} from '../../core/modules/home'

const mapDispatchToProps = dispatch => ({
    actions: {
        ...DashActions(dispatch),
        ...HomeActions(dispatch),
    },
    dispatch

})

const mapStateToProps = state => ({
    ...state.home,
    ...state.dash,
})

export default connect(mapStateToProps, mapDispatchToProps)(Dash)
