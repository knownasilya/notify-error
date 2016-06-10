import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  top(i) {
    var res = { comments: [] };

    for (let start = 0; start < 5; start++) {
      res.comments.push({ approved: start % 2 === 0, name: `Comment ${start} of Post ${i}` });
    }

    return res;
  }
});
