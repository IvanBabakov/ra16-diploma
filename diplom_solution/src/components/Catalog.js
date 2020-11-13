import React from 'react'
import PropTypes from 'prop-types'

function Catalog(props) {
    return (
        <main className="container">
        <div className="row">
            <div className="col">
                

                <section className="catalog">
                    <h2 className="text-center">Каталог</h2>

                    <form className="catalog-search-form form-inline">
                        <input className="form-control" placeholder="Поиск" />
                    </form>

                    <ul className="catalog-categories nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Все</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Женская обувь</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Мужская обувь</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Обувь унисекс</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Детская обувь</a>
                        </li>
                    </ul>

                    {/* <div className="col-4">
                        <div className="card catalog-item-card">
                            <img src="https://cdn-images.farfetch-contents.com/12/99/04/32/12990432_13705715_1000.jpg"
                                className="card-img-top img-fluid" alt="Супергеройские кеды" />
                            <div className="card-body">
                                <p className="card-text">Супергеройские кеды</p>
                                <p className="card-text">1 400 руб.</p>
                                <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                            </div>
                        </div>
                    </div> */}
                    <div className="text-center">
                        <button className="btn btn-outline-primary">Загрузить ещё</button>
                    </div>
                </section>

            </div>
        </div>
    </main>
    )
}

Catalog.propTypes = {

}

export default Catalog

