import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import Head from 'next/head'; //head부분 수정하기 위함.
import withReduxSaga from 'next-redux-saga';
import wrapper from '../store/configureStore';

const SolarSeed = ({ Component }) => {
    return(
        <>
            <Head>
                <meta charSet="utf-8"/>
                <title>SolarSeed</title>
            </Head>
            <Component />
        </>
    );
};


SolarSeed.propTypes = {
    Component: PropTypes.elementType.isRequired,
}
export default wrapper.withRedux(withReduxSaga(SolarSeed));