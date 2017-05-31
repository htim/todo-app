import {connect} from "react-redux"
import {categories} from "../../actions/index"
import {bindActionCreators} from "redux";
import CategoryTree from "../../components/CategoryTree/CategoryTree";

const mapStateToProps = (state) => {
    return {
        categories: state.categories
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        categoryActions: bindActionCreators(categories, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryTree)