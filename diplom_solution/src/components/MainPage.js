import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import PropTypes from 'prop-types'
import Banner from './Banner'
import Catalog from './Catalog'
import TopSales from './TopSales'

function MainPage(props) {

    return (
        <React.Fragment>
            <Banner />
            <TopSales />
            <Catalog toggle={true}/>
        </React.Fragment>
    )
}

MainPage.propTypes = {

}

export default MainPage

