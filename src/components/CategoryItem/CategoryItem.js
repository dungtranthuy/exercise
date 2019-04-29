import React from 'react'

const CategoryItem = props => {
  return (
    <li className="categoryTab">
      <img class="sb-icon sb-icon-fire" src={props.iconUrl} type="svg" />
      <span class="textCategory">{props.name}</span>
    </li>
  )
}

export default CategoryItem
