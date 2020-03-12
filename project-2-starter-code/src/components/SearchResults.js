import React from 'react'
import axios from 'axios'

import Search from './Search'
// reuse DrinkCard?
//depends on which field the user used search/ dropdown / alcoholic or not we need to fetch from different endpoints.. or should it be in handlesubmit in search?
//could write a SearchResultLink() function like in auth.js with a bunch of if statements that returns a link



class SearchResults extends React.Component {
  constructor() {
    super()
    this.state = {
      data: null //this would be an array of the drinks that is returned from search form
    }
  }


  componentDidMount() {
    // const linkToFetch = Search.SearchResultLink()
    // console.log(this.props.location)
    console.log('hi', this.props.location.url)
    // const { url } = this.props.location.state
    // console.log(url)

    // axios.get(url)
    //   .then(res => {
    //     console.log(res)
    //     this.setState({ data: res.data.drinks })
    //   })

  }

  render() {
    // if (!this.state.data) return null
    return < h1 className="title" > Search results</h1 >


  }

}

export default SearchResults