class APIUtils {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }
  // searcching based on location of the auction
  search() {
    const location = this.queryString.location;
    if (location) {
      this.query = this.query.find({
        location: { $regex: location, $options: 'i' },
      });
    }
    return this;
  }
  filter() {
    const queryObj = { ...this.queryString };
    console.log(queryObj);
    const excludedFields = ['artist'];
    excludedFields.forEach((field) => delete queryObj[field]);
    this.query = this.query.find(queryObj);
    return this;
  }
}

export default APIUtils;
