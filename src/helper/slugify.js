const slugify = (name) => {
  return name.toString().toLowerCase().trim().replace(/&/g, '-and-').replace(/[\s\W-]+/g, '-')
}

export default slugify