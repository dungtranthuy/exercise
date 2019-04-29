import React from 'react'
import CategoryItem from '../CategoryItem/CategoryItem'
import './CategoryList.scss'

const CategoryList = () => {
  return (
    <div className="scroll">
      <ul className="categoryTabs">
        <CategoryItem />
      </ul>
    </div>
  )
}
