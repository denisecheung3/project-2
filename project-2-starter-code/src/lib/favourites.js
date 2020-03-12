function checkFavourites(id) {
  if (localStorage.getItem(id) === null) {
    return false;
  }
  return true;
}

function addFavourite(drink) {
  console.log(drink)
  const { idDrink, strDrink, strDrinkThumb } = drink;
  localStorage.setItem(idDrink, ['favouriteDrink', strDrink, strDrinkThumb]);
}

function removeFavourite(id) {
  localStorage.removeItem(id)
}

function getFavourites() {
  const totalFavourites = []
  const storage = Object.entries(localStorage)
  storage.forEach(entry => {
    entry[1] = entry[1].split(',')
    if (entry[1][0] === 'favouriteDrink') {
      entry[1].shift()
      entry = entry.flat()
      const drink = {
        idDrink: entry[0],
        strDrink: entry[1],
        strDrinkThumb: entry[2]
      }
      totalFavourites.push(drink)
    }
  })
  return totalFavourites
}

export default {
  checkFavourites,
  addFavourite,
  removeFavourite,
  getFavourites
}