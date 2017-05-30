import {connect} from "react-redux"
import {HomePage} from "../../components/HomePage/index";
import {categories} from "../../actions/index"
import {bindActionCreators} from "redux";

const mapStateToProps = (state) => {
    return {
        categories: state.categories,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        categoryActions: bindActionCreators(categories, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)