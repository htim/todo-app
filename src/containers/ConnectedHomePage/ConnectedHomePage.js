import {connect} from "react-redux"
import {HomePage} from "../../components/HomePage/index";
import {categories} from "../../actions"
import {bindActionCreators} from "redux";

const mapStateToProps = (state) => {
    return {
        categories: state.categories,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        categoryActions: bindActionCreators(dispatch, categories)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)