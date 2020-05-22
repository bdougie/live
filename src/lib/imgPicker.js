import laptop from '../../img/_laptop.jpg';
import openSauced from '../../public/sauced2.png';
import friend from '../../public/friend.png';
import actions from '../../public/gh-actions.png';
import bey from '../../public/bey.png';

const images = {
  friend: friend,
  'open-sauced': openSauced,
  actions: actions,
  bey: bey,
};

export default function imgPicker(labels) {
  const label = labels.filter(x => x.node.name !== "publish")[0]
  return label && images[label.node.name] || laptop
}
