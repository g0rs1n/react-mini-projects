import { useState } from 'react'
import './app.css'

export default function Paginations () {

    const countries = [
        {
            id: 1,
            name: 'country-1',
        },
        {
            id: 2,
            name: 'country-2',
        },
        {
            id: 3,
            name: 'country-3',
        },
        {
            id: 4,
            name: 'country-4',
        },
        {
            id: 5,
            name: 'country-5',
        },
        {
            id: 6,
            name: 'country-6',
        },
        {
            id: 7,
            name: 'country-7',
        },
        {
            id: 8,
            name: 'country-8',
        },
        {
            id: 9,
            name: 'country-9',
        },
        {
            id: 10,
            name: 'country-10',
        },
        {
            id: 11,
            name: 'country-11',
        },
        {
            id: 12,
            name: 'country-12',
        },
        {
            id: 13,
            name: 'country-13',
        },
        {
            id: 14,
            name: 'country-14',
        },
        {
            id: 15,
            name: 'country-15',
        },
        {
            id: 16,
            name: 'country-16',
        },
        {
            id: 17,
            name: 'country-17',
        },
        {
            id: 18,
            name: 'country-18',
        },
        {
            id: 19,
            name: 'country-19',
        },
        {
            id: 20,
            name: 'country-20',
        },
        {
            id: 21,
            name: 'country-21',
        },
        {
            id: 22,
            name: 'country-22',
        },
        {
            id: 23,
            name: 'country-23',
        },
        {
            id: 24,
            name: 'country-24',
        },
        {
            id: 25,
            name: 'country-25',
        },
    ]

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 10;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = countries.slice(indexOfFirstProduct, indexOfLastProduct)

    const ClickPaginate = (number) => {
        setCurrentPage(number)
    }

    const buttonPrevPage = () => setCurrentPage(prev => prev - 1)
    const buttonNextPage = () => setCurrentPage(prev => prev + 1)

    return (
        <>
            <div className="wrapper-countries">
                {
                    currentProducts.map((country) => {
                        return (
                            <Country
                                country={country}
                                key = {country.id}
                            />
                        )
                    })
                }
                <Pagination 
                    productsPerPage={productsPerPage}
                    totalProducts = {countries.length}
                    ClickPaginate = {ClickPaginate}
                />
                <button onClick={buttonPrevPage} className="btn-prev-pagination">
                    Prev Page
                </button>
                <button onClick={buttonNextPage} className='btn-next-pagination'>
                    Next Page
                </button>
            </div>
        </>
    )
}

function Country ({country, key}) {
    return (
        <>
            <div className="wrapper-country" key={key}>
                <h2>{country.name}</h2>
            </div>
        </>
    )
}

function Pagination ({productsPerPage, totalProducts,ClickPaginate }) {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <>
            <ul className='ul-pagination'>
                {
                    pageNumbers.map((number) => {
                        return (
                            <li onClick={() => ClickPaginate(number)} key={number} className='pagination-item'>
                                {number}
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}