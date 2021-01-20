
import {configure} from '../storybook-react.js';
import * as TestStories from './stories/test.stories.js';

async function run() {
  console.log('run');
  configure(() => [TestStories]);
}

run();
