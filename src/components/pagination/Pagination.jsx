import React, {useEffect, useState} from 'react'
import {Pagination} from "react-bootstrap";

const Paginate = ({currentPage, countPages, setCurrentPage}) => {
    const selectedPage = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    let [arrayPages, setArrayPages] = useState([])

    useEffect(() => {
        let allPages = []
        for (let i = 1; i <= countPages; i++) {
            allPages.push(i);
        }

        setArrayPages(allPages)
        if (currentPage > countPages) {
            setCurrentPage(1)
        }
    }, [countPages, currentPage])

    return (
        <div className='pagination'>
            <Pagination>
                {arrayPages.map((number, index) => (
                    <Pagination.Item
                        key={index + 1}
                        onClick={() => selectedPage(index + 1)}
                        active={index + 1 === currentPage}
                    >
                        {index + 1}
                    </Pagination.Item>
                ))
                }
            </Pagination>
        </div>
    )
}

export default Paginate