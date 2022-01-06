class APIUtils {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }
  search() {
    const artistName = this.queryString.artist;
    if (artistName) {
      this.query = this.query.find({
        artist_name: { $regex: artistName, $options: 'i' },
      });
    }
    return this;
  }
  filter() {
    const queryObj = { ...this.queryString };
    const excludedFields = ['artist', 'page'];
    excludedFields.forEach((field) => delete queryObj[field]);
    this.query = this.query.find(queryObj);
    return this;
  }
  pagination(resultsPerPage) {
    const currentPage = Number(this.queryString.page) || 1;
    this.query = this.query
      .limit(resultsPerPage)
      .skip((currentPage - 1) * resultsPerPage);
    return this;
  }
}

export default APIUtils;
