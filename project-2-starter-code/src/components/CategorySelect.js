import React from 'react'
import axios from 'axios'

class CategorySelect extends React.Component {
  constructor() {
    super()
    this.state = {
      categories: null
    }
  }

  componentDidMount() {
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
      .then(res => {
        const array = res.data.drinks.sort((a, b) => (a.strCategory > b.strCategory) ? 1 : -1)
        this.setState({ categories: array })
      })
  }

  render() {
    const { categories } = this.state
    if (categories === null) return null
    return <select
      className="select"
      onChange={this.props.onChange}
    >
      {categories.map((category, key) => {
        console.log(category)
        return <option key={key}>{category.strCategory}</option>
      })}
    </select>
  }

}

export default CategorySelect