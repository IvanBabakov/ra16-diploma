import React, {useEffect, useState} from 'react'
import {nanoid} from 'nanoid'
import PropTypes from 'prop-types'
import Banner from './Banner'

function MainPage(props) {
    const [state, setstate] = useState({
        categories: [],
        itemsHit: [],
        itemsAll: [],
        loadding: true,
        loaddingCategories: true,
        loaddingCatalogAll: true
    });

    useEffect(() => {
        const fetchHadlerHit = async () => {
            const response = await fetch('http://localhost:7070/api/top-sales');
            const hit = await response.json();
            console.log(hit);
            setstate(prevstate => ({...prevstate, itemsHit: hit, loadding: false}));
        }
        fetchHadlerHit();
    }, [])

    useEffect(() => {
        const fetchHadlerCategories = async () => {
            const response = await fetch('http://localhost:7070/api/categories');
            const categories = await response.json();
            console.log(categories);
            setstate(prevstate => ({...prevstate, categories: categories, loaddingCategories: false}));
        }
        fetchHadlerCategories();
    }, [])

    useEffect(() => {
        const fetchHadlerCatalogAll = async () => {
            const response = await fetch('http://localhost:7070/api/items');
            const allItems = await response.json();
            console.log(allItems);
            setstate(prevstate => ({...prevstate, itemsAll: allItems, loaddingCatalog: false}));
        }
        fetchHadlerCatalogAll();
    }, [])

    console.log(state);

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Banner />

                    <section className="top-sales">
                        <h2 className="text-center">Хиты продаж!</h2>
                        
                        <div className="row">
                        {state.itemsHit.sort((a, b) => {return a.price - b.price}).map(el =>                         
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

                        {state.loadding ? 
                            <div className="preloader">
                               <span></span>
                               <span></span>
                               <span></span>
                               <span></span>
                            </div> : null}
                    </section>

                    <section className="catalog">
                        <h2 className="text-center">Каталог</h2>

                        {state.categories.length > 0 ? 
                            <ul className="catalog-categories nav justify-content-center">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Все</a>
                                </li>
                                {state.categories.map(el => 
                                    <li key={el.id} className="nav-item">
                                        <a className="nav-link" href="#">{el.title}</a>
                                    </li>
                                )}
                            </ul>

                            
                        : null}

                        
                        
                        <div className="row">
                            {state.itemsAll.map(el => 
                                <div class="col-4">
                                <div class="card catalog-item-card">
                                    <img src={el.images[1]}
                                        class="card-img-top img-fluid" alt="Босоножки 'MYER'" />
                                    <div class="card-body">
                                        <p class="card-text">{el.title}</p>
                                        <p class="card-text">{el.price}</p>
                                        <a href="/products/1.html" class="btn btn-outline-primary">Заказать</a>
                                    </div>
                                </div>
                                </div>    
                            )}
                        </div>

                        <div class="text-center">
                            <button class="btn btn-outline-primary">Загрузить ещё</button>
                        </div>

                        {state.loaddingCatalog ? 
                            <div className="preloader">
                               <span></span>
                               <span></span>
                               <span></span>
                               <span></span>
                            </div> : null}
                    </section>

                </div>
            </div>
        </div>
    )
}

MainPage.propTypes = {

}

export default MainPage

