import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {nanoid} from 'nanoid'
import PropTypes from 'prop-types'
import Banner from './Banner'
import { addHitSuccess, addHitRequest} from '../actions/actionCreators'
import Catalog from './Catalog'

function MainPage(props) {
    const {itemsHit, loaddingHit} = useSelector(state => state.mainPage);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(addHitRequest())
        const fetchHadlerHit = async () => {
            const response = await fetch('http://localhost:7070/api/top-sales');
            const hit = await response.json();
            dispatch(addHitSuccess(hit))
        }
        fetchHadlerHit();
    }, [dispatch])

    return (
        <React.Fragment>
            <Banner />
            <section className="top-sales">
                <h2 className="text-center">Хиты продаж!</h2>
                <div className="row">
                {itemsHit.sort((a, b) => {return a.price - b.price}).map(el =>                         
                    <div key={nanoid()} className="col-4">
                        <div className="card">
                            <img src={el.images[0]}
                                className="card-img-top img-fluid" alt="Босоножки 'MYER'" />
                            <div className="card-body">
                                <p className="card-text">{el.title}</p>
                                <p className="card-text">{el.price} руб.</p>
                                <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                            </div>
                        </div>
                    </div>    
                )}
                </div>
                {loaddingHit ? 
                    <div className="preloader">
                       <span></span>
                       <span></span>
                       <span></span>
                       <span></span>
                    </div> : null}
            </section>
            <Catalog toggle={true}/>
        </React.Fragment>
    )
}

MainPage.propTypes = {

}

export default MainPage

