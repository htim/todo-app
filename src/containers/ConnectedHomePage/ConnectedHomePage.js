import {connect} from "react-redux"
import {HomePage} from "../../components/HomePage/index";

const mapStateToProps = (state) => {
    return {
        categories: state.categories,
        tasks: state.tasks
    }
};

export default connect(mapStateToProps)(HomePage)