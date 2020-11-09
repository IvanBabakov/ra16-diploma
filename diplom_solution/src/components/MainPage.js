import React from 'react'
import banner from '../img/banner.jpg'
import PropTypes from 'prop-types'
import Banner from './Banner'

function MainPage(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Banner />

                    <section className="top-sales">
                        <h2 className="text-center">Хиты продаж!</h2>

                        <div className="preloader">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </section>

                    <section className="catalog">
                        <h2 className="text-center">Каталог</h2>

                        <div className="preloader">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    )
}

MainPage.propTypes = {

}

export default MainPage

