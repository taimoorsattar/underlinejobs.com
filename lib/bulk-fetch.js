import axios from "axios";

export default function bulkFetcher(url) {
    axios.all([
        axios.get('https://remotive.io/api/remote-jobs?limit=5'),
        axios.get('https://jobs.github.com/positions.json')
      ])
      .then(axios.spread((data1, data2) => {
        return [data1, data2];
      }))
      .catch(errors => {
        // react on errors.
        return errors;
      });
}
