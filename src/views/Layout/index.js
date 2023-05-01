import { connect } from "react-redux";
import AppLayout from "../../components/AppLayout";

const mapStateToProps = state => ({ global: state.global, user: state.user });

const mapDispatchToProps = () => ({
  logout: () => null
});

const enhance = connect(mapStateToProps, mapDispatchToProps);

export default enhance(AppLayout);
