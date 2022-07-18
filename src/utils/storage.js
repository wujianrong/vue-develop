const storage = {
  set: (key, value)=> {
      window.localStorage.setItem(key, JSON.stringify(value))
  },
  get: function(key) { 
    const value = window.localStorage.getItem(key)
    if(value === null || value === undefined || value === "") {
        return null
    }
    return JSON.parse(window.localStorage.getItem(key))  
  },
  remove: (key)=> {
      window.localStorage.removeItem(key)
  }
}

export default storage