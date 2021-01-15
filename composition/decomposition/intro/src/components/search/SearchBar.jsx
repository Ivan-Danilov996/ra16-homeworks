//Основной компонент с поиском 

import React from 'react'
import SearchNavigation from './SearchNavigation'
import Search from './Search'
import SearchExample from './SearchExample'

export default function SearchBar() {
    return (
        <section className="search-bar">
            <SearchNavigation/>
            <Search/>
            <SearchExample/>
        </section>
    )
}
